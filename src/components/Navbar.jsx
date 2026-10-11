
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Research", href: "#research" },
  { label: "Journey", href: "#journey" },
  { label: "Beyond Code", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        href="#hero"
        className="nav-logo"
        aria-label="Sai Sneha Gunda — home"
        onClick={closeMenu}
      >
        SN
      </a>

      <button
        type="button"
        className={`nav-menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "menu-open" : ""}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-mobile-connect"
          onClick={closeMenu}
        >
          Let's Connect ↗
        </a>
      </div>

      <a href="#contact" className="nav-connect">
        Let's Connect <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
