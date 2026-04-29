import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  meta?: string[];
  cta?: { label: string; to: string };
  secondary?: { label: string; href: string };
};

export const PageHeader = ({
  eyebrow,
  title,
  description,
  image,
  meta,
  cta,
  secondary,
}: Props) => {
  if (image) {
    return (
      <section className="relative md:min-h-[78vh] flex flex-col justify-end overflow-hidden -mt-16 md:-mt-20 pt-24 md:pt-20 border-b border-border">
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
          aria-hidden
        />

        <div className="container-wide relative z-10 pt-16 pb-14 md:pb-32 text-background">
          <div className="max-w-3xl animate-fade-up">
            {eyebrow && (
              <div className="eyebrow text-background/70 mb-6">{eyebrow}</div>
            )}
            <h1 className="text-background leading-[1.02] tracking-[-0.04em] font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] whitespace-pre-line">
              {title}
            </h1>
            {description && (
              <p className="mt-8 text-base md:text-lg text-background/80 font-light max-w-xl leading-relaxed">
                {description}
              </p>
            )}

            {(cta || secondary) && (
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                {cta && (
                  <Link
                    to={cta.to}
                    className="group inline-flex items-center gap-3 text-background text-sm tracking-wide border-b border-background/60 pb-1.5 hover:border-background transition-colors"
                  >
                    {cta.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                )}
                {secondary && (
                  <a
                    href={secondary.href}
                    className="text-background/70 text-sm tracking-wide hover:text-background transition-colors"
                  >
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {meta && meta.length > 0 && (
          <div className="relative md:absolute md:bottom-0 md:inset-x-0 z-10 border-t border-background/15 bg-background/[0.04] backdrop-blur-[2px]">
            <div className="container-wide grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-background/15 text-background/85">
              {meta.map((m) => (
                <div
                  key={m}
                  className="py-4 sm:py-5 text-[11px] md:text-xs uppercase tracking-[0.22em] font-light text-center"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        )}
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
