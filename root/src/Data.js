import React from "react";
import SUSCITY from "./images/SUSCITY.png";
import PLANEMAIL from "./images/PLANEMAIL.png";
import ISS1 from "./images/ISS1.png";
import PIC from "./images/PFP.JPG";
import SASMO from "./images/SASMO.png";
import FLLBOT from "./images/FLLBOT.png";
import ATTACHMENT from "./images/ATTACHMENT.png";

function generateID() {
  return Math.floor(Math.random() * 100);
}
export const PROJECTS = [
  {
    title: "SUSCITY",
    image: <img src={SUSCITY} alt="SUSCITY" />,
    desc: [
      "An Educational Geography Game developed by me and a few friends from school to help students visualise geography concepts. I gained collaboration skills and learned how to use GitHub in the context of coding with others. ",
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
        r: "Helped me cultivate several skills such as my communication, collaboration & time management.",
        linkText: "View my project",
      },
    ],
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
        title: "First Lego League (FLL) 2021",
        r: "Learnt the importance of time management and learnt how to build attachments",
        link: "https://www.firstlegoleague.org",
        linkText: "Learn More",
      },
    ],
    2022: [
      {
        title: "FLL 2022",
        r: "Learnt how to build more efficient attachments to complete missions",
      },
    ],
  },
  "Coding Events": {
    2022: [
      { title: "CAT 2022: Top 39%", r: "" },
      { title: "OUCC 2022", r: "" },
    ],
    2023: [
      {
        title: "NOI 2023",
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
    ],
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
  ],
};

export const ABOUTME = [
  {
    text: [
      "I'm Nicole Tan YiTong, a 15 year-old student currently studying in School of Science and Technology (SST). I'm interested in coding (specifically app and game development), listening to music, and math :D",
    ],
    image: <img alt="Profile Pic" src={PIC} />,
    year: "2023",
  },
];
