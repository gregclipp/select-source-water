import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import photoProduce from "@/public/images/family-washing-produce.webp";

/**
 * Educational, calm framing — the four signs already named in the
 * approved messaging. No fear language, no medical claims.
 */
const CONCERNS = [
  {
    title: "Hard water stains",
    body: "White spots on glassware, film on shower doors, and residue around faucets are common signs of mineral-rich water.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8 14c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" />
        <path d="M9 9.5h.01M15 9.5h.01" />
      </>
    ),
  },
  {
    title: "Dry skin and hair",
    body: "Many homeowners notice skin and hair feel drier when washing with harder water, even with the same routine and products.",
    icon: (
      <>
        <path d="M12 3.5c3.2 4 5.5 7 5.5 10a5.5 5.5 0 1 1-11 0c0-3 2.3-6 5.5-10Z" />
        <path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5" />
      </>
    ),
  },
  {
    title: "Strange tastes or odors",
    body: "If your tap water tastes or smells noticeably different from bottled water, an analysis can help explain why.",
    icon: (
      <>
        <path d="M8 3h8M10 3v5.5L5.5 17a3 3 0 0 0 2.7 4.5h7.6a3 3 0 0 0 2.7-4.5L14 8.5V3" />
        <path d="M7.5 15h9" />
      </>
    ),
  },
  {
    title: "Mineral buildup",
    body: "Scale inside kettles, on fixtures, and around appliances is a visible sign of the mineral content in your water.",
    icon: (
      <>
        <path d="M4 20h16" />
        <path d="M6 20v-5l3-2 3 3 3-5 3 4v5" />
      </>
    ),
  },
];

export function WaterConcerns() {
  return (
    <section
      id="concerns"
      aria-labelledby="concerns-heading"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-card shadow-lift ring-1 ring-ink/5 lg:mx-0 lg:max-w-none">
            <Image
              src={photoProduce}
              alt="A parent and child washing fresh produce together at the kitchen faucet"
              placeholder="blur"
              sizes="(max-width: 1024px) 320px, 352px"
              className="h-auto w-full"
            />
          </figure>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Everyday signs"
              title="Common water concerns in Arizona homes"
              lead="Arizona has some of the hardest water in the country. These everyday signs are worth understanding — and a complimentary analysis is the simplest way to know what's actually in your water."
              id="concerns-heading"
            />

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {CONCERNS.map((c) => (
                <li
                  key={c.title}
                  className="rounded-card bg-ice-50 p-5 ring-1 ring-ice-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft motion-reduce:transform-none"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft ring-1 ring-brand-100">
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
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
