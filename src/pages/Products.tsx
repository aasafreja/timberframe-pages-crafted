import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/products/clt-panel-2.jpeg";

const Products = () => {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t("products.eyebrow")}
        title={t("products.title")}
        description={t("products.desc")}
        image={heroImg}
      />
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
