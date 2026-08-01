import MobileSlideshow from "@/components/MobileSlideshow";

export default function KaggleHacks() {
  const slides = [
    {
      image: "/Orbit.png",
      tag: "Orbit Wars",
      title: "Orbital Dynamics",
      desc: "Goal of the competition was to create and/or train AI bots to play a novel multi-agent 1v1 or 4p FFA game against other submitted agents.",
    },
    {
      image: "/RNA.png",
      tag: "Stanford RNA 3D Folding",
      title: "RNA 3D Folding",
      desc: "Predicting the 3D structure of RNA molecules using machine learning.",
    },
    {
      image: "/KR.jpeg",
      tag: "Certificate of Achievement",
      title: "Placed 106 of 1867",
      desc: "Kaggle Expert : Rudransh",
    },
    {
      image: "/KA.jpeg",
      tag: "Certificate of Achievement",
      title: "Placed 253 of 4729",
      desc: "Kaggle Expert : Aman",
    },
  ];

  return (
    <section id="researchKaggle" className="showcase-section research-open-source-section light-showcase">
      <div className="image-grid-2x2 desktop-grid">
        <div className="showcase-image-wrapper">
          <img src="/Orbit.png" alt="EVOLVE-MEM" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Orbit Wars</div>
            <h4 className="overlay-title">Orbital Dynamics</h4>
            <p className="overlay-desc">Goal of the competition was to create and/or train AI bots to play a novel multi-agent 1v1 or 4p FFA game against other submitted agents.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/RNA.png" alt="RNA" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Stanford RNA 3D Folding</div>
            <h4 className="overlay-title">RNA 3D Folding</h4>
            <p className="overlay-desc">Predicting the 3D structure of RNA molecules using machine learning.</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/KR.jpeg" alt="RNA" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Certificate of Achievement</div>
            <h4 className="overlay-title">Placed 106 of 1867</h4>
            <p className="overlay-desc">Kaggle Expert : Rudransh</p>
          </div>
        </div>
        <div className="showcase-image-wrapper">
          <img src="/KA.jpeg" alt="RNA" />
          <div className="image-hover-overlay">
            <div className="overlay-tag">Certificate of Achievement</div>
            <h4 className="overlay-title">Placed 253 of 4729</h4>
            <p className="overlay-desc">Kaggle Expert : Aman</p>
          </div>
        </div>
      </div>

      <div className="showcase-info">
        <span className="showcase-kicker">Kaggle Experts</span>
        <h2 className="showcase-title">Kaggle Hacks</h2>
        <p className="showcase-desc">
          Dominating Kaggle competitions with innovative solutions in machine learning, computer vision, and data science.
        </p>
        <div className="showcase-details">
          <div className="detail-item">
            <div className="detail-tag">Kaggle Competition: Orbit Wars</div>
            <div className="detail-text">Goal of the competition was to create and/or train AI bots to play a novel multi-agent 1v1 or 4p FFA game against other submitted agents.</div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Stanford RNA 3D Folding</div>
            <div className="detail-text">Stanford RNA 3D Folding competition, helped uncover how RNA molecules fold and function at the molecular level by developing machine learning models that predict the 3D structure of RNA molecules using only their sequences.</div>
          </div>
        </div>
      </div>

      <MobileSlideshow slides={slides} />
    </section>
  );
}
