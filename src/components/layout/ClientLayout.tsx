"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CONSENT_KEY = "nqx_cookie_consent";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [cursorHovered, setCursorHovered] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      // Delay slightly so it doesn't compete with page load
      const t = setTimeout(() => setShowBanner(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "declined");
    setShowBanner(false);
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setCursorHovered(true);
    const leave = () => setCursorHovered(false);

    const registerHoverables = () => {
      document.querySelectorAll("a, button, [role='tab'], summary, .magnetic, input, select, textarea").forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    window.addEventListener("mousemove", move);
    registerHoverables();

    const observer = new MutationObserver(registerHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div id="scroll-progress" style={{ scaleX }} />

      {/* Custom cursor (desktop only) */}
      <motion.div id="cursor-dot" style={{ left: mouseX, top: mouseY }} className="hidden md:block" />
      <motion.div
        id="cursor-ring"
        style={{ left: ringX, top: ringY }}
        className={`hidden md:block ${cursorHovered ? "hover" : ""}`}
      />

      {children}

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-[420px] z-[9990]"
            role="dialog"
            aria-label="Cookie consent"
          >
            <div className="bg-white/90 dark:bg-[#111B30]/95 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/15 p-5">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl select-none" aria-hidden>🍪</span>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F172A] dark:text-white leading-snug">
                    We use cookies
                  </p>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    We use analytics cookies to understand how visitors use our site and improve your experience. No data is sold to third parties.{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-primary text-white text-[13px] font-semibold py-2.5 rounded-xl hover:bg-primary/90 transition-colors cursor-none"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleConsent(false)}
                  className="flex-1 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[13px] font-semibold py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-none"
                >
                  Decline
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
