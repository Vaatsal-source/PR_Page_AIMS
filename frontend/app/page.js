"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ISROAndSIH from "@/components/ISRO&SIH";
import SIHFinalsAndGenAI from "@/components/SIHfinals&GenAI";
import Tier1Fests from "@/components/Tier1Fests";
import ResearchAndOpenSource from "@/components/Research&OpenSource";
import ExtractedRecords from "@/components/ExtractedRecords";
import Logo from "@/components/LogoAIMS/Logo";
import ParallaxSection from "@/components/ParallaxSection";
import CascadeReveal from "@/components/CascadeReveal";

// Load Three.js particle background only on client (no SSR)
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  const [gridEnabled, setGridEnabled] = useState(true);

  return (
    <main>
      {/* 3D Particle background — fixed, behind everything */}
      <ParticleBackground />

      {gridEnabled && <div className="bg-grid-overlay" />}

      {/* Navigation Bar */}
      <nav className="navbar navbar-enter">
        <div className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Logo height={32} />
        </div>
        <div className="nav-links">
          <a href="#hackathons"    className="nav-link">Hackathons</a>
          <a href="#fest-victories" className="nav-link">Fest Victories</a>
          <a href="#research"      className="nav-link">Research &amp; OS</a>
          <a href="#records"       className="nav-link">Extracted Records</a>
        </div>
      </nav>

      <div className="main-layout">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── ISRO & SIH ───────────────────────────────────────────────── */}
        <ParallaxSection id="hackathons" factor={0.12}>
          <CascadeReveal staggerMs={130}>
            <ISROAndSIH />
          </CascadeReveal>
        </ParallaxSection>

        {/* ── SIH Finalists & GenAI Exchange ───────────────────────────── */}
        <ParallaxSection factor={0.15}>
          <CascadeReveal staggerMs={110}>
            <SIHFinalsAndGenAI />
          </CascadeReveal>
        </ParallaxSection>

        {/* ── Tier-1 Fest Victories ─────────────────────────────────────── */}
        <ParallaxSection id="fest-victories" factor={0.10}>
          <CascadeReveal staggerMs={120}>
            <Tier1Fests />
          </CascadeReveal>
        </ParallaxSection>

        {/* ── Research Publications ─────────────────────────────────────── */}
        <ParallaxSection id="research" factor={0.13}>
          <CascadeReveal staggerMs={100}>
            <ResearchAndOpenSource />
          </CascadeReveal>
        </ParallaxSection>

        {/* ── Extracted Records ─────────────────────────────────────────── */}
        <ParallaxSection id="records" factor={0.08}>
          <CascadeReveal staggerMs={90}>
            <ExtractedRecords />
          </CascadeReveal>
        </ParallaxSection>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <footer className="main-footer hero-enter-5">
          <div className="footer-left">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <Logo height={32} />
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              © 2026 Delhi Technological University. All rights reserved.
            </div>
          </div>
          <div className="footer-right" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer"
               style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 127.14 96.36">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2.07a75.18,75.18,0,0,0,93.59,0c.82.73,1.68,1.42,2.58,2.07a68.43,68.43,0,0,1-10.5,5A77.7,77.7,0,0,0,123.07,96.36,105.73,105.73,0,0,0,154,77.53C157.06,54.65,151.54,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.88,46,53.88,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.12,46,96.12,53,91,65.69,84.69,65.69Z"/>
              </svg>
              Discord
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
