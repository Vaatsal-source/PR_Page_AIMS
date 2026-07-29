"use client";

import { useEffect, useState } from "react";

// The full data set requested by the user
const achievementsData = {
  government: [
    {
      id: "gov-1",
      tag: "ISRO BAH 2025",
      title: "National Winner — Team Rocket League",
      meta: "Kartik Aggarwal, Krish Bansal, Mayank Jangid, Kushal Khemka",
      detail: "Developed 'Chasing The Clouds: Diffusion Based Satellite Nowcasting using INSAT 3DR/3DS Data'.",
    },
    {
      id: "gov-2",
      tag: "SIH 2025 (Winner)",
      title: "National Winner — Team ToinCoss",
      meta: "Aryan Sood, Aaarat Chadda, Aarushi Anand, Rudransh Singh Rathore, Shubhank Gupta, Vivaan Jain",
      detail: "Built Anti Proxy, an ESP32 & AI-driven smart classroom attendance system.",
    },
    {
      id: "gov-3",
      tag: "SIH 2025 (Finalist)",
      title: "Grand Finalist — Team Gradient Ascent",
      meta: "Ujjwal Kakar, Vanshika Dhiman, Nikunj Gupta, Shreshth Rai, Sarthak Verma, Abhinav Rajput",
      detail: "Multimodal Audio Language Model using Mixture-of-Experts architecture.",
    },
    {
      id: "gov-4",
      tag: "SIH 2025 (Finalist)",
      title: "Grand Finalist — Team ChocoRev",
      meta: "Sparsh Jain, Saksham Jain, Sukriti Talwar, Kartik Sharma, Rishi Shah, Shivaay Dhondiyal",
      detail: "GNN-driven multi-objective candidate-opportunity matching engine.",
    },
    {
      id: "gov-5",
      tag: "SIH 2025 (Finalist)",
      title: "Grand Finalist — Team NeuralShural",
      meta: "Vishrut Grover, Shuddhabrota Banerjee, Ishansh Sharma, Ridhwan Deshwal, Prisha Gulati, Shanjan Makkar",
      detail: "Multimodal AI system for counterfeit IC detection.",
    },
    {
      id: "gov-6",
      tag: "NCIIPC AI 2025",
      title: "National Winner — PS-1",
      meta: "IIT Delhi Evaluations / AIMS DTU",
      detail: "LLMs to Detect Vulnerability in Open-Source Software. Cleared Stage 1 & Stage 2 evaluations at IIT Delhi.",
    },
    {
      id: "gov-7",
      tag: "Google GenAI 2025",
      title: "Top 10 in India — Team Authenticoders",
      meta: "AIMS-DTU",
      detail: "Built TruthLens (Multimodal AI platform to combat misinformation) out of 4,457+ prototypes and 278,000+ developers nationwide.",
    },
  ],
  tier1: [
    {
      id: "t1-1",
      tag: "BITS Apogee 2026",
      title: "1st Position — EightFold AI Hackathon",
      meta: "Bibek Sanjeev, Himal Garg, Shubhank Gupta",
      detail: "Won first place in the EightFold AI Hackathon challenge.",
    },
    {
      id: "t1-2",
      tag: "BITS Apogee 2026",
      title: "1st & 2nd Position — Silicon Chip Smackdown",
      meta: "Bibek Sanjeev, Faaiz Hussain, Shaurya Suyal, Aarush Mahajan, Aaarat Chadda",
      detail: "Podium finishes in the AI Poker Smackdown competition.",
    },
    {
      id: "t1-3",
      tag: "BITS Apogee 2026",
      title: "1st Position — Product CaseComp",
      meta: "Ishansh Sharma, Shaurya Suyal, Alankar Akinchan, Govind Upadhyay",
      detail: "AIMS DTU product strategy framework case study victory.",
    },
    {
      id: "t1-4",
      tag: "BITS Apogee 2026",
      title: "1st & 2nd Position — Green Tag Climate Tech",
      meta: "1st: Agrim Gupta et al. | 2nd: Ritwik Jain et al.",
      detail: "Clean-tech solutions targeting climate metrics.",
    },
    {
      id: "t1-5",
      tag: "BITS Apogee 2026",
      title: "1st Position — ArmorIQ X OpenClaw Hackathon",
      meta: "Sukriti Talwar, Ishansh Sharma, Abhinav Verma, Harshit Nayak",
      detail: "Agent security and vulnerability mitigation challenge.",
    },
    {
      id: "t1-6",
      tag: "BITS Apogee 2026",
      title: "2nd Position — Kriti Social Impact Hackathon",
      meta: "Ravish Kansal, Mrudduni J Modha, Parv Bansal, Sukriti Talwar",
      detail: "Leveraging technology for real world community impacts.",
    },
    {
      id: "t1-7",
      tag: "BITS Apogee 2026",
      title: "3rd Position — Mappls Technical Hackathon",
      meta: "Vaibhav Mittal, Anugya Saxena, Raj Aryan, Krishna Anchal",
      detail: "Geospatial indexing and intelligence features.",
    },
    {
      id: "t1-8",
      tag: "BITS Apogee 2026",
      title: "3rd Position — Micromouse Autonomous Robotics",
      meta: "Syna Bedi, Ayush Roy, Vaatsalya Srivastava, Harshit Nayak, Rajat",
      detail: "Fast maze-solving robot integration.",
    },
    {
      id: "t1-9",
      tag: "Invictus 2026",
      title: "1st Position — BITS CS Fundamentals",
      meta: "Mrudduni, Bibek Sanjeev, Vidit Arora, Aryan Gupta",
      detail: "Comprehensive computer science engineering challenge.",
    },
    {
      id: "t1-10",
      tag: "Invictus 2026",
      title: "1st Position — Guessapaloza",
      meta: "Krishna Anchal",
      detail: "Podium finish in algorithmic optimization.",
    },
    {
      id: "t1-11",
      tag: "Invictus 2026",
      title: "2nd & 3rd Position — HeistGPT UGV Vision Challenge",
      meta: "Divya Jassal et al. / Garv Saluja et al.",
      detail: "Computer vision guidance logic for Unmanned Ground Vehicles.",
    },
    {
      id: "t1-12",
      tag: "Invictus 2026",
      title: "2nd Position — BioHackathon Cardiac Modeling",
      meta: "Harshit Nayak, Arnav Bisht",
      detail: "Advanced machine learning applied to cardiac modeling and simulation.",
    },
    {
      id: "t1-13",
      tag: "Invictus 2026",
      title: "3rd Position — Micromouse Maze Navigation",
      meta: "Harshit Nayak, Rajat, Devansh",
      detail: "Real-time navigation algorithms under hardware constraints.",
    },
    {
      id: "t1-14",
      tag: "IIT Bombay Techfest 2025",
      title: "1st Position — ZerveAI Health Insurance Datathon",
      meta: "Ishansh Sharma, Shivaay Dhondiyal, Ridhwan Deshwal, Akansh Gupta",
      detail: "High-performance insurance claim optimization scoring engine.",
    },
    {
      id: "t1-15",
      tag: "IIT Bombay Techfest 2025",
      title: "1st & 3rd Position — National GeoAI Hackathon",
      meta: "1st: Sparsh Jain et al. | 3rd: Ishan Chugh et al.",
      detail: "Satellites spectral analysis and land classification.",
    },
    {
      id: "t1-16",
      tag: "IIT Bombay Techfest 2025",
      title: "2nd Position — Packedge Motion Chair Engineering",
      meta: "Ishansh Sharma, Shivaay Dhondiyal, et al.",
      detail: "Podium victory for motion simulation chair robotics design.",
    },
    {
      id: "t1-17",
      tag: "IIT Bombay Techfest 2025",
      title: "3rd Position — FINAGENT Jio Financial Service",
      meta: "Raj Aryan, Tarun Jain, Shreshth Rai, Sarthak Verma",
      detail: "Advanced quantitative models for fintech portfolios.",
    },
  ],
  publications: [
    {
      id: "pub-1",
      tag: "GSoC 2026",
      title: "Google Summer of Code — Aman Kumar",
      meta: "Lumen + Xarray Integration for Multidimensional Climate Data",
      detail: "Awarded $3,000 NumFOCUS / HoloViz grant for climate modeling visualizations.",
    },
    {
      id: "pub-2",
      tag: "NeurIPS SEA 2025",
      title: "EVOLVE-MEM: A Self-Adaptive Hierarchical Memory Architecture for Next-Generation Agentic AI Systems",
      meta: "Rishi Shah, Ujjwal Kakkar, Shashvat Singhal, Dinesh Kumar Vishwakarma",
      detail: "Published at NeurIPS Workshop on agentic architectures.",
    },
    {
      id: "pub-3",
      tag: "ACL SRW 2026",
      title: "CBAL: Context-Based Agentic Learning for Speaker Diarization Segmentation Refinement",
      meta: "Odwitiyo Dutta, Dinesh Kumar Vishwakarma",
      detail: "Research on low-error audio segmentation models.",
    },
    {
      id: "pub-4",
      tag: "CVPR NTIRE 2026",
      title: "Not All Pixels Sink: Phase-Guided Representation Learning For Underwater Image Restoration",
      meta: "Abhinav Rajput, Saksham Jain, Sparsh Jain, Dinesh Kumar Vishwakarma",
      detail: "Cutting-edge pixel representation restoration models.",
    },
    {
      id: "pub-5",
      tag: "ICML ML4AUDIO 2026",
      title: "FlowFake: Liquid Networks for Audio Deepfake Detection",
      meta: "Shivaay Dhondiyal, Divyansh Sharma, Dinesh Kumar Vishwakarma",
      detail: "Audio synthesis discrimination framework published in A* workshop.",
    },
  ],
};

