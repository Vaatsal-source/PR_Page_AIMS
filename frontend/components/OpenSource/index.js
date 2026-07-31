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
            
            <p className="overlay-desc">Used for browser-based Python data visualization..</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Anaconda.png" alt="Anacon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Anaconda</div>
            
            <p className="overlay-desc">A tool used to easily install, run, and update packages and manage complex dependencies without conflicts.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Cake.jpeg" alt="GSoC Celebrations" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">GSoC'26</div>
            <p className="overlay-desc">GSoC'26 Delhi Celebrations</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Camp.jpeg" alt="GSoC Camp" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">GSoC'26</div>
            <p className="overlay-desc">GSoC'26 Delhi Camp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
