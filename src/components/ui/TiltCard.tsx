"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;
}

export default function TiltCard({ children, className = "", maxRotate = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 180, damping: 22 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    const px = x / width - 0.5;
    const py = y / height - 0.5;
    
    rotateX.set(-py * maxRotate);
    rotateY.set(px * maxRotate);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={`tilt-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
