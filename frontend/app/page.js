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
import LenisScroller from "@/components/LenisScroller";
import CurtainLoader from "@/components/CurtainLoader";

// Keep this page a server component to avoid unnecessary hydration mismatch.
const gridEnabled = true;

export default function Home() {
  return (
    <main>
      <CurtainLoader />
      <FontScaler />
      <LenisScroller />
      {gridEnabled && <div className="bg-grid-overlay" />}

      <div className="main-layout">
        <HeroSection />

        <ParallaxSection id="events" factor={0.11}>
          <CascadeReveal staggerMs={110}>
            <Events />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="hackathons" factor={0.12}>
          <CascadeReveal staggerMs={130}>
            <ISROAndSIH />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="sih-genai" factor={0.15}>
          <CascadeReveal staggerMs={110}>
            <SIHFinalsAndGenAI />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="fest-victories" factor={0.1}>
          <CascadeReveal staggerMs={120}>
            <Tier1Fests />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="research" factor={0.13}>
          <CascadeReveal staggerMs={100}>
            <ResearchAndOpenSource />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="opensource" factor={0.1}>
          <CascadeReveal staggerMs={120}>
            <OpenSource />
          </CascadeReveal>
        </ParallaxSection>

        <ParallaxSection id="records" factor={0.08}>
          <CascadeReveal staggerMs={90}>
            <ExtractedRecords />
          </CascadeReveal>
        </ParallaxSection>

        <footer id="contact" className="main-footer hero-enter-5">
          <div className="footer-cta-band">
            <div>
              <div className="eyebrow light">
                <span className="eyebrow-dot"></span>
                <span>Get started</span>
              </div>
              <div className="footer-cta-title">Ready to build?</div>
            </div>
          </div>

          <div className="footer-columns-grid">
            <div className="footer-brand-col">
              <div className="brand-center footer-brand">
                <Logo height={32} color="#ffffff" bgColor="#0f2f63" />
                <span>AIMS DTU</span>
              </div>
              <p className="footer-blurb">
                A student-led AI &amp; ML society at Delhi Technological University where focused research meets championship engineering.
              </p>
              <address className="footer-address">
                <a href="mailto:aims@dtu.ac.in">aims@dtu.ac.in</a>
                <a href="#contact">Raj Aryan -9971330423</a>
                <span className="muted-addr">AB3 - 412, DTU</span>
              </address>
            </div>

            
          </div>

          <div className="footer-bottom-bar">
            
            <nav className="footer-social" aria-label="Social media">
              <a href="#https://www.instagram.com/aimsdtu/?hl=en">Instagram</a>
              <a href="#https://discord.gg/kuMV32y6P">Discord</a>
              <a href="#https://www.linkedin.com/company/aims-dtu?originalSubdomain=in">LinkedIn</a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
