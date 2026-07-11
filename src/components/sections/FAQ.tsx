"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQEntry {
  q: string;
  a: string;
}

const FAQS: FAQEntry[] = [
  {
    q: "How much does a project typically cost?",
    a: "Pricing depends on scope — a landing page and a full automation system aren't the same investment. We give a fixed quote after a discovery call, no hourly guessing games.",
  },
  {
    q: "How long does a typical project take?",
    a: "Websites: 2–4 weeks. Automation systems: 3–6 weeks depending on integrations. Trading systems: varies with strategy complexity. We give a real timeline after scoping, not a generic estimate.",
  },
  {
    q: "What tech stack do you use?",
    a: "Modern, maintainable stacks — Next.js/React for web, established automation platforms (Make, Zapier, n8n) for workflows, and Pine Script for trading tools. We pick what's right for the project, not what's trendy.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes a support window post-launch, and ongoing retainers are available for teams that want continuous iteration.",
  },
  {
    q: "What industries do you work with?",
    a: "Startups, healthcare, finance, real estate, ecommerce, hospitality, logistics, and education — each with different compliance and UX considerations we account for.",
  },
  {
    q: "Are trading systems compliant and regulated?",
    a: "We build technical analysis and automation tools — not financial advice. Everything is positioned as an educational/analytical tool, and we're upfront about that boundary.",
  },
  {
    q: "How do we get started?",
    a: "Book a strategy call. We'll scope the project, give you a fixed quote, and get moving — usually within a week of signing.",
  },
];

const itemVariants = {
  hidden:   { opacity: 0, y: 12 },
  visible:  { opacity: 1, y: 0,  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.05 } },
};

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-[120px] bg-card-bg">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-ink leading-[1.1]"
          >
            Questions, Answered
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-[16px] text-ink/60 max-w-[480px] leading-relaxed"
          >
            Straight answers to the things people always ask before starting.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {FAQS.map((item, idx) => {
            const isOpen = active === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-b border-border-ink"
              >
                <button
                  onClick={() => setActive(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-6 text-left gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm cursor-pointer"
                >
                  <span className="text-[17px] font-semibold text-ink pr-4 leading-snug">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="flex-shrink-0 text-ink/50"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-[15px] text-ink/65 leading-[1.6] pb-6 pt-1">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
