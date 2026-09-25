import { useEffect, useRef } from "react";

function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!visualRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      visualRef.current.style.setProperty("--mouse-x", `${x}`);
      visualRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">

      <div className="hero-grid"></div>

      {/* Interactive visual */}
      <div className="hero-visual" ref={visualRef}>

        <div className="orbital orbital-one"></div>
        <div className="orbital orbital-two"></div>
        <div className="orbital orbital-three"></div>

        <div className="system-core">
          <span>SN</span>
        </div>

        <div className="system-node node-one">AI</div>
        <div className="system-node node-two">ML</div>
        <div className="system-node node-three">SE</div>
        <div className="system-node node-four">SYS</div>

        <div className="connection connection-one"></div>
        <div className="connection connection-two"></div>
        <div className="connection connection-three"></div>
        <div className="connection connection-four"></div>

      </div>

      <div className="hero-content">

        <p className="hero-eyebrow">
          COMPUTER SCIENCE × AI
        </p>

        <h1>
          Sai Sneha
          <span>Gunda.</span>
        </h1>

        <p className="hero-description">
          I build software, intelligent systems,
          and things I'm curious about.
        </p>

        <div className="hero-actions">

          <a href="#work" className="primary-button">
            Explore my work
            <span>↗</span>
          </a>

          <a href="#about" className="secondary-button">
            More about me
          </a>

        </div>

      </div>

      <div className="hero-status">
        <span className="status-dot"></span>
        Currently learning & building
      </div>

      <div className="hero-index">
        01 / 07
      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;