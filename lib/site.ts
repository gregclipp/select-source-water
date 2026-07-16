/**
 * Single source of truth for site-wide values.
 *
 * ┌────────────────────────────────────────────────────────────────────┐
 * │ APPROVAL-GATED VALUES                                              │
 * │ Anything marked `APPROVAL REQUIRED` must be confirmed by           │
 * │ leadership / legal / brand before launch. The UI degrades          │
 * │ gracefully when optional values are absent (e.g. phone links are   │
 * │ hidden rather than rendering a fake number).                       │
 * └────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: "Select Source Water",
  legalName: "Select Source Water, LLC",
  // From the approved brand mark ("EST. 1998").
  // APPROVAL REQUIRED: confirm this founding-year claim before launch.
  establishedYear: "1998",
  tagline: "Trusted Water Specialist Serving Arizona",
  description:
    "Schedule your complimentary in-home water analysis through Select Source Water, an Authorized Home Depot Home Services Provider serving Arizona homeowners.",

  // APPROVAL REQUIRED: set NEXT_PUBLIC_SITE_URL in Vercel once the custom
  // domain is connected. Falls back to a placeholder for local builds.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://select-source-water.example.com",

  // ── Contact — APPROVAL REQUIRED ─────────────────────────────────────
  // Leave env vars unset and all phone/email UI hides itself.
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || null, // e.g. "(602) 555-0100"
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || null, // e.g. "+16025550100"
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,

  // ── Booking (Tally) — APPROVAL REQUIRED ─────────────────────────────
  // Create the booking form at https://tally.so and set the form ID.
  tallyFormId: process.env.NEXT_PUBLIC_TALLY_FORM_ID || null,

  // APPROVAL REQUIRED: confirm exact service-area wording with leadership.
  serviceArea: "Arizona",
} as const;

export const tallyEmbedUrl = (formId: string) =>
  `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

export const tallyFallbackUrl = (formId: string) => `https://tally.so/r/${formId}`;

/** The one primary action on the page. Anchor target of every CTA. */
export const BOOKING_ANCHOR = "#book";

/** Approved CTA label from the Figma. */
export const CTA_LABEL = "Schedule My Complimentary Water Analysis";
