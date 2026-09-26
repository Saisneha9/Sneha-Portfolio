import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects-section" id="work">

      <div className="section-label">
        <span>04</span>
        SELECTED WORK
      </div>

      <div className="projects-heading">

        <div>
          <p className="section-eyebrow">
            THINGS I'VE BUILT
          </p>

          <h2>
            Turning ideas into
            <span>working systems.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of projects where I explore software,
          artificial intelligence, systems and the ideas
          I'm curious about.
        </p>

      </div>

      <div className="projects-list">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <div className="project-card-header">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>

            </div>

            <div className="project-card-content">

              <div className="project-main">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.shortDescription}
                </p>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </div>

            <div className="project-footer">

              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live ↗
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;