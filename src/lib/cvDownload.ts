export const CV_DOWNLOADS_READY = false;

import { withBase } from './assetPath';

/**
 * cvDownload.ts
 * Abstracción mínima para el requisito final de descarga de CV:
 *   - Español → CV en español.
 *   - Cualquier otro idioma → CV en inglés.
 *
 * El sistema i18n central consume este helper,
 * así que esto solo resuelve la RUTA del PDF a partir de un código de
 * idioma de dos letras. El botón "Descargar CV" (ver Hero.astro) inicializa
 * su href con 'es' por defecto y se actualiza en cliente si encuentra una
 * preferencia ya guardada por el LanguageSwitcher (localStorage /
 * evento 'portfolio:language-change'), sin necesidad de tocar
 * este helper cuando el i18n real esté listo.
 *
 * Nota: los archivos PDF reales (`/cv/cv-es.pdf`, `/cv/cv-en.pdf`) todavía
 * no existen en `public/cv/`. Mientras `CV_DOWNLOADS_READY` sea `false`,
 * Hero muestra el CTA deshabilitado para evitar enviar al usuario a un 404.
 * Al añadir ambos PDFs, cambia la constante a `true`.
 */
export function getCvHref(lang: string): string {
  const normalized = lang === 'es' ? 'es' : 'en';
  return withBase(`/cv/cv-${normalized}.pdf`);
}

export function getCvFilename(lang: string): string {
  const normalized = lang === 'es' ? 'es' : 'en';
  return `CV-${normalized}.pdf`;
}
