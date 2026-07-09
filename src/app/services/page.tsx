"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Code, Cpu, LineChart, Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    eyebrow: "DIGITAL & PRODUCT",
    title: "Websites & Digital Products",
    desc: "Premium, responsive web experiences designed to engage and convert.",
    icon: Code,
    imgUrl: "/images/dashboard-mockup.png",
    services: [
      {
        title: "Custom Website Development",
        desc: "High-performance marketing sites, landing pages, and interactive web tools styled with precision.",
        included: ["Custom Figma design, no stock templates", "Mobile-first layouts, Google PageSpeed optimized", "SEO-ready architecture built in", "Headless CMS configuration if needed"],
        price: "Starting from ₹45,000"
      },
      {
        title: "SaaS Platforms & Web Apps",
        desc: "Scalable, secure custom web portals, CRM frontends, and utility applications built from scratch.",
        included: ["Next.js App Router architecture", "Secure JWT & OAuth login systems", "Interactive dashboards & table metrics", "REST or GraphQL API endpoints"],
        price: "Starting from ₹1,20,000"
      },
      {
        title: "E-Commerce Systems",
        desc: "Custom storefronts designed to streamline shopping carts, catalogs, checkout flows, and inventories.",
        included: ["Shopify headless API or custom Stripe builds", "Global taxes & checkout localizations", "Automated invoice email receipts", "Bulk product inventory panels"],
        price: "Starting from ₹85,000"
      }
    ]
  },
  {
    eyebrow: "AI & AUTOMATION",
    title: "Intelligent Workflows & Agents",
    desc: "Automate administrative overhead, qualify leads instantly, and save hundreds of manual hours.",
    icon: Cpu,
    imgUrl: "/images/ai-automation.png",
    services: [
      {
        title: "Workflow Automation",
        desc: "Sync CRM data, lead pipelines, invoice triggers, and scheduling software into single cohesive flows.",
        included: ["n8n or Make custom orchestrators", "Legacy database & spreadsheet connectors", "Real-time Slack / Teams notification alerts", "Deduplication & clean tags sync"],
        price: "Starting from ₹35,000"
      },
      {
        title: "Conversational AI Agents",
        desc: "Voice & text qualifiers running 24/7, answering common FAQs and scheduling calls on autopilot.",
        included: ["Advanced LLM rag pipelines (OpenAI/Gemini)", "Live scheduling widget integration", "Auto-handshake to human reps", "Multi-language support built in"],
        price: "Starting from ₹60,000"
      },
      {
        title: "WhatsApp API integrations",
        desc: "Direct-to-client automated follow-ups, utility notifications, and status queries.",
        included: ["Official Meta API setup & verification support", "Custom message templates & variables", "Interactive choice buttons", "Opt-in subscription compliance"],
        price: "Starting from ₹40,000"
      }
    ]
  },
  {
    eyebrow: "TRADING SYSTEMS",
    title: "Automated Strategy Engineering",
    desc: "Custom indicator scripts, strategy backtesters, and trading bot executions built to your rules.",
    icon: LineChart,
    imgUrl: "/images/trading-desk.png",
    services: [
      {
        title: "Pine Script Development",
        desc: "High-grade Pine Script v5 indicators, strategy alerts, and custom panels on TradingView.",
        included: ["Complex indicator equations", "Accurate backtest logic setup", "Automated alert webhook messages", "Source-logic protection parameters"],
        price: "Custom scope quote"
      },
      {
        title: "Webhook Auto-Execution",
        desc: "Connect TradingView alerts to live exchange API hooks to execute orders instantly.",
        included: ["Multi-broker APIs integration", "Fast latency order executions", "Safe API key secrets management", "Risk exposure fallback triggers"],
        price: "Custom scope quote"
      }
    ]
  },
  {
    eyebrow: "GROWTH & MARKETING",
    title: "Paid Ads & Conversion Funnels",
    desc: "Drive qualified traffic, optimize landing conversion pages, and scale ROI metrics.",
    icon: Sparkles,
    imgUrl: "/images/marketing-dashboard.png",
    services: [
      {
        title: "Meta & Google Ad Setup",
        desc: "Campaign architectures structured around actual qualified sales conversions, not raw impressions.",
        included: ["Creative copywriting & static asset setup", "Audience pixel & Conversions API tracking", "Budget scale strategy roadmaps", "Weekly ROI metric dashboards"],
        price: "Starting from ₹30,000/mo"
      },
      {
        title: "Conversion Optimization (CRO)",
        desc: "A/B test existing pages to improve conversion rates and drop patient/client acquisition costs.",
        included: ["User hotspot scroll tracking audits", "Clean headline variations testing", "Interactive booking form placement", "Fast-load core web vitals check"],
        price: "Starting from ₹25,000"
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
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
            <span className="text-slate-600">Services</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
            >
              Every System Your Business Needs, Under One Roof
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed"
            >
              From the first line of code to the automation running behind it — we build it all, and we build it to last.
            </motion.p>
          </div>
        </section>

        {/* SERVICE CATEGORY SECTIONS */}
        <div className="space-y-16 py-16 lg:py-24">
          {CATEGORIES.map((cat, catIdx) => {
            const isAlt = catIdx % 2 === 1;
            const CatIcon = cat.icon;

            return (
              <section
                key={cat.title}
                className={`p-8 md:p-12 rounded-[32px] transition-colors border ${
                  isAlt ? "bg-white border-slate-200/50 shadow-sm" : "bg-transparent border-transparent"
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-10 items-start">
                  {/* Left Column: Title, description, and real internet image */}
                  <div className="space-y-6 lg:sticky lg:top-28">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {cat.eyebrow}
                      </span>
                      <h2 className="mt-2 font-display text-[26px] md:text-[32px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
                        {cat.title}
                      </h2>
                      <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Image Block */}
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-slate-200/60 dark:border-slate-800 shadow-sm bg-slate-50">
                      <img
                        src={cat.imgUrl}
                        alt={cat.title}
                        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right Column: Service Cards Grid */}
                  <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                    {cat.services.map((svc) => (
                      <div
                        key={svc.title}
                        className="bg-white dark:bg-[#111B30] rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-[17px] font-bold text-[#0F172A] dark:text-white leading-snug">
                            {svc.title}
                          </h3>
                          <p className="mt-2.5 text-[13px] text-slate-500 leading-relaxed">
                            {svc.desc}
                          </p>
                          
                          {/* What's included checklist */}
                          <div className="mt-5 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              What's Included
                            </span>
                            <ul className="mt-3 space-y-2">
                              {svc.included.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[12.5px] text-slate-600 dark:text-slate-300 leading-snug">
                                  <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Pricing Tag */}
                        <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
                          <span className="text-[12px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                            {svc.price}
                          </span>
                          <Link href="/contact" className="text-[12.5px] font-semibold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                            Inquire <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CONDENSED PROCESS SECTION */}
        <section className="py-16 border-t border-slate-200/60">
          <div className="bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-[26px] md:text-[32px] font-bold tracking-tight">
                Our Development Pipeline
              </h2>
              <p className="text-slate-400 mt-2 text-[15px] max-w-lg">
                Four defined milestones from initial consultation to continuous scaling growth support.
              </p>

              {/* Condensed Step strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {[
                  { step: "01", name: "Discovery", info: "Map goals & details" },
                  { step: "02", name: "Build", info: "Develop & backtest" },
                  { step: "03", name: "Test", info: "Verify clean execution" },
                  { step: "04", name: "Launch", info: "Deploy & support" }
                ].map((s) => (
                  <div key={s.step} className="border-l-2 border-primary/40 pl-4">
                    <span className="block text-xs font-mono font-bold text-primary">{s.step}</span>
                    <span className="block text-[16px] font-bold mt-1">{s.name}</span>
                    <span className="block text-xs text-slate-400 mt-1">{s.info}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-start">
                <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-white transition-colors">
                  Learn about our principles & work philosophy <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM PAGE CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-[#0F172A]">
            Not sure which service you need?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Let's hop on a 15-minute scoping call to map out your systems and figure it out together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Book Scoping Call
            </Link>
            <Link
              href="/portfolio"
              className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-full hover:bg-slate-50 transition-colors text-[14px]"
            >
              See Selected Work
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
