"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RepelCard from "@/components/ui/RepelCard";

interface Project {
  name: string;
  category: string;
  blurb: string;
  metrics: { label: string; value: string }[];
  tint: string;
  accent: string;
  slug: string;
  // Device frame type
  frame: "laptop" | "phone";
  // Bar chart data for the laptop mockup visual
  barData?: number[];
  // Card gradient inside device
  cardGrad?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Lumenpay Checkout Redesign",
    category: "E-Commerce",
    blurb: "Rebuilt checkout flow and cut cart abandonment by a third.",
    metrics: [
      { label: "Cart Drop", value: "−31%" },
      { label: "Launch",    value: "6 wks" },
      { label: "Revenue",   value: "+28%" },
    ],
    tint: "rgba(37,99,235,0.07)",
    accent: "#2563EB",
    slug: "lumenpay",
    frame: "laptop",
    barData: [40, 65, 50, 80, 60, 90, 75],
  },
  {
    name: "Orbitfy Patient Booking",
    category: "Healthcare",
    blurb: "Automated scheduling cut no-shows significantly.",
    metrics: [
      { label: "No-shows", value: "−22%" },
      { label: "Bookings", value: "+3×"  },
      { label: "Launch",   value: "8 wks" },
    ],
    tint: "rgba(16,185,129,0.07)",
    accent: "#10B981",
    slug: "orbitfy",
    frame: "phone",
  },
  {
    name: "Kestrel Signal Engine",
    category: "Trading Platform",
    blurb: "AI-assisted signals with a 64% backtested win rate.",
    metrics: [
      { label: "Win Rate", value: "64%"   },
      { label: "Trades",   value: "312"   },
      { label: "Drawdown", value: "6.2%"  },
    ],
    tint: "rgba(124,58,237,0.07)",
    accent: "#7C3AED",
    slug: "kestrel",
    frame: "laptop",
    barData: [55, 40, 70, 45, 85, 60, 95],
  },
  {
    name: "Northwave CRM Automation",
    category: "SaaS Dashboard",
    blurb: "Lead-to-close time halved through automated pipeline stages.",
    metrics: [
      { label: "Close Speed", value: "−50%" },
      { label: "Lead Volume", value: "+2.4×" },
      { label: "Launch",      value: "5 wks" },
    ],
    tint: "rgba(6,182,212,0.07)",
    accent: "#06B6D4",
    slug: "northwave",
    frame: "laptop",
    barData: [30, 55, 45, 75, 65, 88, 80],
  },
];

