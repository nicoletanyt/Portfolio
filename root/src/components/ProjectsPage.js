import React from "react";
import CardItem from "./ProjectItem";
import { PROJECTS } from "../Data";

export default function ProjectsPage() {
  return (
    <div id="page-wrapper">
      <div id="proj-page-title" className="timeline-header-container">
        <h2>My Projects</h2>
      </div>
      {PROJECTS.map(function (project) {
        return (
          <div className="card-wrapper" key={project.id}>
            <CardItem
              title={project.title}
              image={project.image}
              desc={project.desc}
              tags={project.tags}
              link={project.link.url}
              linkText={project.link.text}
              year={project.year}
            />
            <hr className="separator" />
          </div>
        );
      })}
    </div>
  );
}
