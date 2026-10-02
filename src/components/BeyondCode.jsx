import { useState } from "react";
import { beyondCode } from "../data/beyondCode";

function BeyondCode() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="beyond" className="beyond-section">
      <div className="beyond-heading">
        <span className="section-label">
          08 / BEYOND CODE
        </span>

        <h2>
          More than
          <br />
          <span>just engineering.</span>
        </h2>

        <p>
          The interests, ideas, and experiences
          that shape the person behind the code.
        </p>
      </div>

      <div className="beyond-grid">
        {beyondCode.map((item, index) => (
          <article
            className={`beyond-card ${
              activeCard === index ? "active" : ""
            }`}
            key={item.number}
          >
            <div className="beyond-card-top">
              <span>{item.number}</span>
              <span>{item.category}</span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="beyond-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <button
              className="beyond-toggle"
              onClick={() =>
                setActiveCard(
                  activeCard === index ? null : index
                )
              }
              aria-expanded={activeCard === index}
            >
              {activeCard === index
                ? "Close −"
                : "Explore +"}
            </button>

            {activeCard === index && (
              <div className="beyond-extra">
                <span>PERSONAL NOTE</span>
                <p>
                  Add a personal experience or a
                  meaningful detail about this interest.
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default BeyondCode;