"use client";

import React from "react";

interface MarqueeProps {
  /** Items to display. The component duplicates them automatically for seamless looping. */
  items: React.ReactNode[];
  /** If true, scrolls right instead of left. Default: false */
  reverse?: boolean;
  /** Additional class for the outer wrapper */
  className?: string;
  /** Additional class for the secondary (hidden on mobile) row wrapper */
  secondary?: boolean;
}

/**
 * Pure CSS marquee — no JS animation, runs fully on the compositor thread.
 * Duplicates `items` internally so the loop is seamless at -50% translateX.
 */
export default function Marquee({ items, reverse = false, className = "", secondary = false }: MarqueeProps) {
  const trackClass = [
    "marquee-track",
    reverse ? "marquee-track--reverse" : "",
  ].filter(Boolean).join(" ");

  const wrapClass = [
    "marquee-outer",
    secondary ? "marquee-row--secondary mt-6" : "",
    className,
  ].filter(Boolean).join(" ");

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={wrapClass} aria-hidden="true">
      <div className={trackClass}>
        {doubled.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
