import type { Dictionary } from './types';

/**
 * es.ts — Español, idioma predeterminado.
 * Debe coincidir EXACTAMENTE con el texto que ya estaba hardcodeado en los
 * componentes antes de esta etapa, para que activar el sistema de i18n no
 * cambie nada visualmente en el idioma por defecto.
 */
const es: Dictionary = {
  meta: {
    title: 'Portafolio — en construcción',
    description: 'Hero del portafolio en desarrollo — entorno temporal de validación del Layout Global y el Design System.',
  },

  a11y: {
    skipLink: 'Saltar al contenido',
  },

  header: {
    brandLabel: 'Portafolio',
    brandAria: 'Portafolio — ir al inicio',
    primaryNavAria: 'Navegación principal',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      certificates: 'Certificados',
      contact: 'Contacto',
    },
    mobileMenuOpenAria: 'Abrir menú de navegación',
    mobileMenuCloseAria: 'Cerrar menú de navegación',
    collapseAria: 'Contraer navegación',
    expandAria: 'Expandir navegación',
    langTriggerAria: 'Cambiar idioma',
    langMenuAria: 'Seleccionar idioma',
  },

  hero: {
    badge: 'Game Dev · Technical Design · QA',
    namePlaceholder: 'Nombre Apellido',
    role: 'Game Developer · Technical Designer · QA Engineer',
    intro:
      'Diseño y construyo sistemas de juego con la misma atención con la que los pongo a prueba: de la mecánica al pipeline, y del pipeline a la calidad. Placeholder de presentación — se reemplazará por el texto definitivo.',
    tags: ['Gameplay Programming', 'Diseño de Sistemas', 'QA & Automation', 'Herramientas'],
    specializationsAria: 'Áreas de especialización',
    aspiration: 'Explorando el diseño de sistemas de combate y herramientas para equipos de desarrollo.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    ctaCvAria: 'Descargar currículum en PDF',
    ctaContact: 'Contacto',
    profileAvailable: 'Disponible',
    profileAlt: 'Fotografía profesional — próximamente',
  },

  about: {
    badge: 'Sobre mí',
    title: 'Perfil y trayectoria',
    intro1:
      'Placeholder de presentación — texto pendiente de validar. Trabajo en la intersección entre desarrollo de videojuegos, diseño técnico y aseguramiento de calidad: me interesa tanto construir sistemas de juego como asegurarme de que funcionen como deberían antes de llegar a manos del jugador.',
    intro2:
      'Placeholder — evolución profesional y académica pendiente de completar con datos reales. El recorrido concreto (formación, experiencia y proyectos) se detalla en la línea de tiempo a continuación.',
    interestsAria: 'Intereses profesionales',
    interests: [
      'Diseño de sistemas de juego',
      'Programación gameplay',
      'Calidad y testing (QA)',
      'Resolución de problemas técnicos',
    ],
  },

  timeline: {
    categoryLabels: {
      education: 'Formación',
      experience: 'Experiencia',
      project: 'Proyecto relevante',
      milestone: 'Hito profesional',
    },
    statusLabels: {
      completed: 'Completado',
      'in-progress': 'En curso',
      upcoming: 'Próximo',
    },
    currentBadge: 'Actual',
    entries: {
      'education-base': {
        title: 'Formación pendiente de confirmar',
        context: 'Institución por confirmar',
        description:
          'Placeholder: aquí irá la formación académica o técnica de base (carrera, bootcamp, etc.). Sustituir por la institución, título exacto y periodo real.',
      },
      'milestone-first-project': {
        title: 'Primer proyecto relevante (pendiente)',
        context: 'Contexto por confirmar',
        description:
          'Placeholder: hito profesional o académico significativo (p. ej. primer game jam, primer proyecto publicado). Sustituir por el hito real.',
      },
      'experience-current': {
        title: 'Rol actual pendiente de confirmar',
        context: 'Empresa u organización por confirmar',
        description:
          'Placeholder: experiencia profesional actual como Game Developer / Technical Designer / QA. Sustituir por el cargo, empresa y responsabilidades reales.',
      },
      'project-featured': {
        title: 'Proyecto destacado (pendiente)',
        context: 'Proyecto por confirmar',
        description:
          'Placeholder: un proyecto especialmente representativo del perfil (no necesariamente el mismo que aparecerá en la sección Proyectos). Sustituir cuando se confirme cuál destacar aquí.',
      },
    },
  },

  projects: {
    badge: 'Proyectos',
    title: 'Proyectos',
    lead: 'Una muestra de proyectos de desarrollo de videojuegos, diseño técnico y QA. El contenido de esta sección todavía es de ejemplo — se sustituirá por proyectos reales próximamente.',
    filtersAria: 'Filtrar proyectos por plataforma',
    filters: {
      all: 'Todos',
      pc: 'PC',
      mobile: 'Móvil',
      console: 'Consola',
      multiplatform: 'Multiplataforma',
    },
    emptyMessage: 'Ningún proyecto coincide con este filtro todavía.',
    listAria: 'Lista de proyectos',
    roleLabel: 'Rol',
    engineLabel: 'Motor',
    techListAria: 'Tecnologías',
    placeholderTag: 'Contenido pendiente de confirmar',
    githubAction: 'GitHub',
    githubAria: (project) => `Repositorio de ${project} en GitHub`,
    youtubeAction: 'YouTube',
    youtubeAria: (project) => `Ver ${project} en YouTube`,
    downloadAction: 'Descargar',
    downloadAria: (project) => `Descargar ${project}`,
    storeAria: (project, store) => `${project} en ${store}`,
    statusLabels: {
      completed: 'Completed',
      'in-development': 'In Development',
      prototype: 'Prototype',
      'game-jam': 'Game Jam',
    },
    platformLabels: {
      pc: 'PC',
      mobile: 'Móvil',
      console: 'Consola',
      web: 'Web',
    },
    platformSoloPrefix: 'Solo',
    platformMultiLabel: 'Multiplataforma',
    platformUnknownLabel: 'Por confirmar',
    entries: {
      'proyecto-placeholder-uno': {
        name: 'Proyecto destacado (pendiente)',
        shortDescription: 'Placeholder: descripción corta de un proyecto de gameplay/sistemas. Sustituir por el proyecto real.',
        role: 'Rol por confirmar',
      },
      'proyecto-placeholder-dos': {
        name: 'Game Jam (pendiente)',
        shortDescription: 'Placeholder: proyecto realizado en una game jam. Sustituir por el nombre y contexto reales del jam.',
        role: 'Rol por confirmar',
      },
      'proyecto-placeholder-tres': {
        name: 'Proyecto móvil (pendiente)',
        shortDescription: 'Placeholder: proyecto multiplataforma con foco en QA/testing. Sustituir por el proyecto real.',
        role: 'Rol por confirmar',
      },
      'proyecto-placeholder-cuatro': {
        name: 'Proyecto completado (pendiente)',
        shortDescription: 'Placeholder: proyecto cerrado, sin enlaces públicos todavía. Sustituir cuando se confirme.',
        role: 'Rol por confirmar',
      },
    },
  },

  skills: {
    badge: 'Habilidades',
    title: 'Habilidades',
    lead: 'Una combinación de conocimientos técnicos y habilidades blandas aplicadas al desarrollo de videojuegos, diseño técnico y QA. Los elementos mostrados son ejemplos pendientes de confirmar con contenido definitivo.',
    technicalHeading: 'Habilidades técnicas',
    softHeading: 'Habilidades blandas',
    softListAria: 'Habilidades blandas',
    groupLabels: {
      language: 'Lenguajes',
      engine: 'Motores y engines',
      tool: 'Herramientas y flujo de trabajo',
      other: 'Otros',
    },
    placeholderTag: 'Contenido pendiente de confirmar',
    softSkills: {
      'soft-teamwork': {
        name: 'Trabajo en equipo',
        description: 'Placeholder: colaboración con equipos multidisciplinares (diseño, arte, programación, QA).',
      },
      'soft-communication': {
        name: 'Comunicación técnica',
        description: 'Placeholder: capacidad de explicar problemas y soluciones técnicas a perfiles no técnicos.',
      },
      'soft-problem-solving': {
        name: 'Resolución de problemas',
        description: 'Placeholder: diagnóstico y resolución metódica de bugs y problemas de diseño de sistemas.',
      },
      'soft-attention-detail': {
        name: 'Atención al detalle',
        description: 'Placeholder: mentalidad de QA aplicada también al propio desarrollo.',
      },
      'soft-adaptability': {
        name: 'Aprendizaje continuo',
        description: 'Placeholder: adaptación a nuevas herramientas, motores y flujos de trabajo.',
      },
      'soft-time-management': {
        name: 'Gestión del tiempo',
        description: 'Placeholder: organización de tareas bajo plazos ajustados (game jams, sprints).',
      },
    },
  },

  certificates: {
    badge: 'Certificados',
    title: 'Certificados',
    lead: 'Certificaciones locales e internacionales relacionadas con desarrollo de videojuegos, diseño técnico y QA.',
    categoryLabels: {
      local: 'Certificados locales',
      global: 'Certificados globales',
    },
    syncingText: 'Sincronizando certificados…',
    doneText: 'No hay certificados disponibles por el momento.',
    verifyAction: 'Verificar',
    verifyAria: (name) => `Verificar credencial: ${name}`,
    statusLabels: {
      active: 'Vigente',
      expired: 'Expirado',
      'in-progress': 'En progreso',
    },
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    lead: 'Placeholder de invitación — texto pendiente de validar. ¿Un proyecto, una oportunidad, o simplemente ganas de hablar de desarrollo de videojuegos? Estos son los canales para contactarme.',
    listAria: 'Métodos de contacto',
    pendingTag: 'Pendiente de confirmar',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado',
    copyErrorLabel: 'No se pudo copiar',
    copyAria: (label) => `Copiar ${label} al portapapeles`,
    methods: {
      'contact-email': {
        label: 'Correo electrónico',
        description: 'La vía más directa para hablar de una oportunidad, colaboración o proyecto.',
        accessibleLabel: 'Enviar un correo electrónico — dirección pendiente de confirmar',
      },
      'contact-github': {
        label: 'GitHub',
        description: 'Repositorios y código de proyectos personales y colaborativos.',
        accessibleLabel: 'Abrir perfil de GitHub (se abre en una pestaña nueva) — enlace pendiente de confirmar',
      },
      'contact-linkedin': {
        label: 'LinkedIn',
        description: 'Trayectoria profesional y experiencia.',
        accessibleLabel: 'Abrir perfil de LinkedIn (se abre en una pestaña nueva) — enlace pendiente de confirmar',
      },
      'contact-itchio': {
        label: 'itch.io',
        description: 'Proyectos y prototipos de videojuegos publicados.',
        accessibleLabel: 'Abrir perfil de itch.io (se abre en una pestaña nueva) — enlace pendiente de confirmar',
      },
    },
  },

  footer: {
    namePlaceholder: 'Nombre Apellido',
    role: 'Game Developer · Technical Designer · QA',
    lastUpdateLabel: 'Última actualización',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: 'Volver al inicio',
  },
};

export default es;
