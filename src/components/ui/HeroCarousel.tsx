"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── SHARED LAYOUT PRIMITIVES ──────────────────────────────────────────────
const NAVY = "#0d1220";
const BLUE = "#3b82f6";
const GREEN = "#22c55e";
const RED = "#ef4444";
const MUTED = "#64748b";
const TEXT = "#f1f5f9";

function StatCard({ label, value, color = TEXT }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex flex-col py-2 px-3 bg-white/5 rounded-lg border border-white/8">
      <span className="text-[9px] font-semibold tracking-wider uppercase" style={{ color: MUTED }}>
        {label}
      </span>
      <span className="text-[16px] font-bold mt-0.5 tabular-nums" style={{ color }}>
        {value}
      </span>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-green-500/15 border border-green-500/30" style={{ color: GREEN }}>
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: GREEN }} />
      LIVE
    </span>
  );
}

function SlideFrame({ header, footer, children, sidebar }: {
  header: React.ReactNode;
  footer: string;
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col text-white" style={{ background: NAVY, fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/8">
        {header}
      </div>
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main area ~65% */}
        <div className="flex-1 p-3 overflow-hidden">
          {children}
        </div>
        {/* Sidebar ~35% */}
        <div className="w-[130px] shrink-0 p-2 border-l border-white/8 flex flex-col gap-2 justify-center">
          {sidebar}
        </div>
      </div>
      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/8">
        <p className="text-[8.5px] leading-tight" style={{ color: MUTED }}>{footer}</p>
      </div>
    </div>
  );
}

// ─── SLIDE 1: TRADING ─────────────────────────────────────────────────────
function SlideTrading() {
  const candles = [
    { open: 60, close: 72, high: 76, low: 55, bull: true },
    { open: 72, close: 68, high: 75, low: 64, bull: false },
    { open: 68, close: 78, high: 82, low: 66, bull: true },
    { open: 78, close: 74, high: 80, low: 70, bull: false },
    { open: 74, close: 82, high: 86, low: 72, bull: true },
    { open: 82, close: 79, high: 85, low: 76, bull: false },
    { open: 79, close: 88, high: 92, low: 77, bull: true },
    { open: 88, close: 84, high: 91, low: 80, bull: false },
    { open: 84, close: 92, high: 96, low: 82, bull: true },
    { open: 92, close: 95, high: 98, low: 88, bull: true },
  ];

  const H = 90; // chart height in px
  const min = 50, max = 100;
  const toY = (v: number) => H - ((v - min) / (max - min)) * H;
  const candleW = 10;
  const gap = 3;
  const chartW = candles.length * (candleW + gap);

  // MA line points
  const maValues = [65, 68, 70, 73, 76, 78, 80, 84, 87, 91];
  const maPoints = maValues.map((v, i) => `${i * (candleW + gap) + candleW / 2},${toY(v)}`).join(" ");

  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Signal Engine — BTC/USD</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
            <span className="text-[9px]" style={{ color: MUTED }}>Updated 2s ago</span>
          </div>
        </>
      }
      footer="Backtested performance. Not financial advice. See full disclosure at netquorax.com/risk-disclosure"
      sidebar={
        <>
          <StatCard label="Win Rate" value="64%" color={GREEN} />
          <StatCard label="Trades Today" value="12" />
          <StatCard label="Avg. R:R" value="1:2.3" />
        </>
      }
    >
      <svg width="100%" viewBox={`0 0 ${chartW + 10} ${H + 24}`} preserveAspectRatio="xMidYMid meet">
        {/* Volume bars */}
        {candles.map((c, i) => (
          <rect
            key={`vol-${i}`}
            x={i * (candleW + gap) + 2}
            y={H + 4}
            width={candleW - 2}
            height={8}
            fill={c.bull ? `${GREEN}40` : `${RED}40`}
            rx={1}
          />
        ))}
        {/* MA Line */}
        <polyline points={maPoints} fill="none" stroke={`${BLUE}80`} strokeWidth="1" strokeLinejoin="round" />
        {/* Candles */}
        {candles.map((c, i) => {
          const x = i * (candleW + gap);
          const bodyTop = toY(Math.max(c.open, c.close));
          const bodyH = Math.max(2, Math.abs(toY(c.open) - toY(c.close)));
          return (
            <g key={`c-${i}`}>
              {/* Wick */}
              <line x1={x + candleW / 2} y1={toY(c.high)} x2={x + candleW / 2} y2={toY(c.low)} stroke={c.bull ? GREEN : RED} strokeWidth="1" />
              {/* Body */}
              <rect x={x + 1} y={bodyTop} width={candleW - 2} height={bodyH} fill={c.bull ? GREEN : RED} rx={1} />
            </g>
          );
        })}
        {/* Buy signal on candle 5 */}
        <circle cx={5 * (candleW + gap) + candleW / 2} cy={toY(78) + 8} r="3.5" fill={GREEN} />
        <text x={5 * (candleW + gap) + candleW / 2} y={toY(78) + 18} textAnchor="middle" fill={GREEN} fontSize="6" fontWeight="bold">BUY</text>
        {/* Sell signal on candle 8 */}
        <circle cx={8 * (candleW + gap) + candleW / 2} cy={toY(92) - 8} r="3.5" fill={RED} />
        <text x={8 * (candleW + gap) + candleW / 2} y={toY(92) - 12} textAnchor="middle" fill={RED} fontSize="6" fontWeight="bold">SELL</text>
      </svg>
    </SlideFrame>
  );
}

