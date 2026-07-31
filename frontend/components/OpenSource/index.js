export default function OpenSource() {
  return (
    <section id="hackathons" className="showcase-section">
      <div className="showcase-info">
        <span className="showcase-kicker">OpenSource Contributions</span>
        <h2 className="showcase-title"> GSoC '26  @NumFOCUS</h2>
        <p className="showcase-desc">
          Contributor :<strong> Aman Kumar</strong> <br/>Mentor:<strong> Andrew H, Andy Maloney</strong><br/>Organisation: <strong>NumFOCUS</strong><br/>Maintainer: <strong>Holoviz/Lumen</strong><br/>Author of: <strong>Lumen-OurWorldInData</strong>
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">Lumen + Xarray Integration</div>
            <div className="detail-text">
              Lumen Handles Tabular Data and Xarray Handles Multi-Dimensional Data. This project aims to integrate both libraries to provide a unified interface for handling both types of data seamlessly.
            </div>
          </div>
          
        </div>
      </div>

      {/* 2x2 Image Grid with Hover Blur and Gradient overlays */}
      <div className="image-grid-2x2">
        <div className="showcase-image-wrapper">
          <img src="/Holoviz.png" alt="Holo" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Holoviz</div>
            
            <p className="overlay-desc">National Winners presenting satellite nowcasting models.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Anaconda.png" alt="Anacon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Anaconda</div>
            
            <p className="overlay-desc">Innovative solutions for environmental monitoring.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Cake.jpeg" alt="NCIIPC Winner Ceremony" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">NCIIPC 2025</div>
            <h4 className="overlay-title">PS-1 Vulnerability</h4>
            <p className="overlay-desc">Evaluations stage at IIT Delhi detecting code leaks.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Camp.jpeg" alt="NCIIPC Winner Ceremony" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">NCIIPC 2025</div>
            <h4 className="overlay-title">PS-1 Vulnerability</h4>
            <p className="overlay-desc">Evaluations stage at IIT Delhi detecting code leaks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
