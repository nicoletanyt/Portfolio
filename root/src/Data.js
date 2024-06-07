import React from "react";
import SUSCITY from "./images/SUSCITY.png";
import PLANEMAIL from "./images/PLANEMAIL.png";
import ISS1 from "./images/ISS1.png";
import PIC from "./images/PFP.JPG";
import SASMO from "./images/SASMO.png";
import FLLBOT from "./images/FLLBOT.png";
import ATTACHMENT from "./images/ATTACHMENT.png";
import PLUGIN from "./images/OBSIDIAN-PLUGIN.png"
import ATTACHMENT1 from "./images/ATTACHMENT1.png"
import COURSEWORK from "./images/COURSEWORK.png"
import SSTEA from "./images/SSTEA1.png"

function generateID() {
  return Math.floor(Math.random() * 100);
}
export const PROJECTS = [
  {
    title: "SUSCITY",
    image: <img src={SUSCITY} alt="SUSCITY" />,
    desc: [
      "SUSCITY is an educational game developed by me and a few friends from school to help students visualise geography concepts. I gained collaboration skills and learned how to use GitHub in the context of coding with others. ",
    ],
    tags: "#JS",
    id: generateID(),
    link: {
      url: "https://sus-city.github.io",
      text: "Play SUSCITY!",
    },
    year: 2022,
  },
  {
    title: "PlaneMail",
    image: <img src={PLANEMAIL} alt="PLANEMAIL" />,
    desc: [
      "Developed with a few friends from the Swift Accelerator Programme, PLANEMAIL is an email planner on the go to be clear and concise to prevent miscommunication. This experience honed my communication skills, as we had to communicate to avoid merge conflicts in the same file.",
    ],
    tags: "#SWIFT",
    id: generateID(),
    link: {
      url: "https://apps.apple.com/us/app/planemail/id6444731917",
      text: "Download PlaneMail!",
    },
    year: 2022,
  },
  {
    title: "Sound Seat Ticketing",
    image: <img src={COURSEWORK} alt="Computing Coursework" />,
    desc: [
      "Sound Seat Ticketing is a voice-controlled automated movie ticket booking bot developed by me and my friends. It was designed with the visually and motor impaired in mind as well as those seeking greater convenience when booking their tickets. It targets the popular movie booking site, Cathay Cineplexes, and uses automation libraries in Python to book the tickets automatically.",
    ],
    tags: "#PYTHON",
    id: generateID(),
    link: {
      url: "https://github.com/lukeskywalker22/sound_seat_ticketing/tree/main",
      text: "View the project on Github",
    },
    year: 2023,
  },
  {
    title: "SSTea",
    image: <img src={SSTEA} alt="Obsidian Plugin" />,
    desc: [
      "SSTea is an online tower defence game I developed for FLL 2024 to promote the hobby of gardening. It allowed me apply the concepts I had learnt in game development, such as trigonometry for the rotation of the towers. The game is only available on mobile browsers (Google/Brave is recommended)",
    ],
    tags: "#JS",
    id: generateID(),
    link: {
      url: "https://nicoletanyt.github.io/SSTea/",
      text: "Check out the game!",
    },
    year: 2024,
  },
  {
    title: "Graphs in Obsidian Plugin",
    image: <img src={PLUGIN} alt="Obsidian Plugin" />,
    desc: [
      "I developed a plugin for the note-taking app, Obsidian, to plot graphs and vectors for better visualisation in your notes.",
    ],
    tags: "#REACT",
    id: generateID(),
    link: {
      url: "https://github.com/nicoletanyt/obsidian-plugin-graphs",
      text: "Check out the plugin!",
    },
    year: 2024,
  },
];

