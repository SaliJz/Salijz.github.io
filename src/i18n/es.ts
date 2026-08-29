import type { Dictionary } from './types';

/**
 * es.ts — Español, idioma predeterminado.
 * Debe coincidir EXACTAMENTE con el texto que ya estaba hardcodeado en los
 * componentes antes de esta etapa, para que activar el sistema de i18n no
 * cambie nada visualmente en el idioma por defecto.
 */
const es: Dictionary = {
  meta: {
    title: 'Joaquin Salinas | Portfolio',
    description: 'Portafolio de Joaquin Salinas: proyectos en Unity y C#, technical game design, technical QA y gameplay programming.',
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
    namePlaceholder: 'Joaquin Augusto Salinas Tuesta',
    role: 'Technical Game Designer · Technical QA · Gameplay Programmer',
    intro:
      'Estudiante de Diseño de Videojuegos con experiencia desarrollando proyectos en Unity y C#. He trabajado en sistemas de gameplay, diseño técnico, optimización y QA, combinando implementación de mecánicas con pruebas y debugging para mejorar la estabilidad de la experiencia.',
    tags: ['Unity + C#', 'Gameplay Systems', 'Technical QA', 'Git/GitHub'],
    specializationsAria: 'Áreas de especialización',
    aspiration: 'Mi perfil se orienta principalmente al Technical Game Design y Technical QA, complementado con experiencia en Gameplay Programming.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    ctaCvAria: 'Descargar CV en PDF',
    ctaContact: 'Contacto',
    profileAvailable: 'Disponible',
    profileAlt: 'Fotografía profesional — pendiente de añadir',
  },

  about: {
    badge: 'Sobre mí',
    title: 'Perfil y trayectoria',
    intro1:
      'Estudio Diseño de Videojuegos y Entretenimiento Digital y he desarrollado proyectos en Unity utilizando C#. Mi experiencia se concentra en sistemas de gameplay, documentación de diseño, balance, optimización y control de calidad técnico.',
    intro2:
      'En proyectos académicos he implementado mecánicas, trabajado con arquitecturas modulares y sistemas procedurales, realizado playtesting y debugging y colaborado mediante Git/GitHub. La línea de tiempo resume los proyectos y reconocimientos principales de ese recorrido.',
    interestsAria: 'Intereses profesionales',
    interests: ['Gameplay Systems', 'Technical Game Design', 'Gameplay Balancing', 'Technical QA'],
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
      'education-toulouse': { period: 'Mar. 2023 — Actualidad',
        title: 'Diseño de Videojuegos y Entretenimiento Digital',
        context: 'Toulouse Lautrec · Lima, Perú',
        description: 'Formación técnica en Diseño de Videojuegos y Entretenimiento Digital, actualmente en curso.',
      },
      'project-eden-404': { period: 'Mar. 2025 — Jul. 2025',
        title: 'Eden 404',
        context: 'FPS 3D · Proyecto académico',
        description: 'Implementación de mecánicas de gameplay y sistemas de interacción, resolución de problemas de estabilidad y rendimiento y optimización de sistemas procedurales.',
      },
      'project-forsaken-rules': { period: 'Sept. 2025 — Jul. 2026',
        title: 'Forsaken Rules',
        context: 'Roguelike isométrico 3D · Publicado en Steam',
        description: 'Desarrollo de sistemas y mecánicas principales en Unity/C#, arquitectura modular, playtesting técnico continuo y contribución a la optimización y estabilidad del proyecto.',
      },
      'project-franklins-journey': { period: 'Sept. 2025 — Nov. 2025',
        title: 'El Viaje de Franklin',
        context: 'Bullet Hell 2D · Android',
        description: 'Desarrollo de sistemas para generación masiva de proyectiles, optimización para dispositivos móviles y pruebas técnicas hasta obtener una versión estable.',
      },
      'recognition-guardianes': { period: 'Mayo 2026',
        title: 'Certificado de Contribución',
        context: 'Asociación Civil Turismo Cuida',
        description: 'Reconocimiento oficial por la contribución realizada al proyecto Guardianes del Humedal.',
      },
    },
  },

  projects: {
    badge: 'Proyectos',
    title: 'Proyectos',
    lead: 'Proyectos académicos en los que he trabajado principalmente en diseño técnico, QA, optimización y gameplay programming utilizando Unity, C# y Git/GitHub.',
    filtersAria: 'Filtrar proyectos por plataforma',
    filters: { all: 'Todos', pc: 'PC', mobile: 'Móvil', console: 'Consola', multiplatform: 'Multiplataforma' },
    emptyMessage: 'Ningún proyecto coincide con este filtro.',
    listAria: 'Lista de proyectos',
    roleLabel: 'Rol',
    engineLabel: 'Motor',
    techListAria: 'Tecnologías y áreas',
    placeholderTag: 'Contenido pendiente de confirmar',
    githubAction: 'GitHub',
    githubAria: (project) => `Repositorio de ${project} en GitHub`,
    youtubeAction: 'Ver video',
    youtubeAria: (project) => `Ver video de ${project} en YouTube`,
    downloadAction: 'Descargar',
    downloadAria: (project) => `Descargar ${project}`,
    storeAria: (project, store) => `${project} en ${store}`,
    statusLabels: { completed: 'Completado', 'in-development': 'En desarrollo', prototype: 'Prototipo', 'game-jam': 'Game Jam' },
    platformLabels: { pc: 'PC', mobile: 'Móvil', console: 'Consola', web: 'Web' },
    platformSoloPrefix: 'Solo',
    platformMultiLabel: 'Multiplataforma',
    platformUnknownLabel: 'Por confirmar',
    entries: {
      'forsaken-rules': { imageAlt: 'Arte promocional de Forsaken Rules con logotipo y personajes del juego',
        name: 'Forsaken Rules',
        shortDescription: 'Roguelike isométrico 3D publicado en Steam. Desarrollo de sistemas de gameplay y mecánicas en Unity/C#, arquitectura modular, playtesting técnico y optimización.',
        role: 'Gameplay Programmer / Technical Game Designer',
      },
      'eden-404': { imageAlt: 'Imagen promocional de Eden 404 con personaje principal y logotipo del proyecto',
        name: 'Eden 404',
        shortDescription: 'FPS 3D en el que implementé mecánicas de gameplay y sistemas de interacción, resolví problemas de estabilidad y rendimiento y optimicé sistemas procedurales.',
        role: 'Gameplay Programmer / Technical Designer',
      },
      'franklins-journey': { imageAlt: 'Pantalla de título de El Viaje de Franklin',
        name: 'El Viaje de Franklin',
        shortDescription: 'Bullet Hell 2D para Android. Desarrollé un sistema eficiente para la generación masiva de proyectiles, optimicé el rendimiento móvil y realicé validación funcional.',
        role: 'Gameplay Programmer',
      },
    },
  },

  skills: {
    badge: 'Habilidades',
    title: 'Habilidades',
    lead: 'Competencias técnicas aplicadas al desarrollo de videojuegos, diseño de sistemas, optimización y control de calidad.',
    technicalHeading: 'Habilidades técnicas',
    softHeading: 'Habilidades blandas',
    softListAria: 'Habilidades blandas',
    groupLabels: { language: 'Programación', engine: 'Motor', tool: 'Herramientas y flujo', other: 'Diseño, desarrollo y QA' },
    placeholderTag: 'Contenido pendiente de confirmar',
    softSkills: {},
  },

  certificates: {
    badge: 'Certificados',
    title: 'Certificados y reconocimientos',
    lead: 'Reconocimientos y credenciales relacionados con formación, idiomas y proyectos.',
    categoryLabels: { local: 'Reconocimientos locales', global: 'Credenciales globales' },
    syncingText: 'Registro pendiente',
    doneText: 'Aún no hay credenciales en esta categoría.',
    verifyAction: 'Ver certificado',
    verifyAria: (name) => `Abrir certificado: ${name}`,
    statusLabels: { active: 'Vigente', expired: 'Expirado', 'in-progress': 'En curso' },
    entries: {
      'tourism-care-contribution': {
        name: 'Certificado de Contribución',
        issuer: 'Asociación Civil Turismo Cuida',
        description: 'Reconocimiento por la contribución realizada al proyecto Guardianes del Humedal.',
      },
      'office-domain-romero': {
        name: 'Dominio Office',
        issuer: 'Fundación Romero · Becas Grupo Romero',
        description: 'Curso completado satisfactoriamente con una duración de 80 horas académicas.',
      },
      'advanced-english-british-center': {
        name: 'Inglés Avanzado',
        issuer: 'El Centro Británico · Ucayali',
        description: 'Certificado de capacitación en Inglés Avanzado con una duración de 440 horas.',
      },
      'ef-set-c1-advanced': {
        name: 'EF SET English Certificate — C1 Advanced',
        issuer: 'EF SET',
        description: 'Resultado 69/100, correspondiente a C1 Advanced según el CEFR.',
      },
    },
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    lead: 'Si quieres conversar sobre una oportunidad, colaboración o proyecto de desarrollo de videojuegos, puedes contactarme por estos medios.',
    listAria: 'Métodos de contacto',
    pendingTag: 'Pendiente de confirmar',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado',
    copyErrorLabel: 'No se pudo copiar',
    copyAria: (label) => `Copiar ${label} al portapapeles`,
    methods: {
      'contact-email': { label: 'Email', description: 'Contacto directo para oportunidades, colaboraciones o proyectos.', accessibleLabel: 'Enviar un correo a Joaquin Salinas' },
      'contact-github': { label: 'GitHub', description: 'Repositorios y código de proyectos de videojuegos.', accessibleLabel: 'Abrir el perfil de GitHub de Joaquin Salinas en una pestaña nueva' },
      'contact-linkedin': { label: 'LinkedIn', description: 'Perfil profesional, formación y trayectoria.', accessibleLabel: 'Abrir el perfil de LinkedIn de Joaquin Salinas en una pestaña nueva' },
    },
  },

  footer: {
    namePlaceholder: 'Joaquin Augusto Salinas Tuesta',
    role: 'Technical Game Designer · Technical QA · Gameplay Programmer',
    lastUpdateLabel: 'Última actualización',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: 'Volver al inicio',
  },
};

export default es;
