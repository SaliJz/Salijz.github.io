import type { Dictionary } from './types';

const pt: Dictionary = {
  meta: { title: 'Joaquin Salinas | Portfolio', description: 'Portfólio de Joaquin Salinas: projetos em Unity e C#, technical game design, technical QA e gameplay programming.' },

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

  hero: { badge: 'Game Dev · Technical Design · QA', namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Technical QA · Gameplay Programmer', intro: 'Estudante de Game Design com experiência prática no desenvolvimento de projetos em Unity usando C#. Trabalhei com sistemas de gameplay, design técnico, otimização de desempenho e QA técnico, combinando implementação, playtesting e debugging.', tags: ['Unity + C#', 'Gameplay Systems', 'Technical QA', 'Git/GitHub'], specializationsAria: 'Áreas de especialização', aspiration: 'Meu perfil é focado principalmente em Technical Game Design e Technical QA, complementado por experiência em Gameplay Programming.', ctaProjects: 'Ver projetos', ctaCv: 'Baixar Resume', ctaCvAria: 'Baixar Resume em PDF', ctaContact: 'Contato', profileAvailable: 'Disponível', profileAlt: 'Foto profissional — pendente' },

  about: { badge: 'Sobre mim', title: 'Perfil e trajetória', intro1: 'Estudo Game Design e Digital Entertainment e tenho experiência prática no desenvolvimento de projetos em Unity com C#. Meu trabalho se concentra em sistemas de gameplay, documentação de design, balanceamento, otimização e QA técnico.', intro2: 'Em projetos acadêmicos implementei mecânicas, trabalhei com arquitetura modular e sistemas procedurais, realizei playtesting e debugging e colaborei por meio de Git/GitHub.', interestsAria: 'Interesses profissionais', interests: ['Gameplay Systems', 'Technical Game Design', 'Gameplay Balancing', 'Technical QA'] },

  timeline: { categoryLabels: { education: 'Formação', experience: 'Experiência', project: 'Projeto relevante', milestone: 'Marco profissional' }, statusLabels: { completed: 'Concluído', 'in-progress': 'Em andamento', upcoming: 'Próximo' }, currentBadge: 'Atual', entries: { 'education-toulouse': { period: 'Mar. 2023 — Atualmente', title: 'Game Design and Digital Entertainment', context: 'Toulouse Lautrec · Peru', description: 'Formação técnica em Game Design and Digital Entertainment, atualmente em andamento.' }, 'project-eden-404': { period: 'Mar. 2025 — Jul. 2025', title: 'Eden 404', context: 'FPS 3D · Projeto acadêmico', description: 'Implementação de mecânicas de gameplay e sistemas de interação, resolução de problemas de estabilidade e desempenho e otimização de sistemas procedurais.' }, 'project-forsaken-rules': { period: 'Set. 2025 — Jul. 2026', title: 'Forsaken Rules', context: 'Roguelike isométrico 3D · Publicado na Steam', description: 'Desenvolvimento de sistemas de gameplay em Unity/C#, arquitetura modular, playtesting técnico contínuo e contribuição para otimização e estabilidade.' }, 'project-franklins-journey': { period: 'Set. 2025 — Nov. 2025', title: "Franklin's Journey", context: 'Bullet Hell 2D · Android', description: 'Desenvolvimento de sistema eficiente de gerenciamento de projéteis, otimização móvel e validação funcional.' }, 'recognition-guardianes': { period: 'Maio 2026', title: 'Certificado de Contribuição', context: 'Asociación Civil Turismo Cuida', description: 'Reconhecimento pela contribuição ao projeto educacional Guardianes del Humedal com sistemas de gameplay funcionais.' } } },

  projects: { badge: 'Projetos', title: 'Projetos', lead: 'Projetos acadêmicos em que trabalhei principalmente com design técnico, QA, otimização e gameplay programming usando Unity, C# e Git/GitHub.', filtersAria: 'Filtrar projetos por plataforma', filters: { all: 'Todos', pc: 'PC', mobile: 'Mobile', console: 'Console', multiplatform: 'Multiplataforma' }, emptyMessage: 'Nenhum projeto corresponde a este filtro.', listAria: 'Lista de projetos', roleLabel: 'Função', engineLabel: 'Engine', techListAria: 'Tecnologias e áreas', placeholderTag: 'Conteúdo pendente', githubAction: 'GitHub', githubAria: (project) => `Repositório de ${project} no GitHub`, youtubeAction: 'Ver vídeo', youtubeAria: (project) => `Ver vídeo de ${project} no YouTube`, downloadAction: 'Baixar', downloadAria: (project) => `Baixar ${project}`, storeAria: (project, store) => `${project} na ${store}`, statusLabels: { completed: 'Concluído', 'in-development': 'Em desenvolvimento', prototype: 'Protótipo', 'game-jam': 'Game Jam' }, platformLabels: { pc: 'PC', mobile: 'Mobile', console: 'Console', web: 'Web' }, platformSoloPrefix: 'Somente', platformMultiLabel: 'Multiplataforma', platformUnknownLabel: 'A confirmar', entries: { 'forsaken-rules': { imageAlt: 'Arte promocional de Forsaken Rules com logotipo e personagens principais', name: 'Forsaken Rules', shortDescription: 'Roguelike isométrico 3D publicado na Steam. Desenvolvimento de sistemas de gameplay e mecânicas em Unity/C#, arquitetura modular, playtesting técnico e otimização.', role: 'Gameplay Programmer / Technical Game Designer' }, 'eden-404': { imageAlt: 'Imagem promocional de Eden 404 com personagem principal e logotipo do projeto', name: 'Eden 404', shortDescription: 'FPS 3D em que implementei mecânicas de gameplay e sistemas de interação, resolvi problemas de estabilidade e desempenho e otimizei sistemas procedurais.', role: 'Gameplay Programmer / Technical Designer' }, 'franklins-journey': { imageAlt: "Tela de título de Franklin's Journey", name: "Franklin's Journey", shortDescription: 'Bullet Hell 2D para Android. Desenvolvi um sistema eficiente de projéteis, otimizei o desempenho móvel e realizei validação funcional.', role: 'Gameplay Programmer' } } },

  skills: { badge: 'Habilidades', title: 'Habilidades', lead: 'Competências técnicas aplicadas ao desenvolvimento de jogos, design de sistemas, otimização e QA.', technicalHeading: 'Habilidades técnicas', softHeading: 'Habilidades interpessoais', softListAria: 'Habilidades interpessoais', groupLabels: { language: 'Programação', engine: 'Engine', tool: 'Ferramentas e fluxo', other: 'Design, desenvolvimento e QA' }, placeholderTag: 'Conteúdo pendente', softSkills: {} },

  certificates: {
    badge: 'Certificados',
    title: 'Certificados e reconhecimento',
    lead: 'Reconhecimentos e credenciais relacionados a formação, idiomas e projetos.',
    categoryLabels: { local: 'Reconhecimentos locais', global: 'Credenciais globais' },
    syncingText: 'Registro pendente',
    doneText: 'Ainda não há credenciais nesta categoria.',
    verifyAction: 'Ver certificado',
    verifyAria: (name) => `Abrir certificado: ${name}`,
    statusLabels: { active: 'Emitido', expired: 'Expirado', 'in-progress': 'Em andamento' },
    entries: {
      'tourism-care-contribution': { name: 'Certificado de Contribuição', issuer: 'Asociación Civil Turismo Cuida', description: 'Reconhecimento pela contribuição realizada ao projeto Guardianes del Humedal.' },
      'office-domain-romero': { name: 'Domínio do Office', issuer: 'Fundación Romero · Becas Grupo Romero', description: 'Curso concluído com sucesso, com duração de 80 horas acadêmicas.' },
      'advanced-english-british-center': { name: 'Inglês Avançado', issuer: 'El Centro Británico · Ucayali', description: 'Certificado de capacitação em Inglês Avançado com duração de 440 horas.' },
      'ef-set-c1-advanced': { name: 'EF SET English Certificate — C1 Advanced', issuer: 'EF SET', description: 'Pontuação 69/100, correspondente ao nível C1 Advanced segundo o CEFR.' },
    },
  },

  contact: { badge: 'Contato', title: 'Vamos conversar', lead: 'Para conversar sobre uma oportunidade, colaboração ou projeto de desenvolvimento de jogos, você pode entrar em contato por estes canais.', listAria: 'Métodos de contato', pendingTag: 'Pendente', copyLabel: 'Copiar', copiedLabel: 'Copiado', copyErrorLabel: 'Não foi possível copiar', copyAria: (label) => `Copiar ${label} para a área de transferência`, methods: { 'contact-email': { label: 'Email', description: 'Contato direto para oportunidades, colaborações ou projetos.', accessibleLabel: 'Enviar um email para Joaquin Salinas' }, 'contact-github': { label: 'GitHub', description: 'Código e repositórios de projetos de jogos.', accessibleLabel: 'Abrir o perfil do GitHub de Joaquin Salinas em uma nova aba' }, 'contact-linkedin': { label: 'LinkedIn', description: 'Perfil profissional, formação e trajetória.', accessibleLabel: 'Abrir o perfil do LinkedIn de Joaquin Salinas em uma nova aba' } } },

  footer: { namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Technical QA · Gameplay Programmer', lastUpdateLabel: 'Última atualização', systemStatusLabel: 'SYSTEM STATUS', onlineLabel: 'ONLINE', backToTopAria: 'Voltar ao topo' },
};

export default pt;
