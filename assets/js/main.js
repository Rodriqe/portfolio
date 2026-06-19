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
        
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <p>${project.subtitle}</p>
                ${projectMeta}
            </div>
            <div class="project-body">
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
// RENDERIZACIÓN DE CERTIFICACIONES
// ============================================

function renderCertifications() {
    const certsGrid = document.getElementById('certsGrid');
    
    portfolioConfig.certifications.forEach((cert, index) => {
        const badge = document.createElement('div');
        badge.className = 'cert-badge fade-in';
        badge.style.animationDelay = `${index * 0.1}s`;
        
        badge.innerHTML = `
            <h4>${cert.title}</h4>
            <p>${cert.code}</p>
        `;
        
        certsGrid.appendChild(badge);
    });
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

    // Tracking de analytics (opcional)
    trackPageView();
}

// ============================================
// UTILIDADES
// ============================================

/**
 * Registra la vista de página para analytics
 */
function trackPageView() {
    // Aquí puedes integrar con Google Analytics, Mixpanel, etc.
    console.log('Portfolio page loaded', {
        timestamp: new Date().toISOString(),
        url: window.location.href
    });
}

/**
 * Obtiene información personal
 */
function getPersonalInfo() {
    return portfolioConfig.personal;
}

/**
 * Valida formulario de contacto (si se agrega)
 */
function validateContactForm(formData) {
    const requiredFields = ['name', 'email', 'message'];
    return requiredFields.every(field => formData[field] && formData[field].trim() !== '');
}

/**
 * Copia texto al portapapeles
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

/**
 * Muestra notificación temporal
 */
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// ============================================
// ESTILOS DINÁMICOS PARA NOTIFICACIONES
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================

window.portfolioUtils = {
    getPersonalInfo,
    validateContactForm,
    copyToClipboard,
    showNotification
};
