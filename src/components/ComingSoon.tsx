import { useI18n } from "@/i18n/I18nProvider";

export const ComingSoon = ({ label }: { label?: string }) => {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {label ?? t("common.comingSoon")}
    </div>
  );
};
