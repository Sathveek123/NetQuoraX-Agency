"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function RiskDisclosurePage() {
  useEffect(() => {
    document.title = "Risk Disclosure | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Risk Disclosure for NetQuorax custom trading system development, automated indicator alerts, and software delivery.");
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#080C16] text-[#0F172A] dark:text-slate-100 min-h-screen">
      <Navbar />

      <main className="max-w-[800px] mx-auto px-6 pt-[140px] pb-24">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-400">Risk Disclosure</span>
        </div>

        <h1 className="font-display text-[36px] md:text-[48px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-8">
          Risk Disclosure
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
          Last updated: July 9, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert text-[15px] text-slate-600 dark:text-slate-300 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              1. General Trading Risk
            </h2>
            <p>
              Trading financial instruments (including, but not limited to, futures, options, equities, commodities, and foreign exchange currencies) involves a substantial risk of financial loss and is not suitable for all investors. The high degree of leverage often associated with trading can work against you as well as for you, potentially leading to losses that exceed your initial capital deposit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              2. Technology & Software Scope
            </h2>
            <p>
              NetQuorax designs, builds, and delivers custom software applications, Pine Script strategies, data pipelines, indicator visual panels, and webhook order routing systems strictly as a **technology service**. We do not operate as registered investment advisors, financial consultants, or licensed broker-dealers under any jurisdiction. None of the content, tools, documentation, or advice provided on this website or during project consults constitutes financial, investment, tax, or legal advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              3. Performance & Backtesting Limitations
            </h2>
            <p>
              All performance figures, historical statistics, backtested charts, and percentage scores (such as the 64% and 68% win rates referenced inside our portfolio sections) are illustrative calculations representing historical parameters. Past performance results do not guarantee future success. Real trading scenarios differ from backtested simulations due to market slippage, exchange commission fees, margin rules, lack of liquidity, and execution delays.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              4. Client Compliance Obligations
            </h2>
            <p>
              Clients are solely responsible for ensuring that their deployment of automated execution tooling, broker webhooks, and custom indicators is fully compliant with securities rules, trading regulations, and licensing requirements in their local jurisdiction (including regulatory frameworks of SEBI in India, SEC/CFTC in the United States, FCA in the United Kingdom, or equivalent regional watchdogs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              5. Acceptable Use
            </h2>
            <p>
              By utilizing any system engineered by NetQuorax, you acknowledge and agree that you are using the software at your own discretion and risk. NetQuorax is not liable for capital drawdowns, broker execution errors, API outages, signal latency issues, or financial losses of any kind.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
