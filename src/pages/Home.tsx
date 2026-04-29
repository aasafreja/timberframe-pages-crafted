import { Link } from "react-router-dom";
import { ArrowRight, Check, Award, Settings2, Clock, Tag, Handshake } from "lucide-react";
import { products, projects, stats } from "@/data/site";
import heroImg from "@/assets/hero-thermowood.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const Home = () => {
  const { t } = useI18n();
  const advantages = [
    { Icon: Award, title: t("home.adv.1.title"), text: t("home.adv.1.text") },
    { Icon: Settings2, title: t("home.adv.2.title"), text: t("home.adv.2.text") },
    { Icon: Clock, title: t("home.adv.3.title"), text: t("home.adv.3.text") },
    { Icon: Tag, title: t("home.adv.4.title"), text: t("home.adv.4.text") },
    { Icon: Handshake, title: t("home.adv.5.title"), text: t("home.adv.5.text") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <img
          src={heroImg}
          alt="Thermowood facade at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="container-wide relative z-10 pb-20 md:pb-28 text-background">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow text-background/70 mb-6">{t("home.hero.eyebrow")}</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-background leading-[1.02] font-normal whitespace-pre-line">
              {t("home.hero.title")}
            </h1>
            <p className="mt-8 text-base md:text-lg text-background/80 max-w-xl leading-relaxed font-light">
              {t("home.hero.sub")}
            </p>
            <div className="mt-12 flex flex-wrap gap-8 items-center">
              <Link to="/products" className="group inline-flex items-center gap-3 text-background text-sm tracking-wide border-b border-background/50 pb-1 hover:border-background transition-colors">
                {t("common.exploreProducts")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="text-background/70 text-sm tracking-wide hover:text-background transition-colors">
                {t("common.viewPortfolio")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">{t("home.adv.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl">{t("home.adv.title")}</h2>
          </div>
          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-3">
            {advantages.map(({ Icon, title, text }) => (
              <div key={title} className="space-y-4 border-t border-border pt-6">
                <Icon className="text-foreground/70" size={22} strokeWidth={1.4} />
                <h3 className="text-xl font-normal">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-secondary/50 py-20 md:py-28 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow mb-4">{t("home.products.eyebrow")}</div>
              <h2 className="text-3xl md:text-5xl max-w-xl font-normal">
                {t("home.products.title")}
              </h2>
            </div>
            <Link to="/products" className="link-underline text-sm">
              {t("common.viewAll")} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 space-y-1">
                  <h3 className="text-base font-normal">{p.name}</h3>
                  <p className="text-xs text-muted-foreground font-light">{p.tagline}</p>
                  <div className="pt-2 text-xs text-foreground/60">{p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center md:text-left">
            {stats.map((s, i) => (
              <div key={i} className="space-y-3 md:border-l md:border-border md:pl-6 first:border-l-0 first:pl-0">
                <div className="font-display text-5xl md:text-6xl text-foreground font-normal">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{t(`stats.${i}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow text-primary-foreground/50 mb-4">{t("home.portfolio.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl text-primary-foreground font-normal">
                {t("home.portfolio.title")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-primary-foreground/60 leading-relaxed font-light">
                {t("home.portfolio.text")}
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.slice(0, 3).map((proj) => (
              <Link key={proj.id} to={`/portfolio/${proj.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-muted/20">
                  <img
                    src={proj.cover}
                    alt={proj.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-primary-foreground text-lg font-normal">{proj.title}</h3>
                    <p className="text-sm text-primary-foreground/50 font-light">{proj.location}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 pt-2">
                    {t(`portfolio.filter.${proj.category}`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="border-t border-border pt-16 md:pt-20 grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-5xl leading-[1.05] font-normal max-w-xl">
                {t("home.cta.title")}
              </h2>
              <p className="text-muted-foreground max-w-lg font-light">
                {t("home.cta.text")}
              </p>
              <ul className="space-y-2 pt-2">
                {[t("home.cta.b1"), t("home.cta.b2"), t("home.cta.b3")].map((txt) => (
                  <li key={txt} className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                    <Check size={14} strokeWidth={1.5} className="text-foreground/60" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link to="/contact" className="inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                {t("nav.quote")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
