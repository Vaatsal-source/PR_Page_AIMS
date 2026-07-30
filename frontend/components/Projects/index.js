const extractedRecords = [
  {
    tag: "Cricket Simulations",
    title: "Virtual Cricket",
    desc: "Play Against An AI Bot in Real Time With Real Equipments.",
    image: "/BatSimul.jpeg" 
  },
  {
    tag: "Invictus 2026",
    title: "1st: BITS CS Fundamentals",
    desc: "Dominated Third place in computer systems and foundational algorithms.",
    image: "/BIT3.png"
  },
  {
    tag: "BITS Apogee 2026",
    title: "1st: Product CaseComp",
    desc: "Won first position in product framework and corporate strategy presentation.",
    image: "/ProductComp1.png" 
  },
  {
    tag: "BITS Apogee 2026",
    title: "1st & 2nd: Green Tag Climate Tech",
    desc: "Pioneered sustainable technology models for green tracking indexes.",
    image: "/GreenTag1,2.png"
  },
  {
    tag: "IIT Bombay Techfest 2025",
    title: "1st: ZerveAI Health Insurance Datathon",
    desc: "Engineered predictive claim modeling tools using tabular deep learning.",
    image: "ZerveAI.png"
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

      <div className="image-grid-2x2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
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
    </section>
  );
}