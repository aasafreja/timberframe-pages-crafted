import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const ProductDetail = () => {
  const { t } = useI18n();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [active, setActive] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <article className="py-12 md:py-16">
      <div className="container-wide">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"
        >
          <ArrowLeft size={14} /> {t("common.back.products")}
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={product.gallery[active]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border transition-all ${
                    active === i ? "border-accent" : "border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-6">
            <div className="eyebrow mb-4">{product.tagline}</div>
            <h1 className="text-4xl md:text-5xl">{product.name}</h1>
            <div className="mt-6 text-2xl font-display text-accent">{product.price}</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-10">
              <h2 className="text-sm uppercase tracking-[0.2em] font-sans text-muted-foreground mb-4">
                {t("common.specifications")}
              </h2>
              <dl className="border-t border-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-2 py-3 border-b border-border text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-foreground">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <Button asChild size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground h-14 justify-center text-sm tracking-wide">
                <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                  {t("nav.quote")} <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 justify-center text-sm tracking-wide border-foreground/20 hover:bg-secondary">
                <a href="mailto:timbersmartsolution@gmail.com">
                  <Mail className="mr-2" size={16} /> {t("common.emailUs")}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {t("product.quotedNote")}
            </p>
          </div>
        </div>

        {/* CAPABILITIES + PROCESS (custom solutions) */}
        {(product.capabilities || product.process) && (
          <div className="mt-24 grid gap-16 lg:grid-cols-2 border-t border-border pt-16">
            {product.capabilities && (
              <div>
                <div className="eyebrow mb-4">{t("product.capabilities")}</div>
                <h2 className="text-2xl md:text-3xl font-normal mb-8">{t("product.capabilities.title")}</h2>
                <ul className="space-y-3">
                  {product.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm border-b border-border pb-3 font-light">
                      <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.process && (
              <div>
                <div className="eyebrow mb-4">{t("product.process")}</div>
                <h2 className="text-2xl md:text-3xl font-normal mb-8">{t("product.process.title")}</h2>
                <ol className="space-y-5">
                  {product.process.map((step, i) => (
                    <li key={step} className="flex gap-5 border-b border-border pb-5">
                      <span className="font-display text-2xl text-accent leading-none w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-light leading-relaxed pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
                {product.moq && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="eyebrow mb-2">{t("product.moq")}</div>
                    <p className="text-base font-normal">{product.moq}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* GALLERY */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="eyebrow mb-3">{t("product.gallery.eyebrow")}</div>
              <h2 className="text-2xl md:text-3xl font-normal">{t("product.gallery.title")}</h2>
            </div>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`overflow-hidden bg-muted ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={product.gallery[i % product.gallery.length]}
                  alt={`${product.name} – ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
