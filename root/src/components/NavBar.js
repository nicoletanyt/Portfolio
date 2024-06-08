import React from "react";
import { VscGithub, VscMenu } from "react-icons/vsc";
import { SiCodewars, SiLinkedin } from "react-icons/si";
import { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <div id="navbar-container">
        <div id="desktop-nav-container">
          <a href="#about-page-title">
            <h3>ABOUT ME</h3>
          </a>
          <a href="#proj-page-title">
            <h3>PROJECTS</h3>
          </a>
          <a href="#event-page-title">
            <h3>ACHIEVEMENTS</h3>
          </a>
        </div>
      <div id="mobile-nav">
        <button id="dropdown-btn">
          <VscMenu className="sidebar-icons"/>
          </button>
        <div className="dropdown">
          <a href="#about-page-title">
            <h3>ABOUT ME</h3>
          </a>
          <a href="#proj-page-title">
            <h3>PROJECTS</h3>
          </a>
          <a href="#event-page-title">
            <h3>ACHIEVEMENTS</h3>
          </a>
        </div>
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
