"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  UserPlus, Database, Bot, MessageCircle,
  DollarSign, CreditCard, BarChart3,
} from "lucide-react";

// ── NODES ─────────────────────────────────────────────────────────────────────
const NODES = [
  { label: "Lead",      Icon: UserPlus,      color: "#2563EB", desc: "Captured from ads, forms & referrals" },
  { label: "CRM",       Icon: Database,      color: "#4F46E5", desc: "Auto-synced, deduplicated, tagged" },
  { label: "AI Agent",  Icon: Bot,           color: "#7C3AED", desc: "Qualifies & scores automatically" },
  { label: "WhatsApp",  Icon: MessageCircle, color: "#A78BFA", desc: "Personalized follow-up sent instantly" },
  { label: "Sales",     Icon: DollarSign,    color: "#06B6D4", desc: "Booked calls, no manual scheduling" },
  { label: "Payments",  Icon: CreditCard,    color: "#0891B2", desc: "Invoiced & reconciled automatically" },
  { label: "Analytics", Icon: BarChart3,     color: "#0E7490", desc: "Full-funnel visibility, real-time" },
] as const;

const N = NODES.length;
const NODE_W = 88;    // px width per node card
const NODE_H = 88;    // px height per node card
const GAP    = 40;    // px horizontal gap between nodes

// Desktop row total width
const ROW_W = N * NODE_W + (N - 1) * GAP;
// Node horizontal centers
const nodeX = (i: number) => i * (NODE_W + GAP) + NODE_W / 2;
const NODE_CY = 90;   // vertical center of nodes/lines (leaves space for tooltips above)

export default function AutomationFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  const [stage, setStage] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    if (media.matches) {
      setStage(14);
    }
  }, []);

  useEffect(() => {
    if (inView && stage === 0 && !reducedMotion) {
      setStage(1);
    }
  }, [inView, stage, reducedMotion]);

  const currentStage = reducedMotion ? 14 : stage;
  const showPulse = currentStage >= 13 && !reducedMotion;

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-[120px] bg-[#0B1020] overflow-hidden relative"
      aria-labelledby="automation-heading"
    >
      {/* Server room background — very dark/faded */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/images/server-room.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.07, filter: "grayscale(0.4) brightness(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/90 via-[#0B1020]/70 to-[#0B1020]/95" />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-[600px] mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#C4B5FD]"
          >
            AI & Automation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="automation-heading"
            className="mt-3 font-display text-[32px] lg:text-[48px] font-semibold tracking-tight text-white leading-[1.1]"
          >
            Automation That Actually Runs Your Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[16px] text-white/70 max-w-[480px] leading-relaxed"
          >
            Seven touchpoints, zero manual handoffs — from the first lead to the final invoice.
          </motion.p>
        </div>

        {/* Flow diagram — horizontal desktop, scrollable */}
        <div className="overflow-x-auto pb-6 relative" style={{ scrollbarWidth: "none" }}>
          <div
            className="relative mx-auto"
            style={{
              width: ROW_W,
              height: 180,
              minWidth: ROW_W,
            }}
          >
            {/* SVG connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${ROW_W} 180`}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#2563EB" />
                  <stop offset="50%"  stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {/* Connector line segments */}
              {NODES.slice(0, -1).map((_, i) => {
                const x1 = nodeX(i) + NODE_W / 2;     // right edge of node i
                const x2 = nodeX(i + 1) - NODE_W / 2; // left edge of node i+1
                const y  = NODE_CY;
                const midX = (x1 + x2) / 2;

                return (
                  <g key={i}>
                    {/* Background line segment */}
                    <line
                      x1={x1} y1={y} x2={x2} y2={y}
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="2"
                    />
                    {/* Animated foreground path */}
                    <motion.path
                      d={`M ${x1} ${y} L ${x2} ${y}`}
                      stroke="url(#flowGrad)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={currentStage >= 2 * i + 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                      transition={reducedMotion ? { duration: 0 } : {
                        pathLength: { duration: 0.35, ease: "easeInOut" },
                        opacity:    { duration: 0.1 }
                      }}
                      onAnimationComplete={() => {
                        if (stage === 2 * i + 2) {
                          setStage(2 * i + 3);
                        }
                      }}
                    />
                    {/* Directional chevron */}
                    <path
                      d={`M ${midX - 3} ${y - 4} L ${midX + 2} ${y} L ${midX - 3} ${y + 4}`}
                      stroke="url(#flowGrad)"
                      strokeWidth="1.5"
                      fill="none"
                      opacity={currentStage >= 2 * i + 2 ? 0.6 : 0}
                      style={{ transition: "opacity 0.20s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Nodes Container */}
            <div className="absolute inset-0 flex items-center justify-between px-0 pointer-events-none">
              {NODES.map((node, i) => {
                const isActive = currentStage >= 2 * i + 1;
                const isHovered = hoveredIdx === i;

                return (
                  <div
                    key={node.label}
                    className="relative flex flex-col items-center select-none"
                    style={{ width: NODE_W, transform: `translateY(${NODE_CY - 90}px)` }}
                  >
                    {/* Tooltip Card (Desktop only, hovered) */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 6, x: "-50%" }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 mb-3 bg-[#111827] border border-white/10 rounded-lg px-3.5 py-2 text-[12px] text-white/80 whitespace-nowrap z-50 pointer-events-none text-center"
                          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
                        >
                          {node.desc}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#111827]" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Node Card wrapper */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                      onAnimationComplete={() => {
                        if (stage === 2 * i + 1 && stage < 13) {
                          setStage(2 * i + 2);
                        }
                      }}
                      whileHover={isActive ? {
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.07)",
                        borderColor: `${node.color}4D`,
                        boxShadow: `0 0 24px ${node.color}33`,
                      } : {}}
                      onMouseEnter={() => isActive && setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center rounded-2xl cursor-pointer pointer-events-auto group"
                      style={{
                        width: NODE_W,
                        height: NODE_H,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <node.Icon
                        size={26}
                        color={node.color}
                        className="transition-transform duration-300 group-hover:rotate-6"
                        aria-hidden="true"
                      />
                    </motion.div>

                    <span className="text-[13px] font-medium text-white/75 text-center mt-3 block">
                      {node.label}
                    </span>

                    {/* Mobile only micro-descriptor */}
                    <span className="text-[10px] text-white/40 text-center mt-1 block md:hidden max-w-[80px]">
                      {node.desc}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Traveling Data Pulse */}
            {showPulse && (
              <motion.div
                aria-hidden="true"
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 8,
                  height: 8,
                  top: NODE_CY - 4,
                  background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                  boxShadow: "0 0 12px rgba(6,182,212,0.8), 0 0 4px rgba(37,99,235,0.9)",
                }}
                initial={{ left: nodeX(0), opacity: 0 }}
                animate={{
                  left: [nodeX(0), nodeX(N - 1)],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.05, 0.95, 1],
                }}
              />
            )}
          </div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center text-[14px] text-white/50"
        >
          Each stage is handled automatically — no spreadsheet handoffs, no chasing people for updates.
        </motion.p>

        {/* Stat strip (Issue 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto border-t border-white/10 pt-8"
        >
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            {[
              { value: "70%", label: "Faster Response Time" },
              { value: "Zero", label: "Manual Handoffs" },
              { value: "24/7", label: "Active Coverage" },
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <span className="block text-[24px] lg:text-[28px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]">
                  {stat.value}
                </span>
                <span className="block text-[12px] text-white/50 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
