"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Mail, Phone, Calendar, CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleBlur = (name: string, value: string) => {
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <Navbar />
        <main className="max-w-[1280px] mx-auto px-6">
          <section className="pt-[140px] pb-16 lg:pb-24 border-b border-slate-200/60">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-600">Contact</span>
            </div>
          </section>

          <section className="py-24 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[36px] md:text-[48px] font-extrabold text-[#0F172A]"
            >
              Message Sent!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-[18px] text-slate-600 max-w-lg"
            >
              We'll get back to you within 24 hours. In the meantime, feel free to explore our work or services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <Link
                href="/portfolio"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[14px]"
              >
                View Portfolio
              </Link>
              <Link
                href="/services"
                className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-full hover:bg-slate-50 transition-colors text-[14px]"
              >
                Our Services
              </Link>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
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
            <span className="text-slate-600">Contact</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
            >
              Let's Talk About What You're Building
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[18px] md:text-[20px] text-slate-600 max-w-2xl leading-relaxed"
            >
              Fill out the form or book a call directly — whichever's easier.
            </motion.p>
          </div>
        </section>

        {/* SPLIT SCREEN: FORM + ALTERNATIVES */}
        <section className="py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-all outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-all outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Company (Optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Company <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Website</option>
                    <option value="app">Web App / SaaS</option>
                    <option value="automation">AI Automation</option>
                    <option value="trading">Trading System</option>
                    <option value="marketing">Marketing / Ads</option>
                    <option value="other">Not Sure Yet</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Budget Range <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                    <option value="250k-500k">₹2,50,000 - ₹5,00,000</option>
                    <option value="500k+">₹5,00,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-all outline-none focus:ring-2 resize-none ${
                      errors.message
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                    placeholder="Tell us about your project or challenge..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold px-6 py-4 rounded-xl hover:bg-primary/95 shadow-lg shadow-primary/10 transition-colors text-[15px] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* RIGHT: ALTERNATIVE CONTACT + BOOKING */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Prefer to talk directly */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="font-display text-[22px] font-bold text-[#0F172A] mb-2">
                  Prefer to talk directly?
                </h3>
                <p className="text-[14px] text-slate-500 mb-6">
                  Skip the form and book a 15-minute strategy call to discuss your project.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0F172A] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#0F172A]/90 transition-colors text-[14px]"
                >
                  <Calendar size={16} />
                  Book Strategy Call
                </a>
              </div>

              {/* Direct Contact Info */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="font-display text-[22px] font-bold text-[#0F172A] mb-4">
                  Get in touch directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:netquorax@gmail.com"
                    className="flex items-center gap-3 text-[15px] text-slate-600 hover:text-primary transition-colors"
                  >
                    <Mail size={20} className="text-slate-400" />
                    netquorax@gmail.com
                  </a>
                  <div className="flex flex-col gap-3 pt-2 text-[14px] text-slate-600 border-t border-slate-100">
                    <div>
                      <span className="block font-bold text-slate-700">Sathveek (Developer — All Services)</span>
                      <a href="tel:+919441782469" className="hover:text-primary transition-colors">+91 9441782469</a>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-700">Moin (Digital Marketer — Sales & Revenues)</span>
                      <a href="tel:+918779365117" className="hover:text-primary transition-colors">+91 8779365117</a>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-700">Instagram</span>
                      <a
                        href="https://www.instagram.com/netquorax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        @netquorax
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[13px] text-slate-500 font-medium">
                    ⚡ Usually responds within a few hours
                  </p>
                </div>
              </div>

              {/* Mini FAQ */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="font-display text-[18px] font-bold text-[#0F172A] mb-4">
                  Getting Started
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0F172A] mb-1">
                      What happens after I submit?
                    </h4>
                    <p className="text-[13px] text-slate-500">
                      We'll review your message and respond within 24 hours with next steps or a booking link.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0F172A] mb-1">
                      Is there a commitment?
                    </h4>
                    <p className="text-[13px] text-slate-500">
                      No. The initial call is free — we discuss your needs and decide if we're a good fit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM NOTE */}
        <section className="py-8 text-center border-t border-slate-200/60 mb-12">
          <p className="text-[13px] text-slate-400">
            No spam, no aggressive sales calls — just a conversation about what you need.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
