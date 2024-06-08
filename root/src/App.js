import "./App.css";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import ProjectsPage from "./components/ProjectsPage";
import EventsPage from "./components/EventsPage";
import AboutMePage from "./components/AboutMePage";
import { useState, useEffect } from "react";

function App() {

  // Responsive
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const containers = document.querySelectorAll(".project-container")
    const textWrappers = document.querySelectorAll(".proj-text-wrapper")
    const dot = document.querySelectorAll(".year-dot")
    if (screenWidth < 780) {
      // show nav menu & remove flex on proj containers
      setMenuOpen(true);
      for (let i = 0; i < containers.length; ++i) {
        containers[i].style.display = "block" 
      }
      for (let i = 0; i < textWrappers.length; ++i) {
        textWrappers[i].style.width = "85%"
        containers[i].getElementsByTagName("img")[0].style.width = "50%"
      }

    } else {
      setMenuOpen(false)
      for (let i = 0; i < containers.length; ++i) {
        containers[i].style.display = "flex"
      }
      for (let i = 0; i < textWrappers.length; ++i) {
        textWrappers[i].style.width = "50%"
        containers[i].getElementsByTagName("img")[0].style.width = "30%"
      }
      
      // adjust dot absolute position
      for (let i = 0; i < dot.length; ++i) {
        // 17.5 is predefined
        dot[i].style.right = 17.5 + (screenWidth - 780) * 0.0017 + "vw" 
      }
    }

    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

  useEffect(() => {
    const dropdownBtn = document.getElementById("dropdown-btn")
    const navbar = document.getElementById("desktop-nav-container")
    if (menuOpen) {
      dropdownBtn.style.display = "block"
      navbar.style.display = "none"
    } else {
      dropdownBtn.style.display = "none"
      navbar.style.display = "flex"
    }
  }, [menuOpen]);


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
