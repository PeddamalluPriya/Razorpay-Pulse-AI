import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, BrainCircuit, ChevronRight, CircleDollarSign, Gauge, Menu, WalletCards } from "lucide-react";
import type { SceneProps } from "./types";

const kpis = [
  { label: "Approval health", value: "91.6%", delta: "+4.2%", icon: Gauge, tone: "mint" },
  { label: "Revenue protected", value: "₹8.42L", delta: "+12.8%", icon: CircleDollarSign, tone: "orange" },
  { label: "Risk confidence", value: "87.4", delta: "Low drift", icon: BrainCircuit, tone: "lilac" },
];

export function SceneCommand({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-command">
      <motion.div className="command-headline" initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <div className="film-kicker"><span className="film-kicker-dot mint" /> COMMAND CENTER / 03</div>
        <h2>See what<br /><em>moves money.</em></h2>
      </motion.div>
      <motion.div className="dashboard-window" initial={{ opacity: 0, y: 36, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.22, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <div className="dash-topbar"><div className="dash-brand"><span className="mini-mark">rp</span><span>Pulse <b>AI</b></span></div><span className="dash-date">Last 30 days <ChevronRight size={12} /></span><div className="dash-avatar">PP</div></div>
        <div className="dash-body">
          <aside className="dash-rail"><Menu size={15} /><div className="rail-active"><BarChart3 size={14} /></div><WalletCards size={14} /><BrainCircuit size={14} /><div className="rail-spacer" /><div className="rail-dot" /></aside>
          <main className="dash-main">
            <div className="dash-welcome"><div><span>MONDAY, 14 OCTOBER 2024</span><h3>Good morning, Priya.</h3></div><div className="live-chip"><i /> LIVE SCAN</div></div>
            <div className="kpi-grid">{kpis.map(({ label, value, delta, icon: Icon, tone }, index) => <motion.div key={label} className={`kpi-card kpi-${tone}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + index * 0.13, duration: 0.5 }}><div className="kpi-label"><Icon size={13} /> {label}</div><strong>{value}</strong><span><ArrowUpRight size={11} /> {delta}</span></motion.div>)}</div>
            <div className="dash-lower">
              <div className="chart-card"><div className="chart-title"><span>Payment performance</span><small>₹ 12.6L volume</small></div><svg viewBox="0 0 510 150" className="dash-chart" preserveAspectRatio="none"><path d="M0 122 C34 112 44 126 72 104 S113 105 142 83 S179 92 205 76 S246 74 275 57 S318 76 342 46 S380 64 412 37 S460 49 510 20" fill="none" stroke="#9fe7e0" strokeWidth="3" /><path d="M0 122 C34 112 44 126 72 104 S113 105 142 83 S179 92 205 76 S246 74 275 57 S318 76 342 46 S380 64 412 37 S460 49 510 20 V150 H0Z" fill="url(#chartFade)" opacity=".34" /><defs><linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#9fe7e0" /><stop offset="1" stopColor="#9fe7e0" stopOpacity="0" /></linearGradient></defs></svg><div className="chart-axis"><span>01 OCT</span><span>07 OCT</span><span>14 OCT</span></div></div>
              <div className="insight-card"><div className="insight-cap"><BrainCircuit size={14} /> PULSE INSIGHT</div><p>“Your evening approval dip is concentrated in UPI.”</p><div className="insight-foot">Explain this signal <ArrowUpRight size={13} /></div></div>
            </div>
          </main>
        </div>
      </motion.div>
      <div className="scene-progress-copy scene-progress-right">FINANCIAL INTELLIGENCE <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}