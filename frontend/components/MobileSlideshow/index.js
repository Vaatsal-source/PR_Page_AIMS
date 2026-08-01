"use client";

import { useState } from "react";

export default function MobileSlideshow({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  if (!slides.length) {
    return null;
  }

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const active = slides[current];

  return (
    <div className="mobile-slideshow">
      <div className="slide-track">
        <div className="showcase-image-wrapper slide-img">
          <img
            src={active.image}
            alt={active.title || active.tag || `Slide ${current + 1}`}
            className="showcase-image"
          />
          <div className="image-hover-overlay">
            {active.tag ? <div className="overlay-tag">{active.tag}</div> : null}
            {active.title ? <h4 className="overlay-title">{active.title}</h4> : null}
            {active.desc ? <p className="overlay-desc">{active.desc}</p> : null}
          </div>
        </div>
      </div>

      <p className="slide-counter">
        {current + 1} / {slides.length}
      </p>

      <div className="slide-nav">
        <button
          type="button"
          className="slide-arrow"
          onClick={prev}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <div className="slide-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slide-dot${index === current ? " active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="slide-arrow"
          onClick={next}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
