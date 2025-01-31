import React from "react";

export default function CardItem({
  title,
  desc,
  image,
  link,
  linkText,
  tags,
  year,
}) {
  return (
    <div className="timeline-header-container">
      <div className="project-container">
        {image}
        <div className="proj-text-wrapper">
          <div className="title-tag-wrapper">
            <h2>{title}</h2>
            <p>{tags}</p>
          </div>
          <p>{desc}</p>
          <a href={link} className="try-btn">
            <p>{linkText}</p>
          </a>
        </div>
      </div>
      <span className="year-dot"></span>
      <p className="year-text-event">{year}</p>
    </div>
  );
}
