
import { useState } from "react";
import labExperiments from "../data/labExperiments";

const categories = [
  "All",
  "Systems",
  "AI / ML",
  "Backend",
  "Database",
];

function LearningLab() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filteredExperiments =
    activeCategory === "All"
      ? labExperiments
      : labExperiments.filter(
          (experiment) =>
            experiment.category === activeCategory
        );

  const toggleExperiment = (id) => {
    setExpandedId((current) =>
      current === id ? null : id
    );
  };

  return (
    <section className="lab-section" id="lab">
      <div className="section-label">
        <span>05</span>
        LEARNING LAB
      </div>

      <div className="lab-heading">
        <div>
          <p className="section-eyebrow">
            EXPERIMENTS & EXPLORATIONS
          </p>

          <h2>
            Learning by
            <span>building things.</span>
          </h2>
        </div>

        <p className="lab-intro">
          A collection of experiments, technical
          explorations and ideas that evolve as
          I learn.
        </p>
      </div>

      <div className="lab-toolbar">
        <div className="lab-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "lab-filter active"
                  : "lab-filter"
              }
              onClick={() => {
                setActiveCategory(category);
                setExpandedId(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <span className="lab-count">
          {String(filteredExperiments.length).padStart(2, "0")}
          {" "}EXPERIMENTS
        </span>
      </div>

      <div className="lab-grid">
        {filteredExperiments.map((experiment) => {
          const isExpanded = expandedId === experiment.id;

          return (
            <article
              className={`lab-card ${
                isExpanded ? "lab-card-expanded" : ""
              }`}
              key={experiment.id}
            >
              <div className="lab-card-top">
                <span className="lab-number">
                  {experiment.number}
                </span>

                <span className="lab-status">
                  <span className="lab-status-dot" />
                  {experiment.status}
                </span>
              </div>

              <p className="lab-category">
                {experiment.category}
              </p>

              <h3>{experiment.title}</h3>

              <p className="lab-description">
                {experiment.description}
              </p>

              <div className="lab-tags">
                {experiment.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {isExpanded && (
                <div className="lab-details">
                  <div>
                    <h4>About this experiment</h4>
                    <p>{experiment.details}</p>
                  </div>

                  <div>
                    <h4>What I'm exploring</h4>
                    <p>{experiment.learning}</p>
                  </div>

                  {experiment.github && (
                    <a
                      className="lab-github"
                      href={experiment.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
              )}

              <button
                type="button"
                className="lab-expand"
                onClick={() =>
                  toggleExperiment(experiment.id)
                }
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show less −" : "Explore experiment ↗"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LearningLab;