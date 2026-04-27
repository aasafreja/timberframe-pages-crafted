import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/products", label: "Products" },
  { to: "/process", label: "How it works" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/specs", label: "Tech specs" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
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
                `text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm" className="rounded-none">
            <Link to="/contact">Request a quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
            <Button asChild className="rounded-none mt-2 w-full">
              <Link to="/contact">Request a quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
