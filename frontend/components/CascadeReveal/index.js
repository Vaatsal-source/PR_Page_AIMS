"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useCascadeReveal — attaches an IntersectionObserver to a container
 * element and adds the class "cascade-visible" to each direct child
 * sequentially with a staggered delay.
 *
 * @param {object} options
 * @param {number}  options.staggerMs   Delay between each child reveal (ms)
 * @param {number}  options.threshold   IO threshold 0-1
 * @param {string}  options.rootMargin  IO root margin
 */
export function useCascadeReveal({
  staggerMs   = 0,
  threshold   = 0,
  rootMargin  = "0px 0px 0px 0px",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);
    // Prepare reveal animation only after hydration, but keep server-rendered content visible.
    children.forEach((child) => {
      child.classList.add("cascade-child", "cascade-hidden");
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            const delay = i * staggerMs;
            if (delay > 0) {
              setTimeout(() => {
                child.classList.remove("cascade-hidden");
                child.classList.add("cascade-visible");
              }, delay);
            } else {
              child.classList.remove("cascade-hidden");
              child.classList.add("cascade-visible");
            }
          });
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(container);
    return () => io.disconnect();
  }, [staggerMs, threshold, rootMargin]);

  return ref;
}

/**
 * CascadeReveal — wraps children in a div and reveals them
 * with a staggered cascade animation on scroll-into-view.
 *
 * Props:
 *  - children
 *  - staggerMs  {number}  ms between each child reveal
 *  - className  {string}
 *  - style      {object}
 *  - as         {string}  HTML tag to render ("div" default)
 */
export default function CascadeReveal({
  children,
  staggerMs  = 120,
  className  = "",
  style      = {},
  as: Tag    = "div",
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const ref = useCascadeReveal({ staggerMs });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`cascade-container ${isHydrated ? "cascade-active" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}