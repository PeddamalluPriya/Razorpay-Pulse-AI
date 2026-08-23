import { useEffect, useState, type ReactNode } from "react";
import { BrainCircuit } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { PulseShell } from "@/components/pulse-shell";
import { Alerts, Copilot, CreditCardIntelligence, Overview, Report, Simulator, Transactions } from "@/pages/pulse-pages";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <PulseShell><Switch><Route path="/" component={Overview} /><Route path="/transactions" component={Transactions} /><Route path="/alerts" component={Alerts} /><Route path="/copilot" component={Copilot} /><Route path="/simulator" component={Simulator} /><Route path="/credit-cards" component={CreditCardIntelligence} /><Route path="/report" component={Report} /><Route component={NotFound} /></Switch></PulseShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const [profile, setProfile] = useState<{ name: string; business: string; mobile: string } | null>(() => {
    try { return JSON.parse(localStorage.getItem("pulse-profile") ?? "null"); } catch { return null; }
  });
  const [scanning, setScanning] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const profiles: Record<string, { name: string; business: string }> = {
    "9876543210": { name: "Priya Peddamallu", business: "Fashion Merchant" },
    "9123456789": { name: "Rahul Sharma", business: "Electronics Store" },
    "9000000001": { name: "Sneha Reddy", business: "Restaurant" },
  };
  const login = () => { if (profiles[mobile]) setStep("otp"); };
  const verify = () => {
    const user = profiles[mobile];
    if (user && otp === "123456") {
      const next = { ...user, mobile };
      localStorage.setItem("pulse-profile", JSON.stringify(next));
      setScanning(true);
      window.setTimeout(() => { setProfile(next); setScanning(false); }, 4000);
    }
  };
  useEffect(() => { document.title = profile ? "Pulse Command Center · Razorpay Pulse AI" : "Razorpay Pulse AI · Financial Intelligence Copilot"; }, [profile]);
  if (!profile) return <AuthScreen mobile={mobile} otp={otp} step={step} setMobile={setMobile} setOtp={setOtp} onLogin={login} onVerify={verify} onBack={() => setStep("mobile")} />;
  if (scanning) return <ScanScreen />;
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function AuthScreen({ mobile, otp, step, setMobile, setOtp, onLogin, onVerify, onBack }: { mobile: string; otp: string; step: "mobile" | "otp"; setMobile: (v: string) => void; setOtp: (v: string) => void; onLogin: () => void; onVerify: () => void; onBack: () => void }) {
  return <div className="min-h-[100dvh] bg-background px-5 py-10 text-foreground"><div className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-5xl items-center justify-center"><div className="grid w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:grid-cols-[1.05fr_.95fr]"><div className="hero-wash hidden flex-col justify-between p-10 lg:flex"><div><div className="mb-10 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">rp</span><span className="font-display text-lg font-semibold">Razorpay <span className="text-primary">Pulse AI</span></span></div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Financial intelligence copilot</div><h1 className="mt-4 max-w-md font-display text-5xl font-semibold leading-[1.02] tracking-[-.065em]">Your money, explained.</h1><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">Import your statement once. See patterns, recover leakage, and make your next financial decision with confidence.</p></div><div className="grid grid-cols-3 gap-3 text-[11px] text-muted-foreground"><span>Explainable AI</span><span>Local-first demo</span><span>Built for builders</span></div></div><div className="p-7 sm:p-10"><div className="mb-10 lg:hidden"><div className="font-display text-lg font-semibold">Razorpay <span className="text-primary">Pulse AI</span></div></div><div className="mb-7"><div className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Secure demo access</div><h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.055em]">{step === "mobile" ? "Welcome back." : "Verify your number."}</h2><p className="mt-2 text-sm text-muted-foreground">{step === "mobile" ? "Use a demo merchant profile to enter your private command center." : `We sent a 6-digit demo OTP to +91 ${mobile}.`}</p></div>{step === "mobile" ? <><label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Mobile number</label><input value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="9876543210" data-testid="input-mobile" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /><button onClick={onLogin} disabled={mobile.length !== 10} data-testid="button-send-otp" className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-40">Continue</button><p className="mt-5 text-center text-[11px] text-muted-foreground">Demo numbers: 9876543210 · 9123456789 · 9000000001</p></> : <><label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">One-time password</label><input autoFocus inputMode="numeric" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="123456" data-testid="input-otp" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-center font-mono text-xl tracking-[.35em] outline-none focus:border-primary" /><button onClick={onVerify} disabled={otp.length !== 6} data-testid="button-verify-otp" className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-40">Verify & open Pulse</button><button onClick={onBack} data-testid="button-back-mobile" className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground hover:text-foreground">Use a different number</button><p className="mt-5 text-center text-[11px] text-muted-foreground">Demo OTP: <span className="font-mono text-primary">123456</span></p></>}</div></div></div></div>;
}

function ScanScreen() {
  const items = ["Importing transactions", "Detecting merchants", "Running fraud analysis", "Predicting payment failures", "Calculating Pulse Score", "Generating AI insights"];
  const [done, setDone] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setDone((n) => Math.min(6, n + 1)), 650); return () => window.clearInterval(timer); }, []);
  return <div className="flex min-h-[100dvh] items-center justify-center bg-background px-5 text-foreground"><div className="w-full max-w-lg text-center"><div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-3xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_55px_hsl(var(--primary)/.18)]"><BrainCircuit size={34} className="animate-pulse" /></div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Pulse AI is preparing your workspace</div><h1 className="mt-4 font-display text-3xl font-semibold tracking-[-.055em]">Analyzing your payment ecosystem...</h1><div className="mx-auto mt-8 max-w-sm space-y-2 text-left">{items.map((item, index) => <div key={item} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-xs transition-all duration-500 ${index < done ? "border-primary/25 bg-primary/5 text-foreground" : "border-border text-muted-foreground"}`}><span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${index < done ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>{index < done ? "✓" : index + 1}</span>{item}</div>)}</div></div></div>;
}

export default App;
