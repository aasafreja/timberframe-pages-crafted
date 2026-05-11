import { useI18n } from "@/i18n/I18nProvider";
import { LANGS, Lang } from "@/i18n/translations";

type Props = { variant?: "header" | "mobile" };

export const LanguageSwitcher = ({ variant = "header" }: Props) => {
  const { lang, setLang } = useI18n();

  if (variant === "mobile") {
    return (
      <div className="inline-flex items-center gap-1 border border-border px-1 py-1 self-start">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code as Lang)}
            className={`px-3 py-1 text-xs tracking-[0.15em] transition-colors ${
              lang === l.code
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
            aria-pressed={lang === l.code}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] font-medium select-none">
      {LANGS.map((l, i) => (
        <span key={l.code} className="inline-flex items-center gap-2">
          <button
            onClick={() => setLang(l.code as Lang)}
            className={`relative pb-0.5 transition-opacity ${
              lang === l.code
                ? "opacity-100 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-current"
                : "opacity-50 hover:opacity-100"
            }`}
            aria-pressed={lang === l.code}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && <span className="opacity-30">/</span>}
        </span>
      ))}
    </div>
  );
};
