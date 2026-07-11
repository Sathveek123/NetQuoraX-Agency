"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ServerCrash } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#0B1020] text-white min-h-screen flex flex-col justify-between font-sans relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/10 blur-[100px] pointer-events-none" />

      {/* Header bar */}
      <header className="max-w-[1280px] mx-auto w-full px-6 py-6 flex items-center relative z-10">
        <Link href="/" className="flex items-center gap-2 select-none group cursor-none">
          <svg className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="font-display font-black text-[18px] tracking-tight text-white group-hover:text-primary transition-colors">
            Netquora<span className="text-primary">X</span>
          </span>
        </Link>
      </header>

      {/* Main body */}
      <main className="max-w-[1280px] mx-auto px-6 py-12 flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7C3AED] mb-8"
        >
          <ServerCrash size={36} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-[44px] md:text-[64px] font-extrabold leading-none tracking-tight mb-4"
        >
          404 <span className="text-primary font-mono text-[30px] block md:inline md:align-middle md:ml-3">ENDPOINT_NOT_FOUND</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-[16px] md:text-[18px] max-w-lg mx-auto mb-10 leading-relaxed font-mono"
        >
          The requested routing path could not be resolved. Our pipeline is unable to sync with this endpoint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:brightness-110 transition-all select-none cursor-none"
          >
            <ArrowLeft size={16} />
            Return to Dashboard
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all select-none cursor-none"
          >
            Browse Services
          </Link>
        </motion.div>
      </main>

      {/* Footer bar */}
      <footer className="max-w-[1280px] mx-auto w-full px-6 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono relative z-10">
        <span>© {new Date().getFullYear()} NetquoraX. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-white transition-colors cursor-none">Support System</Link>
          <span>•</span>
          <Link href="/pricing" className="hover:text-white transition-colors cursor-none">Pricing Index</Link>
        </div>
      </footer>
    </div>
  );
}
