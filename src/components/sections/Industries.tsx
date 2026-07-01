"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ── TAB DATA ─────────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    id: "startups",
    label: "Startups",
    bgTint: "rgba(37,99,235,0.04)",
    accent: "#2563EB",
    h3: "Ship Fast, Scale Clean",
    p: "MVP-speed builds with architecture that doesn't need a rewrite at Series A. We know the shortcuts that don't bite you later.",
    bullets: ["Production-ready MVP architecture", "Auth, payments, and APIs included", "Growth-ready from day one"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    bgTint: "rgba(16,185,129,0.04)",
    accent: "#10B981",
    h3: "Healthcare Systems That Respect Compliance",
    p: "Patient booking flows, HIPAA-aware data handling, and automation that reduces admin load without cutting corners on privacy.",
    bullets: ["Compliance-aware architecture", "Patient flow automation", "Secure records handling"],
  },
  {
    id: "education",
    label: "Education",
    bgTint: "rgba(124,58,237,0.04)",
    accent: "#7C3AED",
    h3: "Built for Both Sides of the Classroom",
    p: "Learning platforms and admin systems built for students and staff — not just one side. Enrollment, LMS, and parent communication, unified.",
    bullets: ["Enrollment & onboarding flows", "LMS integrations", "Multi-role dashboards"],
  },
  {
    id: "finance",
    label: "Finance",
    bgTint: "rgba(37,99,235,0.05)",
    accent: "#2563EB",
    h3: "Tools Built With Financial Precision",
    p: "Dashboards and trading tools built with the accuracy financial decisions actually require. Real-time data, not best-effort approximations.",
    bullets: ["Real-time data accuracy", "Compliance-aware architecture", "Secure client dashboards"],
  },
  {
    id: "realestate",
    label: "Real Estate",
    bgTint: "rgba(245,158,11,0.04)",
    accent: "#F59E0B",
    h3: "Platforms That Convert Browsers Into Buyers",
    p: "Listing platforms and lead systems that convert browsers into booked viewings. Less time chasing cold leads, more time closing.",
    bullets: ["Smart listing search & filters", "Automated lead qualification", "CRM & follow-up flows"],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    bgTint: "rgba(124,58,237,0.04)",
    accent: "#7C3AED",
    h3: "Less Friction, More Revenue",
    p: "Storefronts and automation that reduce cart abandonment and repeat-purchase friction. Built for conversion, not just aesthetics.",
    bullets: ["Checkout & conversion optimisation", "Abandoned cart recovery", "Retention & loyalty flows"],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    bgTint: "rgba(6,182,212,0.04)",
    accent: "#06B6D4",
    h3: "Guest Experiences That Scale With You",
    p: "Booking systems and guest communication that feel as premium as the stay itself. Automation that never feels automated.",
    bullets: ["Smart reservation systems", "Automated guest messaging", "Review & loyalty integration"],
  },
  {
    id: "logistics",
    label: "Logistics",
    bgTint: "rgba(16,185,129,0.04)",
    accent: "#10B981",
    h3: "Fewer Calls, More Deliveries",
    p: "Tracking dashboards and workflow automation that cut manual coordination time. Real-time visibility without the spreadsheet chaos.",
    bullets: ["Real-time tracking dashboards", "Dispatch workflow automation", "Driver & fleet management"],
  },
] as const;

const panelVariants = {
  initial: { opacity: 0, x: 12  },
  animate: { opacity: 1, x: 0,  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
  exit:    { opacity: 0, x: -12, transition: { duration: 0.2,  ease: "easeIn" as const } },
};

const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Industries() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKey = useCallback((e: React.KeyboardEvent, idx: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (idx + 1) % INDUSTRIES.length;
    if (e.key === "ArrowLeft")  next = (idx - 1 + INDUSTRIES.length) % INDUSTRIES.length;
    if (e.key === "Home")       next = 0;
    if (e.key === "End")        next = INDUSTRIES.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActiveIdx(next);
      tabsRef.current[next]?.focus();
    }
  }, []);

  const industry = INDUSTRIES[activeIdx];

  return (
    <section
      id="industries"
      className="py-16 lg:py-[120px] bg-white"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-[600px] mb-12"
        >
          <motion.p variants={headerItem}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
            Industries
          </motion.p>
          <motion.h2 variants={headerItem} id="industries-heading"
            className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
            Built for Your Business, Not Generic Software
          </motion.h2>
          <motion.p variants={headerItem}
            className="mt-4 text-[16px] text-[#0B1020]/60 max-w-[480px] leading-relaxed">
            Industry-specific thinking baked in from day one, not retrofitted after.
          </motion.p>
        </motion.div>

        {/* Tab row */}
        <div
          role="tablist"
          aria-label="Industry categories"
          className="flex flex-wrap gap-2 mb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {INDUSTRIES.map((ind, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={ind.id}
                ref={(el) => { tabsRef.current[idx] = el; }}
                role="tab"
                id={`ind-tab-${ind.id}`}
                aria-selected={isActive}
                aria-controls={`ind-panel-${ind.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIdx(idx)}
                onKeyDown={(e) => handleKey(e, idx)}
                className={[
                  "relative px-4 py-2 rounded-full text-[13px] transition-colors duration-200",
                  "outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer",
                  isActive
                    ? "font-semibold text-[#0B1020] z-10"
                    : "font-medium text-[#0B1020]/50 hover:text-[#0B1020]/80",
                ].join(" ")}
              >
                {isActive && (
                  <motion.span
                    layoutId="ind-indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] -z-10"
                  />
                )}
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            role="tabpanel"
            id={`ind-panel-${industry.id}`}
            aria-labelledby={`ind-tab-${industry.id}`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative min-h-[360px] rounded-[28px] p-8 md:p-12 overflow-hidden"
            style={{ background: "#F8FAFC", border: "1px solid rgba(11,16,32,0.06)" }}
          >
            {/* Per-industry tint bg */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 80% 50%, ${industry.bgTint.replace("0.04", "1")
                  .replace("rgba(", "rgba(").replace(/,[^,]+\)$/, ", 0.08)")}, transparent 60%)`,
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <div>
                <h3 className="font-display text-[22px] md:text-[28px] font-extrabold tracking-tight text-[#0B1020] leading-[1.2]">
                  {industry.h3}
                </h3>
                <p className="mt-4 text-[16px] text-[#0B1020]/65 leading-[1.6] max-w-[420px]">
                  {industry.p}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-4">
                {industry.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: industry.accent }}
                      aria-hidden="true"
                    />
                    <span className="text-[14px] text-[#0B1020]/75 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