function Clock() {
  const [timeStr, setTimeStr] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString("en-US", { hour12: false }) + " IST");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return timeStr;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("government");
  const [gridEnabled, setGridEnabled] = useState(true);

  return (
    <main>
      {/* Visual background layers */}
      {gridEnabled && <div className="bg-grid-overlay" />}
      <div className="scanline" />

      {/* Screen Corners matching screenshot */}
      <div className="corner-indicator corner-tl">D</div>
      <div className="corner-indicator corner-tr">F</div>
      <div className="corner-indicator corner-bl">L</div>
      <div className="corner-indicator corner-br">Y</div>

      <div className="hud-container">
        {/* Top Header Row matching screenshot */}
        <header className="hud-header">
          <div className="hud-logo">&gt;|&lt;</div>
          <div className="hud-status-dots">.....</div>
          <div className="hud-menu-btn" onClick={() => setGridEnabled(!gridEnabled)}>
            GRID_{gridEnabled ? "ON" : "OFF"}
          </div>
        </header>

        {/* Dragonfly main title banner */}
        <section className="hero-title-container">
          <div className="crosshair" style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}>+</div>
          <h1 className="hero-large-title">DRAGONFLY</h1>
          <p className="hero-sub">AIMS DTU // ANNUAL REPORT CONTROL SURFACE</p>
          <div className="crosshair" style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}>v</div>
        </section>

        {/* Custom category selector tabs */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "government" ? "active" : ""}`}
            onClick={() => setActiveTab("government")}
          >
            [01] GOVT &amp; NAT HACKATHONS ({achievementsData.government.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "tier1" ? "active" : ""}`}
            onClick={() => setActiveTab("tier1")}
          >
            [02] TIER-1 FEST PODIUMS ({achievementsData.tier1.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "publications" ? "active" : ""}`}
            onClick={() => setActiveTab("publications")}
          >
            [03] OS &amp; A* PUBLICATIONS ({achievementsData.publications.length})
          </button>
        </div>

        {/* Display filtered achievements */}
        <section className="cards-grid">
          {achievementsData[activeTab].map((item) => (
            <article key={item.id} className="glow-card">
              <div>
                <div className="card-tag">// {item.tag}</div>
                <h2 className="card-title">{item.title}</h2>
                <div className="card-meta">{item.meta}</div>
              </div>
              <p className="card-desc">{item.detail}</p>
            </article>
          ))}
        </section>

        {/* Bottom HUD panel */}
        <footer className="hud-footer">
          <div>
            <span className="pulse-node" />
            <span>SYS_ONLINE: AIMS-DTU // CONSOLE_SESSION_ACTIVE</span>
          </div>
          <div className="footer-decorations">
            <span>CLOCK: <Clock /></span>
            <span>VER: 4.0.0</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
