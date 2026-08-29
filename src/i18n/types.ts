/**
 * types.ts
 * Forma tipada de un diccionario de traducción completo. Los 5 archivos
 * de idioma (es.ts, en.ts, fr.ts, pt.ts, zh.ts) deben implementar
 * exactamente esta interfaz — si a un idioma le falta una clave,
 * TypeScript lo señala en build time (typecheck), no en producción.
 *
 * Separación de responsabilidades: este archivo NO contiene datos
 * técnicos/invariantes (URLs, ids, fechas, tecnologías, engines,
 * plataformas de enlace...) — esos siguen viviendo exclusivamente en
 * src/data/*.ts. Aquí solo vive contenido traducible: textos de interfaz
 * y las porciones de texto libre (título/contexto/descripción) de cada
 * entrada de datos, indexadas por el mismo `id` estable que ya usan
 * timeline.ts/projects.ts/skills.ts/contact.ts.
 */

export interface TimelineEntryText {
  period: string;
  title: string;
  context: string;
  description: string;
}

export interface ProjectEntryText {
  name: string;
  imageAlt: string;
  shortDescription: string;
  role: string;
}

export interface SoftSkillText {
  name: string;
  description: string;
}

export interface ContactMethodText {
  label: string;
  description: string;
  accessibleLabel: string;
}

export interface CertificateEntryText {
  name: string;
  issuer: string;
  description?: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };

  a11y: {
    skipLink: string;
  };

  header: {
    brandLabel: string;
    brandAria: string;
    primaryNavAria: string;
    nav: {
      home: string;
      about: string;
      projects: string;
      skills: string;
      certificates: string;
      contact: string;
    };
    mobileMenuOpenAria: string;
    mobileMenuCloseAria: string;
    collapseAria: string;
    expandAria: string;
    langTriggerAria: string;
    langMenuAria: string;
  };

  hero: {
    badge: string;
    namePlaceholder: string;
    role: string;
    intro: string;
    tags: [string, string, string, string];
    specializationsAria: string;
    aspiration: string;
    ctaProjects: string;
    ctaCv: string;
    ctaCvAria: string;
    ctaContact: string;
    profileAvailable: string;
    profileAlt: string;
  };

  about: {
    badge: string;
    title: string;
    intro1: string;
    intro2: string;
    interestsAria: string;
    interests: [string, string, string, string];
  };

  timeline: {
    categoryLabels: {
      education: string;
      experience: string;
      project: string;
      milestone: string;
    };
    statusLabels: {
      completed: string;
      'in-progress': string;
      upcoming: string;
    };
    currentBadge: string;
    entries: Record<string, TimelineEntryText>;
  };

  projects: {
    badge: string;
    title: string;
    lead: string;
    filtersAria: string;
    filters: {
      all: string;
      pc: string;
      mobile: string;
      console: string;
      multiplatform: string;
    };
    emptyMessage: string;
    listAria: string;
    roleLabel: string;
    engineLabel: string;
    techListAria: string;
    placeholderTag: string;
    githubAction: string;
    githubAria: (project: string) => string;
    youtubeAction: string;
    youtubeAria: (project: string) => string;
    downloadAction: string;
    downloadAria: (project: string) => string;
    storeAria: (project: string, store: string) => string;
    statusLabels: {
      completed: string;
      'in-development': string;
      prototype: string;
      'game-jam': string;
    };
    platformLabels: {
      pc: string;
      mobile: string;
      console: string;
      web: string;
    };
    platformSoloPrefix: string;
    platformMultiLabel: string;
    platformUnknownLabel: string;
    entries: Record<string, ProjectEntryText>;
  };

  skills: {
    badge: string;
    title: string;
    lead: string;
    technicalHeading: string;
    softHeading: string;
    softListAria: string;
    groupLabels: {
      language: string;
      engine: string;
      tool: string;
      other: string;
    };
    placeholderTag: string;
    softSkills: Record<string, SoftSkillText>;
  };

  certificates: {
    badge: string;
    title: string;
    lead: string;
    categoryLabels: {
      local: string;
      global: string;
    };
    syncingText: string;
    doneText: string;
    verifyAction: string;
    verifyAria: (name: string) => string;
    statusLabels: {
      active: string;
      expired: string;
      'in-progress': string;
    };
    entries: Record<string, CertificateEntryText>;
  };

  contact: {
    badge: string;
    title: string;
    lead: string;
    listAria: string;
    pendingTag: string;
    copyLabel: string;
    copiedLabel: string;
    copyErrorLabel: string;
    copyAria: (label: string) => string;
    methods: Record<string, ContactMethodText>;
  };

  footer: {
    namePlaceholder: string;
    role: string;
    lastUpdateLabel: string;
    systemStatusLabel: string;
    onlineLabel: string;
    backToTopAria: string;
  };
}
