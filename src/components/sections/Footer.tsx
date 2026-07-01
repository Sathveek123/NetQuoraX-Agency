"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Share2, Mail, ExternalLink } from "lucide-react";

const SOCIAL = [
  { Icon: Globe,       href: "#", label: "LinkedIn"  },
  { Icon: Share2,      href: "#", label: "Instagram" },
  { Icon: ExternalLink,href: "#", label: "Twitter/X" },
  { Icon: Mail,        href: "mailto:hello@netquorax.com", label: "Email" },
];

const LINKS: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    items: [
      { label: "Website Development", href: "#services" },
      { label: "Mobile Apps",         href: "#services" },
      { label: "AI Automation",       href: "#services" },
      { label: "Trading Systems",     href: "#services" },
      { label: "Digital Marketing",   href: "#services" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Startups",   href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Finance",    href: "#industries" },
      { label: "Ecommerce",  href: "#industries" },
      { label: "View all →", href: "#industries" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About",     href: "#top"       },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact",   href: "#contact"   },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1020] pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12"
        >
          {/* Brand col (wider) */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[15px]">N</span>
              </span>
              <span className="font-display font-extrabold text-[20px] text-white tracking-tight">
                Netquora<span className="text-[#2563EB]">X</span>
              </span>
            </div>

            <p className="mt-4 text-[14px] text-white/50 leading-relaxed max-w-[280px]">
              We build the websites, automation, and systems that help businesses actually scale.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-[13px] uppercase tracking-[0.12em] text-white/40 font-semibold mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-white/90 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} NetquoraX. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
