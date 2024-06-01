import React from "react";

export default function IntroPage() {
  return (
    <div id="intro-page">
      <div id="name-img-wrapper">
        <div id="ascii-art">
            <pre>
              {`
      {   }
      }_{ __{
    .-{   }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    nicole   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'
              `}
            </pre>
          </div>
        <div id="name-wrapper">
          <h1>Hi, I'm Nicole Tan</h1>
          {/* <h1 id="name">Nicole Tan</h1> */}
          <p>A curious and adaptable learner</p>
        </div>
      </div>
      <div id="scroll-wrapper">
        <p className="scroll-text">SCROLL</p>
        <hr className="vertical-line" />
      </div>
    </div>
  );
}
