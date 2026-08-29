import { getDictionary } from './index';
import type { LangCode } from './languages';
import type { Dictionary } from './types';

type ElementLike = Element | null;

function setText(target: ElementLike, value: string | undefined) {
  if (!target || typeof value !== 'string') return;
  const element = target as HTMLElement;
  if (element.children.length === 0) {
    element.textContent = value;
    return;
  }

  const directTextNodes = Array.from(element.childNodes).filter(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
  );
  if (directTextNodes.length > 0) {
    directTextNodes[0].textContent = ` ${value}`;
    directTextNodes.slice(1).forEach((node) => node.remove());
  } else {
    element.append(document.createTextNode(` ${value}`));
  }
}

function setAttr(target: ElementLike, name: string, value: string | undefined) {
  if (target && typeof value === 'string') target.setAttribute(name, value);
}

function platformDisplay(platforms: string[], d: Dictionary): string {
  if (platforms.length === 0) return d.projects.platformUnknownLabel;
  if (platforms.length === 1) {
    const label = d.projects.platformLabels[platforms[0] as keyof typeof d.projects.platformLabels];
    return `${d.projects.platformSoloPrefix} ${label ?? platforms[0]}`;
  }
  if (platforms.length >= 3) return d.projects.platformMultiLabel;
  return platforms
    .map((platform) => d.projects.platformLabels[platform as keyof typeof d.projects.platformLabels] ?? platform)
    .join(' + ');
}

function applyHeader(d: Dictionary) {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  setText(header.querySelector('.brand__label'), d.header.brandLabel);
  setAttr(header.querySelector('.brand'), 'aria-label', d.header.brandAria);
  setAttr(header.querySelector('[data-nav]'), 'aria-label', d.header.primaryNavAria);

  header.querySelectorAll<HTMLElement>('[data-nav-id]').forEach((link) => {
    const id = link.dataset.navId as keyof Dictionary['header']['nav'] | undefined;
    if (!id) return;
    setText(link.querySelector('.nav-link__label'), d.header.nav[id]);
  });

  const mobileToggle = header.querySelector<HTMLButtonElement>('[data-mobile-toggle]');
  if (mobileToggle) {
    mobileToggle.dataset.labelOpen = d.header.mobileMenuOpenAria;
    mobileToggle.dataset.labelClose = d.header.mobileMenuCloseAria;
    setAttr(
      mobileToggle,
      'aria-label',
      mobileToggle.getAttribute('aria-expanded') === 'true' ? d.header.mobileMenuCloseAria : d.header.mobileMenuOpenAria
    );
  }

  const collapseToggle = header.querySelector<HTMLButtonElement>('[data-collapse-toggle]');
  if (collapseToggle) {
    collapseToggle.dataset.labelCollapse = d.header.collapseAria;
    collapseToggle.dataset.labelExpand = d.header.expandAria;
    setAttr(
      collapseToggle,
      'aria-label',
      collapseToggle.getAttribute('aria-pressed') === 'true' ? d.header.expandAria : d.header.collapseAria
    );
  }

  const langTrigger = header.querySelector<HTMLElement>('[data-lang-trigger]');
  const langMenu = header.querySelector<HTMLElement>('[data-lang-menu]');
  setAttr(langTrigger, 'aria-label', d.header.langTriggerAria);
  setAttr(langMenu, 'aria-label', d.header.langMenuAria);
  setText(langTrigger?.querySelector('.sr-only') ?? null, d.header.langTriggerAria);
}

function applyHero(d: Dictionary) {
  const hero = document.querySelector<HTMLElement>('#home');
  if (!hero) return;
  setText(hero.querySelector('.badge'), d.hero.badge);
  setText(hero.querySelector('.hero__name'), d.hero.namePlaceholder);
  setText(hero.querySelector('.hero__role'), d.hero.role);
  setText(hero.querySelector('.hero__intro'), d.hero.intro);
  setAttr(hero.querySelector('.hero__tags'), 'aria-label', d.hero.specializationsAria);
  hero.querySelectorAll<HTMLElement>('.hero__tags .tag').forEach((tag, index) => setText(tag, d.hero.tags[index]));
  setText(hero.querySelector('.hero__aspiration'), d.hero.aspiration);

  const ctas = hero.querySelectorAll<HTMLElement>('.hero__ctas .btn__label');
  setText(ctas[0] ?? null, d.hero.ctaProjects);
  setText(ctas[1] ?? null, d.hero.ctaCv);
  setText(ctas[2] ?? null, d.hero.ctaContact);
  setAttr(hero.querySelector('[data-cv-download] a'), 'aria-label', d.hero.ctaCvAria);

  const profile = hero.querySelector<HTMLElement>('.profile-visual');
  setText(profile?.querySelector('.profile-visual__status') ?? null, d.hero.profileAvailable);
  setAttr(profile?.querySelector('[role="img"]') ?? null, 'aria-label', d.hero.profileAlt);
  setAttr(profile?.querySelector('img') ?? null, 'alt', d.hero.profileAlt);
}

