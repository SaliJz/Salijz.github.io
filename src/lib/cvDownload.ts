import { withBase } from './assetPath';

/**
 * cvDownload.ts
 * Abstracción mínima para el requisito final de descarga de CV:
 *   - Español → CV en español.
 *   - Cualquier otro idioma → CV en inglés.
 *
 * Todavía NO existe el sistema de i18n (llegará en una etapa posterior),
 * así que esto solo resuelve la RUTA del PDF a partir de un código de
 * idioma de dos letras. El botón "Descargar CV" (ver Hero.astro) inicializa
 * su href con 'es' por defecto y se actualiza en cliente si encuentra una
 * preferencia ya guardada por el LanguageSwitcher (sessionStorage /
 * evento 'portfolio:language-change' — Etapa 3), sin necesidad de tocar
 * este helper cuando el i18n real esté listo.
 *
 * Nota: los archivos PDF reales (`/cv/cv-es.pdf`, `/cv/cv-en.pdf`) todavía
 * no existen en `public/cv/` — se añadirán cuando exista el CV definitivo.
 * El enlace queda preparado y apuntando a la ruta correcta.
 */
export function getCvHref(lang: string): string {
  const normalized = lang === 'es' ? 'es' : 'en';
  return withBase(`/cv/cv-${normalized}.pdf`);
}

export function getCvFilename(lang: string): string {
  const normalized = lang === 'es' ? 'es' : 'en';
  return `CV-${normalized}.pdf`;
}
