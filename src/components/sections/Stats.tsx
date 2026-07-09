"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 50,  suffix: "+", label: "Projects Delivered" },
  { value: 35,  suffix: "+", label: "Happy Clients"        },
  { value: 8,   suffix: "+", label: "Countries Served"     },
  { value: 3,   suffix: "+", label: "Years of Experience"  },
];

const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-14 md:py-24 bg-[#F8FAFC] dark:bg-[#080C16]"
      aria-label="Company statistics"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <p
                className="text-[40px] md:text-[56px] font-extrabold font-display leading-none"
                style={{
                  background: "linear-gradient(100deg, #2563EB, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.prefix || ""}{stat.value}{stat.suffix}
              </p>
              <p className="mt-3 text-[14px] text-[#0B1020]/60 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
