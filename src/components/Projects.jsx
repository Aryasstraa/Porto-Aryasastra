import React, { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaThLarge } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Aplikasi Tata Surya Edukatif (AR)',
    category: 'Proyek Interaktif & AR (Skripsi)',
    year: '2026',
    image: '/TataSurya.jpeg',
    images: [
      '/TataSurya.jpeg',
      '/TataSurya-2.jpeg',
      '/TataSurya-3.jpeg',
      '/TataSurya-4.jpeg',
      '/TataSurya-5.jpeg',
      '/TataSurya-6.jpeg',
      '/TataSurya-7.jpeg'
    ],
    demoLabel: 'Demo Video & APK',
    description: 'Aplikasi edukasi pengenalan tata surya interaktif yang dibangun menggunakan teknologi Augmented Reality.',
    longDescription: 'Aplikasi edukasi interaktif berbasis mobile Augmented Reality (AR) yang dirancang untuk memvisualisasikan sistem tata surya secara 3 dimensi interaktif. Menggabungkan teknologi marker tracking untuk menghadirkan objek planet virtual tepat di hadapan pengguna, lengkap dengan rotasi, orbit revolusi, skala perbandingan, dan informasi audio-visual interaktif.',
    features: [
      'Pelacakan Marker Cepat & Stabil berbasis Augmented Reality Vuforia SDK',
      'Model 3D Planet & Matahari dengan Tekstur Realistis serta Animasi Rotasi/Revolusi',
      'Mode Eksplorasi Edukatif: Fakta astronomi, jarak orbit, diameter, dan karakteristik planet',
      'Kuis & Mini Games Edukasi untuk Menguji Pemahaman Siswa'
    ],
    tech: ['Unity', 'Vuforia', 'C#'],
    link: 'https://drive.google.com/drive/folders/1t9pq5k_axAVkJRxhd28CFvRWEGeFXPrW?usp=sharing',
    github: '#',
  },
  {
    id: 2,
    title: 'Microtools - Utilitas Online',
    category: 'Proyek Mandiri',
    year: '2024',
    image: '/microtools.png',
    images: [
      '/microtools.png',
      '/microtools-2.png',
      '/microtools-3.png',
      '/microtools-4.png',
      '/microtools-5.png'
    ],
    demoLabel: 'Buka Web',
    description: 'Platform alat bantu online untuk konversi file (seperti PNG ke PDF) dan utilitas ringan lainnya untuk produktivitas.',
    longDescription: 'Platform web serbaguna yang dirancang untuk mempercepat produktivitas harian pengguna internet melalui kumpulan alat bantu instan, responsif, dan tanpa perlu instalasi aplikasi tambahan. Berfokus pada kemudahan pengguna dan kecepatan proses konversi dokumen.',
    features: [
      'Konversi Dokumen & Gambar (seperti PNG ke format PDF berkualitas tinggi) secara instan',
      'Kompresor Foto/Gambar Cerdas untuk Menghemat Ukuran File tanpa Merusak Kualitas Visual',
      'Generator QR Code Dinamis dan Generator Format Teks/Password Instan',
      'Desain Modern, Cepat, dan Ramah Pengguna di Perangkat Mobile maupun Desktop'
    ],
    tech: ['Laravel', 'PHP', 'TailwindCSS'],
    link: 'https://microtools.my.id',
    github: '#',
  },
  {
    id: 3,
    title: 'Academic Microtools',
    category: 'Proyek Mandiri',
    year: '2024',
    image: '/academic.png',
    images: [
      '/academic.png',
      '/academic-2.png',
      '/academic-3.png',
      '/academic-4.png'
    ],
    demoLabel: 'Buka Web',
    description: 'Website utilitas khusus mahasiswa yang membantu menghitung skor SUS, kalkulasi IPK, dan analisis data akademis.',
    longDescription: 'Aplikasi web utilitas akademis khusus mahasiswa, dosen, dan peneliti UI/UX guna mempermudah kalkulasi metrik penting penelitian perkuliahan. Mengotomatisasi proses evaluasi kuantitatif seperti penghitungan System Usability Scale (SUS) otomatis dan simulasi target Indeks Prestasi Kumulatif (IPK).',
    features: [
      'Kalkulator Skor SUS Otomatis dengan Klasifikasi Grade Usability Standar Industri',
      'Simulasi & Kalkulator IPK Mahasiswa per Semester dengan Prediksi Kelulusan',
      'Export Ringkasan Hasil Analisis ke Format Ringkas Siap Lampiran Laporan Skripsi',
      'Antarmuka Ringan, Cepat, dan Terintegrasi dengan Penyimpanan Data yang Aman'
    ],
    tech: ['Laravel', 'MySQL', 'JavaScript'],
    link: 'https://academic.microtools.my.id',
    github: '#',
  }
];

