export default function ISROAndSIH() {
  return (
    <section id="hackathons" className="showcase-section">
      <div className="showcase-info">
        <span className="showcase-kicker">National Winner</span>
        <h2 className="showcase-title">ISRO &amp; Smart India Hackathons</h2>
        <p className="showcase-desc">
          AIMS DTU teams conquered India's most prestigious government hackathons, securing National Winner titles 
          by engineering deep-learning and hardware systems for space nowcasting and smart governance.
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">ISRO Bharatiya Antariksh Hackathon (BAH) 2025</div>
            <div className="detail-text">
              <strong>Team Rocket League</strong> (Kartik Aggarwal, Krish Bansal, Mayank Jangid, Kushal Khemka) — Developed "Chasing The Clouds: Diffusion Based Satellite Nowcasting using INSAT 3DR/3DS Data".
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Smart India Hackathon (SIH) 2025 (National Winner)</div>
            <div className="detail-text">
              <strong>Team ToinCoss</strong> (Aryan Sood, Aaarat Chadda, Aarushi Anand, Rudransh Singh Rathore, Shubhank Gupta, Vivaan Jain) — Built Anti Proxy, an ESP32 &amp; AI-driven smart classroom attendance system.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">NCIIPC AI Grand Challenge 2025 (National Winner)</div>
            <div className="detail-text">
              <strong>PS-1</strong> (LLMs to Detect Vulnerability in Open-Source Software) — Cleared Stage 1 &amp; Stage 2 evaluations at IIT Delhi.
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Image Grid with Hover Blur and Gradient overlays */}
      <div className="image-grid-2x2">
        <div className="showcase-image-wrapper">
          <img src="/ISRO_Bah.png" alt="ISRO BAH Winner Ceremony" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">// ISRO BAH 2025</div>
            <h4 className="overlay-title">Team Rocket League</h4>
            <p className="overlay-desc">National Winners presenting satellite nowcasting models.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <div className="placeholder-bg">
            <span className="text-[9px] text-[var(--muted)] font-mono">[ Image: ToinCoss SIH ]</span>
          </div>
          <div className="image-hover-overlay">
            <div className="overlay-tag">// SIH 2025</div>
            <h4 className="overlay-title">Team ToinCoss</h4>
            <p className="overlay-desc">Anti Proxy smart attendance hardware dashboard.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <div className="placeholder-bg">
            <span className="text-[9px] text-[var(--muted)] font-mono">[ Image: NCIIPC Winner ]</span>
          </div>
          <div className="image-hover-overlay">
            <div className="overlay-tag">// NCIIPC 2025</div>
            <h4 className="overlay-title">PS-1 Vulnerability</h4>
            <p className="overlay-desc">Evaluations stage at IIT Delhi detecting code leaks.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <div className="placeholder-bg">
            <span className="text-[9px] text-[var(--muted)] font-mono">[ Image: Google GenAI ]</span>
          </div>
          <div className="image-hover-overlay">
            <div className="overlay-tag">// GOOGLE GENAI 2025</div>
            <h4 className="overlay-title">Authenticoders</h4>
            <p className="overlay-desc">TruthLens platform combating synthetic media.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
