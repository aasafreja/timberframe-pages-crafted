import { PageHeader } from "@/components/PageHeader";
import aboutHero from "@/assets/project-residential.jpg";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();

  const facts = [
    "Vairāk nekā 30 gadu pieredze kokapstrādē",
    "2 piegādes termiņi: ātrais (2 nedēļas) un standarta (2 mēneši)",
    "5 nedēļas — vidējais laiks no kontakta līdz pasūtījumam",
    "5 produktu grupas: LVL, CLT Mini, akustiskās paneļi, ēvelēts koks, dupleks",
    "Nav minimālā pasūtījuma apjoma",
    "100% individuāla ražošana pēc klienta specifikācijām",
    "Eksports uz ES tirgiem",
  ];

  return (
    <>
      <PageHeader
        eyebrow="Par mums"
        title="Par Timber Smart Solution"
        description="Latvijā bāzēts koka materiālu ražotājs ar vairāk nekā 30 gadu pieredzi kokapstrādē."
        image={aboutHero}
        overlay="strong"
        cta={{ label: t("nav.quote"), to: "/contact" }}
        meta={["Rīga, Latvija", "30+ gadu pieredze", "Eksports uz ES"]}
      />

      {/* COMPANY STORY */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Par uzņēmumu</div>
            <h2 className="text-3xl md:text-4xl">Par Timber Smart Solution</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed font-light">
            <p>
              Timber Smart Solution ir Latvijā bāzēts koka materiālu ražotājs. Mūsu komandai ir vairāk nekā 30 gadu pieredze kokapstrādē. Mēs specializējamies individuālos pasūtījumos arhitektiem un būvniecības kompānijām — ražojam LVL sijas, CLT Mini paneļus, akustiskās paneļus un dekoratīvos koka materiālus.
            </p>
            <p>
              Mūsu stiprā puse ir elastība: katrs pasūtījums tiek ražots pēc klienta specifikācijām, bez minimālā pasūtījuma apjoma. Vidējais laiks no pirmā kontakta līdz pasūtījumam ir 5 nedēļas.
            </p>
            <p>
              Montāžas jautājumos sadarbojamies ar uzticamiem partneriem, kas nodrošina profesionālu uzstādīšanu.
            </p>
          </div>
        </div>
      </section>

      {/* FACTS / NUMBERS */}
      <section className="bg-secondary/40 border-y border-border py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Skaitļi</div>
            <h2 className="text-3xl md:text-4xl">Mūsu darbs skaitļos</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-0">
              {facts.map((f) => (
                <li key={f} className="flex items-start gap-4 border-b border-border py-4 text-sm md:text-base text-foreground/80 font-light">
                  <Check size={18} strokeWidth={1.4} className="text-accent mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