const Projects = () => {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const scrollPos = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalViewMode, setModalViewMode] = useState('list'); // 'list' | 'detail'
  const [selectedProject, setSelectedProject] = useState(null);

  // Open All Projects Modal
  const handleOpenAllProjects = () => {
    setSelectedProject(null);
    setModalViewMode('list');
    setIsModalOpen(true);
  };

  // Open Specific Project Detail Modal
  const handleOpenDetail = (project) => {
    setSelectedProject(project);
    setModalViewMode('detail');
    setIsModalOpen(true);
  };

  // Back to All Projects list
  const handleBackToList = () => {
    setModalViewMode('list');
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Auto-scroll logic
  useEffect(() => {
    let animationId;
    const track = trackRef.current;
    const group = groupRef.current;
    if (track) {
      scrollPos.current = track.scrollLeft;
    }

    const scroll = () => {
      if (!isDragging && track && group) {
        scrollPos.current += 1.2; // Kecepatan scroll

        // Lebar satu grup penuh (termasuk gap antar grup yang besarnya 24px)
        const setWidth = group.offsetWidth + 24;

        // Jika sudah scroll sejauh 1 grup, reset posisinya (dikurangi setWidth agar sangat mulus/tidak ada lompatan pixel)
        if (scrollPos.current >= setWidth) {
          scrollPos.current -= setWidth;
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

  const renderGroup = (isFirst = false, groupIndex) => (
    <div className="carousel-group" ref={isFirst ? groupRef : null} key={groupIndex}>
      {projects.map((project, idx) => (
        <div className="project-card neo-card" key={`${project.id}-${groupIndex}-${idx}`}>
          <div
            className="project-image-wrapper"
            onClick={() => handleOpenDetail(project)}
            title="Klik untuk melihat detail proyek"
          >
            <img src={project.image} alt={project.title} className="project-image" draggable="false" />
            <span className="project-category neo-badge">{project.category}</span>
          </div>

          <div className="project-content">
            <h3
              className="project-title clickable-title"
              onClick={() => handleOpenDetail(project)}
              title="Klik untuk melihat detail proyek"
            >
              {project.title}
            </h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span className="tech-tag" key={i}>#{t}</span>
              ))}
            </div>

            <div className="project-links">
              <button
                type="button"
                className="neo-button secondary btn-card-detail"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDetail(project);
                }}
              >
                <FaInfoCircle size={13} /> Detail
              </button>

              <a
                href={project.link}
                className="neo-button secondary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={13} /> Demo
              </a>

              {project.github !== '#' && (
                <a
                  href={project.github}
                  className="neo-button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={13} /> Kode
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* 4 Grup duplikat untuk memastikan layar ultrawide tidak kehabisan konten sebelum reset */}
          {renderGroup(true, 1)}
          {renderGroup(false, 2)}
          {renderGroup(false, 3)}
          {renderGroup(false, 4)}
        </div>
      </div>

      {/* Action Button to View All Projects & Details */}
      <div className="projects-action-footer text-center" data-reveal="up" data-delay="150">
        <button
          type="button"
          className="neo-button primary btn-view-all-projects"
          onClick={handleOpenAllProjects}
        >
          <FaThLarge size={15} /> Jelajahi Semua Detail Proyek
        </button>
      </div>

      {/* Project Modal (Catalog & Single Detail) */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projects={projects}
        viewMode={modalViewMode}
        selectedProject={selectedProject}
        onSelectProject={handleOpenDetail}
        onBackToList={handleBackToList}
      />
    </section>
  );
};

export default Projects;
