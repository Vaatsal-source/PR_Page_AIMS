import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import ISROAndSIH from "@/components/ISRO&SIH";
import SIHFinalsAndGenAI from "@/components/SIHfinals&GenAI";
import Tier1Fests from "@/components/Tier1Fests";
import ResearchAndOpenSource from "@/components/Research&Publications";
import ExtractedRecords from "@/components/Projects";
import Logo from "@/components/LogoAIMS/Logo";
import ParallaxSection from "@/components/ParallaxSection";
import CascadeReveal from "@/components/CascadeReveal";
import OpenSource from "@/components/OpenSource";
import FontScaler from "@/components/FontScaler";
import CurtainLoader from "@/components/CurtainLoader";
import KaggleHacks from "@/components/KaggleHacks";

// Keep this page a server component to avoid unnecessary hydration mismatch.
const gridEnabled = true;

export default function Home() {
  return (
    <main>
      <CurtainLoader />
      <FontScaler />
      {gridEnabled && <div className="bg-grid-overlay" />}

      <div className="main-layout">
        <HeroSection />

        <ParallaxSection id="events" factor={0.11}>
          <CascadeReveal staggerMs={0}>
            <Events />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="hackathons" factor={0.12}>
          <CascadeReveal staggerMs={0}>
            <ISROAndSIH />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="sih-genai" factor={0.1}>
          <CascadeReveal staggerMs={0}>
            <SIHFinalsAndGenAI />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="fest-victories" factor={0.1}>
          <CascadeReveal staggerMs={0}>
            <Tier1Fests />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="research" factor={0.1}>
          <CascadeReveal staggerMs={0}>
            <ResearchAndOpenSource />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="opensource" factor={0.1}>
          <CascadeReveal staggerMs={0}>
            <OpenSource />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="research" factor={0.1}>
          <CascadeReveal staggerMs={0}>
            <KaggleHacks />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="records" factor={0.08}>
          <CascadeReveal staggerMs={0}>
            <ExtractedRecords />
          </CascadeReveal>
        </ParallaxSection>
        <footer id="contact" className="main-footer">
          <div className="footer-cta-band">
            <div>
              <div className="eyebrow light"></div>
              <div className="footer-cta-title margin">Ready to build?</div>
            </div>
          </div>

          <div className="footer-columns-grid">
            <div className="footer-brand-col">
              {/* FULL WIDTH ROW: Brand on the LEFT, Social Logos on the RIGHT */}
              <div className="footer-brand-row">
                <div className="brand-center footer-brand">
                  <Logo height={32} color="#ffffff" bgColor="#0f2f63" />
                  <span>AIMS DTU</span>
                </div>

                <div className="footer-brand-social" aria-label="Social links">
                  <a
                    href="https://www.instagram.com/aimsdtu/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/kuMV32y6P"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.373-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/aims-dtu?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="footer-blurb">
                A student-led AI &amp; ML society at Delhi Technological
                University where focused research meets championship
                engineering.
              </p>

              <address className="footer-address">
                <a href="mailto:aims@dtu.ac.in">aims@dtu.ac.in</a>
                <a href="#contact">8800798070</a>
              </address>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
