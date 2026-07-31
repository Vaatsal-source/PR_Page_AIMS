"use client";

import { useEffect, useState } from "react";

export default function CurtainLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setVisible(false), 200);
    return () => window.clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const cleanupTimer = window.setTimeout(() => setMounted(false), 450);
      return () => window.clearTimeout(cleanupTimer);
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div className={`curtain-loader ${visible ? "curtain-active" : "curtain-hidden"}`}>
      <div className="curtain-panel left" />
      <div className="curtain-panel right" />
      <div className="curtain-brand">AIMS DTU</div>
    </div>
  );
}
