import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/site";

const ProductDetail = () => {
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
          <ArrowLeft size={14} /> All products
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
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

          {/* Details */}
          <div className="lg:py-6">
            <div className="eyebrow mb-4">{product.tagline}</div>
            <h1 className="text-4xl md:text-5xl">{product.name}</h1>
            <div className="mt-6 text-2xl font-display text-accent">{product.price}</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="mt-10">
              <h2 className="text-sm uppercase tracking-[0.2em] font-sans text-muted-foreground mb-4">
                Specifications
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

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                  Request a quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none">
                <a href="mailto:timbersmartsolution@gmail.com">
                  <Mail className="mr-2" size={16} /> Email us
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              All orders are quoted individually based on volume, finish and delivery terms.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