// ─── SLIDE 2: AI CHATBOT ──────────────────────────────────────────────────
function SlideAI() {
  const messages = [
    { from: "user", text: "What's the status of my order #4821?" },
    { from: "ai", text: "Order #4821 shipped today via FedEx. Estimated delivery: tomorrow by 6 PM. Tracking: FX4029183." },
    { from: "user", text: "Can I change the delivery address?" },
    { from: "ai", text: "I've flagged this for our team. You'll get a confirmation email within 5 minutes.", resolved: true },
  ];

  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>AI Support Agent — Live</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
            <span className="text-[9px]" style={{ color: MUTED }}>Avg. 1.2s response</span>
          </div>
        </>
      }
      footer="Handles support, sales, and lead qualification 24/7."
      sidebar={
        <>
          <StatCard label="Response Time" value="1.2s" color={GREEN} />
          <StatCard label="Resolved Today" value="84" />
          <StatCard label="CSAT Score" value="4.8/5" color={GREEN} />
        </>
      }
    >
      <div className="flex flex-col gap-2 h-full overflow-hidden">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[85%] px-2.5 py-1.5 rounded-xl text-[9px] leading-relaxed"
              style={{
                background: m.from === "user" ? `${BLUE}30` : "rgba(255,255,255,0.07)",
                color: m.from === "user" ? "#c7d7fd" : TEXT,
                borderRadius: m.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px"
              }}
            >
              {m.text}
              {m.resolved && (
                <span className="ml-1 text-[8px] font-bold" style={{ color: GREEN }}>✓ Resolved</span>
              )}
            </div>
          </div>
        ))}
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="px-3 py-2 rounded-xl bg-white/7 flex gap-1 items-center">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/40" style={{ animation: `chatPulse 1.2s ${i * 0.2}s ease-in-out infinite` }} />
            ))}
          </div>
        </div>
        <style>{`@keyframes chatPulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.4)} }`}</style>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 3: WORKFLOW AUTOMATION ─────────────────────────────────────────
