import { motion } from "framer-motion";
import { AlertTriangle, ArrowDownRight, BellRing, Radio, Zap } from "lucide-react";
import type { SceneProps } from "./types";

export function SceneIncident({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-incident">
      <motion.div className="incident-label" initial={{ opacity: 0, scale: 0.84 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, type: "spring", stiffness: 300, damping: 24 }}>
        <span className="incident-ping" /><Radio size={14} /> LIVE INCIDENT / 04
      </motion.div>
      <motion.div className="incident-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.7 }}>
        <div className="eyebrow coral">Attention, not alarm.</div>
        <h2>UPI success<br />rate is <em>slipping.</em></h2>
        <p>Pulse caught the change before your settlement report did.</p>
      </motion.div>
      <motion.div className="incident-console film-glass" initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.34, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
        <div className="console-top"><div><span className="console-live"><i /> LIVE</span><b>UPI / PAYMENT HEALTH</b></div><BellRing size={15} /></div>
        <div className="console-stat"><strong>74.8%</strong><span><ArrowDownRight size={13} /> −16.8% vs baseline</span></div>
        <svg viewBox="0 0 430 145" className="incident-chart" preserveAspectRatio="none"><path d="M0 32 C36 29 57 35 83 32 S126 37 154 30 S196 38 218 42 S257 48 278 63 S316 54 332 88 S364 111 387 104 S410 123 430 120" fill="none" stroke="#ff7c66" strokeWidth="3.5" /><path d="M0 32 C36 29 57 35 83 32 S126 37 154 30 S196 38 218 42 S257 48 278 63 S316 54 332 88 S364 111 387 104 S410 123 430 120" fill="none" stroke="#ff3c00" strokeWidth="1" strokeDasharray="3 6" opacity=".55" /></svg>
        <div className="incident-alert"><div className="alert-icon"><AlertTriangle size={17} /></div><div><b>UPI latency spike</b><span>Started 2m 18s ago · 1,284 payments affected</span></div><Zap size={15} className="alert-zap" /></div>
        <div className="console-meta"><span>Root cause confidence</span><b>92%</b></div><div className="confidence-track"><motion.i initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 0.9, duration: 0.8 }} /></div>
      </motion.div>
      <div className="incident-watermark">SIGNAL<br /><span>DETECTED</span></div>
      <div className="scene-progress-copy">MONITORING IN REAL TIME <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}