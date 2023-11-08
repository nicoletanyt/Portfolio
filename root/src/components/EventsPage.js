import React from "react";
import { ACHIEVEMENTS } from "../Data";
import EventItem from "./EventItem";
import { IMAGES } from "../Data";
import ImgCarousel from "./ImgCarousel";

export default function EventsPage() {
  return (
    <div id="page-wrapper">
      <h2 id="event-page-title">Achievements</h2>

      {Object.keys(ACHIEVEMENTS).map((category) => (
        <div className="img-item-wrapper">
          {IMAGES[category] ? (
            <ImgCarousel imageArr={IMAGES[category]} />
          ) : (
            <div></div>
          )}
          <div>
            <div className="timeline-header-container category-label">
              <div className="year-wrapper">
                <h4 className="year-text">{category}</h4>
                <hr className="year-line" />
              </div>
            </div>
            {Object.keys(ACHIEVEMENTS[category]).map((years) =>
              ACHIEVEMENTS[category][years].map((event) => (
                // category === "Science Competitions" ? (
                <EventItem
                  title={event.title}
                  year={years}
                  details={event.link != null ? event.link : null}
                  key={event.title}
                  reflections={event.r}
                />
              ))
            )}
            <br />
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}
