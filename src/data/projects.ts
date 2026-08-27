/**
 * projects.ts
 * Fuente de datos de la sección Proyectos. Añadir, quitar o reordenar
 * proyectos es editar únicamente `projects` — ProjectCard.astro y
 * Projects.astro no necesitan tocarse.
 *
 * Preparación para i18n: cada proyecto tiene un `id` (slug) estable, igual
 * que el patrón ya usado en `timeline.ts`. Cuando exista el sistema de
 * traducción, los campos de texto se sustituirán por búsquedas indexadas
 * por ese id (p. ej. `t(`projects.${id}.shortDescription`)`).
 */

export type ProjectPlatform = 'pc' | 'mobile' | 'console' | 'web';

export type ProjectStatus = 'completed' | 'in-development' | 'prototype' | 'game-jam';

export type ProjectType = 'personal' | 'academic' | 'game-jam' | 'collaborative' | 'client';

export interface ProjectImage {
  /** Ruta dentro de public/ (o URL absoluta). Si se omite, ProjectCard usa un placeholder. */
  src?: string;
  alt: string;
}

export interface ProjectLinks {
  github?: string;
  youtube?: string;
  /** Descarga directa (ZIP, ejecutable, itch.io "descargar", etc.) — se ignora si `store` está presente. */
  download?: string;
  /**
   * Plataforma de publicación (Steam, itch.io...). Si está presente y
   * `storeUrl` es válido, el botón "Descargar" se sustituye por el botón
   * de la tienda correspondiente (ver ProjectCard.astro).
   */
  store?: {
    name: 'Steam' | 'itch.io' | string;
    url: string;
  };
}

export interface Project {
  /** slug estable — clave futura de traducción i18n, también usado como `key` de render. */
  id: string;
  name: string;
  shortDescription: string;
  /** Descripción ampliada, preparada para una futura vista de detalle. No se usa todavía. */
  longDescription?: string;
  image: ProjectImage;
  role: string;
  engine: string;
  languages: string[];
  technologies: string[];
  platforms: ProjectPlatform[];
  status: ProjectStatus;
  type: ProjectType;
  links: ProjectLinks;
  /** Contenido de relleno pendiente de confirmar — ver informe de la Etapa 6. */
  isPlaceholder?: boolean;
}

export const projectPlatformLabels: Record<ProjectPlatform, string> = {
  pc: 'PC',
  mobile: 'Móvil',
  console: 'Consola',
  web: 'Web',
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-development': 'In Development',
  prototype: 'Prototype',
  'game-jam': 'Game Jam',
};

export const projectStatusVariants: Record<ProjectStatus, 'success' | 'accent' | 'info' | 'neutral'> = {
  completed: 'success',
  'in-development': 'accent',
  prototype: 'info',
  'game-jam': 'neutral',
};

export const projectTypeLabels: Record<ProjectType, string> = {
  personal: 'Proyecto personal',
  academic: 'Proyecto académico',
  'game-jam': 'Game Jam',
  collaborative: 'Colaborativo',
  client: 'Cliente',
};

/**
 * Devuelve una etiqueta legible para la combinación de plataformas de un
 * proyecto ("Solo PC", "PC + Consola", "Multiplataforma"...). Añadir una
 * nueva plataforma a `ProjectPlatform` no requiere tocar esta función.
 */
export function getPlatformDisplayLabel(platforms: ProjectPlatform[]): string {
  if (platforms.length === 0) return 'Por confirmar';
  if (platforms.length === 1) return `Solo ${projectPlatformLabels[platforms[0]]}`;
  if (platforms.length >= 3) return 'Multiplataforma';
  return platforms.map((p) => projectPlatformLabels[p]).join(' + ');
}

export type ProjectFilterId = 'all' | 'pc' | 'mobile' | 'console' | 'multiplatform';

/**
 * Filtros disponibles. ProjectFilters.astro solo itera sobre este array —
 * añadir un filtro nuevo (p. ej. 'web') es agregar una entrada aquí y a
 * `projectMatchesFilter`, sin tocar el componente visual.
 */
export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'pc', label: 'PC' },
  { id: 'mobile', label: 'Móvil' },
  { id: 'console', label: 'Consola' },
  { id: 'multiplatform', label: 'Multiplataforma' },
];

export function projectMatchesFilter(project: Project, filter: ProjectFilterId): boolean {
  if (filter === 'all') return true;
  if (filter === 'multiplatform') return project.platforms.length > 1;
  return project.platforms.includes(filter);
}

/**
 * Proyectos de ejemplo/placeholder. Ninguno corresponde a un proyecto,
 * repositorio, estudio o resultado real — ver la sección "Información
 * necesaria" del informe de la Etapa 6 para lo que hace falta confirmar
 * antes de sustituirlos.
 */
export const projects: Project[] = [
  {
    id: 'proyecto-placeholder-uno',
    name: 'Proyecto destacado (pendiente)',
    shortDescription:
      'Placeholder: descripción corta de un proyecto de gameplay/sistemas. Sustituir por el proyecto real.',
    longDescription:
      'Placeholder de descripción ampliada, preparada para una futura vista de detalle del proyecto — todavía sin usar en esta etapa.',
    image: { alt: 'Captura del proyecto — pendiente de subir' },
    role: 'Rol por confirmar',
    engine: 'Unity',
    languages: ['C#'],
    technologies: ['Git', 'Jira'],
    platforms: ['pc'],
    status: 'in-development',
    type: 'personal',
    links: {},
    isPlaceholder: true,
  },
  {
    id: 'proyecto-placeholder-dos',
    name: 'Game Jam (pendiente)',
    shortDescription:
      'Placeholder: proyecto realizado en una game jam. Sustituir por el nombre y contexto reales del jam.',
    image: { alt: 'Captura del proyecto — pendiente de subir' },
    role: 'Rol por confirmar',
    engine: 'Godot',
    languages: ['GDScript'],
    technologies: [],
    platforms: ['pc', 'console'],
    status: 'game-jam',
    type: 'game-jam',
    links: {},
    isPlaceholder: true,
  },
  {
    id: 'proyecto-placeholder-tres',
    name: 'Proyecto móvil (pendiente)',
    shortDescription:
      'Placeholder: proyecto multiplataforma con foco en QA/testing. Sustituir por el proyecto real.',
    image: { alt: 'Captura del proyecto — pendiente de subir' },
    role: 'Rol por confirmar',
    engine: 'Unreal Engine',
    languages: ['C++', 'Blueprints'],
    technologies: ['Perforce'],
    platforms: ['pc', 'mobile', 'console'],
    status: 'prototype',
    type: 'academic',
    links: {},
    isPlaceholder: true,
  },
  {
    id: 'proyecto-placeholder-cuatro',
    name: 'Proyecto completado (pendiente)',
    shortDescription: 'Placeholder: proyecto cerrado, sin enlaces públicos todavía. Sustituir cuando se confirme.',
    image: { alt: 'Captura del proyecto — pendiente de subir' },
    role: 'Rol por confirmar',
    engine: 'Unity',
    languages: ['C#'],
    technologies: [],
    platforms: ['mobile'],
    status: 'completed',
    type: 'academic',
    links: {},
    isPlaceholder: true,
  },
];
