"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";

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
        <p className="text-[8.5px] leading-tight pr-6 truncate" style={{ color: MUTED }}>{footer}</p>
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

  const H = 90;
  const min = 50, max = 100;
  const toY = (v: number) => H - ((v - min) / (max - min)) * H;
  const candleW = 10;
  const gap = 3;
  const chartW = candles.length * (candleW + gap);

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
      footer="Backtested performance. Not financial advice. See risk disclosures."
      sidebar={
        <>
          <StatCard label="Win Rate" value="64%" color={GREEN} />
          <StatCard label="Trades Today" value="12" />
          <StatCard label="Avg. R:R" value="1:2.3" />
        </>
      }
    >
      <svg width="100%" viewBox={`0 0 ${chartW + 10} ${H + 24}`} preserveAspectRatio="xMidYMid meet">
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
        <polyline points={maPoints} fill="none" stroke={`${BLUE}80`} strokeWidth="1" strokeLinejoin="round" />
        {candles.map((c, i) => {
          const x = i * (candleW + gap);
          const bodyTop = toY(Math.max(c.open, c.close));
          const bodyH = Math.max(2, Math.abs(toY(c.open) - toY(c.close)));
          return (
            <g key={`c-${i}`}>
              <line x1={x + candleW / 2} y1={toY(c.high)} x2={x + candleW / 2} y2={toY(c.low)} stroke={c.bull ? GREEN : RED} strokeWidth="1" />
              <rect x={x + 1} y={bodyTop} width={candleW - 2} height={bodyH} fill={c.bull ? GREEN : RED} rx={1} />
            </g>
          );
        })}
        <circle cx={5 * (candleW + gap) + candleW / 2} cy={toY(78) + 8} r="3.5" fill={GREEN} />
        <text x={5 * (candleW + gap) + candleW / 2} y={toY(78) + 18} textAnchor="middle" fill={GREEN} fontSize="6" fontWeight="bold">BUY</text>
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
    { from: "ai", text: "Order #4821 shipped via FedEx. Delivery: tomorrow by 6 PM. Track: FX4029183." },
    { from: "user", text: "Can I change the delivery address?" },
    { from: "ai", text: "I've flagged this for our team. Confirmation email sent in 5 minutes.", resolved: true },
  ];

  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>AI Support Agent — Live</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
            <span className="text-[9px]" style={{ color: MUTED }}>Avg 1.2s response</span>
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
      <div className="flex flex-col gap-1.5 h-full overflow-hidden justify-center">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[90%] px-2 py-1 rounded-xl text-[9px] leading-relaxed"
              style={{
                background: m.from === "user" ? `${BLUE}30` : "rgba(255,255,255,0.07)",
                color: m.from === "user" ? "#c7d7fd" : TEXT,
                borderRadius: m.from === "user" ? "10px 10px 2px 10px" : "10px 10px 10px 2px"
              }}
            >
              {m.text}
              {m.resolved && (
                <span className="ml-1 text-[8px] font-bold" style={{ color: GREEN }}>✓ Resolved</span>
              )}
            </div>
          </div>
        ))}
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
            <div
              className="px-2.5 py-1 rounded-lg border text-[8.5px] font-bold text-center min-w-[100px]"
              style={{ borderColor: `${nodeColors[i]}60`, color: nodeColors[i], background: `${nodeColors[i]}12` }}
            >
              {node}
            </div>
            {i < nodes.length - 1 && (
              <div className="relative flex flex-col items-center my-0.5">
                <div className="w-0.5 h-3.5 bg-white/10 relative overflow-hidden rounded-full">
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
        <div className="flex-1 rounded-lg border border-white/15 bg-white/5 overflow-hidden">
          <div className="flex items-center gap-1 px-2 py-1 border-b border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            <div className="flex-1 mx-1 h-2 rounded bg-white/10" />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <div className="h-2.5 rounded bg-blue-400/20 w-full" />
            <div className="h-5 rounded bg-white/8 w-full" />
            <div className="h-2 rounded bg-white/8 w-3/4" />
            <div className="h-3 rounded w-1/2 mt-0.5" style={{ background: BLUE + "40" }} />
          </div>
        </div>
        <div className="w-[40px] rounded-xl border border-white/15 bg-white/5 overflow-hidden shrink-0">
          <div className="flex items-center justify-center py-1 border-b border-white/10">
            <div className="w-6 h-0.5 rounded-full bg-white/20" />
          </div>
          <div className="p-1 flex flex-col gap-1">
            <div className="h-2 rounded bg-blue-400/20 w-full" />
            <div className="h-3 rounded bg-white/8 w-full" />
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
  const H = 72;
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
      </svg>
    </SlideFrame>
  );
}

