"use client";

import { useEffect, useRef } from "react";

/**
 * useParallax — attaches a scroll listener that shifts an element's
 * translateY by `factor * scrollY` so sections feel layered.
 *
 * @param {number} factor  Speed multiplier (e.g. 0.25 = 25% of scroll)
 * @param {string} [axis]  "Y" (default) or "X"
 * @returns React ref to attach to the element
 */
export function useParallax(factor = 0.05, axis = "Y") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const offset = window.scrollY * factor;
          el.style.transform =
            axis === "X"
              ? `translateX(${offset}px)`
              : `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor, axis]);

  return ref;
}

/**
 * ParallaxSection — wraps a <section> and applies a layered
 * translate based on how far the user has scrolled past it.
 * Uses IntersectionObserver to calculate offset relative to the element.
 *
 * Props:
 *  - children
 *  - factor     {number}  0.1 – 0.4 recommended
 *  - className  {string}  additional classes
 *  - style      {object}  additional styles
 *  - id         {string}
 */
export default function ParallaxSection({
  children,
  factor = 0.18,
  className = "",
  style = {},
  id,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const viewH = window.innerHeight;
          const sectionMid = rect.top + rect.height / 2;
          const viewMid = viewH / 2;
          const progress = Math.max(-1, Math.min(1, (viewMid - sectionMid) / viewMid));
          const delta = progress * viewH * factor * 0.35;

          el.style.setProperty("--parallax-shift", `${delta}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor]);

  return (
    <section
      ref={ref}
      id={id}
      className={`parallax-section ${className}`}
      style={{ ...style, "--parallax-shift": "0px" }}
      {...rest}
    >
      {children}
    </section>
  );
}
