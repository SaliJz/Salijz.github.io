export const CV_DOWNLOADS_READY = true;

import { withBase } from './assetPath';

/**
 * Español descarga el CV en español; cualquier otro idioma descarga el
 * Resume en inglés. Ambos PDFs viven en public/cv/.
 */
export function getCvHref(lang: string): string {
  return lang === 'es'
    ? withBase('/cv/Joaquin_Salinas_CV.pdf')
    : withBase('/cv/Joaquin_Salinas_Resume.pdf');
}

export function getCvFilename(lang: string): string {
  return lang === 'es' ? 'Joaquin_Salinas_CV.pdf' : 'Joaquin_Salinas_Resume.pdf';
}
