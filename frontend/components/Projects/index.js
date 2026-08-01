import MobileSlideshow from "@/components/MobileSlideshow";

const extractedRecords = [
  {
    tag: "Cricket Simulations",
    title: "Virtual Cricket",
    desc: "Play Against An AI Bot in Real Time With Real Equipments.",
    image: "/BatSimul.jpeg" 
  },
  {
    tag: "Drone",
    title: "UAV Drone",
    desc: "Production Grade Drone.",
    image: "/DroneStruct.jpeg"
  },
  {
    tag: "Drone Testing",
    title: "Takeoff",
    desc: "Controlling the Drone with a python software.",
    image: "/DroneFly.jpeg" 
  },
  {
    tag: "Drone",
    title: "Configuring The Drone",
    desc: "Setting up and calibrating the drone's systems.",
    image: "/Drone.jpeg"
  },
  {
    tag: "Virtual Cricket",
    title: "Batting Simulation",
    desc: "Simulating Batting in a Virtual Cricket Game.",
    image: "/Bat.jpeg"
  },
];

export default function ExtractedRecords() {
  return (
    <section id="records" className="section-header-block" style={{ paddingTop: "4rem" }}>
      <span className="showcase-kicker">Projects</span>
      <h2 className="section-header-title">Have A Look At Some Of Our Most Interesting Projects</h2>
      <p className="showcase-desc" style={{ maxWidth: "700px", margin: "1rem auto 3rem auto" }}>
        Drones, Cricket Simulations, Tekken We Have It All !
      </p>

      <div className="image-grid-2x2 desktop-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {extractedRecords.map((record, index) => (
          <div key={index} className="showcase-image-wrapper" style={{ aspectRatio: "1 / 1" }}>
            <div className="placeholder-bg" style={{ background: "linear-gradient(45deg, #0f0f14 0%, #15151b 100%)" }}>
              {/* Render image if present; otherwise fall back to placeholder text */}
              {record.image ? (
                <img 
                  src={record.image} 
                  alt={record.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              ) : (
                <span className="text-[10px] text-[var(--muted)] font-mono uppercase tracking-wider">
                  {record.tag}
                </span>
              )}
            </div>
            <div className="image-hover-overlay">
              <div className="overlay-tag">{record.tag}</div>
              <h4 className="overlay-title" style={{ fontSize: "0.85rem", lineHeight: "1.2" }}>{record.title}</h4>
              <p className="overlay-desc" style={{ fontSize: "0.68rem", opacity: "0.85" }}>{record.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <MobileSlideshow slides={extractedRecords} />

      {/* By the numbers / stats section (inserted under projects) */}
      <section id="stats" className="by-numbers">
        <div className="main-layout" style={{ padding: 0 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="kicker">BY THE NUMBERS</div>
            <h3 className="by-title">A society that ships code</h3>
            <div className="stats-grid">
              <div className="stat">
                <div className="num">03+</div>
                <div className="cap">National Winners · ISRO BAH & SIH '25</div>
              </div>
              <div className="stat">
                <div className="num">20+</div>
                <div className="cap">Championship finishes across India</div>
              </div>
              <div className="stat">
                <div className="num">05+</div>
                <div className="cap">NeurIPS, ICML, CVPR & ACL papers</div>
              </div>
              <div className="stat">
                <div className="num">4.5K+</div>
                <div className="cap">Participants in brAInwave & workshops</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}