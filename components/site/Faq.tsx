import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/faqs";



export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          id="faq-heading"
        />

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-ice-200 rounded-card bg-ice-50 px-6 ring-1 ring-ice-200 sm:mt-12 sm:px-8">
          {FAQS.map((f) => (
            <details key={f.q} name="faq" className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-left text-base font-semibold text-ink">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft ring-1 ring-brand-100 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pr-12 text-sm leading-relaxed text-body">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
