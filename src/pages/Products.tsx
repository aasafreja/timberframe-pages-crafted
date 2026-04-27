import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/site";

const Products = () => (
  <>
    <PageHeader
      eyebrow="Catalogue"
      title="Our products"
      description="A focused range of CLT, thermowood and acoustic panels — engineered in the Baltics, ready for ambitious architecture."
    />
    <section className="py-16 md:py-24">
      <div className="container-wide grid gap-10 md:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="group block bg-card border border-border hover:shadow-card transition-all"
          >
            <div className="aspect-[16/11] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl">{p.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                </div>
                <span className="text-accent font-medium whitespace-nowrap">{p.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {p.description}
              </p>
              <div className="pt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                View product <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Products;
