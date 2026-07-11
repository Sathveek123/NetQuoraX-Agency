"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, HelpCircle } from "lucide-react";

const PRICING_TIERS = [
  {
    name: "Project-Based",
    price: "Starting from ₹45,000",
    description: "For a defined website, app, or automation build with a clear scope and end date.",
    isRecommended: false,
    features: [
      "Websites starting from ₹45,000",
      "E-commerce platforms scaling from ₹85,000+",
      "Defined timeline with clear milestones",
      "2-3 rounds of user design revisions",
      "Post-launch support window (30 days)",
      "Full source code delivery & setup handoff"
    ],
    ctaText: "Get a Quote"
  },
  {
    name: "Retainer",
    price: "Starting from ₹35,000/mo",
    description: "For ongoing development, automation maintenance, or continuous growth campaigns.",
    isRecommended: true,
    features: [
      "Dedicated monthly hours (40h baseline)",
      "Priority responder SLA response (24h)",
      "Monthly strategy alignment & roadmap check-in",
      "Flexible scope revisions based on sprint goals",
      "Proactive uptime monitoring & API fixes",
      "Discounted add-on services pricing tiers"
    ],
    ctaText: "Book a Call"
  },
  {
    name: "Trading Systems",
    price: "Starting from ₹60,000",
    description: "Pine Script custom indicators, execution bots, and strategy backtesting — priced per strategy rule complexity.",
    isRecommended: false,
    features: [
      "Pine Script v5 strategies from ₹60,000",
      "Automated webhook executors with broker APIs",
      "Robust historical backtesting & yield reports",
      "Risk protection features (stop loss & fallbacks)",
      "Encrypted Pine execution without source leak",
      "Complete system user documentation"
    ],
    ctaText: "Discuss Strategy"
  },
  {
    name: "Enterprise / Multi-System",
    price: "Custom quote scale",
    description: "For businesses needing multiple integrated systems — website + automation + trading + marketing working together.",
    isRecommended: false,
    features: [
      "Dedicated agency technical project lead",
      "Guaranteed custom SLA & uptime maintenance",
      "Cross-system sync database integrations",
      "Live staff training & operational runbooks",
      "Dedicated cloud database server structures",
      "Quarterly operational efficiency reviews"
    ],
    ctaText: "Contact Sales"
  }
];

const FAQ_ITEMS = [
  {
    question: "Do you require upfront payment?",
    answer: "For project-based work, we typically require a 50% upfront deposit to begin, with the remaining 50% due upon delivery. For retainers, billing is monthly in advance."
  },
  {
    question: "What if my project scope changes mid-build?",
    answer: "Scope changes are normal. We document change requests with adjusted timelines and costs for your approval before proceeding. No surprise bills."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, for larger project-based engagements (₹1,00,000+), we can structure payment across 2-3 milestones tied to delivery phases."
  },
  {
    question: "Is there a contract minimum for retainers?",
    answer: "Our standard retainer commitment is 3 months minimum to ensure we can deliver meaningful results. After that, it's month-to-month with 30 days notice to cancel."
  },
  {
    question: "What's included in post-launch support?",
    answer: "Project-based includes 30 days of bug fixes and minor adjustments. Retainers include ongoing support as part of monthly hours. Extended support packages are available."
  }
];

