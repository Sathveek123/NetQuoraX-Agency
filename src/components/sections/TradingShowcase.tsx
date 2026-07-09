"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import RepelCard from "@/components/ui/RepelCard";

const BULLETS = [
  "Custom Pine Script development",
  "Automated signal delivery",
  "Full strategy backtesting",
  "Risk-managed execution logic",
];

// ── Candlestick data (hand-crafted realistic-looking price action) ────────────
type Candle = { x: number; open: number; close: number; high: number; low: number; bull: boolean };
const CANDLES: Candle[] = [
  { x: 24,  open: 148, close: 130, high: 125, low: 155, bull: false },
  { x: 48,  open: 130, close: 110, high: 105, low: 134, bull: false },
  { x: 72,  open: 110, close: 125, high: 106, low: 128, bull: true  },
  { x: 96,  open: 125, close: 105, high: 100, low: 128, bull: false },
  { x: 120, open: 105, close: 90,  high: 86,  low: 108, bull: false },
  { x: 144, open: 90,  close: 108, high: 85,  low: 112, bull: true  },
  { x: 168, open: 108, close: 88,  high: 84,  low: 112, bull: false },
  { x: 192, open: 88,  close: 72,  high: 68,  low: 92,  bull: false },
  { x: 216, open: 72,  close: 90,  high: 68,  low: 94,  bull: true  },
  { x: 240, open: 90,  close: 76,  high: 72,  low: 93,  bull: false },
  { x: 264, open: 76,  close: 60,  high: 56,  low: 80,  bull: false },
  { x: 288, open: 60,  close: 78,  high: 56,  low: 82,  bull: true  },
  { x: 312, open: 78,  close: 62,  high: 58,  low: 82,  bull: false },
  { x: 336, open: 62,  close: 46,  high: 42,  low: 66,  bull: false },
  { x: 360, open: 46,  close: 64,  high: 42,  low: 68,  bull: true  },
];

const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TradingShowcase() {
  return (
    <section
      className="py-16 lg:py-[120px] bg-[#F8FAFC]"
      aria-labelledby="trading-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── TEXT SIDE ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
          >
            {/* Trading desk photo */}
            <RepelCard strength={18} stiffness={160} damping={18} className="w-full max-w-[420px] mb-6">
              <motion.div
                variants={headerItem}
                className="relative w-full h-[180px] rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 8px 32px rgba(11,16,32,0.12)" }}
              >
                <img
                  src="/images/trading-desk.png"
                  alt="Professional trading setup with multiple monitors"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.95) contrast(1.05)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
              </motion.div>
            </RepelCard>

            <motion.p variants={headerItem}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              Trading Systems
            </motion.p>
            <motion.h2 variants={headerItem} id="trading-heading"
              className="mt-3 font-display text-[32px] lg:text-[44px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
              Trading Systems Built on Logic, Not Luck
            </motion.h2>
            <motion.p variants={headerItem}
              className="mt-4 text-[16px] text-[#0B1020]/65 leading-[1.6] max-w-[480px]">
              Custom Pine Script strategies, automated signal bots, and backtested indicators — built with the same rigor as any production software, not thrown together from tutorials.
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={headerItem} className="mt-8 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0" aria-hidden="true" />
                  <span className="text-[14px] text-[#0B1020]/75">{b}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={headerItem} className="mt-8">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#2563EB] hover:gap-3 transition-all duration-200"
              >
                Explore Trading Solutions
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-200" />
              </a>
            </motion.div>

            {/* Trading Risk Disclosure inline */}
            <motion.p variants={headerItem} className="mt-6 text-[11px] text-[#0B1020]/45 dark:text-white/40 leading-relaxed max-w-[480px]">
              <strong>Risk Disclosure:</strong> Trading involves substantial risk of loss. Backtested and historical performance results (68% win rate shown) do not guarantee future results. NetQuorax builds and delivers trading system logic as a technology product service; we are not a registered investment advisor, and nothing here constitutes financial advice.
            </motion.p>
          </motion.div>

          {/* ── DASHBOARD MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ rotate: -2 }}
            className="relative"
          >
            <div
              className="bg-white rounded-[24px] p-6"
              style={{
                border: "1px solid rgba(11,16,32,0.08)",
                boxShadow: "0 24px 60px rgba(11,16,32,0.10)",
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/40" />
                <span className="flex-1 mx-3 h-5 rounded-md bg-slate-100 text-[10px] text-slate-400 flex items-center px-2">
                  netquorax.com/signals
                </span>
              </div>

              {/* Chart area */}
              <div className="relative bg-[#F8FAFC] rounded-xl p-4 mb-4 overflow-hidden">
                {/* Grid lines */}
                {[40, 80, 120, 160].map((y) => (
                  <div
                    key={y}
                    className="absolute left-0 right-0"
                    style={{ top: y, height: 1, background: "rgba(11,16,32,0.04)" }}
                  />
                ))}

                <svg viewBox="0 0 390 200" className="w-full h-40" aria-label="Trading chart">
                  <defs>
                    <linearGradient id="maGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>

                  {/* Candlesticks */}
                  {CANDLES.map((c, i) => (
                    <motion.g
                      key={i}
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.04, ease: "easeOut" }}
                      style={{ transformOrigin: `${c.x}px 200px` }}
                    >
                      {/* Wick */}
                      <line
                        x1={c.x} y1={c.high} x2={c.x} y2={c.low}
                        stroke={c.bull ? "#10B981" : "#EF4444"} strokeWidth="1.2"
                      />
                      {/* Body */}
                      <rect
                        x={c.x - 7} y={Math.min(c.open, c.close)}
                        width={14} height={Math.abs(c.open - c.close) || 2}
                        rx="2"
                        fill={c.bull ? "#10B981" : "#EF4444"}
                        fillOpacity={0.85}
                      />
                    </motion.g>
                  ))}

                  {/* Moving average */}
                  <motion.path
                    d="M 24 142 Q 60 128 96 118 T 168 95 T 240 78 T 312 66 T 360 52"
                    fill="none" stroke="url(#maGrad)" strokeWidth="1.5" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>

                {/* Price label */}
                <div className="absolute top-3 right-3 bg-[#0B1020] text-white text-[10px] font-bold px-2 py-1 rounded-md">
                  $1.0847
                </div>

                {/* Signal card — floating */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-3 left-3 bg-white rounded-xl shadow-lg p-3 min-w-[130px]"
                  style={{ borderLeft: "4px solid #10B981" }}
                >
                  <p className="text-[10px] font-bold text-[#10B981]">▲ BUY EUR/USD</p>
                  <p className="text-[10px] text-[#0B1020]/60 mt-1">Confidence</p>
                  <div className="mt-1 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full" style={{ width: "87%" }} />
                  </div>
                  <p className="text-[10px] font-bold text-[#0B1020] mt-1">87%</p>
                </motion.div>
              </div>

              {/* Backtest stats strip */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 text-center">
                {[
                  { label: "Win Rate",    value: "68%"   },
                  { label: "Total Trades",value: "142"   },
                  { label: "Avg R:R",     value: "1:2.4" },
                ].map((s) => (
                  <div key={s.label} className="px-3 py-2">
                    <p className="text-[10px] text-[#0B1020]/50">{s.label}</p>
                    <p className="text-[15px] font-extrabold text-[#0B1020] mt-0.5 font-display">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
