import React from "react";
import { ACHIEVEMENTS } from "../Data";
import EventItem from "./EventItem";

export default function EventsPage() {
  return (
    <div id="page-wrapper">
      <h2 id="event-page-title">Achievements</h2>

      {Object.keys(ACHIEVEMENTS).map((category) => (
        <div>
          <div className="timeline-header-container category-label">
            <div className="year-wrapper">
              <h4 className="year-text">{category}</h4>
              <hr className="year-line" />
            </div>
          </div>
          {Object.keys(ACHIEVEMENTS[category]).map((years) =>
            ACHIEVEMENTS[category][years].map((event) =>
              category === "Science Competitions" ? (
                <EventItem
                  title={event.title}
                  year={years}
                  details={event.link}
                  key={event.title}
                />
              ) : (
                <EventItem
                  title={event}
                  year={years}
                  key={event}
                  details={null}
                />
              )
            )
          )}
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
