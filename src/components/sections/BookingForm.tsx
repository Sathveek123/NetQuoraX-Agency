"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, Mail, Clock, Shield, ChevronDown } from "lucide-react";

const SERVICES = [
  "Website Design & Development",
  "Mobile App Development",
  "AI & Automation Systems",
  "Trading Bot / Pine Script",
  "Digital Marketing & Paid Ads",
  "E-Commerce Store",
  "Other / Not Sure Yet",
];

const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss",
];

const BENEFITS = [
  { icon: Clock,       text: "Free 30-min discovery call — no pressure"     },
  { icon: CheckCircle2,text: "Fixed quote delivered within 24 hours"         },
  { icon: Shield,      text: "100% confidential. We never share your data."  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const EMPTY: FormState = {
  name: "", email: "", phone: "", company: "",
  service: "", budget: "", message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[rgba(11,16,32,0.1)] bg-white " +
  "text-base text-[#0B1020] placeholder:text-[#0B1020]/35 " +
  "focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]/60 " +
  "transition-all duration-200";

const selectClass =
  "w-full px-4 py-3 rounded-xl border border-[rgba(11,16,32,0.1)] bg-white " +
  "text-base text-[#0B1020] appearance-none " +
  "focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]/60 " +
  "transition-all duration-200 cursor-pointer";

const headerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function BookingForm() {
  const [form, setForm]       = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<Partial<FormState>>({});

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim())    errs.name    = "Name is required";
    if (!form.email.trim())   errs.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.service)        errs.service = "Please select a service";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate network (real: POST to API/Notion/Airtable/email)
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="book"
      className="py-16 lg:py-[120px] bg-[#F8FAFC]"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: INFO COLUMN ── */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
          >
            <motion.p variants={headerItem}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              Book a Strategy Call
            </motion.p>
            <motion.h2 variants={headerItem} id="booking-heading"
              className="mt-3 font-display text-[32px] lg:text-[42px] font-extrabold tracking-tight text-[#0B1020] leading-[1.1]">
              Let&rsquo;s Talk About Your Project
            </motion.h2>
            <motion.p variants={headerItem}
              className="mt-4 text-[16px] text-[#0B1020]/60 leading-[1.65]">
              Tell us what you&rsquo;re building. We&rsquo;ll come back with a clear plan and a fixed quote — within 24 hours, no gatekeeping.
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={headerItem} className="mt-8 space-y-4">
              {BENEFITS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/08 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(37,99,235,0.08)" }}>
                    <Icon size={16} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <span className="text-[15px] text-[#0B1020]/75">{text}</span>
                </li>
              ))}
            </motion.ul>

            {/* Quick contact */}
            <motion.div variants={headerItem} className="mt-10 space-y-4">
              <a href="mailto:netquorax@gmail.com"
                className="flex items-center gap-3 text-[14px] text-[#0B1020]/60 hover:text-[#2563EB] transition-colors group">
                <Mail size={16} aria-hidden="true" className="group-hover:text-[#2563EB]" />
                netquorax@gmail.com
              </a>
              <div>
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Sathveek (Developer)</span>
                <a href="tel:+919441782469"
                  className="flex items-center gap-3 text-[14px] text-[#0B1020]/60 hover:text-[#2563EB] transition-colors group mt-0.5">
                  <Phone size={16} aria-hidden="true" className="group-hover:text-[#2563EB]" />
                  +91 9441782469
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Moin (Sales & Revenues)</span>
                <a href="tel:+18779365117"
                  className="flex items-center gap-3 text-[14px] text-[#0B1020]/60 hover:text-[#2563EB] transition-colors group mt-0.5">
                  <Phone size={16} aria-hidden="true" className="group-hover:text-[#2563EB]" />
                  +1 (877) 936-5117
                </a>
              </div>
            </motion.div>

            {/* Avatar trust cluster */}
            <motion.div variants={headerItem} className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/images/avatar-rahul.png",
                  "/images/avatar-james-h.png",
                  "/images/avatar-fatima.png",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0B1020]">Our team is ready</p>
                <p className="text-[12px] text-[#0B1020]/50">Avg. response: under 2 hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FORM CARD ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div
              className="bg-white rounded-[28px] p-8 lg:p-10"
              style={{
                border: "1px solid rgba(11,16,32,0.07)",
                boxShadow: "0 8px 40px rgba(11,16,32,0.08)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                    className="flex flex-col items-center text-center py-8 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center"
                    >
                      <CheckCircle2 size={32} className="text-[#10B981]" />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-[24px] font-extrabold text-[#0B1020]">
                        We got it! 🎉
                      </h3>
                      <p className="mt-2 text-[15px] text-[#0B1020]/60 max-w-[340px] leading-relaxed">
                        You&rsquo;ll hear from us within 24 hours with a clear plan and next steps.
                        Check your inbox — we don&rsquo;t do generic templates.
                      </p>
                    </div>
                    <button
                      onClick={() => { setForm(EMPTY); setSubmitted(false); }}
                      className="mt-2 text-[13px] text-[#2563EB] font-semibold hover:underline cursor-pointer"
                    >
                      Submit another enquiry →
                    </button>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-name">
                          Full Name <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          id="b-name"
                          type="text"
                          placeholder="Rahul Verma"
                          value={form.name}
                          onChange={set("name")}
                          className={inputClass}
                          style={errors.name ? { borderColor: "#EF4444" } : {}}
                        />
                        {errors.name && <p className="text-[11px] text-[#EF4444] mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-email">
                          Email Address <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          id="b-email"
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={set("email")}
                          className={inputClass}
                          style={errors.email ? { borderColor: "#EF4444" } : {}}
                        />
                        {errors.email && <p className="text-[11px] text-[#EF4444] mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-phone">
                          Phone Number
                        </label>
                        <input
                          id="b-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-company">
                          Company / Brand
                        </label>
                        <input
                          id="b-company"
                          type="text"
                          placeholder="Your company name"
                          value={form.company}
                          onChange={set("company")}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 3: Service */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-service">
                        What do you need? <span className="text-[#EF4444]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="b-service"
                          value={form.service}
                          onChange={set("service")}
                          className={selectClass}
                          style={errors.service ? { borderColor: "#EF4444" } : {}}
                        >
                          <option value="" disabled>Select a service…</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B1020]/40 pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>
                      {errors.service && <p className="text-[11px] text-[#EF4444] mt-1">{errors.service}</p>}
                    </div>

                    {/* Row 4: Budget */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-budget">
                        Approximate Budget
                      </label>
                      <div className="relative">
                        <select
                          id="b-budget"
                          value={form.budget}
                          onChange={set("budget")}
                          className={selectClass}
                        >
                          <option value="" disabled>Select a range…</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B1020]/40 pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0B1020] mb-1.5" htmlFor="b-message">
                        Tell us about your project
                      </label>
                      <textarea
                        id="b-message"
                        rows={4}
                        placeholder="Describe what you're building, what problem you're solving, or what you need help with…"
                        value={form.message}
                        onChange={set("message")}
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full py-4 px-6 rounded-2xl bg-[#2563EB] text-white text-[15px] font-semibold flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 transition-all duration-300"
                      style={{ boxShadow: "0 8px 24px rgba(37,99,235,0.25)" }}
                    >
                      {loading ? (
                        <>
                          <motion.span
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending…
                        </>
                      ) : (
                        "Book My Free Strategy Call →"
                      )}
                    </motion.button>

                    {/* Privacy note */}
                    <p className="text-center text-[12px] text-[#0B1020]/35 flex items-center justify-center gap-1.5">
                      <Shield size={12} aria-hidden="true" />
                      We don&rsquo;t share your information. Ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
