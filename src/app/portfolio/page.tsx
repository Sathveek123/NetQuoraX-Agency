"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Project {
  slug: string;
  name: string;
  category: "Websites" | "Apps" | "AI & Automation" | "Trading Systems" | "Marketing";
  blurb: string;
  metric: string;
  metricLabel: string;
  bgGrad: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "signal-engine",
    name: "Signal Engine Broker",
    category: "Trading Systems",
    blurb: "Low-latency webhook executor bridging TradingView alerts directly to broker APIs.",
    metric: "12ms",
    metricLabel: "Average latency",
    bgGrad: "linear-gradient(135deg, #090D1A, #1E293B)"
  },
  {
    slug: "luxora-funnel",
    name: "Luxora Ads Funnel",
    category: "Marketing",
    blurb: "Meta and Google performance campaign restructuring paired with custom landing page funnels.",
    metric: "3.8x",
    metricLabel: "ROAS increase",
    bgGrad: "linear-gradient(135deg, #7C3AED, #A78BFA)"
  },
  {
    slug: "healpath-portal",
    name: "Healpath Patient Portal",
    category: "Websites",
    blurb: "A responsive online patient booking scheduler with auto-reminders and doctor log sheets.",
    metric: "22%",
    metricLabel: "No-show reduction",
    bgGrad: "linear-gradient(135deg, #0D9488, #06B6D4)"
  },
  {
    slug: "meridian-sync",
    name: "Meridian Logistics CRM",
    category: "AI & Automation",
    blurb: "Automated logistics sync dispatch broker pipeline between legacy sheets and active CRM logs.",
    metric: "180+",
    metricLabel: "Weekly hours saved",
    bgGrad: "linear-gradient(135deg, #2563EB, #3B82F6)"
  },
  {
    slug: "holloway-creative",
    name: "Holloway Agency Site",
    category: "Websites",
    blurb: "Modern marketing brand website designed for a London design firm with direction animations.",
    metric: "3.2x",
    metricLabel: "Inbound lead boost",
    bgGrad: "linear-gradient(135deg, #F43F5E, #FB7185)"
  },
  {
    slug: "nifty-bot",
    name: "Nifty Futures Strategy",
    category: "Trading Systems",
    blurb: "Pine Script v5 automated execution strategy backtested across 3 years of futures data.",
    metric: "64%",
    metricLabel: "Win rate score",
    bgGrad: "linear-gradient(135deg, #0D0E12, #1F2937)"
  }
];

const FILTERS = ["All", "Websites", "Apps", "AI & Automation", "Trading Systems", "Marketing"];

