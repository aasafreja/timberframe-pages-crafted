import { Link } from "react-router-dom";
import { ArrowRight, Check, Award, Settings2, Clock, Tag, Handshake, Home as HomeIcon, Layers, Blocks, Armchair } from "lucide-react";
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
      {/* HERO — editorial split, dark premium nordic */}
      <section className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20 bg-foreground text-background h-screen flex flex-col">
        <div className="container-wide relative flex-1 flex flex-col min-h-0">

          <div className="grid lg:grid-cols-12 items-stretch flex-1 min-h-0">
            {/* LEFT — text column */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between py-4 md:py-8 lg:py-10 lg:pr-12 min-h-0">
              {/* top meta */}
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-background/55 font-light">
                <span>Riga · Latvia</span>
                <span className="hidden sm:inline">Est. 1999</span>
              </div>

              {/* headline */}
              <div className="py-4 md:py-8 lg:py-0 animate-fade-up">
                <h1 className="font-display text-background leading-[0.98] tracking-[-0.035em] text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] font-medium">
                  Premium
                  <br />
                  CLT
                  <span className="text-background/40"> &amp; </span>
                  <br className="sm:hidden" />
                  Thermowood
                </h1>

                <p className="mt-4 md:mt-8 text-sm md:text-lg text-background/65 font-light leading-relaxed max-w-md">
                  {t("home.hero.sub")}
                </p>
              </div>

              {/* bottom row — CTAs */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-5 mt-10 md:mt-14">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-background text-sm tracking-wide border-b border-background/50 pb-1.5 hover:border-background transition-colors"
                >
                  {t("nav.quote")}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/products"
                  className="text-background/60 text-sm tracking-wide hover:text-background transition-colors"
                >
                  {t("common.exploreProducts")}
                </Link>
              </div>
            </div>

            {/* RIGHT — image column, bleeds to viewport edge on desktop */}
            <div className="lg:col-span-7 xl:col-span-7 relative min-h-[40vh] lg:min-h-0 lg:my-4 -mx-6 md:-mx-10 lg:mx-0">
              <div className="absolute inset-0 lg:left-0 lg:right-[calc(50%-50vw)]">
                <img
                  src={heroImg}
                  alt="Thermowood facade at golden hour"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>


          {/* bottom hairline meta-strip — desktop only */}
          <div className="hidden lg:block border-t border-background/15">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-background/15 text-[11px] uppercase tracking-[0.22em] text-background/55 font-light">
              {[
                "FSC / PEFC certified",
                "ISO 9001 : 2015",
                "200+ m² / day",
                "Delivery across EU",
              ].map((m) => (
                <div key={m} className="py-5 px-4 text-center">
                  {m}
                </div>
              ))}
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
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
            {advantages.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group relative flex gap-5 border-t border-border pt-6 transition-colors hover:border-foreground/40"
              >
                <div className="shrink-0 pt-0.5">
                  <Icon className="text-foreground/70 group-hover:text-accent transition-colors" size={24} strokeWidth={1.3} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-normal leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CLT */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Material · 101</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] font-medium">
                What is CLT
                <br />
                <span className="text-foreground/40">(Cross-Laminated Timber)?</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                CLT is a high-performance engineered wood product made from multiple layers of timber glued together perpendicularly. It serves as both a structural and finishing material in construction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {[
              { Icon: HomeIcon, title: "Residential buildings", text: "Thanks to its ease of installation, CLT is widely used in Scandinavian and European construction, particularly in sustainable and energy-efficient projects." },
              { Icon: Layers, title: "Interior finishes", text: "Used as wall and ceiling panels, room separators and other architectural elements." },
              { Icon: Blocks, title: "Modular & rapid assembly structures", text: "Scandinavian and European builders favor engineered timber for its durability and natural beauty." },
              { Icon: Armchair, title: "Furniture", text: "High load-bearing capacity makes it ideal for durable furniture like tables, shelves, and bed frames." },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`group relative py-10 lg:py-12 px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 border-b sm:border-b-0 border-border ${idx > 0 ? "lg:border-l" : ""} ${idx % 2 === 1 ? "sm:border-l lg:border-l" : ""} ${idx < 2 ? "sm:border-b lg:border-b-0" : ""}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <item.Icon className="text-foreground/70 group-hover:text-accent transition-colors" size={28} strokeWidth={1.2} />
                  <span className="h-px w-8 bg-foreground/20 group-hover:w-16 group-hover:bg-foreground/60 transition-all duration-500" />
                </div>
                <h3 className="text-base md:text-lg font-normal leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {item.text}
                </p>
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* PRODUCTION PROCESS */}
      <section className="bg-secondary/40 border-y border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">{t("home.process.eyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-normal leading-[1.1]">
              {t("home.process.title")}
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              {t("home.process.desc")}
            </p>
          </div>

          <ol className="grid gap-px bg-border grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border">
            {[1, 2, 3, 4].map((n, i) => (
              <li
                key={n}
                className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-3xl md:text-4xl text-accent font-normal">
                    {String(n).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border group-hover:bg-foreground/30 transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-2">
                  {t(`home.process.s${n}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {t(`home.process.s${n}.text`)}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link
              to="/process"
              className="inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              {t("home.process.cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">{t("home.trusted.eyebrow")}</div>
            <h2 className="text-2xl md:text-3xl font-normal text-foreground/80">
              {t("home.trusted.title")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
            {["NORDHAUS", "BALTIC BUILD", "ARKTIK", "FORMA", "LIGNUM", "SKANDI CO"].map((logo) => (
              <div
                key={logo}
                className="text-center text-sm md:text-base tracking-[0.25em] text-foreground/40 hover:text-foreground/70 transition-colors font-light"
              >
                {logo}
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
