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
        // CTA "Consultar por esto" de cada servicio. Hoy LinkedIn; con dominio propio: mailto:/formulario/Calendly.
        order: "https://www.linkedin.com/in/rigoqe/"
    },


    strings: {
        "meta.title": { en: "Rodrigo Quintanilla — Azure Solutions Architect & Microsoft Fabric consultant", es: "Rodrigo Quintanilla — Arquitecto de soluciones Azure y consultor Microsoft Fabric" },
        "meta.description": { en: "Azure Solutions Architect Expert based in Santiago, Chile. Assessments, migrations, capacity sizing and cloud architecture for Azure and Microsoft Fabric, delivered read-only and with evidence leadership can act on.", es: "Azure Solutions Architect Expert en Santiago, Chile. Assessments, migraciones, dimensionamiento de capacidad y arquitectura cloud para Azure y Microsoft Fabric, en solo lectura y con evidencia sobre la que dirección puede actuar." },
        "skip": { en: "Skip to content", es: "Saltar al contenido" },
        "nav.services": { en: "Services", es: "Servicios" },
        "nav.approach": { en: "How I work", es: "Cómo trabajo" },
        "nav.credentials": { en: "Credentials", es: "Credenciales" },
        "nav.contact": { en: "Contact", es: "Contacto" },
        "nav.cta": { en: "Let's talk", es: "Hablemos" },
        "lang.switch": { en: "Cambiar a español", es: "Switch to English" },

        "hero.eyebrow": { en: "Azure Solutions Architect Expert · Santiago, Chile", es: "Azure Solutions Architect Expert · Santiago, Chile" },
        "hero.h1.a": { en: "I help organizations", es: "Ayudo a organizaciones a" },
        "hero.h1.b": { en: "see, move and right‑size", es: "ver, mover y dimensionar" },
        "hero.h1.c": { en: "their Azure & Fabric platforms.", es: "sus plataformas Azure y Fabric." },
        "hero.lead": { en: "Independent architect with more than five years on Microsoft Azure, working with banks, retailers, insurers and industrial companies. I assess data platforms, lead migrations to Microsoft Fabric and size capacity with real consumption data — always read-only first, always with evidence your leadership can decide on. On the side, I design and ship native Apple apps.", es: "Arquitecto independiente con más de cinco años en Microsoft Azure, trabajando con bancos, retailers, aseguradoras e industria. Evalúo plataformas de datos, lidero migraciones a Microsoft Fabric y dimensiono capacidad con consumo real — siempre en solo lectura primero, siempre con evidencia sobre la que dirección puede decidir. Además, diseño y publico apps nativas para Apple." },
        "hero.cta": { en: "See what I do", es: "Ver qué hago" },
        "hero.cta2": { en: "Talk on LinkedIn", es: "Hablemos por LinkedIn" },
        "hero.card.role": { en: "Azure Solutions Architect Expert", es: "Azure Solutions Architect Expert" },
        "hero.card.based": { en: "Santiago, Chile · working remotely with LATAM & US teams", es: "Santiago, Chile · trabajo remoto con equipos de LATAM y EE. UU." },
        "proof.certs": { en: "Microsoft certifications", es: "certificaciones Microsoft" },
        "proof.years": { en: "years on Azure", es: "años en Azure" },
        "proof.sectors": { en: "industries served", es: "industrias atendidas" },
        "proof.apps": { en: "apps live on the App Store", es: "apps publicadas en el App Store" },

        "services.eyebrow": { en: "Services", es: "Servicios" },
        "services.title": { en: "What I can do for your platform.", es: "Qué puedo hacer por tu plataforma." },
        "services.subtitle": { en: "Eight ways I usually help. Each starts read-only, is scoped in writing and ends with something your team can act on the same week.", es: "Ocho formas en que suelo ayudar. Cada una empieza en solo lectura, se acota por escrito y termina con algo que tu equipo puede aplicar la misma semana." },
        "services.cta": { en: "Ask about this", es: "Consultar por esto" },

        "approach.eyebrow": { en: "How I work", es: "Cómo trabajo" },
        "approach.title": { en: "Read-only first. Evidence always.", es: "Primero solo lectura. Siempre evidencia." },
        "approach.subtitle": { en: "The same four steps behind every engagement — proven across banking, retail, insurance and industry, and designed so nothing in your environment changes until you decide.", es: "Los mismos cuatro pasos detrás de cada trabajo — probados en banca, retail, seguros e industria, y diseñados para que nada en tu ambiente cambie hasta que tú lo decidas." },

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

        "contact.eyebrow": { en: "Next step", es: "Siguiente paso" },
        "contact.title": { en: "Tell me where your platform hurts.", es: "Cuéntame dónde te duele la plataforma." },
        "contact.text": { en: "A 30-minute conversation is usually enough to know whether the right first move is a quick scan, a full assessment or a migration plan — and to agree scope and timing.", es: "Con 30 minutos normalmente basta para saber si el primer paso es un quick scan, un assessment completo o un plan de migración — y acordar alcance y tiempos." },
        "contact.cta": { en: "Message me on LinkedIn", es: "Escríbeme por LinkedIn" },
        "contact.cta2": { en: "GitHub", es: "GitHub" },
        "footer.text": { en: "© {{year}} Rodrigo Quintanilla · Azure Solutions Architect Expert · Santiago, Chile", es: "© {{year}} Rodrigo Quintanilla · Azure Solutions Architect Expert · Santiago, Chile" },
        "services.quickwins": { en: "Quick wins", es: "Quick wins" }
    },

    proof: [
        { value: "7", key: "proof.certs" },
        { value: "5+", key: "proof.years" },
        { value: "8", key: "proof.sectors" },
        { value: "3", key: "proof.apps" }
    ],

    // Chips sobre el H1 (3–4 máximo)
    focus: [
        { en: "Microsoft Fabric", es: "Microsoft Fabric" },
        { en: "Azure architecture", es: "Arquitectura Azure" },
        { en: "FinOps", es: "FinOps" },
        { en: "Read-only assessments", es: "Assessments de solo lectura" }
    ],

    // Cinta de tecnologías bajo el hero (se repite en bucle)
    stack: ["Microsoft Azure", "Microsoft Fabric", "Power BI", "OneLake", "Azure Data Factory", "Synapse", "Terraform", "Bicep", "Azure DevOps", "GitHub Actions", "Microsoft Purview", "Entra ID", "FinOps", "Swift", "SwiftUI"],

    // Servicios: nombre · descripción · quick wins (lo que el cliente obtiene en las primeras semanas)
    services: [
        {
            num: "01",
            title: { en: "Fabric & Power BI current-state assessment", es: "Assessment de estado actual en Fabric y Power BI" },
            description: { en: "A read-only radiography of your estate — capacities, workspaces, who has access to what, what is failing and what it costs — ranked by business impact and written for leadership.", es: "Una radiografía de solo lectura de tu ambiente — capacidades, workspaces, quién accede a qué, qué falla y cuánto cuesta — priorizada por impacto de negocio y escrita para dirección." },
            quickwins: [
                { en: "A single, trusted inventory of everything you run", es: "Un único inventario confiable de todo lo que operas" },
                { en: "Broken refreshes and orphaned access surfaced in days", es: "Refrescos rotos y accesos huérfanos detectados en días" },
                { en: "A 90-day roadmap your team can start on Monday", es: "Un roadmap a 90 días que tu equipo puede empezar el lunes" }
            ]
        },
        {
            num: "02",
            title: { en: "Migration to Microsoft Fabric", es: "Migración a Microsoft Fabric" },
            description: { en: "Planning, rebalancing and execution of the move from Power BI Premium to Fabric capacities, with before/after evidence that proves nothing but the capacity changed.", es: "Planificación, rebalanceo y ejecución del paso de Power BI Premium a capacidades Fabric, con evidencia antes/después que demuestra que solo cambió la capacidad." },
            quickwins: [
                { en: "Clear capacity plan before the first workspace moves", es: "Plan de capacidades claro antes de mover el primer workspace" },
                { en: "Zero surprises on content, permissions or schedules", es: "Cero sorpresas en contenido, permisos o programaciones" },
                { en: "Sign-off report your stakeholders can audit", es: "Informe de cierre que tus stakeholders pueden auditar" }
            ]
        },
        {
            num: "03",
            title: { en: "Capacity sizing & FinOps", es: "Dimensionamiento de capacidad y FinOps" },
            description: { en: "Real consumption telemetry turned into a quantified verdict — keep, grow or optimize — before you commit to a renewal or upgrade.", es: "Telemetría de consumo real convertida en un veredicto cuantificado — mantener, crecer u optimizar — antes de comprometer una renovación o upgrade." },
            quickwins: [
                { en: "Know within two weeks if you are over- or under-provisioned", es: "Saber en dos semanas si estás sobre o subdimensionado" },
                { en: "Top consumers identified and prioritized for refactor", es: "Principales consumidores identificados y priorizados para refactor" },
                { en: "A number you can take to procurement", es: "Una cifra que puedes llevar a compras" }
            ]
        },
        {
            num: "04",
            title: { en: "Azure architecture & landing zones", es: "Arquitectura Azure y landing zones" },
            description: { en: "Cloud Adoption and Well-Architected frameworks applied to your reality: identity, network, security and cost guardrails that pass audit, delivered as architecture and infrastructure as code.", es: "Cloud Adoption y Well-Architected Framework aplicados a tu realidad: identidad, red, seguridad y controles de costo que pasan auditoría, entregados como arquitectura e infraestructura como código." },
            quickwins: [
                { en: "Architecture decisions documented and defensible", es: "Decisiones de arquitectura documentadas y defendibles" },
                { en: "Guardrails that stop cost and security drift early", es: "Controles que frenan la deriva de costo y seguridad a tiempo" },
                { en: "An IaC baseline your team can extend", es: "Una base IaC que tu equipo puede extender" }
            ]
        },
        {
            num: "05",
            title: { en: "Azure security & governance posture review", es: "Revisión de postura de seguridad y gobierno en Azure" },
            description: { en: "A read-only review of identity, access, policies and exposure across your subscriptions — Entra ID, RBAC, Defender findings, network exposure and policy compliance — prioritized by risk and mapped to the Well-Architected security pillar.", es: "Una revisión de solo lectura de identidad, accesos, políticas y exposición en tus suscripciones — Entra ID, RBAC, hallazgos de Defender, exposición de red y cumplimiento de políticas — priorizada por riesgo y mapeada al pilar de seguridad de Well-Architected." },
            quickwins: [
                { en: "Over-privileged identities and stale credentials found in days", es: "Identidades sobre-privilegiadas y credenciales vencidas detectadas en días" },
                { en: "Public exposure and missing encryption listed by resource", es: "Exposición pública y cifrado faltante listados por recurso" },
                { en: "A remediation plan ranked by risk, not by noise", es: "Un plan de remediación ordenado por riesgo, no por ruido" }
            ]
        },
        {
            num: "06",
            title: { en: "Azure migration & subscription consolidation", es: "Migración y consolidación de suscripciones Azure" },
            description: { en: "Inventory, mobility analysis and a costed plan to move workloads into Azure or between subscriptions and tenants — what moves as-is, what must be recreated, and in which order.", es: "Inventario, análisis de movilidad y plan costeado para mover cargas a Azure o entre suscripciones y tenants — qué se mueve tal cual, qué debe recrearse y en qué orden." },
            quickwins: [
                { en: "A resource-by-resource mobility matrix", es: "Una matriz de movilidad recurso por recurso" },
                { en: "Effort and risk estimated before anyone touches production", es: "Esfuerzo y riesgo estimados antes de tocar producción" },
                { en: "Wave plan with rollback points", es: "Plan por olas con puntos de retorno" }
            ]
        },
        {
            num: "07",
            title: { en: "Data platform & governed reporting", es: "Plataforma de datos y reportería gobernada" },
            description: { en: "Lakehouse and medallion design on Fabric, a Gold layer your Power BI can trust, and reporting platforms deployed reproducibly with CI/CD.", es: "Diseño lakehouse y medallón en Fabric, una capa Gold en la que tu Power BI confía y plataformas de reportería desplegadas de forma reproducible con CI/CD." },
            quickwins: [
                { en: "One source of truth instead of one per team", es: "Una fuente de verdad en vez de una por equipo" },
                { en: "Reports that stop breaking when data changes", es: "Reportes que dejan de romperse cuando cambian los datos" },
                { en: "Deployments you can repeat, not redo", es: "Despliegues que se repiten, no se rehacen" }
            ]
        },
        {
            num: "08",
            title: { en: "Fractional architect & team enablement", es: "Arquitecto fraccional y habilitación de equipos" },
            description: { en: "Ongoing architecture reviews, standards and mentoring a few hours a week, so your team ships with confidence without a full-time hire.", es: "Revisiones de arquitectura, estándares y mentoría continuas unas horas a la semana, para que tu equipo entregue con confianza sin una contratación full-time." },
            quickwins: [
                { en: "A senior second opinion before costly decisions", es: "Una segunda opinión senior antes de decisiones costosas" },
                { en: "Standards and playbooks the team actually uses", es: "Estándares y playbooks que el equipo realmente usa" },
                { en: "Fewer escalations, faster reviews", es: "Menos escalamientos, revisiones más rápidas" }
            ]
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
