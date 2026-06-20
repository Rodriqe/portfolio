// ============================================
// PORTFOLIO CONFIGURATION
// Centraliza toda la información del portfolio
// ============================================

const portfolioConfig = {
    // Personal information
    personal: {
        name: "Rodrigo Quintanilla",
        title: "Azure Solutions Architect",
        location: "Chile (Remote)",
        github: "https://github.com/Rodriqe",
        description: "Azure Solutions Architect Expert and iOS developer with six Microsoft certifications, specialized in enterprise data platforms, Microsoft Fabric and FinOps strategies."
    },

    // Servicios de consultoría
    services: [
        {
            id: 1,
            icon: "☁️",
            title: "Cloud Architecture",
            description: "Design of scalable and secure solutions on Azure. Applying the Cloud Adoption Framework (CAF) and Well-Architected Framework (WAF) to ensure operational excellence."
        },
        {
            id: 2,
            icon: "📊",
            title: "Data Platforms",
            description: "Implementation of Microsoft Fabric, Data Lakes and enterprise-scale analytics. Modern Analytics architecture with Azure Data Factory and Azure Synapse integration."
        },
        {
            id: 3,
            icon: "💰",
            title: "FinOps & Optimization",
            description: "Advanced strategies to reduce infrastructure costs by up to 50%. Spend governance, right-sizing and reservation planning."
        },
        {
            id: 4,
            icon: "🔐",
            title: "Security & Compliance",
            description: "Architecture of regulated environments with CAF controls, private networks and data classification. Compliance with sovereignty and audit requirements."
        },
        {
            id: 5,
            icon: "🔄",
            title: "DevOps & IaC",
            description: "CI/CD pipelines with Azure DevOps. Infrastructure as Code with Terraform and ARM Templates. Deployment automation and release management."
        },
        {
            id: 6,
            icon: "👥",
            title: "Technical Leadership",
            description: "Mentoring infrastructure teams. Establishing standards and best practices. Knowledge transfer and technical training."
        }
    ],

    // Tecnologías y expertise
    techStack: [
        {
            id: 1,
            icon: "☁️",
            category: "Cloud & Azure",
            items: ["Microsoft Azure", "Azure Solutions Architect", "Cloud Adoption Framework", "Well-Architected Framework", "Azure Administrator", "Landing Zones"]
        },
        {
            id: 2,
            icon: "📊",
            category: "Data & Analytics",
            items: ["Microsoft Fabric", "Azure Synapse Analytics", "Azure Data Factory", "Data Lake Storage", "Lakehouse", "Modern Data Platform"]
        },
        {
            id: 3,
            icon: "🔄",
            category: "IaC & DevOps",
            items: ["Terraform", "Bicep", "ARM Templates", "Azure DevOps", "CI/CD", "GitHub Actions"]
        },
        {
            id: 4,
            icon: "💰",
            category: "Governance & FinOps",
            items: ["FinOps", "Cost Optimization", "Cloud Governance", "Security & Compliance", "Microsoft Purview", "RBAC"]
        },
        {
            id: 5,
            icon: "💻",
            category: "iOS / macOS Development",
            items: ["Swift", "SwiftUI", "SwiftData", "CoreImage", "Apple Vision", "StoreKit 2"]
        },
        {
            id: 6,
            icon: "🧭",
            category: "Methodologies & Leadership",
            items: ["Agile / Scrum", "Scrum Master", "Team Leadership", "Enterprise Architecture", "Technical Mentoring"]
        }
    ],

    // Proyectos personales publicados
    projects: [
        {
            id: 1,
            title: "Safeplace",
            subtitle: "Security app for iOS",
            description: "Native app focused on private protection of files, photos and videos with a zero-server approach and on-device encryption.",
            year: "2025 - Present",
            platform: "iOS",
            icon: "assets/img/apps/safeplace.png",
            appStoreUrl: "https://apps.apple.com/us/app/safeplace-vault/id6761115917",
            tags: ["SwiftUI", "iOS", "Security"]
        },
        {
            id: 2,
            title: "FlowImage",
            subtitle: "Cross-platform image converter",
            description: "Native app for macOS, iPhone and iPad for image conversion with a unified SwiftUI codebase.",
            year: "2026 - Present",
            platform: "macOS / iOS / iPadOS",
            icon: "assets/img/apps/flowimage.png",
            appStoreUrl: "https://apps.apple.com/us/app/flowimagemac/id6761324168?mt=12",
            tags: ["SwiftUI", "macOS", "ImageIO"]
        },
        {
            id: 3,
            title: "Time2Split",
            subtitle: "Expense splitting app for iOS",
            description: "Native iOS app to split bills and expenses across groups with OCR receipt scanning (Apple Vision), 30 currencies and smart debt settlement, fully on-device.",
            year: "2026 - Present",
            platform: "iOS",
            icon: "assets/img/apps/time2split.png",
            appStoreUrl: "https://apps.apple.com/us/app/time2split/id6761983454",
            tags: ["SwiftUI", "SwiftData", "Vision"]
        }
    ],

    // Certificaciones
    certifications: [
        {
            id: 1,
            badge: "assets/img/certs/microsoft-expert.svg",
            title: "Azure Solutions Architect Expert",
            code: "AZ-305",
            date: "July 2022",
            level: "Expert"
        },
        {
            id: 2,
            badge: "assets/img/certs/microsoft-associate.svg",
            title: "Azure Fabric Analytics Engineer Associate",
            code: "DP-600",
            date: "June 2024",
            level: "Associate"
        },
        {
            id: 3,
            badge: "assets/img/certs/microsoft-associate.svg",
            title: "Azure Administrator Associate",
            code: "AZ-104",
            date: "May 2022",
            level: "Associate"
        },
        {
            id: 4,
            badge: "assets/img/certs/microsoft-fundamentals.svg",
            title: "Azure Data Fundamentals",
            code: "DP-900",
            date: "April 2022",
            level: "Fundamentals"
        },
        {
            id: 5,
            badge: "assets/img/certs/microsoft-fundamentals.svg",
            title: "Azure AI Fundamentals",
            code: "AI-900",
            date: "April 2022",
            level: "Fundamentals"
        },
        {
            id: 6,
            badge: "assets/img/certs/microsoft-fundamentals.svg",
            title: "Azure Fundamentals",
            code: "AZ-900",
            date: "March 2022",
            level: "Fundamentals"
        },
        {
            id: 7,
            badge: "assets/img/certs/certiprof-smpc.png",
            title: "Scrum Master Professional",
            code: "SMPC",
            date: "July 2020",
            level: "Professional"
        }
    ],

    // Estadísticas clave
    stats: [
        {
            number: "8",
            label: "Project Areas · Data · Fabric · Cloud · Migrations · FinOps · DevOps · Security · IaC"
        },
        {
            number: "4",
            label: "Client Sectors · Banking · Government · Industry · Retail"
        },
        {
            number: "50%",
            label: "Average Cost Reduction"
        },
        {
            number: "4+",
            label: "Years of Experience"
        }
    ],

    // Metadatos
    metadata: {
        year: new Date().getFullYear(),
        version: "1.0.0",
        lastUpdated: "2026-06-19"
    }
};

// Exportar configuración para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
