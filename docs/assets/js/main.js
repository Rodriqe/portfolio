// ============================================
// PORTFOLIO MAIN SCRIPT — render bilingüe (EN/ES) desde config.js
// ============================================

const LANG_KEY = 'portfolio.lang';
let currentLang = detectLanguage();

document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang, { initial: true });
    initializeAnimations();
    initializeEvents();
});

// ---------- i18n ----------

// Preferencia guardada → idioma del navegador → default. Sin redirecciones: misma URL.
function detectLanguage() {
    const cfg = portfolioConfig;
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && cfg.languages.includes(saved)) return saved;
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return cfg.languages.includes(nav) ? nav : cfg.defaultLanguage;
}

// Devuelve el texto en el idioma actual; acepta string plano o {en, es}
function t(value, vars) {
    let s = (value && typeof value === 'object') ? (value[currentLang] ?? value[portfolioConfig.defaultLanguage] ?? '') : (value ?? '');
    if (vars) Object.keys(vars).forEach(k => { s = s.replace(new RegExp(`{{${k}}}`, 'g'), vars[k]); });
    return s;
}

function str(key, vars) {
    return t(portfolioConfig.strings[key], vars);
}

function applyLanguage(lang, opts = {}) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = str('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', str('meta.description'));

    // Textos estáticos marcados con data-i18n (y atributos con data-i18n-attr="aria-label|title")
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const vars = key === 'footer' ? { year: new Date().getFullYear() }
                   : key === 'hero.description' ? { certs: microsoftCertCountWord() } : undefined;
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) el.setAttribute(attr, str(key, vars)); else el.textContent = str(key, vars);
    });

    renderChips('areasChips', portfolioConfig.areas);
    renderChips('sectorsChips', portfolioConfig.sectors);
    renderWork();
    renderServices();
    renderTechStack();
    renderProjects();
    renderCertifications();
    updateLangToggle();

    if (!opts.initial) {
        // Las tarjetas recién renderizadas ya están en pantalla: no animar de nuevo
        document.querySelectorAll('.fade-in').forEach(el => { el.style.animation = 'none'; el.style.opacity = 1; });
    }
}

function microsoftCertCountWord() {
    const n = portfolioConfig.certifications.filter(c => /^(AZ|DP|AI|SC|PL|MS|MB)-\d{3}$/.test(c.code || '')).length;
    const words = { en: ['zero','one','two','three','four','five','six','seven','eight','nine','ten'],
                    es: ['cero','una','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'] };
    return (words[currentLang] || words.en)[n] || String(n);
}

function updateLangToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.querySelectorAll('[data-lang]').forEach(span => {
        span.classList.toggle('active', span.getAttribute('data-lang') === currentLang);
    });
    btn.setAttribute('aria-label', str('lang.switch'));
    btn.title = str('lang.switch');
}

function switchLanguage() {
    const langs = portfolioConfig.languages;
    const next = langs[(langs.indexOf(currentLang) + 1) % langs.length];
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
}

// ---------- render ----------

function renderChips(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(i => `<span>${t(i)}</span>`).join('');
    const counter = el.closest('.stat')?.querySelector('.stat-number');
    if (counter) counter.textContent = items.length;
}

function renderWork() {
    const grid = document.getElementById('workGrid');
    if (!grid || !portfolioConfig.work) return;
    grid.innerHTML = '';
    portfolioConfig.work.forEach((w, index) => {
        const card = document.createElement('article');
        card.className = 'work-card fade-in';
        card.style.animationDelay = `${index * 0.08}s`;
        card.innerHTML = `
            <span class="work-sector">${t(w.sector)}</span>
            <h3>${t(w.title)}</h3>
            <dl class="work-body">
                <dt>${str('work.challenge')}</dt><dd>${t(w.challenge)}</dd>
                <dt>${str('work.approach')}</dt><dd>${t(w.approach)}</dd>
                <dt>${str('work.outcome')}</dt><dd class="work-outcome">${t(w.outcome)}</dd>
            </dl>
            <div class="project-tags">${w.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        `;
        grid.appendChild(card);
    });
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    portfolioConfig.services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${t(service.title)}</h3>
            <p>${t(service.description)}</p>
        `;
        grid.appendChild(card);
    });
}

function renderTechStack() {
    const grid = document.getElementById('techGrid');
    if (!grid || !portfolioConfig.techStack) return;
    grid.innerHTML = '';
    portfolioConfig.techStack.forEach((group, index) => {
        const card = document.createElement('div');
        card.className = 'tech-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="tech-card-header">
                <span class="tech-icon">${group.icon}</span>
                <h3>${t(group.category)}</h3>
            </div>
            <div class="tech-pills">${group.items.map(item => `<span class="tech-pill">${item}</span>`).join('')}</div>
        `;
        grid.appendChild(card);
    });
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    portfolioConfig.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        const meta = [t(project.year), project.platform].filter(Boolean).join(' · ');
        card.innerHTML = `
            <div class="project-header">
                ${project.icon ? `<img class="project-icon" src="${project.icon}" alt="${project.title}" loading="lazy" width="56" height="56">` : ''}
                <h3>${project.title}</h3>
            </div>
            ${meta ? `<p class="project-meta">${meta}</p>` : ''}
            <div class="project-body">
                <p class="project-subtitle">${t(project.subtitle)}</p>
                <p>${t(project.description)}</p>
                <div class="project-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                ${project.appStoreUrl ? `
                <div class="project-actions">
                    <a class="project-link" href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer" aria-label="${str('projects.aria', { title: project.title })}">${str('projects.cta')}</a>
                </div>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Muestra las 3 credenciales de mayor nivel; el resto se despliega con un botón
const CERTS_VISIBLE = 3;
let certsExpanded = false;

function renderCertifications() {
    const wrap = document.getElementById('heroCerts');
    if (!wrap || !portfolioConfig.certifications) return;
    wrap.innerHTML = '';
    const certs = portfolioConfig.certifications;
    certs.forEach((cert, i) => {
        const chip = document.createElement('div');
        chip.className = 'cert-chip' + (i >= CERTS_VISIBLE && !certsExpanded ? ' cert-chip--hidden' : '');
        chip.title = cert.code ? `${t(cert.title)} · ${cert.code}` : t(cert.title);
        chip.innerHTML = `
            <img class="cert-chip-badge" src="${cert.badge}" alt="" loading="lazy" width="64" height="64">
            <span class="cert-chip-text"><strong>${t(cert.title)}</strong><small>${cert.code || cert.level || ''}</small></span>
        `;
        wrap.appendChild(chip);
    });
    if (certs.length > CERTS_VISIBLE) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cert-toggle';
        btn.setAttribute('aria-expanded', String(certsExpanded));
        btn.textContent = certsExpanded ? str('hero.certs.less') : str('hero.certs.more', { n: certs.length });
        btn.addEventListener('click', () => { certsExpanded = !certsExpanded; renderCertifications(); });
        wrap.appendChild(btn);
    }
}

// ---------- animaciones y eventos ----------

function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animationPlayState = 'running'; });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => { el.style.animationPlayState = 'paused'; observer.observe(el); });
}

function initializeEvents() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.addEventListener('click', switchLanguage);
    initializeScrollSpy();
}

function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    if (!sections.length || !navLinks.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
}
