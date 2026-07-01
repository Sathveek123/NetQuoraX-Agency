"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  radius?: number;
  maxDistance?: number;
  strength?: number;
}

export default function Magnetic({ children, radius = 100, maxDistance = 8, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check initially
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      // Use strength-based calculation if strength is provided (Magnetic mode)
      if (strength > 0) {
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        // Use radius/maxDistance calculation (MagneticWrap mode)
        const pullX = (distanceX / radius) * maxDistance;
        const pullY = (distanceY / radius) * maxDistance;
        x.set(pullX);
        y.set(pullY);
      }
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!isFinePointer) {
    return children;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
