import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";

const CLT_SPECS = [
  ["Layers", "3 / 5 / 7 layers, cross-laminated"],
  ["Thickness", "20 – 100 mm"],
  ["Width", "up to 1250 mm"],
  ["Length", "up to 5000 mm"],
  ["Wood species", "Nordic spruce / pine"],
  ["Adhesive", "PUR, formaldehyde-free"],
  ["Density", "470 kg/m³ (avg)"],
  ["Fire class", "D-s2, d0"],
];

const THERMO_SPECS = [
  ["Treatment", "160 – 230 °C, oxygen-free"],
  ["Thickness", "20 / 26 / 32 mm"],
  ["Class", "Thermo-D (exterior)"],
  ["Moisture content", "4 – 7 %"],
  ["Thermal conductivity", "−25 % vs untreated"],
  ["Service life", "30+ years"],
  ["Chemicals", "none"],
  ["Profiles", "vertical / horizontal cladding"],
];

const COMPARE = [
  ["Property", "CLT", "Thermowood", "Untreated pine"],
  ["Dimensional stability", "High", "Very high", "Low"],
  ["Moisture resistance", "Medium", "Very high", "Low"],
  ["Service life (exterior)", "30 yrs+", "30 yrs+", "10 yrs"],
  ["Chemical treatment", "None", "None", "Often required"],
  ["Acoustic performance", "Good", "Good", "Average"],
];

const CERTS = ["PEFC", "FSC", "CE marking", "EN 16351 (CLT)", "ThermoWood®"];

const Specs = () => (
  <>
    <PageHeader
      eyebrow="Technical specs"
      title="Numbers, drawings & datasheets."
      description="Engineering documentation for our CLT and thermowood products. Reach out if you need anything specific to your project."
    />

    {/* CLT */}
    <section className="py-16 md:py-20">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="eyebrow mb-3">Specifications</div>
          <h2 className="text-3xl md:text-4xl">CLT panels</h2>
          <p className="mt-4 text-muted-foreground">
            Cross-laminated timber for structural and decorative use.
          </p>
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

    {/* Thermo */}
    <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="eyebrow mb-3">Specifications</div>
          <h2 className="text-3xl md:text-4xl">Thermowood</h2>
          <p className="mt-4 text-muted-foreground">
            Heat-treated timber for exterior cladding and interior finishes.
          </p>
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

    {/* Comparison */}
    <section className="py-20 md:py-24">
      <div className="container-wide">
        <div className="eyebrow mb-3">Comparison</div>
        <h2 className="text-3xl md:text-4xl mb-10">Material comparison.</h2>
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

    {/* Certifications */}
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-wide">
        <div className="eyebrow mb-3">Certifications</div>
        <h2 className="text-3xl md:text-4xl mb-10">Certified to international standards.</h2>
        <div className="flex flex-wrap gap-3">
          {CERTS.map((c) => (
            <div key={c} className="px-5 py-3 bg-background border border-border text-sm font-medium">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Downloads */}
    <section className="py-20 md:py-24">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="eyebrow mb-3">Downloads</div>
            <h2 className="text-3xl md:text-4xl">PDF documents.</h2>
          </div>
          <ComingSoon label="Datasheets coming soon" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {["CLT Panels — Pricing & Specs", "Thermowood — Technical Datasheet", "Acoustic Panels — Installation Guide", "Sustainability Report 2024"].map((d) => (
            <div key={d} className="flex items-center justify-between gap-4 p-5 border border-border bg-card">
              <div className="flex items-center gap-4">
                <FileText className="text-accent" size={20} />
                <div>
                  <div className="text-sm font-medium">{d}</div>
                  <div className="text-xs text-muted-foreground">PDF · coming soon</div>
                </div>
              </div>
              <Button variant="outline" size="sm" disabled className="rounded-none">
                <Download size={14} className="mr-2" /> Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Specs;
