export type Locale = "es" | "en";

export type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
  jobTitle: string;
  dateModified: string;
};

type Project = {
  name: string;
  problem: string;
  solution: string;
  impact: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  duration: string;
  bullets: string[];
};

type Content = {
  seo: SeoContent;
  meta: {
    name: string;
    role: string;
    location: string;
    email: string;
  };
  nav: string[];
  hero: {
    headline: string;
    subheadline: string;
    metaLine: string;
    primaryCta: string;
    secondaryCta: string;
    indicators: string[];
    panelTitle: string;
    panelItems: string[];
  };
  authority: {
    eyebrow: string;
    title: string;
    authorLabel: string;
    roleLabel: string;
    locationLabel: string;
    updatedLabel: string;
    updatedDate: string;
    summary: string;
    answerTitle: string;
    answerBody: string;
  };
  about: {
    title: string;
    intro: string;
    body: string[];
    highlights: string[];
  };
  projects: {
    title: string;
    intro: string;
    groups: Array<{
      title: string;
      projects: Project[];
    }>;
  };
  experience: {
    title: string;
    intro: string;
    items: Experience[];
  };
  stack: {
    title: string;
    intro: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  services: {
    title: string;
    intro: string;
    items: string[];
  };
  method: {
    title: string;
    intro: string;
    steps: Array<{
      title: string;
      detail: string;
    }>;
  };
  finalCta: {
    title: string;
    body: string;
    action: string;
    localTimeLabel: string;
  };
};

export const content: Record<Locale, Content> = {
  es: {
    seo: {
      title: "Juan Aguirre | Fullstack Developer, SaaS y Transformación Digital",
      description:
        "Portfolio de Juan Aguirre, Fullstack Developer en Lima especializado en SaaS, automatización, React, WordPress, SEO técnico y transformación digital.",
      keywords: [
        "Juan Aguirre",
        "Fullstack Developer Lima",
        "desarrollo SaaS",
        "automatización de procesos",
        "arquitectura web",
        "WordPress developer",
        "React developer",
        "SEO técnico",
        "transformación digital",
        "consultoría tecnológica",
      ],
      jobTitle: "Fullstack Developer y especialista en transformación digital",
      dateModified: "2026-05-09",
    },
    meta: {
      name: "Juan Aguirre",
      role: "Fullstack Developer | Transformación Digital",
      location: "Lima, Perú",
      email: "info@webmasterpersonal.com",
    },
    nav: ["Sobre mí", "Proyectos", "Experiencia", "Stack", "Servicios", "Metodología"],
    hero: {
      headline: "Construyo y escalo soluciones digitales que impactan negocios reales",
      subheadline: "Fullstack Developer especializado en SaaS, automatización y arquitectura web con foco en eficiencia, datos y crecimiento.",
      metaLine: "Por Juan Aguirre · Lima, Perú",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
      indicators: ["10+ años experiencia", "SaaS Builder", "Fullstack + Arquitectura"],
      panelTitle: "Arquitectura de impacto",
      panelItems: [
        "Sistemas corporativos",
        "SaaS multi-tenant",
        "Automatización y datos",
        "SEO, performance y seguridad",
      ],
    },
    authority: {
      eyebrow: "Autor y experiencia",
      title: "Señales de confianza para evaluar este perfil",
      authorLabel: "Autor",
      roleLabel: "Rol",
      locationLabel: "Base local",
      updatedLabel: "Actualizado",
      updatedDate: "9 de mayo de 2026",
      summary:
        "Juan Aguirre combina más de 10 años de experiencia fullstack con construcción SaaS, automatización, arquitectura web y criterio de negocio aplicado a operaciones reales.",
      answerTitle: "Respuesta breve: ¿quién es Juan Aguirre?",
      answerBody:
        "Juan Aguirre es un Fullstack Developer en Lima, Perú, especializado en SaaS, automatización, arquitectura web y transformación digital. Durante más de 10 años ha construido plataformas corporativas, productos web, plugins WordPress, integraciones y sistemas internos para equipos que necesitan estabilidad, velocidad y decisiones basadas en datos. Su trabajo combina ejecución técnica con criterio de negocio: entiende procesos, identifica fricción, diseña soluciones mantenibles y acompaña la mejora continua después del lanzamiento. Puede ayudar a empresas, agencias y clientes a crear webs profesionales, automatizar flujos, optimizar performance, fortalecer SEO técnico, configurar infraestructura y convertir necesidades operativas en productos digitales medibles. Su enfoque no empieza por la herramienta, sino por el problema, los usuarios, las restricciones y el impacto esperado. Por eso su perfil funciona como un puente entre desarrollo fullstack, producto, operación, confianza técnica y resultados reales.",
    },
    about: {
      title: "Tecnología con propósito para tu producto, operación e impacto",
      intro:
        "Una mirada a cómo conecto tecnología, producto y operación para crear soluciones con impacto medible.",
      body: [
        "He construido mi carrera en el punto donde la tecnología deja de ser soporte y se convierte en ventaja operativa. Durante más de 10 años he liderado plataformas digitales, sistemas internos y productos web para organizaciones que necesitan estabilidad, velocidad y decisiones mejor informadas.",
        "Mi trabajo combina arquitectura, desarrollo fullstack, automatización y lectura de negocio.",
        "No parto de la herramienta: parto del problema, del proceso y del impacto que una solución debe generar para usuarios, equipos y resultados.",
      ],
      highlights: [
        "Liderazgo técnico",
        "Arquitectura de software",
        "Optimización de procesos",
        "Transformación digital",
      ],
    },
    projects: {
      title: "Proyectos que conectan operación, producto y escala",
      intro:
        "Una selección de sistemas, productos y plataformas donde el reto no fue solo construir interfaces, sino sostener operaciones reales, reducir fricción y preparar bases escalables.",
      groups: [
        {
          title: "Sistemas Corporativos",
          projects: [
            {
              name: "Suiza Soft",
              problem: "Las áreas críticas necesitaban operar sobre una base común, trazable y preparada para alto volumen.",
              solution: "Participación en el desarrollo del core empresarial que articula flujos internos y venta al público.",
              impact: "Procesos más consistentes, mejor control operativo y una plataforma central para escalar nuevas necesidades.",
            },
            {
              name: "Suiza Partner",
              problem: "Los clientes de referencia requerían autonomía para consultar atenciones, pagos, resultados y muestras.",
              solution: "Plataforma B2B con flujos integrados para gestión, seguimiento y consulta de información.",
              impact: "Menos dependencia operativa, mejor experiencia del cliente y mayor claridad en la relación comercial.",
            },
            {
              name: "Historia Clínica Electrónica",
              problem: "La información clínica necesitaba mayor orden, trazabilidad y disponibilidad para los equipos.",
              solution: "Desarrollo e implementación de módulos para registro, seguimiento y consulta estructurada.",
              impact: "Mejor continuidad de información, procesos clínicos más claros y datos disponibles para operación.",
            },
            {
              name: "Suiza Citas",
              problem: "La gestión de citas exigía coordinación entre disponibilidad, atención y experiencia del cliente.",
              solution: "Sistema orientado a organizar reservas, visibilidad operativa y flujos de atención.",
              impact: "Reducción de carga manual, mejor coordinación interna y experiencia más fluida para el cliente.",
            },
            {
              name: "App Suiza Lab Android/iOS",
              problem: "La app móvil requería mejoras funcionales y compatibilidad con nuevas exigencias de Android.",
              solution: "Ajustes y evolución de la app en Android e iOS para mantenerla vigente, estable y alineada a versiones recientes.",
              impact: "Mejor continuidad del canal móvil y menor riesgo técnico frente a cambios de plataforma.",
            },
            {
              name: "INPE Webcam y Screen Recorder",
              problem: "Un examen de admisión necesitaba supervisión remota con evidencia simultánea de cámara y pantalla.",
              solution: "Sistema para grabar webcam y pantalla al mismo tiempo durante la evaluación de postulantes.",
              impact: "Mayor trazabilidad del proceso, respaldo de evidencia y control para un flujo institucional sensible.",
            },
          ],
        },
        {
          title: "SaaS y Proyectos Propios",
          projects: [
            {
              name: "GaugeForms",
              problem: "Equipos y negocios necesitan capturar feedback sin depender de herramientas rígidas o aisladas.",
              solution: "Producto SaaS propio para crear encuestas, formularios y mediciones con visión analítica.",
              impact: "Base de producto para convertir respuestas en señales útiles para decisión y mejora continua.",
            },
            {
              name: "ChatsiPe",
              problem: "Un SaaS de atención necesita separar conversación, facturación y tenants sin acoplar proveedores.",
              solution: "Producto basado en una arquitectura multi-tenant con Chatwoot, UniBee, pasarela de pago y backend bridge.",
              impact: "Base modular para escalar soporte, billing y operación sin bloquear futuras migraciones.",
            },
            {
              name: "CH-Shorts",
              problem: "Los enlaces acortados necesitan control, validación y protección frente a tráfico automatizado.",
              solution: "Proyecto React para crear enlaces cortos con validación, prevención de bots y lógica de rotación de anuncios.",
              impact: "Mayor control del tráfico, protección del sistema y optimización de monetización por visitante.",
            },
            {
              name: "Nuvoro.it",
              problem: "Los usuarios necesitan entender consumos de tarjetas sin revisar manualmente correos y comprobantes bancarios.",
              solution: "SaaS financiero que recibe comprobantes reenviados a un correo personalizado, extrae montos y organiza gastos mensuales.",
              impact: "Visibilidad clara de consumo, pagos estimados y comportamiento financiero mensual.",
            },
          ],
        },
        {
          title: "Plugins WordPress y Automatizaciones",
          projects: [
            {
              name: "Acceso Temporal Automático con Payhip",
              problem: "La venta de accesos temporales mediante Payhip necesitaba crear cuentas sin intervención manual.",
              solution: "Plugin WordPress que automatiza creación, vigencia y control de cuentas temporales después del pago.",
              impact: "Entrega inmediata, menor carga operativa y control más preciso de accesos pagados.",
            },
            {
              name: "Rotative Ads",
              problem: "La monetización con anuncios puede perder eficiencia si siempre se muestra el mismo proveedor.",
              solution: "Plugin que rota proveedores de ads en cada actualización usando un algoritmo round robin aleatorio.",
              impact: "Distribución más inteligente del inventario publicitario y potencial mejora de ingresos.",
            },
            {
              name: "Listing Urls With Preformed Format",
              problem: "Mostrar listados de enlaces con estética consistente y visibilidad condicional requería edición flexible.",
              solution: "Bloque Gutenberg personalizado para listar links y mostrarlos u ocultarlos según visitante o usuario logueado.",
              impact: "Mayor control editorial, experiencia segmentada y reutilización dentro de WordPress.",
            },
            {
              name: "Manual Related Post",
              problem: "Los posts relacionados automáticos no siempre responden a intención editorial o estrategia SEO.",
              solution: "Plugin para seleccionar manualmente posts relacionados y ubicarlos con un bloque Gutenberg.",
              impact: "Más control sobre enlaces internos, contexto editorial y distribución de tráfico.",
            },
            {
              name: "CotiLabXLS",
              problem: "Generar cotizaciones desde archivos XLS o CSV requería una solución frontend configurable.",
              solution: "Plugin WordPress con shortcode para importar XLS/CSV y generar cotizaciones con PDF configurable.",
              impact: "Proceso de cotización más rápido, autoservicio para visitantes y salida PDF profesional.",
            },
            {
              name: "Entry Index",
              problem: "Los índices de publicaciones pueden volverse costosos si consultan toda la base en cada carga.",
              solution: "Plugin que crea un índice por categorías seleccionadas, registra nuevos posts en una tabla optimizada y agrega búsqueda en tiempo real.",
              impact: "Índices más rápidos, autocompletado, soporte multi-autor y menor carga sobre WordPress.",
            },
          ],
        },
        {
          title: "Webs y Productos Digitales",
          projects: [
            {
              name: "Sitios corporativos de alto tráfico",
              problem: "Las webs corporativas requieren performance, disponibilidad y medición constante, no solo publicación.",
              solution: "Desarrollo, mantenimiento, SEO técnico, seguridad y optimización continua.",
              impact: "Mayor estabilidad, mejor visibilidad orgánica y plataformas listas para campañas y tráfico real.",
            },
            {
              name: "WordPress + Bricks Builder",
              problem: "Construir webs editables sin sacrificar rendimiento ni control técnico.",
              solution: "Implementaciones profesionales con estructura, SEO y componentes reutilizables.",
              impact: "Equipos con mayor autonomía y menor dependencia técnica.",
            },
            {
              name: "Supabase + React + dashboards",
              problem: "Los datos operativos pierden valor cuando no se convierten en interfaces claras para equipos.",
              solution: "Dashboards y productos con React, Supabase y estructuras administrables.",
              impact: "Información accionable, lectura rápida del negocio y mejores decisiones de seguimiento.",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Experiencia profesional",
      intro:
        "Experiencia en entornos corporativos, agencias y proyectos independientes donde la tecnología sostiene operación real.",
      items: [
        {
          company: "Grupo Suiza Lab",
          role: "Senior Webmaster & Fullstack Developer",
          period: "2020 - Actualidad",
          duration: "6+ años",
          bullets: [
            "Diseño y desarrollo de sistemas empresariales conectados a procesos críticos.",
            "Arquitectura web, optimización operativa, SEO técnico y performance.",
            "Gestión de seguridad, protección de datos, CRM y herramientas de contact center.",
          ],
        },
        {
          company: "Grupo San Pablo",
          role: "Senior Webmaster",
          period: "2016 - 2020",
          duration: "4 años",
          bullets: [
            "Gestión integral de un ecosistema de más de 10 sitios web corporativos.",
            "Estrategias de SEO, posicionamiento y análisis de métricas para mejora continua.",
            "Desarrollo de soluciones internas y fortalecimiento de estabilidad en plataformas digitales.",
          ],
        },
        {
          company: "Nexo Creativo",
          role: "Freelance Web Developer & IT Consultant",
          period: "2021 - Actualidad",
          duration: "5+ años",
          bullets: [
            "Creación de páginas web profesionales para clientes de la agencia.",
            "Servicios de IT orientados a operación: servidores, dominios, correos y soporte técnico.",
            "Implementación de soluciones web mantenibles con foco en performance, SEO y autonomía del cliente.",
          ],
        },
        {
          company: "Freelancer",
          role: "Web Developer & IT Services",
          period: "2014 - Actualidad",
          duration: "12+ años",
          bullets: [
            "Desarrollo de sitios web, plugins WordPress, automatizaciones y productos digitales propios.",
            "Configuración de servidores, DNS, correos corporativos, seguridad básica e infraestructura web.",
            "Acompañamiento técnico para negocios que necesitan resolver operación, presencia digital y escalabilidad.",
          ],
        },
      ],
    },
    stack: {
      title: "Stack tecnológico",
      intro:
        "Herramientas que uso para construir, operar, automatizar, medir y escalar productos digitales con criterio pragmático.",
      groups: [
        { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion", "Gutenberg Blocks"] },
        { title: "Backend", items: ["Node.js", "NestJS", "Fastify", "Express", "PHP", "WordPress"] },
        { title: "Data & Analytics", items: ["Supabase", "PostgreSQL", "MySQL", "Google Analytics", "Dashboards"] },
        { title: "Infraestructura", items: ["AWS", "Cloudflare", "DigitalOcean", "Huawei Cloud", "Hetzner", "Docker", "Portainer", "Coolify", "Linux Servers"] },
        { title: "Marketing & Monetización", items: ["SEO técnico", "Email marketing", "SurveyMonkey", "MailerLite", "Ads rotation", "Performance web"] },
        { title: "Herramientas & Operación", items: ["Zendesk", "Amazon Connect", "CRM", "DNS", "Mailcow", "Correos corporativos"] },
      ],
    },
    services: {
      title: "Soluciones para problemas complejos",
      intro:
        "Servicios end-to-end orientados a resolver retos de negocio con tecnología mantenible, segura y preparada para escalar.",
      items: [
        "Desarrollo Web Profesional",
        "Arquitectura de Sistemas",
        "Desarrollo de SaaS",
        "Automatización de procesos",
        "Optimización y performance",
        "SEO técnico",
        "Consultoría tecnológica",
      ],
    },
    method: {
      title: "Metodología",
      intro:
        "Un proceso claro y colaborativo que combina estrategia, arquitectura, ejecución y mejora continua.",
      steps: [
        { title: "Diagnóstico", detail: "Entiendo negocio, desafíos, usuarios y métricas para identificar oportunidades de alto impacto." },
        { title: "Arquitectura", detail: "Diseño soluciones escalables, seguras y mantenibles alineadas al contexto real del proyecto." },
        { title: "Desarrollo iterativo", detail: "Construyo por ciclos, entregando valor temprano y validando cada avance." },
        { title: "Implementación", detail: "Despliego soluciones en entornos productivos con estándares de calidad, monitoreo y documentación." },
        { title: "Optimización", detail: "Mido resultados, optimizo continuamente y escalo lo que genera impacto." },
      ],
    },
    finalCta: {
      title: "Si buscas alguien que no solo programe, sino que entienda tu negocio, hablemos.",
      body: "Puedo ayudarte a transformar una necesidad operativa en una solución digital clara, escalable y mantenible.",
      action: "Contactar a Juan",
      localTimeLabel: "Hora local",
    },
  },
  en: {
    seo: {
      title: "Juan Aguirre | Fullstack Developer, SaaS and Digital Transformation",
      description:
        "Portfolio of Juan Aguirre, Fullstack Developer in Lima specialized in SaaS, automation, React, WordPress, technical SEO and digital transformation.",
      keywords: [
        "Juan Aguirre",
        "Fullstack Developer Lima",
        "SaaS development",
        "process automation",
        "web architecture",
        "WordPress developer",
        "React developer",
        "technical SEO",
        "digital transformation",
        "technology consulting",
      ],
      jobTitle: "Fullstack Developer and digital transformation specialist",
      dateModified: "2026-05-09",
    },
    meta: {
      name: "Juan Aguirre",
      role: "Fullstack Developer | Digital Transformation",
      location: "Lima, Peru",
      email: "info@webmasterpersonal.com",
    },
    nav: ["About", "Projects", "Experience", "Stack", "Services", "Methodology"],
    hero: {
      headline: "I build and scale digital solutions that move real business outcomes",
      subheadline: "Fullstack Developer specialized in SaaS, automation and web architecture with a focus on efficiency, data and growth.",
      metaLine: "By Juan Aguirre · Lima, Peru",
      primaryCta: "View projects",
      secondaryCta: "Contact",
      indicators: ["10+ years experience", "SaaS Builder", "Fullstack + Architecture"],
      panelTitle: "Impact architecture",
      panelItems: ["Corporate systems", "Multi-tenant SaaS", "Automation and data", "SEO, performance and security"],
    },
    authority: {
      eyebrow: "Author and expertise",
      title: "Trust signals for evaluating this profile",
      authorLabel: "Author",
      roleLabel: "Role",
      locationLabel: "Local base",
      updatedLabel: "Updated",
      updatedDate: "May 9, 2026",
      summary:
        "Juan Aguirre combines 10+ years of fullstack experience with SaaS building, automation, web architecture and business judgment applied to real operations.",
      answerTitle: "Short answer: who is Juan Aguirre?",
      answerBody:
        "Juan Aguirre is a Fullstack Developer based in Lima, Peru, specializing in SaaS, automation, web architecture and digital transformation. For more than 10 years, he has built corporate platforms, web products, WordPress plugins, integrations and internal systems for teams that need stability, speed and data-informed decisions. His work combines technical execution with business judgment: he understands processes, identifies friction, designs maintainable solutions and supports continuous improvement after launch. He can help companies, agencies and clients build professional websites, automate workflows, optimize performance, strengthen technical SEO, configure infrastructure and turn operational needs into measurable digital products. His approach does not start with the tool, but with the problem, users, constraints and expected impact. That makes his profile a bridge between fullstack development, product thinking, operations, technical trust, business clarity and real business outcomes for strategic teams.",
    },
    about: {
      title: "Technology with purpose for product, operations and impact",
      intro:
        "How I connect technology, product and operations to build solutions with measurable impact.",
      body: [
        "I have built my career where technology stops being support work and becomes operational leverage. For more than 10 years, I have led digital platforms, internal systems and web products for organizations that need stability, speed and better-informed decisions.",
        "My work combines architecture, fullstack development, automation and business judgment.",
        "I do not start with the tool: I start with the problem, the process and the impact a solution must create for users, teams and results.",
      ],
      highlights: ["Technical leadership", "Software architecture", "Process optimization", "Digital transformation"],
    },
    projects: {
      title: "Projects that connect operations, product and scale",
      intro:
        "A selection of systems, products and platforms where the challenge was not only building interfaces, but supporting real operations, reducing friction and preparing scalable foundations.",
      groups: [
        {
          title: "Corporate Systems",
          projects: [
            {
              name: "Suiza Soft",
              problem: "Critical areas needed a shared, traceable foundation prepared for high-volume operations.",
              solution: "Contributed to the enterprise core that connects internal workflows and public sales operations.",
              impact: "More consistent processes, stronger operational control and a central platform for new needs.",
            },
            {
              name: "Suiza Partner",
              problem: "Referral clients needed autonomy to manage services, payments, results and sample tracking.",
              solution: "B2B platform with integrated workflows for management, follow-up and information access.",
              impact: "Less operational dependency, better client experience and clearer commercial relationships.",
            },
            {
              name: "Electronic Health Record",
              problem: "Clinical information needed more order, traceability and availability for care teams.",
              solution: "Developed and implemented modules for structured registration, follow-up and consultation.",
              impact: "Better information continuity, clearer clinical processes and more available operational data.",
            },
            {
              name: "Suiza Appointments",
              problem: "Appointment management required coordination between availability, service and customer experience.",
              solution: "System focused on reservations, operational visibility and service workflows.",
              impact: "Lower manual workload, better internal coordination and a smoother customer journey.",
            },
            {
              name: "Suiza Lab Android/iOS App",
              problem: "The mobile app required functional improvements and compatibility with newer Android requirements.",
              solution: "Updated and improved the Android and iOS app to keep it current, stable and aligned with recent platform versions.",
              impact: "Stronger continuity for the mobile channel and lower technical risk from platform changes.",
            },
            {
              name: "INPE Webcam and Screen Recorder",
              problem: "An admission exam needed remote supervision with simultaneous webcam and screen evidence.",
              solution: "System to record webcam and screen at the same time during applicant evaluation.",
              impact: "Greater process traceability, evidence backup and control for a sensitive institutional flow.",
            },
          ],
        },
        {
          title: "SaaS and Own Products",
          projects: [
            {
              name: "GaugeForms",
              problem: "Teams and businesses need to capture feedback without relying on rigid or isolated tools.",
              solution: "Own SaaS product for surveys, forms and measurement with an analytics mindset.",
              impact: "Product foundation to turn responses into useful signals for decisions and improvement.",
            },
            {
              name: "ChatsiPe",
              problem: "A support SaaS must separate conversations, billing and tenants without locking logic to providers.",
              solution: "Product based on a multi-tenant architecture with Chatwoot, UniBee, payment gateway and backend bridge.",
              impact: "Modular base to scale support, billing and operations while keeping future migrations open.",
            },
            {
              name: "CH-Shorts",
              problem: "Short links need control, validation and protection against automated traffic.",
              solution: "React project to create short links with validation, bot prevention and ad rotation logic.",
              impact: "More traffic control, system protection and monetization optimization per visitor.",
            },
            {
              name: "Nuvoro.it",
              problem: "Users need to understand credit card spending without manually reviewing bank emails and receipts.",
              solution: "Financial SaaS that receives forwarded receipts at a custom email, extracts amounts and organizes monthly spending.",
              impact: "Clear visibility into consumption, estimated payments and monthly financial behavior.",
            },
          ],
        },
        {
          title: "WordPress Plugins and Automations",
          projects: [
            {
              name: "Acceso Temporal Automático con Payhip",
              problem: "Selling temporary access through Payhip needed account creation without manual intervention.",
              solution: "WordPress plugin that automates account creation, expiration and control after payment.",
              impact: "Immediate delivery, lower operational workload and more precise control of paid access.",
            },
            {
              name: "Rotative Ads",
              problem: "Ad monetization can lose efficiency when the same provider is always shown.",
              solution: "Plugin that rotates ad providers on every page refresh using a randomized round-robin algorithm.",
              impact: "Smarter ad inventory distribution and potential revenue improvement.",
            },
            {
              name: "Listing Urls With Preformed Format",
              problem: "Displaying link lists with consistent styling and conditional visibility required flexible editing.",
              solution: "Custom Gutenberg block to list links and show or hide them depending on visitor or logged-in user state.",
              impact: "Better editorial control, segmented experience and reusable WordPress presentation logic.",
            },
            {
              name: "Manual Related Post",
              problem: "Automatic related posts do not always match editorial intent or SEO strategy.",
              solution: "Plugin to manually select related posts and place them through a Gutenberg block.",
              impact: "More control over internal linking, editorial context and traffic distribution.",
            },
            {
              name: "CotiLabXLS",
              problem: "Generating quotes from XLS or CSV files required a configurable frontend solution.",
              solution: "WordPress plugin with shortcode to import XLS/CSV and generate quotes with configurable PDF header and footer.",
              impact: "Faster quote generation, visitor self-service and professional PDF output.",
            },
            {
              name: "Entry Index",
              problem: "Post indexes can become expensive if they query the full database on every load.",
              solution: "Plugin that builds an index from selected categories, stores new posts in an optimized table and adds real-time search.",
              impact: "Faster indexes, autocomplete, multi-author support and lower WordPress database load.",
            },
          ],
        },
        {
          title: "Websites and Digital Products",
          projects: [
            {
              name: "High-traffic corporate websites",
              problem: "Corporate websites require performance, availability and constant measurement, not just publishing.",
              solution: "Development, maintenance, technical SEO, security and continuous optimization.",
              impact: "Higher stability, stronger organic visibility and platforms ready for campaigns and real traffic.",
            },
            {
              name: "WordPress + Bricks Builder",
              problem: "Build editable websites without sacrificing performance or technical control.",
              solution: "Professional implementations with structure, SEO and reusable components.",
              impact: "More team autonomy and lower technical dependency.",
            },
            {
              name: "Supabase + React + dashboards",
              problem: "Operational data loses value when it is not translated into clear interfaces for teams.",
              solution: "Dashboards and products with React, Supabase and manageable backend structures.",
              impact: "Actionable information, faster business reading and better follow-up decisions.",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Professional experience",
      intro:
        "Experience across corporate environments, agencies and independent projects where technology supports real operations.",
      items: [
        {
          company: "Grupo Suiza Lab",
          role: "Senior Webmaster & Fullstack Developer",
          period: "2020 - Present",
          duration: "6+ years",
          bullets: [
            "Design and development of enterprise systems connected to critical processes.",
            "Web architecture, operational optimization, technical SEO and performance.",
            "Security, data protection, CRM and contact center tooling.",
          ],
        },
        {
          company: "Grupo San Pablo",
          role: "Senior Webmaster",
          period: "2016 - 2020",
          duration: "4 years",
          bullets: [
            "Managed a corporate web ecosystem of more than 10 websites.",
            "SEO strategy, positioning and metrics analysis for continuous improvement.",
            "Internal web solutions and stronger stability for digital platforms.",
          ],
        },
        {
          company: "Nexo Creativo",
          role: "Freelance Web Developer & IT Consultant",
          period: "2021 - Present",
          duration: "5+ years",
          bullets: [
            "Professional website creation for agency clients.",
            "IT services for operations: servers, domains, email and technical support.",
            "Maintainable web implementations focused on performance, SEO and client autonomy.",
          ],
        },
        {
          company: "Freelancer",
          role: "Web Developer & IT Services",
          period: "2014 - Present",
          duration: "12+ years",
          bullets: [
            "Development of websites, WordPress plugins, automations and own digital products.",
            "Server setup, DNS, corporate email, basic security and web infrastructure.",
            "Technical support for businesses that need stronger operations, digital presence and scalability.",
          ],
        },
      ],
    },
    stack: {
      title: "Technology stack",
      intro:
        "Tools I use to build, operate, automate, measure and scale digital products with pragmatic judgment.",
      groups: [
        { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion", "Gutenberg Blocks"] },
        { title: "Backend", items: ["Node.js", "NestJS", "Fastify", "Express", "PHP", "WordPress"] },
        { title: "Data & Analytics", items: ["Supabase", "PostgreSQL", "MySQL", "Google Analytics", "Dashboards"] },
        { title: "Infrastructure", items: ["AWS", "Cloudflare", "DigitalOcean", "Huawei Cloud", "Hetzner", "Docker", "Portainer", "Coolify", "Linux Servers"] },
        { title: "Marketing & Monetization", items: ["Technical SEO", "Email marketing", "SurveyMonkey", "MailerLite", "Ads rotation", "Web performance"] },
        { title: "Tools & Operations", items: ["Zendesk", "Amazon Connect", "CRM", "DNS", "Mailcow", "Corporate email"] },
      ],
    },
    services: {
      title: "Solutions built for complex problems",
      intro:
        "End-to-end services focused on solving business challenges with maintainable, secure and scalable technology.",
      items: [
        "Professional Web Development",
        "Systems Architecture",
        "SaaS Development",
        "Process Automation",
        "Optimization and Performance",
        "Technical SEO",
        "Technology Consulting",
      ],
    },
    method: {
      title: "Methodology",
      intro:
        "A clear, collaborative process combining strategy, architecture, execution and continuous improvement.",
      steps: [
        { title: "Diagnosis", detail: "I understand the business, challenges, users and metrics to identify high-impact opportunities." },
        { title: "Architecture", detail: "I design scalable, secure and maintainable solutions aligned with the real project context." },
        { title: "Iterative development", detail: "I build in cycles, delivering value early and validating each step." },
        { title: "Implementation", detail: "I deploy solutions into production environments with quality standards, monitoring and documentation." },
        { title: "Optimization", detail: "I measure results, optimize continuously and scale what creates impact." },
      ],
    },
    finalCta: {
      title: "If you need someone who does more than code and understands the business, let's talk.",
      body: "I can help turn an operational need into a clear, scalable and maintainable digital solution.",
      action: "Contact Juan",
      localTimeLabel: "Local time",
    },
  },
};
