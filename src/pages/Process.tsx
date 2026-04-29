import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/project-interior.jpg";

const Process = () => {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const STEPS = [
    { n: "01", title: t("process.s1.title"), text: t("process.s1.text"), duration: t("process.s1.dur") },
    { n: "02", title: t("process.s2.title"), text: t("process.s2.text"), duration: t("process.s2.dur") },
    { n: "03", title: t("process.s3.title"), text: t("process.s3.text"), duration: t("process.s3.dur") },
    { n: "04", title: t("process.s4.title"), text: t("process.s4.text"), duration: t("process.s4.dur") },
  ];

  const FAQ = [
    { q: t("process.faq.q1"), a: t("process.faq.a1") },
    { q: t("process.faq.q2"), a: t("process.faq.a2") },
    { q: t("process.faq.q3"), a: t("process.faq.a3") },
    { q: t("process.faq.q4"), a: t("process.faq.a4") },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        description={t("process.desc")}
        image={heroImg}
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
              <div className="eyebrow mb-3">{t("process.step")} {STEPS[active].n}</div>
              <h2 className="text-3xl md:text-4xl mb-6">{STEPS[active].title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{STEPS[active].text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-wide">
          <div className="eyebrow mb-4">{t("process.timeline.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-10">{t("process.timeline.title")}</h2>
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

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">{t("process.faq.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl">{t("process.faq.title")}</h2>
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
