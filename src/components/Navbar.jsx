import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand" onClick={close}>
          <span style={{ color: 'var(--primary)' }}>ARYA</span><span style={{ color: 'var(--dark)' }}>SASTRA</span><span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#about"   className="nav-link">Tentang</a>
          <a href="#experience" className="nav-link">Karir &amp; Skill</a>
          <a href="#projects" className="nav-link">Proyek</a>
          <a href="#contact" className="neo-button">Kontak</a>
        </div>

        {/* Hamburger — MOBILE ONLY (hidden on desktop via CSS) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <a href="#about"    className="mobile-nav-link" onClick={close}>Tentang</a>
        <a href="#experience" className="mobile-nav-link" onClick={close}>Karir &amp; Skill</a>
        <a href="#projects" className="mobile-nav-link" onClick={close}>Proyek</a>
        <a href="#contact"  className="mobile-nav-link" onClick={close}>Kontak</a>
      </div>
    </nav>
  );
};

export default Navbar;
