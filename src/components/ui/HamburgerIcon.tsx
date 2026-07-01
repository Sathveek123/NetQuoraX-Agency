"use client";

import React from "react";
import { motion } from "framer-motion";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  colorClass?: string;
}

export default function HamburgerIcon({ isOpen, onClick, colorClass = "bg-ink" }: HamburgerIconProps) {
  const lineEase = [0.65, 0, 0.35, 1] as const;

  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="relative flex items-center justify-center w-11 h-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full cursor-none group"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center relative">
        {/* Top Line */}
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -4
          }}
          transition={{ duration: 0.35, ease: lineEase }}
          className={`absolute w-6 h-[2px] rounded-full ${colorClass}`}
          style={{ transformOrigin: "center" }}
        />
        {/* Bottom Line */}
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 4
          }}
          transition={{ duration: 0.35, ease: lineEase }}
          className={`absolute w-6 h-[2px] rounded-full ${colorClass}`}
          style={{ transformOrigin: "center" }}
        />
      </div>
    </button>
  );
}
