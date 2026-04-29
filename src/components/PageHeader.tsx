type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
};

export const PageHeader = ({ eyebrow, title, description, image }: Props) => {
  if (image) {
    return (
      <section className="relative border-b border-border overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Soft warm tint + bottom darken for legibility, kept minimal */}
        <div className="absolute inset-0 bg-foreground/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-foreground/10" />
        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl animate-fade-up text-background">
            {eyebrow && (
              <div className="eyebrow mb-4 text-background/70">{eyebrow}</div>
            )}
            <h1 className="text-4xl md:text-6xl leading-[1.05] text-background">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-lg text-background/85 max-w-2xl leading-relaxed font-light">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
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
};
