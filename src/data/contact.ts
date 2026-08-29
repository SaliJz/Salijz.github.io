export type ContactKind = 'email' | 'github' | 'linkedin';

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
  {
    id: 'contact-email',
    kind: 'email',
    value: 'jsalinastuesta@gmail.com',
    url: 'mailto:jsalinastuesta@gmail.com',
    priority: 1,
    openInNewTab: false,
    canCopy: true,
  },
  {
    id: 'contact-linkedin',
    kind: 'linkedin',
    value: 'linkedin.com/in/joaquinsalinast',
    url: 'https://linkedin.com/in/joaquinsalinast',
    priority: 2,
    openInNewTab: true,
  },
  {
    id: 'contact-github',
    kind: 'github',
    value: 'github.com/SaliJz',
    url: 'https://github.com/SaliJz',
    priority: 3,
    openInNewTab: true,
  },
];

export const contactMethods = [...contactMethodsSource].sort((a, b) => a.priority - b.priority);
