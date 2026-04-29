import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/products/clt-panel-2.jpeg";

const Products = () => {
  const { t } = useI18n();

  const bullets = ["FSC/PEFC Certified", "Custom Solutions", "Fast Delivery"];

  return (
    <>
      {/* SPLIT HERO */}
      <section className="relative -mt-16 md:-mt-20 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
        {/* LEFT — content */}
        <div className="bg-[#0f0f0f] text-white flex items-center pt-24 md:pt-28 pb-16 lg:py-0">
          <div className="w-full max-w-xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 lg:py-20">
            <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium text-[#D4A574] mb-6">
              Timber Smart Solutions
            </div>
            <h1 className="text-white font-sans font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Premium CLT &amp; Thermowood
            </h1>
            <p className="mt-5 text-base md:text-lg text-[#999999] font-light">
              From Baltic to Europe
            </p>

            <ul className="mt-10 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] md:text-base text-white/90">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#D4A574]/40 shrink-0">
                    <Check size={12} strokeWidth={2.5} className="text-[#D4A574]" />
                  </span>
                  <span className="font-light tracking-wide">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#c8975f] text-[#0f0f0f] text-sm font-semibold tracking-wide uppercase px-7 py-4 transition-colors"
            >
              Request Quote
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="relative min-h-[55vw] lg:min-h-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Close-up of premium CLT and thermowood panel texture"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
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
