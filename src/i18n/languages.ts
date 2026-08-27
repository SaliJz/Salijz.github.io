/**
 * languages.ts
 * Metadatos de los idiomas soportados. Añadir un idioma nuevo implica:
 *   1. Añadir su código aquí con su `htmlLang` (BCP 47) correcto.
 *   2. Crear `src/i18n/<code>.ts` implementando `Dictionary`.
 *   3. Registrarlo en `src/i18n/index.ts` (`dictionaries`).
 * El LanguageSwitcher (Etapa 3) ya itera sobre este array — no requiere
 * cambios de componente.
 */

export type LangCode = 'es' | 'en' | 'fr' | 'pt' | 'zh';

export interface LanguageMeta {
  code: LangCode;
  /** Nombre del idioma en sí mismo (para el listbox del selector). */
  label: string;
  /** Código corto visible en el trigger del selector (ES, EN, FR, PT, 中文). */
  nativeLabel: string;
  /**
   * Código BCP 47 para <html lang="">. El chino usa 'zh-Hans' (mandarín
   * simplificado) en vez de 'zh' a secas, tal como pide el requisito.
   */
  htmlLang: string;
}

export const languages: LanguageMeta[] = [
  { code: 'es', label: 'Español', nativeLabel: 'ES', htmlLang: 'es' },
  { code: 'en', label: 'English', nativeLabel: 'EN', htmlLang: 'en' },
  { code: 'fr', label: 'Français', nativeLabel: 'FR', htmlLang: 'fr' },
  { code: 'pt', label: 'Português', nativeLabel: 'PT', htmlLang: 'pt' },
  { code: 'zh', label: '中文', nativeLabel: '中文', htmlLang: 'zh-Hans' },
];

export const DEFAULT_LANG: LangCode = 'es';

/** Clave única de localStorage para la preferencia de idioma (persistente entre recargas). */
export const LANG_STORAGE_KEY = 'portfolio:lang';

/** Nombre del CustomEvent emitido en `document` cuando cambia el idioma activo. */
export const LANG_CHANGE_EVENT = 'portfolio:language-change';

export function isLangCode(value: string | null | undefined): value is LangCode {
  return !!value && languages.some((l) => l.code === value);
}
