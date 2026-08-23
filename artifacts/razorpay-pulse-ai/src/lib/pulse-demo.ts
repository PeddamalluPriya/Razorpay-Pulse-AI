export type DemoCategory = "Food" | "Transport" | "Shopping" | "Subscriptions" | "Income" | "Bills";
export type DemoTransaction = {
  id: string;
  merchant: string;
  category: DemoCategory;
  amount: number;
  date: string;
  method: string;
  direction: "debit" | "credit";
  confidence: number;
  note: string;
};

export const demoTransactions: DemoTransaction[] = [
  { id: "txn_9Q1A", merchant: "Salary Credit", category: "Income", amount: 185000, date: "Today", method: "HDFC •••• 4021", direction: "credit", confidence: 99, note: "Monthly income detected" },
  { id: "txn_9Q1B", merchant: "Amazon", category: "Shopping", amount: 6899, date: "Yesterday", method: "UPI / HDFC", direction: "debit", confidence: 98, note: "Repeat purchase pattern" },
  { id: "txn_9Q1C", merchant: "Netflix", category: "Subscriptions", amount: 649, date: "2 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 97, note: "Monthly recurring" },
  { id: "txn_9Q1D", merchant: "Swiggy", category: "Food", amount: 1248, date: "3 days ago", method: "UPI / HDFC", direction: "debit", confidence: 99, note: "Food delivery" },
  { id: "txn_9Q1E", merchant: "Uber", category: "Transport", amount: 842, date: "3 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 96, note: "Ride-hailing" },
  { id: "txn_9Q1F", merchant: "Starbucks", category: "Food", amount: 735, date: "4 days ago", method: "UPI / HDFC", direction: "debit", confidence: 99, note: "Cafe purchase" },
  { id: "txn_9Q1G", merchant: "Blinkit", category: "Shopping", amount: 2184, date: "5 days ago", method: "UPI / HDFC", direction: "debit", confidence: 98, note: "Quick commerce" },
  { id: "txn_9Q1H", merchant: "Zomato", category: "Food", amount: 1890, date: "6 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 99, note: "Food delivery" },
  { id: "txn_9Q1I", merchant: "Amazon", category: "Shopping", amount: 3499, date: "7 days ago", method: "UPI / HDFC", direction: "debit", confidence: 98, note: "Repeat purchase pattern" },
  { id: "txn_9Q1J", merchant: "Adobe", category: "Subscriptions", amount: 1675, date: "8 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 96, note: "Monthly recurring" },
  { id: "txn_9Q1K", merchant: "Swiggy", category: "Food", amount: 1320, date: "9 days ago", method: "UPI / HDFC", direction: "debit", confidence: 99, note: "Food delivery" },
  { id: "txn_9Q1L", merchant: "Uber", category: "Transport", amount: 1240, date: "10 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 96, note: "Ride-hailing" },
  { id: "txn_9Q1M", merchant: "Zomato", category: "Food", amount: 960, date: "11 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 99, note: "Food delivery" },
  { id: "txn_9Q1N", merchant: "Blinkit", category: "Shopping", amount: 2760, date: "12 days ago", method: "UPI / HDFC", direction: "debit", confidence: 98, note: "Quick commerce" },
  { id: "txn_9Q1O", merchant: "Hotstar", category: "Subscriptions", amount: 299, date: "13 days ago", method: "Visa •••• 4242", direction: "debit", confidence: 94, note: "Monthly recurring" },
];

export const demoTrends = [
  { label: "−14d", value: 8200 }, { label: "−12d", value: 10400 }, { label: "−10d", value: 8900 }, { label: "−8d", value: 14100 },
  { label: "−6d", value: 9700 }, { label: "−4d", value: 12200 }, { label: "−2d", value: 15300 }, { label: "Today", value: 11800 },
];

export const categoryTone: Record<DemoCategory, string> = {
  Food: "bg-orange-400/10 text-orange-200",
  Transport: "bg-sky-400/10 text-sky-200",
  Shopping: "bg-violet-400/10 text-violet-200",
  Subscriptions: "bg-amber-400/10 text-amber-200",
  Income: "bg-emerald-400/10 text-emerald-200",
  Bills: "bg-rose-400/10 text-rose-200",
};

export const demoInsights = [
  { eyebrow: "Pattern 01", title: "Convenience is costing you ₹8,740", detail: "Food delivery appears on 6 of the last 14 days, with a 42% weekend lift. A weekly meal plan could reduce this by roughly ₹2,100.", tone: "primary" },
  { eyebrow: "Pattern 02", title: "Two subscriptions went quiet", detail: "Adobe and Hotstar renewed despite no matching activity in your statement. Review before the next billing cycle.", tone: "accent" },
  { eyebrow: "Pattern 03", title: "Your spend peaks after 7pm", detail: "Evening transactions are 1.8× your daytime average. The spike is concentrated in delivery and quick commerce.", tone: "sky" },
];

export const demoAlerts = [
  { id: "demo-alert-1", severity: "warning" as const, title: "Subscription leakage found", detail: "Adobe and Hotstar look underused but renewed this month.", category: "Recurring spend", timestamp: "12 min ago" },
  { id: "demo-alert-2", severity: "info" as const, title: "Food delivery crossed your monthly baseline", detail: "₹6,153 spent across Swiggy and Zomato, up 28% from your recent baseline.", category: "Spending pattern", timestamp: "1 hr ago" },
  { id: "demo-alert-3", severity: "critical" as const, title: "A new evening spend cluster appeared", detail: "Seven transactions after 7pm account for ₹10,420 this fortnight.", category: "Anomaly", timestamp: "Yesterday" },
];

export const demoTimeline = [
  { date: "Today", title: "Pulse found 2 subscription leaks", detail: "Potential annual recovery: ₹23,688", tone: "accent" },
  { date: "2 days ago", title: "Evening spending pattern confirmed", detail: "Food and quick commerce drive the lift", tone: "primary" },
  { date: "7 days ago", title: "Largest discretionary spend", detail: "₹4,760 across Zomato and Amazon", tone: "sky" },
  { date: "14 days ago", title: "Salary credit detected", detail: "Monthly inflow of ₹1,85,000", tone: "primary" },
];

export const formatINR = (value: number, compact = false) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0, notation: compact ? "compact" : "standard" }).format(value);