import ParallaxSection from "@/components/ParallaxSection";
import CascadeReveal from "@/components/CascadeReveal";

const sections = [
  {
    id: "bits-apogee",
    kicker: "Intercollege Competitions",
    title: "BITS APOGEE",
    desc: "A look at Our BITS Apogee wins.",
    items: [
      {
        title: "EightFold AI Hackathon (1st)",
        image: "/EightFold.png",
        desc: "9-hour-long competition involving handling and deployment of APIs along with frontend development.",
      },
      {
        title: "Kriti Social Impact Hackathon (2nd)",
        image: "/Kriti.png",
        desc: "Hackathon focused on building affordable, scalable technology solutions for challenges faced by rural communities.",
      },
      {
        title: "Product CaseComp (1st)",
        image: "/ProductComp1.png",
        desc: "Product management competition involving solving real-world problems, building data-driven solutions.",
      },
      {
        title: "GreenTag CaseComp (1st and 2nd)",
        image: "/GreenTag1,2.png",
        desc: "Multi-round competition on climate tech and sustainability, involving pitching impact-driven business ideas.",
      },
    ],
  },
  {
    id: "iit-bombay",
    title: "IIT Bombay",
    desc: "A look at Our IIT Bombay Techfest wins.",
    items: [
      {
        title: "ZerveAI Datathon (1st)",
        image: "/ZerveAI.png",
        desc: "Built robust ML pipelines on 450k+ imbalanced rows using LightGBM with advanced feature engineering and ensembling.",
      },
      {
        title: "National GeoAI Hack (1st and 3rd)",
        desc: "Developed a neuro-symbolic pipeline for high-precision DTMs and optimized rural drainage layouts using hydrological modeling and genetic optimization. Used PILNNs and DRL to identify waterlogging hotspots and generate gravity-compliant drainage designs.",
      },
      {
        title: "Finagent (3rd)",
        desc: "Built SentinAL, a secure browser-based financial action agent with human-in-the-loop approval for safe execution of real banking tasks.",
      },
      {
        title: "Packedge Motion Chair (2nd)",
        image: "/Packedge.png",
        desc: "Redesigned Motion Chair packaging using an engineered L-shaped carton, cutting 45% internal void, doubling logistics density, and reducing cost.",
      },
    ],
  },
  {
    id: "invictus",
    title: "Invictus",
    desc: "A look at Our Invictus wins.",
    items: [
      {
        title: "BITS CS Fundamentals (1st and 3rd)",
        image: "/BITS1.png",
        desc: "The competition evaluated participants across multiple computer science domains including Data Structures, Operating Systems, Database Management Systems and core CS fundamentals.",
      },
      {
        title: "Guessapaloza (1st)",
        image: "/Guessapaloza.png",
        desc: "A Guesstimates competition where spontaneous problems were provided to test analytical reasoning, structured thinking, and approximation skills.",
      },
      {
        title: "HeistGPT UGV Vision (2nd and 3rd)",
        image: "/Heist2.png",
        desc: "Developed high-precision semantic segmentation model for Unmanned Ground Vehicles (UGVs) using synthetic data generated with the Duality AI Falcon simulation platform.",
      },
      {
        title: "Micromouse (3rd)",
        image: "/Micro3.png",
        desc: "Designed and built an autonomous Micromouse robot capable of navigating an unknown maze by mapping its environment and computing the shortest path using embedded sensors.",
      },
    ],
  },
];

function ImageCard({ title, image }) {
  return (
    <div className="showcase-image-wrapper">
      <img src={image} alt={title} className="showcase-image" />
      <div className="image-hover-overlay">
        <h4 className="overlay-title">{title}</h4>
      </div>
    </div>
  );
}

export default function Tier1Fests() {
  return (
    <>
      {sections.map((section) => (
        section.id === "bits-apogee" ? (
          <section key={section.id} id={section.id} className="showcase-section fest-section">
            <div className="showcase-info">
              {section.kicker && <span className="showcase-kicker">{section.kicker}</span>}
              <h2 className="showcase-title">{section.title}</h2>
              <p className="showcase-desc">{section.desc}</p>
              <div className="showcase-details">
                {section.items.map((item) => (
                  <div className="detail-item" key={item.title}>
                    <div className="detail-tag">{item.title}</div>
                    <div className="detail-text">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="image-grid-2x2">
              {section.items
                .filter((item) => item.image)
                .map((item) => (
                  <ImageCard key={item.title} title={item.title} image={item.image} />
                ))}
            </div>
          </section>
        ) : (
          <ParallaxSection
            key={section.id}
            id={section.id}
            factor={section.id === "iit-bombay" ? 0.12 : 0.1}
            className="fest-subsection"
          >
            <CascadeReveal staggerMs={110}>
              <section className="showcase-section fest-section">
                <div className="showcase-info">
                  {section.kicker && <span className="showcase-kicker">{section.kicker}</span>}
                  <h2 className="showcase-title">{section.title}</h2>
                  <p className="showcase-desc">{section.desc}</p>
                  <div className="showcase-details">
                    {section.items.map((item) => (
                      <div className="detail-item" key={item.title}>
                        <div className="detail-tag">{item.title}</div>
                        <div className="detail-text">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="image-grid-2x2">
                  {section.items
                    .filter((item) => item.image)
                    .map((item) => (
                      <ImageCard key={item.title} title={item.title} image={item.image} />
                    ))}
                </div>
              </section>
            </CascadeReveal>
          </ParallaxSection>
        )
      ))}
    </>
  );
}
