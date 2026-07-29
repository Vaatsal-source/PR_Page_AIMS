const extractedRecords = [
  {
    tag: "BITS Apogee 2026",
    title: "1st: EightFold AI Hackathon",
    meta: "Bibek Sanjeev, Himal Garg, Shubhank Gupta",
    desc: "First place finish in the EightFold machine learning optimization challenge.",
    image: "/EightFold.png" 
  },
  {
    tag: "Invictus 2026",
    title: "1st: BITS CS Fundamentals",
    meta: "Ayush Roy,Syna Bedi,Avishi Agarwal,Dhruv Kashyap",
    desc: "Dominated Third place in computer systems and foundational algorithms.",
    image: "/BIT3.png"
  },
  {
    tag: "BITS Apogee 2026",
    title: "1st: Product CaseComp",
    meta: "Ishansh Sharma, Shaurya Suyal, Alankar Akinchan, Govind Upadhyay",
    desc: "Won first position in product framework and corporate strategy presentation.",
    image: "/ProductComp1.png" 
  },
  {
    tag: "BITS Apogee 2026",
    title: "1st & 2nd: Green Tag Climate Tech",
    meta: "1st Position: Agrim Gupta, Rishii Kumar Singh, Nishant Varshney, Aditya Kumar, Ishansh Sharma 2nd Position: Ritwik Jain, Abhinav Verma, Sukriti Talwar, Sarthak Tomar, Akshath Singh",
    desc: "Pioneered sustainable technology models for green tracking indexes.",
    image: "/GreenTag1,2.png"
  },
  {
    tag: "BITS Apogee 2026",
    title: "1st: ArmorIQ X OpenClaw Hackathon",
    meta: "Sukriti Talwar, Ishansh Sharma, Abhinav Verma, Harshit Nayak",
    desc: "Engineered robust secure AI agents to counter runtime vulnerability exploits.",
    image: "/ArmorIQ.png"
  },
  {
    tag: "Invictus 2026",
    title: "1st: BITS CS Fundamentals",
    meta: "Mrudduni, Bibek Sanjeev, Vidit Arora, Aryan Gupta",
    desc: "Dominated first place in computer systems and foundational algorithms.",
    image: "/BITS1.png"
  },
  {
    tag: "Invictus 2026",
    title: "1st: Guessapaloza",
    meta: "Krishna Anchal",
    desc: "Podium finish in real-time prediction and heuristic search.",
    image: "Guessapaloza.png"
  },
  {
    tag: "Invictus 2026",
    title: "2nd & 3rd: HeistGPT UGV Vision Challenge",
    meta: "2nd Position - Divya Jassal, Ujjwal Diwakar, Laksh Dhawan, 3rd Position - Garv Saluja, Aksh Aggarwal, Uday Raj Malik",
    desc: "Computer vision mapping algorithms for Unmanned Ground Vehicles (UGV).",
    image: "Heist2.png"
  },
  {
    tag: "IIT Bombay Techfest 2025",
    title: "1st: ZerveAI Health Insurance Datathon",
    meta: "Ishansh Sharma, Shivaay Dhondiyal, Ridhwan Deshwal, Akansh Gupta",
    desc: "Engineered predictive claim modeling tools using tabular deep learning.",
    image: "ZerveAI.png"
  },
  {
    tag: "IIT Bombay Techfest 2025",
    title: "2st: Packedge",
    meta: "2nd Position - Ishansh Sharma, Shivaay Dhondiyal, Sarthak Pandey, Prathamesh Bhatta,Vanshika Dhiman",
    desc: "Redesigned Motion Chair packaging using an engineered L-shaped carton",
    image: "Packedge.png"
  },
];

export default function ExtractedRecords() {
  return (
    <section id="records" className="section-header-block" style={{ paddingTop: "4rem" }}>
      <span className="showcase-kicker">Extracted Records</span>
      <h2 className="section-header-title">Full Competition Breakdown</h2>
      <p className="showcase-desc" style={{ maxWidth: "700px", margin: "1rem auto 3rem auto" }}>
        Hover over the record placeholders below to reveal key competition victories, team members, and engineered system architectures.
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
              <p className="overlay-desc" style={{ fontSize: "0.7rem", margin: "0.25rem 0 0.5rem 0", color: "var(--accent)" }}>{record.meta}</p>
              <p className="overlay-desc" style={{ fontSize: "0.68rem", opacity: "0.85" }}>{record.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}