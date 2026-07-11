"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (!menuRef.current) return;
      const focusableElements = Array.from(
        menuRef.current.querySelectorAll(focusableElementsString)
      ) as HTMLElement[];

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // iOS-safe scroll lock — prevents background shift under overlay
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // ESC key close listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleFocusTrap);
    window.addEventListener("keydown", handleKeyDown);

    // Initial focus on open
    const focusTimeout = setTimeout(() => {
      if (menuRef.current) {
        const firstFocus = menuRef.current.querySelector(focusableElementsString) as HTMLElement;
        firstFocus?.focus();
      }
    }, 150);

    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, parseInt(y) * -1);
      window.removeEventListener("keydown", handleFocusTrap);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimeout);
    };
  }, [isOpen, onClose]);

  const containerVariants = {
    hidden: {
      clipPath: "circle(0% at 92% 44px)",
      transition: {
        duration: 0.35,
        ease: [0.76, 0, 0.24, 1] as const
      }
    },
    visible: {
      clipPath: "circle(150% at 92% 44px)",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const
      }
    }
  };

  const navListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: customDelay, ease: "easeOut" as const }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="fixed inset-0 z-[99] bg-[#0B1020] text-white flex flex-col justify-center px-8 md:px-16 lg:hidden"
        >
          {/* Large Vertical Navigation list */}
          <div className="max-w-md w-full mx-auto flex flex-col">
            <motion.nav
              variants={navListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {links.map((link) => (
                <MobileNavLink
                  key={link.name}
                  href={link.href}
                  label={link.name}
                  onClick={onClose}
                />
              ))}
            </motion.nav>

            {/* Separator Divider */}
            <motion.div
              custom={0.65}
              variants={itemFadeIn}
              initial="hidden"
              animate="visible"
              className="border-t border-white/10 my-6"
            />

            {/* Inverted White CTA Button */}
            <motion.div
              custom={0.7}
              variants={itemFadeIn}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block text-center bg-white text-[#0B1020] font-bold py-3.5 px-6 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-none"
              >
                Book a Strategy Call
              </Link>
            </motion.div>

            {/* Social Links Row & Contact Details */}
            <motion.div
              custom={0.8}
              variants={itemFadeIn}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white/50 text-xs font-semibold uppercase tracking-wider"
            >
              <a
                href="mailto:netquorax@gmail.com"
                className="hover:text-white transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1 cursor-none"
              >
                netquorax@gmail.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/netquorax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1 cursor-none"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/netquorax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1 cursor-none"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Inner Mobile Nav Link helper supporting hover Arrow slides
function MobileNavLink({
  href,
  label,
  onClick
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
      }}
      className="relative flex items-center py-1.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic Arrow */}
      <div className="w-5 overflow-hidden flex items-center justify-start">
        <motion.span
          animate={{
            x: hovered ? 0 : -14,
            opacity: hovered ? 1 : 0
          }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
          className="text-primary font-bold text-xl select-none"
        >
          &rarr;
        </motion.span>
      </div>

      <Link href={href} passHref legacyBehavior>
        <motion.a
          onClick={onClick}
          animate={{
            x: hovered ? 6 : 0,
            color: hovered ? "#2563EB" : "#FFFFFF"
          }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
          className="font-display text-3xl font-extrabold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 cursor-none"
        >
          {label}
        </motion.a>
      </Link>
    </motion.div>
  );
}
