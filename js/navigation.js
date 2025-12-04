// Navigation functionality
export class Navigation {
  constructor() {
    this.navLinks = Array.from(document.querySelectorAll('.nav__menu a'));
    this.hamburger = document.querySelector('.hamburger');
    this.navMenu = document.querySelector('.nav__menu');
    this.init();
  }

  init() {
    this.setupSmoothScroll();
    this.setupMobileMenu();
    this.setupActiveNav();
  }

  setupSmoothScroll() {
    if (this.navLinks.length) {
      this.navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href') || '';
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
          }

          this.navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          if (window.innerWidth <= 768 && this.navMenu && this.hamburger) {
            this.closeMobileMenu();
          }
        });
      });
    }
  }

  setupMobileMenu() {
    if (!this.hamburger || !this.navMenu) return;

    this.hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    const opened = this.navMenu.classList.toggle('active');
    this.hamburger.textContent = opened ? '×' : '☰';
    this.hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    document.body.classList.toggle('no-scroll');
  }

  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    this.hamburger.textContent = '☰';
    this.hamburger.setAttribute('aria-expanded', 'false');
  }

  setupActiveNav() {
    const handleActiveNav = () => {
      let current = '';
      const sections = Array.from(document.querySelectorAll('section[id]'));
      
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.id;
      });

      this.navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };

    window.addEventListener('scroll', handleActiveNav);
    window.dispatchEvent(new Event('scroll'));
  }
}