import { Navigation } from "./navigation.js";
import { DarkMode } from "./darkmode.js";
import { ScrollReveal } from "./scroll-reveal.js";
import { ContactForm } from "./form-handler.js";
import { Projects } from "./projects.js";

// Main initialization file
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Initialize all components
    new Navigation();
    new DarkMode();
    new ScrollReveal();
    new ContactForm();
    
    // Initialize and render projects
    const projects = new Projects();
    projects.init();
    
  } catch (err) {
    console.error('Error initializing portfolio:', err);
  }
});