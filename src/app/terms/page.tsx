"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Terms of Service for NetQuorax client projects, software delivery, and consultation engagements.");
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#080C16] text-[#0F172A] dark:text-slate-100 min-h-screen">
      <Navbar />

      <main className="max-w-[800px] mx-auto px-6 pt-[140px] pb-24">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-400">Terms of Service</span>
        </div>

        <h1 className="font-display text-[36px] md:text-[48px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
          Last updated: July 9, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert text-[15px] text-slate-600 dark:text-slate-300 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              1. Services Scope
            </h2>
            <p>
              NetQuorax provides bespoke software engineering, workflow automation pipelines, custom database design, API integrations, and technical strategy consulting. Detailed milestones, timelines, and deliverables are specified in each client's individual Statement of Work (SOW) or signed contract proposal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              2. Payments & Billings
            </h2>
            <p>
              Engagement proposals are structured on fixed-price project quotes. Payment terms, deposit percentages, milestone payouts, and refund conditions are fully defined inside the primary client agreement. In the absence of specific terms, all invoices are due within fifteen (15) calendar days from receipt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              3. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise specified in writing, all source code, graphic designs, assets, and document flows delivered to the client become the sole property of the client upon full payment of the agreed contract fees. NetQuorax retains the rights to general software tools, library snippets, templates, and foundational framework templates built prior to or independently of the engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              4. Limitation of Liability
            </h2>
            <p>
              NetQuorax, its founders, and contractors are not liable for any indirect, incidental, special, or consequential damages (including, but not limited to, loss of profits, system downtime, business interruption, or trading execution losses arising from the use or inability to use delivered automation systems and strategy logic indicators) to the maximum extent permitted by governing laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              5. Termination of Engagements
            </h2>
            <p>
              Either party may terminate a project engagement according to the cancellation and exit terms outlined inside the active SOW. Upon termination, the client remains responsible for compensating NetQuorax for all work completed up to the date of termination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or require legal clarification regarding these terms, please contact our legal representative at <a href="mailto:legal@netquorax.com" className="text-primary hover:underline font-semibold">legal@netquorax.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
