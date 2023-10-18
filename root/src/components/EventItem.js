import React from "react";

export default function EventItem({ title, year, details }) {
  return (
    <div className="timeline-header-container event-item">
      <div className="event-title">
        <p>{title}</p>
        {details !== null ? (
          <a href={details} className="learn-more-wrapper">
            <p className="learn-more-text">Learn More</p>
          </a>
        ) : (
          <></>
        )}
      </div>
      <span className="year-dot"></span>
      <p className="year-text-event">{year}</p>
    </div>
  );
}
