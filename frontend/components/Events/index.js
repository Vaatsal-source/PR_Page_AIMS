const eventCards = [
  {
    title: "Orientation 2025",
    image: "/Orientation.png",
  },
  {
    title: "HackDays by MLH",
    image: "/Hackdays.png",
  },
  {
    title: "AIMS X ACM ML Workshop",
    image: "/MLWork.png",
  },
  {
    title: "Promptify",
    image: "/Promptify.png",
  },
  {
    title: "brAInwave 2.0",
    image: "/Brainwave.png",
  },
  {
    title: "Quant Workshop by WorldQuant",
    image: "/Quant.png",
  },
  {
    title: "BuildWithGemma by Google",
    image: "/Gemma.png",
  },
];

export default function Events() {
  return (
    <section id="events" className="showcase-section events-section">
      <div className="showcase-info">
        <span className="showcase-kicker">Main Hero</span>
        <h2 className="showcase-title">Events</h2>
        <p className="showcase-desc">
          Orientation 2025, HackDays by MLH, AIMS X ACM workshops, Promptify, brAI nwave 2.0,
          Quant Workshop by WorldQuant, and BuildWithGemma by Google.
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">Orientation 2025</div>
            <div className="detail-text">
              18 August 2025, attended by over 1,500 students, introducing AIMS&apos; mottos and
              showcasing projects like Gesture-Controlled Drones, Voice Cloning, and Traffic Monitoring.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">HackDays by MLH</div>
            <div className="detail-text">
              8 to 12 November 2025, co-organized with MLH and ACM DTU, engaging 150+ students with Gemini API apps.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">AIMS X ACM Joint Initiatives</div>
            <div className="detail-text">
              ML Workshop on 29 October 2025 for 250 attendees, covering ML lifecycle, deep learning, CV, and NLP.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Promptify</div>
            <div className="detail-text">
              13 December 2025, during CS Education Week, focused on non-coding Generative AI prompt engineering.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">brAI nwave 2.0</div>
            <div className="detail-text">
              A 36-hour national hackathon with 4,500+ online registrations, 600+ on-ground participants, and 180+ teams.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Quant Workshop by WorldQuant</div>
            <div className="detail-text">
              Co-hosted with DTU T&amp;P for 300+ students, covering quantitative finance workflows and IQC 2026.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">BuildWithGemma by Google</div>
            <div className="detail-text">
              A technical collaboration event centered on building solutions with Google&apos;s Gemma AI ecosystem.
            </div>
          </div>
        </div>
      </div>

      <div className="image-grid-2x2 events-grid">
        {eventCards.map((event) => (
          <div className="showcase-image-wrapper" key={event.title}>
            <img
              src={event.image}
              alt={event.title}
              className="showcase-image"
            />
            <div className="image-hover-overlay">
              <div className="overlay-tag">EVENT</div>
              <h4 className="overlay-title">{event.title}</h4>
              <p className="overlay-desc">Highlights from {event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}