import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/project-commercial.jpg";

type Reference = {
  title: string;
  country: string;
  year: string;
  area: string;
  materials: string;
  partner: { role: string; name: string };
};

const REFERENCES: Reference[] = [
  {
    title: "Stokholmas biroju komplekss",
    country: "Zviedrija",
    year: "2024",
    area: "500 m²",
    materials: "CLT paneļi",
    partner: { role: "Arhitekts", name: "[Vārds]" },
  },
  {
    title: "Berlīnes dzīvojamā ēka",
    country: "Vācija",
    year: "2024",
    area: "1200 m²",
    materials: "CLT + termokoks",
    partner: { role: "Arhitekts", name: "[Vārds]" },
  },
  {
    title: "Helsinku rūpniecības objekts",
    country: "Somija",
    year: "2023",
    area: "800 m²",
    materials: "Pielāgoti paneļi",
    partner: { role: "Būvuzņēmējs", name: "[Vārds]" },
  },
];

const Portfolio = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={t("portfolio.eyebrow")}
        title={t("portfolio.title")}
        description={t("portfolio.desc")}
        image={heroImg}
        overlay="strong"
        cta={{ label: t("nav.quote"), to: "/contact" }}
        secondary={{ label: "View references", href: "#references" }}
        meta={["Sweden · 2024", "Germany · 2024", "Finland · 2023"]}
      />

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-4xl">
          <div className="eyebrow mb-4">{t("portfolio.list.eyebrow")}</div>
          <h2 className="text-2xl md:text-3xl font-normal mb-12 max-w-2xl">
            {t("portfolio.list.title")}
          </h2>

          <ul className="border-t border-border">
            {REFERENCES.map((r) => (
              <li
                key={r.title}
                className="border-b border-border py-8 md:py-10 grid gap-6 md:grid-cols-12 md:gap-8 items-start"
              >
                <div className="md:col-span-5 flex gap-4">
                  <Check
                    size={18}
                    strokeWidth={1.4}
                    className="text-accent shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-normal leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light mt-1">
                      {r.country} · {r.year}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {t("portfolio.list.area")}
                  </div>
                  <div className="text-sm font-light">{r.area}</div>
                </div>

                <div className="md:col-span-2">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {t("portfolio.list.materials")}
                  </div>
                  <div className="text-sm font-light">{r.materials}</div>
                </div>

                <div className="md:col-span-2">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {r.partner.role}
                  </div>
                  <div className="text-sm font-light">{r.partner.name}</div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-muted-foreground font-light max-w-xl">
            {t("portfolio.list.footnote")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