function SlideAutomation() {
  const nodes = ["New Order", "Sync CRM", "Notify Team", "Update Inventory"];
  const nodeColors = [BLUE, "#7C3AED", "#EA580C", GREEN];

  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Automation Pipeline — Active</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
            <span className="text-[9px]" style={{ color: MUTED }}>Running 24/7</span>
          </div>
        </>
      }
      footer="Connects your tools so manual data entry disappears."
      sidebar={
        <>
          <StatCard label="Tasks/Month" value="1,240" color={GREEN} />
          <StatCard label="Hours Saved" value="38/wk" />
          <StatCard label="Error Rate" value="0.2%" color={GREEN} />
        </>
      }
    >
      <div className="flex flex-col items-center justify-center h-full gap-0">
        {nodes.map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            {/* Node */}
            <div
              className="px-3 py-1.5 rounded-lg border text-[9px] font-bold text-center min-w-[90px]"
              style={{ borderColor: `${nodeColors[i]}60`, color: nodeColors[i], background: `${nodeColors[i]}12` }}
            >
              {node}
            </div>
            {/* Connector with pulse */}
            {i < nodes.length - 1 && (
              <div className="relative flex flex-col items-center my-1">
                <div className="w-0.5 h-5 bg-white/10 relative overflow-hidden rounded-full">
                  <div
                    className="absolute w-full rounded-full"
                    style={{
                      height: "40%",
                      background: `linear-gradient(to bottom, transparent, ${nodeColors[i]}, transparent)`,
                      animation: `flowDown 1.5s ${i * 0.3}s linear infinite`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <style>{`@keyframes flowDown { 0%{top:-40%} 100%{top:140%} }`}</style>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 4: WEB & APP DEV ───────────────────────────────────────────────
function SlideWebDev() {
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Product Build — In Progress</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[9px] font-bold rounded-full" style={{ background: `${BLUE}25`, color: BLUE }}>DEV</span>
            <span className="text-[9px]" style={{ color: MUTED }}>98% complete</span>
          </div>
        </>
      }
      footer="Fast, conversion-focused websites and apps, built to scale."
      sidebar={
        <>
          <StatCard label="Load Time" value="0.8s" color={GREEN} />
          <StatCard label="Lighthouse" value="98 / 100" color={GREEN} />
          <StatCard label="Uptime" value="99.9%" />
        </>
      }
    >
      <div className="flex gap-2 h-full items-center justify-center">
        {/* Browser frame */}
        <div className="flex-1 rounded-lg border border-white/15 bg-white/5 overflow-hidden">
          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            <div className="flex-1 mx-1 h-2 rounded bg-white/10" />
          </div>
          {/* Wireframe blocks fading in */}
          <div className="p-2 flex flex-col gap-1.5">
            <div className="h-3 rounded bg-blue-400/20 w-full" style={{ animation: "wireIn 0.4s 0.0s both" }} />
            <div className="h-6 rounded bg-white/8 w-full" style={{ animation: "wireIn 0.4s 0.15s both" }} />
            <div className="h-2 rounded bg-white/8 w-3/4" style={{ animation: "wireIn 0.4s 0.3s both" }} />
            <div className="h-2 rounded bg-white/8 w-1/2" style={{ animation: "wireIn 0.4s 0.4s both" }} />
            <div className="h-4 rounded w-1/2 mt-1" style={{ background: BLUE + "40", animation: "wireIn 0.4s 0.5s both" }} />
          </div>
          <style>{`@keyframes wireIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }`}</style>
        </div>
        {/* Phone frame */}
        <div className="w-[44px] rounded-xl border border-white/15 bg-white/5 overflow-hidden shrink-0">
          <div className="flex items-center justify-center py-1 border-b border-white/10">
            <div className="w-6 h-0.5 rounded-full bg-white/20" />
          </div>
          <div className="p-1 flex flex-col gap-1">
            <div className="h-2 rounded bg-blue-400/20 w-full" />
            <div className="h-3 rounded bg-white/8 w-full" />
            <div className="h-1.5 rounded bg-white/8 w-3/4" />
            <div className="h-3 rounded mt-0.5" style={{ background: BLUE + "35" }} />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 5: DIGITAL MARKETING ───────────────────────────────────────────
function SlideMarketing() {
  const bars = [18, 26, 22, 34, 42, 56, 70, 84, 78, 95];
  const maxVal = 100;
  const barW = 8;
  const gap = 4;
  const H = 80;
  const chartW = bars.length * (barW + gap);

  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Campaign Performance — This Month</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold" style={{ color: GREEN }}>↑ 38% vs last month</span>
          </div>
        </>
      }
      footer="Full-funnel systems that turn traffic into customers."
      sidebar={
        <>
          <StatCard label="Leads Generated" value="312" color={GREEN} />
          <StatCard label="Cost per Lead" value="$4.20" />
          <StatCard label="ROAS" value="5.4×" color={GREEN} />
        </>
      }
    >
      <svg width="100%" viewBox={`0 0 ${chartW + 10} ${H + 16}`} preserveAspectRatio="xMidYMid meet">
        {/* Horizontal grid lines */}
        {[0, 25, 50, 75, 100].map((v) => (
          <line key={v} x1="0" y1={H - (v / maxVal) * H} x2={chartW + 4} y2={H - (v / maxVal) * H} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        ))}
        {/* Trend line */}
        <polyline
          points={bars.map((v, i) => `${i * (barW + gap) + barW / 2},${H - (v / maxVal) * H}`).join(" ")}
          fill="none"
          stroke={`${BLUE}90`}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Bars */}
        {bars.map((v, i) => (
          <rect
            key={i}
            x={i * (barW + gap) + 1}
            y={H - (v / maxVal) * H}
            width={barW - 2}
            height={(v / maxVal) * H}
            fill={i >= 7 ? `${BLUE}80` : `${BLUE}35`}
            rx={2}
          />
        ))}
        {/* Week labels */}
        {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"].map((w, i) => (
          <text key={w} x={i * (barW + gap) + barW / 2} y={H + 10} textAnchor="middle" fill={MUTED} fontSize="5">{w}</text>
        ))}
      </svg>
    </SlideFrame>
  );
}

