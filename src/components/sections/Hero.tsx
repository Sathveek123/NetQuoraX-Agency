"use client";

import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import MagneticWrap from "@/components/ui/MagneticWrap";
import TiltCard from "@/components/ui/TiltCard";
import RepelCard from "@/components/ui/RepelCard";

// Numerical count-up helper
function StatCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const anim = animate(0, value, {
        duration: 1.2,
        ease: "easeOut" as const,
        onUpdate: (latest) => setCount(Math.round(latest))
      });
      return () => anim.stop();
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return <span>{count}{suffix}</span>;
}

// Shared easing curve
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [arrowHovered, setArrowHovered] = useState(false);

  // ── Petal Bloom Media Query Hook & States ──
  const [hasHover, setHasHover] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    setHasHover(hoverMedia.matches);
    setReducedMotion(motionMedia.matches);

    const handleHoverChange = (e: MediaQueryListEvent) => setHasHover(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    hoverMedia.addEventListener("change", handleHoverChange);
    motionMedia.addEventListener("change", handleMotionChange);

    return () => {
      hoverMedia.removeEventListener("change", handleHoverChange);
      motionMedia.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const isMobile = !hasHover;
  const isStatic = reducedMotion;

  const initialVal = isStatic ? "hover" : "rest";
  const animateVal = isStatic ? "hover" : "rest";
  const whileHoverVal = (isStatic || isMobile) ? undefined : "hover";

  // Spring transition
  const springConfig = { type: "spring" as const, stiffness: 180, damping: 20, mass: 0.8 };

  const bgPhotoVariants = {
    rest: {
      x: 0,
      y: (isMobile || isStatic) ? 0 : [0, -5, 0],
      rotate: -1,
      scale: 1,
      transition: (isMobile || isStatic) ? {} : {
        y: { repeat: Infinity, repeatType: "reverse" as const, duration: 6.5, ease: "easeInOut" as const }
      }
    },
    hover: {
      x: -16,
      y: -12,
      rotate: -3,
      scale: 0.97
    }
  };

  const workflowCardVariants = {
    rest: {
      x: 0,
      y: (isMobile || isStatic) ? 0 : [0, -8, 0],
      rotate: 2,
      scale: 1,
      boxShadow: '0 20px 40px rgba(11,16,32,0.12)',
      transition: (isMobile || isStatic) ? {} : {
        y: { repeat: Infinity, repeatType: "reverse" as const, duration: 5, ease: "easeInOut" as const }
      }
    },
    hover: {
      x: 28,
      y: -24,
      rotate: 4,
      scale: 1.03,
      boxShadow: '0 32px 60px rgba(11,16,32,0.18)'
    }
  };

  const signalCardVariants = {
    rest: {
      x: 0,
      y: (isMobile || isStatic) ? 0 : [0, -6, 0],
      rotate: -2,
      scale: 1,
      boxShadow: '0 20px 40px rgba(11,16,32,0.12)',
      transition: (isMobile || isStatic) ? {} : {
        y: { repeat: Infinity, repeatType: "reverse" as const, duration: 5.8, ease: "easeInOut" as const }
      }
    },
    hover: {
      x: -28,
      y: 24,
      rotate: -4,
      scale: 1.05,
      boxShadow: '0 32px 60px rgba(11,16,32,0.18)'
    }
  };

  // H1 word stagger variants — plain objects, no function, fully typed
  const h1ContainerVariants = {
    hidden: {},
    visible: {
      transition: { delayChildren: 0.1, staggerChildren: 0.06 }
    }
  };

  const h1WordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE }
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-[88px] pb-20 overflow-hidden bg-[#F8FAFC]"
    >
      {/* SVG DOT GRID TEXTURE */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0B1020" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      {/* DRIFTING VIOLET ORB */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 8, ease: "easeInOut" as const, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full z-0 pointer-events-none select-none"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.15
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* ── LEFT: TEXT COLUMN ── */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6 text-left">

          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.2)] rounded-full px-4 py-1.5 text-xs font-semibold text-[#2563EB] mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
              className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
            />
            Digital Growth Partner
          </motion.div>

          {/* H1 — Word Stagger */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={h1ContainerVariants}
            className="font-display text-[44px] md:text-[56px] lg:text-[72px] leading-[1.08] font-extrabold tracking-tight text-[#0B1020]"
          >
            {"Helping Businesses".split(" ").map((word, i) => (
              <span key={`line1-${i}`} className="inline-block mr-[0.22em]">
                <motion.span variants={h1WordVariants} className="inline-block">{word}</motion.span>
              </span>
            ))}
            <br />
            {["Automate,", "Scale"].map((word, i) => (
              <span key={`line2-${i}`} className="inline-block mr-[0.22em]">
                <motion.span
                  variants={h1WordVariants}
                  className="inline-block bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent"
                  style={{ color: "#2563EB" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br />
            {"& Grow Faster.".split(" ").map((word, i) => (
              <span key={`line3-${i}`} className="inline-block mr-[0.22em]">
                <motion.span variants={h1WordVariants} className="inline-block">{word}</motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" as const }}
            className="mt-6 text-[18px] leading-[1.6] text-[#0B1020]/65 max-w-[480px] font-normal"
          >
            We build websites, apps, AI automation, trading systems and growth campaigns
            that move real business numbers.
          </motion.p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            {/* Primary */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.5, ease: "easeOut" as const }}
            >
              <MagneticWrap radius={100} maxDistance={8}>
                <a
                  href="#contact"
                  onMouseEnter={() => setArrowHovered(true)}
                  onMouseLeave={() => setArrowHovered(false)}
                  className="group relative inline-flex items-center gap-2.5 bg-[#2563EB] text-white text-[15px] font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#2563EB]/20 hover:scale-[1.03] hover:shadow-[#2563EB]/35 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-none"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: arrowHovered ? 4 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.span>
                </a>
              </MagneticWrap>
            </motion.div>

            {/* Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.58, ease: "easeOut" as const }}
            >
              <MagneticWrap radius={60} maxDistance={5}>
                <a
                  href="#contact"
                  className="inline-flex items-center border border-[#0B1020]/15 text-[#0B1020] text-[15px] font-semibold px-8 py-4 rounded-full hover:border-[#0B1020]/30 hover:bg-[#0B1020]/[0.02] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-none"
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
            transition={{ duration: 0.3, delay: 0.65, ease: "easeOut" as const }}
            className="mt-12 w-full flex items-center gap-4 sm:gap-6 border-t border-[#0B1020]/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-[#0B1020]">
                <StatCounter value={50} suffix="+" delay={0.65} />
              </span>
              <span className="text-[11px] sm:text-[13px] text-[#0B1020]/50 font-semibold uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="h-8 w-[1px] bg-[#0B1020]/10" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-[#0B1020]">
                <StatCounter value={12} suffix="+" delay={0.65} />
              </span>
              <span className="text-[11px] sm:text-[13px] text-[#0B1020]/50 font-semibold uppercase tracking-wider mt-1">Industries</span>
            </div>
            <div className="h-8 w-[1px] bg-[#0B1020]/10" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-[#0B1020]">
                <StatCounter value={98} suffix="%" delay={0.65} />
              </span>
              <span className="text-[11px] sm:text-[13px] text-[#0B1020]/50 font-semibold uppercase tracking-wider mt-1">On-Time</span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: GLASS DASHBOARD CLUSTER (PETAL BLOOM HOVER INTERACTION) ── */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full mt-10 lg:mt-0 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="w-full max-w-[480px] h-[480px] relative select-none"
            aria-hidden="true"
          >
            <motion.div
              initial={initialVal}
              whileHover={whileHoverVal}
              animate={animateVal}
              className="relative w-full h-full cursor-pointer pointer-events-auto"
            >
              {/* Layer 1: Background photo panel (back-most, desaturated context photo) */}
              <motion.div
                variants={bgPhotoVariants}
                transition={springConfig}
                className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-[24px] overflow-hidden shadow-xl"
                style={{ zIndex: 10 }}
              >
                <img
                  src="/images/hero-team.png"
                  alt="NetquoraX team at work"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1.02) saturate(0.85)" }}
                />
                {/* Soft overlay so glass panels stay readable */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10" />
              </motion.div>

              {/* Layer 2: Workflow card (mid-layer, offset top-right) */}
              <motion.div
                variants={workflowCardVariants}
                transition={springConfig}
                className="absolute top-4 right-4 w-[60%] h-[42%]"
                style={{ zIndex: 20 }}
              >
                <div
                  className="w-full h-full rounded-2xl p-5 border border-white/80 flex flex-col justify-between select-none"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Active Workflow</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    </div>
                    <div className="space-y-2 text-xs font-semibold text-[#0B1020]">
                      <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow-sm border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" /> Lead Capture
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow-sm border border-slate-100 ml-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" /> AI Qualified
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#64748B]/80 font-bold border-t border-slate-100 pt-2 flex justify-between">
                    <span>98.6% Accuracy</span><span>v1.0.2</span>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: Signal card (front-most layer, offset bottom-left) */}
              <motion.div
                variants={signalCardVariants}
                transition={springConfig}
                className="absolute bottom-4 left-4 w-[65%] h-[48%]"
                style={{ zIndex: 30 }}
              >
                <div
                  className="w-full h-full rounded-2xl p-4 border border-white/10 flex flex-col justify-between text-white"
                  style={{
                    background: "rgba(11,16,32,0.92)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-white/50 uppercase mb-2">
                    <span>Signal Engine</span>
                    <motion.span
                      className="text-[#10B981] font-extrabold"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      +18.4%
                    </motion.span>
                  </div>

                  {/* Live candlestick chart */}
                  <div className="flex-1 relative">
                    <svg
                      viewBox="0 0 196 52"
                      className="w-full h-full"
                      aria-label="Live trading signal chart"
                    >
                      {/* Faint grid lines */}
                      {[13, 26, 39].map((y) => (
                        <line key={y} x1="0" y1={y} x2="196" y2={y}
                          stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      ))}

                      {/* Candlesticks — overall upward trend */}
                      {[
                        { x: 6,   oy: 48, cy: 40, hy: 38, ly: 50 },
                        { x: 20,  oy: 40, cy: 34, hy: 32, ly: 42, bear: false },
                        { x: 34,  oy: 32, cy: 37, hy: 31, ly: 39, bear: true  },
                        { x: 48,  oy: 37, cy: 28, hy: 26, ly: 38, bear: false },
                        { x: 62,  oy: 28, cy: 32, hy: 27, ly: 33, bear: true  },
                        { x: 76,  oy: 32, cy: 22, hy: 20, ly: 33, bear: false },
                        { x: 90,  oy: 22, cy: 16, hy: 14, ly: 23, bear: false },
                        { x: 104, oy: 16, cy: 20, hy: 15, ly: 21, bear: true  },
                        { x: 118, oy: 20, cy: 12, hy: 10, ly: 21, bear: false },
                        { x: 132, oy: 12, cy: 8,  hy: 6,  ly: 13, bear: false },
                        { x: 146, oy: 8,  cy: 10, hy: 7,  ly: 11, bear: true  },
                        { x: 160, oy: 10, cy: 5,  hy: 3,  ly: 11, bear: false },
                        { x: 174, oy: 5,  cy: 7,  hy: 4,  ly: 8,  bear: true  },
                        { x: 188, oy: 7,  cy: 3,  hy: 1,  ly: 8,  bear: false },
                      ].map((c, i) => {
                        const isBull = !c.bear;
                        const color = isBull ? "#10B981" : "#EF4444";
                        const bodyTop = isBull ? c.cy : c.oy;
                        const bodyH   = Math.abs(c.oy - c.cy) || 2;
                        return (
                          <motion.g
                            key={i}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ delay: 0.4 + i * 0.07, duration: 0.3, ease: "easeOut" }}
                            style={{ transformOrigin: `${c.x}px 52px` }}
                          >
                            {/* Wick */}
                            <line x1={c.x} y1={c.hy} x2={c.x} y2={c.ly}
                              stroke={color} strokeWidth="1.2" strokeLinecap="round" />
                            {/* Body */}
                            <rect x={c.x - 4} y={bodyTop} width={8} height={bodyH}
                              rx="1.5" fill={color} fillOpacity={0.9} />
                          </motion.g>
                        );
                      })}

                      {/* Current price blink line */}
                      <motion.line
                        x1="180" y1="3" x2="196" y2="3"
                        stroke="#10B981" strokeWidth="1" strokeDasharray="2 2"
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>

                    {/* Live price tag */}
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute top-0 right-0 text-[9px] font-bold text-[#10B981] bg-[#10B981]/15 px-1.5 py-0.5 rounded"
                    >
                      LIVE
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-[10px] text-white/40 font-bold pt-2 border-t border-white/5 mt-1">
                    <span>BTC / USD</span>
                    <span>64% Win Rate</span>
                  </div>
                </div>
              </motion.div>

              {/* Glow node — cyan */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                className="absolute top-1/2 left-2 w-3.5 h-3.5 rounded-full bg-[#06B6D4] z-30"
                style={{ boxShadow: "0 0 15px #06B6D4" }}
              />
              {/* Glow node — violet */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 }}
                className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-[#7C3AED] z-30"
                style={{ boxShadow: "0 0 15px #7C3AED" }}
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
