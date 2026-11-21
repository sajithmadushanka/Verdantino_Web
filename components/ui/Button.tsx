/**
 * VERDANTINO — Reusable Button Component
 * Variants: primary (filled green), outline (bordered), ghost (text only)
 */

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-botanical border border-transparent",
  secondary:
    "bg-canvas text-forest hover:bg-white border border-transparent shadow-sm",
  outline:
    "bg-transparent text-ink border border-ink/30 hover:border-primary hover:text-primary",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-muted hover:text-primary border border-transparent",
};

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-primary";

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
  disabled = false,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
