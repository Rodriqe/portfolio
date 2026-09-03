// ============================================
// PORTFOLIO MAIN SCRIPT
// Maneja la renderización y interactividad
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Renderizar secciones dinámicas
    renderServices();
    renderTechStack();
    renderProjects();
    renderCertifications();
    renderCertCount();
    
    // Inicializar animaciones
    initializeAnimations();
    
    // Inicializar eventos
    initializeEvents();
});

// ============================================
// RENDERIZACIÓN DE SERVICIOS
// ============================================

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    portfolioConfig.services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        servicesGrid.appendChild(card);
    });
}

// ============================================
// RENDERIZACIÓN DE TECNOLOGÍAS Y EXPERTISE
// ============================================

function renderTechStack() {
    const techGrid = document.getElementById('techGrid');

    if (!techGrid || !portfolioConfig.techStack) {
        return;
    }

    portfolioConfig.techStack.forEach((group, index) => {
        const card = document.createElement('div');
        card.className = 'tech-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        const pillsHTML = group.items
            .map(item => `<span class="tech-pill">${item}</span>`)
            .join('');

        card.innerHTML = `
            <div class="tech-card-header">
                <span class="tech-icon">${group.icon}</span>
                <h3>${group.category}</h3>
            </div>
            <div class="tech-pills">
                ${pillsHTML}
            </div>
        `;

        techGrid.appendChild(card);
    });
}

// ============================================
// RENDERIZACIÓN DE PROYECTOS
// ============================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    portfolioConfig.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHTML = project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');

        const metaParts = [project.year, project.platform].filter(Boolean);
        const projectMeta = metaParts.length > 0
            ? `<p class="project-meta">${metaParts.join(' · ')}</p>`
            : '';

        const projectActions = project.appStoreUrl
            ? `
                <div class="project-actions">
                    <a class="project-link" href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} on the App Store">
                        View on the App Store
                    </a>
                </div>
              `
            : '';

        const projectIcon = project.icon
            ? `<img class="project-icon" src="${project.icon}" alt="${project.title} app icon" loading="lazy" width="56" height="56">`
            : '';
        
        card.innerHTML = `
            <div class="project-header">
                ${projectIcon}
                <h3>${project.title}</h3>
            </div>
            ${projectMeta}
            <div class="project-body">
                <p class="project-subtitle">${project.subtitle}</p>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                ${projectActions}
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// ============================================
// RENDERIZACIÓN DE CERTIFICACIONES (badges del hero)
// ============================================

function renderCertifications() {
    const heroCerts = document.getElementById('heroCerts');

    if (!heroCerts || !portfolioConfig.certifications) {
        return;
    }

    portfolioConfig.certifications.forEach((cert) => {
        const chip = document.createElement('div');
        chip.className = 'cert-chip';
        chip.title = cert.code ? `${cert.title} · ${cert.code}` : cert.title;

        const badgeHTML = cert.badge
            ? `<img class="cert-chip-badge" src="${cert.badge}" alt="${cert.title} badge" loading="lazy" width="64" height="64">`
            : `<span class="cert-chip-icon" aria-hidden="true">${cert.icon || '🏅'}</span>`;

        chip.innerHTML = `
            ${badgeHTML}
            <span class="cert-chip-text">
                <strong>${cert.title}</strong>
                <small>${cert.code || cert.level || ''}</small>
            </span>
        `;

        heroCerts.appendChild(chip);
    });
}

// El texto del hero ("seven Microsoft certifications") se deriva de config.js para no desincronizarse
function renderCertCount() {
    const el = document.getElementById('certCount');
    if (!el || !portfolioConfig.certifications) return;
    const microsoft = portfolioConfig.certifications.filter(c => /^(AZ|DP|AI|SC|PL|MS|MB)-\d{3}$/.test(c.code || '')).length;
    const words = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    el.textContent = words[microsoft] || String(microsoft);
}

// ============================================
// ANIMACIONES SCROLL
// ============================================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// ============================================
// EVENTOS E INTERACTIVIDAD
// ============================================

function initializeEvents() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Resaltar el link de navegación de la sección visible
    initializeScrollSpy();
}

// ============================================
// SCROLLSPY — link de navegación activo
// ============================================

function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (!sections.length || !navLinks.length) {
        return;
    }

    const setActive = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

