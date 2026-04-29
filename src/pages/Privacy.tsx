import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { company } from "@/data/site";

const Privacy = () => {
  const { t } = useI18n();

  const sections = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    title: t(`privacy.s${n}.title`),
    text: t(`privacy.s${n}.text`),
  }));

  return (
    <>
      <PageHeader
        eyebrow={t("privacy.eyebrow")}
        title={t("privacy.title")}
        description={t("privacy.desc")}
      />
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow mb-12">{t("privacy.updated")}</p>
          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-normal">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {s.text}
                </p>
                {i === sections.length - 1 && (
                  <div className="pt-2 space-y-1 text-sm font-light">
                    <a
                      href={`mailto:${company.email}`}
                      className="block link-underline"
                    >
                      {company.email}
                    </a>
                    <div className="text-muted-foreground">{company.address}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
