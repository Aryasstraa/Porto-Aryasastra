import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="neo-badge hero-badge">
            <span className="pulse-dot"></span> Web Developer
          </span>
          <h1 className="hero-title">
            Mengubah Ide Kompleks Menjadi <br />
            <span className="text-primary">Solusi Digital Nyata.</span>
          </h1>
          <p className="hero-subtitle">
            Halo, Saya Arya Sastra. Berfokus pada pengembangan web menggunakan Laravel dan Next.js. Saya secara proaktif memperluas keterampilan teknis dengan mengeksplorasi Keamanan Siber (Cyber Security), Otomasi AI (AI Automation), Analisis Data (Data Analytics), dan Augmented Reality (AR).
          </p>
          <div className="hero-actions">
            <a href="#projects" className="neo-button">Lihat Proyek Saya</a>
            <a href="/CV%20-%20Putu%20Agus%20Arya%20Sastra%20Sugiarta.pdf" download="CV_Putu_Agus_Arya_Sastra_Sugiarta.pdf" className="neo-button secondary">⬇ Download CV</a>
            <a href="#contact" className="neo-button dark">Hubungi Saya</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-photo-card">
            <img
              src="/fotoprofile.jpeg"
              alt="Foto Profil"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
