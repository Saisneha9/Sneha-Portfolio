function Hero() {
  return (
    <section className="hero">

      <div className="hero-grid"></div>

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