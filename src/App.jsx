import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechUniverse from "./components/TechUniverse";
import Projects from "./components/Projects";
import LearningLab from "./components/LearningLab";
import Research from "./components/Research";
import Journey from "./components/Journey";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechUniverse />
        <Projects />
        <LearningLab />
        <Research />
        <Journey />
      </main>
    </div>
  );
}

export default App;