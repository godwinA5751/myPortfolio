// Contact form handler
export class ContactForm {
  constructor() {
    this.contactForm = document.getElementById('contactForm');
    this.init();
  }

  init() {
    if (!this.contactForm) return;

    this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    this.submitForm();
  }

  validateForm() {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Check if elements exist
    if (!name || !phone || !email || !message) {
      this.showMessage('Form elements missing.', 'error');
      return false;
    }

    // Check required fields
    if (!name.value.trim() || !phone.value.trim() || !email.value.trim() || !message.value.trim()) {
      this.showMessage('Please fill in all fields.', 'error');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      this.showMessage('Please enter a valid email address.', 'error');
      return false;
    }

    return true;
  }

  submitForm() {
    // In a real application, you would send the form data to a server here
    // For demo purposes, we'll just show a success message
    
    this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    this.contactForm.reset();
    
    // Simulate form submission (remove in production)
    console.log('Form submitted with data:', {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    });
  }

  showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      padding: 12px;
      margin: 15px 0;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
      color: ${type === 'success' ? '#155724' : '#721c24'};
      border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
    `;

    this.contactForm.insertBefore(messageEl, this.contactForm.firstChild);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.remove();
      }
    }, 5000);
  }
}