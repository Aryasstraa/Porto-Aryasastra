import React from 'react';
import { FaCertificate, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const certifications = [
  { id: 1, title: 'IC3 GS6 Level 1', year: '2024', issuer: 'Certiport' },
  { id: 2, title: 'IT Specialist – Databases', year: '2026', issuer: 'Certiport' },
  { id: 3, title: 'TOEIC Listening and Reading (Score: 365)', year: '2026', issuer: 'PT International Test Center' },
];

const trainings = [
  { id: 1, title: 'Data Classification and Summarization', year: '2026', issuer: 'Hacktiv8' },
  { id: 2, title: 'Belajar Dasar Pemrograman JavaScript', year: '2024', issuer: 'Dicoding' },
  { id: 3, title: 'AI FOR SOFTWARE ENGINEER', year: '2024', issuer: 'MySkill' },
  { id: 4, title: 'SAP Analytics Cloud and SAP Build Apps Online Training Session', year: '2024', issuer: 'ASEAN Data Science Explorers' },
  { id: 5, title: 'Belajar Dasar Git dengan GitHub', year: '2023', issuer: 'Dicoding' },
];

const Experience = () => {
  return (
    <section className="section bg-dark experience-section" id="experience">
      <div className="container">

        {/* MAGANG SECTION */}
        <div className="section-header text-center" data-reveal="up">
          <span className="section-label" style={{ color: 'var(--secondary)' }}>Karir</span>
          <h2 className="section-title text-white">Magang Profesional</h2>
        </div>

        <div className="magang-container" data-reveal="up" data-delay="150">
          <div className="neo-card magang-card">
            <div className="magang-header">
              <h3>Minecraft Game Developer Intern</h3>
              <span className="neo-badge magang-year" style={{ backgroundColor: '#f59e0b', color: '#111' }}>2024</span>
            </div>
            <p className="magang-company">Hat and Cat Studio</p>
            <ul className="magang-points">
              <li>Membangun mekanik gameplay menggunakan JavaScript dan JSON.</li>
              <li>Melakukan debugging terstruktur dan optimasi performa script JSON/JS untuk stabilitas game.</li>
            </ul>
          </div>
        </div>

        {/* SERTIFIKASI SECTION */}
        <div className="section-header text-center" style={{ marginTop: '80px' }} data-reveal="up">
          <span className="section-label" style={{ color: 'var(--primary)' }}>Validasi Skill</span>
          <h2 className="section-title text-white">Sertifikasi &amp; Pelatihan</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <div
              className="cert-card neo-card"
              key={`cert-${c.id}`}
              data-reveal="up"
              data-delay={i * 80}
            >
              <div className="cert-icon-wrapper">
                <FaCertificate size={24} color="#f59e0b" />
              </div>
              <div className="cert-content">
                <h4 className="cert-title">{c.title}</h4>
                <p className="cert-issuer">{c.issuer}</p>
                <span className="cert-year">{c.year}</span>
              </div>
              <div className="cert-hover-hint">Lihat Sertifikat</div>
            </div>
          ))}

          {trainings.map((t, i) => (
            <div
              className="cert-card neo-card training-card"
              key={`train-${t.id}`}
              data-reveal="up"
              data-delay={(certifications.length + i) * 80}
            >
              <div className="cert-icon-wrapper">
                <FaLaptopCode size={24} color="#2497F3" />
              </div>
              <div className="cert-content">
                <h4 className="cert-title">{t.title}</h4>
                <p className="cert-issuer">{t.issuer}</p>
                <span className="cert-year">{t.year}</span>
              </div>
              <div className="cert-hover-hint">Lihat Sertifikat</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
