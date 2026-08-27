import es from './es';
import en from './en';
import fr from './fr';
import pt from './pt';
import zh from './zh';
import type { Dictionary } from './types';
import type { LangCode } from './languages';

export { DEFAULT_LANG, LANG_CHANGE_EVENT, LANG_STORAGE_KEY, isLangCode, languages } from './languages';
export type { LangCode } from './languages';
export type { Dictionary } from './types';

const dictionaries: Record<LangCode, Dictionary> = { es, en, fr, pt, zh };

export function getDictionary(lang: LangCode): Dictionary {
  return dictionaries[lang];
}
