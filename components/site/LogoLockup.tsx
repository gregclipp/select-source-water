import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Approved brand lockup: Select Source Water mark + Home Depot
 * Authorized Independent Provider badge, per the approved Figma.
 */
export function LogoLockup({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const logoPx = size === "lg" ? 96 : size === "md" ? 72 : 44;
  // Badge is portrait (571×666) — match visual weight, not raw height
  const badgeH = size === "lg" ? 92 : size === "md" ? 68 : 42;
  const badgeW = Math.round(badgeH * (571 / 666));

  return (
    <div className={`flex items-center gap-4 sm:gap-5 ${className}`}>
      <Image
        src="/images/select-source-logo.png"
        alt={`${site.legalName} — established ${site.establishedYear}`}
        width={logoPx}
        height={logoPx}
        priority={size !== "sm"}
        className="h-auto"
        style={{ width: logoPx }}
      />
      <span aria-hidden="true" className="h-9 w-px bg-ink/15 sm:h-12" />
      <Image
        src="/images/home-depot-authorized-provider.png"
        alt="The Home Depot Home Services — Authorized Independent Provider"
        width={badgeW}
        height={badgeH}
        priority={size !== "sm"}
        className="h-auto"
        style={{ width: badgeW }}
      />
    </div>
  );
}
