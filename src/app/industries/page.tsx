"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Mockup render components for each industry (rendered inline in CSS/HTML for maximum crispness)
function StartupMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Velocity Panel</span>
        <span className="text-emerald-500 animate-pulse">ACTIVE SPRINT</span>
      </div>
      <div>
        <span className="block text-[28px] font-extrabold text-white tracking-tight">8.5x</span>
        <span className="block text-slate-400 text-xs mt-1">Faster MVP timeline velocity</span>
      </div>
      <div>
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-1">
          <span>Sprint Progress</span>
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
    <div className="w-[280px] h-[200px] rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between shadow-md">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Scheduler widget</span>
        <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">AUTO REMINDER</span>
      </div>
      <div className="border border-slate-100 rounded-xl p-3 bg-slate-50">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Dr. Sarah Jenkins</span>
          <span className="text-[10px] text-slate-400 font-medium">10:30 AM</span>
        </div>
        <span className="block text-[11px] text-slate-500 mt-1">Dental cleaning • Confirmed</span>
      </div>
      <div className="text-[10px] text-slate-400 text-center font-bold">
        ⚡ No-shows reduced by 22%
      </div>
    </div>
  );
}

function EducationMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between shadow-lg">
      <div className="text-[10px] uppercase font-bold text-slate-500">Student Progress Path</div>
      <div className="space-y-2.5 my-2">
        {[
          { label: "Introduction to AI Core", progress: 100 },
          { label: "Predictive Analytics Setup", progress: 60 },
          { label: "Final Pipeline Deployment", progress: 0 }
        ].map((item, idx) => (
          <div key={idx} className="text-xs">
            <div className="flex justify-between text-white font-medium text-[11px] mb-1">
              <span>{item.label}</span>
              <span className="text-slate-400">{item.progress}%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-secondary" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-400 font-bold text-center">Auto-grades & badges synced</div>
    </div>
  );
}

function FinanceMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-[#090D1A] border border-[#1E293B] p-4 flex flex-col justify-between text-white shadow-xl">
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
        <span>Backtest Board</span>
        <span className="text-emerald-500">+14.2% yield</span>
      </div>
      <div className="h-16 flex items-end gap-2">
        {[30, 50, 75, 45, 90, 60, 85].map((h, idx) => (
          <div key={idx} className="flex-1 bg-slate-800 rounded-t-sm relative" style={{ height: `${h}%` }}>
            <div className="absolute inset-x-0 bottom-0 bg-[#06B6D4] h-[60%] rounded-t-sm" />
          </div>
        ))}
      </div>
      <div className="text-[11px] text-slate-400 font-bold text-center pt-2 border-t border-slate-800">
        Execution speed: &lt;12ms latency
      </div>
    </div>
  );
}

function RealEstateMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between shadow-md">
      <div className="text-[10px] uppercase font-bold text-slate-400">Leads Lead Sheet</div>
      <div className="space-y-2">
        {[
          { name: "John Archer", property: "3 BHK, Bandra", budget: "₹3.5 Cr" },
          { name: "Meera Sen", property: "1 BHK, Worli", budget: "₹1.8 Cr" }
        ].map((item, idx) => (
          <div key={idx} className="border border-slate-100 rounded-lg p-2 flex justify-between items-center text-xs">
            <div>
              <span className="block font-bold text-slate-700">{item.name}</span>
              <span className="block text-[10px] text-slate-400">{item.property}</span>
            </div>
            <span className="font-bold text-primary">{item.budget}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-center text-emerald-600 font-bold bg-emerald-50 py-1 rounded">
        ✓ Lead response time: 2 mins
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between text-white shadow-lg">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-500">
        <span>Cart Checkout</span>
        <span className="text-[#F43F5E] font-bold">SECURE SSL</span>
      </div>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal (2 items)</span><span>₹2,490</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Shipping (Local)</span><span>FREE</span>
        </div>
        <div className="flex justify-between font-bold text-white pt-1.5 border-t border-slate-800 mt-1">
          <span>Total Paid</span><span>₹2,490</span>
        </div>
      </div>
      <div className="bg-emerald-950/40 text-emerald-400 text-[10px] font-bold py-1 px-2 rounded text-center">
        Stripe checkout reconciled automatically
      </div>
    </div>
  );
}

function HospitalityMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between shadow-md">
      <div className="text-[10px] uppercase font-bold text-slate-400">Guest Planner</div>
      <div className="border border-slate-100 rounded-xl p-3 bg-slate-50">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Room 304 (Suite)</span>
          <span className="text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded text-[9px]">DUE IN</span>
        </div>
        <span className="block text-[11px] text-slate-500 mt-1">Check-in: Today, 2:00 PM</span>
      </div>
      <div className="text-[10px] text-slate-400 font-bold text-center">
        Keyless checkout code sent to guest
      </div>
    </div>
  );
}

function LogisticsMockup() {
  return (
    <div className="w-[280px] h-[200px] rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between text-white shadow-lg">
      <div className="text-[10px] uppercase font-bold text-slate-500">Route pipeline tracker</div>
      <div className="flex justify-between items-center text-xs my-2">
        {[
          { label: "Dispatch", ok: true },
          { label: "Transit", ok: true },
          { label: "Delivery", ok: false }
        ].map((node, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
              node.ok ? "bg-primary text-white" : "bg-slate-800 text-slate-500"
            }`}>
              {idx + 1}
            </div>
            <span className="text-[9px] font-bold text-slate-400">{node.label}</span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-slate-400 text-center font-bold">
        ✓ Real-time ETA update synced
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
