import type { ReactNode } from "react";
import { BOOKING_ANCHOR } from "@/lib/site";

/**
 * The single primary action of the site. Renders as an anchor that
 * smooth-scrolls to the embedded booking form (see globals.css).
 */
export function CtaButton({
  children,
  size = "lg",
  variant = "primary",
  className = "",
  href = BOOKING_ANCHOR,
}: {
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "inverted";
  className?: string;
  href?: string;
}) {
  const sizing =
    size === "lg"
      ? "px-7 py-4 text-base sm:px-8 sm:text-[1.0625rem]"
      : "px-5 py-2.5 text-sm";

  const look =
    variant === "primary"
      ? "bg-brand-600 text-white shadow-cta hover:bg-brand-500 hover:shadow-cta-hover"
      : "bg-white text-brand-700 shadow-lift hover:bg-ice-50";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none ${look} ${sizing} ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5 shrink-0 opacity-90 transition-transform duration-200 group-hover:scale-110 motion-reduce:transform-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18" />
        <path d="M9.5 15.5l2 2 3.5-3.5" />
      </svg>
      <span>{children}</span>
    </a>
  );
}
