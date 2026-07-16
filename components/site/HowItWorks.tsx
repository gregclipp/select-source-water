import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaButton } from "@/components/ui/CtaButton";

/** A real 3-step sequence — numbering encodes actual order here. */
const STEPS = [
  {
    step: "1",
    title: "Schedule your visit",
    body: "Pick a time that works for your household. Booking is quick, and the analysis is complimentary.",
  },
  {
    step: "2",
    title: "In-home water analysis",
    body: "A local water specialist tests your tap water at your home and walks you through what the results mean in plain language.",
  },
  {
    step: "3",
    title: "Understand your options",
    body: "You'll leave the visit knowing what's in your water. If improvements make sense for your home, your specialist can explain them — no obligation, no pressure.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-20 bg-ice-50 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps to water clarity"
          lead="From booking to understanding your results, the whole process is designed to be easy, transparent, and pressure-free."
          id="how-heading"
        />

        <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:mt-14 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.step}
              className="relative rounded-card bg-white p-6 shadow-soft ring-1 ring-ice-200 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white shadow-cta"
              >
                {s.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <CtaButton>Book My Complimentary Water Analysis</CtaButton>
        </div>
      </Container>
    </section>
  );
}
