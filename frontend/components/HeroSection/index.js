"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/LogoAIMS/Logo";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 300);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className={`hero-section aims-hero ${loaded ? "hero-loaded" : "hero-loading"}`}>
      {/* Top Navigation Bar */}
      <header className="hero-topbar">
        <nav className="hero-topbar-left">
          <a href="#hackathons">Programs & Achievements</a>
          <a href="#events">Showcase & Events</a>
          <a href="#records">Projects</a>
          <a href="#research">Research</a>
          <a href="#opensource">Open Source</a>
          <a href="#researchKaggle">Kaggle Hacks</a>
        </nav>

        <div className="hero-topbar-center">
          <span className="hero-logo-text">
            <Logo height={35} color="#ffffff" bgColor="#0f2f63" />
          </span>
        </div>
      </header>

      {/* Background Image / Overlay */}
      <div className="hero-bg-plate">
        <div className="hero-bg-inner">
        </div>
        <div className="hero-bg-overlay" />
      </div>

      {/* Hero Main Headline */}
      <div className="hero-title-block">
        <h1 className="hero-main-title">BUILD COMPETE WIN</h1>
      </div>

      {/* Bottom Content Row */}
      <div className="hero-bottom-row">
        <div className="hero-tagline-container">
          <p className="hero-tagline hero-tagline-stacked">
            <span>SHOW UP,</span>
            <span>SHIP CODE</span>
          </p>
        </div>

        {/* Bottom-Right Glass Stat Card */}
        <article className="membership-card hero-stat-card">
          <div className="stat-card-left">
            <div className="membership-val">4.5K+</div>
            <div className="avatar-meta-row">
              <div className="avatar-circles">
                <span className="avatar-circle"></span>
                <span className="avatar-circle"></span>
                <span className="avatar-circle"></span>
              </div>
              <span className="membership-caption">Hackathon Participants</span>
            </div>
          </div>
          <div/>
        </article>
      </div>
    </section>
  );
}