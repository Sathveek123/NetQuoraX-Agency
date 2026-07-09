"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Settings, Wrench, Activity } from "lucide-react";

interface SplashScreenProps {
  onComplete: (skipped: boolean) => void;
  onUnmount: () => void;
}

export default function SplashScreen({ onComplete, onUnmount }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("Initializing systems...");
  const shouldReduceMotion = useReducedMotion();
  const hasFinished = useRef(false);

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
    // Check session flag
    const isSeen = sessionStorage.getItem("nqx_intro_seen") === "true";
    if (isSeen) {
      onComplete(true);
      onUnmount();
      return;
    }

    if (shouldReduceMotion) {
      onComplete(true);
      const timer = setTimeout(() => {
        onUnmount();
      }, 300);
      return () => clearTimeout(timer);
    }

    // Scroll lock
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Simulated asset load ticking smoothly to 100% in 2.2 seconds
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeInOutQuad curve
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
      const currentPercent = Math.round(eased * 100);
      setPercent(currentPercent);

      // Cycle status text
      if (currentPercent < 30) {
        setStatusText("Initializing systems...");
      } else if (currentPercent < 65) {
        setStatusText("Compiling modules...");
      } else if (currentPercent < 90) {
        setStatusText("Optimizing assets...");
      } else {
        setStatusText("Ready.");
      }
      
      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 16);

    // Trigger exit at 2.2 seconds
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, parseInt(y) * -1);
    };
  }, [shouldReduceMotion]);

  // Clean unmount trigger
  useEffect(() => {
    if (exiting && !hasFinished.current) {
      hasFinished.current = true;
      onComplete(false);

      const unmountTimer = setTimeout(() => {
        sessionStorage.setItem("nqx_intro_seen", "true");
        const y = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        if (y) window.scrollTo(0, parseInt(y) * -1);
        onUnmount();
      }, 600); // Wait for fade out and split out transition

      return () => clearTimeout(unmountTimer);
    }
  }, [exiting]);

  if (shouldReduceMotion) return null;

  // Render icons active state based on percent
  const getActiveStage = () => {
    if (percent < 34) return "compile";
    if (percent < 67) return "optimize";
    return "deploy";
  };

  const activeStage = getActiveStage();

  // Easing curves
  const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#0a0e1a] flex flex-col items-center justify-center overflow-hidden"
      role="status"
      aria-label="Loading NetquoraX"
    >
      {/* Repeating Circuit Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='none'/%3E%3Cpath d='M10 0v20h20M70 0v10H60v10M0 30h30v20H10v30M50 80V50h20' stroke='%233b82f6' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          animation: "panCircuit 60s linear infinite"
        }}
      />
      <style jsx global>{`
        @keyframes panCircuit {
          0% { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
      `}</style>

      {/* Main Assembly Wrapper */}
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-[420px] px-6 text-center"
        animate={exiting ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* LOGO ASSEMBLY SVG */}
        <div className="relative w-48 h-24 mb-6">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>

            {/* Stage A: Circuit Lines (staggered draw-in) */}
            <motion.path
              d="M 5,20 L 25,20 L 38,33"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            />
            <motion.path
              d="M 5,32 L 30,32 L 35,37"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 5,48 L 30,48 L 35,43"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 5,60 L 25,60 L 38,47"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Circuit Node Dots (staggered scale pop) */}
            <motion.circle
              cx="5" cy="20" r="2.5"
              fill="#2563EB"
              style={{ filter: "drop-shadow(0 0 4px rgba(37,99,235,0.8))" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.45 }}
            />
            <motion.circle
              cx="5" cy="32" r="2.5"
              fill="#06B6D4"
              style={{ filter: "drop-shadow(0 0 4px rgba(6,182,212,0.8))" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.55 }}
            />
            <motion.circle
              cx="5" cy="48" r="2.5"
              fill="#06B6D4"
              style={{ filter: "drop-shadow(0 0 4px rgba(6,182,212,0.8))" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.65 }}
            />
            <motion.circle
              cx="5" cy="60" r="2.5"
              fill="#2563EB"
              style={{ filter: "drop-shadow(0 0 4px rgba(37,99,235,0.8))" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.75 }}
            />

            {/* Stage B: Left Chevron (Blue) and Right Chevron (White) slide-in X assembly */}
            {/* When exiting, they fly apart (reverse) */}
            <motion.path
              d="M 35,15 L 55,40 L 35,65 L 47,65 L 67,40 L 47,15 Z"
              fill="url(#blueGradient)"
              initial={{ x: -80, rotate: -15, opacity: 0 }}
              animate={exiting ? { x: -80, rotate: -15, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOutBack, delay: 0.5 }}
            />
            <motion.path
              d="M 85,15 L 65,40 L 85,65 L 73,65 L 53,40 L 73,15 Z"
              fill="#ffffff"
              initial={{ x: 80, rotate: 15, opacity: 0 }}
              animate={exiting ? { x: 80, rotate: 15, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOutBack, delay: 0.5 }}
            />

            {/* Stage C: Impact Flash circle */}
            <motion.circle
              cx="60" cy="40" r="25"
              fill="#ffffff"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2.5], opacity: [0.7, 0] }}
              transition={{ duration: 0.35, delay: 1.0, ease: "easeOut" }}
            />
          </svg>
        </div>

        {/* Wordmark Reveal (Staggered slide-up) */}
        <h2 className="text-[28px] font-extrabold tracking-tight text-white flex justify-center gap-[1px] mb-2 font-display">
          {"NetquoraX".split("").map((letter, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.15 + idx * 0.035, ease: "easeOut" }}
              className={letter === "X" ? "text-[#2563EB]" : "text-white"}
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        {/* Tagline Reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.6 }}
          className="text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] font-bold"
        >
          INNOVATE &middot; BUILD &middot; TRANSFORM
        </motion.p>

        {/* LOADING INDICATOR PIPELINE */}
        <div className="flex flex-col items-center mt-12 w-full">
          {/* Build Stage Icons */}
          <div className="flex gap-4 items-center mb-4">
            <motion.div
              animate={activeStage === "compile" ? { rotate: 360 } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`p-1.5 rounded-lg transition-all duration-300 ${
                activeStage === "compile" 
                  ? "text-[#2563EB] bg-[#2563EB]/10 scale-110" 
                  : "text-white/35 grayscale scale-95"
              }`}
            >
              <Settings size={20} />
            </motion.div>

            <motion.div
              animate={activeStage === "optimize" ? { rotate: [ -15, 15, -15 ] } : {}}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className={`p-1.5 rounded-lg transition-all duration-300 ${
                activeStage === "optimize" 
                  ? "text-[#2563EB] bg-[#2563EB]/10 scale-110" 
                  : "text-white/35 grayscale scale-95"
              }`}
            >
              <Wrench size={20} />
            </motion.div>

            <div
              className={`p-1.5 rounded-lg transition-all duration-300 relative ${
                activeStage === "deploy" 
                  ? "text-[#2563EB] bg-[#2563EB]/10 scale-110" 
                  : "text-white/35 grayscale scale-95"
              }`}
            >
              <Activity size={20} className={activeStage === "deploy" ? "animate-pulse" : ""} />
            </div>
          </div>

          {/* Progress Bar & Numeric Counter */}
          <div className="relative w-60">
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#2563EB] to-white rounded-full transition-all duration-75"
                style={{ width: `${percent}%` }}
              />
            </div>
            {/* Monaco-adjacent Counter below */}
            <div className="flex justify-between items-center mt-2.5 px-0.5">
              <span className="text-[10px] text-white/45 tracking-widest uppercase font-semibold font-mono">
                {statusText}
              </span>
              <span className="text-[14px] text-white/80 font-bold font-mono tabular-nums">
                {percent}%
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SKIP BUTTON */}
      {!exiting && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          onClick={handleSkip}
          className="absolute top-6 right-6 pointer-events-auto text-[12px] font-bold text-white uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer z-[100]"
        >
          Skip Intro &rarr;
        </motion.button>
      )}
    </div>
  );
}