export const ACHIEVEMENTS = {
  "Science Competitions": {
    2022: [
      {
        title: "Opportunity X Science Competition: 3rd Place",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
        r: "Helped me cultivate several skills such as my communication, collaboration & time management.",
        linkText: "View my project",
      },
      {
        title: "INTOC Physics & Engineering Competition: Bronze",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
        r: "Helped me cultivate my presentation skills",
        linkText: "View my project",
      },
    ],
    2023: [
      {
        title: "Singapore Science and Engineering Fair (SSEF) 2023",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
        linkText: "View my project",
      }
    ]
  },
  "Math Competitions": {
    2023: [
      {
        title: "Singapore & Asian Schools Math Olympiad (SASMO) 2023: Bronze",
        r: "Developed critical thinking and problem solving skills.",
      },
      {
        title: "Australian Mathematics Competition 2023: Credit",
        r: "Developed critical thinking and problem solving skills.",
      },
    ],
    2024: [
      {
        title: "SASMO 2024",
        r: "Gained more experience of complex Math problems that require you to think out of the box without a calculator."
      }
    ]
  },
  "Robotics Competitions": {
    2021: [
      {
        title: "World Robot Olympiad (WRO) 2021 Regular: Judges Award",
        r: "Improved my presentation skills.",
        link: "https://wro-association.org",
        linkText: "Learn More",
      },
      {
        title: "IDE (Innovation, Design and Engineering) Robotics 2021",
        r: "Learnt how to line track in Lego",
        link: "https://ideseries.org/ide2023/",
        linkText: "Learn More",
      },
      {
        title: "First Lego League (FLL) 2021 (Cargo Connect)",
        r: "Learnt the importance of time management and learnt how to build attachments",
        link: "https://www.firstlegoleague.org",
        linkText: "Learn More",
      },
    ],
    2022: [
      {
        title: "FLL 2022 - 2023 (Super Powered)",
        r: "Learnt how to build more efficient attachments to complete missions",
      },
    ],
    2023: [
      {
        title: "World Robot Olympiad Singapore 2023 (RoboSports)",
        r: "Built and coded autonomous robots to shoot balls to the other side of the play field (aka real life tennis)."
      },
      {
        title: "FLL 2023 - 2024 (Masterpiece)",
        r: "Learnt how to use python to code the robot and developed a game (SSTea) for innovation project.",
      },
    ],
  },
  "Coding Events": {
    2022: [
      { 
        title: "CAT (Computational & Algorithmic Thinking) 2022: Top 39%", 
        r: "" 
      },
      { 
        title: "OUCC (Oxford University Computing Challenge) 2022",
        r: "" 
      },
      {
        title: "BEBRAS Computational Thinking Challenge: Honorable Mention",
        r: ""
      }
    ],
    2023: [
      {
        title: "NOI 2023 Qualifiers",
        r: "Gained more experience in C++ and learnt that we need to think outside of the box and identify patterns for an effective solution.",
      },
      {
        title: "Graduated from Swift Accelerator Programme (SAP) Class of 2022",
        r: "Got to know other coders and learnt how to code an app with others",
      },
      {
        title: "Attended 2023 Developer Week in Oakland Convention Center",
        r: "Met many experienced industry experts & practised elevator pitch in front of strangers.",
      },
      {
        title: "App Development (Associate) Certificate for Swift",
        r: "Expanded my knowledge on Swift and some ui/ux elements.",
      },
      {
        title: "AI4I® - Literacy in AI Course",
        r: "Learnt more about AI & how it works",
      },
      {
        title: "AIO 2023: Bronze",
        r: "Gained more experience on how to decompose and visualise problems to solve them.",
      },
      {
        title: "Splash Awards 2023: Participation",
        r: "Enjoyed brainstorming solutions with my friends to solve real-world problems.",
      },
      {
        title: "Merit in Perse Coding (Team Challenge) 2023 Round 1",
        r: "Gained experience in team coding events."
      },
    ],
    2024: [
      {
        title: "Distinction in Perse Coding (Team Challenge) 2024 Round 1 & 2",
        r: "Gained experience on how to work with others to solve problems under time constraints."
      },
      {
        title: "NOI 2024 Finals: Bronze",
        r: "Used C++ to solve coding questions",
      },
      {
        title: "Represented Singapore at iDEX 2024 organised by ACSI",
        r: "Got to interact with people from different countries and learnt more about their projects.",
        link: "https://github.com/lukeskywalker22/sound_seat_ticketing/tree/main",
        linkText: "View my project",
      },
    ]
  },
  Leadership: {
    2019: [
      {
        title: "Prefect EXCO Member",
        r: "Planned school events (e.g. teacher's day celebration) to hone my communication and leadership skills.",
      },
    ],
    2022: [
      {
        title: "Member of the Student Council",
        r: "Plan and help out in school events (e.g. SST Grad Tea, Leadership Investiture) to be more experienced with event planning & collaboration.",
      },
    ],
    2023: [
      {
        title: "Assistant Chief Technology Officer (iOS) of SST Inc.",
        r: "Gained more experience in teaching others Swift (part of my job was to teach Sec 1 students SwiftUI)",
      },
    ],
  },
  Academic: {
    2023: [
      {
        title: "2023 Edusave Scholarship (Independent Schools) Yearly Award (Secondary 3)"
      }
    ],
    2022: [
      {
        title: "2022 Edusave Scholarship (Independent Schools) Yearly Award (Secondary 2)"
      }
    ],
    2021: [
      {
        title: "2021 Edusave Scholarship (Independent Schools) Yearly Award (Secondary 1)"
      }
    ],
    2020: [
      {
        title: "Edusave Scholarship 2020 (Primary 6)",
      }
    ],
    2019: [
      {
        title: "Edusave Scholarship 2019 (Primary 5)",
      }, 
      {
        title: "EAGLES 2019",
      }
    ],
    2018: [
      {
        title: "Edusave Scholarship 2018 (Primary 4)",
      }
    ],
    2017: [
      {
        title: "Edusave Scholarship 2017 (Primary 3)",
      }
    ],
    2016: [
      {
        title: "Edusave Scholarship 2016 (Primary 2)",
      }
    ],
    2015: [
      {
        title: "Edusave Scholarship 2015 (Primary 1)",
      }
    ],
  }
};

export const IMAGES = {
  "Science Competitions": [
    {
      src: ISS1,
      desc: "Sketches of the experiment conducted for these competitions.",
    },
  ],
  "Math Competitions": [
    {
      src: SASMO,
      desc: "Credit: sasmo.org",
    },
  ],
  "Robotics Competitions": [
    {
      src: FLLBOT,
      desc: "My robot for FLL 2022",
    },
    {
      src: ATTACHMENT,
      desc: "An attachment I built for FLL 2022",
    },
    {
      src: ATTACHMENT1,
      desc: "An multi-functional attachment that can do 3 missions at once."
    }
  ],
};

export const ABOUTME = {
    text: "I'm Nicole Tan YiTong, a 16 year-old student currently studying in School of Science and Technology (SST) with an interest in coding, music, math, and gaming. I hope to continue learning more things and create more stuff that can benefit the community!",
    image: <img alt="Profile Pic" src={PIC} />,
    year: "2008",
}
