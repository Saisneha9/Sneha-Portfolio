import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechUniverse from "./components/TechUniverse";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <TechUniverse />

        <Projects />

      </main>

    </div>
  );
}

export default App;