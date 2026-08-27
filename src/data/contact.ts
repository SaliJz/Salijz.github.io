/**
 * contact.ts
 * Datos invariantes de los métodos de contacto. URLs y valores permanecen
 * vacíos hasta que se incorporen datos reales confirmados. El copy visible
 * se resuelve por id desde i18n.
 */

export type ContactKind = 'email' | 'github' | 'linkedin' | 'itchio';

export interface ContactMethod {
  id: string;
  kind: ContactKind;
  value?: string;
  url?: string;
  priority: number;
  openInNewTab: boolean;
  canCopy?: boolean;
}

const contactMethodsSource: ContactMethod[] = [
  { id: 'contact-email', kind: 'email', priority: 1, openInNewTab: false, canCopy: true },
  { id: 'contact-linkedin', kind: 'linkedin', priority: 2, openInNewTab: true },
  { id: 'contact-github', kind: 'github', priority: 3, openInNewTab: true },
  { id: 'contact-itchio', kind: 'itchio', priority: 4, openInNewTab: true },
];

export const contactMethods = [...contactMethodsSource].sort((a, b) => a.priority - b.priority);
