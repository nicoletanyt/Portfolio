import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiCodewars, SiLinkedin } from "react-icons/si";

export default function NavBar() {
  return (
    <div id="navbar-container">
      <div>
        <div>{/* favicon */}</div>
        <h3>PROJECTS</h3>
        <h3>AWARDS</h3>
      </div>
      <div id="socials-wrapper">
        <a href="https://github.com/nicoletanyt">
          <VscGithub className="sidebar-icons" />
        </a>
        <a href="https://www.codewars.com/users/nicoletanyt">
          <SiCodewars className="sidebar-icons" />
        </a>
        <a href="https://www.linkedin.com/in/nicole-tan-a1a360266/">
          <SiLinkedin className="sidebar-icons" />
        </a>
      </div>
    </div>
  );
}
