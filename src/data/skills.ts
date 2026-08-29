/** Datos profesionales confirmados en CV/Resume. */
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

export const technicalSkills: TechnicalSkill[] = [
  { id: 'tech-csharp', name: 'C#', group: 'language' },
  { id: 'tech-unity', name: 'Unity (2D/3D)', group: 'engine' },
  { id: 'tech-git', name: 'Git', group: 'tool' },
  { id: 'tech-github', name: 'GitHub', group: 'tool' },
  { id: 'tech-clickup', name: 'ClickUp', group: 'tool' },
  { id: 'tech-clockify', name: 'Clockify', group: 'tool' },
  { id: 'tech-gameplay-systems', name: 'Gameplay Systems', group: 'other' },
  { id: 'tech-systems-design', name: 'Systems Design', group: 'other' },
  { id: 'tech-gdd', name: 'GDD Documentation', group: 'other' },
  { id: 'tech-gsb', name: 'GSB Documentation', group: 'other' },
  { id: 'tech-balancing', name: 'Gameplay Balancing', group: 'other' },
  { id: 'tech-modular', name: 'Modular Architecture', group: 'other' },
  { id: 'tech-procedural', name: 'Procedural Systems', group: 'other' },
  { id: 'tech-performance', name: 'Performance Optimization', group: 'other' },
  { id: 'tech-playtesting', name: 'Playtesting', group: 'other' },
  { id: 'tech-bug-reporting', name: 'Bug Reporting', group: 'other' },
  { id: 'tech-functional', name: 'Functional Testing', group: 'other' },
  { id: 'tech-debugging', name: 'Debugging', group: 'other' },
  { id: 'tech-regression', name: 'Regression Testing', group: 'other' },
  { id: 'tech-qa', name: 'Technical QA', group: 'other' },
];

// El CV/Resume no declara un inventario formal de soft skills. Se evita inventarlas.
export const softSkills: SoftSkill[] = [];
