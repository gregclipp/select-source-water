# CLAUDE.md — Select Source Water website

Guidance for AI-assisted work on this repository.

## What this is

Production marketing site (Next.js App Router + TypeScript + Tailwind) for
Select Source Water, LLC — complimentary in-home water analysis for Arizona
homeowners. Single conversion goal: bookings through the Tally form in the
`#book` section. Traffic is largely paid social; page speed and the booking
path are sacred.

## Hard rules

1. **Approved copy is locked.** The hero headline, subheads, CTA label, and
   trust checklist come from an approved Figma. Do not rewrite them without
   explicit instruction.
2. **Never invent facts.** No statistics, testimonials, customer counts,
   review scores, certifications, or awards. If a claim needs approval, add
   a clearly marked placeholder and list it for the owner.
3. **Home Depot orange is not a UI color.** It appears only inside the
   official badge image. Brand UI colors live in `tailwind.config.ts`.
4. **No new client components without cause.** Server Components by
   default. Current client components: `TallyEmbed`, `MobileCtaBar`, and the
   `app/error.tsx` boundary — all for browser-API reasons.
5. **One primary CTA.** Every call-to-action anchors to `#book`
   (`BOOKING_ANCHOR` in `lib/site.ts`). Don't add competing actions.
6. **Placeholders live in `lib/site.ts` / env vars**, never hard-coded in
   components. UI must degrade gracefully when optional values are unset.

## Conventions

- Design tokens: `tailwind.config.ts` (colors `ink/body/muted/brand/ice`,
  shadows `soft/lift/cta`, radius `card`, fluid type `display/display-sm`).
- Sections live in `components/site/`, primitives in `components/ui/`.
- FAQ copy lives in `lib/faqs.ts` — it feeds both the UI and FAQPage JSON-LD; edit it in one place only.
- Icons are inline SVG (stroke 1.6–1.8, round caps) — no icon library.
- Spacing rhythm: sections `py-20 sm:py-24`; content max width
  `max-w-content` (72rem) via `Container`.
- Accessibility floor: visible focus, semantic headings (one `h1`),
  `aria-labelledby` on sections, alt text on meaningful images, empty alt
  on decorative ones, reduced-motion respected.

## Commands

```bash
npm run dev / build / start / lint / typecheck
```

Run `lint` and `typecheck` before considering any change complete. Verify
mobile (390px) and desktop (1280px+) after layout changes — the mobile
experience is intentionally different from desktop (see `Hero.tsx` and
`MobileCtaBar.tsx`), not a shrunken clone.
