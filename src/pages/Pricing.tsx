import { Link } from "react-router-dom";
import { ArrowRight, Check, Zap, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import pricingHero from "@/assets/products/thermowood.jpeg";
import { useI18n } from "@/i18n/I18nProvider";

const Pricing = () => {
  const { t } = useI18n();

  const indicative = [
    { name: "Akustiskais panelis", price: "no 55 EUR" },
    { name: "CLT panelis ar termokoku", price: "no 37 EUR" },
    { name: "LVL sijas un pārējie produkti", price: "pēc pieprasījuma" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Cenu veidošanas princips"
        title="Cenas — pēc individuālā aprēķina"
        description="Tā kā visi mūsu produkti tiek ražoti pēc individuāliem pasūtījumiem, galīgā cena ir atkarīga no izmēriem, materiāla, apdares un apjoma."
        image={pricingHero}
        cta={{ label: t("nav.quote"), to: "/contact" }}
        meta={["Individuāls aprēķins", "Bez minimālā apjoma", "50% avanss"]}
      />

      {/* INDICATIVE PRICES */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Indikatīvās cenas</div>
            <h2 className="text-3xl md:text-4xl">No kā sākt orientēties</h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              Zemāk norādītās cenas ir indikatīvas un kalpo kā sākuma punkts. Precīzu piedāvājumu sagatavojam pēc jūsu specifikācijām.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {indicative.map((row) => (
                <li
                  key={row.name}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-6"
                >
                  <span className="text-base md:text-lg font-light">{row.name}</span>
                  <span className="font-display text-xl md:text-2xl text-accent whitespace-nowrap">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVERY IMPACT */}
      <section className="bg-secondary/40 border-y border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Piegādes termiņš</div>
            <h2 className="text-3xl md:text-4xl font-normal leading-[1.1]">
              Kā piegādes termiņš ietekmē cenu
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border border-border p-8 md:p-10 space-y-5">
              <Zap size={28} strokeWidth={1.3} className="text-accent" />
              <h3 className="font-display text-2xl">Ātrais termiņš</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                2 nedēļas pēc 50% avansa saņemšanas. Aptuveni par 15% dārgāk nekā standarta termiņš.
              </p>
              <div className="pt-2 text-xs uppercase tracking-[0.18em] text-foreground/60">
                +15% no pamata cenas
              </div>
            </div>
            <div className="bg-background border border-border p-8 md:p-10 space-y-5">
              <Clock size={28} strokeWidth={1.3} className="text-accent" />
              <h3 className="font-display text-2xl">Standarta termiņš</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                2 mēneši pēc 50% avansa saņemšanas. Tiek piemērota pamata cena.
              </p>
              <div className="pt-2 text-xs uppercase tracking-[0.18em] text-foreground/60">
                Pamata cena
              </div>
            </div>
          </div>

          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {[
              "Galīgā cena ir atkarīga no izmēriem un apjoma",
              "Ņemta vērā materiāla suga un apdares veids",
              "Bez minimālā pasūtījuma apjoma",
              "Eksports uz ES tirgiem",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                <Check size={16} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="border-t border-border pt-16 md:pt-20 grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-5xl leading-[1.05] font-normal max-w-xl">
                Sazinieties ar mums individuālam piedāvājumam
              </h2>
              <p className="text-muted-foreground max-w-lg font-light">
                Atsūtiet projekta specifikācijas — sagatavosim precīzu cenas aprēķinu jūsu pasūtījumam.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
              >
                {t("nav.quote")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
