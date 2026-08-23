import { motion } from "framer-motion";
import { Activity, Check, CircleDashed, Database, Fingerprint, Layers3, Radar } from "lucide-react";
import type { SceneProps } from "./types";

const scanRows = [
  { icon: Database, label: "Transactions", value: "18,492", color: "mint" },
  { icon: Layers3, label: "Payment rails", value: "04 connected", color: "orange" },
  { icon: Fingerprint, label: "Risk patterns", value: "62 detected", color: "lilac" },
  { icon: Activity, label: "Failure signals", value: "Live stream", color: "coral" },
];

export function SceneScan({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-scan">
      <div className="scan-copy">
        <motion.div className="film-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          <span className="film-kicker-dot orange" /> ECOSYSTEM SCAN / 02
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }}>
          One scan.<br /><em>Every signal.</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6 }}>
          Pulse maps the whole payment flow before you ask the first question.
        </motion.p>
      </div>
      <motion.div className="scan-hub" initial={{ opacity: 0, scale: 0.65 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
        <div className="scan-hub-glow" />
        <div className="scan-hub-ring ring-one" />
        <div className="scan-hub-ring ring-two" />
        <div className="scan-hub-core"><Radar size={30} /><span>PULSE<br />ENGINE</span></div>
        <motion.div className="scan-sweep" animate={{ rotate: 360 }} transition={{ duration: 2.3, repeat: Infinity, ease: "linear" }} />
      </motion.div>
      <div className="scan-list">
        {scanRows.map(({ icon: Icon, label, value, color }, index) => (
          <motion.div key={label} className={`scan-row scan-${color}`} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.18, duration: 0.55 }}>
            <div className="scan-row-icon"><Icon size={14} /></div>
            <div><strong>{label}</strong><span>{value}</span></div>
            <motion.div className="scan-check" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + index * 0.18, type: "spring", stiffness: 380, damping: 22 }}><Check size={11} /></motion.div>
          </motion.div>
        ))}
      </div>
      <div className="scan-bottom-line"><CircleDashed size={12} /> LEARNING YOUR BASELINE <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}