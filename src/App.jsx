
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechUniverse from "./components/TechUniverse";
import Projects from "./components/Projects";
import LearningLab from "./components/LearningLab";

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
      </main>
    </div>
  );
}

export default App;