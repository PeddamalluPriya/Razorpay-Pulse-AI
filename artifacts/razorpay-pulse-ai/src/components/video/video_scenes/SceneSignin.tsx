import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import type { SceneProps } from "./types";

export function SceneSignin({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-signin">
      <motion.div className="film-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="film-kicker-dot" /> MERCHANT ACCESS / 01
      </motion.div>
      <motion.div className="signin-copy" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <div className="eyebrow">A payment ecosystem, finally legible.</div>
        <h1>Make every<br /><em>signal</em> count.</h1>
        <p>Pulse turns payment noise into the next clear move.</p>
      </motion.div>
      <motion.div className="signin-card film-glass" initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}>
        <div className="signin-card-top">
          <span className="mini-mark">rp</span>
          <span className="micro-label">Pulse AI</span>
          <ShieldCheck size={16} className="signin-shield" />
        </div>
        <div className="signin-card-title">Welcome back, Priya.</div>
        <div className="signin-card-subtitle">Your financial intelligence workspace is ready.</div>
        <div className="fake-field"><span>+91</span><b>98765 43210</b><i /></div>
        <div className="fake-field fake-otp"><span>OTP</span><b>••••••</b><i /></div>
        <div className="fake-continue"><span>Open Pulse</span><span className="arrow">↗</span></div>
        <div className="signin-foot"><Sparkles size={12} /> Secure demo access <span>LOCAL-FIRST</span></div>
      </motion.div>
      <motion.div className="signin-orbit" animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}>
        <span />
      </motion.div>
      <div className="scene-progress-copy">SIGNING IN <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}