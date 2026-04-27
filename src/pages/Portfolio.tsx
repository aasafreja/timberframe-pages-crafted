import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/data/site";

const FILTERS = ["All", "Residential", "Commercial", "Interior"] as const;

const Portfolio = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected projects"
        description="A small selection of buildings and interiors built with our timber. Filter by category to explore."
      />

      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm transition-colors ${
                  filter === f
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground/70 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link
                key={p.id}
                to={`/portfolio/${p.id}`}
                className="group block animate-fade-up"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.location} · {p.year}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-2">
                      {p.products.join(" · ")}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent whitespace-nowrap">
                    {p.category}
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-accent transition-colors">
                  View details <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
