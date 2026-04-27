type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export const PageHeader = ({ eyebrow, title, description }: Props) => (
  <section className="bg-gradient-warm border-b border-border">
    <div className="container-wide py-16 md:py-24">
      <div className="max-w-3xl animate-fade-up">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="text-4xl md:text-6xl leading-[1.05]">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);
