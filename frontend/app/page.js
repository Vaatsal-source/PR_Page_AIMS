"use client";

import { useEffect, useMemo, useState } from "react";

const achievements = [
  {
    tag: "ISRO BAH 2025",
    title: "National Winner - Team Rocket League",
    meta: "Kartik Aggarwal, Krish Bansal, Mayank Jangid, Kushal Khemka",
    detail:
      "Built a diffusion-based satellite nowcasting approach for INSAT 3DR/3DS data.",
  },
  {
    tag: "SIH 2025",
    title: "National Winner - Team ToinCoss",
    meta: "Aryan Sood, Aaarat Chadda, Aarushi Anand, Rudransh Singh Rathore, Shubhank Gupta, Vivaan Jain",
    detail:
      "Shipped AntiProxy, a classroom intelligence and attendance system for real-world deployment.",
  },
  {
    tag: "SIH 2025",
    title: "Grand Finalists - Team Gradient Ascent",
    meta: "Ujjwal Kakar, Vanshika Dhiman, Nikunj Gupta, Shreshth Rai, Sarthak Verma, Abhinav Rajput",
    detail:
      "Built a multimodal audio language model for multilingual, offline, low-latency intelligence.",
  },
  {
    tag: "SIH 2025",
    title: "Grand Finalists - Team ChocoRev",
    meta: "Sparsh Jain, Saksham Jain, Sukriti Talwar, Kartik Sharma, Rishi Shah, Shivaay Dhondiyal",
    detail:
      "Created an AI-driven allocation engine using CNNs and multi-objective optimization.",
  },
  {
    tag: "SIH 2025",
    title: "Grand Finalists - Team NeuralShural",
    meta: "Vishrut Grover, Shuddhabrota Banerjee, Ishansh Sharma, Ridhwan Deshwal, Prisha Gulati, Shanjan Makkar",
    detail:
      "Built a multimodal system for counterfeit IC detection with explainable confidence scoring.",
  },
  {
    tag: "NCIIPC 2025",
    title: "National Winner",
    meta: "AIMS-DTU",
    detail:
      "Won PS-1: LLMs to detect vulnerabilities in open-source software.",
  },
  {
    tag: "Google GenAI 2025",
    title: "Top 10 in India - Team Authenticoders",
    meta: "AIMS-DTU",
    detail:
      "Developed TruthLens, a multimodal AI platform for combating misinformation.",
  },
  {
    tag: "Techfest IITB 2025",
    title: "Strong Multi-domain Performances",
    meta: "ZerveAI, National GeoAI, FINAGENT, Packedge",
    detail:
      "Secured podium finishes across datathons, geoAI, finance, and packaging challenges.",
  },
  {
    tag: "Invictus 2026",
    title: "Multiple Podium Finishes",
    meta: "Micromouse, HeistGPT, CodeCrunch, Drone Race, BioHackathon",
    detail:
      "AIMS teams delivered top results across robotics, security, and algorithmic competitions.",
  },
  {
    tag: "BITS Apogee 2026",
    title: "Multiple 1st, 2nd, and 3rd Positions",
    meta: "EightFold AI, Mappls, Silicon Chip Smackdown, Product CaseComp, Green Tag, Kriti, ArmorlQ",
    detail:
      "Excelled across hackathons, product strategy, sustainability, and secure AI agent design.",
  },
  {
    tag: "Research",
    title: "4 Papers at A* Workshops",
    meta: "NeurIPS, CVPR, ICML, ACL",
    detail:
      "Published high-impact work spanning memory architectures, diarization, restoration, and deepfake detection.",
  },
  {
    tag: "Industry",
    title: "Projects with NTRO and SCAILE",
    meta: "Applied AI collaborations",
    detail:
      "Built practical AI systems in collaboration with industry and government organizations.",
  },
];

const timeline = [
  {
    label: "[01]",
    title: "ORIENTATION",
    text: "1500+ students, 18 Aug 2025, flagship introduction to AIMS and its research-hackathon culture.",
  },
  {
    label: "[02]",
    title: "HACKDAYS / WORKSHOPS",
    text: "ML workshop, Promptify, HackDays with MLH, and WorldQuant quant finance sessions.",
  },
  {
    label: "[03]",
    title: "COMPETITION WINS",
    text: "ISRO BAH, Smart India Hackathon, NCIIPC, Google GenAI, Techfest, Invictus, and BITS Apogee.",
  },
];

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now.toUTCString().slice(17, 25) + " UTC";
}

export default function Home() {
  const [accent, setAccent] = useState("green");
  const [gridOn, setGridOn] = useState(true);

  const accentClass = accent === "green" ? "theme-green" : "theme-amber";

  const heroLines = useMemo(
    () => [
      "AIMS DTU // ANNUAL REPORT",
      "RAW ACHIEVEMENTS / ASCII HUD / SINGLE PAGE",
      "RESEARCH + HACKATHONS + COMPETITIONS + PUBLICATIONS",
    ],
    [],
  );

  return (
    <main className={`min-h-screen bg-[var(--bg)] text-white ${accentClass}`}>
      <div className={`page-shell ${gridOn ? "grid-on" : "grid-off"}`}>
        <header className="hud-bar">
          <div className="hud-block">
            <span className="hud-label">SYS_ONLINE</span>
            <span className="hud-value">AIMS-DTU</span>
          </div>
          <div className="hud-center">
            <span className="hud-label">UTC</span>
            <span className="hud-value"><Clock /></span>
          </div>
          <div className="hud-actions">
            <button className="hud-btn" onClick={() => setAccent((v) => (v === "green" ? "amber" : "green"))}>
              ACCENT_{accent === "green" ? "GRN" : "AMB"}
            </button>
            <button className="hud-btn" onClick={() => setGridOn((v) => !v)}>
              GRID_{gridOn ? "ON" : "OFF"}
            </button>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-copy">
            <p className="section-kicker">AIMS DTU / 2025-26</p>
            <h1 className="hero-title">THE MACHINE LEARNS. THE SOCIETY SHIPS.</h1>
            <div className="hero-ascii">
              {heroLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-title">REPORT SIGNAL</div>
            <p>
              Extracted from the annual report and translated into a brutalist single-page
              control surface for AIMS achievements.
            </p>
            <div className="stat-row">
              <span>1500+</span>
              <span>4500+</span>
              <span>25 PAGES</span>
            </div>
          </div>
        </section>

        <section className="timeline-grid">
          {timeline.map((item) => (
            <article key={item.label} className="wire-card">
              <p className="card-label">{item.label}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="section-head">
            <p className="section-kicker">ACHIEVEMENTS</p>
          <h2>national wins, finals, research, and deployments</h2>
        </section>

        <section className="achievements-grid">
          {achievements.map((item, index) => (
            <article key={`${item.tag}-${index}`} className="achievement-card">
              <p className="card-label">{item.tag}</p>
              <h3>{item.title}</h3>
              <p className="meta">{item.meta}</p>
              <p className="detail">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="footer-panel">
          <div>
            <p className="section-kicker">ABOUT</p>
            <h2>single page app with terminal energy</h2>
          </div>
          <p>
            Built to match the Dragonfly-style mood: dark control surface, grid lines, monospace
            labels, sharp borders, and interactive HUD toggles.
          </p>
        </section>
      </div>
    </main>
  );
}
