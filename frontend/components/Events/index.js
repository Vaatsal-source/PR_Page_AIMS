"use client";

import { useState } from "react";

const eventCards = [
  {
    title: "HackDays by MLH",
    image: "/HackDays.png",
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
    title: "Build With Gemma by Google",
    image: "/Gemma.png",
  },
];

export default function Events() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + eventCards.length) % eventCards.length);
  const next = () =>
    setCurrent((c) => (c + 1) % eventCards.length);

  return (
    <section id="events" className="showcase-section events-section">
      <div className="showcase-info">
        <span className="showcase-kicker">Community Engagements</span>
        <h2 className="showcase-title">Events</h2>
        <p className="showcase-desc">
          Organised HackDays by MLH, AIMS X ACM workshops, Promptify, brAInwave 2.0,
          Quant Workshop by WorldQuant, and Build With Gemma by Google, Orientation 2025, 
        </p>
        <div className="showcase-details">
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
              13 December 2025, during CS Education Week, focused on non coding Generative AI prompt engineering.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">brAInwave 2.0</div>
            <div className="detail-text">
              A 36-hour national hackathon with 4,500+ online registrations, 600+ on ground participants, and 180+ teams.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Quant Workshop by WorldQuant</div>
            <div className="detail-text">
              Co-hosted with DTU T&amp;P for 300+ students, covering quantitative finance workflows and IQC 2026.
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-tag">Build With Gemma by Google</div>
            <div className="detail-text">
              A technical collaboration event centered on building solutions with Google&apos;s Gemma AI ecosystem.
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / Tablet: 2×2 grid (unchanged) */}
      <div className="image-grid-2x2 events-grid events-desktop-grid">
        {eventCards.map((event) => (
          <div className="showcase-image-wrapper" key={event.title}>
            <img
              src={event.image}
              alt={event.title}
              className="showcase-image"
            />
            <div className="image-hover-overlay">
              <h4 className="overlay-title">{event.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile only: Slideshow */}
      <div className="events-slideshow">
        <div className="events-slide-track">
          <div className="showcase-image-wrapper events-slide-img">
            <img
              src={eventCards[current].image}
              alt={eventCards[current].title}
              className="showcase-image"
            />
            <div className="image-hover-overlay">
              <h4 className="overlay-title">{eventCards[current].title}</h4>
            </div>
          </div>
        </div>

        {/* Slide counter */}
        <p className="events-slide-counter">
          {current + 1} / {eventCards.length}
        </p>

        {/* Navigation arrows */}
        <div className="events-slide-nav">
          <button
            className="events-slide-arrow"
            onClick={prev}
            aria-label="Previous event"
          >
            &#8592;
          </button>

          {/* Dot indicators */}
          <div className="events-slide-dots">
            {eventCards.map((_, i) => (
              <button
                key={i}
                className={`events-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="events-slide-arrow"
            onClick={next}
            aria-label="Next event"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}