import { useEffect } from 'react';

/**
 * useScrollReveal — Pure CSS + IntersectionObserver animation
 * Adds '.is-visible' class to elements with '[data-reveal]' attribute
 * when they scroll into view. No GSAP required.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
              el.classList.add('is-visible');
            }, Number(delay));
            // Stop observing once revealed
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
