import type { Dictionary } from './types';

const fr: Dictionary = {
  meta: {
    title: 'Portfolio — en construction',
    description: 'Section héro du portfolio en cours de développement — environnement temporaire de validation du Layout Global et du Design System.',
  },

  a11y: {
    skipLink: 'Aller au contenu',
  },

  header: {
    brandLabel: 'Portfolio',
    brandAria: "Portfolio — retour à l'accueil",
    primaryNavAria: 'Navigation principale',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      certificates: 'Certificats',
      contact: 'Contact',
    },
    mobileMenuOpenAria: 'Ouvrir le menu de navigation',
    mobileMenuCloseAria: 'Fermer le menu de navigation',
    collapseAria: 'Réduire la navigation',
    expandAria: 'Développer la navigation',
    langTriggerAria: 'Changer de langue',
    langMenuAria: 'Choisir la langue',
  },

  hero: {
    badge: 'Game Dev · Technical Design · QA',
    namePlaceholder: 'Prénom Nom',
    role: 'Game Developer · Technical Designer · QA Engineer',
    intro:
      "Je conçois et développe des systèmes de jeu avec le même soin que celui que j'apporte à les tester : de la mécanique au pipeline, et du pipeline à la qualité. Texte provisoire — sera remplacé par le texte définitif.",
    tags: ['Gameplay Programming', 'Conception de systèmes', 'QA & Automatisation', 'Outils'],
    specializationsAria: 'Domaines de spécialisation',
    aspiration: "À la recherche de systèmes de combat et d'outils pour les équipes de développement.",
    ctaProjects: 'Voir les projets',
    ctaCv: 'Télécharger le CV',
    ctaCvAria: 'Télécharger le CV au format PDF',
    ctaContact: 'Contact',
    profileAvailable: 'Disponible',
    profileAlt: 'Photo professionnelle — bientôt disponible',
  },

  about: {
    badge: 'À propos',
    title: 'Profil et parcours',
    intro1:
      "Texte de présentation provisoire — en attente de validation. Je travaille à l'intersection du développement de jeux vidéo, de la conception technique et de l'assurance qualité : construire des systèmes de jeu m'intéresse autant que m'assurer qu'ils fonctionnent comme prévu avant d'arriver entre les mains du joueur.",
    intro2:
      "Texte provisoire — parcours professionnel et académique en attente de données réelles. Le détail (formation, expérience et projets) figure dans la chronologie ci-dessous.",
    interestsAria: "Centres d'intérêt professionnels",
    interests: [
      'Conception de systèmes de jeu',
      'Programmation gameplay',
      'Qualité et tests (QA)',
      'Résolution de problèmes techniques',
    ],
  },

  timeline: {
    categoryLabels: {
      education: 'Formation',
      experience: 'Expérience',
      project: 'Projet notable',
      milestone: 'Étape professionnelle',
    },
    statusLabels: {
      completed: 'Terminé',
      'in-progress': 'En cours',
      upcoming: 'À venir',
    },
    currentBadge: 'Actuel',
    entries: {
      'education-base': {
        title: 'Formation en attente de confirmation',
        context: 'Établissement à confirmer',
        description:
          "Texte provisoire : formation académique ou technique de base (cursus, bootcamp, etc.). À remplacer par l'établissement, le titre exact et la période réels.",
      },
      'milestone-first-project': {
        title: 'Premier projet notable (en attente)',
        context: 'Contexte à confirmer',
        description:
          "Texte provisoire : étape professionnelle ou académique marquante (p. ex. première game jam, premier projet publié). À remplacer par l'étape réelle.",
      },
      'experience-current': {
        title: 'Poste actuel en attente de confirmation',
        context: 'Entreprise ou organisation à confirmer',
        description:
          "Texte provisoire : expérience professionnelle actuelle en tant que Game Developer / Technical Designer / QA. À remplacer par le poste, l'entreprise et les responsabilités réels.",
      },
      'project-featured': {
        title: 'Projet phare (en attente)',
        context: 'Projet à confirmer',
        description:
          "Texte provisoire : un projet particulièrement représentatif du profil (pas nécessairement celui présenté dans la section Projets). À remplacer une fois confirmé.",
      },
    },
  },

  projects: {
    badge: 'Projets',
    title: 'Projets',
    lead: "Un échantillon de projets de développement de jeux vidéo, de conception technique et de QA. Le contenu de cette section est encore un exemple — il sera bientôt remplacé par de vrais projets.",
    filtersAria: 'Filtrer les projets par plateforme',
    filters: {
      all: 'Tous',
      pc: 'PC',
      mobile: 'Mobile',
      console: 'Console',
      multiplatform: 'Multiplateforme',
    },
    emptyMessage: "Aucun projet ne correspond encore à ce filtre.",
    listAria: 'Liste des projets',
    roleLabel: 'Rôle',
    engineLabel: 'Moteur',
    techListAria: 'Technologies',
    placeholderTag: 'Contenu en attente de confirmation',
    githubAction: 'GitHub',
    githubAria: (project) => `Dépôt de ${project} sur GitHub`,
    youtubeAction: 'YouTube',
    youtubeAria: (project) => `Voir ${project} sur YouTube`,
    downloadAction: 'Télécharger',
    downloadAria: (project) => `Télécharger ${project}`,
    storeAria: (project, store) => `${project} sur ${store}`,
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
    platformSoloPrefix: 'Uniquement',
    platformMultiLabel: 'Multiplateforme',
    platformUnknownLabel: 'À confirmer',
    entries: {
      'proyecto-placeholder-uno': {
        name: 'Projet phare (en attente)',
        shortDescription: "Texte provisoire : courte description d'un projet de gameplay/systèmes. À remplacer par le projet réel.",
        role: 'Rôle à confirmer',
      },
      'proyecto-placeholder-dos': {
        name: 'Game Jam (en attente)',
        shortDescription: "Texte provisoire : projet réalisé lors d'une game jam. À remplacer par le nom et le contexte réels du jam.",
        role: 'Rôle à confirmer',
      },
      'proyecto-placeholder-tres': {
        name: 'Projet mobile (en attente)',
        shortDescription: "Texte provisoire : projet multiplateforme axé sur la QA/les tests. À remplacer par le projet réel.",
        role: 'Rôle à confirmer',
      },
      'proyecto-placeholder-cuatro': {
        name: 'Projet terminé (en attente)',
        shortDescription: "Texte provisoire : projet clos, sans lien public pour l'instant. À remplacer une fois confirmé.",
        role: 'Rôle à confirmer',
      },
    },
  },

  skills: {
    badge: 'Compétences',
    title: 'Compétences',
    lead: "Une combinaison de connaissances techniques et de compétences comportementales appliquées au développement de jeux vidéo, à la conception technique et à la QA. Les éléments affichés sont des exemples à confirmer avec le contenu définitif.",
    technicalHeading: 'Compétences techniques',
    softHeading: 'Compétences comportementales',
    softListAria: 'Compétences comportementales',
    groupLabels: {
      language: 'Langages',
      engine: 'Moteurs',
      tool: 'Outils et flux de travail',
      other: 'Autres',
    },
    placeholderTag: 'Contenu en attente de confirmation',
    softSkills: {
      'soft-teamwork': {
        name: "Travail d'équipe",
        description: "Texte provisoire : collaboration avec des équipes pluridisciplinaires (design, art, programmation, QA).",
      },
      'soft-communication': {
        name: 'Communication technique',
        description: "Texte provisoire : capacité à expliquer des problèmes et solutions techniques à des profils non techniques.",
      },
      'soft-problem-solving': {
        name: 'Résolution de problèmes',
        description: "Texte provisoire : diagnostic et résolution méthodique de bugs et de problèmes de conception de systèmes.",
      },
      'soft-attention-detail': {
        name: 'Souci du détail',
        description: "Texte provisoire : un état d'esprit QA appliqué également à son propre développement.",
      },
      'soft-adaptability': {
        name: 'Apprentissage continu',
        description: "Texte provisoire : adaptation à de nouveaux outils, moteurs et flux de travail.",
      },
      'soft-time-management': {
        name: 'Gestion du temps',
        description: "Texte provisoire : organisation des tâches sous des délais serrés (game jams, sprints).",
      },
    },
  },

  certificates: {
    badge: 'Certificats',
    title: 'Certificats',
    lead: 'Certifications locales et internationales liées au développement de jeux vidéo, à la conception technique et à la QA.',
    categoryLabels: {
      local: 'Certificats locaux',
      global: 'Certificats internationaux',
    },
    syncingText: 'Synchronisation des certificats…',
    doneText: "Aucun certificat disponible pour le moment.",
    verifyAction: 'Vérifier',
    verifyAria: (name) => `Vérifier la certification : ${name}`,
    statusLabels: {
      active: 'Valide',
      expired: 'Expiré',
      'in-progress': 'En cours',
    },
  },

  contact: {
    badge: 'Contact',
    title: 'Discutons',
    lead: "Texte d'invitation provisoire — en attente de validation. Un projet, une opportunité, ou simplement l'envie de parler de développement de jeux vidéo ? Voici les moyens de me contacter.",
    listAria: 'Moyens de contact',
    pendingTag: 'En attente de confirmation',
    copyLabel: 'Copier',
    copiedLabel: 'Copié',
    copyErrorLabel: 'Impossible de copier',
    copyAria: (label) => `Copier ${label} dans le presse-papiers`,
    methods: {
      'contact-email': {
        label: 'E-mail',
        description: "Le moyen le plus direct de discuter d'une opportunité, d'une collaboration ou d'un projet.",
        accessibleLabel: 'Envoyer un e-mail — adresse en attente de confirmation',
      },
      'contact-github': {
        label: 'GitHub',
        description: 'Code et dépôts de projets personnels et collaboratifs.',
        accessibleLabel: "Ouvrir le profil GitHub (s'ouvre dans un nouvel onglet) — lien en attente de confirmation",
      },
      'contact-linkedin': {
        label: 'LinkedIn',
        description: 'Parcours et expérience professionnels.',
        accessibleLabel: "Ouvrir le profil LinkedIn (s'ouvre dans un nouvel onglet) — lien en attente de confirmation",
      },
      'contact-itchio': {
        label: 'itch.io',
        description: 'Projets et prototypes de jeux vidéo publiés.',
        accessibleLabel: "Ouvrir le profil itch.io (s'ouvre dans un nouvel onglet) — lien en attente de confirmation",
      },
    },
  },

  footer: {
    namePlaceholder: 'Prénom Nom',
    role: 'Game Developer · Technical Designer · QA',
    lastUpdateLabel: 'Dernière mise à jour',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: 'Retour en haut',
  },
};

export default fr;
