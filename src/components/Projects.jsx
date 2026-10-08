
import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCaseStudy = (id) => {
    setExpandedId((currentId) =>
      currentId === id ? null : id
    );
  };

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
          A selection of projects where I explore
          software, artificial intelligence, systems
          and the ideas I'm curious about.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <article
              className={`project-card ${
                isExpanded ? "project-card-active" : ""
              }`}
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
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                </div>

                <button
                  type="button"
                  className={`project-arrow ${
                    isExpanded ? "project-arrow-active" : ""
                  }`}
                  onClick={() => toggleCaseStudy(project.id)}
                  aria-label={
                    isExpanded
                      ? `Close ${project.title} case study`
                      : `View ${project.title} case study`
                  }
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "−" : "↗"}
                </button>
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
                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                  {project.live &&
                    project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                </div>
              </div>

              {isExpanded && (
                <div className="case-study">
                  <div className="case-study-heading">
                    <span>PROJECT DETAILS</span>
                    <span>{project.number} / CASE STUDY</span>
                  </div>

                  <div className="case-study-overview">
                    <p className="case-study-label">
                      OVERVIEW
                    </p>
                    <p>{project.description}</p>
                  </div>

                  <div className="case-study-grid">
                    {[
                      {
                        title: "The Problem",
                        text: project.problem,
                      },
                      {
                        title: "The Solution",
                        text: project.solution,
                      },
                      {
                        title: "Architecture",
                        text: project.architecture,
                      },
                      {
                        title: "Challenges",
                        text: project.challenges,
                      },
                      {
                        title: "Results",
                        text: project.result,
                      },
                      {
                        title: "Key Learnings",
                        text: project.lessons,
                      },
                    ].map((item) => (
                      <div
                        className="case-study-item"
                        key={item.title}
                      >
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="case-study-close"
                    onClick={() => setExpandedId(null)}
                  >
                    Close case study ↑
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;