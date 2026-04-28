import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import { stats, company } from "@/data/site";
import { Leaf, Award, Lightbulb } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();

  const VALUES = [
    { Icon: Leaf, title: t("about.value.1.title"), text: t("about.value.1.text") },
    { Icon: Award, title: t("about.value.2.title"), text: t("about.value.2.text") },
    { Icon: Lightbulb, title: t("about.value.3.title"), text: t("about.value.3.text") },
  ];

  const team = [
    { name: "Elans Tomsevics", role: "Technical Manager & CEO" },
    { name: "—", role: t("about.team.role.production") },
    { name: "—", role: t("about.team.role.architect") },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.desc")}
      />

      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <div key={i} className="md:border-l md:border-border md:pl-6 first:border-l-0 first:pl-0">
              <div className="font-display text-5xl text-accent">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{t(`stats.${i}`)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">{t("about.story.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl">{t("about.story.title")}</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p className="text-sm pt-4">{company.ceo}</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-wide grid gap-10 md:grid-cols-2">
          <div className="bg-background p-10 border border-border">
            <div className="eyebrow mb-4">{t("about.mission.label")}</div>
            <p className="font-display text-2xl leading-snug">{t("about.mission.text")}</p>
          </div>
          <div className="bg-background p-10 border border-border">
            <div className="eyebrow mb-4">{t("about.vision.label")}</div>
            <p className="font-display text-2xl leading-snug">{t("about.vision.text")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="eyebrow mb-4">{t("about.values.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">{t("about.values.title")}</h2>
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

      <section className="bg-secondary/40 border-t border-border py-20">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="eyebrow mb-4">{t("about.team.eyebrow")}</div>
              <h2 className="text-3xl md:text-4xl max-w-xl">{t("about.team.title")}</h2>
            </div>
            <ComingSoon label={t("about.team.soon")} />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((m, i) => (
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
};

export default About;
