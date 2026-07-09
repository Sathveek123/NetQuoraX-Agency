"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, animate } from "framer-motion";

interface SplashScreenProps {
  onComplete: (skipped: boolean) => void;
  onUnmount: () => void;
}

export default function SplashScreen({ onComplete, onUnmount }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [curtainTriggered, setCurtainTriggered] = useState(false);
  const [percent, setPercent] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const countVal = useMotionValue(0);

  // Handle skip trigger
  const handleSkip = () => {
    if (exiting) return;
    setExiting(true);
  };

  // Skip via Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [exiting]);

  // Main lifecycle
  useEffect(() => {
    // Check if visited in sessionStorage
    const isVisited = sessionStorage.getItem("nqx_visited") === "true";
    if (isVisited) {
      onComplete(true);
      onUnmount();
      return;
    }

    if (shouldReduceMotion) {
      // Reduced motion bypass
      onComplete(true);
      const timer = setTimeout(() => {
        onUnmount();
      }, 300);
      return () => clearTimeout(timer);
    }

    // iOS-safe scroll lock — prevents rubber-band under-scroll
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Start counter linear progression immediately on mount
    const animControls = animate(countVal, 100, {
      duration: 3.2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setPercent(Math.round(latest));
      }
    });

    // Auto trigger exit sequence after Phase 5 finishes (3.2s)
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3200);

    return () => {
      animControls.stop();
      clearTimeout(exitTimer);
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, parseInt(y) * -1);
    };
  }, [shouldReduceMotion]);

  // Staggered curtain lift trigger
  useEffect(() => {
    if (exiting) {
      // Notify parent to start hero animations (uncover Hero mid-wipe)
      onComplete(false);

      // Start curtain wipe 0.4s after exit collapse starts
      const curtainTimer = setTimeout(() => {
        setCurtainTriggered(true);
      }, 400);

      // Unmount splash entirely 0.6s after curtain starts (0.1s Layer B delay + 0.5s duration)
      const unmountTimer = setTimeout(() => {
        sessionStorage.setItem("nqx_visited", "true");
        const y = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        if (y) window.scrollTo(0, parseInt(y) * -1);
        onUnmount();
      }, 1000);

      return () => {
        clearTimeout(curtainTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [exiting]);

  // Visual Animation Variants
  const logoScaleVariants = {
    hidden: { scale: 0.9 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        pathLength: {
          duration: 0.6,
          ease: [0.65, 0, 0.35, 1] as const,
          delay: 0.3
        },
        fillOpacity: {
          duration: 0.15,
          delay: 0.9,
          ease: "linear" as const
        }
      }
    }
  };

  const wordmarkVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.9
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 0.5,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 1.3,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const skipVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 1.5
      }
    }
  };

  const curtainEase = [0.76, 0, 0.24, 1] as const;

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none">
      {/* BASE BACKGROUND LAYER */}
      <motion.div
        className="absolute inset-0 bg-[#111827] pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
      />

      {/* CONTENT LAYER */}
      {!curtainTriggered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center justify-center gap-6"
            animate={exiting ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] as const }}
          >
            {/* SVG Logomark Drawing */}
            <motion.div
              variants={logoScaleVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] p-2"
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <defs>
                  <linearGradient id="nqxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M18 46V18h6l16 20V18h6v28h-6L24 26v20h-6z"
                  stroke="url(#nqxGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="url(#nqxGradient)"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </motion.div>

            {/* SplitText Wordmark Reveal */}
            <motion.h2
              variants={wordmarkVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl font-extrabold tracking-tight text-white flex gap-[1px]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              {"NetquoraX".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className={letter === "X" ? "grad-text" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-semibold"
            >
              AUTOMATE · INNOVATE · SCALE
            </motion.p>

            {/* Progress Bar & Live Counter */}
            <div className="relative mt-8 w-[160px] md:w-[240px]">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.2, ease: "easeInOut" }}
                />
              </div>
              <div className="absolute right-0 top-[-22px]">
                <span
                  className="text-[11px] text-white/60 font-semibold select-none"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {String(percent).padStart(2, "0")}%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* SKIP BUTTON */}
      {!exiting && (
        <motion.button
          variants={skipVariants}
          initial="hidden"
          animate="visible"
          onClick={handleSkip}
          className="absolute bottom-8 right-8 pointer-events-auto text-[12px] text-white/40 hover:text-white/80 hover:underline transition-colors focus:outline-none cursor-none z-[100]"
        >
          Skip Intro &rarr;
        </motion.button>
      )}

      {/* STAGGERED CURTAIN PANELS (EXIT TIMING) */}
      {curtainTriggered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Layer A - Dark Back Panel */}
          <motion.div
            className="absolute inset-0 bg-[#111827] z-10"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: curtainEase, delay: 0 }}
          />

          {/* Layer B - Light Front Panel */}
          <motion.div
            className="absolute inset-0 bg-[#F8FAFC] z-20"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: curtainEase, delay: 0.1 }}
          />
        </div>
      )}
    </div>
  );
}