export default function PricingPage() {
  React.useEffect(() => {
    document.title = "Project Pricing & Packages | NetQuorax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get transparent fixed pricing details and delivery ranges for workflow automation, custom Pine Script indicators, and web builds.");
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
            <span className="text-slate-600">Pricing</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-ink leading-[1.1]"
            >
              Straightforward Pricing, No Guessing Games
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed"
            >
              Every project is scoped individually, but here's what typical engagements look like.
            </motion.p>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 border transition-all ${
                  tier.isRecommended
                    ? "bg-card-bg border-primary/30 shadow-lg shadow-primary/10 scale-[1.02]"
                    : "bg-card-bg border-border-ink shadow-sm hover:shadow-md hover:border-border-ink/80"
                }`}
              >
                {/* Recommended Badge */}
                {tier.isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1.5">
                    <Star size={12} fill="currentColor" /> Recommended
                  </div>
                )}

                <div className="pt-2">
                  <h3 className="font-display text-[24px] md:text-[28px] font-extrabold text-ink">
                    {tier.name}
                  </h3>
                  <div className="mt-3">
                    <span className="text-[32px] font-extrabold text-ink">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-[14px] text-slate-600 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`mt-8 block w-full text-center font-semibold px-6 py-3 rounded-full transition-colors text-[14px] ${
                      tier.isRecommended
                        ? "bg-primary text-white hover:bg-primary/95"
                        : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-16 border-t border-border-ink">
          <div className="mb-10">
            <h2 className="font-display text-[26px] md:text-[32px] font-bold text-ink">
              Feature Comparison
            </h2>
            <p className="text-[14px] text-slate-500 mt-2">
              Compare our plans side-by-side to choose the right model.
            </p>
          </div>

          <div className="overflow-x-auto border border-border-ink rounded-2xl bg-card-bg shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-light border-b border-border-ink text-[12px] font-bold text-muted uppercase tracking-wider">
                  <th className="p-4 md:p-5">Feature</th>
                  <th className="p-4 md:p-5">Project-Based</th>
                  <th className="p-4 md:p-5 bg-blue-500/5 text-primary">Retainer</th>
                  <th className="p-4 md:p-5">Trading Systems</th>
                  <th className="p-4 md:p-5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-ink text-[13px] text-muted">
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-ink">Engagement Scope</td>
                  <td className="p-4 md:p-5">Single milestone build</td>
                  <td className="p-4 md:p-5 bg-blue-500/5">Ongoing month-to-month</td>
                  <td className="p-4 md:p-5">Algorithm / script strategy</td>
                  <td className="p-4 md:p-5 font-medium">Unified multi-system sync</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-ink">Delivery Velocity</td>
                  <td className="p-4 md:p-5">4-6 weeks baseline</td>
                  <td className="p-4 md:p-5 bg-blue-500/5">Dedicated weekly velocity</td>
                  <td className="p-4 md:p-5">2-4 weeks typical</td>
                  <td className="p-4 md:p-5">Custom phased roadmap</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-ink">Post-Launch Support</td>
                  <td className="p-4 md:p-5">30 days included</td>
                  <td className="p-4 md:p-5 bg-blue-500/5">Always active maintenance</td>
                  <td className="p-4 md:p-5">14 days included</td>
                  <td className="p-4 md:p-5">Custom SLA agreements</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-ink">Code Ownership</td>
                  <td className="p-4 md:p-5 text-emerald-600 font-medium">100% Client ownership</td>
                  <td className="p-4 md:p-5 bg-blue-500/5 text-emerald-600 font-medium">100% Client ownership</td>
                  <td className="p-4 md:p-5">Client (excl. logic)</td>
                  <td className="p-4 md:p-5 text-emerald-600 font-medium">100% Client ownership</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-ink">Revisions Rounds</td>
                  <td className="p-4 md:p-5">2-3 Rounds included</td>
                  <td className="p-4 md:p-5 bg-blue-500/5 text-ink">Flexible / unlimited</td>
                  <td className="p-4 md:p-5">2 Rounds included</td>
                  <td className="p-4 md:p-5">Custom revision agreement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PRICING ADD-ONS */}
        <section className="py-16 border-t border-border-ink">
          <div className="mb-10">
            <h2 className="font-display text-[26px] md:text-[32px] font-bold text-ink">
              Pricing Add-ons
            </h2>
            <p className="text-[14px] text-slate-500 mt-2">
              Accelerate or secure your build with these additional options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold text-[16px] text-ink mb-1">
                    ⚡ Express Sprint Velocity
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Cut standard project timeline lengths by up to 50% by allocating dual developers to run simultaneous sprints.
                  </p>
                </div>
                <span className="text-primary font-bold text-[14px] whitespace-nowrap bg-blue-500/10 px-2.5 py-1 rounded-full">+₹20,000</span>
              </div>
            </div>

            <div className="bg-card-bg rounded-2xl p-6 border border-border-ink shadow-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold text-[16px] text-ink mb-1">
                    🔒 API & Webhook Monitoring
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Continuous logging checks, webhook retry alerts, database token refreshes, and immediate API maintenance.
                  </p>
                </div>
                <span className="text-primary font-bold text-[14px] whitespace-nowrap bg-blue-500/10 px-2.5 py-1 rounded-full">+₹15,000/mo</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 border-t border-border-ink">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle size={20} className="text-primary" />
              <h2 className="font-display text-[26px] md:text-[32px] font-bold text-ink">
                Pricing FAQ
              </h2>
            </div>

            <div className="space-y-6">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-card-bg rounded-2xl p-6 border border-border-ink">
                  <h3 className="font-bold text-[16px] text-ink mb-2">
                    {item.question}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display text-[24px] md:text-[30px] font-extrabold text-ink">
            Still not sure what fits?
          </h3>
          <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">
            Let's hop on a quick scoping call to discuss your needs and find the right engagement model.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
            >
              Book Scoping Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
