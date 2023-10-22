import React from "react";

export default function CardItem({ title, desc, image, link, linkText, tags }) {
  return (
    <div className="timeline-header-container">
      <div className="project-container">
        {image}
        <div className="proj-text-wrapper">
          <div className="title-tag-wrapper">
            <h4>{title}</h4>
            <p>{tags}</p>
          </div>
          <p>{desc}</p>
          <a href={link} className="try-btn">
            <p>{linkText}</p>
          </a>
        </div>
      </div>
      <hr className="year-line proj-line" />
      <span className="year-dot"></span>
    </div>
  );
}
