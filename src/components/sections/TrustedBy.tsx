import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Code2, Hourglass } from "lucide-react";

export default function TrustedBy() {
  const stats = [
    { Icon: Code2, label: "12+ Systems Shipped" },
    { Icon: Cpu, label: "3 Key Industries Served" },
    { Icon: ShieldCheck, label: "100% Client-Owned Code" },
    { Icon: Hourglass, label: "2–10 Wks Typical Delivery" }
  ];

  return (
    <section
      aria-label="Factual delivery statistics"
      className="relative py-8 bg-[#F8FAFC] dark:bg-[#080C16] border-y border-slate-200/50 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const StatIcon = stat.Icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-semibold text-[13px] md:text-[14px]"
              >
                <StatIcon size={16} className="text-primary flex-shrink-0" />
                <span>{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
