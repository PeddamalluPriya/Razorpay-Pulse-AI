import { motion } from "framer-motion";
import { ArrowUpRight, Check, FileText, Sparkles } from "lucide-react";
import type { SceneProps } from "./types";

export function SceneBrief({ progress }: SceneProps) {
  return (
    <div className="film-scene film-scene-brief">
      <motion.div className="brief-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
        <div className="film-kicker"><span className="film-kicker-dot mint" /> EXECUTIVE BRIEF / 06</div>
        <h2>From signal<br />to <em>next move.</em></h2>
        <p>One concise brief for the people who need the why, not another dashboard.</p>
      </motion.div>
      <motion.div className="brief-sheet" initial={{ opacity: 0, y: 42, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.24, duration: 0.88, ease: [0.16, 1, 0.3, 1] }}>
        <div className="sheet-head"><div className="sheet-brand"><span className="mini-mark">rp</span><b>Pulse AI</b></div><span>14 OCT 2024</span></div>
        <div className="sheet-title"><span>WEEKLY EXECUTIVE BRIEF</span><h3>The payment picture<br /><em>in one minute.</em></h3></div>
        <div className="sheet-highlight"><div className="sheet-icon"><Sparkles size={16} /></div><div><b>UPI recovery is live</b><span>₹48,260 recovered after Smart Retry activated.</span></div><Check size={15} /></div>
        <div className="sheet-grid"><div><span>KEY SIGNAL</span><b>Approval health</b><strong>91.6%</strong></div><div><span>NEXT MOVE</span><b>Protect evening UPI</b><strong>+₹1.2L est.</strong></div></div>
        <div className="sheet-footer"><span>Prepared by Pulse AI · Explainable by design</span><ArrowUpRight size={15} /></div>
      </motion.div>
      <motion.div className="brief-lockup" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.15, duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}>
        <span className="lockup-mark">rp</span><span>Razorpay <b>Pulse AI</b></span>
      </motion.div>
      <div className="brief-file"><FileText size={13} /> BRIEF READY / 01</div>
      <div className="scene-progress-copy scene-progress-right">CLOSE THE LOOP <span>{Math.round(progress * 100)}%</span></div>
    </div>
  );
}