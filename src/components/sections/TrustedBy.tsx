"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

/**
 * Placeholder wordmark logos — professional company-style text marks
 * rendered as inline SVGs so they scale crisply and respond to grayscale filter.
 * Replace `label` with real SVG logo files when available.
 */
const LOGOS = [
  { name: "Orbitfy",    color: "#2563EB" },
  { name: "Lumenpay",   color: "#7C3AED" },
  { name: "Verdant",    color: "#10B981" },
  { name: "Northwave",  color: "#0B1020" },
  { name: "Kestrel",    color: "#F59E0B" },
  { name: "Haloform",   color: "#06B6D4" },
  { name: "Stackrise",  color: "#EC4899" },
  { name: "Polaris",    color: "#2563EB" },
  { name: "Syntex",     color: "#7C3AED" },
  { name: "Driftwork",  color: "#10B981" },
  { name: "Zenpath",    color: "#0B1020" },
  { name: "Arcflow",    color: "#F59E0B" },
];

// Split into two interleaved halves so the rows show different logos
const ROW_1 = LOGOS.slice(0, 8);
const ROW_2 = [...LOGOS.slice(4), ...LOGOS.slice(0, 4)]; // offset by 4 for variety

/** Renders a single wordmark logo item */
function LogoItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="marquee-logo" title={name}>
      {/* Inline SVG wordmark — acts like a real SVG logo file for grayscale/color filter purposes */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${name.length * 11} 28`}
        height="28"
        width={name.length * 11}
        aria-label={name}
        role="img"
      >
        <text
          x="0"
          y="21"
          fontFamily="'Manrope', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="18"
          fill={color}
          letterSpacing="-0.5"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

export default function TrustedBy() {
  const row1Items = ROW_1.map((logo) => (
    <LogoItem key={logo.name} name={logo.name} color={logo.color} />
  ));

  const row2Items = ROW_2.map((logo) => (
    <LogoItem key={logo.name} name={logo.name} color={logo.color} />
  ));

  return (
    <section
      aria-label="Trusted by companies including Orbitfy, Lumenpay, Verdant, Northwave and more"
      className="relative py-16 bg-[#F8FAFC]"
    >
      {/* Very subtle full-bleed top separator */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(11,16,32,0.06)]" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Section label — viewport-triggered entrance */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-center mb-8 text-[13px] font-medium uppercase tracking-[0.05em] text-[#0B1020]/40"
        >
          Trusted by founders and teams across industries
        </motion.p>
      </div>

      {/* Row 1 — scrolls left */}
      <Marquee items={row1Items} />

      {/* Row 2 — scrolls right, hidden on mobile */}
      <Marquee items={row2Items} reverse secondary />
    </section>
  );
}
