"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import RepelCard from "@/components/ui/RepelCard";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarGrad: string;
  avatarImg?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They built a Pine Script strategy for Nifty futures that's been running live for 3 months. First automated system I've trusted enough to run unattended with real capital.",
    name: "Rahul Verma",
    role: "Derivatives Trader, Mumbai",
    initials: "RV",
    avatarGrad: "linear-gradient(135deg, #2563EB, #7C3AED)",
    avatarImg: "/images/avatar-rahul.png",
  },
  {
    quote: "Our agency website went from zero to booked calls within weeks. The design did the selling before we even picked up the phone. Completely transformed how we look online.",
    name: "James Holloway",
    role: "Director, Holloway Creative — London, UK",
    initials: "JH",
    avatarGrad: "linear-gradient(135deg, #06B6D4, #2563EB)",
    avatarImg: "/images/avatar-james-h.png",
  },
  {
    quote: "Our Meta and Google ad spend went from a 1.2 ROAS to 3.8 within two months. They restructured everything — creatives, targeting, and the landing page funnel.",
    name: "Fatima Al-Sayed",
    role: "Marketing Director, Luxora — Dubai, UAE",
    initials: "FA",
    avatarGrad: "linear-gradient(135deg, #10B981, #06B6D4)",
    avatarImg: "/images/avatar-fatima.png",
  },
  {
    quote: "The automation system eliminated three admin positions' worth of manual work from our operations. It paid for itself in the first month and keeps compounding.",
    name: "Marcus Tan",
    role: "COO, Meridian Logistics — Singapore",
    initials: "MT",
    avatarGrad: "linear-gradient(135deg, #7C3AED, #2563EB)",
    avatarImg: "/images/avatar-marcus.png",
  },
  {
    quote: "Priya and her team needed a complete patient booking and reminder system. NetquoraX delivered it in 3 weeks. No-shows dropped by 22% in the first month.",
    name: "Priya Nair",
    role: "Clinic Director, Healpath — Bengaluru, India",
    initials: "PN",
    avatarGrad: "linear-gradient(135deg, #F59E0B, #EF4444)",
    avatarImg: "/images/avatar-priya.png",
  },
];

const CARD_WIDTH  = 420; // px, desktop min-width
const CARD_GAP    = 24;

const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <RepelCard
      strength={16}
      stiffness={200}
      damping={20}
      style={{
        minWidth: CARD_WIDTH,
        scrollSnapAlign: "start",
        flexShrink: 0,
      }}
    >
      <article
        className="rounded-[24px] p-8 flex flex-col gap-5 h-full"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 4px 24px rgba(11,16,32,0.06)",
        }}
      >
        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="#F59E0B" stroke="none" aria-hidden="true" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-[16px] text-[#0B1020]/85 leading-[1.65] flex-1">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-2 border-t border-[rgba(11,16,32,0.06)]">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0 overflow-hidden"
            style={{ background: t.avatarGrad }}
            aria-hidden="true"
          >
            {t.avatarImg ? (
              <img
                src={t.avatarImg}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            ) : (
              t.initials
            )}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#0B1020]">{t.name}</p>
            <p className="text-[13px] text-[#0B1020]/50">{t.role}</p>
          </div>
        </div>
      </article>
    </RepelCard>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = CARD_WIDTH + CARD_GAP;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  return (
    <section
      className="py-16 lg:py-[120px] bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background orbs so glassmorphism has something to blur */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header + nav */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
            className="max-w-[500px]"
          >
            <motion.p variants={headerItem}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              Testimonials
            </motion.p>
            <motion.h2 variants={headerItem} id="testimonials-heading"
              className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
              What Clients Actually Say
            </motion.h2>
          </motion.div>

          {/* Arrow controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[rgba(11,16,32,0.12)] flex items-center justify-center text-[#0B1020]/60 hover:text-[#0B1020] hover:border-[rgba(11,16,32,0.25)] disabled:opacity-30 transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[rgba(11,16,32,0.12)] flex items-center justify-center text-[#0B1020]/60 hover:text-[#0B1020] hover:border-[rgba(11,16,32,0.25)] disabled:opacity-30 transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
