import type { Dictionary } from './types';

const zh: Dictionary = {
  meta: { title: 'Joaquin Salinas | Portfolio', description: 'Joaquin Salinas 的作品集：Unity 与 C# 项目、Gameplay Programming、Technical Game Design 和 Technical QA。' },

  a11y: {
    skipLink: '跳转到内容',
  },

  header: {
    brandLabel: '作品集',
    brandAria: '作品集 — 返回首页',
    primaryNavAria: '主导航',
    nav: {
      home: '首页',
      about: '关于我',
      projects: '项目',
      skills: '技能',
      certificates: '证书',
      contact: '联系方式',
    },
    mobileMenuOpenAria: '打开导航菜单',
    mobileMenuCloseAria: '关闭导航菜单',
    collapseAria: '收起导航',
    expandAria: '展开导航',
    langTriggerAria: '切换语言',
    langMenuAria: '选择语言',
  },

  hero: { badge: 'Game Dev · Technical Design · QA', namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Gameplay Programmer · Technical QA', intro: '游戏设计专业学生，具有使用 Unity 和 C# 开发项目的实践经验。我参与过 gameplay 系统、技术设计、性能优化与 Technical QA，并结合功能实现、playtesting 和 debugging 提升游戏稳定性。', tags: ['Unity + C#', 'Gameplay Systems', 'Technical QA', 'Git/GitHub'], specializationsAria: '专业方向', aspiration: '希望获得 Game Design 或 Technical Game Design 相关机会，在真实项目中贡献能力并继续提升设计与技术技能。', ctaProjects: '查看项目', ctaCv: '下载 Resume', ctaCvAria: '下载英文 Resume PDF', ctaContact: '联系', profileAvailable: '可联系', profileAlt: '职业照片 — 待添加' },

  about: { badge: '关于我', title: '个人简介与经历', intro1: '我正在学习 Game Design and Digital Entertainment，并具有使用 Unity 与 C# 开发项目的实践经验。我的工作重点包括 gameplay 系统、设计文档、平衡、性能优化和 Technical QA。', intro2: '在学术项目中，我实现过游戏机制，参与模块化架构与程序化系统，进行 playtesting 与 debugging，并通过 Git/GitHub 进行协作。', interestsAria: '职业兴趣', interests: ['Gameplay Systems', 'Technical Game Design', 'Gameplay Balancing', 'Technical QA'] },

  timeline: { categoryLabels: { education: '教育', experience: '经历', project: '代表项目', milestone: '职业里程碑' }, statusLabels: { completed: '已完成', 'in-progress': '进行中', upcoming: '即将开始' }, currentBadge: '当前', entries: { 'education-toulouse': { period: '2023年3月 — 至今', title: 'Game Design and Digital Entertainment', context: 'Toulouse Lautrec · Peru', description: '正在进行 Game Design and Digital Entertainment 技术学习。' }, 'project-eden-404': { period: '2025年3月 — 2025年7月', title: 'Eden 404', context: '3D FPS · 学术项目', description: '实现 gameplay 机制与玩家交互系统，解决稳定性和性能问题，并优化程序化系统。' }, 'project-forsaken-rules': { period: '2025年9月 — 2026年7月', title: 'Forsaken Rules', context: '3D 等距视角 Roguelike · 已在 Steam 发布', description: '使用 Unity/C# 开发核心 gameplay 系统，设计模块化系统，持续进行技术 playtesting，并参与性能优化与稳定性改进。' }, 'project-franklins-journey': { period: '2025年9月 — 2025年11月', title: "Franklin's Journey", context: '2D Bullet Hell · Android', description: '开发高效的弹幕管理系统，优化 Android 性能，并进行功能测试和技术验证。' }, 'recognition-guardianes': { period: '2026年5月', title: '贡献证书', context: 'Asociación Civil Turismo Cuida', description: '因向教育项目 Guardianes del Humedal 提供功能性 gameplay 系统而获得认可。' } } },

  projects: { badge: '项目', title: '项目', lead: '我参与的学术游戏项目，主要负责 gameplay programming、技术设计、优化和 QA，使用 Unity、C# 与 Git/GitHub。', filtersAria: '按平台筛选项目', filters: { all: '全部', pc: 'PC', mobile: '移动端', console: '主机', multiplatform: '多平台' }, emptyMessage: '没有符合此筛选条件的项目。', listAria: '项目列表', roleLabel: '角色', engineLabel: '引擎', techListAria: '技术与领域', placeholderTag: '内容待确认', githubAction: 'GitHub', githubAria: (project) => `打开 ${project} 的 GitHub 仓库`, youtubeAction: '观看视频', youtubeAria: (project) => `在 YouTube 观看 ${project} 视频`, downloadAction: '下载', downloadAria: (project) => `下载 ${project}`, storeAria: (project, store) => `在 ${store} 查看 ${project}`, statusLabels: { completed: '已完成', 'in-development': '开发中', prototype: '原型', 'game-jam': 'Game Jam' }, platformLabels: { pc: 'PC', mobile: '移动端', console: '主机', web: 'Web' }, platformSoloPrefix: '仅', platformMultiLabel: '多平台', platformUnknownLabel: '待确认', entries: { 'forsaken-rules': { imageAlt: 'Forsaken Rules 宣传图，包含标志与主要角色', name: 'Forsaken Rules', shortDescription: '已在 Steam 发布的 3D 等距视角 Roguelike。使用 Unity/C# 开发 gameplay 系统与机制，并参与模块化架构、技术 playtesting 和性能优化。', role: 'Gameplay Programmer / Technical Game Designer' }, 'eden-404': { imageAlt: 'Eden 404 宣传图，包含主角与项目标志', name: 'Eden 404', shortDescription: '3D FPS 项目：实现 gameplay 机制和交互系统，解决稳定性与性能问题，并优化程序化系统。', role: 'Gameplay Programmer / Technical Designer' }, 'franklins-journey': { imageAlt: "Franklin's Journey 标题画面", name: "Franklin's Journey", shortDescription: 'Android 2D Bullet Hell。开发高效弹幕管理系统，优化移动端性能，并进行功能测试和技术验证。', role: 'Gameplay Programmer' } } },

  skills: { badge: '技能', title: '技能', lead: '应用于游戏开发、系统设计、优化和质量保证的技术能力。', technicalHeading: '技术技能', softHeading: '软技能', softListAria: '软技能', groupLabels: { language: '编程', engine: '引擎', tool: '工具与工作流', other: '设计、开发与 QA' }, placeholderTag: '内容待确认', softSkills: {} },

  certificates: {
    badge: '证书',
    title: '证书与认可',
    lead: '与培训、语言能力和项目相关的证书与认可。',
    categoryLabels: { local: '本地认可', global: '全球证书' },
    syncingText: '记录待补充',
    doneText: '此类别暂无其他证书。',
    verifyAction: '查看证书',
    verifyAria: (name) => `打开证书：${name}`,
    statusLabels: { active: '已颁发', expired: '已过期', 'in-progress': '进行中' },
    entries: {
      'tourism-care-contribution': { name: '贡献证书', issuer: 'Asociación Civil Turismo Cuida', description: '对 Guardianes del Humedal 项目所作贡献的认可。' },
      'office-domain-romero': { name: 'Office 软件能力', issuer: 'Fundación Romero · Becas Grupo Romero', description: '顺利完成课程，共 80 个学术小时。' },
      'advanced-english-british-center': { name: '高级英语', issuer: 'El Centro Británico · Ucayali', description: '高级英语培训证书，共 440 小时。' },
      'ef-set-c1-advanced': { name: 'EF SET English Certificate — C1 Advanced', issuer: 'EF SET', description: '得分 69/100，对应 CEFR C1 Advanced。' },
    },
  },

  contact: { badge: '联系', title: '联系我', lead: '如果你想讨论工作机会、合作或游戏开发项目，可以通过以下方式联系我。', listAria: '联系方式', pendingTag: '待确认', copyLabel: '复制', copiedLabel: '已复制', copyErrorLabel: '复制失败', copyAria: (label) => `复制 ${label}`, methods: { 'contact-email': { label: 'Email', description: '用于工作机会、合作或项目的直接联系方式。', accessibleLabel: '给 Joaquin Salinas 发送邮件' }, 'contact-github': { label: 'GitHub', description: '游戏项目代码与仓库。', accessibleLabel: '在新标签页打开 Joaquin Salinas 的 GitHub 主页' }, 'contact-linkedin': { label: 'LinkedIn', description: '职业背景、教育与经历。', accessibleLabel: '在新标签页打开 Joaquin Salinas 的 LinkedIn 主页' } } },

  footer: { namePlaceholder: 'Joaquin Augusto Salinas Tuesta', role: 'Technical Game Designer · Gameplay Programmer · Technical QA', lastUpdateLabel: '最后更新', systemStatusLabel: 'SYSTEM STATUS', onlineLabel: 'ONLINE', backToTopAria: '返回顶部' },
};

export default zh;
