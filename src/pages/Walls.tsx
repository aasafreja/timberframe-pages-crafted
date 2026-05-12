import { Link } from "react-router-dom";
import { ArrowRight, Check, Layers, Ruler, Hammer, Paintbrush, Snowflake, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import heroImg from "@/assets/project-residential.jpg";
import g1 from "@/assets/project-residential.jpg";
import g2 from "@/assets/project-cabin.jpg";
import g3 from "@/assets/project-commercial.jpg";
import g4 from "@/assets/project-interior.jpg";
import g5 from "@/assets/project-office.jpg";
import g6 from "@/assets/project-sauna.jpg";

const FINISHES = [
  {
    icon: Paintbrush,
    title: "Apdare pēc izvēles",
    text: "Nokrāsošana, termokoka apšuvums, CLT dabīgā virsma vai jebkura cita apdare pēc pieprasījuma.",
  },
  {
    icon: Snowflake,
    title: "Siltināšana",
    text: "Konstrukcija ir pilnībā piemērota siltināšanai, tvaika izolācijai un jebkurai papildu apstrādei.",
  },
  {
    icon: Layers,
    title: "Ārējās un iekšējās sienas",
    text: "Risinājums piemērots gan fasādēm, gan iekštelpu sienām.",
  },
];

const STEPS = [
  { n: "01", title: "Jūs iesniedzat rasējumus", text: "Nosūtiet projektu — izmērus, specifikācijas un vēlamo apdari." },
  { n: "02", title: "Mēs ražojam pēc specifikācijām", text: "Sienas tiek precīzi izgatavotas mūsu ražotnē Latvijā." },
  { n: "03", title: "Piegāde gatava montāžai", text: "Bez papildu apstrādes uz vietas — mazāk koordinācijas, ātrāka montāža." },
];

const SPECS = [
  { label: "Konstrukcija", value: "LVL sijas + CLT paneļi" },
  { label: "Savienojums", value: "plastifikators (blīvums un elastība)" },
  { label: "Ražošana", value: "pēc individuāliem rasējumiem" },
  { label: "Piegāde", value: "gatava montāžai objektā" },
  { label: "Apdare", value: "pēc pieprasījuma (krāsošana, termokoks u.c.)" },
  { label: "Siltināšana", value: "iespējama, pēc klienta izvēles" },
];

const GALLERY = [g1, g2, g3, g4, g5, g6];

const Walls = () => {
  return (
    <>
      <PageHeader
        eyebrow="Gatavās koka sienas"
        title={"Montāžai gatavas\nkoka sienas"}
        description="Timber Smart Solution ražo gatavas koka sienas no LVL sijām un CLT paneļiem — saražotas pēc jūsu rasējumiem un piegādātas objektā gatavas montāžai."
        image={heroImg}
        overlay="strong"
        cta={{ label: "Nosūtīt rasējumus", to: "/contact" }}
        secondary={{ label: "Skatīt produktus", href: "/products" }}
        meta={["LVL + CLT", "Pēc rasējumiem", "Gatava montāžai"]}
      />

      {/* Intro / What is */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Konstrukcija</div>
            <h2 className="text-3xl md:text-4xl leading-tight">Kas ir gatavā koka siena?</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sienas sastāv no <span className="text-foreground">LVL nesošās konstrukcijas</span> un{" "}
              <span className="text-foreground">CLT paneļiem</span>, kas savienoti ar plastifikatoru — materiālu, kas
              nodrošina blīvumu un elastību savienojuma vietās.
            </p>
            <p>Rezultāts ir precīza, stabila konstrukcija bez nevajadzīgas ķīmijas.</p>
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="bg-secondary/40 border-y border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Apdare un siltināšana</div>
            <h2 className="text-3xl md:text-4xl">Pēc jūsu izvēles</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Gatavā siena ir pamatkonstrukcija. Viss pārējais ir jūsu projekta izvēle.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {FINISHES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-8 md:p-10">
                <Icon size={28} strokeWidth={1.4} className="text-accent mb-6" />
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Kā tas strādā</div>
            <h2 className="text-3xl md:text-4xl">No rasējuma līdz montāžai</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <div className="font-display text-3xl text-accent mb-4">{s.n}</div>
                <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary/40 border-y border-border py-20 md:py-28">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-xl">
              <div className="eyebrow mb-4">Galerija</div>
              <h2 className="text-3xl md:text-4xl">Realizēti projekti</h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1.5 hover:border-foreground transition-colors"
            >
              Sākt jūsu projektu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-2 md:gap-3 grid-cols-2 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-muted ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={src}
                  alt={`Gatavā koka siena — projekts ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Specifikācijas</div>
            <h2 className="text-3xl md:text-4xl">Tehniskie dati</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Katra siena tiek izgatavota individuāli — pēc jūsu rasējumiem un projekta prasībām.
            </p>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {SPECS.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">{label}</dt>
                  <dd className="md:col-span-2 text-base text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-background border-y border-border overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(circle_at_15%_25%,hsl(var(--accent)/0.12)_0%,transparent_55%),radial-gradient(circle_at_85%_75%,hsl(var(--accent)/0.08)_0%,transparent_50%)]"
        />

        <div className="container-wide relative py-24 md:py-36">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-accent" />
                <span className="eyebrow text-accent">Sāciet projektu</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] font-light text-foreground">
                Nosūtiet rasējumus —<br />
                <span className="text-accent">sagatavosim piedāvājumu.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
                Individuāls risinājums jūsu projektam. Atbildam ātri, ražojam precīzi.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm tracking-wide hover:bg-accent/90 transition-colors"
                >
                  <FileText size={16} strokeWidth={1.8} />
                  Nosūtīt rasējumus
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="text-sm tracking-wide text-foreground border-b border-foreground/40 pb-1.5 hover:border-foreground transition-colors"
                >
                  Sazināties tieši
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-border bg-background/80 backdrop-blur-sm p-8 md:p-10 shadow-sm">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  Ko jūs saņemat
                </div>
                <ul className="space-y-5">
                  {["Atbilde 24–48 stundu laikā", "Bez maksas konsultācija", "Piegāde visā ES"].map((b) => (
                    <li key={b} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent shrink-0">
                        <Check size={14} strokeWidth={2.2} />
                      </span>
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Walls;
