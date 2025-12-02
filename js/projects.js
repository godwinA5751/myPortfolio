// projects.js - Class that uses imported data
import { projectsData } from "./projectspage.js";

export class Projects {
  constructor() {
    this.projects = projectsData;
  }

  renderProjects() {
    let projectHtml = '';
    
    this.projects.forEach((project) => {
      const hasLink = project.link && project.link !== '#';
      
      projectHtml += `
        <article class="project-card">
          <div class="project-thumb">
            <img src="${project.image || 'images/placeholder.jpg'}" 
                 alt="${project.title || 'Project'} preview" 
                 loading="lazy">
          </div>
          <h4>${project.title || 'Coming Soon'}</h4>
          <p>Tools used: ${project.tools || 'Not specified'}</p>
          <div class="project-links">
            <a href="${project.link || '#'}" 
               class="project-a ${!hasLink ? 'disabled' : ''}" 
               aria-label="View ${project.title || 'project'}"
               ${!hasLink ? 'onclick="return false;" tabindex="-1"' : ''}>
              Live
            </a>
          </div>
        </article>
      `;
    });
    
    return projectHtml;
  }

  init() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = this.renderProjects();
    }
  }
}