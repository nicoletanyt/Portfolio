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
      text: "Visit SUSCITY!",
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
