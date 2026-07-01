"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, Target, Clock, Shield, Zap, Mail, Globe } from "lucide-react";

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
            <span className="text-slate-600">About</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
            >
              We Build Systems, Not Just Deliverables
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed"
            >
              NetquoraX exists because most businesses are stitched together with tools that don't talk to each other. We fix that.
            </motion.p>
          </div>
        </section>

        {/* STORY SECTION */}
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
                  NetquoraX started from a simple frustration: watching businesses pay five different vendors for five systems that should've been one. A website team that doesn't talk to the automation team. An ads agency that has no idea what the CRM actually captures. A trading strategy that lives in spreadsheets instead of executing automatically.
                </p>
                <p>
                  We built NetquoraX to be the team that sees the whole picture — because most growth problems aren't creative problems, they're system problems. When your lead capture doesn't sync to your CRM, that's not a marketing issue. When your trading alerts don't execute, that's not a strategy issue. When your booking system doesn't remind patients, that's not a operations issue.
                </p>
                <p>
                  These are integration problems. And they're solvable with the right architecture.
                </p>
                <p>
                  Today, we work with startups, healthcare providers, financial traders, and businesses across industries to build systems that actually work together — websites that feed CRMs, automations that qualify leads, trading strategies that execute themselves, and marketing that's backed by real data.
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

        {/* TEAM SECTION */}
        <section className="py-16 border-t border-slate-200/60">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-12"
            >
              The Team
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-[32px] font-extrabold flex-shrink-0">
                  S
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-display text-[24px] font-bold text-[#0F172A]">
                    Sathveek
                  </h3>
                  <p className="text-[14px] font-semibold text-primary mt-1">
                    Founder & Lead Engineer
                  </p>
                  <p className="mt-4 text-[15px] text-slate-600 leading-relaxed max-w-lg">
                    Full-stack developer and systems architect with experience building web applications, automation pipelines, and trading systems. Believes that good software is invisible — it just works.
                  </p>

                  {/* Social Links */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                    <a
                      href="mailto:hello@netquorax.com"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-[#0F172A]">
            Want to work together?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Let's build something that actually works — systems that scale, automate, and grow with your business.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
