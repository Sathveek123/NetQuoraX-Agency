"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticWrap from "@/components/ui/MagneticWrap";

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Individual blob config
const BLOBS = [
  { color: "#2563EB", size: 600, top: "-20%", left: "10%",  blur: 140, opacity: 0.22, x: [0,25,-20,0] as number[], y: [0,-25,15,0] as number[], dur: 12 },
  { color: "#7C3AED", size: 500, top: "30%",  left: "60%",  blur: 140, opacity: 0.20, x: [0,-30,20,0] as number[], y: [0,20,-30,0] as number[], dur: 14 },
  { color: "#06B6D4", size: 400, top: "60%",  left: "-10%", blur: 140, opacity: 0.18, x: [0,20,-15,0] as number[], y: [0,-20,25,0] as number[], dur: 10 },
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-[140px] overflow-hidden bg-[#0B1020]"
    >
      {/* Animated gradient blobs */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ x: b.x, y: b.y }}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
          }}
        />
      ))}

      {/* Very faint grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-[36px] md:text-[56px] font-semibold tracking-tight text-white leading-[1.1]"
          >
            Let&apos;s Build Something Incredible.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-[18px] text-white/60 leading-relaxed max-w-[480px] mx-auto"
          >
            Tell us what you&apos;re trying to build. We&apos;ll tell you exactly how we&apos;d approach it.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary — white bg, Ink text */}
            <MagneticWrap radius={100} maxDistance={8}>
              <a
                href="mailto:hello@netquorax.com"
                className="inline-flex items-center gap-2.5 bg-white text-[#0B1020] text-[15px] font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white cursor-none shadow-lg shadow-black/30"
              >
                Start Your Project
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </MagneticWrap>

            {/* Secondary — outline */}
            <MagneticWrap radius={80} maxDistance={6}>
              <a
                href="mailto:hello@netquorax.com"
                className="inline-flex items-center text-white text-[15px] font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/5 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white cursor-none"
              >
                Schedule Free Consultation
              </a>
            </MagneticWrap>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
