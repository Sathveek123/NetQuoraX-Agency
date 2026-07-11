"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Globe, Smartphone, Palette, Bot, MessageSquare, Phone, Zap, BarChart3,
  Cloud, Shield, Gauge, TrendingUp, Code2, LineChart, Bell, FlaskConical,
  Brain, Megaphone, Search, Funnel, Mail, Layers, ArrowUpRight,
  CheckCircle, ArrowRight
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────
interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  included: string[];
}

interface Category {
  id: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  accent: string;
  accentBg: string;
  services: Service[];
}

// ─── Card fade-up variant ─────────────────────────────────────────────────
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
};

// ─── Data ────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  {
    id: "build",
    eyebrow: "💼 Build",
    headline: "Websites, apps, and products that actually convert.",
    subtext: "Fast, conversion-focused digital products built on modern stacks — from landing pages to full SaaS platforms.",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.06)",
    services: [
      {
        icon: Globe,
        title: "Custom Website Development",
        desc: "Fast, conversion-focused websites built on modern stacks — from landing pages to full business sites. SEO-ready, mobile-first, built to load in under 2 seconds.",
        included: ["Custom design, no stock templates", "Mobile-first, Google PageSpeed optimized", "SEO-ready architecture built in", "Headless CMS configuration if needed"],
      },
      {
        icon: Smartphone,
        title: "Mobile App Development (Android & iOS)",
        desc: "Native and cross-platform apps for iOS and Android, from MVP to full-scale product, built with React Native or Flutter depending on your needs.",
        included: ["iOS & Android from one codebase", "Offline-first architecture options", "Push notifications & deep links", "App Store & Play Store submission"],
      },
      {
        icon: Palette,
        title: "UI/UX Design & Branding",
        desc: "Full brand identity and interface design — logos, design systems, and user flows that make your product feel premium from the first screen.",
        included: ["Brand identity & logo design", "Design system & component library", "User flow & wireframe mapping", "Figma handoff to development"],
      },
    ],
  },
  {
    id: "automate",
    eyebrow: "🤖 Automate",
    headline: "Systems that work while you sleep.",
    subtext: "We connect your tools, train AI on your data, and build pipelines that run without manual intervention.",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.06)",
    services: [
      {
        icon: Bot,
        title: "AI Chatbots & AI Agents",
        desc: "Custom-trained AI agents that handle support, sales, and lead qualification — connected to your real data, not a generic script.",
        included: ["Custom LLM training on your data", "Integrated across web, app, WhatsApp", "Live escalation to human agents", "Conversation analytics dashboard"],
      },
      {
        icon: MessageSquare,
        title: "WhatsApp Automation & Bots",
        desc: "Automated WhatsApp flows for order updates, lead capture, and customer support — built on the official WhatsApp Business API.",
        included: ["Official Meta API setup & verification", "Custom message templates & variables", "Interactive choice buttons", "Opt-in subscription compliance"],
      },
      {
        icon: Phone,
        title: "AI Voice Bots & Calling Agents",
        desc: "AI voice agents that handle inbound and outbound calls — appointment booking, lead qualification, and support, sounding natural, not robotic.",
        included: ["Natural language voice processing", "Calendar & booking integration", "Real-time transcription & CRM logging", "Multi-language support"],
      },
      {
        icon: Zap,
        title: "Workflow Automation (Make, Zapier, n8n)",
        desc: "We connect your tools — CRM, email, spreadsheets, payment systems — into automated pipelines so manual data entry disappears.",
        included: ["n8n / Make / Zapier orchestration", "Legacy database & spreadsheet connectors", "Real-time Slack/Teams alert hooks", "Error monitoring & retry logic"],
      },
      {
        icon: BarChart3,
        title: "CRM & Marketing Automation",
        desc: "Automated lead scoring, follow-up sequences, and CRM workflows that keep your pipeline moving without manual chasing.",
        included: ["Lead scoring & segmentation logic", "Automated drip & nurture sequences", "CRM data sync & deduplication", "Reporting & conversion dashboards"],
      },
      {
        icon: Cloud,
        title: "Cloud Infrastructure & DevOps",
        desc: "Scalable cloud architecture, CI/CD pipelines, and deployment infrastructure so your product stays fast and stable as you grow.",
        included: ["AWS / GCP / Azure deployment", "Docker & Kubernetes orchestration", "CI/CD pipeline setup (GitHub Actions)", "Monitoring, uptime & auto-scaling"],
      },
    ],
  },
  {
    id: "protect",
    eyebrow: "🔒 Protect & Optimize",
    headline: "Make sure it's fast and safe.",
    subtext: "Security and performance aren't afterthoughts — we build them in from day one.",
    accent: "#EA580C",
    accentBg: "rgba(234,88,12,0.06)",
    services: [
      {
        icon: Shield,
        title: "Cybersecurity Solutions",
        desc: "Security audits, threat detection setup, and hardened infrastructure — built in from day one, not bolted on after a breach.",
        included: ["Full security audit & penetration testing", "Threat detection & SIEM setup", "Access control & secrets management", "Compliance review (GDPR, ISO basics)"],
      },
      {
        icon: Gauge,
        title: "Website Speed & Performance Optimization",
        desc: "We diagnose and fix what's slowing your site down — image optimization, caching, code-splitting — measurable load-time improvements, not guesswork.",
        included: ["Core Web Vitals audit & fix plan", "Image, font & JS bundle optimization", "CDN setup & caching strategy", "Before/after PageSpeed report"],
      },
    ],
  },
  {
    id: "trading",
    eyebrow: "📈 Trading Systems",
    headline: "From strategy to execution.",
    subtext: "Custom indicator scripts, strategy backtesters, and trading bot executions built to your rules.",
    accent: "#16A34A",
    accentBg: "rgba(22,163,74,0.06)",
    services: [
      {
        icon: Code2,
        title: "TradingView Pine Script Development",
        desc: "Custom Pine Script indicators and strategies built to your exact logic, tested and optimized for TradingView.",
        included: ["Pine Script v5 indicators & strategies", "Accurate backtest logic setup", "Alert webhook configurations", "Source-logic protection options"],
      },
      {
        icon: TrendingUp,
        title: "Trading Bots Development",
        desc: "Automated execution bots that run your strategy across exchanges — built with proper risk controls, not just backtested theory.",
        included: ["Exchange API integration (Binance, Zerodha…)", "Position sizing & risk-per-trade logic", "Order management & emergency stop controls", "Live P&L monitoring dashboard"],
      },
      {
        icon: LineChart,
        title: "Automated Trading Strategies",
        desc: "End-to-end strategy design: entry/exit rules, position sizing, and risk management, coded and deployed as a working system.",
        included: ["Entry/exit rule logic design", "Risk management framework", "Multi-timeframe analysis support", "Full deployment to live account"],
      },
      {
        icon: Bell,
        title: "Custom Indicators, Signals & Alerts",
        desc: "Custom technical indicators and real-time alert systems delivered via Telegram, email, or webhook — built to your exact criteria.",
        included: ["Custom indicator equations", "Multi-channel alert delivery", "Signal filtering & noise reduction", "Telegram bot integration"],
      },
      {
        icon: FlaskConical,
        title: "Strategy Backtesting & Optimization",
        desc: "Rigorous historical testing across multiple market conditions — real numbers, clearly labeled as backtested, never presented as guaranteed results.",
        included: ["Multi-year historical data testing", "Overfitting reduction techniques", "Walk-forward validation", "Detailed performance report"],
      },
      {
        icon: Brain,
        title: "AI-Powered Trading Systems",
        desc: "Machine-learning-driven models layered on top of traditional strategy logic — for teams wanting an edge beyond static rule-based systems.",
        included: ["ML model training on market data", "Feature engineering for price signals", "Hybrid rule + ML execution logic", "Ongoing model retraining support"],
      },
    ],
  },
  {
    id: "grow",
    eyebrow: "📢 Grow",
    headline: "Get found, get leads, get customers.",
    subtext: "Targeted campaigns and full-funnel systems built around your actual customer profile, not set-and-forget templates.",
    accent: "#DB2777",
    accentBg: "rgba(219,39,119,0.06)",
    services: [
      {
        icon: Megaphone,
        title: "Facebook & Instagram Ads",
        desc: "Targeted ad campaigns built around your actual customer profile, tracked and optimized weekly, not set-and-forget.",
        included: ["Audience research & creative strategy", "A/B split testing every 2 weeks", "Weekly performance reporting", "Retargeting & lookalike audiences"],
      },
      {
        icon: Search,
        title: "Google Ads Management",
        desc: "Search and display campaigns focused on cost-per-lead efficiency, not just impressions.",
        included: ["Keyword research & bid strategy", "Search, display & shopping campaigns", "Conversion tracking setup", "Monthly spend optimization review"],
      },
      {
        icon: Layers,
        title: "Lead Generation Systems",
        desc: "Full-funnel systems — landing pages, forms, and follow-up sequences — built to turn traffic into qualified leads automatically.",
        included: ["High-converting landing page design", "Lead magnet & opt-in strategy", "Automated follow-up sequences", "CRM pipeline integration"],
      },
      {
        icon: Mail,
        title: "Email Marketing Automation",
        desc: "Automated email sequences for onboarding, nurture, and re-engagement — segmented and triggered by real user behavior.",
        included: ["Drip sequence design & copywriting", "Behavioral trigger setup", "List segmentation strategy", "Deliverability & open rate optimization"],
      },
      {
        icon: BarChart3,
        title: "Conversion Rate Optimization (CRO)",
        desc: "We test and refine your funnel — headlines, forms, checkout flow — to convert more of the traffic you're already getting.",
        included: ["Heatmap & session recording analysis", "A/B test hypothesis & execution", "Form & checkout flow optimization", "Monthly conversion lift report"],
      },
      {
        icon: ArrowUpRight,
        title: "Digital Growth Strategy",
        desc: "A clear, prioritized roadmap across channels — built around your actual growth bottleneck, not a scattershot list of tactics.",
        included: ["Growth audit & bottleneck diagnosis", "Prioritized 90-day action plan", "Channel mix recommendation", "Quarterly strategy review sessions"],
      },
    ],
  },
];

