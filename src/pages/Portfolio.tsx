import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const FILTERS = ["All", "Residential", "Commercial", "Interior"] as const;

const Portfolio = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow={t("portfolio.eyebrow")}
        title={t("portfolio.title")}
        description={t("portfolio.desc")}
      />

      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-6 mb-12 border-b border-border pb-5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm tracking-wide transition-colors pb-1 border-b ${
                  filter === f
                    ? "text-foreground border-foreground"
                    : "text-foreground/50 border-transparent hover:text-foreground"
                }`}
              >
                {t(`portfolio.filter.${f}`)}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="group block animate-fade-up">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-normal">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 font-light">
                      {p.location} · {p.year}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-2 font-light">
                      {p.products.join(" · ")}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap pt-1">
                    {t(`portfolio.filter.${p.category}`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
