"use client";

import { useEffect } from "react";

export default function FontScaler() {
  useEffect(() => {
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const setFontSize = () => {
      const width = window.innerWidth;
      const target = 16 * (width / 1440);
      document.documentElement.style.fontSize = `${clamp(target, 14, 20)}px`;
    };

    setFontSize();
    window.addEventListener("resize", setFontSize);
    return () => window.removeEventListener("resize", setFontSize);
  }, []);

  return null;
}
