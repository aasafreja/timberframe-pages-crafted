import { PageHeader } from "@/components/PageHeader";
import aboutHero from "@/assets/project-residential.jpg";
import { stats, company } from "@/data/site";
import {
  Leaf,
  Award,
  Lightbulb,
  Check,
  MapPin,
  Factory,
  Wrench,
  Users,
  Package,
  Truck,
  Mail,
  Phone,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();

  const VALUES = [
    { Icon: Leaf, title: t("about.value.1.title"), text: t("about.value.1.text") },
    { Icon: Award, title: t("about.value.2.title"), text: t("about.value.2.text") },
    { Icon: Lightbulb, title: t("about.value.3.title"), text: t("about.value.3.text") },
  ];

  const commitments = [
    t("about.commit.1"),
    t("about.commit.2"),
    t("about.commit.3"),
    t("about.commit.4"),
    t("about.commit.5"),
  ];

  const facility = [
    { Icon: MapPin, label: t("about.facility.location.label"), value: t("about.facility.location.value") },
    { Icon: Factory, label: t("about.facility.capacity.label"), value: t("about.facility.capacity.value") },
    { Icon: Wrench, label: t("about.facility.equipment.label"), value: t("about.facility.equipment.value") },
    { Icon: Users, label: t("about.facility.team.label"), value: t("about.facility.team.value") },
    { Icon: Package, label: t("about.facility.storage.label"), value: t("about.facility.storage.value") },
    { Icon: Truck, label: t("about.facility.logistics.label"), value: t("about.facility.logistics.value") },
  ];

  const certifications = [
    "FSC / PEFC Certified",
    "ISO 9001:2015",
    "CE Marked Products",
    "Baltic Timber Industry Award (2023)",
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.desc")}
        image={aboutHero}
        cta={{ label: t("nav.quote"), to: "/contact" }}
        secondary={{ label: "Our process", href: "/process" }}
        meta={["Riga, Latvia", "Since 1999", "ISO 9001 · FSC"]}
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

      {/* COMPANY STORY */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">{t("about.story.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl">{t("about.story.title")}</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed font-light">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <div className="pt-4">
              <div className="eyebrow mb-4 text-foreground">{t("about.commit.eyebrow")}</div>
              <ul className="space-y-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-foreground/80 border-b border-border pb-3">
                    <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
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

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="eyebrow mb-4">{t("about.values.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">{t("about.values.title")}</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="space-y-4">
                <Icon className="text-accent" size={28} strokeWidth={1.4} />
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-secondary/40 border-t border-border py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">{t("about.team.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl">{t("about.team.title")}</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-background border border-border p-8 md:p-10">
              <div className="font-display text-2xl md:text-3xl">Elans Tomsevics</div>
              <div className="text-sm text-muted-foreground mt-1">Technical Manager &amp; CEO</div>

              <ul className="mt-8 space-y-3 text-sm font-light">
                <li className="flex items-start gap-3 border-b border-border pb-3">
                  <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                  <span>{t("about.ceo.exp1")}</span>
                </li>
                <li className="flex items-start gap-3 border-b border-border pb-3">
                  <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                  <span>{t("about.ceo.exp2")}</span>
                </li>
                <li className="flex items-start gap-3 border-b border-border pb-3">
                  <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                  <span>{t("about.ceo.exp3")}</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <a href="mailto:elans@timbersmart.lv" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
                  <Mail size={14} strokeWidth={1.4} /> elans@timbersmart.lv
                </a>
                <a href="tel:+37129295353" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
                  <Phone size={14} strokeWidth={1.4} /> +371 2929 5353
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="eyebrow mb-4">{t("about.facility.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">{t("about.facility.title")}</h2>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {facility.map(({ Icon, label, value }) => (
              <div key={label} className="border-t border-border pt-6 flex gap-5">
                <Icon size={22} strokeWidth={1.3} className="text-foreground/70 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{label}</div>
                  <div className="text-sm font-light text-foreground">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-secondary/40 border-t border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">{t("about.cert.eyebrow")}</div>
              <h2 className="text-3xl md:text-4xl">{t("about.cert.title")}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <div key={c} className="bg-background border border-border p-8 flex flex-col gap-5">
                {i === certifications.length - 1 ? (
                  <Trophy size={26} strokeWidth={1.3} className="text-accent" />
                ) : (
                  <BadgeCheck size={26} strokeWidth={1.3} className="text-accent" />
                )}
                <div className="text-sm font-light leading-snug">{c}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">{company.address}</p>
        </div>
      </section>
    </>
  );
};

export default About;
