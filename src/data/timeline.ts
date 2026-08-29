export type TimelineCategory = 'education' | 'experience' | 'project' | 'milestone';
export type TimelineStatus = 'completed' | 'in-progress' | 'upcoming';

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  context: string;
  category: TimelineCategory;
  description: string;
  status?: TimelineStatus;
  current?: boolean;
  isPlaceholder?: boolean;
}

export const timelineCategoryLabels: Record<TimelineCategory, string> = {
  education: 'Formación',
  experience: 'Experiencia',
  project: 'Proyecto relevante',
  milestone: 'Hito profesional',
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'education-toulouse',
    period: 'Mar. 2023 — Actualidad',
    title: 'Diseño de Videojuegos y Entretenimiento Digital',
    context: 'Toulouse Lautrec · Lima, Perú',
    category: 'education',
    description: 'Formación técnica en Diseño de Videojuegos y Entretenimiento Digital, actualmente en curso.',
    status: 'in-progress',
  },
  {
    id: 'project-eden-404',
    period: 'Mar. 2025 — Jul. 2025',
    title: 'Eden 404',
    context: 'FPS 3D · Proyecto académico',
    category: 'project',
    description:
      'Implementación de mecánicas de gameplay y sistemas de interacción, resolución de problemas de estabilidad y rendimiento y optimización de sistemas procedurales.',
    status: 'completed',
  },
  {
    id: 'project-forsaken-rules',
    period: 'Sept. 2025 — Jul. 2026',
    title: 'Forsaken Rules',
    context: 'Roguelike isométrico 3D · Publicado en Steam',
    category: 'project',
    description:
      'Desarrollo de sistemas y mecánicas principales en Unity/C#, arquitectura modular, playtesting técnico continuo y contribución a la optimización y estabilidad del proyecto.',
    status: 'completed',
  },
  {
    id: 'project-franklins-journey',
    period: 'Sept. 2025 — Nov. 2025',
    title: 'El Viaje de Franklin',
    context: 'Bullet Hell 2D · Android',
    category: 'project',
    description:
      'Desarrollo de sistemas para generación masiva de proyectiles, optimización para dispositivos móviles y pruebas técnicas hasta obtener una versión estable.',
    status: 'completed',
  },
  {
    id: 'recognition-guardianes',
    period: 'Mayo 2026',
    title: 'Certificado de Contribución',
    context: 'Asociación Civil Turismo Cuida',
    category: 'milestone',
    description:
      'Reconocimiento oficial por la contribución al proyecto Guardianes del Humedal mediante la integración de sistemas funcionales desarrollados en El Viaje de Franklin.',
    status: 'completed',
  },
];
