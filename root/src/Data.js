import React from "react";
import SUSCITY from "./images/SUSCITY.png";
import PLANEMAIL from "./images/PLANEMAIL.webp";

function generateID() {
  return Math.floor(Math.random() * 100);
}
export const PROJECTS = [
  {
    title: "SUSCITY",
    image: <img src={SUSCITY} alt="SUSCITY" />,
    desc: "An Educational Geography Game to help students visualise geography concepts.",
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
    desc: "Email Planner on the go to be more clear and concise.",
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
      },
      {
        title: "Bronze for INTOC Physics & Engineering Competition",
        link: "https://sites.google.com/s2021.ssts.edu.sg/issgroupa202/home",
      },
    ],
  },
  "Math Competitions": {
    2023: ["SASMO 2023 (Bronze)", "AMC 2023 (Credit)"],
  },
  "Robotics Competitions": {
    2021: ["WRO 2021 Regular (Judges Award)", "FLL 2021", "IDE Robotics 2021"],
    2022: ["FLL 2022"],
  },
  "Coding Events": {
    2022: ["CAT 2022 - (Top 39%)", "OUCC 2022"],
    2023: [
      "NOI 2023",
      "Graduated from Swift Accelerator Programme (SAP) Class of 2022",
      "Attended 2023 Developer Week in Oakland Convention Center",
      "App Development (Associate) Certificate for Swift",
      "AI4I® - Literacy in AI Course",
      "AIO 2023 (Bronze)",
    ],
  },
};

export const ABOUTME = [
  {
    text: [
      "I'm Nicole, a 15 year-old student currently studying in School of Science and Technology (SST). I'm interested in coding (especially app and game development), listening to music, and exploring challenging math topics :D",
    ],
    image: <img />,
    year: "2008",
  },
  {
    text: [
      "In primary school, I was a rather art/languages/music kind of person, as my Co-Curricular Activities (CCA) was Chinese Orchestra, and books were where I found comfort in after a long day of school.",
      "But nearing the end of primary school, I found a new formed passion in Math, gaming, and Rubik's Cube.",
    ],
    image: <img />,
    year: "2008",
  },
  {
    text: [
      "In 2021, I joined SST, where I got to meet like-minded people and gain many precious opportunities to hone my academic and interpersonal skills.",
    ],
    image: <img />,
    year: "2021",
  },
];
