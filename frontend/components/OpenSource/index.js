"use client";

import { useState } from "react";

export default function OpenSource() {
  const slides = [
    {
      image: "/GSoC.png",
      name: "Aman Kumar",
      role: "GSoC '26 & OpenSource",
      bgText: "SMART FASTER SMART BUILDERS",
    },
    {
      image: "/Anaconda.png",
      name: "Python Dev Environment",
      role: "Anaconda is a distribution of the Python programming language (and previously also R) for scientific computing (data science, machine learning applications",
      bgText: "BUILD SMARTER, FASTER",
    },
    {
      image: "/Holoviz.png",
      name: "Holoviz",
      role: "Panel is a fully open source Python library which enables users to create interactive, web-based data dashboards.",
      bgText: "FASTER SMARTER BUILDERS",
    },
    {
      image: "/Xarray.png",
      name: "Xarray",
      role: "Xarray is a Python library for working with multi-dimensional labeled arrays.",
      bgText: "SMART BUILDERS IN MOTION",
    },
    {
      image: "/Lumen.png",
      name: "Lumen",
      role: "Lumen is a Python library for creating interactive, web-based data visualizations.",
      bgText: "SMART FASTER BUILDERS",
    },
  ];
  const [index, setIndex] = useState(0);
  const [bgText, setBgText] = useState(slides[0].bgText);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const [bgAnimating, setBgAnimating] = useState(false);

  const changeSlide = (nextIndex, dir) => {
    if (animating || nextIndex === index) return;
    setDirection(dir);
    setBgText(slides[nextIndex].bgText);
    setBgAnimating(true);
    setAnimating(true);

    window.setTimeout(() => {
      setIndex(nextIndex);
      setAnimating(false);
      setBgAnimating(false);
    }, 320);
  };

  const prev = () => changeSlide((index - 1 + slides.length) % slides.length, "prev");
  const next = () => changeSlide((index + 1) % slides.length, "next");
  const goTo = (i) => changeSlide(i, i > index ? "next" : "prev");

  return (
    <section id="opensource" className="opensource-section">
      <div className="opensource-top">
        <div className="percentage-badge">
          <span className="percentage-val">100%</span>
          <span className="percentage-caption">Student-led research &amp; open-source engineering</span>
        </div>

        <article className="badge-card">
          <span className="badge-chip">#01</span>
          <div className="badge-content">
            <h3>Trusted by serious builders</h3>
            <p>From first-year developers to national hackathon champions and published researchers, students build here because the output ships.</p>
          </div>
        </article>
      </div>

      <div className="opensource-center">
        <div className="slide-frame">
          <figure className={`center-coach-card slide ${animating ? `slide-${direction}` : ""}`} key={index}>
            <div className={`designer-bg ${bgAnimating ? "phrase-animate" : ""}`}>
              <span className="designer-phrase">{bgText}</span>
            </div>
            <img src={slides[index].image} alt={`${slides[index].name} - ${slides[index].role}`} />
            <figcaption className="coach-caption">
              <div className="coach-name">{slides[index].name}</div>
              <div className="coach-role">{slides[index].role}</div>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="opensource-controls">
        <button type="button" className="arrow-btn outline" aria-label="Previous slide" onClick={prev}>
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M5 12h14M13 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="carousel-dots dark" aria-label="Coach slides pagination">
          {slides.map((s, i) => (
            <button key={i} type="button" aria-current={i === index} onClick={() => goTo(i)}>
              <span></span>
            </button>
          ))}
        </div>
        <button type="button" className="arrow-btn solid" aria-label="Next slide" onClick={next}>
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