function applyAbout(d: Dictionary) {
  const about = document.querySelector<HTMLElement>('#about');
  if (!about) return;
  setText(about.querySelector('.badge'), d.about.badge);
  setText(about.querySelector('.about__title'), d.about.title);
  const paras = about.querySelectorAll<HTMLElement>('.about__intro > p');
  setText(paras[0] ?? null, d.about.intro1);
  setText(paras[1] ?? null, d.about.intro2);
  const interests = about.querySelector<HTMLElement>('.about__interests');
  setAttr(interests, 'aria-label', d.about.interestsAria);
  interests?.querySelectorAll<HTMLElement>('li').forEach((li, index) => setText(li, d.about.interests[index]));

  about.querySelectorAll<HTMLElement>('[data-timeline-item]').forEach((item) => {
    const id = item.dataset.entryId;
    if (!id) return;
    const copy = d.timeline.entries[id];
    if (copy) {
      setText(item.querySelector('.timeline-item__period'), copy.period);
      setText(item.querySelector('.timeline-item__title'), copy.title);
      setText(item.querySelector('.timeline-item__context'), copy.context);
      setText(item.querySelector('.timeline-item__description'), copy.description);
    }

    const status = item.dataset.entryStatus as keyof Dictionary['timeline']['statusLabels'] | undefined;
    const current = item.dataset.entryCurrent === 'true';
    const badge = item.querySelector('.timeline-item__meta .badge');
    if (badge) setText(badge, current ? d.timeline.currentBadge : status ? d.timeline.statusLabels[status] : undefined);

    const category = item.dataset.entryCategory as keyof Dictionary['timeline']['categoryLabels'] | undefined;
    const tags = item.querySelectorAll<HTMLElement>('.timeline-item__footer .tag');
    if (category) setText(tags[0] ?? null, d.timeline.categoryLabels[category]);
    if (tags.length > 1) setText(tags[1], d.skills.placeholderTag);
  });
}

function applyProjects(d: Dictionary) {
  const section = document.querySelector<HTMLElement>('#projects');
  if (!section) return;
  setText(section.querySelector('.projects__header .badge'), d.projects.badge);
  setText(section.querySelector('.projects__title'), d.projects.title);
  setText(section.querySelector('.projects__lead'), d.projects.lead);
  setText(section.querySelector('[data-project-empty]'), d.projects.emptyMessage);
  setAttr(section.querySelector('[data-project-grid]'), 'aria-label', d.projects.listAria);

  const filters = section.querySelector<HTMLElement>('[data-project-filters]');
  setAttr(filters, 'aria-label', d.projects.filtersAria);
  filters?.querySelectorAll<HTMLButtonElement>('[data-filter-id]').forEach((button) => {
    const id = button.dataset.filterId as keyof Dictionary['projects']['filters'] | undefined;
    if (id) setText(button, d.projects.filters[id]);
  });

  section.querySelectorAll<HTMLElement>('[data-project-card]').forEach((card) => {
    const id = card.dataset.projectId;
    if (!id) return;
    const copy = d.projects.entries[id];
    if (copy) {
      setText(card.querySelector('.project-card__title'), copy.name);
      setText(card.querySelector('.project-card__description'), copy.shortDescription);
      setText(card.querySelector('.project-card__meta dd'), copy.role);
      setAttr(card.querySelector('.project-card__placeholder'), 'aria-label', copy.imageAlt);
      setAttr(card.querySelector('.project-card__image'), 'alt', copy.imageAlt);
    }

    const status = card.dataset.projectStatus as keyof Dictionary['projects']['statusLabels'] | undefined;
    if (status) setText(card.querySelector('.project-card__cover-meta .badge'), d.projects.statusLabels[status]);

    const platforms = (card.dataset.platforms ?? '').split(',').filter(Boolean);
    setText(card.querySelector('.project-card__platform'), platformDisplay(platforms, d));

    const dts = card.querySelectorAll<HTMLElement>('.project-card__meta dt');
    setText(dts[0] ?? null, d.projects.roleLabel);
    setText(dts[1] ?? null, d.projects.engineLabel);
    setAttr(card.querySelector('.project-card__tags'), 'aria-label', d.projects.techListAria);
    setText(card.querySelector('.project-card__placeholder-note .tag'), d.projects.placeholderTag);

    const projectName = copy?.name ?? card.querySelector('.project-card__title')?.textContent?.trim() ?? '';
    card.querySelectorAll<HTMLElement>('[data-project-action]').forEach((action) => {
      const kind = action.dataset.projectAction;
      const label = action.querySelector<HTMLElement>('.btn__label');
      if (kind === 'github') {
        setText(label, d.projects.githubAction);
        setAttr(action, 'aria-label', d.projects.githubAria(projectName));
      } else if (kind === 'youtube') {
        setText(label, d.projects.youtubeAction);
        setAttr(action, 'aria-label', d.projects.youtubeAria(projectName));
      } else if (kind === 'download') {
        setText(label, d.projects.downloadAction);
        setAttr(action, 'aria-label', d.projects.downloadAria(projectName));
      } else if (kind === 'store') {
        const store = action.dataset.storeName ?? label?.textContent?.trim() ?? '';
        setAttr(action, 'aria-label', d.projects.storeAria(projectName, store));
      }
    });
  });
}

