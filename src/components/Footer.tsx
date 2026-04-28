import { Link } from "react-router-dom";
import { company } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

export const Footer = () => {
  const { t } = useI18n();

  const NAV_LINKS: [string, string][] = [
    [t("nav.products"), "/products"],
    [t("nav.process"), "/process"],
    [t("nav.portfolio"), "/portfolio"],
    [t("nav.about"), "/about"],
    [t("nav.specs"), "/specs"],
    [t("nav.contact"), "/contact"],
  ];

  const LEGAL_LINKS: [string, string][] = [
    [t("footer.legal.privacy"), "#"],
    [t("footer.legal.terms"), "#"],
    [t("footer.legal.shipping"), "#"],
    [t("footer.legal.refund"), "#"],
  ];

  const SOCIALS: [string, string][] = [
    ["Instagram", "#"],
    ["LinkedIn", "#"],
    ["Facebook", "#"],
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="grid gap-14 md:gap-20 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <p className="font-display text-3xl md:text-4xl leading-[1.1] font-normal max-w-md text-primary-foreground">
              Timber Smart Solution
            </p>

            <div className="space-y-1 text-sm text-primary-foreground/60 font-light leading-relaxed">
              <div>{company.address}</div>
              <div>{company.hours}</div>
            </div>

            <div className="space-y-1 text-sm font-light">
              <a
                href={`mailto:${company.email}`}
                className="block text-primary-foreground hover:text-primary-foreground/60 transition-colors"
              >
                {company.email}
              </a>
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
              {t("footer.site")}
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {NAV_LINKS.map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-11">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
              {t("footer.follow")}
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {SOCIALS.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between text-xs text-primary-foreground/50 font-light">
          <span>
            {t("footer.copyright", { year: new Date().getFullYear(), name: company.name })}
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-primary-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
