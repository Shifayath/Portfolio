"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Portfolio({landingPages, firebaseProjects}) {
  const [type, setType] = useState("Landing Pages");
  const highlightRef = useRef(null);
  const segmentsRef = useRef({});

  useEffect(() => {
    const updateHighlight = () => {
      const activeSegment = segmentsRef.current[type];
      if (highlightRef.current && activeSegment) {
        highlightRef.current.style.width = `${activeSegment.offsetWidth}px`;
        highlightRef.current.style.left = `${activeSegment.offsetLeft}px`;
      }
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [type]);

  const handleSegmentClick = (selectedType) => {
    setType(selectedType);
  };

  const projectList =
    type === "Landing Pages" ? landingPages : firebaseProjects;

  return (
    <section className="section" id="blog">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>

        <div className="segmented-control">
          {["Landing Pages", "React Projects"].map((label) => (
            <button
              key={label}
              ref={(el) => (segmentsRef.current[label] = el)}
              className={`segment ${label === type ? "active" : ""}`}
              onClick={() => handleSegmentClick(label)}
            >
              {label}
            </button>
          ))}
          <div ref={highlightRef} className="highlight"></div>
        </div>

        <div className="cardList">
          {projectList?.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={"card"}
            >
              <img src={card.image} alt="Card" className="cardImage" />
              <p className="cardDescription">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
