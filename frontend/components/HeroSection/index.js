export default function HeroSection() {
  return (
    <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>

      <h1 className="hero-main-title hero-enter-1">
        AT AIMS DTU, WE BUILD COMPETE AND PUBLISH
      </h1>

      <p
        className="showcase-desc hero-enter-2"
        style={{ maxWidth: "800px", margin: "0 auto 3rem auto", fontSize: "1.2rem" }}
      >
      Hackathon wins, published research, and open-source projects run by students, for students who want to actually ship something.
      </p>

      <div className="hero-stats hero-enter-3" style={{ marginTop: "1rem" }}>
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

      <div
        className="stat-label hero-enter-4"
        style={{ marginTop: "2.5rem", fontSize: "1.2rem", fontWeight: "700" }}
      >
        Since the last year
      </div>
    </section>
  );
}
