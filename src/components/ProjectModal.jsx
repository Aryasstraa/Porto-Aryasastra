import React, { useEffect } from 'react';
import { 
  FaTimes, 
  FaArrowLeft, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCheckCircle, 
  FaRocket,
  FaThLarge,
  FaCode,
  FaCalendarAlt
} from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ 
  isOpen, 
  onClose, 
  projects, 
  viewMode, // 'list' | 'detail'
  selectedProject, 
  onSelectProject, 
  onBackToList 
}) => {
  // Handle ESC key and disable body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (viewMode === 'detail' && selectedProject) {
          onBackToList();
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, viewMode, selectedProject, onBackToList, onClose]);

  if (!isOpen) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div 
        className="project-modal-dialog neo-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP BAR */}
        <div className="modal-top-bar">
          {viewMode === 'detail' ? (
            <button 
              className="neo-button secondary modal-back-btn" 
              onClick={onBackToList}
            >
              <FaArrowLeft size={13} /> Kembali ke Semua Proyek
            </button>
          ) : (
            <div className="modal-title-wrap">
              <span className="neo-badge modal-badge">
                <FaThLarge size={11} /> Katalog Proyek
              </span>
              <h2 className="modal-main-title">Semua Proyek Unggulan</h2>
            </div>
          )}

          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Tutup Dialog"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="modal-body-scroll">
          {viewMode === 'list' ? (
            /* LIST VIEW (Semua Proyek) */
            <div className="all-projects-grid">
              {projects.map((proj) => (
                <div 
                  className="modal-project-card neo-card" 
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                >
                  <div className="modal-card-img-wrap">
                    <img src={proj.image} alt={proj.title} className="modal-card-img" />
                    <span className="modal-card-badge neo-badge">{proj.category}</span>
                  </div>
                  <div className="modal-card-content">
                    <h3 className="modal-card-title">{proj.title}</h3>
                    <p className="modal-card-desc">{proj.description}</p>
                    
                    <div className="modal-card-tech">
                      {proj.tech.map((t, idx) => (
                        <span className="tech-tag" key={idx}>#{t}</span>
                      ))}
                    </div>

                    <div className="modal-card-actions">
                      <button 
                        className="neo-button primary btn-detail-trigger"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(proj);
                        }}
                      >
                        Detail Proyek →
                      </button>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="neo-button secondary btn-demo-direct"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={12} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedProject ? (
            /* DETAIL VIEW (1 Proyek Terpilih) */
            <div className="project-detail-view">
              {/* Hero Image Container */}
              <div className="detail-image-container neo-card">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="detail-hero-img" 
                />
                <span className="detail-cat-badge neo-badge">{selectedProject.category}</span>
              </div>

              {/* Title & Meta Info */}
              <div className="detail-header-info">
                <h2 className="detail-title">{selectedProject.title}</h2>
                <div className="detail-tech-list">
                  {selectedProject.tech.map((t, idx) => (
                    <span className="detail-tech-pill" key={idx}>
                      <FaCode size={12} /> {t}
                    </span>
                  ))}
                  {selectedProject.year && (
                    <span className="detail-year-pill">
                      <FaCalendarAlt size={12} /> {selectedProject.year}
                    </span>
                  )}
                </div>
              </div>

              {/* Prominent Action Bar with Demo Button */}
              <div className="detail-action-bar">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-button primary detail-demo-btn"
                >
                  <FaRocket size={16} /> Buka Demo Langsung
                  <FaExternalLinkAlt size={12} style={{ marginLeft: '4px' }} />
                </a>

                {selectedProject.github && selectedProject.github !== '#' && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="neo-button secondary"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                )}
              </div>

              {/* Detailed Description */}
              <div className="detail-section-block">
                <h4 className="detail-section-title">Deskripsi Lengkap</h4>
                <p className="detail-long-desc">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Key Features List */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="detail-section-block">
                  <h4 className="detail-section-title">Fitur &amp; Kemampuan Utama</h4>
                  <ul className="detail-feature-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="detail-feature-item">
                        <FaCheckCircle className="feature-icon" size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
