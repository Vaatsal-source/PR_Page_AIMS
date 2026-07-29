export default function HeroSection() {
  return (
    <section className="hero-section">
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
  );
}
