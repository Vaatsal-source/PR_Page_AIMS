"use client";

import { useEffect, useState } from "react";

function Clock() {
  const [timeStr, setTimeStr] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString("en-US", { hour12: false }) + " IST");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return "";
  return timeStr;
}

export default function Home() {
  const [gridEnabled, setGridEnabled] = useState(true);

  return (
    <main>
      {gridEnabled && <div className="bg-grid-overlay" />}

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <span>&gt;|&lt;</span>
          <span style={{ color: "var(--accent)" }}>AIMS DTU</span>
        </div>
        <div className="nav-links">
          <a href="#hackathons" className="nav-link">Hackathons</a>
          <a href="#fest-victories" className="nav-link">Fest Victories</a>
          <a href="#research" className="nav-link">Research &amp; OS</a>
          <span className="nav-link active" onClick={() => setGridEnabled(!gridEnabled)} style={{ cursor: "pointer" }}>
            GRID_{gridEnabled ? "ON" : "OFF"}
          </span>
        </div>
      </nav>

      <div className="main-layout">
        {/* Hero Section */}
        <section className="hero-section">
          <p className="hero-tag">Annual Achievement Report // 2025-2026</p>
          <h1 className="hero-main-title">THE MACHINE LEARNS.<br />THE SOCIETY SHIPS.</h1>
          <p className="showcase-desc" style={{ maxWidth: "800px", margin: "0 auto 3rem auto", fontSize: "1.2rem" }}>
            Delhi Technological University's flagship Artificial Intelligence and Machine Learning Society. 
            Redesigning the future of intelligent agents, computer vision, and national-scale software.
          </p>

          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-value">03+</span>
              <span className="stat-label">National Wins</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">20+</span>
              <span className="stat-label">Podium Finishes</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">05+</span>
              <span className="stat-label">A* Publications</span>
            </div>
          </div>
        </section>

        {/* Section 1: ISRO & SIH Hackathons */}
        <section id="hackathons" className="showcase-section">
          <div className="showcase-info">
            <span className="showcase-kicker">National Winner</span>
            <h2 className="showcase-title">ISRO &amp; Smart India Hackathons</h2>
            <p className="showcase-desc">
              AIMS DTU teams conquered India's most prestigious government hackathons, securing National Winner titles 
              by engineering deep-learning and hardware systems for space nowcasting and smart governance.
            </p>
            <div className="showcase-details">
              <div className="detail-item">
                <div className="detail-tag">ISRO Bharatiya Antariksh Hackathon (BAH) 2025</div>
                <div className="detail-text">
                  <strong>Team Rocket League</strong> (Kartik Aggarwal, Krish Bansal, Mayank Jangid, Kushal Khemka) — Developed "Chasing The Clouds: Diffusion Based Satellite Nowcasting using INSAT 3DR/3DS Data".
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">Smart India Hackathon (SIH) 2025 (National Winner)</div>
                <div className="detail-text">
                  <strong>Team ToinCoss</strong> (Aryan Sood, Aaarat Chadda, Aarushi Anand, Rudransh Singh Rathore, Shubhank Gupta, Vivaan Jain) — Built Anti Proxy, an ESP32 &amp; AI-driven smart classroom attendance system.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">NCIIPC AI Grand Challenge 2025 (National Winner)</div>
                <div className="detail-text">
                  <strong>PS-1</strong> (LLMs to Detect Vulnerability in Open-Source Software) — Cleared Stage 1 &amp; Stage 2 evaluations at IIT Delhi.
                </div>
              </div>
            </div>
          </div>

          {/* 2x2 Image Grid */}
          <div className="image-grid-2x2">
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: ISRO BAH Winner Ceremony ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Team ToinCoss SIH Presentation ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: NCIIPC Stage 2 IIT Delhi ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Google GenAI exchange top 10 ]</span>
            </div>
          </div>
        </section>

        {/* Section 2: SIH Finalists & GenAI exchange */}
        <section className="showcase-section" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
          {/* 2x2 Image Grid Left */}
          <div className="image-grid-2x2">
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Team Gradient Ascent ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Team ChocoRev Engine ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Team NeuralShural Counterfeit IC ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: TruthLens platform demo ]</span>
            </div>
          </div>

          <div className="showcase-info">
            <span className="showcase-kicker">High-Performance Engineering</span>
            <h2 className="showcase-title">SIH Finalists &amp; Google GenAI</h2>
            <p className="showcase-desc">
              Pioneering custom AI architectures, neural graphs, and computer vision algorithms in national finals.
            </p>
            <div className="showcase-details">
              <div className="detail-item">
                <div className="detail-tag">SIH Grand Finalist — Team Gradient Ascent</div>
                <div className="detail-text">Multimodal Audio Language Model using Mixture-of-Experts architecture.</div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">SIH Grand Finalist — Team ChocoRev</div>
                <div className="detail-text">GNN-driven multi-objective candidate-opportunity matching engine.</div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">SIH Grand Finalist — Team NeuralShural</div>
                <div className="detail-text">Multimodal AI system for counterfeit IC detection.</div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">Google GenAI Exchange 2025 (Top 10 in India)</div>
                <div className="detail-text">
                  <strong>Team Authenticoders</strong> — Built TruthLens (Multimodal AI platform to combat misinformation) out of 4,457+ prototypes and 278,000+ developers nationwide.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Tier-1 Tech Fests victories */}
        <section id="fest-victories" className="showcase-section">
          <div className="showcase-info">
            <span className="showcase-kicker">Intercollegiate Battles</span>
            <h2 className="showcase-title">Tier-1 Technical Fest Victories</h2>
            <p className="showcase-desc">
              Dominating podium finishes across BITS Apogee, Invictus, and IIT Bombay Techfest, challenging competitors in robotics, finance, climate tech, and secure agents.
            </p>
            <div className="showcase-details">
              <div className="detail-item">
                <div className="detail-tag">BITS Apogee 2026 Champion</div>
                <div className="detail-text">
                  First position wins in <strong>EightFold AI Hackathon</strong>, <strong>Silicon Chip Smackdown (AI Poker)</strong>, <strong>Product CaseComp</strong>, and <strong>ArmorIQ X OpenClaw Hackathon</strong>.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">Invictus 2026 Podium</div>
                <div className="detail-text">
                  First position wins in <strong>BITS CS Fundamentals</strong>, <strong>Guessapaloza</strong>, and podiums in <strong>HeistGPT UGV Vision</strong>, <strong>BioHackathon</strong>, and <strong>Micromouse Navigation</strong>.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">IIT Bombay Techfest 2025 Wins</div>
                <div className="detail-text">
                  First position in <strong>ZerveAI Health Insurance Datathon</strong>, <strong>National GeoAI Hackathon</strong>, and runner-ups in <strong>Packedge Motion Chair</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="image-grid-2x2">
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: BITS Apogee Trophy ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: Micromouse Robot in Maze ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: IIT Bombay Techfest Winner ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: HeistGPT Vision Simulation ]</span>
            </div>
          </div>
        </section>

        {/* Secondary Achievements Grid */}
        <section className="section-header-block">
          <span className="showcase-kicker">Extracted Records</span>
          <h2 className="section-header-title">Full Competition Breakdown</h2>
        </section>

        <div className="secondary-grid">
          <div className="premium-card">
            <div className="premium-card-tag">BITS Apogee 2026</div>
            <h3 className="premium-card-title">1st &amp; 2nd: Green Tag Climate Tech</h3>
            <p className="premium-card-meta">Agrim Gupta, Ritwik Jain et al.</p>
            <p className="premium-card-desc">Showcasing sustainability innovations, securing multiple top podium finishes.</p>
          </div>
          <div className="premium-card">
            <div className="premium-card-tag">BITS Apogee 2026</div>
            <h3 className="premium-card-title">2nd: Kriti Social Impact</h3>
            <p className="premium-card-meta">Ravish Kansal, Mrudduni J Modha, Parv Bansal, Sukriti Talwar</p>
            <p className="premium-card-desc">Designed assistive and impact tools leveraging low-latency models.</p>
          </div>
          <div className="premium-card">
            <div className="premium-card-tag">BITS Apogee 2026</div>
            <h3 className="premium-card-title">3rd: Mappls Technical Hackathon</h3>
            <p className="premium-card-meta">Vaibhav Mittal, Anugya Saxena, Raj Aryan, Krishna Anchal</p>
            <p className="premium-card-desc">Constructed state-of-the-art routing and mapping optimizations.</p>
          </div>
          <div className="premium-card">
            <div className="premium-card-tag">IIT Bombay Techfest 2025</div>
            <h3 className="premium-card-title">3rd: FINAGENT Jio Financial Service</h3>
            <p className="premium-card-meta">Raj Aryan, Tarun Jain, Shreshth Rai, Sarthak Verma</p>
            <p className="premium-card-desc">Engineered quantitative tools for Jio Financial datasets.</p>
          </div>
        </div>

        {/* Section 4: Research Publications */}
        <section id="research" className="showcase-section" style={{ gridTemplateColumns: "1.2fr 1fr", marginTop: "4rem" }}>
          {/* 2x2 Image Grid Left */}
          <div className="image-grid-2x2">
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: NeurIPS SEA Publication ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: CVPR NTIRE Paper ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: GSoC HoloViz climate graph ]</span>
            </div>
            <div className="showcase-image-wrapper flex items-center justify-center p-4 border border-dashed border-[var(--line)]">
              <span className="text-xs text-[var(--muted)] text-center font-mono">[ Image Placeholder: ICML Liquid Networks ]</span>
            </div>
          </div>

          <div className="showcase-info">
            <span className="showcase-kicker">A* Conferences</span>
            <h2 className="showcase-title">Research &amp; Open Source</h2>
            <p className="showcase-desc">
              Pioneering original research in agentic memory architectures, speaker diarization, underwater restoration, and audio fake detection.
            </p>
            <div className="showcase-details">
              <div className="detail-item">
                <div className="detail-tag">Google Summer of Code (GSoC) 2026</div>
                <div className="detail-text">
                  <strong>Aman Kumar</strong> — Integrated Lumen + Xarray for multidimensional climate data visualizations, backed by a $3,000 NumFOCUS/HoloViz grant.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">NeurIPS SEA 2025</div>
                <div className="detail-text">
                  "EVOLVE-MEM: A Self-Adaptive Hierarchical Memory Architecture for Next-Generation Agentic AI Systems" (Rishi Shah, Ujjwal Kakkar, Shashvat Singhal, Dinesh Kumar Vishwakarma).
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">ACL SRW 2026</div>
                <div className="detail-text">
                  "CBAL: Context-Based Agentic Learning for Speaker Diarization Segmentation Refinement" (Odwitiyo Dutta, Dinesh Kumar Vishwakarma).
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">CVPR NTIRE 2026</div>
                <div className="detail-text">
                  "Not All Pixels Sink: Phase-Guided Representation Learning For Underwater Image Restoration" (Abhinav Rajput, Saksham Jain, Sparsh Jain, Dinesh Kumar Vishwakarma).
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-tag">ICML ML4AUDIO 2026</div>
                <div className="detail-text">
                  "FlowFake: Liquid Networks for Audio Deepfake Detection" (Shivaay Dhondiyal, Divyansh Sharma, Dinesh Kumar Vishwakarma).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="main-footer">
          <div className="footer-left">
            <div>&gt;|&lt; AIMS DTU // Artificial Intelligence &amp; Machine Learning Society</div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>© 2026 Delhi Technological University. All rights reserved.</div>
          </div>
          <div className="footer-right">
            <span>CLOCK: <Clock /></span>
            <span>BUILD: PR-SURFACE-4.1</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
