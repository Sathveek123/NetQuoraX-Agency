"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import MagneticWrap from "@/components/ui/MagneticWrap";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import MobileMenu from "@/components/ui/MobileMenu";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Our Story", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [logoHovered, setLogoHovered] = useState(false);

  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  // Handle scroll trigger solidification and hide-on-scroll-down
  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Solidify threshold
    if (latest >= 80) {
      setSolid(true);
    } else {
      setSolid(false);
    }

    // 2. Hide / Show threshold
    const prev = lastScrollY.current;
    if (latest > prev && latest > 400) {
      // Scrolling down past 400px -> hide navbar
      setVisible(false);
      setIsMenuOpen(false); // Close mobile menu if user scrolls down
    } else if (latest < prev) {
      // Scrolling up -> show immediately
      setVisible(true);
    }
    lastScrollY.current = latest;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scrolls smoothly to top on logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navbar dynamic styles
  const navStyles = solid
    ? {
        backgroundColor: "rgba(248, 250, 252, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(229, 231, 235, 0.8)",
        boxShadow: "0 4px 24px rgba(11, 16, 32, 0.04)",
        height: "72px"
      }
    : {
        backgroundColor: "rgba(248, 250, 252, 0)",
        backdropFilter: "blur(0px)",
        borderBottom: "1px solid rgba(229, 231, 235, 0)",
        boxShadow: "0 4px 24px rgba(11, 16, 32, 0)",
        height: "88px"
      };

  return (
    <>
      {/* Accessibility Skip-To-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary font-semibold text-sm transition-all cursor-none"
      >
        Skip to content
      </a>

      {/* Main Navbar container */}
      <motion.nav
        id="navbar"
        animate={visible ? "visible" : "hidden"}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={navStyles}
        className="fixed top-0 inset-x-0 z-[100] transition-all duration-300 flex items-center"
      >
         <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* ZONE 1 - LOGO */}
          <Link
            href="/"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 cursor-none"
          >
            <motion.span
              animate={{ rotate: logoHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M18 46V18h6l16 20V18h6v28h-6L24 26v20h-6z"
                  fill="#FFFFFF"
                />
              </svg>
            </motion.span>
            <span className="font-extrabold text-[20px] tracking-tight text-ink">
              Netquora<span className="grad-text">X</span>
            </span>
          </Link>

          {/* ZONE 2 - NAV LINKS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </div>

          {/* ZONE 3 - CTA / HAMBURGER */}
          <div className="flex items-center gap-4">
            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <MagneticWrap>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/10 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-none hover:scale-[1.03] hover:brightness-[1.1]"
                >
                  Book a Strategy Call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </MagneticWrap>
            </div>

            {/* Mobile Hamburger Icon (<1024px) */}
            <div className="lg:hidden flex items-center z-[101]">
              <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} colorClass="bg-ink" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} links={navLinks} />
    </>
  );
}

// Inner Nav Link component implementing Direction-Aware Underlines
function NavLink({ name, href }: { name: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState<"left" | "right">("left");

  const handleHoverStart = () => {
    setOrigin("left");
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setOrigin("right");
    setIsHovered(false);
  };

  return (
    <div
      className="relative py-1 flex items-center"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <Link
        href={href}
        className="text-[15px] font-medium text-ink/80 hover:text-ink transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 cursor-none"
      >
        {name}
      </Link>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] as const }}
        style={{ originX: origin === "left" ? 0 : 1 }}
        className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
}
