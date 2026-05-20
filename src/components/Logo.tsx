import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`inline-flex items-center group ${className}`} aria-label="Timber Smart Solution">
    <img src={logo} alt="Timber Smart Solution" className="h-9 md:h-10 w-auto" />
  </Link>
);
