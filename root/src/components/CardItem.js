import React from "react";
import SUSCITY from "../images/SUSCITY.png";

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
          <p>
            {/* An Educational Geography Game to help students visualise the
            geography concept taught in class. */}
            {desc}
          </p>
          <a href={link} className="try-btn">
            {/* <p>Visit SUSCITY!</p> */}
            <p>{linkText}</p>
          </a>
        </div>
      </div>
      <hr className="year-line proj-line" />
      <span className="year-dot"></span>
    </div>
  );
}
