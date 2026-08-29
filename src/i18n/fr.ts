import type { Dictionary } from './types';

const fr: Dictionary = {
  meta: { title: 'Joaquin Salinas — Technical Game Designer | Gameplay Programmer | Technical QA', description: 'Portfolio de Joaquin Salinas : projets Unity et C#, gameplay programming, technical game design et technical QA.' },

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

  hero: { badge: 'Game Dev · Technical Design · QA', namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Gameplay Programmer · Technical QA', intro: 'Étudiant en Game Design avec une expérience pratique sur des projets Unity en C#. J’ai travaillé sur des systèmes de gameplay, le design technique, l’optimisation des performances et le QA technique, en combinant implémentation, playtesting et debugging.', tags: ['Unity + C#', 'Gameplay Systems', 'Technical QA', 'Git/GitHub'], specializationsAria: 'Domaines de spécialisation', aspiration: 'Je recherche des opportunités en Game Design ou Technical Game Design afin de contribuer à des projets réels tout en développant mes compétences techniques et de design.', ctaProjects: 'Voir les projets', ctaCv: 'Télécharger le Resume', ctaCvAria: 'Télécharger le Resume en PDF', ctaContact: 'Contact', profileAvailable: 'Disponible', profileAlt: 'Photo professionnelle — à ajouter' },

  about: { badge: 'À propos', title: 'Profil et parcours', intro1: 'J’étudie le Game Design et le Digital Entertainment et j’ai une expérience pratique du développement de projets Unity en C#. Mon travail porte sur les systèmes de gameplay, la documentation de design, l’équilibrage, l’optimisation et le QA technique.', intro2: 'Dans des projets académiques, j’ai implémenté des mécaniques, travaillé avec une architecture modulaire et des systèmes procéduraux, effectué du playtesting et du debugging, et collaboré via Git/GitHub.', interestsAria: 'Centres d’intérêt professionnels', interests: ['Gameplay Systems', 'Technical Game Design', 'Gameplay Balancing', 'Technical QA'] },

  timeline: { categoryLabels: { education: 'Formation', experience: 'Expérience', project: 'Projet notable', milestone: 'Étape professionnelle' }, statusLabels: { completed: 'Terminé', 'in-progress': 'En cours', upcoming: 'À venir' }, currentBadge: 'Actuel', entries: { 'education-toulouse': { period: 'Mars 2023 — Aujourd’hui', title: 'Game Design and Digital Entertainment', context: 'Toulouse Lautrec · Pérou', description: 'Formation technique en Game Design and Digital Entertainment, actuellement en cours.' }, 'project-eden-404': { period: 'Mars 2025 — Juil. 2025', title: 'Eden 404', context: 'FPS 3D · Projet académique', description: 'Implémentation de mécaniques de gameplay et de systèmes d’interaction, résolution de problèmes de stabilité et de performance, et optimisation de systèmes procéduraux.' }, 'project-forsaken-rules': { period: 'Sept. 2025 — Juil. 2026', title: 'Forsaken Rules', context: 'Roguelike isométrique 3D · Publié sur Steam', description: 'Développement de systèmes de gameplay en Unity/C#, architecture modulaire, playtesting technique continu et contribution à l’optimisation et à la stabilité.' }, 'project-franklins-journey': { period: 'Sept. 2025 — Nov. 2025', title: "Franklin's Journey", context: 'Bullet Hell 2D · Android', description: 'Développement d’un système efficace de gestion de projectiles, optimisation mobile et validation fonctionnelle.' }, 'recognition-guardianes': { period: 'Mai 2026', title: 'Certificat de contribution', context: 'Asociación Civil Turismo Cuida', description: 'Reconnaissance pour la contribution au projet éducatif Guardianes del Humedal grâce à des systèmes de gameplay fonctionnels.' } } },

  projects: { badge: 'Projets', title: 'Projets', lead: 'Projets académiques sur lesquels j’ai principalement travaillé en gameplay programming, design technique, optimisation et QA avec Unity, C# et Git/GitHub.', filtersAria: 'Filtrer les projets par plateforme', filters: { all: 'Tous', pc: 'PC', mobile: 'Mobile', console: 'Console', multiplatform: 'Multiplateforme' }, emptyMessage: 'Aucun projet ne correspond à ce filtre.', listAria: 'Liste des projets', roleLabel: 'Rôle', engineLabel: 'Moteur', techListAria: 'Technologies et domaines', placeholderTag: 'Contenu à confirmer', githubAction: 'GitHub', githubAria: (project) => `Dépôt GitHub de ${project}`, youtubeAction: 'Voir la vidéo', youtubeAria: (project) => `Voir la vidéo de ${project} sur YouTube`, downloadAction: 'Télécharger', downloadAria: (project) => `Télécharger ${project}`, storeAria: (project, store) => `${project} sur ${store}`, statusLabels: { completed: 'Terminé', 'in-development': 'En développement', prototype: 'Prototype', 'game-jam': 'Game Jam' }, platformLabels: { pc: 'PC', mobile: 'Mobile', console: 'Console', web: 'Web' }, platformSoloPrefix: 'Seulement', platformMultiLabel: 'Multiplateforme', platformUnknownLabel: 'À confirmer', entries: { 'forsaken-rules': { imageAlt: 'Capture de Forsaken Rules — à ajouter', name: 'Forsaken Rules', shortDescription: 'Roguelike isométrique 3D publié sur Steam. Développement de systèmes de gameplay et mécaniques en Unity/C#, architecture modulaire, playtesting technique et optimisation.', role: 'Gameplay Programmer / Technical Game Designer' }, 'eden-404': { imageAlt: 'Capture de Eden 404 — à ajouter', name: 'Eden 404', shortDescription: 'FPS 3D : implémentation de mécaniques de gameplay et de systèmes d’interaction, résolution de problèmes de stabilité et de performance, optimisation de systèmes procéduraux.', role: 'Gameplay Programmer / Technical Designer' }, 'franklins-journey': { imageAlt: "Capture de Franklin's Journey — à ajouter", name: "Franklin's Journey", shortDescription: 'Bullet Hell 2D pour Android. Développement d’un système efficace de projectiles, optimisation mobile et validation fonctionnelle.', role: 'Gameplay Programmer' } } },

  skills: { badge: 'Compétences', title: 'Compétences', lead: 'Compétences techniques appliquées au développement de jeux, au design de systèmes, à l’optimisation et au QA.', technicalHeading: 'Compétences techniques', softHeading: 'Compétences humaines', softListAria: 'Compétences humaines', groupLabels: { language: 'Programmation', engine: 'Moteur', tool: 'Outils et workflow', other: 'Design, développement et QA' }, placeholderTag: 'Contenu à confirmer', softSkills: {} },

  certificates: { badge: 'Certificats', title: 'Certificats et reconnaissance', lead: 'Reconnaissances et références liées à des projets de développement de jeux.', categoryLabels: { local: 'Reconnaissances locales', global: 'Références globales' }, syncingText: 'Registre en attente', doneText: 'Aucune référence dans cette catégorie pour le moment.', verifyAction: 'Vérifier', verifyAria: (name) => `Vérifier la référence : ${name}`, statusLabels: { active: 'Délivré', expired: 'Expiré', 'in-progress': 'En cours' }, entries: { 'tourism-care-contribution': { name: 'Certificat de contribution', issuer: 'Asociación Civil Turismo Cuida', description: 'Reconnaissance pour la contribution au projet éducatif Guardianes del Humedal avec des systèmes de gameplay fonctionnels.' } } },

  contact: { badge: 'Contact', title: 'Parlons-en', lead: 'Pour discuter d’une opportunité, d’une collaboration ou d’un projet de développement de jeux, vous pouvez me contacter via ces canaux.', listAria: 'Moyens de contact', pendingTag: 'À confirmer', copyLabel: 'Copier', copiedLabel: 'Copié', copyErrorLabel: 'Impossible de copier', copyAria: (label) => `Copier ${label} dans le presse-papiers`, methods: { 'contact-email': { label: 'Email', description: 'Contact direct pour les opportunités, collaborations ou projets.', accessibleLabel: 'Envoyer un email à Joaquin Salinas' }, 'contact-github': { label: 'GitHub', description: 'Code et dépôts de projets de jeux.', accessibleLabel: 'Ouvrir le profil GitHub de Joaquin Salinas dans un nouvel onglet' }, 'contact-linkedin': { label: 'LinkedIn', description: 'Profil professionnel, formation et parcours.', accessibleLabel: 'Ouvrir le profil LinkedIn de Joaquin Salinas dans un nouvel onglet' } } },

  footer: { namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Gameplay Programmer · Technical QA', lastUpdateLabel: 'Dernière mise à jour', systemStatusLabel: 'SYSTEM STATUS', onlineLabel: 'ONLINE', backToTopAria: 'Retour en haut' },
};

export default fr;