// ─── SLIDES CONFIG ────────────────────────────────────────────────────────
const SLIDES = [
  { id: "trading", component: SlideTrading },
  { id: "ai", component: SlideAI },
  { id: "automation", component: SlideAutomation },
  { id: "webdev", component: SlideWebDev },
  { id: "marketing", component: SlideMarketing },
];

const SLIDE_DURATION = 4000;

// ─── MAIN CAROUSEL ────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [showArrows, setShowArrows] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent((idx + SLIDES.length) % SLIDES.length);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Progress ticker
  useEffect(() => {
    if (paused || prefersReducedMotion.current) return;
    const tick = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        goTo(current + 1, 1);
      }
    }, 50);
    return () => clearInterval(tick);
  }, [paused, current, goTo]);

  // Pause on hidden tab
  useEffect(() => {
    const onVisChange = () => {
      if (document.hidden) {
        setPaused(true);
      } else {
        setPaused(false);
        startRef.current = Date.now();
        setProgress(0);
      }
    };
    document.addEventListener("visibilitychange", onVisChange);
    return () => document.removeEventListener("visibilitychange", onVisChange);
  }, []);

  // Slide transition variants
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 16 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir * -12, transition: { duration: 0.25, ease: "easeIn" as const } }),
  };

  const SlideComponent = SLIDES[current].component;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none"
      style={{ background: NAVY, aspectRatio: "16/11" }}
      onMouseEnter={() => { setPaused(true); setShowArrows(true); }}
      onMouseLeave={() => { setPaused(false); setShowArrows(false); startRef.current = Date.now(); setProgress(0); }}
      // Mobile tap zones
      onClick={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width * 0.33) prev();
        else if (x > rect.width * 0.67) next();
      }}
    >
      {/* STORY PROGRESS BAR */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-3 pt-2">
        {SLIDES.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="h-full rounded-full transition-none"
              style={{
                background: "rgba(255,255,255,0.9)",
                width: i < current ? "100%" : i === current ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* SLIDE CONTENT */}
      <div className="absolute inset-0 pt-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 pt-3"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAV ARROWS (hover only) */}
      <AnimatePresence>
        {showArrows && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronLeft size={14} color="white" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronRight size={14} color="white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); goTo(i, i > current ? 1 : -1); }}
            className="rounded-full transition-all duration-200 cursor-pointer"
            style={{
              width: i === current ? 16 : 4,
              height: 4,
              background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
