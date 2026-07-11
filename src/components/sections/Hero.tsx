"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MagneticWrap from "@/components/ui/MagneticWrap";
import HeroCarousel from "@/components/ui/HeroCarousel";

// Shared easing curve
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [arrowHovered, setArrowHovered] = useState(false);

  // Line animation variants for H1
  const lineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE,
        delay: i * 0.09,
      },
    }),
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-[120px] pb-20 overflow-hidden bg-light"
    >
      {/* SVG DOT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="var(--ink)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      {/* AMBIENT GRADIENT SHAPE */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full z-0 pointer-events-none select-none opacity-[0.06] blur-[120px]"
        style={{
          background: "radial-gradient(circle, #2563EB 0%, transparent 70%)"
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        {/* ── LEFT: TEXT COLUMN (60% width equivalent) ── */}
        <div className="lg:col-span-1 flex flex-col items-start pr-0 lg:pr-4 text-left">
          
          {/* Eyebrow Pill with Pulsing Live Dot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#2563EB]/5 border border-[#2563EB]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#2563EB] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            Automation &middot; AI Systems &middot; Trading Infrastructure
          </motion.div>

          {/* Staggered H1 Reveal */}
          <h1 className="font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.05] font-extrabold tracking-tight text-ink mb-6 select-text">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="block"
            >
              We Help Businesses
            </motion.span>
            
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="block shimmer-text font-extrabold"
            >
              Automate, Scale
            </motion.span>
            
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="block"
            >
              &amp; Grow
            </motion.span>
          </h1>

          <style jsx>{`
            .shimmer-text {
              background: linear-gradient(90deg, #2563EB 0%, #7C3AED 25%, #2563EB 50%, #7C3AED 75%, #2563EB 100%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: textShimmer 4s linear infinite;
            }
            @keyframes textShimmer {
              0% { background-position: 0% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="text-[18px] leading-[1.6] text-muted max-w-[480px] font-normal"
          >
          We build the automation, AI, and trading systems that help startups and businesses grow faster — without the manual grind.
          </motion.p>

          {/* CTA Row */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Primary Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            >
              <MagneticWrap radius={100} maxDistance={8}>
                <a
                  href="#contact"
                  onMouseEnter={() => setArrowHovered(true)}
                  onMouseLeave={() => setArrowHovered(false)}
                  className="group relative inline-flex items-center gap-2.5 bg-[#2563EB] text-white text-[15px] font-semibold px-8 py-4 rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: arrowHovered ? 4 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.span>
                </a>
              </MagneticWrap>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.58, ease: "easeOut" }}
            >
              <MagneticWrap radius={60} maxDistance={5}>
                <a
                  href="#contact"
                  className="inline-flex items-center border border-ink text-ink text-[15px] font-semibold px-8 py-4 rounded-xl hover:bg-[#2563EB]/5 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
                >
                  Book Free Consultation
                </a>
              </MagneticWrap>
            </motion.div>
          </div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.65, ease: "easeOut" }}
            className="mt-12 w-full flex items-center gap-4 sm:gap-6 border-t border-border-ink pt-6"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-ink">50+</span>
              <span className="text-[11px] text-ink/50 font-bold uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="h-6 w-[1px] bg-border-ink" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-ink">12+</span>
              <span className="text-[11px] text-ink/50 font-bold uppercase tracking-wider mt-1">Industries</span>
            </div>
            <div className="h-6 w-[1px] bg-border-ink" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-ink">98%</span>
              <span className="text-[11px] text-ink/50 font-bold uppercase tracking-wider mt-1">On-Time</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-1 flex justify-center items-center relative w-full mt-10 lg:mt-0 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="relative w-full max-w-[640px] select-none"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[#2563EB]/8 blur-[80px] rounded-full scale-90 -z-10" />
            <HeroCarousel />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
