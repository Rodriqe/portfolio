# Portfolio — Azure Solutions Architect

Sitio web profesional de un **Azure Solutions Architect & iOS Developer**.

🌐 **Live:** https://Rodriqe.github.io/portfolio/
📬 **Contacto:** [GitHub @Rodriqe](https://github.com/Rodriqe)

---

## Perfil

Arquitecto de Soluciones Cloud certificado en **Azure** con más de 5 años de experiencia diseñando e implementando plataformas de datos de nivel empresarial para sectores de banca, gobierno e industria. Más de **20 implementaciones end-to-end de Microsoft Fabric** y reducción de costos de infraestructura hasta en un **50%** mediante estrategias de FinOps, sirviendo a más de **60 organizaciones**.

Cuento con tres certificaciones de nivel experto de Microsoft Azure, incluyendo **Azure Solutions Architect Expert**. Además, soy desarrollador iOS/macOS con aplicaciones nativas publicadas en la App Store.

**Stack principal:** Azure · Microsoft Fabric · Terraform · DevOps · FinOps · Swift · SwiftUI

---

## Proyectos publicados

### Safeplace · App de Seguridad iOS
**2025 – Presente** · 🔗 [App Store](https://apps.apple.com/us/app/safeplace-vault/id6761115917)

Aplicación nativa iOS de nivel producción para protección privada de archivos, fotos y videos.

- Encriptación **AES-256-CBC** con gestión de claves envelope por carpeta (CommonCrypto, PBKDF2-HMAC-SHA256, 100k iteraciones).
- Arquitectura **zero-server, on-device**: sin tracking externo ni sync cloud; claves en iOS Keychain.
- Encriptación **streaming** (chunks de 64 KB) para archivos grandes.
- **Autenticación biométrica** (Face ID / Touch ID), iCloud Backup/Restore y compras in-app con StoreKit 2.
- **Stack:** Swift · SwiftUI · CommonCrypto · LocalAuthentication · StoreKit 2 · iOS 15+

### FlowImage · Conversor de Imágenes Multiplataforma
**2026 – Presente** · 🔗 [Mac App Store](https://apps.apple.com/us/app/flowimagemac/id6761324168?mt=12)

Conversor de imágenes nativo para macOS, iPhone e iPad con un único codebase compartido en SwiftUI.

- Motor de conversión **on-device**: PNG, JPEG, TIFF, HEIC y DNG/RAW vía CoreImage e ImageIO, sin procesamiento cloud.
- Arquitectura **multiplataforma** con codebase unificado (macOS 14+ e iOS/iPadOS 17+).
- Experiencia nativa **macOS** con drag-and-drop e integración con Finder.
- Interfaz **iOS/iPadOS** con Share Sheet del sistema, inspirada en la app Fotos.
- **Resize opcional** con preservación de aspect ratio y preview en tiempo real.
- **Stack:** Swift · SwiftUI · CoreImage · ImageIO · macOS 14+ · iOS/iPadOS 17+

### Time2Split · App de División de Gastos iOS
**2026 – Presente** · 🔗 [App Store](https://apps.apple.com/us/app/time2split/id6761983454)

Aplicación nativa iOS para dividir cuentas y gastos entre grupos de forma inteligente.

- **Escaneo OCR de recibos** con Apple Vision para extraer ítems y precios automáticamente.
- Soporte para **30 monedas** con formato según la configuración regional.
- **Asignación inteligente de ítems** a participantes individuales o división equitativa.
- **Propinas proporcionales** ajustables y distribuidas según el consumo.
- **Liquidación de deudas** con algoritmo greedy que minimiza el número de transacciones.
- **Grupos de participantes** reutilizables y localización completa en inglés y español.
- Arquitectura **privacy-first on-device**: sin tracking, sin anuncios, sin servidores.
- **Stack:** Swift · SwiftUI · SwiftData · Apple Vision · iOS

---

## Certificaciones

- Microsoft Certified: Azure Solutions Architect Expert
- Microsoft Certified: Azure Fabric Analytics Engineer Associate
- Microsoft Certified: Azure Administrator Associate
- Microsoft Certified: Azure AI Fundamentals
- Microsoft Certified: Azure Data Fundamentals (DP-900)
- Microsoft Certified: Azure Fundamentals (AZ-900)

---

## Tecnología del sitio

- HTML5, CSS3 y JavaScript (sin dependencias)
- Diseño responsive y accesible (WCAG 2.2)
- Desplegado con GitHub Pages
