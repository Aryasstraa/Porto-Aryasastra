import React from 'react';
import { FaJs, FaReact, FaLaravel, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import './TechStack.css';

const techStack = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'C#', icon: <TbBrandCSharp /> },
];

// Duplicate the array to create a seamless infinite marquee
const loopedTechs = [...techStack, ...techStack, ...techStack, ...techStack, ...techStack];

const TechStack = () => {
  return (
    <section className="tech-section" id="techstack">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '50px' }} data-reveal="up">
          <span className="section-label" style={{ color: '#f97316' }}>MAIN TECH STACK</span>
          <h2 className="section-title" style={{ color: '#111827' }}>Teknologi &amp; Bahasa Pemrograman</h2>
        </div>
      </div>

      <div className="tech-marquee" data-reveal="fade" data-delay="100">
        <div className="tech-track">
          {loopedTechs.map((tech, idx) => (
            <div className="tech-item" key={idx}>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
