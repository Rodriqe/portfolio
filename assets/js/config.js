// ============================================
// PORTFOLIO CONFIGURATION
// Centraliza toda la información del portfolio
// ============================================

const portfolioConfig = {
    // Información personal
    personal: {
        name: "Rodriqe",
        title: "Azure Solutions Architect",
        location: "Chile (Remoto)",
        github: "https://github.com/Rodriqe",
        description: "Especialista en diseño e implementación de plataformas de datos empresariales, Microsoft Fabric y estrategias FinOps."
    },

    // Servicios de consultoría
    services: [
        {
            id: 1,
            icon: "☁️",
            title: "Arquitectura Cloud",
            description: "Diseño de soluciones escalables y seguras en Azure. Aplicación de Cloud Adoption Framework (CAF) y Well-Architected Framework (WAF) para garantizar excelencia operacional."
        },
        {
            id: 2,
            icon: "📊",
            title: "Plataformas de Datos",
            description: "Implementación de Microsoft Fabric, Data Lakes y analytics a escala empresarial. Arquitectura Modern Analytics con integración de Azure Data Factory y Azure Synapse."
        },
        {
            id: 3,
            icon: "💰",
            title: "FinOps y Optimización",
            description: "Estrategias avanzadas para reducir costos de infraestructura hasta 50%. Gobernanza de gastos, dimensionamiento correcto y planificación de reservas."
        },
        {
            id: 4,
            icon: "🔐",
            title: "Seguridad y Cumplimiento",
            description: "Arquitectura de entornos regulados con controles CAF, redes privadas y clasificación de datos. Cumplimiento con requisitos de soberanía y auditoría."
        },
        {
            id: 5,
            icon: "🔄",
            title: "DevOps e IaC",
            description: "Pipelines CI/CD con Azure DevOps. Infraestructura como Código con Terraform y ARM Templates. Automatización de despliegues y gestión de versiones."
        },
        {
            id: 6,
            icon: "👥",
            title: "Liderazgo Técnico",
            description: "Mentoría de equipos de infraestructura. Establecimiento de estándares y mejores prácticas. Transferencia de conocimiento y capacitación técnica."
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
            category: "Datos & Analytics",
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
            category: "Gobernanza & FinOps",
            items: ["FinOps", "Optimización de Costos", "Gobernanza Cloud", "Seguridad y Cumplimiento", "Microsoft Purview", "RBAC"]
        },
        {
            id: 5,
            icon: "💻",
            category: "Desarrollo iOS / macOS",
            items: ["Swift", "SwiftUI", "SwiftData", "CoreImage", "Apple Vision", "StoreKit 2"]
        },
        {
            id: 6,
            icon: "🧭",
            category: "Metodologías & Liderazgo",
            items: ["Agile / Scrum", "Scrum Master", "Liderazgo de Equipos", "Arquitectura Empresarial", "Mentoría Técnica"]
        }
    ],

    // Proyectos personales publicados
    projects: [
        {
            id: 1,
            title: "Safeplace",
            subtitle: "Aplicacion de seguridad para iOS",
            description: "Aplicacion nativa enfocada en proteccion privada de archivos, fotos y videos con enfoque zero-server y cifrado on-device.",
            year: "2025 - Presente",
            platform: "iOS",
            appStoreUrl: "https://apps.apple.com/us/app/safeplace-vault/id6761115917",
            tags: ["SwiftUI", "iOS", "Security"]
        },
        {
            id: 2,
            title: "FlowImage",
            subtitle: "Conversor de imagenes multiplataforma",
            description: "Aplicacion nativa para macOS, iPhone y iPad para conversion de imagenes con un codebase unificado en SwiftUI.",
            year: "2026 - Presente",
            platform: "macOS / iOS / iPadOS",
            appStoreUrl: "https://apps.apple.com/us/app/flowimagemac/id6761324168?mt=12",
            tags: ["SwiftUI", "macOS", "ImageIO"]
        },
        {
            id: 3,
            title: "Time2Split",
            subtitle: "App de division de gastos para iOS",
            description: "Aplicacion nativa iOS para dividir cuentas y gastos entre grupos con escaneo OCR de recibos (Apple Vision), 30 monedas y liquidacion inteligente de deudas, completamente on-device.",
            year: "2026 - Presente",
            platform: "iOS",
            appStoreUrl: "https://apps.apple.com/us/app/time2split/id6761983454",
            tags: ["SwiftUI", "SwiftData", "Vision"]
        }
    ],

    // Certificaciones
    certifications: [
        {
            id: 1,
            title: "Azure Solutions Architect Expert",
            code: "AZ-305",
            date: "Julio 2022",
            level: "Expert"
        },
        {
            id: 2,
            title: "Azure Fabric Analytics Engineer Associate",
            code: "DP-600",
            date: "Junio 2024",
            level: "Associate"
        },
        {
            id: 3,
            title: "Azure Administrator Associate",
            code: "AZ-104",
            date: "Mayo 2022",
            level: "Associate"
        },
        {
            id: 4,
            title: "Azure Data Fundamentals",
            code: "DP-900",
            date: "Abril 2022",
            level: "Fundamentals"
        },
        {
            id: 5,
            title: "Azure AI Fundamentals",
            code: "AI-900",
            date: "Abril 2022",
            level: "Fundamentals"
        },
        {
            id: 6,
            title: "Scrum Master Professional",
            code: "SMPC",
            date: "Julio 2020",
            level: "Professional"
        }
    ],

    // Estadísticas clave
    stats: [
        {
            number: "20+",
            label: "Implementaciones Fabric"
        },
        {
            number: "60+",
            label: "Clientes Empresariales"
        },
        {
            number: "50%",
            label: "Reducción de Costos Promedio"
        },
        {
            number: "4+",
            label: "Años de Experiencia"
        }
    ],

    // Metadatos
    metadata: {
        year: new Date().getFullYear(),
        version: "1.0.0",
        lastUpdated: "2026-06-18"
    }
};

// Exportar configuración para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
