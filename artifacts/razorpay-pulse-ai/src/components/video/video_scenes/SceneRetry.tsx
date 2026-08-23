import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import type { SceneProps } from "./types";

export function SceneRetry({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-retry">
      <motion.div className="retry-copy" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <div className="film-kicker"><span className="film-kicker-dot orange" /> SMART RETRY / 05</div>
        <h2>Don&apos;t just<br /><em>spot the leak.</em></h2>
        <p>Give the right payments another way through.</p>
      </motion.div>
      <motion.div className="retry-flow" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
        <div className="flow-node flow-upi"><span className="node-logo">U</span><b>UPI</b><small>declined</small></div>
        <div className="flow-connector"><motion.i animate={{ x: [0, 104, 0] }} transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }} /><ArrowRight size={17} /></div>
        <div className="flow-engine"><div className="engine-ring"><RefreshCw size={19} /></div><b>Smart Retry</b><small>best path found</small></div>
        <div className="flow-connector connector-right"><motion.i animate={{ x: [0, 104, 0] }} transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} /><ArrowRight size={17} /></div>
        <div className="flow-node flow-recovered"><span className="node-logo"><CheckCircle2 size={18} /></span><b>Approved</b><small>recovered</small></div>
      </motion.div>
      <div className="retry-metrics">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}><span>Approval health</span><strong>74.8% <em>→</em> 91.6%</strong></motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}><span>Recovered today</span><strong>₹48,260</strong></motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}><span>Confidence</span><strong><ShieldCheck size={15} /> High</strong></motion.div>
      </div>
      <div className="retry-note"><Sparkles size={13} /> Pulse actioned the insight while you watched the dashboard.</div>
      <div className="scene-progress-copy scene-progress-right">RECOVERY IN MOTION <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}