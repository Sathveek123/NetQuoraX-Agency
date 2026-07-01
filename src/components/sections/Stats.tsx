"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  delay: number;
}

const STATS: StatItem[] = [
  { value: 50,  suffix: "+", label: "Projects Delivered",   delay: 0    },
  { value: 35,  suffix: "+", label: "Happy Clients",        delay: 0.1  },
  { value: 8,   suffix: "+", label: "Countries Served",     delay: 0.2  },
  { value: 3,   suffix: "+", label: "Years of Experience",  delay: 0.3  },
];

function CountUp({ value, suffix, prefix = "", delay, trigger }: StatItem & { trigger: boolean }) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;
    const timer = setTimeout(() => {
      const ctrl = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => ctrl.stop();
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [trigger, value, delay]);

  return (
    <span className="font-tabular">
      {prefix}{display}{suffix}
    </span>
  );
}

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
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="py-14 md:py-24 bg-[#F8FAFC]"
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
                <CountUp {...stat} trigger={inView} />
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
