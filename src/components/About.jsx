function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-label">
        <span>02</span>
        ABOUT
      </div>

      <div className="about-content">

        <div className="about-heading">
          <p className="section-eyebrow">
            A LITTLE ABOUT ME
          </p>

          <h2>
            Curious about how
            <span>things work.</span>
          </h2>
        </div>

        <div className="about-text">

          <p className="about-intro">
            I'm a Computer Science (AI) undergraduate interested
            in building software systems and intelligent
            applications.
          </p>

          <p>
            I enjoy moving between different layers of technology —
            from understanding how operating systems and databases
            work to building backend systems and exploring
            artificial intelligence.
          </p>

          <p>
            I'm especially interested in the process of turning an
            idea into something that actually works: understanding
            the problem, experimenting with solutions, learning from
            what breaks, and improving it.
          </p>

        </div>

      </div>


      <div className="currently-section">

        <div className="currently-header">

          <div>
            <p className="section-eyebrow">
              RIGHT NOW
            </p>

            <h3>
              What I'm <span>exploring.</span>
            </h3>
          </div>

          <div className="currently-status">
            <span className="status-dot"></span>
            2026
          </div>

        </div>


        <div className="currently-grid">

          <div className="currently-card">

            <span className="card-number">
              01
            </span>

            <div>
              <p className="card-category">
                SYSTEMS
              </p>

              <h4>
                Operating Systems
              </h4>

              <p>
                Processes, threads, scheduling,
                synchronization and memory management.
              </p>
            </div>

          </div>


          <div className="currently-card">

            <span className="card-number">
              02
            </span>

            <div>
              <p className="card-category">
                SOFTWARE
              </p>

              <h4>
                Backend Engineering
              </h4>

              <p>
                APIs, databases, system design
                and scalable backend applications.
              </p>
            </div>

          </div>


          <div className="currently-card">

            <span className="card-number">
              03
            </span>

            <div>
              <p className="card-category">
                ARTIFICIAL INTELLIGENCE
              </p>

              <h4>
                Machine Learning
              </h4>

              <p>
                Machine learning, deep learning,
                experimentation and intelligent systems.
              </p>
            </div>

          </div>


          <div className="currently-card">

            <span className="card-number">
              04
            </span>

            <div>
              <p className="card-category">
                CLOUD
              </p>

              <h4>
                Cloud & DevOps
              </h4>

              <p>
                AWS, containers, deployment and
                modern development workflows.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;