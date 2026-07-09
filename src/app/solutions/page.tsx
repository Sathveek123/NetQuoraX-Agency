"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const SOLUTIONS = [
  {
    problem: "“We are getting clicks on our ads, but we are too slow to reply. By the time our team follows up, the lead has already gone cold.”",
    fixTitle: "Fast Response & Lead Capture Pipeline",
    fixDesc: "Connect your ad networks directly to a smart qualifier that answers questions instantly and books calls automatically.",
    imgUrl: "/images/team-collab.png",
    tags: [
      { name: "Conversational AI Agents", href: "/services" },
      { name: "WhatsApp API Integration", href: "/services" },
      { name: "Workflow Automation", href: "/services" }
    ],
    portfolioLink: "/portfolio"
  },
  {
    problem: "“Our team spends half the day copy-pasting data between Google Sheets, our CRM, and invoicing software. We're wasting hours on admin work.”",
    fixTitle: "Unified System Sync",
    fixDesc: "Stitch your administrative tools together with a central database broker so every status update flows automatically.",
    imgUrl: "/images/ai-automation.png",
    tags: [
      { name: "Workflow Automation", href: "/services" },
      { name: "SaaS Platforms & Web Apps", href: "/services" }
    ],
    portfolioLink: "/portfolio"
  },
  {
    problem: "“Our current website is slow, outdated, and isn't generating qualified calls. It looks like a brochure from 2018.”",
    fixTitle: "High-Performance Web Funnel",
    fixDesc: "Build a custom, fast-loading Next.js site optimized for SEO and conversion layouts that sells before you pick up the phone.",
    imgUrl: "/images/dashboard-mockup.png",
    tags: [
      { name: "Custom Website Development", href: "/services" },
      { name: "Conversion Optimization (CRO)", href: "/services" }
    ],
    portfolioLink: "/portfolio"
  },
  {
    problem: "“I have strategies that work on paper or inside TradingView alerts, but executing them manually is too slow and prone to human errors.”",
    fixTitle: "Webhook Trading Strategy Broker",
    fixDesc: "Convert TradingView indicator alerts directly to API orders executed instantly at the broker exchange.",
    imgUrl: "/images/trading-desk.png",
    tags: [
      { name: "Pine Script Development", href: "/services" },
      { name: "Webhook Auto-Execution", href: "/services" }
    ],
    portfolioLink: "/portfolio"
  },
  {
    problem: "“We have a good product, but not enough potential clients know we exist. Our organic traffic is flat.”",
    fixTitle: "Qualified Sales Ad Engine",
    fixDesc: "Launch Meta & Google paid campaigns focused strictly on qualified booking conversions rather than vanity impressions.",
    imgUrl: "/images/marketing-dashboard.png",
    tags: [
      { name: "Meta & Google Ad Setup", href: "/services" },
      { name: "Conversion Optimization (CRO)", href: "/services" }
    ],
    portfolioLink: "/portfolio"
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-[140px] pb-16 lg:pb-24 border-b border-slate-200/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Solutions</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
              Tell Us the Problem. We'll Build the Solution.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed">
              Most businesses don't need &ldquo;a website&rdquo; — they need fewer manual tasks, more qualified leads, or a system that doesn't break under growth. Start with your actual problem.
            </p>
          </div>
        </section>

        {/* SOLUTION ROW ITEMS */}
        <div className="py-16 lg:py-24 space-y-24 md:space-y-36">
          {SOLUTIONS.map((sol, idx) => {
            const isAlt = idx % 2 === 1;

            return (
              <section
                key={sol.fixTitle}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[300px]"
              >
                {/* Left column: Problem */}
                <div className={`${isAlt ? "md:order-2" : "md:order-1"} flex flex-col justify-center space-y-6`}>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-3">
                      <HelpCircle size={14} /> The Problem
                    </div>
                    <blockquote className="text-[18px] md:text-[20px] font-medium italic text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-rose-500/50 pl-5 py-1">
                      {sol.problem}
                    </blockquote>
                  </div>

                  {/* Real internet image visualizer */}
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] relative border border-slate-200/60 dark:border-slate-850 shadow-sm bg-slate-50">
                    <img
                      src={sol.imgUrl}
                      alt={sol.fixTitle}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right column: The Fix */}
                <div className={`${isAlt ? "md:order-1" : "md:order-2"} flex flex-col justify-center bg-white dark:bg-[#111B30] p-8 md:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm`}>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
                    ✓ The Fix
                  </div>
                  <h3 className="font-display text-[22px] md:text-[26px] font-bold text-[#0F172A] dark:text-white">
                    {sol.fixTitle}
                  </h3>
                  <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">
                    {sol.fixDesc}
                  </p>

                  {/* Dynamic linked tags */}
                  <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Linked Services
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sol.tags.map((tag) => (
                        <Link
                          key={tag.name}
                          href={tag.href}
                          className="px-3 py-1 rounded-full text-[12px] font-semibold bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-start">
                    <Link
                      href={sol.portfolioLink}
                      className="text-[13px] font-bold text-primary hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      See how this works in action <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* BOTTOM PAGE CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-[#0F172A]">
            Don't see your problem listed?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Every business has unique bottlenecks. Tell us what is actually happening in your workflow, and we'll engineer the system to solve it.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Tell Us What's Happening
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