const WHY_ITEMS = [
  {
    icon: "🎯",
    title: "One Partner, Every Discipline",
    desc: "No juggling five agencies — one team across dev, AI, and marketing.",
  },
  {
    icon: "🤖",
    title: "AI & Automation Expertise",
    desc: "We build the automation ourselves — not resell someone else's template.",
  },
  {
    icon: "📊",
    title: "Business-Focused, Not Just Technical",
    desc: "Every build is scoped around a business outcome, not a feature list.",
  },
  {
    icon: "⚡",
    title: "Fast Communication, Fixed Timelines",
    desc: "Weekly check-ins and dates we actually hit — no radio silence.",
  },
  {
    icon: "🔒",
    title: "Scalable, Secure by Default",
    desc: "Infrastructure built to handle growth, not just launch day.",
  },
  {
    icon: "🤝",
    title: "Long-Term Support",
    desc: "We stay on after handoff — bug fixes, updates, and scaling help.",
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────
function ServiceCard({ service, accent, index }: { service: Service; accent: string; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariant}
      className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${accent}15`, color: accent }}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-[17px] font-bold text-[#0B1020] dark:text-white mb-1.5 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[#4b5563] dark:text-slate-400">
          {service.desc}
        </p>
      </div>
      <ul className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
        {service.included.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12.5px] text-[#374151] dark:text-slate-400">
            <CheckCircle size={13} className="shrink-0 mt-[2px]" style={{ color: accent }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────
function CategorySection({ cat }: { cat: Category }) {
  const isTwoCol = cat.services.length === 2;
  return (
    <section id={cat.id} className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-bold mb-4"
          style={{ backgroundColor: cat.accentBg, color: cat.accent }}
        >
          {cat.eyebrow}
        </div>
        <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#0B1020] dark:text-white mb-2 font-display">
          {cat.headline}
        </h2>
        <p className="text-[16px] text-[#4b5563] dark:text-slate-400 max-w-xl">
          {cat.subtext}
        </p>
        {/* Trading risk disclaimer */}
        {cat.id === "trading" && (
          <p className="mt-3 text-[12px] text-[#94a3b8] dark:text-slate-500">
            ⚠️ Trading involves risk. Performance figures shown are backtested and illustrative — not guaranteed returns.{" "}
            <Link href="/risk-disclosure" className="underline hover:text-[#2563EB] transition-colors">
              See full disclosure →
            </Link>
          </p>
        )}
      </div>
      {/* Card Grid */}
      <div className={`grid gap-5 ${isTwoCol ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {cat.services.map((service, i) => (
          <ServiceCard key={service.title} service={service} accent={cat.accent} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Services Hero Visual ──────────────────────────────────────────────────
function ServicesHeroVisual() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-5 bg-[#0d1220] aspect-[16/11] w-full text-white font-mono flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/8 pb-3">
        <span className="text-[11px] font-semibold text-slate-300">NetquoraX — Integration Hub</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-blue-500/15 border border-blue-500/30 text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Hub Online
        </span>
      </div>

      {/* Body Graph */}
      <div className="relative flex-1 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connector lines to corners */}
          <line x1="100" y1="65" x2="35" y2="25" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="100" y1="65" x2="165" y2="25" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="100" y1="65" x2="35" y2="105" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="100" y1="65" x2="165" y2="105" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

          {/* Glowing path pulses */}
          <path d="M 100,65 L 35,25" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="10 60" strokeDashoffset="0" className="animate-[dash_3s_linear_infinite]" />
          <path d="M 100,65 L 165,25" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="10 60" strokeDashoffset="0" className="animate-[dash_3.5s_linear_infinite]" />
          <path d="M 100,65 L 35,105" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="10 60" strokeDashoffset="0" className="animate-[dash_4s_linear_infinite]" />
          <path d="M 100,65 L 165,105" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="10 60" strokeDashoffset="0" className="animate-[dash_2.5s_linear_infinite]" />

          {/* Central Hub Node */}
          <circle cx="100" cy="65" r="14" fill="rgba(37,99,235,0.15)" stroke="#2563EB" strokeWidth="1.5" />
          <circle cx="100" cy="65" r="8" fill="#2563EB" className="animate-pulse" />

          {/* Outer Nodes */}
          <g>
            <circle cx="35" cy="25" r="7" fill="#0d1220" stroke="#2563EB" strokeWidth="1.5" />
            <text x="35" y="38" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">BUILD</text>
          </g>
          <g>
            <circle cx="165" cy="25" r="7" fill="#0d1220" stroke="#06B6D4" strokeWidth="1.5" />
            <text x="165" y="38" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">GROW</text>
          </g>
          <g>
            <circle cx="35" cy="105" r="7" fill="#0d1220" stroke="#7C3AED" strokeWidth="1.5" />
            <text x="35" y="118" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">AUTOMATE</text>
          </g>
          <g>
            <circle cx="165" cy="105" r="7" fill="#0d1220" stroke="#22C55E" strokeWidth="1.5" />
            <text x="165" y="118" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">PROTECT</text>
          </g>
        </svg>

        {/* Floating status details */}
        <div className="absolute top-2 left-2 p-1.5 rounded bg-white/5 border border-white/8 text-[7px] leading-tight flex flex-col gap-0.5">
          <span className="text-white/60">SYS COMPLIANCE: <span className="text-green-400">PASSED</span></span>
          <span className="text-white/60">LATENCY SPEED: <span className="text-blue-400">&lt;12ms</span></span>
        </div>

        <div className="absolute bottom-2 right-2 p-1.5 rounded bg-white/5 border border-white/8 text-[7px] leading-tight flex flex-col gap-0.5">
          <span className="text-white/60">SERVICES SYNCED: <span className="text-green-400">5/5</span></span>
          <span className="text-white/60">DEPLOYED MVP: <span className="text-blue-400">100%</span></span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/8 pt-2.5 flex items-center justify-between text-[8px] text-slate-400">
        <span>Active Operations Panel</span>
        <span>Secure TLS 1.3</span>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -70;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8FAFC] dark:bg-[#0B1020] min-h-screen">

        {/* PAGE HERO */}
        <section className="pt-[120px] pb-16 relative overflow-hidden">
          {/* Dot grid bg */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-0">
            <svg width="100%" height="100%"><defs><pattern id="sg" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#0B1020" /></pattern></defs><rect width="100%" height="100%" fill="url(#sg)" /></svg>
          </div>
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#2563EB]/6 border border-[#2563EB]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#2563EB] mb-6 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  ● Our Full Service Menu
                </div>
                <h1 className="font-display text-[38px] sm:text-[52px] font-extrabold leading-[1.07] tracking-tight text-[#0B1020] dark:text-white mb-5">
                  Every Service, Explained —<br />
                  <span className="text-[#2563EB]">Pick What Moves Your Business</span>
                </h1>
                <p className="text-[17px] leading-relaxed text-[#4b5563] dark:text-slate-400 mb-8 max-w-xl">
                  Five categories, 20+ services — browse what fits, or book a call and we'll scope it together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:brightness-110 transition-all"
                  >
                    Book a Strategy Call
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 text-[#0B1020] dark:text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>

              {/* Right Column - Static SVG Visual Node Diagram */}
              <div className="relative w-full max-w-[500px] mx-auto select-none mt-8 lg:mt-0">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-[#2563EB]/8 blur-[80px] rounded-full scale-90 -z-10" />
                <ServicesHeroVisual />
              </div>
            </div>

            {/* Jump nav */}
            <div className="mt-12 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full border transition-colors hover:border-transparent"
                  style={{ borderColor: `${cat.accent}40`, color: cat.accent, backgroundColor: `${cat.accent}08` }}
                >
                  {cat.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* CATEGORY SECTIONS */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <CategorySection cat={cat} />
              <div className="h-px bg-slate-100 dark:bg-slate-800 mb-4" />
            </div>
          ))}
        </div>

        {/* WHY WORK WITH US */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-[32px] sm:text-[40px] font-extrabold text-[#0B1020] dark:text-white mb-3">
                ✅ Why Work With NetquoraX
              </h2>
              <p className="text-[16px] text-[#4b5563] dark:text-slate-400">
                Concrete reasons, not buzzwords.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                  className="bg-[#F8FAFC] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-[16px] font-bold text-[#0B1020] dark:text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#4b5563] dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA BAND */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] rounded-3xl px-8 py-14 text-center relative overflow-hidden">
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg width="100%" height="100%"><defs><pattern id="ctag" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#ctag)" /></svg>
              </div>
              <div className="relative z-10">
                <h2 className="font-display text-[28px] sm:text-[38px] font-extrabold text-white leading-tight mb-4">
                  From AI Agents to Trading Systems,<br className="hidden sm:block" /> Websites to Ad Campaigns — We Help You Scale.
                </h2>
                <p className="text-[16px] text-slate-300 mb-8 max-w-lg mx-auto">
                  Let's talk about what's actually slowing your business down, and fix it.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#2563EB] text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-110 transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
