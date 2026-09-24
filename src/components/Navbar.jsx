function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        SN
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#lab">Lab</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-connect">
        Let's Connect ↗
      </a>
    </nav>
  );
}

export default Navbar;