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
            <span className="text-slate-600">Our Story</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
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
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
                Our Story
              </span>
              <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed">
                <p>
                  Before starting NetquoraX, we were entrepreneurs, traders, and builders ourselves. And like most business owners, we hit a massive brick wall early on.
                </p>
                <p>
                  We paid external agencies thousands to optimize our marketing, only to get scammed by agencies that generated fake clicks and impressions while our actual conversions remained completely flat. We tried to automate our trading workflows, only to buy scammed strategies and indicators that failed under real-world market volatility. We lost our hard-earned capital, struggled to pay for systems that didn't talk to each other, and watched our business suffer from poor integrations.
                </p>
                <p>
                  <strong>That's when we decided to stop hiring middlemen and build it ourselves.</strong>
                </p>
                <p>
                  <strong>Sathveek</strong> went deep into backend architecture, system automation, and algorithm design — mastering how to code everything from custom Next.js platforms to ultra-low latency webhook strategy controllers. <strong>Moin</strong> mastered conversion rate optimization, Google & Meta campaign engineering, and full-funnel sales metrics to ensure every click translated directly to bottom-line revenue.
                </p>
                <p>
                  NetquoraX was born to be the exact partner we wish we had when we were struggling. We specialize in helping early-stage startup owners, traders, and growing businesses bypass the trial-and-error phase. We build integrated products, setup automated workflows, scale networks, and engineer custom strategies that actually execute.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRINCIPLES SECTION */}
        <section className="py-16 border-t border-slate-200/60">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-12"
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
                  className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <principle.icon size={24} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-[#0F172A] mb-2">
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
        <section className="py-16 border-t border-slate-200/60">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-12"
            >
              Meet the Founders
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sathveek */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white text-[24px] font-extrabold flex-shrink-0">
                      S
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] font-bold text-[#0F172A]">
                        Sathveek
                      </h3>
                      <p className="text-[12px] font-bold uppercase tracking-wider text-primary">
                        Developer (All Services)
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-[14px] text-slate-600 leading-relaxed">
                    Systems architect and full-stack engineer. Sathveek designs the technical backbone of our agency, specializing in Next.js applications, automated API integrations, custom databases, and TradingView Pine Script algorithms. He spent years building automated tools to overcome bad software bottlenecks.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href="tel:+919441782469"
                    className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-primary transition-colors"
                  >
                    <Phone size={14} />
                    +91 9441782469
                  </a>
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
                className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[24px] font-extrabold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] font-bold text-[#0F172A]">
                        Moin
                      </h3>
                      <p className="text-[12px] font-bold uppercase tracking-wider text-primary">
                        Digital Marketer & Sales
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-[14px] text-slate-600 leading-relaxed">
                    Lead marketing designer and growth analyst. Moin is responsible for paid campaign targeting, copy hooks, and checkout conversion optimization. He guides client funnels to maximize lead generation, tracking every single dollar of revenue and sales pipeline to prevent waste.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href="tel:+18779365117"
                    className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-primary transition-colors"
                  >
                    <Phone size={14} />
                    +1 (877) 936-5117
                  </a>
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
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-[#0F172A]">
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
