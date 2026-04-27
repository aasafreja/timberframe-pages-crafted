import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "@/data/site";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide py-16 md:py-20 grid gap-12 md:grid-cols-12">
      <div className="md:col-span-5 space-y-6">
        <div className="text-primary-foreground">
          <Logo />
        </div>
        <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
          {company.tagline} — Cross-Laminated Timber and Thermowood crafted in
          the Baltics for architects who care about how buildings age.
        </p>
        <div className="flex items-center gap-3">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="h-9 w-9 grid place-items-center border border-primary-foreground/20 hover:border-primary-foreground/60 hover:text-primary-foreground/70 transition-colors"
              aria-label="Social"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="md:col-span-3 space-y-4">
        <h4 className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-sans">
          Explore
        </h4>
        <ul className="space-y-2 text-sm">
          {[
            ["Home", "/"],
            ["Products", "/products"],
            ["How it works", "/process"],
            ["Portfolio", "/portfolio"],
            ["About", "/about"],
            ["Tech specs", "/specs"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                className="text-primary-foreground/70 hover:text-primary-foreground/70 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4 space-y-4">
        <h4 className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-sans">
          Contact
        </h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary-foreground/70" />
            <span>{company.address}</span>
          </li>
          <li className="flex gap-3">
            <Phone size={16} className="mt-0.5 shrink-0 text-primary-foreground/70" />
            <span>{company.phones.join(" · ")}</span>
          </li>
          <li className="flex gap-3">
            <Mail size={16} className="mt-0.5 shrink-0 text-primary-foreground/70" />
            <a href={`mailto:${company.email}`} className="hover:text-primary-foreground/70">
              {company.email}
            </a>
          </li>
          <li className="text-primary-foreground/60 pt-1">{company.hours}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-wide py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-primary-foreground/50">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground/70">Privacy</a>
          <a href="#" className="hover:text-primary-foreground/70">Terms</a>
          <a href="#" className="hover:text-primary-foreground/70">Shipping</a>
          <a href="#" className="hover:text-primary-foreground/70">Refund</a>
        </div>
      </div>
    </div>
  </footer>
);
