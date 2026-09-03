// ============================================
// PORTFOLIO CONFIGURATION — única fuente de contenido (EN/ES)
// Cualquier texto visible es { en: "...", es: "..." }; main.js elige el idioma.
// ============================================

const portfolioConfig = {
    languages: ["en", "es"],
    defaultLanguage: "en",

    personal: {
        name: "Rodrigo Quintanilla",
        title: { en: "Azure Solutions Architect", es: "Arquitecto de Soluciones Azure" },
        location: { en: "Santiago, Chile · Remote", es: "Santiago, Chile · Remoto" },
        github: "https://github.com/Rodriqe",
        linkedin: "https://www.linkedin.com/in/rigoqe/"
    },

    // Textos de la interfaz estática (index.html usa data-i18n="clave")
    strings: {
        "meta.title": { en: "Rodrigo Quintanilla | Azure Solutions Architect & iOS Developer", es: "Rodrigo Quintanilla | Arquitecto de Soluciones Azure y desarrollador iOS" },
        "meta.description": {
            en: "Rodrigo Quintanilla — Azure Solutions Architect Expert. Enterprise data platforms, Microsoft Fabric migrations, FinOps and cloud governance for banking, retail, insurance and industry.",
            es: "Rodrigo Quintanilla — Azure Solutions Architect Expert. Plataformas de datos empresariales, migraciones a Microsoft Fabric, FinOps y gobierno cloud para banca, retail, seguros e industria."
        },
        "skip": { en: "Skip to main content", es: "Saltar al contenido principal" },
        "nav.work": { en: "Work", es: "Casos" },
        "nav.services": { en: "Services", es: "Servicios" },
        "nav.tech": { en: "Technologies", es: "Tecnologías" },
        "nav.projects": { en: "Projects", es: "Proyectos" },
        "nav.contact": { en: "Contact", es: "Contacto" },
        "lang.switch": { en: "Cambiar a español", es: "Switch to English" },

        "hero.eyebrow": { en: "Rodrigo Quintanilla", es: "Rodrigo Quintanilla" },
        "hero.h1.highlight": { en: "Azure Cloud", es: "Azure Cloud" },
        "hero.h1.rest": { en: "Solutions Architect", es: "Solutions Architect" },
        "hero.description": {
            en: "I design and run enterprise data platforms on Microsoft Azure and Fabric — migrations, capacity sizing, access governance and FinOps — for banking, retail, insurance and industry. Azure Solutions Architect Expert with {{certs}} Microsoft certifications and three apps live on the App Store.",
            es: "Diseño y opero plataformas de datos empresariales sobre Microsoft Azure y Fabric — migraciones, dimensionamiento de capacidad, gobierno de accesos y FinOps — para banca, retail, seguros e industria. Azure Solutions Architect Expert con {{certs}} certificaciones Microsoft y tres apps publicadas en el App Store."
        },
        "hero.cta.primary": { en: "Request a Consultation", es: "Solicitar una consultoría" },
        "hero.cta.secondary": { en: "LinkedIn", es: "LinkedIn" },
        "hero.certs.more": { en: "Show all {{n}} certifications", es: "Ver las {{n}} certificaciones" },
        "hero.certs.less": { en: "Show fewer", es: "Ver menos" },
        "stats.areas": { en: "Project Areas", es: "Áreas de proyecto" },
        "stats.sectors": { en: "Client Sectors", es: "Sectores de clientes" },
        "stats.years": { en: "Years of Experience", es: "Años de experiencia" },

        "work.eyebrow": { en: "Selected work", es: "Casos seleccionados" },
        "work.title": { en: "Recent Engagements", es: "Trabajos recientes" },
        "work.subtitle": { en: "Anonymized cases from 2026 — sector, challenge, what I did and the outcome", es: "Casos anonimizados de 2026 — sector, desafío, qué hice y el resultado" },
        "work.challenge": { en: "Challenge", es: "Desafío" },
        "work.approach": { en: "What I did", es: "Qué hice" },
        "work.outcome": { en: "Outcome", es: "Resultado" },

        "services.eyebrow": { en: "What I do", es: "Qué hago" },
        "services.title": { en: "Consulting Services", es: "Servicios de consultoría" },
        "services.subtitle": { en: "End-to-end cloud architecture and data governance solutions", es: "Arquitectura cloud y gobierno de datos de punta a punta" },
        "tech.eyebrow": { en: "Stack & expertise", es: "Stack y especialidades" },
        "tech.title": { en: "Technologies & Expertise", es: "Tecnologías y especialidades" },
        "tech.subtitle": { en: "Stack and areas of specialization across cloud, data and development", es: "Stack y áreas de especialización en cloud, datos y desarrollo" },
        "projects.eyebrow": { en: "Shipped & live", es: "Publicado y en producción" },
        "projects.title": { en: "Personal Projects", es: "Proyectos personales" },
        "projects.subtitle": { en: "Only products published on the App Store and available to download", es: "Solo productos publicados en el App Store y disponibles para descargar" },
        "projects.cta": { en: "View on the App Store", es: "Ver en el App Store" },
        "projects.aria": { en: "Open {{title}} on the App Store", es: "Abrir {{title}} en el App Store" },

        "contact.title": { en: "Let's Talk", es: "Hablemos" },
        "contact.text": {
            en: "Does your organization need cloud architecture, a Microsoft Fabric migration, platform modernization or a FinOps strategy? Reach out on LinkedIn for consulting, projects and team mentoring.",
            es: "¿Tu organización necesita arquitectura cloud, una migración a Microsoft Fabric, modernizar su plataforma o una estrategia FinOps? Escríbeme por LinkedIn para consultorías, proyectos y mentoría de equipos."
        },
        "contact.cta.primary": { en: "Message me on LinkedIn", es: "Escríbeme por LinkedIn" },
        "contact.cta.secondary": { en: "GitHub", es: "GitHub" },
        "footer": { en: "© {{year}} Rodrigo Quintanilla — Azure Solutions Architect & iOS Developer.", es: "© {{year}} Rodrigo Quintanilla — Arquitecto de Soluciones Azure y desarrollador iOS." }
    },

    // Casos anonimizados (sin nombres de cliente ni identificadores) — sector + desafío + intervención + resultado
    work: [
        {
            id: 1,
            sector: { en: "Retail · Banking", es: "Retail · Banca" },
            title: { en: "Power BI Premium → Microsoft Fabric migration across five capacities", es: "Migración Power BI Premium → Microsoft Fabric en cinco capacidades" },
            challenge: { en: "Move hundreds of workspaces from Premium (P1/P2) to Fabric (F64/F128) across regions without losing content, permissions or refresh schedules.", es: "Mover cientos de workspaces de Premium (P1/P2) a Fabric (F64/F128) entre regiones sin perder contenido, permisos ni programaciones de actualización." },
            approach: { en: "Read-only pre-migration snapshots, capacity rebalancing plan, one-by-one reassignment with exception handling, post-migration verification against the baseline and a milestone report per capacity.", es: "Snapshots de solo lectura previos a la migración, plan de rebalanceo de capacidades, reasignación uno a uno con manejo de excepciones, verificación posterior contra la línea base e informe de hito por capacidad." },
            outcome: { en: "Zero content or permission loss detected; every deviation documented and closed; executive-ready evidence for each capacity.", es: "Sin pérdida de contenido ni permisos; cada desviación documentada y cerrada; evidencia ejecutiva por capacidad." },
            tags: ["Microsoft Fabric", "Power BI", "Migration"]
        },
        {
            id: 2,
            sector: { en: "Insurance", es: "Seguros" },
            title: { en: "Premium P2 → Fabric F128 with pre/post verification", es: "Premium P2 → Fabric F128 con verificación pre/post" },
            challenge: { en: "A regulated organization needed proof that reassigning its Power BI estate to Fabric changed nothing but the capacity.", es: "Una organización regulada necesitaba evidencia de que reasignar su ambiente Power BI a Fabric no cambiaba nada más que la capacidad." },
            approach: { en: "Baseline snapshot, delegated read-only admin access, automated comparison of inventory, users and roles, and a formal verification document.", es: "Snapshot de línea base, acceso admin delegado de solo lectura, comparación automatizada de inventario, usuarios y roles, y documento formal de verificación." },
            outcome: { en: "Migration signed off within a week with a reproducible, auditable trail.", es: "Migración aprobada en una semana con trazabilidad reproducible y auditable." },
            tags: ["Microsoft Fabric", "Governance", "Audit"]
        },
        {
            id: 3,
            sector: { en: "Retail", es: "Retail" },
            title: { en: "Data gateway performance and refresh redistribution", es: "Rendimiento de data gateways y redistribución de refrescos" },
            challenge: { en: "Business-critical semantic models were failing or running late during the morning refresh window.", es: "Modelos semánticos críticos fallaban o llegaban tarde en la ventana de refresco de la mañana." },
            approach: { en: "Tenant-wide gateway inventory, refresh history by lineage, per-model internals (partitions, incremental refresh, sources) and a redistribution plan across gateway clusters and time slots.", es: "Inventario de gateways a nivel tenant, historial de refrescos por linaje, internos por modelo (particiones, refresco incremental, orígenes) y plan de redistribución entre clusters de gateway y horarios." },
            outcome: { en: "Clear root cause per model and a prioritized plan the client could execute without downtime.", es: "Causa raíz clara por modelo y un plan priorizado ejecutable sin interrupciones." },
            tags: ["Power BI", "Gateways", "Performance"]
        },
        {
            id: 4,
            sector: { en: "Food & Consumer Goods · Construction", es: "Alimentos y consumo masivo · Construcción" },
            title: { en: "Current-state assessment of the Power BI / Fabric estate", es: "Assessment de estado actual del ambiente Power BI / Fabric" },
            challenge: { en: "Leadership had no consolidated view of capacities, workspaces, who had access to what, or which refreshes were failing.", es: "La dirección no tenía una vista consolidada de capacidades, workspaces, quién accedía a qué ni qué refrescos fallaban." },
            approach: { en: "Read-only collection through the platform's administration tooling, item-level access extraction, failure analysis and a business-language report with a prioritized roadmap.", es: "Recolección de solo lectura con las herramientas de administración de la plataforma, extracción de accesos por ítem, análisis de fallos e informe en lenguaje de negocio con roadmap priorizado." },
            outcome: { en: "A single source of truth for the estate and quick wins on access hygiene and broken refreshes.", es: "Una única fuente de verdad del ambiente y mejoras rápidas en higiene de accesos y refrescos rotos." },
            tags: ["Assessment", "Access Governance", "Power BI"]
        },
        {
            id: 5,
            sector: { en: "Ports & Logistics", es: "Puertos y logística" },
            title: { en: "Fabric capacity sizing with real consumption data", es: "Dimensionamiento de capacidad Fabric con consumo real" },
            challenge: { en: "Decide whether an F4 capacity had to grow — or be refactored — before committing budget.", es: "Decidir si una capacidad F4 debía crecer — o refactorizarse — antes de comprometer presupuesto." },
            approach: { en: "Two weeks of Capacity Metrics telemetry, top consumers by compute unit, throttling and rejection analysis, and an executive summary with a quantified verdict.", es: "Dos semanas de telemetría de Capacity Metrics, principales consumidores por unidad de cómputo, análisis de throttling y rechazos, y resumen ejecutivo con veredicto cuantificado." },
            outcome: { en: "Recommendation to keep the current SKU with monitoring — avoiding an unnecessary upgrade — plus the dataflows to optimize first.", es: "Recomendación de mantener el SKU actual con monitoreo — evitando un upgrade innecesario — y los dataflows a optimizar primero." },
            tags: ["Microsoft Fabric", "Capacity", "FinOps"]
        }
    ],

    services: [
        { id: 1, icon: "☁️", title: { en: "Cloud Architecture", es: "Arquitectura Cloud" },
          description: { en: "Design of scalable and secure solutions on Azure. Applying the Cloud Adoption Framework (CAF) and Well-Architected Framework (WAF) to ensure operational excellence.", es: "Diseño de soluciones escalables y seguras en Azure. Aplicación de Cloud Adoption Framework (CAF) y Well-Architected Framework (WAF) para asegurar excelencia operacional." } },
        { id: 2, icon: "📊", title: { en: "Data Platforms", es: "Plataformas de datos" },
          description: { en: "Implementation of Microsoft Fabric, Data Lakes and enterprise-scale analytics. Modern analytics architecture with Azure Data Factory and Azure Synapse integration.", es: "Implementación de Microsoft Fabric, Data Lakes y analítica a escala empresarial. Arquitectura moderna de analítica con integración de Azure Data Factory y Azure Synapse." } },
        { id: 3, icon: "💰", title: { en: "FinOps & Optimization", es: "FinOps y optimización" },
          description: { en: "Advanced strategies to reduce infrastructure costs by up to 50%. Spend governance, right-sizing and reservation planning.", es: "Estrategias avanzadas para reducir hasta un 50% los costos de infraestructura. Gobierno del gasto, right-sizing y planificación de reservas." } },
        { id: 4, icon: "🔐", title: { en: "Security & Compliance", es: "Seguridad y cumplimiento" },
          description: { en: "Architecture of regulated environments with CAF controls, private networks and data classification. Compliance with sovereignty and audit requirements.", es: "Arquitectura de ambientes regulados con controles CAF, redes privadas y clasificación de datos. Cumplimiento de requisitos de soberanía y auditoría." } },
        { id: 5, icon: "🔄", title: { en: "DevOps & IaC", es: "DevOps e IaC" },
          description: { en: "CI/CD pipelines with Azure DevOps. Infrastructure as Code with Terraform and ARM Templates. Deployment automation and release management.", es: "Pipelines CI/CD con Azure DevOps. Infraestructura como código con Terraform y ARM Templates. Automatización de despliegues y gestión de releases." } },
        { id: 6, icon: "👥", title: { en: "Technical Leadership", es: "Liderazgo técnico" },
          description: { en: "Mentoring infrastructure teams. Establishing standards and best practices. Knowledge transfer and technical training.", es: "Mentoría de equipos de infraestructura. Definición de estándares y buenas prácticas. Transferencia de conocimiento y capacitación técnica." } }
    ],

    techStack: [
        { id: 1, icon: "☁️", category: { en: "Cloud & Azure", es: "Cloud y Azure" }, items: ["Microsoft Azure", "Azure Solutions Architect", "Cloud Adoption Framework", "Well-Architected Framework", "Azure Administrator", "Landing Zones"] },
        { id: 2, icon: "📊", category: { en: "Data & Analytics", es: "Datos y analítica" }, items: ["Microsoft Fabric", "Power BI", "Azure Synapse Analytics", "Azure Data Factory", "Data Lake Storage", "Lakehouse"] },
        { id: 3, icon: "🔄", category: { en: "IaC & DevOps", es: "IaC y DevOps" }, items: ["Terraform", "Bicep", "ARM Templates", "Azure DevOps", "CI/CD", "GitHub Actions"] },
        { id: 4, icon: "💰", category: { en: "Governance & FinOps", es: "Gobierno y FinOps" }, items: ["FinOps", "Cost Optimization", "Cloud Governance", "Security & Compliance", "Microsoft Purview", "RBAC"] },
        { id: 5, icon: "💻", category: { en: "iOS / macOS Development", es: "Desarrollo iOS / macOS" }, items: ["Swift", "SwiftUI", "SwiftData", "CoreImage", "Apple Vision", "StoreKit 2"] },
        { id: 6, icon: "🧭", category: { en: "Methodologies & Leadership", es: "Metodologías y liderazgo" }, items: ["Agile / Scrum", "Scrum Master", "Team Leadership", "Enterprise Architecture", "Technical Mentoring"] }
    ],

    projects: [
        { id: 1, title: "Safeplace", subtitle: { en: "Security app for iOS", es: "App de seguridad para iOS" },
          description: { en: "Native app focused on private protection of files, photos and videos with a zero-server approach and on-device encryption.", es: "App nativa para proteger archivos, fotos y videos de forma privada, sin servidores y con cifrado en el dispositivo." },
          year: { en: "2025 – Present", es: "2025 – Presente" }, platform: "iOS", icon: "assets/img/apps/safeplace.png",
          appStoreUrl: "https://apps.apple.com/us/app/safeplace-vault/id6761115917", tags: ["SwiftUI", "iOS", "Security"] },
        { id: 2, title: "FlowImage", subtitle: { en: "Cross-platform image converter", es: "Conversor de imágenes multiplataforma" },
          description: { en: "Native app for macOS, iPhone and iPad for image conversion with a unified SwiftUI codebase.", es: "App nativa para macOS, iPhone y iPad para conversión de imágenes con una única base de código SwiftUI." },
          year: { en: "2026 – Present", es: "2026 – Presente" }, platform: "macOS / iOS / iPadOS", icon: "assets/img/apps/flowimage.png",
          appStoreUrl: "https://apps.apple.com/us/app/flowimagemac/id6761324168?mt=12", tags: ["SwiftUI", "macOS", "ImageIO"] },
        { id: 3, title: "Time2Split", subtitle: { en: "Expense splitting app for iOS", es: "App para dividir gastos en iOS" },
          description: { en: "Native iOS app to split bills and expenses across groups with OCR receipt scanning (Apple Vision), 30 currencies and smart debt settlement, fully on-device.", es: "App nativa iOS para dividir cuentas y gastos en grupos, con escaneo OCR de boletas (Apple Vision), 30 monedas y liquidación inteligente de deudas, todo en el dispositivo." },
          year: { en: "2026 – Present", es: "2026 – Presente" }, platform: "iOS", icon: "assets/img/apps/time2split.png",
          appStoreUrl: "https://apps.apple.com/us/app/time2split/id6761983454", tags: ["SwiftUI", "SwiftData", "Vision"] }
    ],

    // Las 3 primeras se muestran siempre; el resto detrás de "Ver todas"
    certifications: [
        { id: 1, badge: "assets/img/certs/az-305.png", title: "Azure Solutions Architect Expert", code: "AZ-305", date: "July 2022", level: "Expert" },
        { id: 2, badge: "assets/img/certs/microsoft-associate.svg", title: "Fabric Analytics Engineer Associate", code: "DP-600", date: "June 2024", level: "Associate" },
        { id: 3, badge: "assets/img/certs/az-104.png", title: "Azure Administrator Associate", code: "AZ-104", date: "May 2022", level: "Associate" },
        { id: 4, badge: "assets/img/certs/dp-900.png", title: "Azure Data Fundamentals", code: "DP-900", date: "April 2022", level: "Fundamentals" },
        { id: 5, badge: "assets/img/certs/ai-900.png", title: "Azure AI Fundamentals", code: "AI-900", date: "April 2022", level: "Fundamentals" },
        { id: 6, badge: "assets/img/certs/az-900.png", title: "Azure Fundamentals", code: "AZ-900", date: "March 2022", level: "Fundamentals" },
        { id: 7, badge: "assets/img/certs/sc-900.png", title: "Security, Compliance and Identity Fundamentals", code: "SC-900", date: "", level: "Fundamentals" },
        { id: 8, badge: "assets/img/certs/smpc.png", title: "Scrum Master Professional", code: "SMPC", date: "July 2020", level: "Professional" },
        { id: 9, badge: "assets/img/certs/spopc.png", title: "Scrum Product Owner Professional", code: "SPOPC", date: "", level: "Professional" }
    ],

    // Sectores (hero) — incluye los de los assessments 2026, sin nombres de cliente
    sectors: [
        { en: "Banking", es: "Banca" }, { en: "Retail", es: "Retail" }, { en: "Insurance", es: "Seguros" },
        { en: "Construction", es: "Construcción" }, { en: "Food & Consumer Goods", es: "Alimentos y consumo masivo" },
        { en: "Ports & Logistics", es: "Puertos y logística" }, { en: "Government", es: "Gobierno" }, { en: "Mining", es: "Minería" }
    ],
    areas: [
        { en: "Data Platforms", es: "Plataformas de datos" }, { en: "Microsoft Fabric", es: "Microsoft Fabric" }, { en: "Cloud Architecture", es: "Arquitectura cloud" },
        { en: "Migrations", es: "Migraciones" }, { en: "FinOps", es: "FinOps" }, { en: "DevOps", es: "DevOps" }, { en: "Security", es: "Seguridad" }, { en: "IaC", es: "IaC" }
    ],

    metadata: { version: "1.1.0", lastUpdated: "2026-09-02" }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
