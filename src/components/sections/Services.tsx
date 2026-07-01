"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Smartphone, Palette, Gauge,
  Bot, MessageCircle, Mic, Workflow,
  Users, ShieldCheck, LineChart, TrendingUp,
  Activity, History, BrainCircuit,
  Megaphone, Target, Mail,
} from "lucide-react";
import ServiceCard, { cardVariants } from "@/components/ui/ServiceCard";

const ICON_SIZE = 22;

// ── TAB DATA ────────────────────────────────────────────────────────────────
const TABS = [
  { label: "Digital & Product", id: "digital"   },
  { label: "AI & Automation",   id: "ai"         },
  { label: "Trading Systems",   id: "trading"    },
  { label: "Growth & Marketing",id: "marketing"  },
] as const;

type TabId = typeof TABS[number]["id"];
type Service = { title: string; description: string; icon: React.ReactNode };

const SERVICES: Record<TabId, Service[]> = {
  digital: [
    {
      title: "Website Development",
      description: "Fast, conversion-focused websites built to represent your brand properly.",
      icon: <Globe size={ICON_SIZE} />,
    },
    {
      title: "Mobile App Development",
      description: "iOS & Android apps built for retention — not just to ship and forget.",
      icon: <Smartphone size={ICON_SIZE} />,
    },
    {
      title: "UI/UX & Brand Identity",
      description: "Interfaces and brand systems that feel considered — not templated, not generic.",
      icon: <Palette size={ICON_SIZE} />,
    },
    {
      title: "Performance Optimization",
      description: "Core Web Vitals, load speed, and conversion-rate fixes that move the needle.",
      icon: <Gauge size={ICON_SIZE} />,
    },
  ],
  ai: [
    {
      title: "AI Chatbots & Agents",
      description: "Chat and support agents that actually resolve queries, not just deflect them.",
      icon: <Bot size={ICON_SIZE} />,
    },
    {
      title: "WhatsApp Automation",
      description: "Automated WhatsApp flows for support, orders and marketing at scale.",
      icon: <MessageCircle size={ICON_SIZE} />,
    },
    {
      title: "AI Voice Bots",
      description: "Voice agents that handle inbound calls, bookings, and support conversations 24/7.",
      icon: <Mic size={ICON_SIZE} />,
    },
    {
      title: "Workflow Automation",
      description: "Make, Zapier & n8n systems that connect your tools and eliminate manual work.",
      icon: <Workflow size={ICON_SIZE} />,
    },
    {
      title: "CRM & Marketing Automation",
      description: "Pipelines and lifecycle campaigns that nurture and convert leads automatically.",
      icon: <Users size={ICON_SIZE} />,
    },
    {
      title: "Cloud & Cybersecurity",
      description: "Scalable cloud infrastructure with security built in from day one.",
      icon: <ShieldCheck size={ICON_SIZE} />,
    },
  ],
  trading: [
    {
      title: "Pine Script Development",
      description: "Custom strategies and indicators coded to your exact trading logic.",
      icon: <LineChart size={ICON_SIZE} />,
    },
    {
      title: "Automated Trading Bots",
      description: "Execution bots that trade your rules around the clock without emotion.",
      icon: <TrendingUp size={ICON_SIZE} />,
    },
    {
      title: "Custom Indicators",
      description: "Signal tools that surface exactly what your strategy needs — nothing more.",
      icon: <Activity size={ICON_SIZE} />,
    },
    {
      title: "Strategy Backtesting",
      description: "Rigorous historical testing that reveals how a strategy actually performs.",
      icon: <History size={ICON_SIZE} />,
    },
    {
      title: "AI Trading Systems",
      description: "Machine-learning models that adapt to market conditions as they evolve.",
      icon: <BrainCircuit size={ICON_SIZE} />,
    },
  ],
  marketing: [
    {
      title: "Meta & Google Ads",
      description: "Paid campaigns managed for profitable return — not just impressions.",
      icon: <Megaphone size={ICON_SIZE} />,
    },
    {
      title: "Lead Generation Systems",
      description: "Systems that bring qualified leads in on autopilot, not just traffic.",
      icon: <Target size={ICON_SIZE} />,
    },
    {
      title: "Email Marketing",
      description: "Sequences and broadcasts that build trust and sell without being pushy.",
      icon: <Mail size={ICON_SIZE} />,
    },
    {
      title: "CRO & Growth Ops",
      description: "Data-driven conversion improvements that compound over time.",
      icon: <TrendingUp size={ICON_SIZE} />,
    },
  ],
};

// ── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const sectionHeaderVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerItemVariants = {
  hidden:   { opacity: 0, y: 16 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Grid container — stagger children cards on mount/tab-switch
const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

// Tab panel fade/slide in and out
const panelVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

// ── COMPONENT ───────────────────────────────────────────────────────────────
export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation — Arrow L/R, Home, End per ARIA tablist pattern
  const handleKeyDown = useCallback((e: React.KeyboardEvent, idx: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (idx + 1) % TABS.length;
    if (e.key === "ArrowLeft")  next = (idx - 1 + TABS.length) % TABS.length;
    if (e.key === "Home")       next = 0;
    if (e.key === "End")        next = TABS.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActiveTab(next);
      tabsRef.current[next]?.focus();
      // Scroll the focused tab into view within the scrollable strip
      tabsRef.current[next]?.scrollIntoView({ inline: "nearest", behavior: "smooth" });
    }
  }, []);

  const services = SERVICES[TABS[activeTab].id];

  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-[120px] bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionHeaderVariants}
          className="max-w-[600px]"
        >
          <motion.p
            variants={headerItemVariants}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]"
          >
            Services
          </motion.p>

          <motion.h2
            id="services-heading"
            variants={headerItemVariants}
            className="mt-3 font-display text-[32px] lg:text-[48px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]"
          >
            What We Build
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="mt-4 text-[16px] text-[#0B1020]/60 max-w-[480px] leading-relaxed"
          >
            One partner for every system your business runs on — from the website to the automation behind it.
          </motion.p>
        </motion.div>

        {/* ── TAB NAVIGATION ── */}
        {/*
          Mobile: horizontal-scroll strip with scroll-snap so each tab clicks cleanly into view.
          Scrollbar hidden via CSS class `tabs-strip` (defined below via inline style injection
          since Tailwind v4 doesn't ship `scrollbar-none` by default).
          Desktop: single row, no scroll needed.
        */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Service categories"
          className="relative mt-12 mb-12 flex items-center gap-2 overflow-x-auto pb-1 tabs-strip"
          style={{
            scrollbarWidth: "none",          // Firefox
            scrollSnapType: "x mandatory",   // snap-x
            WebkitOverflowScrolling: "touch",
          }}
        >
          {TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                ref={(el) => { tabsRef.current[idx] = el; }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                style={{ scrollSnapAlign: "start" }}
                className={[
                  "relative z-10 whitespace-nowrap px-5 py-2.5 rounded-full",
                  "text-[14px] transition-colors duration-[250ms]",
                  "outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
                  "cursor-pointer flex-shrink-0",
                  isActive
                    ? "font-semibold text-[#0B1020]"
                    : "font-medium text-[#0B1020]/50 hover:text-[#0B1020]/80",
                ].join(" ")}
              >
                {/* Sliding pill indicator — shared layoutId animates between tabs */}
                {isActive && (
                  <motion.span
                    layoutId="tab-indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] -z-10"
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── SERVICE GRID WITH TAB SWITCH ANIMATION ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${TABS[activeTab].id}`}
            aria-labelledby={`tab-${TABS[activeTab].id}`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/*
              Grid stagger container — re-mounts on key change (tab switch),
              which automatically re-runs the stagger entrance.
              Also handles first scroll-into-view via whileInView on initial mount.
            */}
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, i) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={i}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
