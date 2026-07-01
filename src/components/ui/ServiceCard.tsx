"use client";

import React from "react";
import { motion } from "framer-motion";

// Accent tint cycling: index % 3
const TINTS = [
  { bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.4)",  icon: "#2563EB" }, // blue
  { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.4)", icon: "#7C3AED" }, // violet
  { bg: "rgba(6,182,212,0.08)",  border: "rgba(6,182,212,0.4)",  icon: "#06B6D4" }, // cyan
];

interface ServiceCardProps {
  title: string;
  description: string;
  /** Lucide icon element — aria-hidden is applied by wrapper */
  icon: React.ReactNode;
  /** 0-based index, used for tint cycling */
  index: number;
}

// Consumed by parent grid stagger (passed down via variants inheritance)
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const tint = TINTS[index % 3];

  return (
    <motion.article
      // Grid stagger — these variants are inherited from the parent grid container
      variants={cardVariants}
      // Hover state name so children can key their own variants off it
      initial="rest"
      whileHover="hover"
      // Card-level hover: lift + border colour + shadow
      // whileHover overrides `initial` on the article itself too
      animate="rest"
      custom={tint}
      className="group relative bg-white rounded-[20px] p-8 border border-[rgba(11,16,32,0.08)] shadow-[0_1px_2px_rgba(11,16,32,0.02)] cursor-default outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] will-change-transform"
      // Framer variants for the card container itself
      // Note: whileHover merges with initial/animate, so we define both states
      style={{
        // Ensure CSS doesn't fight Framer's transform
      }}
    >
      {/* ── Hover overlay: lifts the card and changes border/shadow ── */}
      {/* We use a nested motion.div trick: the article handles the y lift   */}
      {/* and the overlay handles border/shadow via absolute inset            */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        variants={{
          rest:  {
            boxShadow: "0 1px 2px rgba(11,16,32,0.02)",
            borderColor: "rgba(11,16,32,0.08)",
            opacity: 1,
          },
          hover: {
            boxShadow: "0 16px 40px rgba(11,16,32,0.08)",
            borderColor: tint.border,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ border: "1px solid", borderColor: "rgba(11,16,32,0.08)" }}
      />

      {/* ── Y lift on the content wrapper ── */}
      <motion.div
        className="relative z-10 flex flex-col h-full"
        variants={{
          rest:  { y: 0   },
          hover: { y: -6  },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Icon container — scale+rotate driven by parent hover state */}
        <motion.div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
          style={{ background: tint.bg }}
          variants={{
            rest:  { scale: 1,    rotate: 0 },
            hover: { scale: 1.05, rotate: 5 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
        >
          <span style={{ color: tint.icon }} aria-hidden="true">
            {icon}
          </span>
        </motion.div>

        {/* Text */}
        <h3 className="mt-5 text-[18px] font-semibold text-[#0B1020] leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-[#0B1020]/55 leading-[1.5]">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
}
