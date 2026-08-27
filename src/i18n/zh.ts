import type { Dictionary } from './types';

const zh: Dictionary = {
  meta: {
    title: '作品集 — 建设中',
    description: '正在开发的作品集主页 — 用于验证全局布局与设计系统的临时环境。',
  },

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

  hero: {
    badge: 'Game Dev · Technical Design · QA',
    namePlaceholder: '姓名',
    role: 'Game Developer · Technical Designer · QA Engineer',
    intro:
      '我以测试游戏系统同样的严谨态度来设计和构建它们：从玩法机制到开发流程，从流程到质量保证。占位文本 — 稍后将替换为最终文案。',
    tags: ['玩法编程', '系统设计', 'QA 与自动化测试', '工具开发'],
    specializationsAria: '专业领域',
    aspiration: '正在探索战斗系统设计与开发团队工具链。',
    ctaProjects: '查看项目',
    ctaCv: '下载简历',
    ctaCvAria: '下载 PDF 格式简历',
    ctaContact: '联系方式',
    profileAvailable: '可接洽',
    profileAlt: '职业照片 — 即将上传',
  },

  about: {
    badge: '关于我',
    title: '个人简介与经历',
    intro1:
      '占位介绍文本 — 待确认。我的工作专注于游戏开发、技术设计与质量保证的交叉领域：既关心构建游戏系统，也同样关心确保它们在交到玩家手中之前能够正常运行。',
    intro2:
      '占位文本 — 专业与学业经历待补充真实数据。具体的经历（教育背景、工作经验与项目）详见下方时间线。',
    interestsAria: '专业兴趣',
    interests: ['游戏系统设计', '玩法编程', '质量与测试（QA）', '技术问题解决'],
  },

  timeline: {
    categoryLabels: {
      education: '教育背景',
      experience: '工作经验',
      project: '重要项目',
      milestone: '职业里程碑',
    },
    statusLabels: {
      completed: '已完成',
      'in-progress': '进行中',
      upcoming: '即将开始',
    },
    currentBadge: '当前',
    entries: {
      'education-base': {
        title: '教育背景待确认',
        context: '院校待确认',
        description: '占位文本：此处将展示基础学术或技术教育背景（学位、训练营等）。待替换为真实院校、具体学历名称及时间段。',
      },
      'milestone-first-project': {
        title: '首个重要项目（待定）',
        context: '背景待确认',
        description: '占位文本：具有代表性的职业或学业里程碑（例如首次参加 Game Jam、首个发布的项目）。待替换为真实里程碑。',
      },
      'experience-current': {
        title: '当前职位待确认',
        context: '公司或机构待确认',
        description: '占位文本：当前作为 Game Developer / Technical Designer / QA 的工作经历。待替换为真实职位、公司及职责。',
      },
      'project-featured': {
        title: '重点项目（待定）',
        context: '项目待确认',
        description: '占位文本：一个特别能代表个人能力的项目（不一定与"项目"板块中展示的相同）。确认后将替换。',
      },
    },
  },

  projects: {
    badge: '项目',
    title: '项目',
    lead: '一些游戏开发、技术设计与 QA 相关项目的展示。本板块内容目前仍为示例 — 稍后将替换为真实项目。',
    filtersAria: '按平台筛选项目',
    filters: {
      all: '全部',
      pc: 'PC',
      mobile: '移动端',
      console: '主机',
      multiplatform: '多平台',
    },
    emptyMessage: '暂无符合该筛选条件的项目。',
    listAria: '项目列表',
    roleLabel: '角色',
    engineLabel: '引擎',
    techListAria: '技术栈',
    placeholderTag: '内容待确认',
    githubAction: 'GitHub',
    githubAria: (project) => `在 GitHub 上查看 ${project} 的仓库`,
    youtubeAction: 'YouTube',
    youtubeAria: (project) => `在 YouTube 上观看 ${project}`,
    downloadAction: '下载',
    downloadAria: (project) => `下载 ${project}`,
    storeAria: (project, store) => `在 ${store} 上查看 ${project}`,
    statusLabels: {
      completed: 'Completed',
      'in-development': 'In Development',
      prototype: 'Prototype',
      'game-jam': 'Game Jam',
    },
    platformLabels: {
      pc: 'PC',
      mobile: '移动端',
      console: '主机',
      web: '网页',
    },
    platformSoloPrefix: '仅限',
    platformMultiLabel: '多平台',
    platformUnknownLabel: '待确认',
    entries: {
      'proyecto-placeholder-uno': {
        name: '重点项目（待定）',
        shortDescription: '占位文本：一个玩法/系统类项目的简短描述。待替换为真实项目。',
        role: '角色待确认',
      },
      'proyecto-placeholder-dos': {
        name: 'Game Jam 项目（待定）',
        shortDescription: '占位文本：在 Game Jam 中完成的项目。待替换为真实的 Jam 名称与背景信息。',
        role: '角色待确认',
      },
      'proyecto-placeholder-tres': {
        name: '移动端项目（待定）',
        shortDescription: '占位文本：一个专注于 QA/测试的多平台项目。待替换为真实项目。',
        role: '角色待确认',
      },
      'proyecto-placeholder-cuatro': {
        name: '已完成项目（待定）',
        shortDescription: '占位文本：一个已完结但暂无公开链接的项目。确认后将替换。',
        role: '角色待确认',
      },
    },
  },

  skills: {
    badge: '技能',
    title: '技能',
    lead: '结合了技术知识与软技能，应用于游戏开发、技术设计与 QA。当前显示的内容为示例，待使用最终内容确认。',
    technicalHeading: '技术技能',
    softHeading: '软技能',
    softListAria: '软技能',
    groupLabels: {
      language: '编程语言',
      engine: '引擎',
      tool: '工具与工作流程',
      other: '其他',
    },
    placeholderTag: '内容待确认',
    softSkills: {
      'soft-teamwork': {
        name: '团队合作',
        description: '占位文本：与跨职能团队（设计、美术、编程、QA）的协作能力。',
      },
      'soft-communication': {
        name: '技术沟通',
        description: '占位文本：向非技术人员清晰解释技术问题与解决方案的能力。',
      },
      'soft-problem-solving': {
        name: '问题解决',
        description: '占位文本：对 bug 及系统设计问题进行有条理的诊断与解决。',
      },
      'soft-attention-detail': {
        name: '注重细节',
        description: '占位文本：将 QA 思维应用于自身开发工作中。',
      },
      'soft-adaptability': {
        name: '持续学习',
        description: '占位文本：能够快速适应新工具、新引擎与新工作流程。',
      },
      'soft-time-management': {
        name: '时间管理',
        description: '占位文本：在紧张的截止日期（Game Jam、冲刺开发）下合理安排任务。',
      },
    },
  },

  certificates: {
    badge: '证书',
    title: '证书',
    lead: '与游戏开发、技术设计和 QA 相关的本地及国际认证。',
    categoryLabels: {
      local: '本地证书',
      global: '国际证书',
    },
    syncingText: '正在同步证书…',
    doneText: '目前暂无可用证书。',
    verifyAction: '验证',
    verifyAria: (name) => `验证证书：${name}`,
    statusLabels: {
      active: '有效',
      expired: '已过期',
      'in-progress': '进行中',
    },
  },

  contact: {
    badge: '联系方式',
    title: '联系我',
    lead: '占位邀请文案 — 待确认。有项目想法、合作机会，或只是想聊聊游戏开发？以下是联系我的渠道。',
    listAria: '联系方式列表',
    pendingTag: '待确认',
    copyLabel: '复制',
    copiedLabel: '已复制',
    copyErrorLabel: '复制失败',
    copyAria: (label) => `复制${label}到剪贴板`,
    methods: {
      'contact-email': {
        label: '电子邮件',
        description: '讨论合作机会、协作或项目最直接的方式。',
        accessibleLabel: '发送电子邮件 — 地址待确认',
      },
      'contact-github': {
        label: 'GitHub',
        description: '个人及协作项目的代码与仓库。',
        accessibleLabel: '打开 GitHub 主页（将在新标签页中打开）— 链接待确认',
      },
      'contact-linkedin': {
        label: 'LinkedIn',
        description: '职业经历与工作背景。',
        accessibleLabel: '打开 LinkedIn 主页（将在新标签页中打开）— 链接待确认',
      },
      'contact-itchio': {
        label: 'itch.io',
        description: '已发布的游戏项目与原型。',
        accessibleLabel: '打开 itch.io 主页（将在新标签页中打开）— 链接待确认',
      },
    },
  },

  footer: {
    namePlaceholder: '姓名',
    role: 'Game Developer · Technical Designer · QA',
    lastUpdateLabel: '最后更新',
    systemStatusLabel: 'SYSTEM STATUS',
    onlineLabel: 'ONLINE',
    backToTopAria: '返回顶部',
  },
};

export default zh;
