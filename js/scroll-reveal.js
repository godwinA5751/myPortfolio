// Scroll reveal animation
export class ScrollReveal {
  constructor() {
    this.elements = Array.from(document.querySelectorAll('.reveal'));
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      this.revealAll();
      return;
    }

    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const delay = parseInt(el.dataset.revealDelay, 10) || 0;

        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('in-view');
        } else {
          // Optional: remove class when element leaves viewport
          // el.classList.remove('in-view');
          // el.style.transitionDelay = '';
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });

    this.elements.forEach(el => io.observe(el));
  }

  revealAll() {
    this.elements.forEach((el, idx) => {
      const delay = parseInt(el.dataset.revealDelay, 10) || (idx * 80);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in-view');
    });
  }
}