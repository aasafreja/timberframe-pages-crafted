import { Link } from "react-router-dom";
import { company } from "@/data/site";

const NAV_LINKS: [string, string][] = [
  ["Products", "/products"],
  ["How it works", "/process"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Tech specs", "/specs"],
  ["Contact", "/contact"],
];

const LEGAL_LINKS: [string, string][] = [
  ["Privacy", "#"],
  ["Terms", "#"],
  ["Shipping", "#"],
  ["Refund", "#"],
];

const SOCIALS: [string, string][] = [
  ["Instagram", "#"],
  ["LinkedIn", "#"],
  ["Facebook", "#"],
];

export const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="container-wide pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="grid gap-14 md:gap-20 md:grid-cols-12">
        {/* Left: address block */}
        <div className="md:col-span-5 space-y-8">
          <p className="font-display text-3xl md:text-4xl leading-[1.1] font-normal max-w-md">
            Timber Smart Solution
          </p>

          <div className="space-y-1 text-sm text-foreground/70 font-light leading-relaxed">
            <div>{company.address}</div>
            <div>{company.hours}</div>
          </div>

          <div className="space-y-1 text-sm font-light">
            <a
              href={`mailto:${company.email}`}
              className="block text-foreground hover:text-foreground/60 transition-colors"
            >
              {company.email}
            </a>
            {company.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="block text-foreground/70 hover:text-foreground transition-colors"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: navigation */}
        <div className="md:col-span-4 md:col-start-7">
          <h4 className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 mb-6">
            Site
          </h4>
          <ul className="space-y-3 text-sm font-light">
            {NAV_LINKS.map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: socials */}
        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 mb-6">
            Follow
          </h4>
          <ul className="space-y-3 text-sm font-light">
            {SOCIALS.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 md:mt-28 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between text-xs text-muted-foreground font-light">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {LEGAL_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
