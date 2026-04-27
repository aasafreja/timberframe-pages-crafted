import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import { stats, company } from "@/data/site";
import { Leaf, Award, Lightbulb } from "lucide-react";

const VALUES = [
  { Icon: Leaf, title: "Sustainable", text: "Heat-only treatment, FSC/PEFC sources, low-carbon production." },
  { Icon: Award, title: "Quality", text: "Tight tolerances, Nordic raw material, hand-finished surfaces." },
  { Icon: Lightbulb, title: "Innovation", text: "Continuous R&D in CLT geometry, finishing and acoustic systems." },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About"
      title="Crafted in the Baltics, for architects who care."
      description="We've spent over two decades turning Nordic timber into the kind of material people are proud to build with."
    />

    {/* Stats */}
    <section className="py-16 md:py-20 border-b border-border">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.label} className="md:border-l md:border-border md:pl-6 first:border-l-0 first:pl-0">
            <div className="font-display text-5xl text-accent">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Story */}
    <section className="py-20 md:py-28">
      <div className="container-wide grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Our story</div>
          <h2 className="text-3xl md:text-4xl">Two decades of Baltic timber.</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Founded in Riga, Timber Smart Solution started as a small workshop
            obsessed with one question: how do you make wood last longer
            without compromising it with chemicals?
          </p>
          <p>
            Twenty-five years later, we're still asking it. We work with CLT,
            thermo-treated softwoods and acoustic systems — supplying
            architects and developers across Northern Europe.
          </p>
          <p className="text-sm pt-4">{company.ceo}</p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-secondary/40 border-y border-border py-20">
      <div className="container-wide grid gap-10 md:grid-cols-2">
        <div className="bg-background p-10 border border-border">
          <div className="eyebrow mb-4">Mission</div>
          <p className="font-display text-2xl leading-snug">
            To make chemical-free, long-lasting timber the obvious choice for
            modern construction.
          </p>
        </div>
        <div className="bg-background p-10 border border-border">
          <div className="eyebrow mb-4">Vision</div>
          <p className="font-display text-2xl leading-snug">
            A built environment that ages beautifully and gives back to the
            forest it came from.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="eyebrow mb-4">Values</div>
        <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">What we hold ourselves to.</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {VALUES.map(({ Icon, title, text }) => (
            <div key={title} className="space-y-4">
              <Icon className="text-accent" size={28} />
              <h3 className="text-xl">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="bg-secondary/40 border-t border-border py-20">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="eyebrow mb-4">Team</div>
            <h2 className="text-3xl md:text-4xl max-w-xl">People behind the panels.</h2>
          </div>
          <ComingSoon label="Photos coming soon" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Elans Tomsevics", role: "Technical Manager & CEO" },
            { name: "—", role: "Production Lead" },
            { name: "—", role: "Architect Relations" },
          ].map((m, i) => (
            <div key={i} className="bg-background border border-border aspect-[4/5] p-6 flex flex-col justify-end">
              <div className="text-lg font-display">{m.name}</div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
