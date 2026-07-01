"use client";

/**
 * RepelCard — wraps any element with a cursor-repel effect.
 * When the cursor enters, the element pushes AWAY from the cursor.
 * When the cursor leaves, it springs back smoothly to its original position.
 */

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface RepelCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Max displacement in px (default 22) */
  strength?: number;
  /** Spring stiffness — higher = snappier (default 180) */
  stiffness?: number;
  /** Spring damping (default 18) */
  damping?: number;
}

export default function RepelCard({
  children,
  className = "",
  style,
  strength = 22,
  stiffness = 180,
  damping = 18,
}: RepelCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness, damping, mass: 0.6 });
  const y = useSpring(rawY, { stiffness, damping, mass: 0.6 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Cursor position relative to element center
    const dx = e.clientX - (rect.left + rect.width  / 2);
    const dy = e.clientY - (rect.top  + rect.height / 2);
    const dist = Math.hypot(dx, dy) || 1;

    // Proximity factor: 1 at dead-center, 0 at the furthest corner
    const halfDiag = Math.hypot(rect.width, rect.height) / 2;
    const factor = Math.max(0, 1 - dist / halfDiag);

    // Move AWAY from cursor (negate direction)
    rawX.set(-(dx / dist) * strength * factor);
    rawY.set(-(dy / dist) * strength * factor);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, position: style?.position || "relative" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        style={{ x, y, willChange: "transform", width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
