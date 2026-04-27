export const ComingSoon = ({ label = "Coming soon" }: { label?: string }) => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
    <span className="h-px w-8 bg-border" />
    {label}
  </div>
);
