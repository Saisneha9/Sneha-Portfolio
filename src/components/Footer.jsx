function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            SN
          </div>

          <p>
            Computer Science × AI
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#lab">Lab</a>
          <a href="#research">Research</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {currentYear} Sai Sneha Gunda
        </span>

        <span className="footer-status">
          <span className="status-dot"></span>
          Building & learning
        </span>

        <a href="#hero" className="footer-top-link">
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;