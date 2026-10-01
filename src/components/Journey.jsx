
import { useState } from "react";
import journey from "../data/journey";

function Journey() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="journey-section" id="journey">
      <div className="section-label">
        <span>07</span>
        MY JOURNEY
      </div>

      <div className="journey-heading">
        <div>
          <p className="section-eyebrow">
            THE PATH SO FAR
          </p>

          <h2>
            Every step shapes
            <span>the engineer.</span>
          </h2>
        </div>

        <p className="journey-intro">
          A timeline of learning, experimentation
          and the experiences that continue to
          shape my engineering journey.
        </p>
      </div>

      <div className="journey-timeline">
        {journey.map((item, index) => {
          const expanded = expandedId === item.id;

          return (
            <article
              className={`journey-item ${
                expanded ? "journey-item-expanded" : ""
              }`}
              key={item.id}
            >
              <div className="journey-marker">
                <span className="journey-dot" />
                {index !== journey.length - 1 && (
                  <span className="journey-line" />
                )}
              </div>

              <div className="journey-content">
                <div className="journey-meta">
                  <span className="journey-date">
                    {item.date}
                  </span>
                  <span className="journey-period">
                    {item.period}
                  </span>
                </div>

                <button
                  type="button"
                  className="journey-title-button"
                  onClick={() =>
                    setExpandedId(
                      expanded ? null : item.id
                    )
                  }
                  aria-expanded={expanded}
                >
                  <span>{item.title}</span>
                  <span className="journey-toggle">
                    {expanded ? "−" : "↗"}
                  </span>
                </button>

                <p className="journey-description">
                  {item.description}
                </p>

                {expanded && (
                  <div className="journey-details">
                    <p>{item.details}</p>

                    <div className="journey-achievements">
                      {item.achievements.map((achievement) => (
                        <span key={achievement}>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Journey;