function applySkills(d: Dictionary) {
  const section = document.querySelector<HTMLElement>('#skills');
  if (!section) return;
  setText(section.querySelector('[data-skills-badge]'), d.skills.badge);
  setText(section.querySelector('[data-skills-title]'), d.skills.title);
  setText(section.querySelector('[data-skills-lead]'), d.skills.lead);
  setText(section.querySelector('[data-skills-technical-heading]'), d.skills.technicalHeading);
  setText(section.querySelector('[data-skills-soft-heading]'), d.skills.softHeading);
  setAttr(section.querySelector('[data-skills-soft-list]'), 'aria-label', d.skills.softListAria);

  section.querySelectorAll<HTMLElement>('[data-skill-group]').forEach((group) => {
    const id = group.dataset.skillGroup as keyof Dictionary['skills']['groupLabels'] | undefined;
    if (!id) return;
    setText(group.querySelector('[data-skill-group-label]'), d.skills.groupLabels[id]);
    setAttr(group.querySelector('[data-skill-group-list]'), 'aria-label', d.skills.groupLabels[id]);
  });

  section.querySelectorAll<HTMLElement>('[data-soft-skill-id]').forEach((item) => {
    const id = item.dataset.softSkillId;
    if (!id) return;
    const copy = d.skills.softSkills[id];
    if (copy) {
      setText(item.querySelector('[data-soft-skill-name]'), copy.name);
      setText(item.querySelector('[data-soft-skill-description]'), copy.description);
    }
    setText(item.querySelector('[data-skill-placeholder] .tag'), d.skills.placeholderTag);
  });
}

