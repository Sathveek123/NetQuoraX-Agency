"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Shield, Zap, CheckCircle2 } from "lucide-react";
import { PROJECTS, Project } from "../page";

// Detailed case study data for each project
const CASE_STUDIES: Record<string, {
  brief: string[];
  approach: string[];
  techStack: string[];
  results: { label: string; value: string; icon: any }[];
  testimonial?: { quote: string; author: string; role: string };
}> = {
  "signal-engine": {
    brief: [
      "A quantitative trading firm needed to bridge their TradingView indicator alerts directly to broker execution APIs. Manual order entry was causing significant slippage and missed opportunities during high-volatility market sessions.",
      "The client required a solution that could execute orders within milliseconds of alert generation, with built-in risk management and fallback mechanisms to protect against API failures or extreme market conditions.",
      "Security was critical — the system needed to handle API credentials securely without exposing them to end users or logs."
    ],
    approach: [
      "Built a Node.js webhook server that receives TradingView alert webhooks via POST requests, validates the payload signature, and parses strategy parameters (symbol, direction, quantity, stop-loss, take-profit).",
      "Integrated with multiple broker APIs (Zerodha, Upstox, Angel One) using their official SDKs, implementing order routing logic that adapts to each broker's specific API requirements and rate limits.",
      "Implemented a risk management layer that checks position sizing, daily loss limits, and circuit breaker conditions before executing any order. Added fallback retry logic with exponential backoff for transient API failures.",
      "Deployed on AWS Lambda with API Gateway for serverless scaling, using AWS Secrets Manager for secure credential storage. Added CloudWatch alarms for monitoring execution latency and error rates."
    ],
    techStack: ["Node.js", "AWS Lambda", "TradingView Webhooks", "Zerodha Kite Connect", "Upstox API", "AWS Secrets Manager", "CloudWatch"],
    results: [
      { label: "Average Latency", value: "12ms", icon: Zap },
      { label: "Execution Success Rate", value: "99.7%", icon: CheckCircle2 },
      { label: "Slippage Reduction", value: "67%", icon: TrendingUp },
      { label: "Daily Trades Automated", value: "150+", icon: Clock }
    ],
    testimonial: {
      quote: "The webhook executor transformed our trading operations. We went from missing 40% of our signals to executing 99.7% with minimal slippage. The risk management layer alone has saved us from significant drawdowns.",
      author: "Rajesh Kumar",
      role: "Head of Quant Trading"
    }
  },
  "luxora-funnel": {
    brief: [
      "Luxora, a D2C beauty brand, was spending heavily on Meta and Google ads but seeing declining ROAS. Their landing pages weren't converting, and they lacked a cohesive funnel strategy to capture and nurture leads.",
      "The client needed a complete overhaul of their paid media strategy paired with high-converting landing pages optimized for their target audience.",
      "They also wanted better tracking and attribution to understand which campaigns were actually driving revenue."
    ],
    approach: [
      "Conducted a full audit of existing ad campaigns, identifying wasted spend on low-performing audiences and creatives. Restructured campaigns around high-intent segments with custom lookalike audiences based on top customer data.",
      "Designed and built three new landing pages using Next.js with A/B testing capabilities. Each page was optimized for specific campaign angles (skincare routine, ingredient education, social proof).",
      "Implemented Conversions API for both Meta and Google to improve tracking accuracy. Set up custom events for add-to-cart, checkout initiation, and purchase with proper value parameters.",
      "Created a lead nurturing email sequence using Klaviyo, triggered by specific landing page actions. Added WhatsApp automation for abandoned cart recovery."
    ],
    techStack: ["Meta Ads Manager", "Google Ads", "Next.js", "Vercel", "Klaviyo", "WhatsApp Business API", "Google Analytics 4"],
    results: [
      { label: "ROAS Increase", value: "3.8x", icon: TrendingUp },
      { label: "Cost Per Acquisition", value: "-52%", icon: TrendingUp },
      { label: "Landing Page Conversion", value: "4.2%", icon: CheckCircle2 },
      { label: "Email Revenue", value: "28%", icon: Clock }
    ],
    testimonial: {
      quote: "Our ad spend was going nowhere until NetquoraX restructured everything. The new landing pages converted 3x better, and the tracking finally gives us clarity on what's working.",
      author: "Priya Sharma",
      role: "Marketing Director"
    }
  },
  "healpath-portal": {
    brief: [
      "A multi-location dental practice was struggling with patient scheduling. Their phone-based booking system was overwhelmed, leading to long wait times and frequent no-shows.",
      "They needed an online booking portal that patients could use 24/7, with automatic appointment reminders to reduce no-shows.",
      "The system also needed to sync with their existing practice management software and provide doctors with a unified dashboard view."
    ],
    approach: [
      "Built a Next.js patient portal with a custom booking calendar that shows real-time availability across all locations and doctors. Implemented smart scheduling logic that prevents double-booking and optimizes appointment gaps.",
      "Integrated with the practice's existing EMR system via API, ensuring all bookings sync automatically to their internal records. Added patient intake forms that collect medical history before appointments.",
      "Implemented an automated reminder system using SMS and email — reminders sent 24 hours and 2 hours before appointments. Added WhatsApp reminders for patients who opted in.",
      "Built a doctor dashboard that shows daily schedules, patient histories, and upcoming appointments. Added analytics to track booking patterns and identify peak times."
    ],
    techStack: ["Next.js", "PostgreSQL", "Twilio SMS", "SendGrid", "WhatsApp Business API", "Custom EMR Integration", "Vercel"],
    results: [
      { label: "No-show Reduction", value: "22%", icon: TrendingUp },
      { label: "Online Bookings", value: "68%", icon: CheckCircle2 },
      { label: "Admin Hours Saved", value: "15h/week", icon: Clock },
      { label: "Patient Satisfaction", value: "4.8/5", icon: Shield }
    ],
    testimonial: {
      quote: "The booking portal has been a game-changer. Our front desk staff can finally focus on patient care instead of phone calls, and no-shows dropped significantly after implementing reminders.",
      author: "Dr. Ankit Patel",
      role: "Clinic Director"
    }
  },
  "meridian-sync": {
    brief: [
      "Meridian Logistics, a mid-sized freight company, was managing their operations across Google Sheets, email, and a legacy CRM. Dispatchers spent hours manually copying data between systems, leading to errors and delayed updates.",
      "They needed a unified system that would automatically sync dispatch data, driver logs, and customer updates across all their tools.",
      "The client also wanted real-time tracking visibility for customers and automated status notifications."
    ],
    approach: [
      "Built a central database using PostgreSQL that serves as the single source of truth. Created custom API endpoints to read from and write to this database.",
      "Developed automation workflows using n8n to sync data between the central database, Google Sheets, and the legacy CRM. Set up bidirectional sync so updates in any system reflect everywhere.",
      "Implemented a real-time tracking system that uses GPS data from driver mobile apps. Built a customer portal where clients can track shipments and receive automated status updates via SMS and email.",
      "Added automated invoice generation triggered by delivery completion, with data flowing directly to their accounting software."
    ],
    techStack: ["Node.js", "PostgreSQL", "n8n", "Google Sheets API", "Legacy CRM Integration", "Twilio SMS", "SendGrid"],
    results: [
      { label: "Weekly Hours Saved", value: "180+", icon: Clock },
      { label: "Data Entry Errors", value: "-89%", icon: Shield },
      { label: "Customer Inquiries", value: "-45%", icon: TrendingUp },
      { label: "Dispatch Efficiency", value: "2.3x", icon: Zap }
    ],
    testimonial: {
      quote: "We went from drowning in spreadsheets to a fully automated operation. The sync between systems is flawless, and our customers love the real-time tracking. This transformed our business.",
      author: "Vikram Mehta",
      role: "Operations Manager"
    }
  },
  "holloway-creative": {
    brief: [
      "Holloway Creative, a London-based design agency, needed a new website that showcased their portfolio and attracted high-value clients. Their existing site was outdated, slow, and not mobile-responsive.",
      "They wanted a visually striking site with smooth animations and interactions that reflected their creative capabilities.",
      "The site also needed to be fast, SEO-optimized, and easy for their team to update with new project case studies."
    ],
    approach: [
      "Designed a custom UI with bold typography, generous whitespace, and subtle micro-interactions. Created a portfolio grid with hover effects that reveal project details and metrics.",
      "Built the site using Next.js with TypeScript for performance and type safety. Implemented image optimization using Next.js Image component and lazy loading for fast page loads.",
      "Created a custom CMS using Sanity.io that allows the Holloway team to easily add new projects, update content, and manage their portfolio without touching code.",
      "Implemented smooth page transitions using Framer Motion, added scroll-triggered animations for content reveals, and ensured full mobile responsiveness with touch-friendly interactions."
    ],
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion", "Tailwind CSS", "Vercel", "Google Analytics"],
    results: [
      { label: "Inbound Leads", value: "3.2x", icon: TrendingUp },
      { label: "Page Load Time", value: "0.8s", icon: Zap },
      { label: "Bounce Rate", value: "-34%", icon: TrendingUp },
      { label: "Mobile Traffic", value: "58%", icon: CheckCircle2 }
    ],
    testimonial: {
      quote: "NetquoraX captured exactly what we wanted — a site that feels premium and creative while being incredibly fast. Our inbound leads have tripled since launch.",
      author: "James Holloway",
      role: "Creative Director"
    }
  },
  "nifty-bot": {
    brief: [
      "A proprietary trader had developed a profitable Nifty futures strategy but was executing it manually, which led to inconsistent results and emotional decision-making during market volatility.",
      "They needed a Pine Script indicator that could generate alerts based on their strategy rules, plus a webhook system to execute these alerts automatically.",
      "The strategy logic needed to remain protected — the client didn't want their proprietary indicators exposed to end users."
    ],
    approach: [
      "Developed a Pine Script v5 indicator that implements the client's strategy logic with multiple entry and exit conditions. Added visual elements on the chart to show potential trade zones.",
      "Implemented backtesting logic within the script to verify strategy performance across 3 years of historical Nifty futures data. Added performance metrics including win rate, profit factor, and maximum drawdown.",
      "Set up alert webhooks that trigger when entry conditions are met. The webhook payload includes all necessary parameters for order execution (symbol, direction, quantity, stop-loss, take-profit).",
      "Connected the webhook to a secure execution server that routes orders to the broker API. Implemented source code protection so the strategy logic remains encrypted and inaccessible to end users."
    ],
    techStack: ["Pine Script v5", "TradingView", "Webhook Automation", "Broker API Integration", "Backtesting Engine", "AWS Lambda"],
    results: [
      { label: "Win Rate", value: "64%", icon: CheckCircle2 },
      { label: "Profit Factor", value: "2.1", icon: TrendingUp },
      { label: "Max Drawdown", value: "-8.2%", icon: Shield },
      { label: "Monthly Return", value: "12.4%", icon: TrendingUp }
    ],
    testimonial: {
      quote: "The automated execution eliminated my worst enemy — my own emotions. The Pine Script indicator is accurate, and the webhook executes faster than I ever could manually.",
      author: "Anonymous",
      role: "Proprietary Trader"
    }
  }
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const project = PROJECTS.find((p) => p.slug === slug);
  const caseStudy = CASE_STUDIES[slug];

  if (!project || !caseStudy) {
    return (
      <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <Navbar />
        <main className="max-w-[1280px] mx-auto px-6 py-32">
          <h1 className="font-display text-[40px] font-bold text-[#0F172A]">Case Study Not Found</h1>
          <Link href="/portfolio" className="mt-4 inline-block text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6">
        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-[140px] pb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-slate-600">{project.name}</span>
        </motion.div>

        {/* HERO */}
        <section className="pb-16 lg:pb-24 border-b border-slate-200/60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
              {project.category}
            </span>
            <h1 className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
              {project.name}
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed">
              {project.blurb}
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div
              className="h-[400px] md:h-[500px] flex items-center justify-center p-12 text-white relative"
              style={{ background: project.bgGrad }}
            >
              <div className="text-center z-10">
                <span className="text-[64px] md:text-[80px] font-extrabold tracking-tight block">
                  {project.metric}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-slate-300 mt-2 block">
                  {project.metricLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* THE BRIEF */}
        <section className="py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
              The Brief
            </span>
            <h2 className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-8">
              What the Client Needed
            </h2>
            <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed max-w-3xl">
              {caseStudy.brief.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* THE APPROACH */}
        <section className="py-16 lg:py-24 border-t border-slate-200/60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
              The Approach
            </span>
            <h2 className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-8">
              What We Built
            </h2>
            <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed max-w-3xl">
              {caseStudy.approach.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* THE RESULTS */}
        <section className="py-16 lg:py-24 border-t border-slate-200/60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
              The Result
            </span>
            <h2 className="font-display text-[28px] md:text-[36px] font-extrabold text-[#0F172A] mb-12">
              Impact & Metrics
            </h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {caseStudy.results.map((result, idx) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <result.icon size={20} />
                  </div>
                  <span className="block text-[32px] font-extrabold text-[#0F172A]">
                    {result.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                    {result.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trading Risk Disclaimer inline */}
            {(project.category === "Trading Systems" || project.slug === "nifty-bot" || project.slug === "signal-engine") && (
              <div className="mt-8 mb-12 p-5 bg-slate-100 dark:bg-[#111827] border border-slate-200/50 dark:border-slate-800 rounded-2xl">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  <strong>Risk Disclosure:</strong> Trading involves substantial risk of loss and is not suitable for all investors. Backtested and historical performance results (including the 64% win rate score shown above) do not guarantee future results. NetQuorax builds and delivers trading system logic as a technology product service; we are not a registered investment advisor or broker-dealer, and nothing here constitutes financial advice. Clients are solely responsible for regulatory compliance in their jurisdiction.
                </p>
              </div>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#0F172A] rounded-3xl p-8 md:p-12 text-white"
              >
                <blockquote className="text-[18px] md:text-[20px] leading-relaxed italic opacity-90">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                    {caseStudy.testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-slate-400">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* NEXT PROJECT */}
        <section className="py-16 border-t border-slate-200/60 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Next Project
                </span>
                <h3 className="font-display text-[24px] font-bold text-[#0F172A]">
                  {nextProject.name}
                </h3>
                <p className="text-[14px] text-slate-500 mt-1">{nextProject.category}</p>
              </div>
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
              >
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
