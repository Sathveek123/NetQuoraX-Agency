"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

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
    </>
  );
}
