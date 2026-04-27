import { Link } from "react-router-dom";
import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, projects, stats } from "@/data/site";
import heroImg from "@/assets/hero-thermowood.jpg";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <img
          src={heroImg}
          alt="Thermowood facade at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/10" />
        <div className="container-wide relative z-10 pb-16 md:pb-24 text-background">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow text-background/80 mb-6">Decorative micro CLT panels</div>
            <h1 className="text-5xl md:text-7xl text-background leading-[0.98]">
              Reconnecting nature<br />with architecture.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background/85 max-w-xl leading-relaxed">
              Cross-Laminated Timber and Thermowood — engineered in the Baltics
              for long-lasting, chemical-free building.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/products">
                  Explore products <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none bg-transparent border-background/40 text-background hover:bg-background hover:text-foreground"
              >
                <Link to="/portfolio">View portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Why timber smart</div>
            <h2 className="text-3xl md:text-4xl">
              Wood that performs as beautifully as it ages.
            </h2>
          </div>
          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-3">
            {[
              {
                Icon: Leaf,
                title: "Chemical-free",
                text: "Treated with heat and steam only — safe for people, generous to the environment.",
              },
              {
                Icon: ShieldCheck,
                title: "Built to last",
                text: "Dimensional stability, decay & insect resistance, 30+ years of service life.",
              },
              {
                Icon: Sparkles,
                title: "Architect-grade",
                text: "Custom geometry, finishes and CAD-ready specs for ambitious projects.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="space-y-4">
                <Icon className="text-accent" size={28} />
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow mb-4">Our products</div>
              <h2 className="text-3xl md:text-5xl max-w-xl">
                Four ways to bring real wood into your project.
              </h2>
            </div>
            <Link to="/products" className="link-underline text-sm font-medium">
              View all products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-card border border-border hover:shadow-card transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.tagline}</p>
                  <div className="pt-2 flex items-center justify-between text-sm">
                    <span className="text-accent font-medium">{p.price}</span>
                    <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
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
            {stats.map((s) => (
              <div key={s.label} className="space-y-2 md:border-l md:border-border md:pl-6 first:border-l-0 first:pl-0">
                <div className="font-display text-5xl md:text-6xl text-accent">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="eyebrow text-primary-foreground/60 mb-4">Selected work</div>
              <h2 className="text-4xl md:text-5xl text-primary-foreground">
                Buildings that breathe wood.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-primary-foreground/70 leading-relaxed">
                Architects across Europe choose us for façades, interiors and
                bespoke timber elements. Here's a glimpse of what's possible.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((proj) => (
              <Link
                key={proj.id}
                to={`/portfolio/${proj.id}`}
                className="group block"
              >
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
                    <h3 className="text-primary-foreground text-xl">{proj.title}</h3>
                    <p className="text-sm text-primary-foreground/60">{proj.location}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{proj.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="bg-gradient-warm border border-border p-10 md:p-16 grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl md:text-5xl leading-[1.05]">
                Have a project on the table?
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Send us your drawings or a brief description — we'll come back
                with material recommendations, lead times and a quote.
              </p>
              <ul className="space-y-2 pt-2">
                {["No-pressure consultation", "Reply within 1 business day", "EU-wide delivery"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Button asChild size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Request a quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
