import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3 L29 11 V25 L16 29 L3 25 V11 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M9 14 L16 18 L23 14 M16 18 V26" stroke="currentColor" strokeWidth="1.4" />
    </svg>
    <span className="font-display text-lg leading-none tracking-tight">
      Timber<span className="text-accent">.</span>Smart
    </span>
  </Link>
);
