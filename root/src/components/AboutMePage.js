import React from "react";
import AboutMeComp from "./AboutMeComp";
import { ABOUTME } from "../Data";

export default function AboutMePage() {
  return (
    <div id="page-wrapper">
      <div id="about-page-title" className="timeline-header-container">
        <h2>About Me</h2>
      </div>
      {ABOUTME.map(function (data) {
        return (
          <AboutMeComp text={data.text} image={data.image} year={data.year} />
        );
      })}
      <br />
      <br />
      <br />
    </div>
  );
}
