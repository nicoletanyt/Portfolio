import React from "react";

export default function IntroPage() {
  return (
    <div id="intro-page">
      <div id="name-img-wrapper">
        <div id="name-wrapper">
          <h1>Hi, my name is </h1>
          <h1 id="name">Nicole Tan.</h1>
          <p>
            I'm a 15 year-old student who likes to listen to music, code, and do
            math!
          </p>
        </div>
        <img id="name-img" />
      </div>
      <div id="scroll-wrapper">
        <p className="scroll-text">SCROLL</p>
        <hr className="vertical-line" />
      </div>
    </div>
  );
}
