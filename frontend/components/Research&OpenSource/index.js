export default function ResearchAndOpenSource() {
  return (
    <section id="research" className="showcase-section research-open-source-section" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
      {/* 2x2 Image Grid Left */}
      <div className="image-grid-2x2">
        <div className="showcase-image-wrapper">
          <img src="/LayeredNeon.png" alt="LayeredNeon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">NEURIPS SEA 2025</div>
            <h4 className="overlay-title">EVOLVE-MEM</h4>
            <p className="overlay-desc">Self-Adaptive memory systems for Agentic AI.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/NTIRE.png" alt="LayeredNeon" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">CVPR NTIRE 2026</div>
            <h4 className="overlay-title">Underwater restoration</h4>
            <p className="overlay-desc">Phase-guided representation pixels restoration models.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Lumen.png" alt="Lumen" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">GSOC 2026</div>
            <h4 className="overlay-title">Aman Kumar</h4>
            <p className="overlay-desc">Lumen + Xarray integration grant victory.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/Flow.png" alt="Flowfake" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">ICML ML4AUDIO 2026</div>
            <h4 className="overlay-title">FlowFake</h4>
            <p className="overlay-desc">Liquid Networks detecting audio deepfakes.</p>
          </div>
        </div>
      </div>

      <div className="showcase-info">
        <span className="showcase-kicker">A* Conferences</span>
        <h2 className="showcase-title">Research &amp; Open Source</h2>
        <p className="showcase-desc">
          Pioneering original research in agentic memory architectures, speaker diarization, underwater restoration, and audio fake detection.
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">Google Summer of Code (GSoC) 2026</div>
            <div className="detail-text">
              Integrated Lumen + Xarray for multidimensional climate data visualizations, backed by a $3,000 NumFOCUS/HoloViz grant.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">NeurIPS SEA 2025</div>
            <div className="detail-text">
              "EVOLVE-MEM: A Self Adaptive Hierarchical Memory Architecture for Next Generation Agentic AI Systems".
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">ACL SRW 2026</div>
            <div className="detail-text">
              "CBAL: Context Based Agentic Learning for Speaker Diarization Segmentation Refinement".
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">CVPR NTIRE 2026</div>
            <div className="detail-text">
              "Not All Pixels Sink: Phase-Guided Representation Learning For Underwater Image Restoration".
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">ICML ML4AUDIO 2026</div>
            <div className="detail-text">
              "FlowFake: Liquid Networks for Audio Deepfake Detection".
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
