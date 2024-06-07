import React, { useEffect, useState } from "react";

export default function IntroPage() {

  const [frameIndex, setFrameIndex] = useState(0)

  const frames = [
    `
     {   }
      }_{ _{
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    Nicole   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
    `
        {   }
       }_{ _{
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    nIcole   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
    `
          {  }
        }_{_ {
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    niCole   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
    `
     {   }
      }_{ _{
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    nicOle   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
    `
        {   }
       }_{ _{
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    nicoLe   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
    `
          {  }
        }_{_ {
    .-{  }   }-.
  (   }     {   )
  | \`-.._____..-'|
  |             ;--.
  |            (__  \\
  |             | )  )
  |    nicolE   |/  /
  |             /  /   
  |            (  /
  \\             y'
    \`-.._____..-'`,
  ]

  // Changing of frames for animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrameIndex(prevFrameIndex => prevFrameIndex + 1);
    }, 500);
    
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    document.getElementById("ascii-art").innerHTML = frames[frameIndex % frames.length]
  }, [frameIndex])

  return (
    <div id="intro-page">
      <div id="name-img-wrapper">
        <div>
            <pre id="ascii-art">{frames[0]}</pre>
          </div>
        <div id="name-wrapper">
          <h1>Hi, I'm Nicole Tan</h1>
          {/* <h1 id="name">Nicole Tan</h1> */}
          <p>A curious and adaptable learner</p>
        </div>
      </div>
      {/* <div id="scroll-wrapper">
        <p className="scroll-text">SCROLL</p>
        <hr className="vertical-line" />
      </div> */}
    </div>
  );
}
