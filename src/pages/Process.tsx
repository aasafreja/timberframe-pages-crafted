import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader } from "@/components/PageHeader";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    text: "Share your drawings, schedule or just an idea. We review feasibility, suggest products and outline lead times — usually within one business day.",
    duration: "1 – 3 days",
  },
  {
    n: "02",
    title: "Design & specification",
    text: "Our technical team prepares CAD-ready specs, finish samples and a detailed quote. We collaborate directly with your architect or contractor.",
    duration: "1 – 2 weeks",
  },
  {
    n: "03",
    title: "Production",
    text: "Manufacturing in our Baltic facilities — heat treatment, lamination, CNC and finishing. Quality controlled at every stage.",
    duration: "3 – 6 weeks",
  },
  {
    n: "04",
    title: "Delivery & install",
    text: "Carefully packed, transported across the EU (worldwide on request) and supported with installation guides. On-site assistance available.",
    duration: "1 – 2 weeks",
  },
];

const FAQ = [
  {
    q: "Do you ship outside the EU?",
    a: "Yes — we regularly deliver across the EU and UK, and quote worldwide shipments on request.",
  },
  {
    q: "Can you work directly with my architect?",
    a: "Absolutely. We exchange DWG / IFC / Revit files and join project calls when needed.",
  },
  {
    q: "What's the minimum order?",
    a: "There's no strict minimum — we ship from a single sample panel up to full façade systems.",
  },
  {
    q: "Are samples available?",
    a: "Yes, we send free A5-format samples of our standard finishes. Custom samples on request.",
  },
];

const Process = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From first sketch to installed timber."
        description="A transparent, four-step process designed around how architects and developers actually work."
      />

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <ol className="lg:col-span-5 space-y-2">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-6 border transition-all ${
                    active === i
                      ? "border-accent bg-card shadow-soft"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-display text-2xl ${active === i ? "text-accent" : "text-muted-foreground"}`}>
                      {s.n}
                    </span>
                    <div className="flex-1">
                      <div className="text-lg font-medium">{s.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.duration}</div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-7 lg:sticky lg:top-32 lg:self-start">
            <div className="bg-secondary/50 border border-border p-10 md:p-14 min-h-[320px]">
              <div className="eyebrow mb-3">Step {STEPS[active].n}</div>
              <h2 className="text-3xl md:text-4xl mb-6">{STEPS[active].title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{STEPS[active].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-wide">
          <div className="eyebrow mb-4">Typical timeline</div>
          <h2 className="text-3xl md:text-4xl mb-10">Most projects ship in 6 – 10 weeks.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-background p-6">
                <div className="font-display text-3xl text-accent mb-2">{s.n}</div>
                <div className="text-sm font-medium">{s.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl">Process questions, answered.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg hover:text-accent">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
