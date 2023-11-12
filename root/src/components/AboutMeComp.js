import React from "react";

export default function AboutMeComp({ text, image, year }) {
  return (
    <div className="timeline-header-container">
      <div className="project-container about-me">
        <div>
          {text.map(function (line) {
            return <p className="about-me-desc">{line}</p>;
          })}
        </div>
        {image}
      </div>
      <span className="year-dot"></span>
      <p className="year-text-event">{year}</p>
    </div>
  );
}
