import "./App.css";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import ProjectsPage from "./components/ProjectsPage";
import EventsPage from "./components/EventsPage";
import AboutMePage from "./components/AboutMePage";

function App() {
  return (
    <div>
      <NavBar />
      <IntroPage />
      <AboutMePage />
      <ProjectsPage />
      <EventsPage />
    </div>
  );
}

export default App;
