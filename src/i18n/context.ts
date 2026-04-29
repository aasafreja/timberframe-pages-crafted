import { createContext } from "react";
import type { Lang } from "./translations";

export type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

export const I18nContext = createContext<I18nCtx | null>(null);
