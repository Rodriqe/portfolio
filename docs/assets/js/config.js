// ============================================
// PORTFOLIO CONTENT — única fuente (EN/ES)
// Todo texto visible es { en, es }. main.js resuelve el idioma.
// Enfoque: vender servicios de consultoría, no describir tareas.
// ============================================

const portfolioConfig = {
    languages: ["en", "es"],
    defaultLanguage: "en",

    links: {
        linkedin: "https://www.linkedin.com/in/rigoqe/",
        github: "https://github.com/Rodriqe",
        // CTA de cada paquete. Hoy LinkedIn; con dominio propio pasa a ser mailto:/formulario/Calendly.
        order: "https://www.linkedin.com/in/rigoqe/"
    },

    // Moneda y cómo mostrar precios. price: null => "a solicitud". Ej.: price: { from: 2500 }
    pricing: { currency: "USD", show: true },

    strings: {
        "meta.title": { en: "Rodrigo Quintanilla — Packaged Azure & Microsoft Fabric consulting", es: "Rodrigo Quintanilla — Consultoría empaquetada en Azure y Microsoft Fabric" },
        "meta.description": {
            en: "Fixed-scope, fixed-duration consulting packages for Azure and Microsoft Fabric: quick scans, current-state assessments, Fabric migrations, capacity & FinOps reviews and fractional architecture. Read-only, evidence-based.",
            es: "Paquetes de consultoría de alcance y duración fijos para Azure y Microsoft Fabric: quick scans, assessments de estado actual, migraciones a Fabric, revisiones de capacidad y FinOps y arquitectura fraccional. Solo lectura, basados en evidencia."
        },
        "skip": { en: "Skip to content", es: "Saltar al contenido" },
        "nav.services": { en: "Packages", es: "Paquetes" },
        "nav.approach": { en: "How it works", es: "Cómo funciona" },
        "nav.credentials": { en: "Credentials", es: "Credenciales" },
        "nav.contact": { en: "Contact", es: "Contacto" },
        "nav.cta": { en: "Book a call", es: "Agendar llamada" },
        "lang.switch": { en: "Cambiar a español", es: "Switch to English" },

        "hero.eyebrow": { en: "Azure Solutions Architect Expert · Microsoft Fabric", es: "Azure Solutions Architect Expert · Microsoft Fabric" },
        "hero.h1.a": { en: "Consulting you can buy", es: "Consultoría que se compra" },
        "hero.h1.b": { en: "like a product:", es: "como un producto:" },
        "hero.h1.c": { en: "fixed scope, fixed time, real evidence.", es: "alcance fijo, tiempo fijo, evidencia real." },
        "hero.lead": {
            en: "Packaged assessments, migrations and capacity reviews for Azure and Microsoft Fabric. You know what you get, when you get it and what it costs — before we start. Every package is read-only by default and ends with a decision your leadership can act on.",
            es: "Assessments, migraciones y revisiones de capacidad empaquetados para Azure y Microsoft Fabric. Sabes qué recibes, cuándo y cuánto cuesta — antes de empezar. Cada paquete es de solo lectura por defecto y termina con una decisión sobre la que dirección puede actuar."
        },
        "hero.cta": { en: "Browse packages", es: "Ver paquetes" },
        "hero.cta2": { en: "Book a 30-min call", es: "Agendar 30 min" },
        "hero.card.role": { en: "Independent consultant", es: "Consultor independiente" },
        "hero.card.based": { en: "Santiago, Chile · working remotely with LATAM & US teams", es: "Santiago, Chile · trabajo remoto con equipos de LATAM y EE. UU." },
        "proof.certs": { en: "Microsoft certifications", es: "certificaciones Microsoft" },
        "proof.years": { en: "years on Azure", es: "años en Azure" },
        "proof.sectors": { en: "industries served", es: "industrias atendidas" },
        "proof.apps": { en: "apps live on the App Store", es: "apps publicadas en el App Store" },

        "services.eyebrow": { en: "Packages", es: "Paquetes" },
        "services.title": { en: "Pick the package that answers your question.", es: "Elige el paquete que responde tu pregunta." },
        "services.subtitle": { en: "Each one has a fixed scope, a fixed duration and a defined set of deliverables. Start small with a Quick Scan or go straight to the package you need.", es: "Cada uno tiene alcance fijo, duración fija y entregables definidos. Empieza pequeño con un Quick Scan o ve directo al paquete que necesitas." },
        "services.includes": { en: "Includes", es: "Incluye" },
        "services.ideal": { en: "For you if", es: "Es para ti si" },
        "services.duration": { en: "Duration", es: "Duración" },
        "services.format": { en: "Format", es: "Formato" },
        "services.price.from": { en: "From", es: "Desde" },
        "services.price.quote": { en: "Price on request", es: "Precio a solicitud" },
        "services.cta": { en: "Request this package", es: "Solicitar este paquete" },
        "services.popular": { en: "Most requested", es: "Más solicitado" },
        "services.start": { en: "Start here", es: "Empieza aquí" },

        "approach.eyebrow": { en: "How it works", es: "Cómo funciona" },
        "approach.title": { en: "Read-only first. Evidence always.", es: "Primero solo lectura. Siempre evidencia." },
        "approach.subtitle": { en: "The same four steps behind every package — proven across banking, retail, insurance and industry, and designed so nothing in your environment changes until you decide.", es: "Los mismos cuatro pasos detrás de cada paquete — probados en banca, retail, seguros e industria, y diseñados para que nada en tu ambiente cambie hasta que tú lo decidas." },

        "guarantees.title": { en: "What you can count on", es: "Con qué puedes contar" },

        "sectors.eyebrow": { en: "Experience", es: "Experiencia" },
        "sectors.title": { en: "Industries I have worked with", es: "Industrias en las que he trabajado" },

        "credentials.eyebrow": { en: "Credentials", es: "Credenciales" },
        "credentials.title": { en: "Certified where it matters — and I ship.", es: "Certificado donde importa — y además construyo." },
        "credentials.subtitle": { en: "Expert and associate Microsoft credentials in architecture, data and administration, plus native apps I design, build and publish myself.", es: "Credenciales Microsoft Expert y Associate en arquitectura, datos y administración, más apps nativas que diseño, construyo y publico yo mismo." },
        "credentials.more": { en: "Show all {{n}} certifications", es: "Ver las {{n}} certificaciones" },
        "credentials.less": { en: "Show fewer", es: "Ver menos" },
        "credentials.apps": { en: "Products on the App Store", es: "Productos en el App Store" },
        "credentials.appcta": { en: "View on the App Store", es: "Ver en el App Store" },

        "contact.eyebrow": { en: "Not sure which package?", es: "¿No sabes qué paquete?" },
        "contact.title": { en: "Tell me your question. I'll tell you the package.", es: "Cuéntame tu pregunta. Yo te digo el paquete." },
        "contact.text": { en: "A 30-minute call is enough to know whether a Quick Scan, a full assessment or a migration pack is the right first move — and to give you a fixed quote.", es: "Con 30 minutos basta para saber si el primer paso es un Quick Scan, un assessment completo o un paquete de migración — y darte una cotización fija." },
        "contact.cta": { en: "Book a 30-min call on LinkedIn", es: "Agendar 30 min por LinkedIn" },
        "contact.cta2": { en: "GitHub", es: "GitHub" },
        "footer.text": { en: "© {{year}} Rodrigo Quintanilla · Azure Solutions Architect Expert · Santiago, Chile", es: "© {{year}} Rodrigo Quintanilla · Azure Solutions Architect Expert · Santiago, Chile" }
    },

    proof: [
        { value: "7", key: "proof.certs" },
        { value: "5+", key: "proof.years" },
        { value: "8", key: "proof.sectors" },
        { value: "3", key: "proof.apps" }
    ],

    // Catálogo de paquetes. size: "lg" = celda grande del bento; badge: "start" | "popular".
    // price: null => "Precio a solicitud"; price: { from: 2500 } => "Desde USD 2.500".
    services: [
        {
            id: "quick-scan", num: "01", badge: "start",
            title: { en: "Fabric Quick Scan", es: "Fabric Quick Scan" },
            promise: { en: "A snapshot of your Power BI / Fabric estate in five business days.", es: "Una foto de tu ambiente Power BI / Fabric en cinco días hábiles." },
            description: { en: "Capacities, workspaces, access and failing refreshes, collected read-only and summarized for leadership. The fastest way to know where you stand.", es: "Capacidades, workspaces, accesos y refrescos fallidos, recolectados en solo lectura y resumidos para dirección. La forma más rápida de saber cómo estás." },
            includes: [
                { en: "Inventory of capacities, workspaces and items", es: "Inventario de capacidades, workspaces e ítems" },
                { en: "Access & failing-refresh overview", es: "Panorama de accesos y refrescos fallidos" },
                { en: "10-page executive summary + 1-hour readout", es: "Resumen ejecutivo de 10 páginas + 1 hora de lectura" }
            ],
            ideal: { en: "you need a first, credible picture before anything else.", es: "necesitas una primera foto creíble antes de cualquier otra cosa." },
            duration: { en: "5 business days", es: "5 días hábiles" },
            format: { en: "Remote · read-only", es: "Remoto · solo lectura" },
            price: null
        },
        {
            id: "assessment", num: "02", size: "lg", badge: "popular",
            title: { en: "Fabric & Azure Estate Assessment", es: "Assessment del ambiente Fabric y Azure" },
            promise: { en: "Know exactly what you have, what it costs and what to fix first.", es: "Sabe exactamente qué tienes, cuánto cuesta y qué arreglar primero." },
            description: { en: "The full radiography: capacities, workspaces, item-level access, governance gaps, failing refreshes and cost. Every finding ranked by business impact, with a plan your team can execute.", es: "La radiografía completa: capacidades, workspaces, accesos por ítem, brechas de gobierno, refrescos fallidos y costo. Cada hallazgo priorizado por impacto de negocio, con un plan que tu equipo puede ejecutar." },
            includes: [
                { en: "Everything in Quick Scan, tenant-wide", es: "Todo lo del Quick Scan, a nivel de tenant" },
                { en: "Item-level access & governance review", es: "Revisión de accesos por ítem y gobierno" },
                { en: "Executive report + technical annex", es: "Informe ejecutivo + anexo técnico" },
                { en: "Prioritized 90-day roadmap", es: "Roadmap priorizado a 90 días" },
                { en: "2 readout sessions (leadership / engineering)", es: "2 sesiones de lectura (dirección / ingeniería)" }
            ],
            ideal: { en: "you inherited a platform, plan a migration or leadership asks “where do we stand?”", es: "heredaste una plataforma, planeas una migración o dirección pregunta «¿cómo estamos?»" },
            duration: { en: "3 weeks", es: "3 semanas" },
            format: { en: "Remote · read-only · written scope & consent", es: "Remoto · solo lectura · alcance y consentimiento por escrito" },
            price: null
        },
        {
            id: "migration", num: "03",
            title: { en: "Premium → Fabric Migration Pack", es: "Paquete de migración Premium → Fabric" },
            promise: { en: "Move to Fabric with before/after proof.", es: "Múdate a Fabric con evidencia antes/después." },
            description: { en: "Plan, rebalance, execute and verify the move from Power BI Premium to Fabric capacities, with an evidence trail that proves nothing but the capacity changed.", es: "Planificar, rebalancear, ejecutar y verificar el paso de Power BI Premium a capacidades Fabric, con evidencia que demuestra que solo cambió la capacidad." },
            includes: [
                { en: "Migration & rebalancing plan", es: "Plan de migración y rebalanceo" },
                { en: "Pre-migration snapshot", es: "Snapshot previo a la migración" },
                { en: "Post-migration verification report", es: "Informe de verificación posterior" }
            ],
            ideal: { en: "your Premium capacities are ending or you consolidate regions.", es: "tus capacidades Premium terminan o consolidas regiones." },
            duration: { en: "3–6 weeks", es: "3–6 semanas" },
            format: { en: "Remote · execution with your admin", es: "Remoto · ejecución junto a tu admin" },
            price: null
        },
        {
            id: "finops", num: "04",
            title: { en: "Capacity & FinOps Review", es: "Revisión de capacidad y FinOps" },
            promise: { en: "Keep, grow or optimize — decided with real consumption data.", es: "Mantener, crecer u optimizar — decidido con consumo real." },
            description: { en: "Two weeks of capacity telemetry turned into a quantified sizing verdict and an optimization backlog, before you commit to a renewal or upgrade.", es: "Dos semanas de telemetría de capacidad convertidas en un veredicto de dimensionamiento cuantificado y un backlog de optimización, antes de comprometer una renovación o upgrade." },
            includes: [
                { en: "Consumption & throttling analysis", es: "Análisis de consumo y throttling" },
                { en: "Top consumers and refactor candidates", es: "Principales consumidores y candidatos a refactor" },
                { en: "Sizing verdict with evidence", es: "Veredicto de dimensionamiento con evidencia" }
            ],
            ideal: { en: "a renewal, upgrade or budget cut is on the table.", es: "hay una renovación, upgrade o recorte de presupuesto sobre la mesa." },
            duration: { en: "2 weeks", es: "2 semanas" },
            format: { en: "Remote · read-only", es: "Remoto · solo lectura" },
            price: null
        },
        {
            id: "architecture", num: "05",
            title: { en: "Azure Foundations Blueprint", es: "Blueprint de fundaciones Azure" },
            promise: { en: "A regulated-grade landing zone, designed once.", es: "Una landing zone de grado regulado, diseñada una sola vez." },
            description: { en: "Cloud Adoption and Well-Architected frameworks applied to your reality: identity, network, security and cost guardrails that pass audit, delivered as architecture and IaC baseline.", es: "Cloud Adoption y Well-Architected Framework aplicados a tu realidad: identidad, red, seguridad y controles de costo que pasan auditoría, entregados como arquitectura y base IaC." },
            includes: [
                { en: "Target architecture & decision log", es: "Arquitectura objetivo y registro de decisiones" },
                { en: "IaC baseline (Bicep/Terraform)", es: "Base IaC (Bicep/Terraform)" },
                { en: "Governance & security controls", es: "Controles de gobierno y seguridad" }
            ],
            ideal: { en: "you start on Azure or fix an environment that grew without design.", es: "empiezas en Azure o corriges un ambiente que creció sin diseño." },
            duration: { en: "4–8 weeks", es: "4–8 semanas" },
            format: { en: "Remote · workshops with your team", es: "Remoto · talleres con tu equipo" },
            price: null
        },
        {
            id: "advisory", num: "06",
            title: { en: "Fractional Architect", es: "Arquitecto fraccional" },
            promise: { en: "Senior judgment, a few hours a week.", es: "Criterio senior, unas horas a la semana." },
            description: { en: "Ongoing architecture reviews, standards and mentoring so your team ships with confidence — without a full-time hire.", es: "Revisiones de arquitectura, estándares y mentoría continuas para que tu equipo entregue con confianza — sin una contratación full-time." },
            includes: [
                { en: "Monthly review & decision log", es: "Revisión mensual y registro de decisiones" },
                { en: "Standards & playbooks", es: "Estándares y playbooks" },
                { en: "Async access for questions", es: "Canal asíncrono para consultas" }
            ],
            ideal: { en: "you need a second opinion you can trust, every month.", es: "necesitas una segunda opinión confiable, cada mes." },
            duration: { en: "Monthly retainer", es: "Retainer mensual" },
            format: { en: "Remote · 4–8 h / week", es: "Remoto · 4–8 h / semana" },
            price: null
        }
    ],


    approach: [
        { num: "01", title: { en: "Scope & consent", es: "Alcance y consentimiento" }, text: { en: "We agree in writing what is in scope and which minimal read-only access I get. Nothing starts before that.", es: "Acordamos por escrito el alcance y el acceso mínimo de solo lectura. Nada empieza antes." } },
        { num: "02", title: { en: "Read-only discovery", es: "Levantamiento de solo lectura" }, text: { en: "Automated, reproducible collection through the platform's own administration tooling. Zero changes to your environment.", es: "Recolección automatizada y reproducible con las herramientas de administración de la plataforma. Cero cambios en tu ambiente." } },
        { num: "03", title: { en: "Evidence & findings", es: "Evidencia y hallazgos" }, text: { en: "Every finding is tied to data you can audit, rated by business impact — not by how technical it sounds.", es: "Cada hallazgo se apoya en datos auditables y se prioriza por impacto de negocio — no por lo técnico que suene." } },
        { num: "04", title: { en: "Decision & roadmap", es: "Decisión y roadmap" }, text: { en: "An executive summary for leadership, a technical annex for engineers, and a plan your team can execute — with me or without me.", es: "Resumen ejecutivo para dirección, anexo técnico para ingeniería y un plan que tu equipo puede ejecutar — conmigo o sin mí." } }
    ],

    guarantees: [
        { en: "Read-only by default — nothing changes until you approve it", es: "Solo lectura por defecto — nada cambia hasta que lo apruebas" },
        { en: "Written scope, consent and minimal access for every engagement", es: "Alcance, consentimiento y acceso mínimo por escrito en cada servicio" },
        { en: "Evidence you can audit, not opinions", es: "Evidencia auditable, no opiniones" },
        { en: "One report for executives, one annex for engineers", es: "Un informe para dirección, un anexo para ingeniería" },
        { en: "Your data stays yours: identifiers never leave the engagement", es: "Tus datos siguen siendo tuyos: los identificadores no salen del servicio" }
    ],

    sectors: [
        { en: "Banking", es: "Banca" }, { en: "Retail", es: "Retail" }, { en: "Insurance", es: "Seguros" },
        { en: "Construction & Engineering", es: "Construcción e ingeniería" }, { en: "Food & Consumer Goods", es: "Alimentos y consumo masivo" },
        { en: "Ports & Logistics", es: "Puertos y logística" }, { en: "Government", es: "Gobierno" }, { en: "Mining", es: "Minería" }
    ],

    // Las 3 primeras siempre visibles
    certifications: [
        { badge: "assets/img/certs/az-305.png", title: "Azure Solutions Architect Expert", code: "AZ-305", level: "Expert" },
        { badge: "assets/img/certs/microsoft-associate.svg", title: "Fabric Analytics Engineer Associate", code: "DP-600", level: "Associate" },
        { badge: "assets/img/certs/az-104.png", title: "Azure Administrator Associate", code: "AZ-104", level: "Associate" },
        { badge: "assets/img/certs/dp-900.png", title: "Azure Data Fundamentals", code: "DP-900", level: "Fundamentals" },
        { badge: "assets/img/certs/ai-900.png", title: "Azure AI Fundamentals", code: "AI-900", level: "Fundamentals" },
        { badge: "assets/img/certs/az-900.png", title: "Azure Fundamentals", code: "AZ-900", level: "Fundamentals" },
        { badge: "assets/img/certs/sc-900.png", title: "Security, Compliance and Identity Fundamentals", code: "SC-900", level: "Fundamentals" },
        { badge: "assets/img/certs/smpc.png", title: "Scrum Master Professional", code: "SMPC", level: "Professional" },
        { badge: "assets/img/certs/spopc.png", title: "Scrum Product Owner Professional", code: "SPOPC", level: "Professional" }
    ],

    apps: [
        { title: "Safeplace", tagline: { en: "Private vault for files, photos and videos — on-device encryption, zero servers.", es: "Bóveda privada para archivos, fotos y videos — cifrado en el dispositivo, sin servidores." }, platform: "iOS", icon: "assets/img/apps/safeplace.png", url: "https://apps.apple.com/us/app/safeplace-vault/id6761115917" },
        { title: "FlowImage", tagline: { en: "Image converter for macOS, iPhone and iPad from one SwiftUI codebase.", es: "Conversor de imágenes para macOS, iPhone y iPad desde una sola base SwiftUI." }, platform: "macOS · iOS · iPadOS", icon: "assets/img/apps/flowimage.png", url: "https://apps.apple.com/us/app/flowimagemac/id6761324168?mt=12" },
        { title: "Time2Split", tagline: { en: "Split expenses with OCR receipt scanning and smart settlement, fully on-device.", es: "Divide gastos con escaneo OCR de boletas y liquidación inteligente, todo en el dispositivo." }, platform: "iOS", icon: "assets/img/apps/time2split.png", url: "https://apps.apple.com/us/app/time2split/id6761983454" }
    ],

    metadata: { version: "2.0.0", lastUpdated: "2026-09-02" }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
