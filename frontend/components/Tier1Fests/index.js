export default function Tier1Fests() {
  return (
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
        <div className="showcase-image-wrapper">
          <img src="/EightFold.png" alt="EightFold Hackathon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">BITS APOGEE 2026</div>
            <h4 className="overlay-title">EightFold Hackathon</h4>
            <p className="overlay-desc">Podium winners showing custom pipeline systems.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Micro3.png" alt="Micromouse Maze" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">ROBOTICS</div>
            <h4 className="overlay-title">Micromouse Maze</h4>
            <p className="overlay-desc">Autonomous robotics navigation algorithms.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/ZerveAI.png" alt="ZerveAI Datathon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">IIT BOMBAY 2025</div>
            <h4 className="overlay-title">ZerveAI Datathon</h4>
            <p className="overlay-desc">DTU model ranking #1 in prediction speed and accuracy.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Heist2.png" alt="Heist2" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">INVICTUS 2026</div>
            <h4 className="overlay-title">HeistGPT UGV</h4>
            <p className="overlay-desc">Computer vision model targeting simulation coordinates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
