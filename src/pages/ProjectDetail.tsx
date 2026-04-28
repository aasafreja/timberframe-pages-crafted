import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const ProjectDetail = () => {
  const { t } = useI18n();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/portfolio" replace />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article>
      <section className="relative h-[70vh] min-h-[480px] -mt-16 md:-mt-20 pt-16 md:pt-20 overflow-hidden">
        <img src={project.cover} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/0" />
        <div className="container-wide relative z-10 h-full flex items-end pb-12 md:pb-16">
          <div className="text-background max-w-3xl">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-background mb-6"
            >
              <ArrowLeft size={14} /> {t("common.back.projects")}
            </Link>
            <div className="eyebrow text-background/80 mb-3">{t(`portfolio.filter.${project.category}`)}</div>
            <h1 className="text-background text-4xl md:text-6xl leading-[1.05]">{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5 text-sm">
            <div>
              <div className="eyebrow mb-2">{t("project.location")}</div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" /> {project.location}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-2">{t("project.year")}</div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent" /> {project.year}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-2">{t("project.products")}</div>
              <ul className="space-y-1">
                {project.products.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Layers size={14} className="text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              {project.summary}
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t("project.caseSoon")}
            </p>
            <Button asChild className="mt-8 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">
                {t("project.discuss")} <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid gap-4 md:gap-6 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <div
              key={i}
              className={`aspect-[4/3] overflow-hidden bg-muted ${i === 0 ? "md:col-span-2 md:aspect-[16/8]" : ""}`}
            >
              <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-t border-border py-16">
        <div className="container-wide flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="eyebrow mb-2">{t("project.next")}</div>
            <h3 className="text-2xl md:text-3xl">{next.title}</h3>
          </div>
          <Link to={`/portfolio/${next.id}`} className="link-underline text-sm font-medium">
            {t("common.continue")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
