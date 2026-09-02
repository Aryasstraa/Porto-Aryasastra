import React from 'react';
import './About.css';

const bio = `Sebagai fresh graduate, saya fokus mengembangkan portofolio yang solid melalui proyek mandiri dan eksplorasi teknologi terbaru. Saya memiliki ketertarikan kuat pada Web Development, Cyber Security, Artificial Intelligence, dan Augmented Reality, serta komitmen penuh untuk terus meningkatkan keahlian (up-skilling).`;

const education = [
  { id: 1, level: 'Multimedia', period: '2019 — 2022', school: 'SMK Negeri 1 Tegallalang' },
  { id: 2, level: 'S1 Informatika', period: '2022 — 2026', school: 'Institut Bisnis dan Teknologi Indonesia' },
];

const tools = ['Git & GitHub', 'Docker', 'Postman', 'Figma', 'Linux / Ubuntu', 'SQLite',];

const About = () => {
  return (
    <section className="section bg-alt about-section" id="about">
      <div className="container">
        <div className="section-header reveal text-center">
          <span className="section-label" style={{ color: 'var(--primary)' }}>Tentang Saya</span>
          <h2 className="section-title">Profil &amp; Pendidikan</h2>
        </div>

        <div className="about-container">
          <div className="about-bio neo-card reveal stagger">
            <p className="bio-text">{bio}</p>

            <div className="tools-section">
              <h4 className="tools-title">Tools &amp; Workflow</h4>
              <div className="tools-list">
                {tools.map(t => (
                  <span className="neo-badge" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-edu reveal stagger">
            <h3 className="edu-title">Riwayat Pendidikan</h3>
            <div className="edu-grid">
              {education.map(e => (
                <div className="edu-card neo-card" key={e.id}>
                  <div className="edu-level">{e.level}</div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-period">{e.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
