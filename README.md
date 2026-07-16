# Select Source Water — Production Website

Marketing site for **Select Source Water, LLC**, an Authorized Independent
Provider for The Home Depot Home Services program. The site converts Arizona
homeowners into complimentary in-home water analysis appointments via an
embedded Tally booking form.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS**, optimized
for Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
```

## Scripts

| Command             | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Local development server         |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint (next/core-web-vitals)    |
| `npm run typecheck` | TypeScript check without emit    |

## Environment variables

All runtime configuration lives in environment variables — no code changes
needed to launch. See `.env.example`.

| Variable                    | Required | Purpose                                             |
| --------------------------- | -------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Yes      | Canonical URL (used by metadata, sitemap, robots)   |
| `NEXT_PUBLIC_TALLY_FORM_ID` | Yes*     | Tally form ID from `https://tally.so/r/<FORM_ID>`   |
| `NEXT_PUBLIC_PHONE_DISPLAY` | No       | Display phone, e.g. `(602) 555-0100`                |
| `NEXT_PUBLIC_PHONE_TEL`     | No       | Dialable phone, e.g. `+16025550100`                 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No       | Contact email shown in footer + privacy page        |

\* The site builds and runs without it — the booking section shows a
graceful "online booking is almost ready" state until the ID is set.

## Project structure

```
app/
  layout.tsx          Root layout: Inter font, metadata, JSON-LD, skip link
  page.tsx            Home page — composes all sections
  globals.css         Tailwind layers + base a11y/motion styles
  privacy/page.tsx    Privacy policy (DRAFT — legal review required)
  not-found.tsx       Branded 404 that recovers visitors to the booking flow
  error.tsx           Error boundary with retry
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
  icon.png            Favicon (512)
  apple-icon.png      Apple touch icon (180)
  opengraph-image.png Social share image (1200×630)
components/
  site/               Page sections (Hero, WaterConcerns, HowItWorks,
                      WhyUs, Booking, TallyEmbed, Faq, FinalCta, Header,
                      Footer, MobileCtaBar, LogoLockup)
  ui/                 Primitives (Container, CtaButton, SectionHeading,
                      WaterDivider)
lib/
  site.ts             Single source of truth for site config + all
                      approval-gated placeholders
  faqs.ts             FAQ content — shared by the FAQ UI and FAQPage JSON-LD
public/images/        Optimized brand + lifestyle assets (~160 KB total)
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset
   "Next.js" is detected automatically — no build settings needed.
3. Add the environment variables above under
   **Project → Settings → Environment Variables** (Production).
4. Deploy. Preview deployments are created for every branch/PR.

## Connecting a custom domain

1. Vercel → Project → **Settings → Domains → Add** your domain
   (e.g. `selectsourcewater.com` and `www.selectsourcewater.com`).
2. At your registrar, either:
   - point nameservers to Vercel, **or**
   - add the records Vercel shows: `A 76.76.21.21` for the apex and
     `CNAME cname.vercel-dns.com` for `www`.
3. Choose which of apex/`www` is primary; Vercel redirects the other.
   SSL certificates are provisioned automatically.
4. Set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain and redeploy
   so canonical URLs, Open Graph, and the sitemap use the real domain.

## Pre-launch checklist

- [ ] `NEXT_PUBLIC_TALLY_FORM_ID` set; form submits end-to-end
- [ ] `NEXT_PUBLIC_SITE_URL` set to the live domain
- [ ] Phone/email env vars set (or intentionally left hidden)
- [ ] Privacy policy approved by legal; all `[PLACEHOLDER]`s replaced;
      internal-note banner removed
- [ ] Home Depot partnership wording approved by the program
- [ ] "Established 1998" claim confirmed by leadership
- [ ] Test booking on a real phone (iOS + Android)
- [ ] Lighthouse pass on the production URL
- [ ] Ad-platform pixels added if required (and disclosed in privacy policy)

## Accessibility & performance notes

- Semantic landmarks, single `h1`, labeled sections, skip link
- Native `<details>` FAQ (keyboard accessible, zero JS)
- Visible focus rings site-wide; `prefers-reduced-motion` respected
- All imagery served through `next/image`; hero backgrounds preloaded
- Tally's script loads `lazyOnload` so it never blocks LCP
