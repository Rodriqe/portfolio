// ============================================
// PORTFOLIO — render bilingüe + interacción
// ============================================

const LANG_KEY = 'portfolio.lang';
let currentLang = detectLanguage();
let certsExpanded = false;
const CERTS_VISIBLE = 3;

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initNav();
    initReveal();
    initSpotlight();
});

// Luz que sigue al cursor en las tarjetas (.bezel) — solo con puntero fino
function initSpotlight() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.addEventListener('pointermove', e => {
        const card = e.target.closest?.('.bezel');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
}

// ---------- i18n ----------

function detectLanguage() {
    const cfg = portfolioConfig;
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && cfg.languages.includes(saved)) return saved;
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return cfg.languages.includes(nav) ? nav : cfg.defaultLanguage;
}

function t(value, vars) {
    let s = (value && typeof value === 'object') ? (value[currentLang] ?? value[portfolioConfig.defaultLanguage] ?? '') : (value ?? '');
    if (vars) Object.keys(vars).forEach(k => { s = s.split(`{{${k}}}`).join(vars[k]); });
    return s;
}
const str = (key, vars) => t(portfolioConfig.strings[key], vars);

function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = str('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', str('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const vars = key === 'footer.text' ? { year: new Date().getFullYear() } : undefined;
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) el.setAttribute(attr, str(key, vars)); else el.textContent = str(key, vars);
    });

    renderProof();
    renderFocus();
    renderMarquee();
    renderServices();
    renderApproach();
    renderGuarantees();
    renderSectors();
    renderCertifications();
    renderApps();

    document.querySelectorAll('#langToggle [data-lang]').forEach(s => s.classList.toggle('is-active', s.dataset.lang === lang));
    const toggle = document.getElementById('langToggle');
    if (toggle) { toggle.setAttribute('aria-label', str('lang.switch')); toggle.title = str('lang.switch'); }

    // Lo re-renderizado ya está en pantalla: se revela de inmediato
    requestAnimationFrame(() => document.querySelectorAll('[data-reveal]').forEach(observeReveal));
}

function switchLanguage() {
    const langs = portfolioConfig.languages;
    const next = langs[(langs.indexOf(currentLang) + 1) % langs.length];
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
}

// ---------- helpers ----------

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const arrow = () => `<span class="btn-icon" aria-hidden="true">↗</span>`;

// ---------- render ----------

function renderProof() {
    const wrap = document.getElementById('proofList');
    if (!wrap) return;
    wrap.innerHTML = portfolioConfig.proof.map(p => `
        <li><span class="proof-value">${p.value}</span><span class="proof-label">${str(p.key)}</span></li>`).join('');
}

function renderFocus() {
    const wrap = document.getElementById('focusChips');
    if (!wrap || !portfolioConfig.focus) return;
    wrap.innerHTML = portfolioConfig.focus.map((f, i) => `<li style="--i:${i}">${t(f)}</li>`).join('');
}

// Dos copias de la lista para que el bucle sea continuo
function renderMarquee() {
    const track = document.getElementById('marqueeTrack');
    if (!track || !portfolioConfig.stack) return;
    const items = portfolioConfig.stack.map(s => `<span>${s}</span>`).join('<i aria-hidden="true"></i>');
    track.innerHTML = `<div class="marquee-group">${items}<i aria-hidden="true"></i></div><div class="marquee-group" aria-hidden="true">${items}<i></i></div>`;
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    portfolioConfig.services.forEach((s, i) => {
        const card = el('article', 'bezel service');
        card.dataset.reveal = '';
        card.style.setProperty('--delay', `${i * 70}ms`);
        card.innerHTML = `
            <div class="bezel-core">
                <span class="service-num">${s.num}</span>
                <h3>${t(s.title)}</h3>
                <p class="service-desc">${t(s.description)}</p>
                <div class="service-wins">
                    <span class="meta-label">${str('services.quickwins')}</span>
                    <ul class="meta-list">${s.quickwins.map(w => `<li>${t(w)}</li>`).join('')}</ul>
                </div>
                <a class="service-link" href="${portfolioConfig.links.order}" target="_blank" rel="noopener noreferrer" aria-label="${str('services.cta')} — ${t(s.title)}">${str('services.cta')} <span aria-hidden="true">↗</span></a>
            </div>`;
        grid.appendChild(card);
    });
}

