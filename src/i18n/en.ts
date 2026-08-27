import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Portfolio — under construction',
    description: 'Portfolio hero in development — temporary environment to validate the Global Layout and Design System.',
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
    namePlaceholder: 'Name Surname',
    role: 'Game Developer · Technical Designer · QA Engineer',
    intro:
      "I design and build game systems with the same care I use to test them: from mechanic to pipeline, and from pipeline to quality. Placeholder copy — will be replaced with final text.",
    tags: ['Gameplay Programming', 'Systems Design', 'QA & Automation', 'Tooling'],
    specializationsAria: 'Areas of specialization',
    aspiration: 'Exploring combat systems design and tooling for development teams.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    ctaCvAria: 'Download résumé as PDF',
    ctaContact: 'Contact',
    profileAvailable: 'Available',
    profileAlt: 'Professional photo — coming soon',
  },

  about: {
    badge: 'About me',
    title: 'Profile and background',
    intro1:
      "Placeholder copy — pending review. I work at the intersection of game development, technical design, and quality assurance: I care as much about building game systems as making sure they work the way they should before they reach a player.",
    intro2:
      'Placeholder — professional and academic background pending real data. The concrete path (education, experience and projects) is detailed in the timeline below.',
    interestsAria: 'Professional interests',
    interests: ['Game systems design', 'Gameplay programming', 'Quality and testing (QA)', 'Technical problem solving'],
  },

  timeline: {
    categoryLabels: {
      education: 'Education',
      experience: 'Experience',
      project: 'Notable project',
      milestone: 'Professional milestone',
    },
    statusLabels: {
      completed: 'Completed',
      'in-progress': 'In progress',
      upcoming: 'Upcoming',
    },
    currentBadge: 'Current',
    entries: {
      'education-base': {
        title: 'Education pending confirmation',
        context: 'Institution to be confirmed',
        description:
          'Placeholder: base academic or technical education (degree, bootcamp, etc.) goes here. Replace with the real institution, exact title, and period.',
      },
      'milestone-first-project': {
        title: 'First notable project (pending)',
        context: 'Context to be confirmed',
        description:
          'Placeholder: a significant professional or academic milestone (e.g. first game jam, first published project). Replace with the real milestone.',
      },
      'experience-current': {
        title: 'Current role pending confirmation',
        context: 'Company or organization to be confirmed',
        description:
          'Placeholder: current professional experience as a Game Developer / Technical Designer / QA. Replace with the real title, company, and responsibilities.',
      },
      'project-featured': {
        title: 'Featured project (pending)',
        context: 'Project to be confirmed',
        description:
          "Placeholder: a project especially representative of this profile (not necessarily the same one shown in the Projects section). Replace once confirmed.",
      },
    },
  },

  projects: {
    badge: 'Projects',
    title: 'Projects',
    lead: 'A sample of game development, technical design, and QA projects. The content in this section is still an example — it will be replaced with real projects soon.',
    filtersAria: 'Filter projects by platform',
    filters: {
      all: 'All',
      pc: 'PC',
      mobile: 'Mobile',
      console: 'Console',
      multiplatform: 'Multiplatform',
    },
    emptyMessage: 'No project matches this filter yet.',
    listAria: 'Project list',
    roleLabel: 'Role',
    engineLabel: 'Engine',
    techListAria: 'Technologies',
    placeholderTag: 'Content pending confirmation',
    githubAction: 'GitHub',
    githubAria: (project) => `${project} repository on GitHub`,
    youtubeAction: 'YouTube',
    youtubeAria: (project) => `Watch ${project} on YouTube`,
    downloadAction: 'Download',
    downloadAria: (project) => `Download ${project}`,
    storeAria: (project, store) => `${project} on ${store}`,
    statusLabels: {
      completed: 'Completed',
      'in-development': 'In Development',
      prototype: 'Prototype',
      'game-jam': 'Game Jam',
    },
    platformLabels: {
      pc: 'PC',
      mobile: 'Mobile',
      console: 'Console',
      web: 'Web',
    },
    platformSoloPrefix: 'Only',
    platformMultiLabel: 'Multiplatform',
    platformUnknownLabel: 'To be confirmed',
    entries: {
      'proyecto-placeholder-uno': {
        name: 'Featured project (pending)',
        shortDescription: 'Placeholder: short description of a gameplay/systems project. Replace with the real project.',
        role: 'Role to be confirmed',
      },
      'proyecto-placeholder-dos': {
        name: 'Game Jam (pending)',
        shortDescription: 'Placeholder: a project made during a game jam. Replace with the real jam name and context.',
        role: 'Role to be confirmed',
      },
      'proyecto-placeholder-tres': {
        name: 'Mobile project (pending)',
        shortDescription: 'Placeholder: a multiplatform project focused on QA/testing. Replace with the real project.',
        role: 'Role to be confirmed',
      },
      'proyecto-placeholder-cuatro': {
        name: 'Completed project (pending)',
        shortDescription: 'Placeholder: a closed project without public links yet. Replace once confirmed.',
        role: 'Role to be confirmed',
      },
    },
  },

  skills: {
    badge: 'Skills',
    title: 'Skills',
    lead: 'A combination of technical knowledge and soft skills applied to game development, technical design, and QA. The items shown are examples pending confirmation with final content.',
    technicalHeading: 'Technical skills',
    softHeading: 'Soft skills',
    softListAria: 'Soft skills',
    groupLabels: {
      language: 'Languages',
      engine: 'Engines',
      tool: 'Tools and workflow',
      other: 'Other',
    },
    placeholderTag: 'Content pending confirmation',
    softSkills: {
      'soft-teamwork': {
        name: 'Teamwork',
        description: 'Placeholder: collaboration with multidisciplinary teams (design, art, programming, QA).',
      },
      'soft-communication': {
        name: 'Technical communication',
        description: 'Placeholder: ability to explain technical problems and solutions to non-technical people.',
      },
      'soft-problem-solving': {
        name: 'Problem solving',
        description: 'Placeholder: methodical diagnosis and resolution of bugs and systems-design issues.',
      },
      'soft-attention-detail': {
        name: 'Attention to detail',
        description: 'Placeholder: a QA mindset applied to development itself.',
      },
      'soft-adaptability': {
        name: 'Continuous learning',
        description: 'Placeholder: adapting to new tools, engines, and workflows.',
      },
      'soft-time-management': {
        name: 'Time management',
        description: 'Placeholder: organizing tasks under tight deadlines (game jams, sprints).',
      },
    },
  },

  certificates: {
    badge: 'Certificates',
    title: 'Certificates',
    lead: 'Local and international certifications related to game development, technical design, and QA.',
    categoryLabels: {
      local: 'Local certificates',
      global: 'Global certificates',
    },
    syncingText: 'Syncing certificates…',
    doneText: 'No certificates available at the moment.',
    verifyAction: 'Verify',
    verifyAria: (name) => `Verify credential: ${name}`,
    statusLabels: {
      active: 'Active',
      expired: 'Expired',
      'in-progress': 'In progress',
    },
  },

  contact: {
    badge: 'Contact',
    title: "Let's talk",
    lead: "Placeholder invitation — copy pending review. A project, an opportunity, or just want to talk about game development? Here are the channels to reach me.",
    listAria: 'Contact methods',
    pendingTag: 'Pending confirmation',
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
    copyErrorLabel: 'Could not copy',
    copyAria: (label) => `Copy ${label} to clipboard`,
    methods: {
      'contact-email': {
        label: 'Email',
        description: 'The most direct way to talk about an opportunity, collaboration, or project.',
        accessibleLabel: 'Send an email — address pending confirmation',
      },
      'contact-github': {
        label: 'GitHub',
        description: 'Code and repositories from personal and collaborative projects.',
        accessibleLabel: 'Open GitHub profile (opens in a new tab) — link pending confirmation',
      },
      'contact-linkedin': {
        label: 'LinkedIn',
        description: 'Professional background and experience.',
        accessibleLabel: 'Open LinkedIn profile (opens in a new tab) — link pending confirmation',
      },
      'contact-itchio': {
        label: 'itch.io',
        description: 'Published game projects and prototypes.',
        accessibleLabel: 'Open itch.io profile (opens in a new tab) — link pending confirmation',
      },
    },
  },

  footer: {
    namePlaceholder: 'Name Surname',
    role: 'Game Developer · Technical Designer · QA',
    lastUpdateLabel: 'Last updated',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: 'Back to top',
  },
};

export default en;
