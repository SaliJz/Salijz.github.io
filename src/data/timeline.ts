/**
 * timeline.ts
 * Estructura de datos del Timeline de "Sobre mí". Separada del componente
 * de presentación para poder agregar, eliminar o reordenar hitos editando
 * únicamente este archivo (basta con reordenar el array — se renderiza en
 * el orden en que aparece aquí).
 *
 * Preparación para i18n: cada hito tiene un `id` estable. Cuando se
 * implemente el sistema de internacionalización, los campos de texto
 * (`title`, `context`, `description`) se sustituirán por búsquedas a un
 * diccionario de traducciones indexado por ese `id` (p. ej.
 * `t(`timeline.${id}.title`)`) sin tener que tocar la forma de los datos
 * ni el componente `Timeline.astro`. Por eso el `id` es semántico y
 * estable, no un índice de array.
 *
 * IMPORTANTE — contenido placeholder: no se dispone todavía de fechas,
 * instituciones, cargos ni descripciones reales confirmadas. Todas las
 * entradas están marcadas explícitamente con `isPlaceholder: true` y un
 * texto que lo indica, tal como se pidió. Ver el informe de la Etapa 5
 * para la lista de datos que hacen falta para reemplazarlas.
 */

export type TimelineCategory = 'education' | 'experience' | 'project' | 'milestone';

export type TimelineStatus = 'completed' | 'in-progress' | 'upcoming';

export interface TimelineEntry {
  /** Identificador estable — clave futura de traducción, no cambiar al reordenar. */
  id: string;
  /** Periodo mostrado tal cual (texto libre: "2022 — 2024", "2025 — Presente", etc). */
  period: string;
  title: string;
  /** Institución, organización, empresa o contexto del hito. */
  context: string;
  category: TimelineCategory;
  description: string;
  status?: TimelineStatus;
  /** Marca el hito más reciente/actual para el indicador de "punto actual". */
  current?: boolean;
  /** Contenido de relleno pendiente de confirmar — ver informe de la Etapa 5. */
  isPlaceholder?: boolean;
}

export const timelineCategoryLabels: Record<TimelineCategory, string> = {
  education: 'Formación',
  experience: 'Experiencia',
  project: 'Proyecto relevante',
  milestone: 'Hito profesional',
};

/**
 * Datos de ejemplo/placeholder. Reemplazar cada entrada cuando se confirme
 * la información real — ver la sección "Información necesaria" del
 * informe de la Etapa 5 para la lista exacta de campos a completar.
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: 'education-base',
    period: '20XX — 20XX',
    title: 'Formación pendiente de confirmar',
    context: 'Institución por confirmar',
    category: 'education',
    description:
      'Placeholder: aquí irá la formación académica o técnica de base (carrera, bootcamp, etc.). Sustituir por la institución, título exacto y periodo real.',
    status: 'completed',
    isPlaceholder: true,
  },
  {
    id: 'milestone-first-project',
    period: '20XX',
    title: 'Primer proyecto relevante (pendiente)',
    context: 'Contexto por confirmar',
    category: 'milestone',
    description:
      'Placeholder: hito profesional o académico significativo (p. ej. primer game jam, primer proyecto publicado). Sustituir por el hito real.',
    status: 'completed',
    isPlaceholder: true,
  },
  {
    id: 'experience-current',
    period: '20XX — Presente',
    title: 'Rol actual pendiente de confirmar',
    context: 'Empresa u organización por confirmar',
    category: 'experience',
    description:
      'Placeholder: experiencia profesional actual como Game Developer / Technical Designer / QA. Sustituir por el cargo, empresa y responsabilidades reales.',
    status: 'in-progress',
    current: true,
    isPlaceholder: true,
  },
  {
    id: 'project-featured',
    period: '20XX',
    title: 'Proyecto destacado (pendiente)',
    context: 'Proyecto por confirmar',
    category: 'project',
    description:
      'Placeholder: un proyecto especialmente representativo del perfil (no necesariamente el mismo que aparecerá en la sección Proyectos). Sustituir cuando se confirme cuál destacar aquí.',
    isPlaceholder: true,
  },
];
