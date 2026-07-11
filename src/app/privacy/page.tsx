"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Privacy Policy for NetQuorax systems and software solutions. Read about our data handling, usage, and privacy practices.");
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#080C16] text-[#0F172A] dark:text-slate-100 min-h-screen">
      <Navbar />

      <main className="max-w-[800px] mx-auto px-6 pt-[140px] pb-24">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-400">Privacy Policy</span>
        </div>

        <h1 className="font-display text-[36px] md:text-[48px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
          Last updated: July 9, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert text-[15px] text-slate-600 dark:text-slate-300 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us (such as name, email address, company name, and project requirements via our booking and contact forms) and basic analytics data (pages visited, browser type, and duration of stay) via server logs and tracking utilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information strictly to respond to inquiries, schedule discovery sessions, deliver contracted custom technology integrations, optimize your website browsing experience, and send security updates or technical documentation. We do not sell or lease your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              3. Data Sharing & Third Parties
            </h2>
            <p>
              We may share necessary data with reliable third-party service providers (such as hosting utilities, cloud execution servers, database providers, and booking tools) solely to deploy systems and operate our business, under strict confidentiality obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              4. Data Retention & Security
            </h2>
            <p>
              We retain client details and data for as long as necessary to complete the contracted scope of work, fulfill our legal obligations, and resolve outstanding support queries, after which it is deleted or permanently anonymized. All data in transit is encrypted using Secure Sockets Layer (SSL) protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              5. Your Rights & Access
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal data collected by us at any time. To issue a data inquiry, please contact our privacy desk at <a href="mailto:netquorax@gmail.com" className="text-primary hover:underline font-semibold">netquorax@gmail.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-bold text-[#0F172A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              6. Policy Updates
            </h2>
            <p>
              We reserve the right to modify this Privacy Policy as our business scales or to reflect changes in regulatory standards. The updated date will always be visible at the top of this page.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
