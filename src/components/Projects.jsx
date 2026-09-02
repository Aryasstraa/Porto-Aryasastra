import React, { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Aplikasi Tata Surya Edukatif (AR)',
    category: 'Proyek Interaktif & AR (Skripsi)',
    image: '/TataSurya.jpeg',
    description: 'Aplikasi edukasi pengenalan tata surya interaktif yang dibangun menggunakan teknologi Augmented Reality.',
    tech: ['Unity', 'Vuforia', 'C#'],
    link: 'https://drive.google.com/drive/folders/1t9pq5k_axAVkJRxhd28CFvRWEGeFXPrW?usp=sharing',
    github: '#',
  },
  {
    id: 2,
    title: 'Microtools - Utilitas Online',
    category: 'Proyek Mandiri',
    image: '/microtools.png',
    description: 'Platform alat bantu online untuk konversi file (seperti PNG ke PDF) dan utilitas ringan lainnya untuk produktivitas.',
    tech: ['Laravel', 'PHP', 'TailwindCSS'],
    link: 'https://microtools.my.id',
    github: '#',
  },
  {
    id: 3,
    title: 'Academic Microtools',
    category: 'Proyek Mandiri',
    image: '/academic.png',
    description: 'Website utilitas khusus mahasiswa yang membantu menghitung skor SUS, kalkulasi IPK, dan analisis data akademis.',
    tech: ['Laravel', 'MySQL', 'JavaScript'],
    link: 'https://academic.microtools.my.id',
    github: '#',
  }
];

const Projects = () => {
  const trackRef = useRef(null);
  const scrollPos = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    let animationId;
    const track = trackRef.current;
    if (track) {
      scrollPos.current = track.scrollLeft;
    }
    
    const scroll = () => {
      if (!isDragging && track) {
        scrollPos.current += 1.2; // Kecepatan scroll
        
        // Cek jika sudah mencapai akhir dari set pertama (setengah dari total scrollWidth)
        if (scrollPos.current >= track.scrollWidth / 2) {
          scrollPos.current = 0; // Reset ke awal agar infinite
        }
        track.scrollLeft = scrollPos.current;
      } else if (track) {
        // Sinkronisasi posisi jika sedang di-drag manual
        scrollPos.current = track.scrollLeft;
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  // Drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  
  const onMouseLeave = () => {
    setIsDragging(false);
  };
  
  const onMouseUp = () => {
    setIsDragging(false);
  };
  
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Kecepatan drag
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="section bg-alt projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center" data-reveal="up">
          <span className="section-label">Portofolio</span>
          <h2 className="section-title">Proyek Unggulan</h2>
        </div>
      </div>

      {/* Carousel wrapper */}
      <div 
        className="carousel-wrapper" 
        data-reveal="fade" 
        data-delay="100"
        onMouseLeave={onMouseLeave}
      >
        <div 
          className={`carousel-track ${isDragging ? 'active' : ''} stagger`}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {/* Duplikasi array untuk efek infinite loop yang mulus (2x cukup) */}
          {[...projects, ...projects].map((project, idx) => (
            <div className="project-card neo-card" key={`${project.id}-${idx}`}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" draggable="false" />
                <span className="project-category neo-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>#{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} className="neo-button secondary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={13} /> Demo
                  </a>
                  {project.github !== '#' && (
                    <a href={project.github} className="neo-button secondary" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={13} /> Kode
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
