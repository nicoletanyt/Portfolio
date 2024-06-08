import React from "react";
import { ACHIEVEMENTS } from "../Data";
import EventItem from "./EventItem";
import { IMAGES } from "../Data";

export default function EventsPage() {
  return (
    <div id="page-wrapper">
      <br id="event-page-title" />
      <h2>Achievements</h2>

      {Object.keys(ACHIEVEMENTS).map((category, index) => (
        <div key={index}>
          <div className="timeline-header-container category-wrapper">
            <h4>{category}</h4>
            <div
              className={IMAGES[category].imgSrc ? "category-img-wrapper" : "category-img-wrapper full-text"}
            >
              {IMAGES[category].imgSrc ? (
                <img
                  className="category-img"
                  src={IMAGES[category].imgSrc}
                ></img>
              ) : (
                <></>
              )}
              <p className="r">{IMAGES[category].r}</p>
            </div>
            <br />
          </div>
          {Object.keys(ACHIEVEMENTS[category]).map((years) =>
            ACHIEVEMENTS[category][years].map((event) => (
              <EventItem
                title={event.title}
                year={years}
                details={event.link != null ? event.link : null}
                key={event.title}
                reflections={event.r}
                linkText={event.linkText}
              />
            ))
          )}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