function ProjectVisualMockup({ slug }: { slug: string }) {
  if (slug === "signal-engine") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <path d="M 5,50 L 20,40 L 40,45 L 60,20 L 80,35 L 95,10" stroke="white" strokeWidth="1.5" />
        <line x1="20" y1="30" x2="20" y2="50" stroke="white" strokeWidth="0.5" />
        <line x1="60" y1="10" x2="60" y2="35" stroke="white" strokeWidth="0.5" />
        <line x1="80" y1="25" x2="80" y2="45" stroke="white" strokeWidth="0.5" />
      </svg>
    );
  }
  if (slug === "luxora-funnel") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <polygon points="10,5 90,5 75,20 25,20" stroke="white" strokeWidth="1" />
        <polygon points="25,22 75,22 65,38 35,38" stroke="white" strokeWidth="1" />
        <polygon points="35,40 65,40 55,55 45,55" stroke="white" strokeWidth="1" />
      </svg>
    );
  }
  if (slug === "healpath-portal") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <rect x="15" y="10" width="70" height="40" rx="3" stroke="white" strokeWidth="1" />
        <line x1="15" y1="20" x2="85" y2="20" stroke="white" strokeWidth="1" />
        <circle cx="30" cy="30" r="2" fill="white" />
        <circle cx="50" cy="30" r="2" fill="white" />
        <circle cx="70" cy="30" r="2" fill="white" />
        <circle cx="30" cy="42" r="2" fill="white" />
        <circle cx="50" cy="42" r="2" fill="white" />
      </svg>
    );
  }
  if (slug === "meridian-sync") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <circle cx="20" cy="30" r="6" stroke="white" strokeWidth="1" />
        <circle cx="50" cy="30" r="6" stroke="white" strokeWidth="1" />
        <circle cx="80" cy="30" r="6" stroke="white" strokeWidth="1" />
        <line x1="26" y1="30" x2="44" y2="30" stroke="white" strokeWidth="1" />
        <line x1="56" y1="30" x2="74" y2="30" stroke="white" strokeWidth="1" />
      </svg>
    );
  }
  if (slug === "holloway-creative") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <rect x="10" y="8" width="80" height="44" rx="2" stroke="white" strokeWidth="1" />
        <line x1="10" y1="18" x2="90" y2="18" stroke="white" strokeWidth="1" />
        <line x1="30" y1="18" x2="30" y2="52" stroke="white" strokeWidth="0.5" />
        <rect x="40" y="24" width="40" height="8" rx="1" stroke="white" strokeWidth="0.5" />
        <rect x="40" y="38" width="40" height="8" rx="1" stroke="white" strokeWidth="0.5" />
      </svg>
    );
  }
  if (slug === "nifty-bot") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 100 60" fill="none">
        <path d="M 5,20 L 25,35 L 45,15 L 65,40 L 85,25 L 95,50" stroke="white" strokeWidth="1" />
        <rect x="21" y="30" width="8" height="10" stroke="white" strokeWidth="1" fill="none" />
        <rect x="41" y="10" width="8" height="10" stroke="white" strokeWidth="1" fill="none" />
        <rect x="61" y="35" width="8" height="10" stroke="white" strokeWidth="1" fill="none" />
      </svg>
    );
  }
  return null;
}

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filteredProjects = selectedFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="bg-light text-ink min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-[140px] pb-12 border-b border-slate-200/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Portfolio</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-ink leading-[1.1]">
              Work That Speaks in Numbers
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed">
              A selection of projects across web, automation, and trading systems — with the actual results, not just screenshots.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <div className="py-8 flex flex-wrap gap-2 items-center border-b border-slate-100">
          {FILTERS.map((f) => {
            const isSelected = selectedFilter === f;
            return (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "text-white"
                    : "text-[#5B6478] dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">{f}</span>
                {isSelected && (
                  <motion.span
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CASE STUDY GRID */}
        <div className="py-12">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    href={`/portfolio/${p.slug}`}
                    onClick={(e) => {
                      if (window.matchMedia("(max-width: 768px)").matches && activeSlug !== p.slug) {
                        e.preventDefault();
                        setActiveSlug(p.slug);
                      }
                    }}
                    className="group block relative rounded-[24px] overflow-hidden bg-card-bg border border-border-ink shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-border-ink/80 transition-all duration-300 select-none cursor-none"
                  >
                    {/* Visual Area */}
                    <div
                      className="relative h-[240px] flex items-center justify-center p-8 text-white overflow-hidden"
                      style={{ background: p.bgGrad }}
                    >
                      {/* Stylized background overlay mockup graphic */}
                      <ProjectVisualMockup slug={p.slug} />
                      {/* Metric Display Overlay on Hover/Tap */}
                      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 z-20 ${
                        activeSlug === p.slug ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}>
                        <span className="text-[44px] font-extrabold tracking-tight text-white block transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          {p.metric}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2 block transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          {p.metricLabel}
                        </span>
                      </div>

                      {/* Content Card Indicator */}
                      <div className="text-center z-10">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-40 block mb-2">
                          {p.category}
                        </span>
                        <span className="text-[24px] font-extrabold tracking-tight block">
                          {p.name}
                        </span>
                      </div>
                    </div>

                    {/* Blurb area */}
                    <div className="p-6 flex flex-col justify-between min-h-[140px]">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {p.category}
                        </span>
                        <h3 className="text-[20px] font-extrabold text-ink mt-1.5 leading-snug group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-[14px] text-slate-500 mt-2 leading-relaxed">
                          {p.blurb}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border-ink flex items-center justify-between text-slate-400 group-hover:text-primary transition-colors">
                        <span className="text-[13px] font-bold">View Case Study</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-ink">
            Want results like these?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Let's build a secure, high-performance system configured to solve your actual bottlenecks.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Start Your Project
            </Link>
          </div>
        </section>

        {/* Trading Risk Disclaimer inline */}
        <div className="mt-8 mb-16 pt-6 border-t border-slate-200/50">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>Risk Disclosure:</strong> Trading involves substantial risk of loss and is not suitable for all investors. Backtested and historical performance results (including the 64% win rate score shown above for Nifty Futures) do not guarantee future results. NetQuorax builds and delivers trading system logic as a technology product service; we are not a registered investment advisor or broker-dealer, and nothing here constitutes financial advice. Clients are solely responsible for regulatory compliance in their jurisdiction.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
