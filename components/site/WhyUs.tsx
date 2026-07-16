import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const REASONS = [
  {
    title: `Established ${site.establishedYear}`,
    body: "Select Source Water has been focused on one thing for decades: helping homeowners understand and improve their water.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
  {
    title: "Authorized Home Depot Provider",
    body: "We operate as an Authorized Independent Provider for The Home Depot's Home Services program.",
    icon: (
      <>
        <path d="M12 3 4.5 6v5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Local Arizona focus",
    body: "Arizona water is unlike anywhere else. Our specialists work here, live here, and understand the water conditions specific to this region.",
    icon: (
      <>
        <path d="M12 21c4-4.5 6.5-8 6.5-11a6.5 6.5 0 1 0-13 0c0 3 2.5 6.5 6.5 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    title: "Education first, always",
    body: "The analysis is about understanding your water — not a sales pitch. You decide what happens next, on your timeline.",
    icon: (
      <>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v13.5H6.5A2.5 2.5 0 0 0 4 20V6.5Z" />
        <path d="M8 8.5h8M8 12h5" />
      </>
    ),
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={`Why ${site.name}`}
          title="A water partner Arizona homeowners can trust"
          lead="Trustworthy, local, and pressure-free — the way an in-home visit should be."
          id="why-heading"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:mt-14 sm:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-card bg-ice-50 p-6 ring-1 ring-ice-200"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft ring-1 ring-brand-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {r.icon}
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership badge reassurance at the decision point */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-5 rounded-card bg-white p-5 shadow-soft ring-1 ring-ice-200">
          <Image
            src="/images/home-depot-authorized-provider.png"
            alt="The Home Depot Home Services — Authorized Independent Provider badge"
            width={62}
            height={72}
            className="h-auto w-[3.4rem] sm:w-[3.875rem]"
          />
          <p className="text-sm leading-relaxed text-body">
            {site.legalName} is an Authorized Independent Provider for The
            Home Depot Home Services program.
          </p>
        </div>
      </Container>
    </section>
  );
}
