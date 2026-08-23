import { Link, useLocation } from "wouter";
import { Bell, BrainCircuit, ChevronRight, CircleHelp, CircleDollarSign, Command, FileChartColumnIncreasing, FlaskConical, LayoutDashboard, LogOut, Menu, Moon, UploadCloud, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const navigation = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/transactions", label: "Transactions", icon: UploadCloud },
  { href: "/alerts", label: "Alerts", icon: Bell, count: 3 },
];

const workspace = [
  { href: "/copilot", label: "Merchant copilot", icon: BrainCircuit },
  { href: "/simulator", label: "Leakage simulator", icon: FlaskConical },
  { href: "/credit-cards", label: "Credit intelligence", icon: CircleDollarSign },
];

export function PulseShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profile, setProfile] = useState<{ name: string; business: string } | null>(() => {
    try { return JSON.parse(localStorage.getItem("pulse-profile") ?? "null"); } catch { return null; }
  });
  const initials = profile?.name.split(" ").map((part) => part[0]).join("").slice(0, 2) ?? "P";
  const logout = () => { localStorage.removeItem("pulse-profile"); setProfile(null); window.location.reload(); };
  return (
    <div className="pulse-noise min-h-[100dvh] bg-background text-foreground">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[250px] flex-col border-r border-sidebar-border bg-sidebar px-4 py-5 transition-transform duration-300 md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-center justify-between px-2">
          <Link href="/" data-testid="link-brand" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_22px_hsl(var(--primary)/.18)]">
              <span className="text-lg font-bold tracking-[-.12em]">rp</span>
            </span>
            <span>
              <span className="block font-display text-[15px] font-semibold tracking-[-.03em] text-sidebar-foreground">Razorpay <span className="text-primary">Pulse AI</span></span>
              <span className="font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">financial copilot</span>
            </span>
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close navigation" data-testid="button-close-nav" className="rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground md:hidden"><X size={17} /></button>
        </div>
        <div className="mb-3 px-2 font-mono text-[10px] font-medium uppercase tracking-[.18em] text-muted-foreground">Command center</div>
        <nav className="space-y-1" aria-label="Primary navigation">
          {navigation.map(({ href, label, icon: Icon, count }) => {
            const active = location === href;
            return <Link key={href} href={href} onClick={() => setMobileOpen(false)} data-testid={`link-nav-${label.toLowerCase().replace(" ", "-")}`} className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
              <span className="flex items-center gap-3"><Icon size={16} strokeWidth={active ? 2.2 : 1.7} /><span>{label}</span></span>
              {count ? <span className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{count}</span> : null}
            </Link>;
          })}
        </nav>
          <div className="mb-3 mt-8 px-2 font-mono text-[10px] font-medium uppercase tracking-[.18em] text-muted-foreground">Intelligence</div>
        <nav className="space-y-1">
          {workspace.map(({ href, label, icon: Icon }) => {
            const active = location === href;
            return <Link key={href} href={href} onClick={() => setMobileOpen(false)} data-testid={`link-nav-${label.toLowerCase().replaceAll(" ", "-")}`} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}><Icon size={16} strokeWidth={active ? 2.2 : 1.7} /><span>{label}</span></Link>;
          })}
        </nav>
        <div className="mt-8">
          <Link href="/report" onClick={() => setMobileOpen(false)} data-testid="link-nav-monthly-report" className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium ${location === "/report" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
            <FileChartColumnIncreasing size={16} strokeWidth={location === "/report" ? 2.2 : 1.7} /><span>Monthly report</span>
          </Link>
        </div>
        <div className="mt-auto space-y-3">
          <div className="pulse-grid overflow-hidden rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-3">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-sidebar-foreground"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" /> Live signal</div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">Your financial signal is private, local-first, and ready to explain.</p>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-primary"><span>ALL SYSTEMS NOMINAL</span><ChevronRight size={13} /></div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-sidebar-border bg-sidebar-accent/30 px-3 py-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[#ecb86a] text-[11px] font-bold text-[#19211f]">AM</div>
             <div className="min-w-0"><div className="truncate text-xs font-semibold text-sidebar-foreground">{profile?.name ?? "Demo merchant"}</div><div className="truncate text-[10px] text-muted-foreground">{profile?.business ?? "Financial workspace"}</div></div>
             <button onClick={logout} aria-label="Log out" data-testid="button-logout" className="ml-auto rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"><LogOut size={14} /></button>
          </div>
        </div>
      </aside>
      {mobileOpen ? <button aria-label="Close menu overlay" data-testid="button-close-overlay" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-30 bg-background/70 md:hidden" /> : null}
      <main className="min-h-[100dvh] md:pl-[250px]">
        <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-border/70 bg-background/90 px-5 backdrop-blur-xl md:px-9">
          <button onClick={() => setMobileOpen(true)} aria-label="Open navigation" data-testid="button-open-nav" className="rounded-lg p-2 text-muted-foreground hover:bg-secondary md:hidden"><Menu size={19} /></button>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground md:flex"><span className="text-primary">workspace</span><span>/</span><span>{location === "/" ? "overview" : location.slice(1)}</span></div>
          <div className="ml-auto flex items-center gap-2">
            <button aria-label="Toggle theme" data-testid="button-toggle-theme" className="hidden rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground sm:block"><Moon size={16} /></button>
            <Link href="/alerts" aria-label="View alerts" data-testid="link-header-alerts" className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><Bell size={17} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" /></Link>
            <div className="ml-2 hidden h-7 w-px bg-border sm:block" />
             <div className="ml-1 flex items-center gap-2.5"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#ecb86a] text-[10px] font-bold text-[#19211f]">{initials}</span><span className="hidden text-xs font-medium text-foreground sm:block">{profile?.name ?? "Demo merchant"}</span></div>
          </div>
        </header>
        <div className="px-5 py-7 md:px-9 md:py-9">{children}</div>
      </main>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail?: string; action?: ReactNode }) {
  return <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div><div className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[.22em] text-primary">{eyebrow}</div><h1 className="font-display text-3xl font-semibold tracking-[-.055em] text-foreground md:text-[40px]">{title}</h1>{detail ? <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{detail}</p> : null}</div>
    {action}
  </div>;
}

export function Card({ children, className = "", testId }: { children: ReactNode; className?: string; testId?: string }) {
  return <section data-testid={testId} className={`rounded-2xl border border-card-border bg-card ${className}`}>{children}</section>;
}

export function LoadingState({ label = "Syncing payment signals" }: { label?: string }) {
  return <div className="space-y-4" data-testid="status-loading"><div className="h-5 w-40 animate-pulse rounded bg-secondary" /><div className="grid gap-4 md:grid-cols-3"><div className="h-28 animate-pulse rounded-2xl bg-card" /><div className="h-28 animate-pulse rounded-2xl bg-card" /><div className="h-28 animate-pulse rounded-2xl bg-card" /></div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">{label}...</p></div>;
}

export function EmptyState({ title, detail, action }: { title: string; detail: string; action?: React.ReactNode }) {
  return <div className="pulse-grid flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 text-center" data-testid="status-empty"><div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Command size={19} /></div><h3 className="font-display text-lg font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{detail}</p>{action ? <div className="mt-5">{action}</div> : null}</div>;
}

export function Button({ children, onClick, variant = "primary", disabled = false, testId }: { children: ReactNode; onClick?: () => void; variant?: "primary" | "quiet" | "outline"; disabled?: boolean; testId: string }) {
  return <button onClick={onClick} disabled={disabled} data-testid={testId} className={`inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-xs font-semibold ${variant === "primary" ? "bg-primary text-primary-foreground shadow-[0_7px_20px_hsl(var(--primary)/.12)] hover:-translate-y-0.5 hover:bg-primary/90" : variant === "outline" ? "border border-border bg-transparent text-foreground hover:border-primary/60 hover:bg-primary/5" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"} disabled:cursor-not-allowed disabled:opacity-50`}>{children}</button>;
}