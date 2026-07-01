"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ── Section imports ──────────────────────────────────────────────────────────
import SplashScreen    from "@/components/splash/SplashScreen";
import Magnetic        from "@/components/ui/Magnetic";
import Navbar          from "@/components/sections/Navbar";
import Hero            from "@/components/sections/Hero";
import TrustedBy       from "@/components/sections/TrustedBy";
import Services        from "@/components/sections/Services";
import WhyUs           from "@/components/sections/WhyUs";
import Industries      from "@/components/sections/Industries";
import AutomationFlow  from "@/components/sections/AutomationFlow";
import TradingShowcase from "@/components/sections/TradingShowcase";
import Portfolio       from "@/components/sections/Portfolio";
import Process         from "@/components/sections/Process";
import Testimonials    from "@/components/sections/Testimonials";
import Stats           from "@/components/sections/Stats";
import BookingForm      from "@/components/sections/BookingForm";
import FAQ             from "@/components/sections/FAQ";
import FinalCTA        from "@/components/sections/FinalCTA";
import Footer          from "@/components/sections/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  // Skip splash on repeat visits within the same session
  useEffect(() => {
    const isVisited = sessionStorage.getItem("nqx_visited") === "true";
    if (isVisited) {
      setShowSplash(false);
      setHeroVisible(true);
    }
  }, []);

  const handleSplashComplete = () => setHeroVisible(true);
  const handleSplashUnmount  = () => setShowSplash(false);

  return (
    <>
      {/* Splash */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} onUnmount={handleSplashUnmount} />
      )}

      {/* ── PAGE SECTIONS ── */}
      {heroVisible && <Navbar />}
      {heroVisible && <Hero />}

      <TrustedBy />
      <Services />
      <WhyUs />
      <Industries />
      <AutomationFlow />
      <TradingShowcase />
      <Stats />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <FinalCTA />
      <Footer />
    </>
  );
}