// ─── SLIDE 6: WHATSAPP AUTOMATION ─────────────────────────────────────────
function SlideWhatsApp() {
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>WhatsApp Automation — Active</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
          </div>
        </>
      }
      footer="Automated order updates, support, and lead capture on WhatsApp."
      sidebar={
        <>
          <StatCard label="Messages Sent" value="2,840/mo" />
          <StatCard label="Response Rate" value="98%" color={GREEN} />
          <StatCard label="Avg Reply Time" value="3s" color={GREEN} />
        </>
      }
    >
      <div className="flex flex-col gap-1.5 h-full justify-center">
        {/* WhatsApp bubbles */}
        <div className="flex justify-end">
          <div className="px-2 py-1 rounded-lg text-[9px]" style={{ background: "#056162", color: TEXT }}>
            Order status?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="px-2 py-1 rounded-lg text-[9px]" style={{ background: "#262d31", color: TEXT }}>
            Hi! Order #8210 is processed and ready to ship. 📦
          </div>
        </div>
        <div className="flex justify-start">
          <div className="px-2 py-1 rounded-lg text-[9px] relative pr-5" style={{ background: "#262d31", color: TEXT }}>
            Shipped! Tracking: WA-99281. Expected: Friday.
            <span className="absolute bottom-0.5 right-1.5 text-[8px]" style={{ color: BLUE }}>✓✓</span>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 7: AI VOICE BOTS ──────────────────────────────────────────────
function SlideVoice() {
  const bars = [12, 28, 45, 18, 32, 54, 38, 22, 48, 15, 30];
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Voice Agent — On Call</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
          </div>
        </>
      }
      footer="AI voice agents for booking, qualification, and support calls."
      sidebar={
        <>
          <StatCard label="Calls Handled" value="156/wk" />
          <StatCard label="Avg Call Length" value="2m 40s" />
          <StatCard label="Booking Rate" value="32%" color={GREEN} />
        </>
      }
    >
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <div className="flex items-center gap-2 text-white/90">
          <PhoneCall size={18} className="text-green-500 animate-pulse" />
          <span className="text-[11px] font-bold font-mono">02:14</span>
        </div>
        {/* Waveform graphic */}
        <div className="flex items-end gap-1 h-10">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                height: `${h}px`,
                backgroundColor: BLUE,
                animation: `waveformAnim 1.2s ${i * 0.1}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes waveformAnim {
            0% { transform: scaleY(0.4); }
            100% { transform: scaleY(1.3); }
          }
        `}</style>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 8: CYBERSECURITY ───────────────────────────────────────────────
