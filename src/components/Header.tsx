import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { company } from "@/data/site";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useI18n();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  const NAV = [
    { to: "/products", label: t("nav.products") },
    { to: "/process", label: t("nav.process") },
    
    { to: "/about", label: t("nav.about") },
    { to: "/specs", label: t("nav.specs") },
    { to: "/pricing", label: "Cenas" },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        transparent
          ? "bg-transparent border-b border-transparent text-background"
          : "bg-background/90 backdrop-blur-md border-b border-border text-foreground"
      }`}
    >
      <div className="container-wide flex h-16 md:h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[13px] font-normal tracking-wide transition-colors ${
                  transparent
                    ? isActive
                      ? "text-background"
                      : "text-background/70 hover:text-background"
                    : isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <span className={`h-4 w-px ${transparent ? "bg-background/30" : "bg-border"}`} aria-hidden />
          <Link
            to="/contact"
            className={`text-sm font-medium border-b pb-0.5 transition-colors ${
              transparent
                ? "border-background/40 hover:border-background"
                : "border-foreground/40 hover:border-foreground"
            }`}
          >
            {t("nav.quote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${company.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium text-foreground/80 hover:text-foreground transition-colors"
            aria-label={company.phones[0]}
          >
            <Phone size={14} strokeWidth={1.6} />
            <span className="hidden sm:inline">{company.phones[0]}</span>
          </a>
          <button
            className="p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-base py-1 ${isActive ? "text-accent" : "text-foreground/90"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <LanguageSwitcher variant="mobile" />
            </div>
            <Button asChild className="rounded-none mt-2 w-full">
              <Link to="/contact">{t("nav.quote")}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
