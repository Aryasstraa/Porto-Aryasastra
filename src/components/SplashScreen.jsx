import React, { useState } from 'react';
import './SplashScreen.css';

const STRIPES = 8;

const SplashScreen = ({ onEnter }) => {
  // idle          → blue splash
  // welcome       → dark overlay + WELCOME text
  // curtains-snap → curtains snap to cover (instant, no anim)
  // lifting       → curtains fly upward
  const [phase, setPhase] = useState('idle');

  const handleEnter = () => {
    if (phase !== 'idle') return;

    // 1. Dark welcome screen fades in
    setPhase('welcome');

    // 2. Curtains snap to cover (same dark color — seamless swap)
    setTimeout(() => setPhase('curtains-snap'), 1550);

    // 3. One tick later → trigger lift-up transition
    setTimeout(() => setPhase('lifting'), 1610);

    // 4. Unmount after stripes fully gone
    setTimeout(() => onEnter(), 2900);
  };

  return (
    <div className={`splash phase-${phase}`}>

      {/* ── Blue landing ── */}
      <div className="splash-content">
        <span className="sticker sticker-tl">⭐</span>
        <span className="sticker sticker-tr">🚀</span>
        <span className="sticker sticker-bl">💻</span>
        <span className="sticker sticker-br">✨</span>

        <div className="splash-card">
          <h1 className="splash-name">Arya Sastra</h1>
          <p className="splash-sub">PORTFOLIO EXPERIENCE</p>
        </div>

        <button id="splash-enter-btn" className="splash-btn" onClick={handleEnter}>
          ENTER NOW &nbsp;→
        </button>
      </div>

      {/* ── Welcome overlay ── */}
      <div className="welcome-overlay">
        <span className="welcome-text">WELCOME</span>
      </div>

      {/* ── Vertical stripe curtains ── */}
      <div className="curtains">
        {Array.from({ length: STRIPES }).map((_, i) => (
          <div key={i} className="curtain-stripe" style={{ '--i': i }} />
        ))}
      </div>

    </div>
  );
};

export default SplashScreen;
