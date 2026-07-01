"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RepelCard from "@/components/ui/RepelCard";

// ── SVG ILLUSTRATIONS (custom line-art, no stock icons) ─────────────────────
// Each returns an <svg> representing the concept abstractly

// ── REAL PHOTO for Row 1 ────────────────────────────────────────────────────
function IllustrationOnePartner() {
  return (
    <RepelCard strength={18} stiffness={160} damping={18} className="w-full h-full">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/images/team-collab.png"
          alt="Team collaborating"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(1.02) saturate(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.08), transparent 60%)" }}
        />
      </div>
    </RepelCard>
  );
}

function IllustrationAINative() {
  // Neural-net style: 3 layers of dots connected by thin lines
  const layers = [
    [{ x: 40, y: 60 }, { x: 40, y: 120 }, { x: 40, y: 180 }],
    [{ x: 140, y: 40 }, { x: 140, y: 100 }, { x: 140, y: 160 }, { x: 140, y: 200 }],
    [{ x: 240, y: 70 }, { x: 240, y: 130 }, { x: 240, y: 190 }],
    [{ x: 310, y: 120 }],
  ];
  const colors = ["#2563EB", "#7C3AED", "#06B6D4", "#7C3AED"];
  return (
    <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      {/* Layer connections */}
      {layers.slice(0, -1).map((layer, li) =>
        layer.flatMap((src, si) =>
          layers[li + 1].map((dst, di) => (
            <motion.line
              key={`${li}-${si}-${di}`}
              x1={src.x} y1={src.y} x2={dst.x} y2={dst.y}
              stroke={colors[li]} strokeWidth="1" strokeOpacity="0.25"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: li * 0.15 + si * 0.04, ease: "easeOut" }}
            />
          ))
        )
      )}
      {/* Nodes */}
      {layers.map((layer, li) =>
        layer.map((n, ni) => (
          <motion.circle
            key={`dot-${li}-${ni}`}
            cx={n.x} cy={n.y} r={li === layers.length - 1 ? 10 : 7}
            fill={colors[li]} fillOpacity={li === layers.length - 1 ? 1 : 0.15}
            stroke={colors[li]} strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.4 + li * 0.1 + ni * 0.05, ease: "backOut" }}
          />
        ))
      )}
    </svg>
  );
}

function IllustrationScalableSecure() {
  // Stacked rectangles with a shield outline on top
  const rects = [
    { y: 180, w: 240, h: 18, opacity: 0.12 },
    { y: 155, w: 200, h: 18, opacity: 0.18 },
    { y: 130, w: 160, h: 18, opacity: 0.24 },
    { y: 105, w: 120, h: 18, opacity: 0.30 },
  ];
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      {/* Stacked layers */}
      {rects.map((r, i) => (
        <motion.rect
          key={i}
          x={(320 - r.w) / 2} y={r.y} width={r.w} height={r.h} rx="6"
          fill="#7C3AED" fillOpacity={r.opacity}
          stroke="#7C3AED" strokeWidth="1.2" strokeOpacity={r.opacity * 2}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      ))}
      {/* Shield outline */}
      <motion.path
        d="M160 28 L190 40 L190 76 Q190 100 160 114 Q130 100 130 76 L130 40 Z"
        stroke="#7C3AED" strokeWidth="1.8" fill="rgba(124,58,237,0.08)"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      />
      {/* Check inside shield */}
      <motion.path
        d="M148 70 L157 79 L174 58"
        stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
      />
    </svg>
  );
}

function IllustrationLongTerm() {
  // Looping/infinity-style bezier path suggesting ongoing relationship
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <defs>
        <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#06B6D4" />
          <stop offset="50%"  stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Infinity/loop path */}
      <motion.path
        d="M 60 120 C 60 60, 140 60, 160 120 C 180 180, 260 180, 260 120 C 260 60, 180 60, 160 120 C 140 180, 60 180, 60 120"
        stroke="url(#loopGrad)" strokeWidth="2" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* Moving dot along path */}
      <motion.circle
        r="6" fill="#06B6D4"
        style={{ filter: "drop-shadow(0 0 6px #06B6D4)" }}
        initial={{ offsetDistance: "0%", opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 60 120 C 60 60, 140 60, 160 120 C 180 180, 260 180, 260 120 C 260 60, 180 60, 160 120 C 140 180, 60 180, 60 120"
          begin="1.2s"
        />
      </motion.circle>
    </svg>
  );
}

