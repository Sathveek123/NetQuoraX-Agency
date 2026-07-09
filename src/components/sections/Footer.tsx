"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import Link from "next/link";

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

const SOCIAL = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/netquorax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { Icon: Globe, href: "https://linkedin.com/company/netquorax", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hello@netquorax.com", label: "Email" },
];

const LINKS = [
  {
    heading: "Services",
    items: [
      { label: "Website Development", href: "/services" },
      { label: "AI & Automation", href: "/services" },
      { label: "Trading Systems", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Startups", href: "/solutions" },
      { label: "Healthcare", href: "/solutions" },
      { label: "Finance", href: "/solutions" },
      { label: "Ecommerce", href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Our Story", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1020] pt-20 pb-8 text-white">
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
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[15px]">N</span>
              </span>
              <span className="font-display font-extrabold text-[20px] text-white tracking-tight">
                Netquora<span className="text-[#2563EB]">X</span>
              </span>
            </Link>

            <p className="mt-4 text-[14px] text-white/50 leading-relaxed max-w-[280px]">
              We build the websites, automation, and systems that help businesses actually scale.
            </p>

            {/* Direct Contacts */}
            <div className="mt-6 space-y-3 text-[13px] text-white/60">
              <div>
                <span className="block font-bold text-white/80">General Inquiries</span>
                <a href="mailto:hello@netquorax.com" className="hover:text-[#2563EB] transition-colors duration-200">hello@netquorax.com</a>
              </div>
              <div>
                <span className="block font-bold text-white/80">Client Support</span>
                <a href="mailto:support@netquorax.com" className="hover:text-[#2563EB] transition-colors duration-200">support@netquorax.com</a>
              </div>
              <div>
                <span className="block font-bold text-white/80">Strategy & Booking</span>
                <Link href="/contact" className="hover:text-[#2563EB] transition-colors duration-200">Book a Scoping Call &rarr;</Link>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-white/90 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
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
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/40">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <span className="text-white/20">·</span>
            <Link href="/risk-disclosure" className="hover:text-white/70 transition-colors">Risk Disclosure</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
