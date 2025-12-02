// Dark Mode functionality
export class DarkMode {
  constructor() {
    this.darkModeBtn = document.querySelector('.dark-mode, .modes');
    this.body = document.body;
    this.init();
  }

  init() {
    if (!this.darkModeBtn) return;

    // Load saved preference
    this.loadDarkModePreference();

    // Add event listener
    this.darkModeBtn.addEventListener('click', () => this.toggleDarkMode());
  }

  loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  toggleDarkMode() {
    if (this.body.classList.contains('dark')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode() {
    this.body.classList.add('dark');
    this.darkModeBtn.textContent = '🌤';
    localStorage.setItem('darkMode', 'enabled');
  }

  disableDarkMode() {
    this.body.classList.remove('dark');
    this.darkModeBtn.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
}