function renderApproach() {
    const wrap = document.getElementById('approachSteps');
    if (!wrap) return;
    wrap.innerHTML = '';
    portfolioConfig.approach.forEach((step, i) => {
        const li = el('li', 'step');
        li.dataset.reveal = '';
        li.style.setProperty('--delay', `${i * 90}ms`);
        li.innerHTML = `<span class="step-num">${step.num}</span><div><h3>${t(step.title)}</h3><p>${t(step.text)}</p></div>`;
        wrap.appendChild(li);
    });
}

function renderGuarantees() {
    const wrap = document.getElementById('guaranteeList');
    if (!wrap) return;
    wrap.innerHTML = portfolioConfig.guarantees.map(g => `<li>${t(g)}</li>`).join('');
}

function renderSectors() {
    const wrap = document.getElementById('sectorList');
    if (!wrap) return;
    wrap.innerHTML = portfolioConfig.sectors.map(s => `<li>${t(s)}</li>`).join('');
}

function renderCertifications() {
    const wrap = document.getElementById('certList');
    if (!wrap) return;
    wrap.innerHTML = '';
    const certs = portfolioConfig.certifications;
    certs.forEach((c, i) => {
        const li = el('li', 'cert' + (i >= CERTS_VISIBLE && !certsExpanded ? ' is-hidden' : ''));
        li.innerHTML = `<img src="${c.badge}" alt="" width="48" height="48" loading="lazy"><div><strong>${c.title}</strong><small>${c.code} · ${c.level}</small></div>`;
        wrap.appendChild(li);
    });
    const btn = document.getElementById('certToggle');
    if (btn) {
        btn.hidden = certs.length <= CERTS_VISIBLE;
        btn.setAttribute('aria-expanded', String(certsExpanded));
        btn.textContent = certsExpanded ? str('credentials.less') : str('credentials.more', { n: certs.length });
        btn.onclick = () => { certsExpanded = !certsExpanded; renderCertifications(); };
    }
}

function renderApps() {
    const wrap = document.getElementById('appList');
    if (!wrap) return;
    wrap.innerHTML = portfolioConfig.apps.map(a => `
        <li class="app">
            <img src="${a.icon}" alt="" width="56" height="56" loading="lazy">
            <div class="app-body">
                <div class="app-head"><strong>${a.title}</strong><span>${a.platform}</span></div>
                <p>${t(a.tagline)}</p>
                <a href="${a.url}" target="_blank" rel="noopener noreferrer" aria-label="${a.title} — ${str('credentials.appcta')}">${str('credentials.appcta')} <span aria-hidden="true">↗</span></a>
            </div>
        </li>`).join('');
}

// ---------- nav & motion ----------

function initNav() {
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);

    const nav = document.querySelector('.nav');
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const burger = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (burger && menu) {
        const close = () => { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); document.body.classList.remove('nav-open'); };
        burger.addEventListener('click', () => {
            const open = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!open));
            menu.classList.toggle('is-open', !open);
            document.body.classList.toggle('nav-open', !open);
        });
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
        window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Scrollspy
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(l => {
        const s = document.querySelector(l.getAttribute('href'));
        if (s) spy.observe(s);
    });
}
const spy = new IntersectionObserver(entries => {
    const links = document.querySelectorAll('.nav-menu a[href^="#"]');
    entries.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${en.target.id}`)); });
}, { rootMargin: '-40% 0px -55% 0px' });

let revealObserver;
function initReveal() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { document.documentElement.classList.add('no-motion'); return; }
    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); revealObserver.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(observeReveal);
}
function observeReveal(node) {
    if (!revealObserver || node.classList.contains('is-visible')) return;
    revealObserver.observe(node);
}
