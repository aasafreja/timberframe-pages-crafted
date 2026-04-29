import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/products/clt-panel-2.jpeg";

const Products = () => {
  const { t } = useI18n();

  const meta = ["FSC / PEFC certified", "Custom solutions", "Fast delivery"];

  return (
    <>
      {/* HERO — full-bleed, cinematic */}
      <section className="relative md:min-h-[78vh] flex flex-col justify-end overflow-hidden -mt-16 md:-mt-20 pt-24 md:pt-20 border-b border-border">
        <img
          src={heroImg}
          alt="Premium CLT and thermowood panels stacked in workshop"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
          loading="eager"
        />
        {/* Cinematic gradient: dark bottom for legibility, transparent top */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
          aria-hidden
        />

        <div className="container-wide relative z-10 pt-16 pb-14 md:pb-32 text-background">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow text-background/70 mb-6">
              Catalogue · Timber Smart Solutions
            </div>

            <h1 className="text-background leading-[1.02] tracking-[-0.04em] font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Premium CLT
              <br />
              &amp; Thermowood
            </h1>

            <p className="mt-8 text-base md:text-lg text-background/80 font-light max-w-xl leading-relaxed">
              Engineered timber from the Baltic, delivered across Europe. A focused range of
              cross-laminated panels, thermowood cladding and acoustic systems — built to spec.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-background text-sm tracking-wide border-b border-background/60 pb-1.5 hover:border-background transition-colors"
              >
                Request a quote
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="#catalogue"
                className="text-background/70 text-sm tracking-wide hover:text-background transition-colors"
              >
                View catalogue
              </a>
            </div>
          </div>
        </div>

        {/* Meta strip — in-flow on mobile, absolute on desktop */}
        <div className="relative md:absolute md:bottom-0 md:inset-x-0 z-10 border-t border-background/15 bg-background/[0.04] backdrop-blur-[2px]">
          <div className="container-wide grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-background/15 text-background/85">
            {meta.map((m) => (
              <div
                key={m}
                className="py-4 sm:py-5 text-[11px] md:text-xs uppercase tracking-[0.22em] font-light text-center"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      <span id="catalogue" />

      <section className="py-16 md:py-24">
        <div className="container-wide grid gap-x-10 gap-y-16 md:grid-cols-2">
          {products.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="group block">
              <div className="aspect-[16/11] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-normal">{p.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1 font-light">{p.tagline}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-light">
                  {p.description}
                </p>
                <div className="pt-2 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {t("common.viewProduct")} <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
