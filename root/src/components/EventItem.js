import React from "react";

export default function EventItem({
  title,
  year,
  details,
  reflections,
  linkText,
}) {
  return (
    <div className="timeline-header-container">
      <div className="event-title">
        <p>{title}</p>
        {/* <p className="r">{reflections}</p> */}
        {details !== null ? (
          <a href={details} className="learn-more-wrapper">
            <p className="learn-more-text">{linkText}</p>
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
