import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-section" data-reveal="up">
      <div className="container">
        <div className="footer-top">
          {/* Kolom 1: Brand & Bio */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span style={{ color: 'var(--primary)' }}>ARYA</span><span style={{ color: 'var(--dark)' }}>SASTRA</span><span style={{ color: 'var(--primary)' }}>.</span>
            </a>
            <p className="footer-bio">
              Software Developer yang berfokus pada solusi digital yang presisi, bersih, dan fungsional.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Aryasstraa" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aryasastraa" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:putuagusarya2004@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
              <a href="https://www.instagram.com/aryasastraaa/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul className="footer-links">
              <li><a href="#about">Tentang</a></li>
              <li><a href="#experience">Karir &amp; Skill</a></li>
              <li><a href="#projects">Proyek</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="footer-col">
            <h4>Kontak</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaEnvelope size={16} color="var(--primary)" />
                <span>putuagusarya2004@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaGithub size={16} color="var(--primary)" />
                <span>Aryasstraa</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt size={16} color="var(--primary)" />
                <span>Bali, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {year} Putu Agus Arya Sastra Sugiarta. All Rights Reserved.
          </div>
          <div>
            Thanks for Visiting . <span style={{ color: 'var(--primary)' }}>ARYA</span><span style={{ color: 'var(--dark)' }}>SASTRA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
