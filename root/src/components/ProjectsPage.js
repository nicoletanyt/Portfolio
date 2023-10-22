import React from "react";
import CardItem from "./ProjectItem";
import { PROJECTS } from "../Data";

export default function ProjectsPage() {
  return (
    <div id="page-wrapper">
      <div id="proj-page-title" className="timeline-header-container">
        <h2>My Projects</h2>
        <div className="year-wrapper">
          <p className="year-text">2022</p>
          <hr className="year-line" />
        </div>
      </div>
      {PROJECTS.map(function (project) {
        return (
          <div className="card-wrapper">
            <CardItem
              title={project.title}
              image={project.image}
              desc={project.desc}
              tags={project.tags}
              key={project.id}
              link={project.link.url}
              linkText={project.link.text}
            />
            <hr className="separator" />
          </div>
        );
      })}
    </div>
  );
}
