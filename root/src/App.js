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
    const categoryWrapper = document.querySelectorAll(".category-img-wrapper")

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
    }

    if (screenWidth < 800) {
      // move the reflections down 
      for (let i = 0; i < categoryWrapper.length; ++i) {
        categoryWrapper[i].style.gridTemplateColumns = "none"
        if (categoryWrapper[i].querySelector(".category-img")) {
          categoryWrapper[i].querySelector(".category-img").style.height = "100%"
          categoryWrapper[i].style.gridTemplateRows = "40% 50%"
        } else {
          categoryWrapper[i].style.gridTemplateRows = "100%"
        }
      }
    } else {
      for (let i = 0; i < categoryWrapper.length; ++i) {
        categoryWrapper[i].style.gridTemplateRows = "none"
        if (categoryWrapper[i].querySelector(".category-img")) {
          categoryWrapper[i].querySelector(".category-img").style.height = ""
          categoryWrapper[i].style.gridTemplateColumns = "40% 50%"
        } else {
          categoryWrapper[i].style.gridTemplateColumns = "100%"
        }
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
      <div id="main-page-wrapper">
        <IntroPage />
        <AboutMePage />
        <ProjectsPage />
        <EventsPage />
        <div id="scroll-wrapper">
          <p className="scroll-text">SCROLL</p>
          <hr className="vertical-line" />
        </div>
      </div>
    </div>
  );
}

export default App;
