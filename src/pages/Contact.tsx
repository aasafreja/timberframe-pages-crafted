import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import contactHero from "@/assets/project-cabin.jpg";
import { useToast } from "@/hooks/use-toast";
import { company } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

type FieldLineProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const FieldLine = ({ id, label, value, onChange, type = "text", required, placeholder }: FieldLineProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-xs font-medium text-foreground tracking-wide">
      {label}{required && <span className="text-accent ml-1">*</span>}
    </label>
    <input
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-background border border-border focus:border-foreground focus:ring-0 outline-none px-4 py-3 text-sm font-light placeholder:text-muted-foreground/60 transition-colors"
    />
  </div>
);


const Contact = () => {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: productParam ?? "",
    message: productParam ? t("contact.interested", { product: productParam }) : "",
    consent: false,
  });

  useEffect(() => {
    if (productParam) {
      setForm((f) => ({ ...f, message: t("contact.interested", { product: productParam }) }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productParam]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({
      title: t("contact.toast.title"),
      description: t("contact.toast.desc"),
    });
  };

  return (
    <>
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title="Sazinieties ar mums"
        description="Vai jums ir projekts? Pastāstiet mums par to. Nosūtiet rasējumus, izmērus vai idejas — jebkurā formātā. Mēs sagatavosim individuālu piedāvājumu 24–48 stundu laikā."
        image={contactHero}
        overlay="strong"
        cta={{ label: t("common.send"), to: "#form" }}
        secondary={{ label: "+371 2929 5353", href: "tel:+37129295353" }}
        meta={["Rīga, Latvija", "Pirmd. – Piektd. · 09 – 18", "Atbilde 24–48h"]}
      />

      <section id="form" className="py-20 md:py-32 bg-background">
        <div className="container-wide">
          <div className="grid gap-16 lg:gap-24 lg:grid-cols-12">
            {/* LEFT — info rail */}
            <aside className="lg:col-span-5 xl:col-span-4 space-y-12">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground font-light flex items-center gap-3">
                  <span className="h-px w-8 bg-foreground/30" />
                  {t("contact.info.title")}
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-6 leading-[1.05] tracking-[-0.02em] font-medium">
                  {t("contact.title")}
                </h2>
              </div>

              <ul className="space-y-8">
                {[
                  { Icon: MapPin, label: "Adrese", value: company.address },
                  { Icon: Phone, label: "Tālrunis", value: company.phones.join(" · ") },
                  { Icon: Mail, label: "E-pasts", value: company.email, href: `mailto:${company.email}` },
                  { Icon: Clock, label: "Darba laiks", value: company.hours },
                ].map(({ Icon, label, value, href }) => (
                  <li key={label} className="group border-t border-border pt-5 flex items-start gap-5">
                    <Icon size={16} strokeWidth={1.4} className="text-foreground/50 mt-1 shrink-0 group-hover:text-accent transition-colors" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-light mb-1.5">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-sm md:text-base text-foreground hover:text-accent transition-colors break-all font-light">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm md:text-base text-foreground font-light">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="aspect-[5/3] overflow-hidden border border-border">
                <iframe
                  title="Map — Timber Smart Solution, Riga"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=24.0700%2C56.9300%2C24.1400%2C56.9700&layer=mapnik&marker=56.9496%2C24.1052"
                  className="w-full h-full grayscale contrast-110"
                  loading="lazy"
                />
              </div>
            </aside>

            {/* RIGHT — form card */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative bg-secondary/50 border border-border p-8 md:p-12 lg:p-14 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                {/* corner ticks */}
                <span className="absolute top-0 left-0 w-6 h-px bg-foreground" />
                <span className="absolute top-0 left-0 w-px h-6 bg-foreground" />
                <span className="absolute bottom-0 right-0 w-6 h-px bg-foreground" />
                <span className="absolute bottom-0 right-0 w-px h-6 bg-foreground" />

                {sent ? (
                  <div className="space-y-6 animate-fade-up py-8">
                    <CheckCircle2 className="text-accent" size={36} strokeWidth={1.3} />
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-[-0.02em]">{t("contact.thanks.title")}</h2>
                    <p className="text-muted-foreground font-light max-w-md">{t("contact.thanks.text")}</p>
                    <button
                      onClick={() => setSent(false)}
                      className="inline-flex items-center gap-3 text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-foreground transition-colors mt-4"
                    >
                      {t("contact.thanks.again")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground font-light flex items-center gap-3">
                        <span className="h-px w-8 bg-foreground/40" />
                        {t("common.send")}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60 font-light">Atbilde · 24h</span>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2">
                      <FieldLine id="firstName" label={t("contact.form.firstName")} value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required />
                      <FieldLine id="lastName" label={t("contact.form.lastName")} value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} required />
                      <FieldLine id="email" type="email" label={t("contact.form.email")} value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                      <FieldLine id="company" label={t("contact.form.company")} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-light">
                        {t("contact.form.message")}<span className="text-accent ml-1">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t("contact.form.placeholder")}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-foreground/30 focus:border-foreground focus:ring-0 outline-none px-0 py-3 text-base font-light placeholder:text-muted-foreground/50 resize-none transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-6 justify-between">
                      <p className="text-xs text-muted-foreground font-light max-w-xs">
                        {t("contact.thanks.text")}
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {t("common.send")}
                        <Send size={14} strokeWidth={1.6} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
