const technologies = [
  {
    category: "LANGUAGE",
    name: "Python",
    description: "AI, automation, data and problem solving.",
    tags: ["AI", "ML", "DSA"],
  },
  {
    category: "LANGUAGE",
    name: "Java",
    description: "Object-oriented programming and backend systems.",
    tags: ["OOP", "Backend", "DSA"],
  },
  {
    category: "DATABASE",
    name: "SQL",
    description: "Working with relational data and database systems.",
    tags: ["DBMS", "Queries", "Data"],
  },
  {
    category: "BACKEND",
    name: "Spring Boot",
    description: "Building structured backend applications and REST APIs.",
    tags: ["Java", "REST", "Backend"],
  },
  {
    category: "AI / ML",
    name: "Machine Learning",
    description: "Learning to build and evaluate intelligent systems.",
    tags: ["ML", "Statistics", "Python"],
  },
  {
    category: "CLOUD",
    name: "AWS",
    description: "Cloud infrastructure, deployment and services.",
    tags: ["Cloud", "EC2", "IAM"],
  },
  {
    category: "DEVOPS",
    name: "Docker",
    description: "Containerization and reproducible development environments.",
    tags: ["Containers", "DevOps"],
  },
  {
    category: "TOOLS",
    name: "Git",
    description: "Version control and collaborative software development.",
    tags: ["GitHub", "Version Control"],
  },
];

function TechUniverse() {
  return (
    <section className="tech-section" id="skills">

      <div className="section-label">
        <span>03</span>
        TECHNOLOGY
      </div>

      <div className="tech-heading">

        <div>
          <p className="section-eyebrow">
            THE TOOLS I WORK WITH
          </p>

          <h2>
            Technology is a
            <span>means, not the goal.</span>
          </h2>
        </div>

        <p className="tech-intro">
          A growing collection of languages, frameworks,
          tools and concepts I'm learning and using.
        </p>

      </div>


      <div className="tech-grid">

        {technologies.map((tech, index) => (

          <div
            className="tech-card"
            key={tech.name}
          >

            <div className="tech-card-top">

              <span className="tech-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="tech-category">
                {tech.category}
              </span>

            </div>


            <div className="tech-card-main">

              <h3>
                {tech.name}
              </h3>

              <p>
                {tech.description}
              </p>

            </div>


            <div className="tech-tags">

              {tech.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>


            <div className="tech-arrow">
              ↗
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TechUniverse;