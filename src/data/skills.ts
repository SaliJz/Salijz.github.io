/**
 * skills.ts
 * Datos estructurales de la sección Habilidades. Los nombres de tecnologías
 * se consideran invariantes; las habilidades blandas usan ids estables para
 * resolver su copy desde i18n.
 */

export type TechnicalSkillGroup = 'language' | 'engine' | 'tool' | 'other';

export interface TechnicalSkill {
  id: string;
  name: string;
  group: TechnicalSkillGroup;
  isPlaceholder?: boolean;
}

export interface SoftSkill {
  id: string;
  isPlaceholder?: boolean;
}

/**
 * Contenido de muestra pendiente de sustituir por la lista profesional
 * definitiva. No se muestran porcentajes ni niveles arbitrarios.
 */
export const technicalSkills: TechnicalSkill[] = [
  { id: 'tech-csharp', name: 'C#', group: 'language', isPlaceholder: true },
  { id: 'tech-unity', name: 'Unity', group: 'engine', isPlaceholder: true },
  { id: 'tech-git', name: 'Git', group: 'tool', isPlaceholder: true },
  { id: 'tech-github', name: 'GitHub', group: 'tool', isPlaceholder: true },
  { id: 'tech-qa', name: 'QA / Testing', group: 'other', isPlaceholder: true },
  { id: 'tech-design', name: 'Technical Design', group: 'other', isPlaceholder: true },
];

export const softSkills: SoftSkill[] = [
  { id: 'soft-teamwork', isPlaceholder: true },
  { id: 'soft-communication', isPlaceholder: true },
  { id: 'soft-problem-solving', isPlaceholder: true },
  { id: 'soft-attention-detail', isPlaceholder: true },
  { id: 'soft-adaptability', isPlaceholder: true },
  { id: 'soft-time-management', isPlaceholder: true },
];
