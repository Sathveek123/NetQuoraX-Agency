"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function StartupMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between shadow-2xl text-white font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Velocity Panel</span>
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sprint Active
        </span>
      </div>
      <div className="my-2">
        <span className="block text-[32px] font-extrabold text-white tracking-tight">8.5x</span>
        <span className="block text-slate-400 text-[11px] mt-0.5">Faster MVP timeline velocity</span>
      </div>
      
      {/* Sprint Burndown chart */}
      <div className="relative h-12 w-full my-1 bg-white/5 border border-white/5 rounded p-1">
        <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
          {/* Target Burndown Line (Dashed) */}
          <line x1="0" y1="5" x2="100" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Actual Burndown Line (Glowing Blue) */}
          <path d="M 0,5 L 20,6 L 40,8 L 60,11 L 80,18 L 100,28" stroke="#2563EB" strokeWidth="1.5" fill="none" />
          <path d="M 0,5 L 20,6 L 40,8 L 60,11 L 80,18 L 100,28 L 100,30 L 0,30 Z" fill="rgba(37,99,235,0.08)" />
          {/* Glowing pulse on last active sprint point */}
          <circle cx="80" cy="18" r="2" fill="#2563EB" />
          <circle cx="80" cy="18" r="4" fill="none" stroke="#2563EB" strokeWidth="0.5" className="animate-ping" />
        </svg>
        <span className="absolute top-1 right-2 text-[7px] text-slate-400">Target vs Actual</span>
      </div>

      <div>
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-1">
          <span>75% — Faster time-to-first-user</span>
          <span className="text-white">75%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full bg-primary w-[75%]" />
        </div>
      </div>
    </div>
  );
}

function HealthcareMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between shadow-2xl text-white font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Scheduler Hub</span>
        <span className="inline-flex items-center gap-1 text-[#0D9488]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          Active Reminders
        </span>
      </div>

      {/* Stacked appointments */}
      <div className="space-y-2 my-2">
        <div className="border border-white/5 rounded-xl p-2.5 bg-white/5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-200">
            <span>Dr. Sarah Jenkins</span>
            <span className="text-[10px] text-slate-400">10:30 AM</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[9px] text-[#0D9488] font-bold uppercase tracking-wider bg-[#0D9488]/10 px-1.5 py-0.5 rounded">✓ Confirmed</span>
            <span className="text-[8px] text-slate-400">SMS Reminded</span>
          </div>
        </div>

        <div className="border border-white/5 rounded-xl p-2.5 bg-white/5 opacity-80">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-200">
            <span>Dr. Amit Patel</span>
            <span className="text-[10px] text-slate-400">2:15 PM</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[9px] text-amber-400 font-bold uppercase tracking-wider bg-amber-400/10 px-1.5 py-0.5 rounded">⌛ Pending SMS Response</span>
            <span className="text-[8px] text-slate-400">Retrying...</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-[#0D9488] text-center font-bold pt-2 border-t border-white/5">
        ⚡ No-shows reduced by 22% overall
      </div>
    </div>
  );
}

function EducationMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between shadow-2xl text-white font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Student Progress Path</span>
        <span className="text-secondary font-bold text-[9px] uppercase">LMS Auto-sync</span>
      </div>
      <div className="space-y-3 my-2">
        {[
          { label: "Introduction to AI Core", progress: 100, color: "#7C3AED" },
          { label: "Predictive Analytics Setup", progress: 60, color: "#7C3AED" },
          { label: "Final Pipeline Deployment", progress: 15, color: "#a78bfa" }
        ].map((item, idx) => (
          <div key={idx} className="text-xs">
            <div className="flex justify-between text-slate-300 font-medium text-[10px] mb-1">
              <span>{item.label}</span>
              <span className="text-slate-400">{item.progress}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-secondary transition-all duration-1000" style={{ width: `${item.progress}%`, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-[9px] text-slate-400 font-bold text-center border-t border-white/5 pt-2">
        ✓ Certificates generated & grades matched
      </div>
    </div>
  );
}

function FinanceMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#070b19] border border-white/10 p-5 flex flex-col justify-between text-white shadow-2xl font-mono">
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
        <span>Backtest Engine</span>
        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">+14.2% yield</span>
      </div>

      {/* Sparkline candlestick area chart */}
      <div className="h-20 w-full relative flex items-center justify-center my-2">
        <svg className="w-full h-full" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line x1="0" y1="15" x2="160" y2="15" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="35" x2="160" y2="35" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          
          {/* Glowing Sparkline path */}
          <path d="M0,45 L20,38 L40,48 L60,25 L80,32 L100,10 L120,28 L140,5 L160,18" stroke="#10B981" strokeWidth="2" fill="none" />
          <path d="M0,45 L20,38 L40,48 L60,25 L80,32 L100,10 L120,28 L140,5 L160,18 L160,60 L0,60 Z" fill="url(#sparkGrad)" />

          {/* Candle mock details */}
          <line x1="60" y1="18" x2="60" y2="32" stroke="#10B981" strokeWidth="0.75" />
          <line x1="100" y1="5" x2="100" y2="18" stroke="#10B981" strokeWidth="0.75" />
          <line x1="140" y1="2" x2="140" y2="12" stroke="#10B981" strokeWidth="0.75" />

          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-[10px] text-slate-400 font-bold text-center pt-2 border-t border-white/5">
        Execution latency: &lt;12ms • Pine Script v5
      </div>
    </div>
  );
}

function RealEstateMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between shadow-2xl text-white font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Lead Sync Sheet</span>
        <span className="text-[#4F46E5] font-bold bg-[#4F46E5]/15 px-2 py-0.5 rounded">WHATSAPP ACTIVE</span>
      </div>

      <div className="space-y-2.5 my-2 overflow-y-auto">
        <div className="border border-white/5 rounded-xl p-2 bg-white/5 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">JA</div>
            <div>
              <span className="block font-bold text-slate-200">John Archer</span>
              <span className="block text-[9px] text-slate-400">3 BHK, Bandra</span>
            </div>
          </div>
          <div className="text-right">
            <span className="block font-bold text-primary text-[10px]">₹3.5 Cr</span>
            <span className="inline-block text-[8px] bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded font-bold uppercase">Hot Lead</span>
          </div>
        </div>

        <div className="border border-white/5 rounded-xl p-2 bg-white/5 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">MS</div>
            <div>
              <span className="block font-bold text-slate-200">Meera Sen</span>
              <span className="block text-[9px] text-slate-400">1 BHK, Worli</span>
            </div>
          </div>
          <div className="text-right">
            <span className="block font-bold text-primary text-[10px]">₹1.8 Cr</span>
            <span className="inline-block text-[8px] bg-blue-500/10 text-blue-400 px-1 py-0.2 rounded font-bold uppercase">Followup</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-center text-emerald-400 font-bold bg-emerald-500/10 py-1 rounded">
        ✓ Lead WhatsApp followup: 2 mins response
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between text-white shadow-2xl font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Cart Checkout UI</span>
        <span className="text-[#F43F5E] font-bold bg-[#F43F5E]/15 px-2 py-0.5 rounded">SECURE SSL</span>
      </div>
      <div className="space-y-1.5 text-xs my-2">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal (2 items)</span><span>₹2,490</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Shipping (Express)</span><span className="text-emerald-400">FREE</span>
        </div>
        <div className="flex justify-between font-bold text-white pt-1.5 border-t border-white/10 mt-1.5 text-[13px]">
          <span>Total Paid</span><span className="text-emerald-400">₹2,490</span>
        </div>
      </div>
      <div className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold py-1.5 px-2.5 rounded text-center border border-emerald-500/20">
        ✓ Invoices & Stripe logs reconciled automatically
      </div>
    </div>
  );
}

function HospitalityMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between shadow-2xl text-white font-mono">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Guest Planner</span>
        <span className="text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded text-[9px]">DUE IN</span>
      </div>
      <div className="border border-white/5 rounded-xl p-3 bg-white/5 my-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-200">
          <span>Room 304 (Suite)</span>
          <span className="text-emerald-400 font-medium">Checked-in</span>
        </div>
        <span className="block text-[10px] text-slate-400 mt-1">Direct-booking verified</span>
      </div>
      
      {/* Smart lock passcode status visual */}
      <div className="flex items-center gap-2 bg-[#090D1A] rounded-lg p-2 border border-white/5 justify-between">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-[10px] text-slate-300">Smart Keycode:</span>
        </div>
        <span className="text-[11px] font-bold text-amber-400 tracking-widest animate-pulse">4902</span>
      </div>
    </div>
  );
}

function LogisticsMockup() {
  return (
    <div className="w-[320px] h-[220px] rounded-2xl bg-[#0b1020] border border-white/10 p-5 flex flex-col justify-between text-white shadow-2xl font-mono">
      <div className="text-[10px] uppercase font-bold text-slate-400">Route Pipeline Tracker</div>
      
      {/* Pipeline progress route */}
      <div className="relative py-4 my-2">
        {/* Connection line */}
        <div className="absolute top-[28px] left-[35px] right-[35px] h-[2px] bg-slate-800" />
        <div className="absolute top-[28px] left-[35px] w-[50%] h-[2px] bg-[#EA580C] animate-[pulse_2s_infinite]" />

        <div className="flex justify-between items-center text-xs relative z-10">
          {[
            { label: "Dispatch", ok: true },
            { label: "Transit", ok: true, active: true },
            { label: "Delivery", ok: false }
          ].map((node, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] transition-all ${
                node.active 
                  ? "bg-[#EA580C] text-white ring-4 ring-[#EA580C]/25" 
                  : node.ok 
                    ? "bg-slate-700 text-white" 
                    : "bg-slate-900 text-slate-500 border border-white/5"
              }`}>
                {idx + 1}
              </div>
              <span className="text-[9px] font-bold text-slate-400">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-slate-400 text-center font-bold pt-2 border-t border-white/5">
        ✓ Driver ETA Auto-synced to Shopify / CRM
      </div>
    </div>
  );
}

const INDUSTRIES = [
  {
    name: "Startups",
    accent: "#2563EB",
    challenge: "Startups must build and test MVP validation concepts rapidly. Generic software is too slow to configure, and manual developer teams are too expensive for early timelines.",
    bullets: ["Custom Figma prototypes with clean component assets", "Next.js MVP builds deployed under 4 weeks", "Automated customer support lead capture tools", "Integrated data pipelines (Mixpanel & Google Analytics)"],
    Mockup: StartupMockup,
    visualLeft: true
  },
  {
    name: "Healthcare",
    accent: "#0D9488",
    challenge: "Patient scheduling software needs to automate notification reminders to decrease no-shows, without violating local compliance requirements or feeling overly administrative.",
    bullets: ["Custom booking calendars with automatic notifications", "Secure patient intake forms & dashboard syncs", "Automated SMS/Email appointment details reminders", "Simple staff calendars that clear admin overhead"],
    Mockup: HealthcareMockup,
    visualLeft: false
  },
  {
    name: "Education",
    accent: "#7C3AED",
    challenge: "Online schools and courses need cohesive dashboards that track student progression, lesson completions, and grading pipelines automatically without multiple disparate tools.",
    bullets: ["Interactive student portals & progression paths", "Automatic grading scripts & review assignments hooks", "Dynamic certificate generations & PDF distributions", "Integrated subscription billing & payment tiers"],
    Mockup: EducationMockup,
    visualLeft: true
  },
  {
    name: "Finance",
    accent: "#10B981",
    challenge: "Financial traders and fund managers require high-speed indicators and strategy webhooks that execute positions with minimal latency and protect secret proprietary math rules.",
    bullets: ["Pine Script custom indicator strategies", "Webhook order executions at minimal latency", "Risk parameters management & fallback switches", "Historical strategy backtesting panels & yield metrics"],
    Mockup: FinanceMockup,
    visualLeft: false
  },
  {
    name: "Real Estate",
    accent: "#4F46E5",
    challenge: "Real estate brokers lose qualified buyers when lead response times exceed a few minutes. System synchronization is required to capture leads and sync them to CRM sheets instantly.",
    bullets: ["Property search pages & interactive lead maps", "WhatsApp API follow-ups triggered in real-time", "Auto-sync from major listing sites to centralized sheets", "Client-agent appointment matching portals"],
    Mockup: RealEstateMockup,
    visualLeft: true
  },
  {
    name: "Ecommerce",
    accent: "#F43F5E",
    challenge: "Storefront checkout checkout systems need optimization to minimize cart abandonment rates, reconcile Stripe payments instantly, and print invoices automatically.",
    bullets: ["Custom fast checkout design conversions optimization", "Headless Shopify or custom Stripe API engines", "Automatic invoice PDF triggers & email receipt drops", "Real-time stock inventory updates & alert triggers"],
    Mockup: EcommerceMockup,
    visualLeft: false
  },
  {
    name: "Hospitality",
    accent: "#D97706",
    challenge: "Boutique hotels and rentals need to manage check-in pipelines, send access keys dynamically, and reduce dependencies on expensive third-party listing aggregates.",
    bullets: ["Direct-booking engines to avoid agency commissions", "Auto check-in code generators & WhatsApp notification rules", "Housekeeping dispatch schedules panels", "Automated check-out review requests campaigns"],
    Mockup: HospitalityMockup,
    visualLeft: true
  },
  {
    name: "Logistics",
    accent: "#EA580C",
    challenge: "Delivery and fleet operations suffer from manual dispatch sheets, slow ETA status updates, and lack of clear route milestone synchronization.",
    bullets: ["Real-time tracking panels & route progress indicators", "Automated dispatcher SMS notifications", "Deduplicated driver logs & order databases", "Customer feedback capture surveys on delivery completion"],
    Mockup: LogisticsMockup,
    visualLeft: false
  }
];

export default function IndustriesPage() {
  React.useEffect(() => {
    document.title = "Targeted Industry Solutions & Software | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how we build custom workflow automation, low-latency execution engines, and Web apps tailored to your specific industry constraints.");
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-[140px] pb-16 lg:pb-24 border-b border-slate-200/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Industries</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
              Built for Your Industry's Actual Constraints
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed">
              Generic software ignores the compliance, workflows, and edge cases specific to your field. We don't.
            </p>
          </div>
        </section>

        {/* INDUSTRY DEEP-DIVE ROWS */}
        <div className="py-16 lg:py-24 space-y-24 md:space-y-36">
          {INDUSTRIES.map((ind, idx) => {
            const isAlt = idx % 2 === 1;
            const MockupPanel = ind.Mockup;

            return (
              <section
                key={ind.name}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[320px]"
              >
                {/* Left column: Info */}
                <div className={`${ind.visualLeft ? "md:order-2" : "md:order-1"} flex flex-col justify-center`}>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
                    style={{ color: ind.accent }}
                  >
                    {ind.name}
                  </span>
                  <h2 className="font-display text-[26px] md:text-[32px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Optimized for {ind.name}
                  </h2>
                  
                  <div className="mt-5 space-y-4">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        The Challenge
                      </span>
                      <p className="text-[14px] text-slate-500 leading-relaxed">
                        {ind.challenge}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        What We Build
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-[13px] text-slate-600 leading-tight">
                            <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: ind.accent }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right column: Mockup Visual */}
                <div className={`${ind.visualLeft ? "md:order-1" : "md:order-2"} flex items-center justify-center relative`}>
                  {/* Glowing background halo */}
                  <div
                    className="absolute w-[200px] h-[200px] rounded-full blur-[48px] opacity-[0.06] pointer-events-none"
                    style={{ backgroundColor: ind.accent }}
                  />
                  <div className="relative group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                    <MockupPanel />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-[#0F172A]">
            Industry not listed?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            We have engineered workflow automations, custom indicators, and dashboard tools across multiple niche sectors not detailed here. Let's discuss yours.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Discuss Your Field
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
