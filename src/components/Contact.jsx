function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        <div className="section-label">
          09 / CONTACT
        </div>

        <h2>
          Let's build
          <br />
          <span>something meaningful.</span>
        </h2>

        <p className="contact-intro">
          I'm always open to interesting opportunities,
          collaborations, research discussions, and
          conversations around technology.
        </p>

        <div className="contact-actions">

          <a
            href="mailto:saisnehagunda@gmail.com"
            className="contact-primary"
          >
            <span>Get in touch</span>
            <span>↗</span>
          </a>

          <a
            href="https://github.com/Saisneha9"
            target="_blank"
            rel="noreferrer"
            className="contact-secondary"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sai-sneha-gunda-8769a7337/"
            target="_blank"
            rel="noreferrer"
            className="contact-secondary"
          >
            LinkedIn ↗
          </a>

        </div>

        <div className="contact-footer">

          <div>
            <span className="contact-meta-label">
              BASED IN
            </span>
            <p>India</p>
          </div>

          <div>
            <span className="contact-meta-label">
              FOCUS
            </span>
            <p>Software Engineering · AI</p>
          </div>

          <div>
            <span className="contact-meta-label">
              STATUS
            </span>
            <p>Open to opportunities</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;