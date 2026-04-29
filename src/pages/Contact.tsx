import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import contactHero from "@/assets/project-cabin.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { company } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

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
    company: "",
    message: productParam ? t("contact.interested", { product: productParam }) : "",
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
        title={t("contact.title")}
        description={t("contact.desc")}
        image={contactHero}
        cta={{ label: t("common.send"), to: "#form" }}
        secondary={{ label: "+371 2929 5353", href: "tel:+37129295353" }}
        meta={["Riga, Latvia", "Mon – Fri · 09 – 18", "EN · LV · DE"]}
      />

      <section className="py-16 md:py-24">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="border border-accent bg-accent/5 p-10 text-center space-y-4 animate-fade-up">
                <CheckCircle2 className="mx-auto text-accent" size={40} />
                <h2 className="text-2xl">{t("contact.thanks.title")}</h2>
                <p className="text-muted-foreground">{t("contact.thanks.text")}</p>
                <Button variant="outline" className="rounded-none" onClick={() => setSent(false)}>
                  {t("contact.thanks.again")}
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("contact.form.firstName")}</Label>
                    <Input
                      id="firstName"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
                    <Input
                      id="lastName"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="rounded-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t("contact.form.company")}</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder={t("contact.form.placeholder")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-none"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send size={16} className="mr-2" /> {t("common.send")}
                </Button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-secondary/50 border border-border p-8 space-y-5">
              <h3 className="text-xl">{t("contact.info.title")}</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="shrink-0 text-accent mt-0.5" />
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="shrink-0 text-accent mt-0.5" />
                  <span>{company.phones.join(" · ")}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="shrink-0 text-accent mt-0.5" />
                  <a href={`mailto:${company.email}`} className="hover:text-accent">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="shrink-0 text-accent mt-0.5" />
                  <span>{company.hours}</span>
                </li>
              </ul>
            </div>

            <div className="aspect-[4/3] border border-border overflow-hidden">
              <iframe
                title="Map — Timber Smart Solution, Riga"
                src="https://www.openstreetmap.org/export/embed.html?bbox=24.0700%2C56.9300%2C24.1400%2C56.9700&layer=mapnik&marker=56.9496%2C24.1052"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
