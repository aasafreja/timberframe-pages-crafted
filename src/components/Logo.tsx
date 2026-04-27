import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4 L28 11 V22 L16 28 L4 22 V11 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
    <span className="font-display text-base leading-none tracking-tight">
      Timber Smart
    </span>
  </Link>
);
