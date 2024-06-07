import "./App.css";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import ProjectsPage from "./components/ProjectsPage";
import EventsPage from "./components/EventsPage";
import AboutMePage from "./components/AboutMePage";
import { useEffect } from "react";

function App() {

  // useEffect(() => {
  //   const handleResize = () => {
  //     const scrollWrapper = document.getElementById('scroll-wrapper');
  //     const verticalLine = document.querySelector('.vertical-line');
  //     if (scrollWrapper && verticalLine && document.body.offsetHeight) {
  //       const fullHeight = document.body.offsetHeight - window.innerHeight
  //       console.log(document.body.offsetHeight)
  //       verticalLine.style.height = `${fullHeight}px`;
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Initial call to set the height
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div>
      <NavBar />
      <IntroPage />
      <AboutMePage />
      <ProjectsPage />
      <EventsPage />
      <div id="scroll-wrapper">
        <p className="scroll-text">SCROLL</p>
        <hr className="vertical-line" />
      </div>
    </div>
  );
}

export default App;
