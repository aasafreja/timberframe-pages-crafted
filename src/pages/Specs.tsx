import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import specsHero from "@/assets/products/thermowood.jpeg";
import { ComingSoon } from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";

const CLT_SPECS: [string, string][] = [
  ["Slāņi", "3 / 5 / 7 slāņi, krustām līmēti"],
  ["Biezums", "20 – 100 mm"],
  ["Platums", "līdz 1250 mm"],
  ["Garums", "līdz 5000 mm"],
  ["Koka suga", "Ziemeļu egle / priede"],
  ["Līme", "PUR, bez formaldehīda"],
  ["Blīvums", "470 kg/m³ (vid.)"],
  ["Ugunsdrošības klase", "D-s2, d0"],
];

const THERMO_SPECS: [string, string][] = [
  ["Apstrāde", "160 – 230 °C, bez skābekļa"],
  ["Biezums", "20 / 26 / 32 mm"],
  ["Klase", "Thermo-D (āra)"],
  ["Mitruma saturs", "4 – 7 %"],
  ["Siltumvadītspēja", "−25 % pret neapstrādātu"],
  ["Kalpošanas laiks", "30+ gadi"],
  ["Ķīmija", "nav"],
  ["Profili", "vertikāls / horizontāls apšuvums"],
];

const COMPARE = [
  ["Īpašība", "CLT", "Termokoks", "Neapstrādāta priede"],
  ["Izmēru stabilitāte", "Augsta", "Ļoti augsta", "Zema"],
  ["Mitruma izturība", "Vidēja", "Ļoti augsta", "Zema"],
  ["Kalpošanas laiks (āra)", "30+ gadi", "30+ gadi", "10 gadi"],
  ["Ķīmiskā apstrāde", "Nav", "Nav", "Bieži nepieciešama"],
  ["Akustiskā veiktspēja", "Laba", "Laba", "Vidēja"],
];

const CERTS = ["PEFC", "FSC", "CE marķējums", "EN 16351 (CLT)", "ThermoWood®"];

const Specs = () => {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t("specs.eyebrow")}
        title={t("specs.title")}
        description={t("specs.desc")}
        image={specsHero}
        cta={{ label: t("nav.quote"), to: "/contact" }}
        secondary={{ label: "Lejupielādēt datu lapu", href: "#datasheets" }}
        meta={["CLT paneļi", "Termokoks", "Akustiskās sistēmas"]}
      />

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">{t("common.specifications")}</div>
            <h2 className="text-3xl md:text-4xl">{t("specs.clt.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("specs.clt.desc")}</p>
          </div>
          <div className="lg:col-span-8">
            <dl className="border-t border-border">
              {CLT_SPECS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 py-3 border-b border-border text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">{t("common.specifications")}</div>
            <h2 className="text-3xl md:text-4xl">{t("specs.thermo.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("specs.thermo.desc")}</p>
          </div>
          <div className="lg:col-span-8">
            <dl className="border-t border-border">
              {THERMO_SPECS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 py-3 border-b border-border text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide">
          <div className="eyebrow mb-3">{t("specs.compare.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-10">{t("specs.compare.title")}</h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  {COMPARE[0].map((c) => (
                    <th key={c} className="text-left p-4 font-medium font-sans">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.slice(1).map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    {row.map((c, j) => (
                      <td key={j} className={`p-4 ${j === 0 ? "text-muted-foreground" : ""}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="container-wide">
          <div className="eyebrow mb-3">{t("specs.cert.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl mb-10">{t("specs.cert.title")}</h2>
          <div className="flex flex-wrap gap-3">
            {CERTS.map((c) => (
              <div key={c} className="px-5 py-3 bg-background border border-border text-sm font-medium">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="eyebrow mb-3">{t("specs.dl.eyebrow")}</div>
              <h2 className="text-3xl md:text-4xl">{t("specs.dl.title")}</h2>
            </div>
            <ComingSoon label={t("specs.dl.soon")} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["CLT Panels — Pricing & Specs", "Thermowood — Technical Datasheet", "Acoustic Panels — Installation Guide", "Sustainability Report 2024"].map((d) => (
              <div key={d} className="flex items-center justify-between gap-4 p-5 border border-border bg-card">
                <div className="flex items-center gap-4">
                  <FileText className="text-accent" size={20} />
                  <div>
                    <div className="text-sm font-medium">{d}</div>
                    <div className="text-xs text-muted-foreground">PDF · {t("common.comingSoon").toLowerCase()}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" disabled className="rounded-none">
                  <Download size={14} className="mr-2" /> {t("specs.dl.btn")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specs;
