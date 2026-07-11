"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, Target, Clock, Shield, Zap, Mail, Phone } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PRINCIPLES = [
  {
    icon: Target,
    title: "Systems Over Hacks",
    description: "We build infrastructure that scales, not quick fixes that break when you grow. Every solution is architected for the long term."
  },
  {
    icon: Clock,
    title: "Honest Timelines Over Inflated Promises",
    description: "We tell you what's actually achievable. No overpromising to win the bid, then missing deadlines. Realistic estimates, delivered."
  },
  {
    icon: Shield,
    title: "Long-Term Thinking Over One-Off Deliverables",
    description: "We're not here to drop code and disappear. We build systems you can maintain, extend, and rely on for years."
  },
  {
    icon: Zap,
    title: "Real Testing Over 'It Should Work'",
    description: "We verify. Backtesting strategies, load testing APIs, user testing flows. If we can't prove it works, we don't ship it."
  }
];

export default function AboutPage() {
  React.useEffect(() => {
    document.title = "Our Story & Core Team | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about the struggles that drove Sathveek and Moin to build a premium, transparent technical engineering house.");
    }
  }, []);

  return (
    <div className="bg-light text-ink min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-[140px] pb-16 lg:pb-24 border-b border-slate-200/60">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Our Story</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-ink leading-[1.1]"
            >
              Born From Real Struggles, Built For Real Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed"
            >
              NetquoraX wasn't created in a corporate boardroom. It was built by two founders who got tired of false promises, copy-paste software, and trading platform scams.
            </motion.p>
          </div>
        </section>

        {/* OUR STORY / FOUNDERS STORY */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
                The Journey
              </span>
              <h2 className="font-display text-[32px] md:text-[48px] font-extrabold text-ink tracking-tight leading-tight">
                Our Genesis & Evolution
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 max-w-xl mx-auto leading-relaxed">
                How we fought through fake agencies, scammed indicator systems, and system fragmentation to engineer outcome-driven software.
              </p>
            </div>

            {/* Tree Timeline Container */}
            <div className="relative border-l-2 border-border-ink ml-4 md:mx-auto md:w-[2px] space-y-16">
              {/* Milestone 1 */}
              <div className="relative pl-8 md:pl-0 md:w-[420px] md:ml-[-440px] md:text-right">
                {/* Node Dot */}
                <div className="absolute top-1.5 left-[-9px] md:left-auto md:right-[-431px] w-4 h-4 rounded-full bg-rose-500 ring-4 ring-rose-100 dark:ring-rose-950 flex items-center justify-center" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm"
                >
                  <span className="text-[11px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                    Phase 01 / The Catalyst (2023)
                  </span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">
                    Trapped in Fragile Frameworks & Scams
                  </h3>
                  <p className="mt-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    We were building our own ecommerce stores and trading set-ups. Traditional marketing agencies we hired burned thousands of dollars in ad budgets generating empty bot clicks, while sales sheets stayed completely flat. Separately, Sathveek bought commercial Pine Script indicators that repainted historical charts, costing over ₹1.5L in capital in a single week when live order webhooks failed directly at the broker endpoint.
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-ink flex flex-wrap gap-2 md:justify-end">
                    <span className="text-[11px] font-semibold text-rose-500 bg-rose-500/5 px-2 py-0.5 rounded">Scammed Indicators</span>
                    <span className="text-[11px] font-semibold text-rose-500 bg-rose-500/5 px-2 py-0.5 rounded">Lost Capital</span>
                    <span className="text-[11px] font-semibold text-rose-500 bg-rose-500/5 px-2 py-0.5 rounded">Ad-Spend Waste</span>
                  </div>
                </motion.div>
              </div>

              {/* Milestone 2 */}
              <div className="relative pl-8 md:pl-0 md:w-[420px] md:ml-[20px]">
                {/* Node Dot */}
                <div className="absolute top-1.5 left-[-9px] md:left-[-30px] w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10 flex items-center justify-center" />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm"
                >
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-2">
                    Phase 02 / The Grind (Early 2024)
                  </span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">
                    Engineering From Scratch
                  </h3>
                  <p className="mt-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Out of survival, we threw out templates and decided to learn engineering ourselves. Sathveek dedicated months to mastering Next.js backend services, writing robust queue handlers, and routing orders securely across multiple Indian broker APIs (Zerodha Kite, Upstox) with automatic fallback switches. Moin took over pixel engineering, developing offline tracking databases using Meta Conversions API logs to combat iOS privacy barriers and optimize paid funnels.
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-ink flex flex-wrap gap-2">
                    <span className="text-[11px] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded">Queue Handlers</span>
                    <span className="text-[11px] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded">Meta CAPI Sync</span>
                    <span className="text-[11px] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded">API Rate-Limits</span>
                  </div>
                </motion.div>
              </div>

              {/* Milestone 3 */}
              <div className="relative pl-8 md:pl-0 md:w-[420px] md:ml-[-440px] md:text-right">
                {/* Node Dot */}
                <div className="absolute top-1.5 left-[-9px] md:left-auto md:right-[-431px] w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/10 flex items-center justify-center" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm"
                >
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block mb-2">
                    Phase 03 / The Synergy (Late 2024)
                  </span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">
                    Bespoke Systems That Perform
                  </h3>
                  <p className="mt-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    We started launching systems for clients. We built clinic patient booking portals syncing live calendars with Twilio SMS followups that dropped no-show appointments by 22% in the first month. We developed serverless Pine Script execution pipelines running live trades with an average execution latency of 12ms. We bridged CRM databases and invoicing webhooks to save dispatchers 180+ manual spreadsheet hours every week.
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-ink flex flex-wrap gap-2 md:justify-end">
                    <span className="text-[11px] font-semibold text-secondary bg-secondary/5 px-2 py-0.5 rounded">Twilio SMS</span>
                    <span className="text-[11px] font-semibold text-secondary bg-secondary/5 px-2 py-0.5 rounded">12ms Latency</span>
                    <span className="text-[11px] font-semibold text-secondary bg-secondary/5 px-2 py-0.5 rounded">n8n Sync Pipelines</span>
                  </div>
                </motion.div>
              </div>

              {/* Milestone 4 */}
              <div className="relative pl-8 md:pl-0 md:w-[420px] md:ml-[20px]">
                {/* Node Dot */}
                <div className="absolute top-1.5 left-[-9px] md:left-[-30px] w-4 h-4 rounded-full bg-accent ring-4 ring-accent/10 flex items-center justify-center" />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm"
                >
                  <span className="text-[11px] font-bold text-accent uppercase tracking-widest block mb-2">
                    Phase 04 / The Standard (Present)
                  </span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">
                    NetquoraX - Unifying Sales & Code
                  </h3>
                  <p className="mt-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Today, we collaborate directly with early-stage startup owners, quant traders, and operators to design clean, high-performance infrastructure. We replace fragmented workflows with unified products, combining Next.js, customized databases, marketing analytics tracking, and API strategy automation. No agencies, no excuses, just pure execution.
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-ink flex flex-wrap gap-2">
                    <span className="text-[11px] font-semibold text-accent bg-accent/5 px-2 py-0.5 rounded">Startup Scoping</span>
                    <span className="text-[11px] font-semibold text-accent bg-accent/5 px-2 py-0.5 rounded">Outcome Alignment</span>
                    <span className="text-[11px] font-semibold text-accent bg-accent/5 px-2 py-0.5 rounded">Infinite Scalability</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* PRINCIPLES SECTION */}
        <section className="py-16 border-t border-border-ink">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[28px] md:text-[36px] font-extrabold text-ink mb-12"
            >
              How We Work
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <principle.icon size={24} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-ink mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION (Sathveek & Moin) */}
        <section className="py-16 border-t border-border-ink">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[28px] md:text-[36px] font-extrabold text-ink mb-12"
            >
              Meet the Founders
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sathveek */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card-bg rounded-3xl p-8 border border-border-ink shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white text-[24px] font-extrabold flex-shrink-0">
                      S
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] font-bold text-ink">
                        Sathveek
                      </h3>
                      <p className="text-[12px] font-bold uppercase tracking-wider text-primary">
                        Developer (All Services)
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-5 pl-3.5 border-l-2 border-primary text-[13px] italic text-muted leading-relaxed bg-light/50 py-1.5 pr-2 rounded-r-md">
                    "We don't build features just to hit spec. We build to eliminate bottlenecks so your product actually ships."
                  </blockquote>
                  <p className="mt-5 text-[14px] text-slate-600 leading-relaxed">
                    Systems architect and full-stack engineer. Sathveek designs the technical backbone of our agency, specializing in Next.js applications, automated API integrations, custom databases, and TradingView Pine Script algorithms. He spent years building automated tools to overcome bad software bottlenecks.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href="mailto:netquorax@gmail.com"
                    className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-primary transition-colors"
                  >
                    <Mail size={14} />
                    netquorax@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Moin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card-bg rounded-3xl p-8 border border-border-ink shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[24px] font-extrabold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] font-bold text-ink">
                        Moin
                      </h3>
                      <p className="text-[12px] font-bold uppercase tracking-wider text-[#7C3AED]">
                        Digital Marketer & Sales
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-5 pl-3.5 border-l-2 border-[#7C3AED] text-[13px] italic text-muted leading-relaxed bg-light/50 py-1.5 pr-2 rounded-r-md">
                    "Ads without conversion paths are just lighting cash on fire. We align traffic directly to robust, secured funnels."
                  </blockquote>
                  <p className="mt-5 text-[14px] text-slate-600 leading-relaxed">
                    Lead marketing designer and growth analyst. Moin is responsible for paid campaign targeting, copy hooks, and checkout conversion optimization. He guides client funnels to maximize lead generation, tracking every single dollar of revenue and sales pipeline to prevent waste.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href="mailto:netquorax@gmail.com"
                    className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-primary transition-colors"
                  >
                    <Mail size={14} />
                    netquorax@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-ink">
            Want to build with us?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Let's skip the agency templates and build a system that works. Collaborate directly with Sathveek and Moin to scale your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Start a Conversation
            </Link>
            <a
              href="https://www.instagram.com/netquorax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-full hover:bg-slate-50 transition-colors text-[14px] flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" /> Follow on IG
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
