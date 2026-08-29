import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Joaquin Salinas | Portfolio',
    description: 'Joaquin Salinas portfolio: Unity and C# projects, gameplay programming, technical game design, and technical QA.',
  },

  a11y: {
    skipLink: 'Skip to content',
  },

  header: {
    brandLabel: 'Portfolio',
    brandAria: 'Portfolio — go to home',
    primaryNavAria: 'Primary navigation',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    mobileMenuOpenAria: 'Open navigation menu',
    mobileMenuCloseAria: 'Close navigation menu',
    collapseAria: 'Collapse navigation',
    expandAria: 'Expand navigation',
    langTriggerAria: 'Change language',
    langMenuAria: 'Select language',
  },

  hero: {
    badge: 'Game Dev · Technical Design · QA',
    namePlaceholder: 'Joaquin Augusto Salinas Tuesta',
    role: 'Technical Game Designer · Gameplay Programmer · Technical QA',
    intro: 'Game Design student with hands-on experience developing Unity projects using C#. I have worked on gameplay systems, technical design, performance optimization, and QA, combining implementation with playtesting and debugging to improve gameplay stability.',
    tags: ['Unity + C#', 'Gameplay Systems', 'Technical QA', 'Git/GitHub'],
    specializationsAria: 'Areas of specialization',
    aspiration: 'Seeking Game Design or Technical Game Design opportunities where I can contribute to real projects while continuing to develop my design and technical skills.',
    ctaProjects: 'View projects',
    ctaCv: 'Download Resume',
    ctaCvAria: 'Download résumé as PDF',
    ctaContact: 'Contact',
    profileAvailable: 'Available',
    profileAlt: 'Professional photo — pending',
  },

  about: {
    badge: 'About me',
    title: 'Profile and background',
    intro1: 'I study Game Design and Digital Entertainment and have hands-on experience developing Unity projects with C#. My work focuses on gameplay systems, design documentation, balancing, performance optimization, and technical QA.',
    intro2: 'Across academic projects I have implemented mechanics, worked with modular architecture and procedural systems, performed playtesting and debugging, and collaborated through Git/GitHub. The timeline summarizes the main projects and recognition from that path.',
    interestsAria: 'Professional interests',
    interests: ['Gameplay Systems', 'Technical Game Design', 'Gameplay Balancing', 'Technical QA'],
  },

  timeline: {
    categoryLabels: { education: 'Education', experience: 'Experience', project: 'Notable project', milestone: 'Professional milestone' },
    statusLabels: { completed: 'Completed', 'in-progress': 'In progress', upcoming: 'Upcoming' },
    currentBadge: 'Current',
    entries: {
      'education-toulouse': { period: 'Mar 2023 — Present', title: 'Game Design and Digital Entertainment', context: 'Toulouse Lautrec · Peru', description: 'Technical studies in Game Design and Digital Entertainment, currently in progress with expected graduation in December 2026.' },
      'project-eden-404': { period: 'Mar 2025 — Jul 2025', title: 'Eden 404', context: '3D First-Person Shooter · Academic project', description: 'Implemented gameplay mechanics and player interaction systems, solved technical issues affecting stability and performance, and optimized procedural systems.' },
      'project-forsaken-rules': { period: 'Sep 2025 — Jul 2026', title: 'Forsaken Rules', context: '3D Isometric Roguelike · Published on Steam', description: 'Developed core gameplay systems in Unity/C#, designed modular systems, conducted continuous technical playtesting, and contributed to gameplay stability and runtime performance optimization.' },
      'project-franklins-journey': { period: 'Sep 2025 — Nov 2025', title: "Franklin's Journey", context: '2D Bullet Hell · Android', description: 'Developed an efficient projectile management system for large-scale bullet spawning, optimized mobile performance, and performed functional testing and technical validation.' },
      'recognition-guardianes': { period: 'May 2026', title: 'Certificate of Contribution', context: 'Tourism Care Civil Association', description: 'Recognized for contributing to the Guardianes del Humedal project.' },
    },
  },

  projects: {
    badge: 'Projects',
    title: 'Projects',
    lead: 'Academic game projects where I worked primarily on gameplay programming, technical design, optimization, and QA using Unity, C#, and Git/GitHub.',
    filtersAria: 'Filter projects by platform',
    filters: { all: 'All', pc: 'PC', mobile: 'Mobile', console: 'Console', multiplatform: 'Multiplatform' },
    emptyMessage: 'No project matches this filter.',
    listAria: 'Project list',
    roleLabel: 'Role', engineLabel: 'Engine', techListAria: 'Technologies and areas', placeholderTag: 'Content pending confirmation',
    githubAction: 'GitHub', githubAria: (project) => `${project} repository on GitHub`,
    youtubeAction: 'Watch video', youtubeAria: (project) => `Watch ${project} on YouTube`,
    downloadAction: 'Download', downloadAria: (project) => `Download ${project}`,
    storeAria: (project, store) => `${project} on ${store}`,
    statusLabels: { completed: 'Completed', 'in-development': 'In Development', prototype: 'Prototype', 'game-jam': 'Game Jam' },
    platformLabels: { pc: 'PC', mobile: 'Mobile', console: 'Console', web: 'Web' },
    platformSoloPrefix: 'Only', platformMultiLabel: 'Multiplatform', platformUnknownLabel: 'To be confirmed',
    entries: {
      'forsaken-rules': { imageAlt: 'Forsaken Rules key art featuring the logo and main characters', name: 'Forsaken Rules', shortDescription: '3D isometric roguelike published on Steam. Developed gameplay systems and reusable mechanics in Unity/C#, modular architecture, technical playtesting, and performance optimization.', role: 'Gameplay Programmer / Technical Game Designer' },
      'eden-404': { imageAlt: 'Promotional image for Eden 404 with the main character and project logo', name: 'Eden 404', shortDescription: '3D first-person shooter where I implemented gameplay mechanics and player interaction systems, solved stability and performance issues, and optimized procedural systems.', role: 'Gameplay Programmer / Technical Designer' },
      'franklins-journey': { imageAlt: "Title screen for Franklin's Journey", name: "Franklin's Journey", shortDescription: '2D bullet hell for Android. Developed an efficient projectile management system, optimized mobile performance, and performed functional testing and technical validation.', role: 'Gameplay Programmer' },
    },
  },

  skills: {
    badge: 'Skills', title: 'Skills', lead: 'Technical skills applied to game development, systems design, optimization, and quality assurance.', technicalHeading: 'Technical skills', softHeading: 'Soft skills', softListAria: 'Soft skills',
    groupLabels: { language: 'Programming', engine: 'Engine', tool: 'Tools and workflow', other: 'Design, development and QA' }, placeholderTag: 'Content pending confirmation', softSkills: {},
  },

  certificates: {
    badge: 'Certificates',
    title: 'Certificates and recognition',
    lead: 'Recognition and credentials related to training, languages, and projects.',
    categoryLabels: { local: 'Local recognition', global: 'Global credentials' },
    syncingText: 'Record pending',
    doneText: 'No credentials in this category yet.',
    verifyAction: 'View certificate',
    verifyAria: (name) => `Open certificate: ${name}`,
    statusLabels: { active: 'Issued', expired: 'Expired', 'in-progress': 'In progress' },
    entries: {
      'tourism-care-contribution': {
        name: 'Certificate of Contribution',
        issuer: 'Tourism Care Civil Association',
        description: 'Recognition for the contribution made to the Guardianes del Humedal project.',
      },
      'office-domain-romero': {
        name: 'Microsoft Office Proficiency',
        issuer: 'Fundación Romero · Becas Grupo Romero',
        description: 'Course successfully completed with a duration of 80 academic hours.',
      },
      'advanced-english-british-center': {
        name: 'Advanced English',
        issuer: 'El Centro Británico · Ucayali',
        description: 'Advanced English training certificate with a duration of 440 hours.',
      },
      'ef-set-c1-advanced': {
        name: 'EF SET English Certificate — C1 Advanced',
        issuer: 'EF SET',
        description: 'Score of 69/100, corresponding to C1 Advanced on the CEFR.',
      },
    },
  },

  contact: {
    badge: 'Contact', title: "Let's talk", lead: 'If you would like to discuss an opportunity, collaboration, or game development project, you can reach me through these channels.', listAria: 'Contact methods', pendingTag: 'Pending confirmation', copyLabel: 'Copy', copiedLabel: 'Copied', copyErrorLabel: 'Could not copy', copyAria: (label) => `Copy ${label} to clipboard`,
    methods: {
      'contact-email': { label: 'Email', description: 'Direct contact for opportunities, collaborations, or projects.', accessibleLabel: 'Send an email to Joaquin Salinas' },
      'contact-github': { label: 'GitHub', description: 'Code and repositories from game projects.', accessibleLabel: 'Open Joaquin Salinas GitHub profile in a new tab' },
      'contact-linkedin': { label: 'LinkedIn', description: 'Professional background, education, and experience.', accessibleLabel: 'Open Joaquin Salinas LinkedIn profile in a new tab' },
    },
  },

  footer: { namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Gameplay Programmer · Technical QA', lastUpdateLabel: 'Last updated', systemStatusLabel: 'SYSTEM STATUS', onlineLabel: 'ONLINE', backToTopAria: 'Back to top' },
};

export default en;
