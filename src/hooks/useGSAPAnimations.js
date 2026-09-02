import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimations = () => {
  useEffect(() => {
    // TEMPORARY: Disable all GSAP animations
    return;
    
    let tweens = [];
    let timelines = [];
    let rafId;

    const addT = (t) => tweens.push(t);
    const addTL = (tl) => timelines.push(tl);

    // Utility: create a ScrollTrigger tween with immediateRender:false
    // so elements stay VISIBLE until the trigger fires
    const scrollFrom = (target, vars, trigger, start = 'top 82%') => {
      addT(
        gsap.from(target, {
          ...vars,
          immediateRender: false,        // ← key fix: don't hide until trigger
          scrollTrigger: {
            trigger: trigger || target,
            start,
            toggleActions: 'play none none none',
          },
        })
      );
    };

    const init = () => {
      /* ══════════════════════════════════════════
         1. NAVBAR — slides down from top
      ══════════════════════════════════════════ */
      addT(
        gsap.from('.navbar', {
          y: -80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })
      );

      /* ══════════════════════════════════════════
         2. HERO — staggered entrance
         Uses immediateRender: true (default) since
         these start right away — we want the from
         state to apply instantly.
      ══════════════════════════════════════════ */
      const heroTl = gsap.timeline({ delay: 0.2 });
      addTL(heroTl);

      heroTl
        .from('.hero-badge', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: 'back.out(1.7)',
        })
        .from('.hero-title', {
          immediateRender: true,
          y: 55,
          opacity: 0,
          duration: 1.0,
          ease: 'power3.out',
        }, '-=0.45')
        .from('.hero-subtitle', {
          immediateRender: true,
          y: 35,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
        }, '-=0.5')
        .from('.hero-actions .neo-button', {
          immediateRender: true,
          y: 25,
          opacity: 0,
          duration: 0.65,
          stagger: 0.14,
          ease: 'back.out(1.5)',
        }, '-=0.4')
        .from('.hero-image-wrapper', {
          immediateRender: true,
          x: 70,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
        }, '-=0.9');

      /* ══════════════════════════════════════════
         3. ABOUT SECTION
      ══════════════════════════════════════════ */
      scrollFrom('.about-section .section-header', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '.about-section', 'top 85%');
      
      addT(
        gsap.from('.about-bio', {
          immediateRender: false,
          scrollTrigger: { trigger: '.about-container', start: 'top 80%', toggleActions: 'play none none none' },
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      );

      addT(
        gsap.from('.about-edu', {
          immediateRender: false,
          scrollTrigger: { trigger: '.about-edu', start: 'top 85%', toggleActions: 'play none none none' },
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      );

      /* ══════════════════════════════════════════
         4. EXPERIENCE SECTION (Karir)
      ══════════════════════════════════════════ */
      scrollFrom('.experience-section .section-header', { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '.experience-section', 'top 85%');

      addT(
        gsap.from('.magang-card', {
          immediateRender: false,
          scrollTrigger: { trigger: '.magang-container', start: 'top 82%', toggleActions: 'play none none none' },
          y: 60,
          opacity: 0,
          duration: 0.75,
          ease: 'back.out(1.2)',
          clearProps: 'transform',
        })
      );

      addT(
        gsap.from('.cert-card', {
          immediateRender: false,
          scrollTrigger: { trigger: '.cert-grid', start: 'top 85%', toggleActions: 'play none none none' },
          scale: 0.9,
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform',
        })
      );

      /* ══════════════════════════════════════════
         5. PROJECTS SECTION
      ══════════════════════════════════════════ */
      scrollFrom(
        '.projects-section .section-header',
        { y: 45, opacity: 0, duration: 0.75, ease: 'power3.out' },
        '.projects-section',
        'top 82%'
      );

      addT(
        gsap.from('.carousel-wrapper', {
          immediateRender: false,
          scrollTrigger: { trigger: '.carousel-wrapper', start: 'top 80%', toggleActions: 'play none none none' },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      );

      /* ══════════════════════════════════════════
         6. TECH STACK SECTION HEADING
      ══════════════════════════════════════════ */
      scrollFrom(
        '.tech-section .section-header',
        { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' },
        '.tech-section',
        'top 85%'
      );

      /* ══════════════════════════════════════════
         10. CONTACT — split left / right
      ══════════════════════════════════════════ */
      scrollFrom('.contact-info', { x: -65, opacity: 0, duration: 0.75, ease: 'power3.out' }, '#contact', 'top 82%');
      scrollFrom('.contact-form', { x: 65,  opacity: 0, duration: 0.75, ease: 'power3.out' }, '#contact', 'top 82%');

      addT(
        gsap.from('.form-group', {
          immediateRender: false,
          scrollTrigger: { trigger: '#contact', start: 'top 78%', toggleActions: 'play none none none' },
          y: 28,
          opacity: 0,
          duration: 0.45,
          stagger: 0.09,
          ease: 'power2.out',
        })
      );

      /* ══════════════════════════════════════════
         11. SOCIAL CARDS — pop in
      ══════════════════════════════════════════ */
      addT(
        gsap.from('.social-card', {
          immediateRender: false,
          scrollTrigger: { trigger: '.social-links', start: 'top 90%', toggleActions: 'play none none none' },
          scale: 0,
          opacity: 0,
          duration: 0.38,
          stagger: 0.07,
          ease: 'back.out(2)',
        })
      );

      /* ══════════════════════════════════════════
         12. FOOTER — fade up
      ══════════════════════════════════════════ */
      scrollFrom('.footer', { y: 35, opacity: 0, duration: 0.65, ease: 'power2.out' }, '.footer', 'top 95%');

      ScrollTrigger.refresh();
    };

    // Defer one frame so React has fully painted the DOM
    rafId = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(rafId);
      tweens.forEach((t) => t.kill());
      timelines.forEach((tl) => tl.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};

export default useGSAPAnimations;
