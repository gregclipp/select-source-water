import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { LogoLockup } from "@/components/site/LogoLockup";
import { CTA_LABEL, site } from "@/lib/site";
import bgDesktop from "@/public/images/water-bg-desktop.webp";
import bgMobile from "@/public/images/water-bg-mobile.webp";
import photoDrinking from "@/public/images/family-drinking-water.webp";
import photoProduce from "@/public/images/family-washing-produce.webp";

const TRUST_ITEMS = [
  {
    label: "Complimentary Analysis",
    icon: (
      <path d="M12 3.5c3.2 4 5.5 7 5.5 10a5.5 5.5 0 1 1-11 0c0-3 2.3-6 5.5-10Z" />
    ),
  },
  {
    label: "Authorized Home Depot Provider",
    icon: (
      <>
        <path d="M12 3 4.5 6v5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    label: "Local Arizona Experts",
    icon: (
      <>
        <path d="M12 21c4-4.5 6.5-8 6.5-11a6.5 6.5 0 1 0-13 0c0 3 2.5 6.5 6.5 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    label: "No Obligation · No Pressure",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
      </>
    ),
  },
];

/** Signature accent: a quiet waterline beneath the key phrase. */
function WavyUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 12"
      preserveAspectRatio="none"
      className="absolute -bottom-1 left-0 h-[0.4em] w-full text-brand-400/70"
      fill="none"
    >
      <path
        d="M2 8C30 3 58 3 86 7C114 11 142 11 170 7C190 4 205 4 218 6"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* ── Atmosphere: supplied water artwork, blur-up, contrast overlay ── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={bgDesktop}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="hidden object-cover object-bottom md:block"
        />
        <Image
          src={bgMobile}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-bottom md:hidden"
        />
        {/* Guarantees WCAG text contrast over the artwork */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/10" />
      </div>

      <div className="mx-auto w-full max-w-content px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-20">
          {/* ── Content column ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <LogoLockup size="md" className="animate-fade-rise" />

            <p className="mt-9 animate-fade-rise text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 [animation-delay:80ms]">
              {site.tagline}
            </p>

            <h1
              id="hero-heading"
              className="mt-4 max-w-[16ch] animate-fade-rise text-display text-ink [animation-delay:140ms]"
            >
              What&apos;s Really In Your Arizona{" "}
              <span className="relative inline-block whitespace-nowrap">
                Tap&nbsp;Water?
                <WavyUnderline />
              </span>
            </h1>

            {/* Two-tier subhead, per the approved Figma */}
            <p className="mt-7 max-w-[52ch] animate-fade-rise text-base font-medium leading-relaxed text-ink/80 [animation-delay:200ms] sm:text-lg">
              Most Arizona homeowners don&apos;t realize what&apos;s in their
              tap water until hard water stains, dry skin, strange tastes, or
              mineral buildup start affecting everyday life.
            </p>
            <p className="mt-3 max-w-[48ch] animate-fade-rise leading-relaxed text-body [animation-delay:240ms]">
              Schedule your complimentary in-home water analysis through
              Select Source Water, an Authorized Home Depot Home Services
              Provider.
            </p>

            <div className="mt-9 flex animate-fade-rise flex-col items-center gap-4 [animation-delay:300ms] sm:flex-row sm:gap-6">
              <CtaButton>{CTA_LABEL}</CtaButton>
              <a
                href="#how-it-works"
                className="rounded-full text-sm font-medium text-body underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 animate-fade-rise text-xs font-medium tracking-wide text-muted [animation-delay:330ms]">
              No cost · No obligation · No pressure
            </p>

            {/* Trust checklist — 2×2, never a cramped single row */}
            <ul className="mt-10 grid w-full max-w-lg animate-fade-rise grid-cols-1 gap-x-8 gap-y-4 text-left [animation-delay:380ms] min-[420px]:grid-cols-2">
              {TRUST_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-brand-600 shadow-soft ring-1 ring-brand-100">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-[1.15rem] w-[1.15rem]"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Photo column: composed stack with depth (desktop) ── */}
          <div className="relative hidden lg:block">
            {/* Offset backdrop block gives the pair intentional depth */}
            <div
              aria-hidden="true"
              className="absolute -right-6 top-10 h-[24rem] w-[19rem] rounded-[2rem] bg-gradient-to-br from-brand-100/80 to-ice-200/60"
            />
            <div className="relative flex flex-col items-end gap-6">
              <figure className="relative w-[19.5rem] overflow-hidden rounded-card bg-white shadow-lift ring-1 ring-ink/5">
                <Image
                  src={photoDrinking}
                  alt="A family together at the kitchen sink while a child drinks a glass of water"
                  placeholder="blur"
                  sizes="312px"
                  className="h-auto w-full"
                />
                {/* Approved-copy chip — quiet credibility on the image */}
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur-sm">
                  Complimentary in-home analysis
                </figcaption>
              </figure>
              <figure className="mr-12 w-[16rem] overflow-hidden rounded-card bg-white shadow-lift ring-1 ring-ink/5">
                <Image
                  src={photoProduce}
                  alt="A parent and child washing fresh produce at the kitchen faucet"
                  placeholder="blur"
                  sizes="256px"
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Mobile-only lifestyle photo — words and button own the first screen */}
        <figure className="relative mx-auto mt-12 w-full max-w-sm overflow-hidden rounded-card bg-white shadow-lift ring-1 ring-ink/5 lg:hidden">
          <Image
            src={photoDrinking}
            alt="A family together at the kitchen sink while a child drinks a glass of water"
            placeholder="blur"
            sizes="(max-width: 640px) 90vw, 384px"
            className="h-auto w-full"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur-sm">
            Complimentary in-home analysis
          </figcaption>
        </figure>

        {/* Scroll cue */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <a
            href="#concerns"
            aria-label="Scroll to learn about common Arizona water concerns"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-brand-600 shadow-soft ring-1 ring-brand-100 transition-transform hover:translate-y-0.5 motion-reduce:transform-none"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