// ── Device frames ─────────────────────────────────────────────────────────────
function LaptopFrame({ accent, barData }: { accent: string; barData?: number[] }) {
  return (
    <div className="relative w-full max-w-[300px] mx-auto select-none" aria-hidden="true">
      {/* Screen */}
      <div
        className="w-full aspect-[16/10] rounded-xl overflow-hidden"
        style={{ border: "2px solid rgba(11,16,32,0.15)", background: "#F8FAFC" }}
      >
        {/* Mini browser chrome */}
        <div className="flex items-center gap-1 px-3 py-2 bg-white border-b border-slate-100">
          <span className="w-2 h-2 rounded-full bg-red-300/60"  />
          <span className="w-2 h-2 rounded-full bg-yellow-300/60" />
          <span className="w-2 h-2 rounded-full bg-green-300/60" />
          <div className="flex-1 mx-2 h-3 bg-slate-100 rounded-sm" />
        </div>
        {/* Content area */}
        <div className="p-3 space-y-2">
          <div className="h-2 bg-slate-200/70 rounded w-3/4" />
          <div className="h-2 bg-slate-200/70 rounded w-1/2" />
          {/* Bar chart */}
          {barData && (
            <div className="flex items-end gap-1 h-12 mt-3">
              {barData.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
                  style={{
                    height: `${h}%`,
                    background: accent,
                    opacity: 0.6 + (i / barData.length) * 0.4,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Stand */}
      <div
        className="mx-auto h-3 rounded-b-lg"
        style={{ width: "60%", background: "rgba(11,16,32,0.12)" }}
      />
    </div>
  );
}

function PhoneFrame({ accent }: { accent: string }) {
  return (
    <div
      className="relative mx-auto w-[100px] h-[175px] rounded-[20px] overflow-hidden select-none"
      style={{ border: "3px solid rgba(11,16,32,0.2)", background: "#F8FAFC" }}
      aria-hidden="true"
    >
      {/* Notch */}
      <div className="mx-auto mt-2 w-10 h-1.5 bg-slate-300/60 rounded-full" />
      {/* Content */}
      <div className="p-2 space-y-1.5 mt-1">
        {[80, 60, 90, 45].map((w, i) => (
          <div key={i} className="h-2 rounded-sm" style={{ width: `${w}%`, background: accent, opacity: 0.3 + i * 0.15 }} />
        ))}
        <div
          className="w-full h-8 rounded-lg mt-2"
          style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
        />
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function PortfolioCard({ project }: { project: Project }) {
  const [clicked, setClicked] = useState(false);

  return (
    <RepelCard strength={20} stiffness={180} damping={20}>
      <motion.article
        onClick={() => setClicked(!clicked)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="group relative bg-white rounded-[20px] overflow-hidden cursor-pointer"
        style={{ border: "1px solid rgba(11,16,32,0.08)", boxShadow: "0 1px 4px rgba(11,16,32,0.04)" }}
      >
      {/* Mockup area */}
      <div
        className="relative flex items-center justify-center py-10 overflow-hidden"
        style={{ background: project.tint, minHeight: 220 }}
      >
        {/* Device */}
        <motion.div
          className="transition-transform duration-500"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {project.frame === "laptop"
            ? <LaptopFrame accent={project.accent} barData={project.barData} />
            : <PhoneFrame accent={project.accent} />
          }
        </motion.div>

        {/* Hover/Tap overlay — metrics */}
        <motion.div
          animate={clicked ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
            clicked ? "pointer-events-auto" : "pointer-events-none group-hover:pointer-events-auto"
          }`}
          style={{ background: "rgba(11,16,32,0.82)", backdropFilter: "blur(4px)" }}
        >
          <div className="flex items-center gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-white text-[20px] font-extrabold font-display leading-none">{m.value}</p>
                <p className="text-white/60 text-[11px] mt-1">{m.label}</p>
              </div>
            ))}
          </div>
          <a
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/80 hover:text-white transition-colors group/link"
            onClick={(e) => e.stopPropagation()}
          >
            View Case Study
            <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1 duration-200" />
          </a>
        </motion.div>
      </div>

      {/* Text area */}
      <div className="p-6">
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2"
          style={{
            background: `${project.accent}14`,
            color: project.accent,
          }}
        >
          {project.category}
        </span>
        <h3 className="text-[18px] font-semibold text-[#0B1020] leading-snug">
          {project.name}
        </h3>
        <p className="mt-1 text-[14px] text-[#0B1020]/55">{project.blurb}</p>
      </div>
      </motion.article>
    </RepelCard>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 lg:py-[120px] bg-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-[600px] mb-14"
        >
          <motion.p variants={headerItem}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
            Portfolio
          </motion.p>
          <motion.h2 variants={headerItem} id="portfolio-heading"
            className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
            Work That Speaks in Numbers
          </motion.h2>
          <motion.p variants={headerItem}
            className="mt-4 text-[16px] text-[#0B1020]/60 max-w-[480px] leading-relaxed">
            Selected projects. Hover the card to see the actual results.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Trading Risk Disclaimer inline */}
        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[11px] text-[#0B1020]/45 dark:text-white/40 leading-relaxed">
            <strong>Risk Disclosure:</strong> Trading involves substantial risk of loss and is not suitable for all investors. Backtested and historical performance results (including the 64% win rate shown above for Kestrel) do not guarantee future results. NetQuorax builds and delivers trading system logic as a technology product service; we are not a registered investment advisor or broker-dealer, and nothing here constitutes financial advice. Clients are solely responsible for regulatory compliance in their jurisdiction.
          </p>
        </div>

      </div>
    </section>
  );
}