// ── ROW DATA ─────────────────────────────────────────────────────────────────
interface DiffRow {
  num: string;
  h3: string;
  desc: string;
  tags?: string[];
  accent: string;
  Visual: React.FC;
  visualLeft: boolean; // true = visual on left, text on right
}

const ROWS: DiffRow[] = [
  {
    num: "01",
    h3: "One Partner, Every Solution",
    desc: "Stop managing five vendors. Your website, automation, trading systems, and growth campaigns come from one team that actually talks to each other.",
    tags: ["Web", "AI", "Automation", "Growth"],
    accent: "#2563EB",
    Visual: IllustrationOnePartner,
    visualLeft: true,
  },
  {
    num: "02",
    h3: "AI-Native by Design",
    desc: "We don't bolt AI on top as an afterthought. Every system we build is designed from the start to be automated, intelligent, and adaptive as you scale.",
    tags: ["Chatbots", "Agents", "Voice AI"],
    accent: "#7C3AED",
    Visual: IllustrationAINative,
    visualLeft: false,
  },
  {
    num: "03",
    h3: "Scalable, Secure by Default",
    desc: "Architecture that holds up past your first spike in traffic. Security isn't added at the end — it's baked into every layer we build.",
    tags: ["Cloud", "Security", "DevOps"],
    accent: "#7C3AED",
    Visual: IllustrationScalableSecure,
    visualLeft: true,
  },
  {
    num: "04",
    h3: "Long-Term Partnership",
    desc: "We don't disappear after launch. We track performance, iterate based on data, and grow the system as your business grows — not just hand you a deliverable.",
    tags: ["Support", "Analytics", "Growth"],
    accent: "#06B6D4",
    Visual: IllustrationLongTerm,
    visualLeft: false,
  },
];

// ── PARALLAX ROW ─────────────────────────────────────────────────────────────
function DiffRow({ row, index }: { row: DiffRow; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const isFirst = index === 0;

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: row.visualLeft ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col justify-center"
    >
      <p
        className="text-[14px] font-mono font-semibold mb-4"
        style={{ color: row.accent }}
      >
        {row.num}
      </p>
      <h3 className="font-display text-[22px] md:text-[28px] font-extrabold tracking-tight text-[#0B1020] leading-[1.2]">
        {row.h3}
      </h3>
      <p className="mt-4 text-[16px] text-[#0B1020]/65 leading-[1.6] max-w-[420px]">
        {row.desc}
      </p>
      {row.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {row.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[12px] font-semibold"
              style={{
                background: `${row.accent}14`,
                color: row.accent,
                border: `1px solid ${row.accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  const visualBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      style={{ y: visualY }}
      className="relative flex items-center justify-center"
    >
      {/* Soft accent glow behind illustration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${row.accent}26, transparent 70%)`,
          filter: "blur(24px)",
        }}
      />
      <div className="relative w-[280px] h-[210px] md:w-[320px] md:h-[240px]">
        <row.Visual />
      </div>
    </motion.div>
  );

  return (
    <div
      ref={rowRef}
      className={`relative ${!isFirst ? "border-t border-[rgba(11,16,32,0.08)] pt-16 lg:pt-24" : ""}`}
    >
      {/* Desktop: 2-col, alternating sides. Mobile: visual then text always */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[280px]">
        {/* On desktop: swap column order based on visualLeft flag */}
        <div className={`${row.visualLeft ? "md:order-1" : "md:order-2"} order-1`}>
          {visualBlock}
        </div>
        <div className={`${row.visualLeft ? "md:order-2" : "md:order-1"} order-2`}>
          {textBlock}
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-16 lg:py-[120px] bg-[#F8FAFC]"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-[600px] mb-16 lg:mb-24"
        >
          <motion.p variants={headerItem}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
            Why NetquoraX
          </motion.p>
          <motion.h2 variants={headerItem} id="whyus-heading"
            className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
            Built Different, On Purpose
          </motion.h2>
          <motion.p variants={headerItem}
            className="mt-4 text-[16px] text-[#0B1020]/60 max-w-[480px] leading-relaxed">
            Most agencies hand you a deliverable and disappear. We build the system and stay.
          </motion.p>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-16 lg:space-y-24">
          {ROWS.map((row, i) => (
            <DiffRow key={row.num} row={row} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
