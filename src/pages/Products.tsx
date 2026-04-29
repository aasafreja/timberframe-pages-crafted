import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/products/clt-panel-2.jpeg";

const Products = () => {
  const { t } = useI18n();

  const bullets = ["FSC / PEFC certified", "Custom solutions", "Fast delivery"];

  return (
    <>
      {/* MINIMAL SPLIT HERO */}
      <section className="relative -mt-16 md:-mt-20 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[82vh] border-b border-border">
        {/* LEFT — content */}
        <div className="bg-background flex items-center pt-28 md:pt-32 pb-16 lg:py-0 order-2 lg:order-1">
          <div className="w-full max-w-xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 lg:py-24">
            <div className="eyebrow mb-8">Timber Smart Solutions</div>

            <h1 className="text-foreground leading-[1.04] text-5xl md:text-6xl lg:text-[4.25rem] font-light tracking-[-0.035em]">
              Premium CLT
              <br />
              &amp; Thermowood
            </h1>

            <p className="mt-8 text-base md:text-lg text-muted-foreground font-light max-w-md">
              From the Baltic to Europe — engineered timber for considered architecture.
            </p>

            <ul className="mt-12 space-y-3 max-w-sm">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center justify-between gap-6 border-b border-border pb-3 text-sm text-foreground/80 font-light"
                >
                  <span>{b}</span>
                  <span className="h-px w-6 bg-foreground/30" aria-hidden />
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              Request a quote
              <ArrowRight size={15} strokeWidth={1.4} />
            </Link>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="relative min-h-[60vw] lg:min-h-0 overflow-hidden order-1 lg:order-2">
          <img
            src={heroImg}
            alt="Close-up of premium CLT and thermowood panels"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/10" aria-hidden />
        </div>
      </section>

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
