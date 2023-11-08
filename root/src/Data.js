import React from "react";
import SUSCITY from "./images/SUSCITY.png";
import PLANEMAIL from "./images/PLANEMAIL.png";
import ISS1 from "./images/ISS1.png";
import ISS2 from "./images/ISS2.jpeg";

function generateID() {
  return Math.floor(Math.random() * 100);
}
export const PROJECTS = [
  {
    title: "SUSCITY",
    image: <img src={SUSCITY} alt="SUSCITY" />,
    desc: [
      "An Educational Geography Game to help students visualise geography concepts.",
    ],
    tags: "#JS",
    id: generateID(),
    link: {
      url: "https://sus-city.github.io",
      text: "Play SUSCITY!",
    },
  },
  {
    title: "PlaneMail",
    image: <img src={PLANEMAIL} alt="PLANEMAIL" />,
    desc: ["Email Planner on the go to be more clear and concise."],
    tags: "#SWIFT",
    id: generateID(),
    link: {
      url: "https://apps.apple.com/us/app/planemail/id6444731917",
      text: "Download PlaneMail!",
    },
  },
];

export const ACHIEVEMENTS = {
  "Science Competitions": {
    2022: [
      {
        title: "3rd Place for Opportunity X Science Competition",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
        r: "Helped me cultivate several skills such as my communication, collaboration & time management.",
      },
      {
        title: "Bronze for INTOC Physics & Engineering Competition",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
        r: "Helped me cultivate several skills such as my communication, collaboration & time management.",
      },
    ],
  },
  "Math Competitions": {
    2023: [
      {
        title: "SASMO 2023 (Bronze)",
        r: "Developed critical thinking and problem solving skills.",
      },
      {
        title: "Australian Mathematics Competition 2023 (Credit)",
        r: "Developed critical thinking and problem solving skills.",
      },
    ],
  },
  "Robotics Competitions": {
    2021: [
      {
        title: "WRO 2021 Regular (Judges Award)",
        r: "Improved my presentation skills.",
      },
      {
        title: "IDE Robotics 2021",
        r: "Learnt how to line track in Lego",
      },
      {
        title: "First Lego League (FLL) 2021",
        r: "Learnt the importance of time management and learnt how to build attachments",
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
      { title: "CAT 2022 - (Top 39%)", r: "" },
      { title: "OUCC 2022", r: "" },
    ],
    2023: [
      { title: "NOI 2023", r: "Gained more experience in C++." },
      {
        title: "Graduated from Swift Accelerator Programme (SAP) Class of 2022",
        r: "Got to know other coders and learnt how to code an app with others",
      },
      {
        title: "Attended 2023 Developer Week in Oakland Convention Center",
        r: "Met many experienced industry experts & did elevator pitch.",
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
        title: "AIO 2023 (Bronze)",
        r: "",
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
  "Science Competitions": [ISS1, ISS2],
};

export const ABOUTME = [
  {
    text: [
      "I'm Nicole, a 15 year-old student currently studying in School of Science and Technology (SST). I'm interested in coding (especially app and game development), listening to music, and math :D",
    ],
    image: <img alt="placeholder" />,
    year: "2008",
  },
  {
    text: [
      "In primary school, I was a art/languages/music kind of person, as my Co-Curricular Activities (CCA) was Chinese Orchestra, and books were where I found comfort in after a long day of school.",
      "But nearing the end of primary school, I found a new formed passion in Math, gaming, and Rubik's Cube.",
    ],
    image: <img alt="placeholder" />,
    year: "2008",
  },
  {
    text: [
      "In 2021, I joined SST, where I got to meet like-minded people and gain many precious opportunities to hone my academic and interpersonal skills.",
    ],
    image: <img alt="placeholder" />,
    year: "2021",
  },
];