function applyCertificates(d: Dictionary) {
  const section = document.querySelector<HTMLElement>('#certificates');
  if (!section) return;
  setText(section.querySelector('[data-certificates-badge]'), d.certificates.badge);
  setText(section.querySelector('[data-certificates-title]'), d.certificates.title);
  setText(section.querySelector('[data-certificates-lead]'), d.certificates.lead);
  section.querySelectorAll<HTMLElement>('[data-certificates-sync]').forEach((el) => setText(el, d.certificates.syncingText));
  section.querySelectorAll<HTMLElement>('[data-certificates-empty]').forEach((el) => setText(el, d.certificates.doneText));
  section.querySelectorAll<HTMLElement>('[data-certificate-category-section]').forEach((categorySection) => {
    const category = categorySection.dataset.certificateCategorySection as keyof Dictionary['certificates']['categoryLabels'] | undefined;
    if (category) setText(categorySection.querySelector('[data-certificate-category-heading]'), d.certificates.categoryLabels[category]);
  });
  section.querySelectorAll<HTMLElement>('[data-certificate-status]').forEach((card) => {
    const id = card.dataset.certificateId;
    const copy = id ? d.certificates.entries[id] : undefined;
    if (copy) {
      setText(card.querySelector('[data-certificate-name]'), copy.name);
      setText(card.querySelector('[data-certificate-issuer]'), copy.issuer);
      setText(card.querySelector('[data-certificate-description]'), copy.description);
    }
    const status = card.dataset.certificateStatus as keyof Dictionary['certificates']['statusLabels'] | undefined;
    if (status) setText(card.querySelector('[data-certificate-status-label]'), d.certificates.statusLabels[status]);
    const category = card.querySelector<HTMLElement>('[data-certificate-category]')?.dataset.certificateCategory as keyof Dictionary['certificates']['categoryLabels'] | undefined;
    if (category) setText(card.querySelector('[data-certificate-category]'), d.certificates.categoryLabels[category]);
    setText(card.querySelector('[data-certificate-verify-label]'), d.certificates.verifyAction);
    const name = copy?.name ?? card.querySelector('.certificate-card__name')?.textContent?.trim() ?? '';
    setAttr(card.querySelector('a'), 'aria-label', d.certificates.verifyAria(name));
  });
}

function applyContact(d: Dictionary) {
  const section = document.querySelector<HTMLElement>('#contact');
  if (!section) return;
  setText(section.querySelector('[data-contact-badge]'), d.contact.badge);
  setText(section.querySelector('[data-contact-title]'), d.contact.title);
  setText(section.querySelector('[data-contact-lead]'), d.contact.lead);
  setAttr(section.querySelector('[data-contact-list]'), 'aria-label', d.contact.listAria);

  section.querySelectorAll<HTMLElement>('[data-contact-method-id]').forEach((card) => {
    const id = card.dataset.contactMethodId;
    if (!id) return;
    const copy = d.contact.methods[id];
    if (!copy) return;
    setText(card.querySelector('[data-contact-label]'), copy.label);
    setText(card.querySelector('[data-contact-description]'), copy.description);
    setText(card.querySelector('[data-contact-pending] .tag'), d.contact.pendingTag);
    setAttr(card.querySelector('[data-contact-link]'), 'aria-label', copy.accessibleLabel);

    const button = card.querySelector<HTMLButtonElement>('[data-copy-contact]');
    if (button) {
      button.dataset.labelIdle = d.contact.copyLabel;
      button.dataset.labelCopied = d.contact.copiedLabel;
      button.dataset.labelError = d.contact.copyErrorLabel;
      setText(button.querySelector('[data-copy-label]'), d.contact.copyLabel);
      setAttr(button, 'aria-label', d.contact.copyAria(copy.label));
    }
  });
}

function applyFooter(d: Dictionary) {
  const footer = document.querySelector<HTMLElement>('[data-status-bar]');
  if (!footer) return;
  setText(footer.querySelector('.status-bar__item--name'), d.footer.namePlaceholder);
  const muted = footer.querySelectorAll<HTMLElement>('.status-bar__item--muted');
  setText(muted[0] ?? null, d.footer.role);
  const centerItems = footer.querySelectorAll<HTMLElement>('.status-bar__group--center .status-bar__item--muted');
  if (centerItems.length > 1) {
    const raw = centerItems[1].dataset.lastUpdate ?? centerItems[1].textContent?.split(':').slice(1).join(':').trim() ?? '';
    centerItems[1].dataset.lastUpdate = raw;
    setText(centerItems[1], `${d.footer.lastUpdateLabel}: ${raw}`);
  }
  setText(footer.querySelector('.status-bar__status .status-bar__item'), d.footer.systemStatusLabel);
  setText(footer.querySelector('.status-bar__status-label'), d.footer.onlineLabel);
  setAttr(footer.querySelector('[data-back-to-top]'), 'aria-label', d.footer.backToTopAria);
}

export function applyDictionary(lang: LangCode) {
  const d = getDictionary(lang);
  document.documentElement.dataset.lang = lang;
  document.title = d.meta.title;
  setAttr(document.querySelector('meta[name="description"]'), 'content', d.meta.description);
  setText(document.querySelector('.skip-link'), d.a11y.skipLink);
  applyHeader(d);
  applyHero(d);
  applyAbout(d);
  applyProjects(d);
  applySkills(d);
  applyCertificates(d);
  applyContact(d);
  applyFooter(d);
}
