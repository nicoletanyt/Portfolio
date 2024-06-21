import React from "react";
import { ABOUTME } from "../Data";

export default function AboutMePage() {
  return (
    <div>
      <div id="about-page-title" className="timeline-header-container">
        <h2>About Me</h2>
      </div>

      <div className="timeline-header-container">
        <div className="project-container about-me">
        {ABOUTME.image}
          <div>
            <p className="about-me-desc">{ABOUTME.text}</p>
            <br/>
            <a href={"mailto:nicole_tan_yitong@s2021.ssts.edu.sg"} className="contact-btn try-btn">
              <p>Contact me</p>
            </a>
          </div>
        </div>
        <span className="year-dot"></span>
        <p className="year-text-event">{ABOUTME.year}</p>
      </div>
      <br />
    </div>
  );
}
