/**
 * Fuente de datos invariantes de Proyectos. El copy localizado se resuelve
 * desde src/i18n/* usando el id estable de cada proyecto.
 */
import { withBase } from '@/lib/assetPath';

export type ProjectPlatform = 'pc' | 'mobile' | 'console' | 'web';
export type ProjectStatus = 'completed' | 'in-development' | 'prototype' | 'game-jam';
export type ProjectType = 'personal' | 'academic' | 'game-jam' | 'collaborative' | 'client';

export interface ProjectImage {
  src?: string;
  alt: string;
}

export interface ProjectLinks {
  github?: string;
  youtube?: string;
  download?: string;
  store?: {
    name: 'Steam' | 'itch.io' | 'Play Store' | string;
    url: string;
  };
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
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
  isPlaceholder?: boolean;
}

export const projectPlatformLabels: Record<ProjectPlatform, string> = {
  pc: 'PC',
  mobile: 'Móvil',
  console: 'Consola',
  web: 'Web',
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  completed: 'Completado',
  'in-development': 'En desarrollo',
  prototype: 'Prototipo',
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

export function getPlatformDisplayLabel(platforms: ProjectPlatform[]): string {
  if (platforms.length === 0) return 'Por confirmar';
  if (platforms.length === 1) return `Solo ${projectPlatformLabels[platforms[0]]}`;
  if (platforms.length >= 3) return 'Multiplataforma';
  return platforms.map((p) => projectPlatformLabels[p]).join(' + ');
}

export type ProjectFilterId = 'all' | 'pc' | 'mobile' | 'console' | 'multiplatform';

// Solo se muestran filtros que actualmente tienen contenido real.
export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'pc', label: 'PC' },
  { id: 'mobile', label: 'Móvil' },
];

export function projectMatchesFilter(project: Project, filter: ProjectFilterId): boolean {
  if (filter === 'all') return true;
  if (filter === 'multiplatform') return project.platforms.length > 1;
  return project.platforms.includes(filter);
}

export const projects: Project[] = [
  {
    id: 'forsaken-rules',
    name: 'Forsaken Rules',
    shortDescription:
      'Roguelike isométrico 3D publicado en Steam. Desarrollo de sistemas de gameplay y mecánicas en Unity/C#, arquitectura modular, playtesting técnico y optimización.',
    image: {
      src: withBase('/images/projects/forsaken-rules.webp'),
      alt: 'Arte promocional de Forsaken Rules con logotipo y personajes del juego',
    },
    role: 'Gameplay Programmer / Technical Game Designer',
    engine: 'Unity',
    languages: ['C#'],
    technologies: ['Git', 'GitHub', 'Technical QA', 'Performance Optimization'],
    platforms: ['pc'],
    status: 'completed',
    type: 'academic',
    links: {
      github: 'https://github.com/SaliJz/Proyecto-Taller-V-VI-Forsaken-Rules',
      youtube: 'https://www.youtube.com/watch?v=vOmZ750VCJU',
      store: {
        name: 'Steam',
        url: 'https://store.steampowered.com/app/4858720/Forsaken_Rules/',
      },
    },
  },
  {
    id: 'eden-404',
    name: 'Eden 404',
    shortDescription:
      'FPS 3D en el que implementé mecánicas de gameplay y sistemas de interacción, resolví problemas de estabilidad y rendimiento y optimicé sistemas procedurales.',
    image: {
      src: withBase('/images/projects/eden-404.webp'),
      alt: 'Imagen promocional de Eden 404 con personaje principal y logotipo del proyecto',
    },
    role: 'Gameplay Programmer / Technical Designer',
    engine: 'Unity',
    languages: ['C#'],
    technologies: ['Git', 'GitHub', 'Procedural Systems', 'Performance Optimization'],
    platforms: ['pc'],
    status: 'completed',
    type: 'academic',
    links: {
      github: 'https://github.com/SaliJz/Proyecto-Taller-IV-Eden-404',
      youtube: 'https://youtu.be/n6NW1cAsjvc',
    },
  },
  {
    id: 'franklins-journey',
    name: 'El Viaje de Franklin',
    shortDescription:
      'Bullet Hell 2D para Android. Desarrollé un sistema eficiente para la generación masiva de proyectiles, optimicé el rendimiento móvil y realicé validación funcional.',
    image: {
      src: withBase('/images/projects/el-viaje-de-franklin.webp'),
      alt: 'Pantalla de título de El Viaje de Franklin',
    },
    role: 'Gameplay Programmer',
    engine: 'Unity',
    languages: ['C#'],
    technologies: ['Git', 'GitHub', 'Technical QA', 'Functional Testing'],
    platforms: ['mobile'],
    status: 'completed',
    type: 'academic',
    links: {
      github: 'https://github.com/SaliJz/Gamification_2025-Franklins-Journey',
      youtube: 'https://youtu.be/z5QV23KgwcI',
    },
  },
];
