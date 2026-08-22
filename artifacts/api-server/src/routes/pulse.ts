import { Router, type IRouter } from "express";
import {
  AskPulseCopilotBody,
  GetPulseAlertsResponse,
  GetPulseOverviewResponse,
  GetPulseRiskDriversResponse,
  GetPulseTrendsResponse,
  SimulatePulseRecoveryBody,
  SimulatePulseRecoveryResponse,
  AskPulseCopilotResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const overview = {
  volume: 128436,
  approvalRate: 94.2,
  failureRate: 5.8,
  fraudRisk: 1.7,
  revenueLeakage: 1842000,
  chargebackRisk: 0.42,
  totalRevenue: 48200000,
  successfulRevenue: 45398640,
  periodLabel: "Last 30 days",
};

const trends = [
  { label: "Jul 25", approvalRate: 92.8, failureRate: 7.2, revenue: 1.32 },
  { label: "Jul 29", approvalRate: 93.4, failureRate: 6.6, revenue: 1.48 },
  { label: "Aug 02", approvalRate: 94.1, failureRate: 5.9, revenue: 1.56 },
  { label: "Aug 06", approvalRate: 93.7, failureRate: 6.3, revenue: 1.44 },
  { label: "Aug 10", approvalRate: 94.6, failureRate: 5.4, revenue: 1.67 },
  { label: "Aug 14", approvalRate: 95.1, failureRate: 4.9, revenue: 1.74 },
  { label: "Aug 18", approvalRate: 94.2, failureRate: 5.8, revenue: 1.61 },
  { label: "Aug 22", approvalRate: 95.4, failureRate: 4.6, revenue: 1.83 },
];

const riskDrivers = [
  { feature: "Retry count", impact: 0.82, direction: "up" as const, explanation: "Transactions with 3+ retries are 4.2× more likely to be fraudulent." },
  { feature: "New device", impact: 0.64, direction: "up" as const, explanation: "First-seen devices account for 61% of suspicious activity this period." },
  { feature: "Transaction amount", impact: 0.48, direction: "up" as const, explanation: "Amounts above ₹25,000 correlate with elevated chargeback risk." },
  { feature: "Customer age", impact: 0.19, direction: "down" as const, explanation: "Verified returning customers reduce the predicted risk score." },
  { feature: "Location match", impact: 0.14, direction: "down" as const, explanation: "Device and billing location alignment is a strong trust signal." },
];

const alerts = [
  { id: "al_001", severity: "critical" as const, title: "Fraud spike detected", detail: "Suspicious transactions rose 38% for UPI between 02:00–04:00 IST.", timestamp: "12 min ago", category: "Fraud" },
  { id: "al_002", severity: "warning" as const, title: "HDFC Bank failure pattern", detail: "Failure rate is 2.1× above baseline for cards in the last 90 minutes.", timestamp: "48 min ago", category: "Bank outage" },
  { id: "al_003", severity: "warning" as const, title: "Retry anomaly", detail: "Repeat attempts are concentrated on checkout v3 from Android devices.", timestamp: "2 hr ago", category: "Retries" },
  { id: "al_004", severity: "info" as const, title: "Approval rate improving", detail: "Approval rate is up 1.4 percentage points compared to the previous period.", timestamp: "Yesterday", category: "Performance" },
];

router.get("/pulse/overview", (_req, res) => {
  res.json(GetPulseOverviewResponse.parse(overview));
});

router.get("/pulse/trends", (_req, res) => {
  res.json(GetPulseTrendsResponse.parse(trends));
});

router.get("/pulse/risk-drivers", (_req, res) => {
  res.json(GetPulseRiskDriversResponse.parse(riskDrivers));
});

router.get("/pulse/alerts", (_req, res) => {
  res.json(GetPulseAlertsResponse.parse(alerts));
});

router.post("/pulse/copilot", (req, res) => {
  const { question } = AskPulseCopilotBody.parse(req.body);
  const normalized = question.toLowerCase();
  let answer = "Your highest-impact opportunity is reducing checkout failures from HDFC cards. A 2% improvement would recover roughly ₹3.7L per month, while keeping fraud risk flat.";
  if (normalized.includes("yesterday") || normalized.includes("failure")) {
    answer = "Failures increased primarily during the 02:00–04:00 IST window, led by HDFC card declines. The pattern looks like a bank-side degradation rather than a checkout regression.";
  } else if (normalized.includes("method")) {
    answer = "Cards are currently hurting revenue most: they represent 46% of failed payment value, with HDFC contributing the largest share. Prioritize smart routing for high-value card attempts.";
  } else if (normalized.includes("optimize") || normalized.includes("first")) {
    answer = "Start with smart routing for HDFC cards, then tune retry timing for Android users. Together those two actions target ₹5.2L in monthly leakage without loosening fraud controls.";
  }
  res.json(AskPulseCopilotResponse.parse({
    answer,
    sources: ["Pulse overview · last 30 days", "Failure trend by bank and hour", "SHAP risk driver analysis"],
  }));
});

router.post("/pulse/simulate", (req, res) => {
  const { failureReduction } = SimulatePulseRecoveryBody.parse(req.body);
  res.json(SimulatePulseRecoveryResponse.parse({
    failureReduction,
    recoveredMonthlyRevenue: Math.round(overview.totalRevenue * (failureReduction / 100) * 0.68),
    recoveredAnnualRevenue: Math.round(overview.totalRevenue * (failureReduction / 100) * 0.68 * 12),
  }));
});

export default router;