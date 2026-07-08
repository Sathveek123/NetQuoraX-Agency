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
  { Icon: Globe,         href: "https://linkedin.com", label: "LinkedIn"  },
  { Icon: Mail,          href: "mailto:netquorax@gmail.com", label: "Email" },
];

const LINKS = [
  {
    heading: "Services",
    items: [
      { label: "Website Development", href: "/services" },
      { label: "AI & Automation",     href: "/services" },
      { label: "Trading Systems",     href: "/services" },
      { label: "Digital Marketing",   href: "/services" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Startups",   href: "/solutions" },
      { label: "Healthcare", href: "/solutions" },
      { label: "Finance",    href: "/solutions" },
      { label: "Ecommerce",  href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Our Story",   href: "/about"     },
      { label: "Portfolio",   href: "/portfolio" },
      { label: "Pricing",     href: "/pricing"   },
      { label: "Contact Us",  href: "/contact"   },
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
                <span className="block font-bold text-white/80">Sathveek (Developer — All Services)</span>
                <a href="tel:+919441782469" className="hover:text-[#2563EB] transition-colors duration-200">+91 9441782469</a>
              </div>
              <div>
                <span className="block font-bold text-white/80">Moin (Digital Marketer — Sales & Revenues)</span>
                <a href="tel:+918779365117" className="hover:text-[#2563EB] transition-colors duration-200">+91 8779365117</a>
              </div>
              <div>
                <span className="block font-bold text-white/80">Email</span>
                <a href="mailto:netquorax@gmail.com" className="hover:text-[#2563EB] transition-colors duration-200">netquorax@gmail.com</a>
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
