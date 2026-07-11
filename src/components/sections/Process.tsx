"use client";

import React, { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RepelCard from "@/components/ui/RepelCard";

const STEPS = [
  { num: "01", title: "Discovery",   desc: "We map your business, goals, and technical constraints before writing a single line of anything." },
  { num: "02", title: "Planning",    desc: "Scope, timeline, and architecture decisions locked before development starts." },
  { num: "03", title: "Design",      desc: "Interfaces and flows designed around how your users actually behave." },
  { num: "04", title: "Development", desc: "Built in focused sprints with regular check-ins, not a black-box wait." },
  { num: "05", title: "Testing",     desc: "Cross-device, cross-browser, and load testing before anything ships." },
  { num: "06", title: "Launch",      desc: "Deployed with monitoring in place from day one, not after something breaks." },
  { num: "07", title: "Growth",      desc: "Post-launch iteration based on real usage data, not guesswork." },
];

const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// Individual step — triggers own whileInView
function StepRow({ step, index }: { step: typeof STEPS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative flex gap-8 items-start"
    >
      {/* Node + line container */}
      <div className="relative flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
        {/* Circle node */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, delay: 0.1, ease: "backOut" as const }}
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: "white",
            border: "2px solid rgba(11,16,32,0.15)",
            boxShadow: "0 2px 8px rgba(11,16,32,0.06)",
          }}
        >
          <span
            className="text-[13px] font-bold tabular-nums"
            style={{ color: "#2563EB", fontVariantNumeric: "tabular-nums" }}
          >
            {step.num}
          </span>
        </motion.div>
        {/* Connecting line (not shown after last step) */}
        {index < STEPS.length - 1 && (
          <div
            className="mt-2 w-[2px] flex-1"
            style={{ background: "rgba(11,16,32,0.08)", minHeight: 56 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-2.5 pb-16">
        <h3 className="text-[22px] font-semibold text-[#0B1020] leading-snug">{step.title}</h3>
        <p className="mt-2 text-[14px] text-[#0B1020]/60 leading-[1.6] max-w-[400px]">{step.desc}</p>
      </div>
    </motion.div>
  );
}

// Scroll-linked fill line overlay
function ScrollFillLine({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute left-[23px] top-0 bottom-0 w-[2px] origin-top z-0"
      style={{
        background: "linear-gradient(to bottom, #2563EB, #7C3AED, #06B6D4)",
        scaleY,
      }}
    />
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-16 lg:py-[120px] bg-[#F8FAFC]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
            className="max-w-[480px]"
          >
            <motion.p variants={headerItem}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              Process
            </motion.p>
            <motion.h2 variants={headerItem} id="process-heading"
              className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
              How We Work
            </motion.h2>
            <motion.p variants={headerItem}
              className="mt-4 text-[16px] text-[#0B1020]/60 leading-relaxed">
              A clear process from first call to post-launch growth, with no handoff and disappear.
            </motion.p>
          </motion.div>

          {/* Planning photo */}
          <RepelCard strength={18} stiffness={160} damping={18} className="relative md:flex-1 h-[180px] md:h-[200px] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="w-full h-full rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(11,16,32,0.10)" }}
            >
              <img
                src="/images/process-planning.webp"
                alt="Team planning session"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ filter: "brightness(1.02) saturate(0.95)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/40 dark:from-[#080C16]/60 to-transparent" />
            </motion.div>
          </RepelCard>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Track line (faint background) */}
          <div
            aria-hidden="true"
            className="absolute left-[23px] top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(11,16,32,0.08)" }}
          />
          {/* Scroll-linked fill */}
          <ScrollFillLine sectionRef={sectionRef} />

          {/* Steps */}
          <div className="relative z-10">
            {STEPS.map((step, i) => (
              <StepRow key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
