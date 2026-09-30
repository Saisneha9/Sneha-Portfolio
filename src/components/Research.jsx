
import { useState } from "react";
import research from "../data/research";

function Research() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="research-section" id="research">
      <div className="section-label">
        <span>06</span>
        RESEARCH
      </div>

      <div className="research-heading">
        <div>
          <p className="section-eyebrow">
            BEYOND IMPLEMENTATION
          </p>
          <h2>
            Exploring ideas.
            <span>Contributing knowledge.</span>
          </h2>
        </div>

        <p className="research-intro">
          Research is a way to explore unanswered
          questions, investigate ideas and understand
          technology more deeply.
        </p>
      </div>

      <div className="research-list">
        {research.map((paper) => {
          const expanded = expandedId === paper.id;

          return (
            <article className="research-card" key={paper.id}>
              <div className="research-card-top">
                <span className="research-number">
                  {paper.number}
                </span>
                <span className="research-category">
                  {paper.category}
                </span>
              </div>

              <h3>{paper.title}</h3>

              <p className="research-venue">
                {paper.venue}
              </p>

              <p className="research-description">
                {paper.description}
              </p>

              <div className="research-models">
                {paper.models.map((model) => (
                  <span key={model}>{model}</span>
                ))}
              </div>

              <div className="research-actions">
                <button
                  type="button"
                  className="research-toggle"
                  onClick={() =>
                    setExpandedId(
                      expanded ? null : paper.id
                    )
                  }
                  aria-expanded={expanded}
                >
                  {expanded
                    ? "Hide details −"
                    : "Explore research ↗"}
                </button>

                {paper.paperUrl && (
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="research-paper-link"
                  >
                    Read paper ↗
                  </a>
                )}
              </div>

              {expanded && (
                <div className="research-details">
                  <div>
                    <h4>Research problem</h4>
                    <p>{paper.problem}</p>
                  </div>

                  <div>
                    <h4>Methodology</h4>
                    <p>{paper.methodology}</p>
                  </div>

                  <div>
                    <h4>My contribution</h4>
                    <p>{paper.contribution}</p>
                  </div>

                  <div>
                    <h4>Findings</h4>
                    <p>{paper.findings}</p>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Research;