function SlideSecurity() {
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Security Monitor — Active</span>
          <div className="flex items-center gap-2">
            <LiveBadge />
          </div>
        </>
      }
      footer="Security built in from day one — not bolted on after a breach."
      sidebar={
        <>
          <StatCard label="Threats Blocked" value="1,204" color={GREEN} />
          <StatCard label="Uptime" value="99.98%" color={GREEN} />
          <StatCard label="Last Scan" value="4m ago" />
        </>
      }
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        {/* Radial gauges layout */}
        <div className="flex gap-4">
          {/* Gauge 1: Threat Detection (92%) */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 36 36">
              <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-blue-500" strokeDasharray="92, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="21.5" className="text-[8px] font-bold fill-white font-mono" textAnchor="middle">92%</text>
            </svg>
            <span className="text-[7px] text-white/50 mt-1 uppercase font-bold">Threats</span>
          </div>
          {/* Gauge 2: Network Health (98%) */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 36 36">
              <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-green-500" strokeDasharray="98, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="21.5" className="text-[8px] font-bold fill-white font-mono" textAnchor="middle">98%</text>
            </svg>
            <span className="text-[7px] text-white/50 mt-1 uppercase font-bold">Health</span>
          </div>
          {/* Gauge 3: Risk Level (5%) */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 36 36">
              <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-red-500" strokeDasharray="5, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="21.5" className="text-[8px] font-bold fill-white font-mono" textAnchor="middle">5%</text>
            </svg>
            <span className="text-[7px] text-white/50 mt-1 uppercase font-bold">Risk</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-green-500/10 border border-green-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8.5px] font-bold text-green-400 uppercase font-mono">System Status: Secure</span>
        </div>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 9: CLOUD / DEVOPS ──────────────────────────────────────────────
function SlideDevOps() {
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Deployment Pipeline — Building</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-blue-500/20 text-blue-400">CI/CD</span>
          </div>
        </>
      }
      footer="Scalable cloud architecture and CI/CD, built for stability."
      sidebar={
        <>
          <StatCard label="Deploy Time" value="42s" color={GREEN} />
          <StatCard label="Success Rate" value="99.4%" color={GREEN} />
          <StatCard label="Rollback Time" value="&lt;10s" />
        </>
      }
    >
      <div className="flex items-center justify-center h-full gap-2">
        {/* CI/CD step list horizontal */}
        <div className="flex flex-col gap-3 w-full max-w-[200px]">
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-white/60">Stage</span>
            <span className="text-blue-400 font-bold">Test Pass</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
              <span className="text-[8px] text-green-400">✓ Build</span>
              <span className="text-[7.5px] text-white/50">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
              <span className="text-[8px] text-green-400">✓ Test</span>
              <span className="text-[7.5px] text-white/50">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-blue-500/10 border border-blue-500/30">
              <span className="text-[8px] text-blue-400 animate-pulse">&gt; Deploy</span>
              <span className="text-[7.5px] text-blue-400 font-bold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// ─── SLIDE 10: DESIGN / BRANDING ──────────────────────────────────────────
function SlideDesign() {
  const swatches = ["#2563EB", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"];
  return (
    <SlideFrame
      header={
        <>
          <span className="text-[11px] font-semibold" style={{ color: TEXT }}>Design System — v2</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white/10 text-white/85">FIGMA</span>
          </div>
        </>
      }
      footer="Brand identity and interfaces that feel premium from screen one."
      sidebar={
        <>
          <StatCard label="Components" value="84" />
          <StatCard label="Design Iterations" value="6" />
          <StatCard label="Client Approval" value="1st Round" color={GREEN} />
        </>
      }
    >
      <div className="flex flex-col gap-3 h-full justify-center">
        {/* Layered Figma frame mockups */}
        <div className="flex gap-2">
          <div className="flex-1 border border-white/10 rounded p-1.5 bg-white/5 flex flex-col gap-1.5">
            <span className="text-[6.5px] text-white/40 uppercase">Card Component</span>
            <div className="h-5 rounded bg-white/10" />
            <div className="h-1.5 rounded bg-[#2563EB] w-1/2" />
          </div>
          <div className="flex-1 border border-white/10 rounded p-1.5 bg-white/5 flex flex-col gap-1.5">
            <span className="text-[6.5px] text-white/40 uppercase">Button</span>
            <div className="h-4 rounded bg-[#2563EB]" />
            <div className="h-1.5 rounded bg-white/10 w-2/3" />
          </div>
        </div>
        {/* Typography and Swatches */}
        <div className="flex items-center justify-between px-1.5">
          <span className="text-[11px] font-bold font-sans">Aa Bb Cc</span>
          <div className="flex gap-1">
            {swatches.map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
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
  { id: "whatsapp", component: SlideWhatsApp },
  { id: "voice", component: SlideVoice },
  { id: "security", component: SlideSecurity },
  { id: "devops", component: SlideDevOps },
  { id: "design", component: SlideDesign },
];

const SLIDE_DURATION = 4000;

// ─── MAIN CAROUSEL ────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 16 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir * -12, transition: { duration: 0.25, ease: "easeIn" as const } }),
  };

  const SlideComponent = SLIDES[current].component;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none w-full"
      style={{ background: NAVY, aspectRatio: "16/11" }}
      onMouseEnter={() => { setPaused(true); setShowArrows(true); }}
      onMouseLeave={() => { setPaused(false); setShowArrows(false); startRef.current = Date.now(); setProgress(0); }}
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
