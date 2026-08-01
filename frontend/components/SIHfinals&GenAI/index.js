import MobileSlideshow from "@/components/MobileSlideshow";

const sihSlides = [
  {
    image: "/GradientAscent.png",
    tag: "SIH FINALIST",
    title: "Gradient Ascent",
    desc: "Multimodal Audio MoE model running locally.",
  },
  {
    image: "/ChocoRev.png",
    tag: "SIH FINALIST",
    title: "ChocoRev",
    desc: "GNN candidate-opportunity recommendation engine.",
  },
  {
    image: "/NeuralShural.png",
    tag: "SIH FINALIST",
    title: "NeuralShural",
    desc: "Computer Vision systems for counterfeit IC analysis.",
  },
  {
    image: "/GenAI.png",
    tag: "GOOGLE GENAI",
    title: "GenAI Exchange 2025",
    desc: "Top 10 India build verifying misinformation leaks.",
  },
];

export default function SIHFinalsAndGenAI() {
  return (
    <section id="sih-genai" className="showcase-section sih-genai-section">
      {/* 2x2 Image Grid Left */}
      <div className="image-grid-2x2 desktop-grid">
        <div className="showcase-image-wrapper">
          <img src="/GradientAscent.png" alt="Gradient Ascent" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">SIH FINALIST</div>
            <h4 className="overlay-title">Gradient Ascent</h4>
            <p className="overlay-desc">Multimodal Audio MoE model running locally.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/ChocoRev.png" alt="ChocoRev" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">SIH FINALIST</div>
            <h4 className="overlay-title">ChocoRev</h4>
            <p className="overlay-desc">GNN candidate-opportunity recommendation engine.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/NeuralShural.png" alt="NeuralShural" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">SIH FINALIST</div>
            <h4 className="overlay-title">NeuralShural</h4>
            <p className="overlay-desc">Computer Vision systems for counterfeit IC analysis.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/GenAI.png" alt="GenAIExchange" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">GOOGLE GENAI</div>
            <h4 className="overlay-title">GenAI Exchange 2025</h4>
            <p className="overlay-desc">Top 10 India build verifying misinformation leaks.</p>
          </div>
        </div>
      </div>

      <div className="showcase-info">
        <span className="showcase-kicker">Top Engineers</span>
        <h2 className="showcase-title">Top 5 in SIH &amp; Top 10 in Google GenAI</h2>
        <p className="showcase-desc">
          Custom AI architectures, neural graphs, and computer vision algorithms in national finals.
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">SIH Grand Finalist Team Gradient Ascent</div>
            <div className="detail-text">Multimodal Audio Language Model using Mixture of Experts architecture.</div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">SIH Grand Finalist Team ChocoRev</div>
            <div className="detail-text">GNN-driven multi objective candidate opportunity matching engine.</div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">SIH Grand Finalist Team NeuralShural</div>
            <div className="detail-text">Multimodal AI system for counterfeit IC detection.</div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Google GenAI Exchange 2025 (Top 10 in India)</div>
            <div className="detail-text">
              <strong>Team Authenticoders</strong> Built TruthLens (Multimodal AI platform to combat misinformation) out of 4,457+ prototypes and 278,000+ developers nationwide.
            </div>
          </div>
        </div>
      </div>

      <MobileSlideshow slides={sihSlides} />
    </section>
  );
}
