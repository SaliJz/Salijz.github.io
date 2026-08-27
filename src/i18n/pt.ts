import type { Dictionary } from './types';

const pt: Dictionary = {
  meta: {
    title: 'Portfólio — em construção',
    description: 'Seção principal do portfólio em desenvolvimento — ambiente temporário de validação do Layout Global e do Design System.',
  },

  a11y: {
    skipLink: 'Pular para o conteúdo',
  },

  header: {
    brandLabel: 'Portfólio',
    brandAria: 'Portfólio — ir para o início',
    primaryNavAria: 'Navegação principal',
    nav: {
      home: 'Início',
      about: 'Sobre mim',
      projects: 'Projetos',
      skills: 'Habilidades',
      certificates: 'Certificados',
      contact: 'Contato',
    },
    mobileMenuOpenAria: 'Abrir menu de navegação',
    mobileMenuCloseAria: 'Fechar menu de navegação',
    collapseAria: 'Recolher navegação',
    expandAria: 'Expandir navegação',
    langTriggerAria: 'Mudar idioma',
    langMenuAria: 'Selecionar idioma',
  },

  hero: {
    badge: 'Game Dev · Technical Design · QA',
    namePlaceholder: 'Nome Sobrenome',
    role: 'Game Developer · Technical Designer · QA Engineer',
    intro:
      'Projeto e construo sistemas de jogo com o mesmo cuidado com que os testo: da mecânica ao pipeline, e do pipeline à qualidade. Texto provisório — será substituído pelo texto definitivo.',
    tags: ['Gameplay Programming', 'Design de Sistemas', 'QA & Automação', 'Ferramentas'],
    specializationsAria: 'Áreas de especialização',
    aspiration: 'Explorando o design de sistemas de combate e ferramentas para equipes de desenvolvimento.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar currículo',
    ctaCvAria: 'Baixar currículo em PDF',
    ctaContact: 'Contato',
    profileAvailable: 'Disponível',
    profileAlt: 'Foto profissional — em breve',
  },

  about: {
    badge: 'Sobre mim',
    title: 'Perfil e trajetória',
    intro1:
      'Texto de apresentação provisório — pendente de validação. Trabalho na interseção entre desenvolvimento de jogos, design técnico e garantia de qualidade: tanto me interessa construir sistemas de jogo quanto garantir que funcionem como deveriam antes de chegar às mãos do jogador.',
    intro2:
      'Texto provisório — trajetória profissional e acadêmica pendente de dados reais. O percurso concreto (formação, experiência e projetos) está detalhado na linha do tempo abaixo.',
    interestsAria: 'Interesses profissionais',
    interests: [
      'Design de sistemas de jogo',
      'Programação de gameplay',
      'Qualidade e testes (QA)',
      'Resolução de problemas técnicos',
    ],
  },

  timeline: {
    categoryLabels: {
      education: 'Formação',
      experience: 'Experiência',
      project: 'Projeto relevante',
      milestone: 'Marco profissional',
    },
    statusLabels: {
      completed: 'Concluído',
      'in-progress': 'Em andamento',
      upcoming: 'Próximo',
    },
    currentBadge: 'Atual',
    entries: {
      'education-base': {
        title: 'Formação pendente de confirmação',
        context: 'Instituição a confirmar',
        description:
          'Texto provisório: formação acadêmica ou técnica de base (curso, bootcamp, etc.). Substituir pela instituição, título exato e período reais.',
      },
      'milestone-first-project': {
        title: 'Primeiro projeto relevante (pendente)',
        context: 'Contexto a confirmar',
        description:
          'Texto provisório: marco profissional ou acadêmico significativo (p. ex. primeira game jam, primeiro projeto publicado). Substituir pelo marco real.',
      },
      'experience-current': {
        title: 'Cargo atual pendente de confirmação',
        context: 'Empresa ou organização a confirmar',
        description:
          'Texto provisório: experiência profissional atual como Game Developer / Technical Designer / QA. Substituir pelo cargo, empresa e responsabilidades reais.',
      },
      'project-featured': {
        title: 'Projeto em destaque (pendente)',
        context: 'Projeto a confirmar',
        description:
          'Texto provisório: um projeto especialmente representativo do perfil (não necessariamente o mesmo exibido na seção Projetos). Substituir assim que confirmado.',
      },
    },
  },

  projects: {
    badge: 'Projetos',
    title: 'Projetos',
    lead: 'Uma amostra de projetos de desenvolvimento de jogos, design técnico e QA. O conteúdo desta seção ainda é um exemplo — será substituído por projetos reais em breve.',
    filtersAria: 'Filtrar projetos por plataforma',
    filters: {
      all: 'Todos',
      pc: 'PC',
      mobile: 'Celular',
      console: 'Console',
      multiplatform: 'Multiplataforma',
    },
    emptyMessage: 'Nenhum projeto corresponde a este filtro ainda.',
    listAria: 'Lista de projetos',
    roleLabel: 'Função',
    engineLabel: 'Engine',
    techListAria: 'Tecnologias',
    placeholderTag: 'Conteúdo pendente de confirmação',
    githubAction: 'GitHub',
    githubAria: (project) => `Repositório de ${project} no GitHub`,
    youtubeAction: 'YouTube',
    youtubeAria: (project) => `Ver ${project} no YouTube`,
    downloadAction: 'Baixar',
    downloadAria: (project) => `Baixar ${project}`,
    storeAria: (project, store) => `${project} na ${store}`,
    statusLabels: {
      completed: 'Completed',
      'in-development': 'In Development',
      prototype: 'Prototype',
      'game-jam': 'Game Jam',
    },
    platformLabels: {
      pc: 'PC',
      mobile: 'Celular',
      console: 'Console',
      web: 'Web',
    },
    platformSoloPrefix: 'Somente',
    platformMultiLabel: 'Multiplataforma',
    platformUnknownLabel: 'A confirmar',
    entries: {
      'proyecto-placeholder-uno': {
        name: 'Projeto em destaque (pendente)',
        shortDescription: 'Texto provisório: descrição curta de um projeto de gameplay/sistemas. Substituir pelo projeto real.',
        role: 'Função a confirmar',
      },
      'proyecto-placeholder-dos': {
        name: 'Game Jam (pendente)',
        shortDescription: 'Texto provisório: projeto realizado em uma game jam. Substituir pelo nome e contexto reais do jam.',
        role: 'Função a confirmar',
      },
      'proyecto-placeholder-tres': {
        name: 'Projeto mobile (pendente)',
        shortDescription: 'Texto provisório: projeto multiplataforma com foco em QA/testes. Substituir pelo projeto real.',
        role: 'Função a confirmar',
      },
      'proyecto-placeholder-cuatro': {
        name: 'Projeto concluído (pendente)',
        shortDescription: 'Texto provisório: projeto encerrado, sem links públicos ainda. Substituir assim que confirmado.',
        role: 'Função a confirmar',
      },
    },
  },

  skills: {
    badge: 'Habilidades',
    title: 'Habilidades',
    lead: 'Uma combinação de conhecimentos técnicos e habilidades interpessoais aplicadas ao desenvolvimento de jogos, design técnico e QA. Os itens exibidos são exemplos pendentes de confirmação com o conteúdo definitivo.',
    technicalHeading: 'Habilidades técnicas',
    softHeading: 'Habilidades interpessoais',
    softListAria: 'Habilidades interpessoais',
    groupLabels: {
      language: 'Linguagens',
      engine: 'Engines',
      tool: 'Ferramentas e fluxo de trabalho',
      other: 'Outros',
    },
    placeholderTag: 'Conteúdo pendente de confirmação',
    softSkills: {
      'soft-teamwork': {
        name: 'Trabalho em equipe',
        description: 'Texto provisório: colaboração com equipes multidisciplinares (design, arte, programação, QA).',
      },
      'soft-communication': {
        name: 'Comunicação técnica',
        description: 'Texto provisório: capacidade de explicar problemas e soluções técnicas a perfis não técnicos.',
      },
      'soft-problem-solving': {
        name: 'Resolução de problemas',
        description: 'Texto provisório: diagnóstico e resolução metódica de bugs e problemas de design de sistemas.',
      },
      'soft-attention-detail': {
        name: 'Atenção aos detalhes',
        description: 'Texto provisório: mentalidade de QA aplicada também ao próprio desenvolvimento.',
      },
      'soft-adaptability': {
        name: 'Aprendizado contínuo',
        description: 'Texto provisório: adaptação a novas ferramentas, engines e fluxos de trabalho.',
      },
      'soft-time-management': {
        name: 'Gestão do tempo',
        description: 'Texto provisório: organização de tarefas sob prazos apertados (game jams, sprints).',
      },
    },
  },

  certificates: {
    badge: 'Certificados',
    title: 'Certificados',
    lead: 'Certificações locais e internacionais relacionadas a desenvolvimento de jogos, design técnico e QA.',
    categoryLabels: {
      local: 'Certificados locais',
      global: 'Certificados globais',
    },
    syncingText: 'Sincronizando certificados…',
    doneText: 'Nenhum certificado disponível no momento.',
    verifyAction: 'Verificar',
    verifyAria: (name) => `Verificar credencial: ${name}`,
    statusLabels: {
      active: 'Válido',
      expired: 'Expirado',
      'in-progress': 'Em andamento',
    },
  },

  contact: {
    badge: 'Contato',
    title: 'Vamos conversar',
    lead: 'Convite provisório — texto pendente de validação. Um projeto, uma oportunidade, ou simplesmente vontade de falar sobre desenvolvimento de jogos? Estes são os canais para entrar em contato.',
    listAria: 'Formas de contato',
    pendingTag: 'Pendente de confirmação',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado',
    copyErrorLabel: 'Não foi possível copiar',
    copyAria: (label) => `Copiar ${label} para a área de transferência`,
    methods: {
      'contact-email': {
        label: 'E-mail',
        description: 'A forma mais direta de falar sobre uma oportunidade, colaboração ou projeto.',
        accessibleLabel: 'Enviar um e-mail — endereço pendente de confirmação',
      },
      'contact-github': {
        label: 'GitHub',
        description: 'Repositórios e código de projetos pessoais e colaborativos.',
        accessibleLabel: 'Abrir perfil do GitHub (abre em uma nova aba) — link pendente de confirmação',
      },
      'contact-linkedin': {
        label: 'LinkedIn',
        description: 'Trajetória e experiência profissional.',
        accessibleLabel: 'Abrir perfil do LinkedIn (abre em uma nova aba) — link pendente de confirmação',
      },
      'contact-itchio': {
        label: 'itch.io',
        description: 'Projetos e protótipos de jogos publicados.',
        accessibleLabel: 'Abrir perfil do itch.io (abre em uma nova aba) — link pendente de confirmação',
      },
    },
  },

  footer: {
    namePlaceholder: 'Nome Sobrenome',
    role: 'Game Developer · Technical Designer · QA',
    lastUpdateLabel: 'Última atualização',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: 'Voltar ao topo',
  },
};

export default pt;
