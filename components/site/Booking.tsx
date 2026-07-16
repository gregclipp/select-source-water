import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TallyEmbed } from "@/components/site/TallyEmbed";
import { site, tallyFallbackUrl } from "@/lib/site";

const NEXT_STEPS = [
  {
    title: "Pick your time",
    body: "Choose an appointment slot that fits your household's schedule.",
  },
  {
    title: "A local specialist visits",
    body: "Your Arizona water specialist tests your tap water right at home.",
  },
  {
    title: "Review results together",
    body: "Understand what's in your water in plain language — no obligation.",
  },
];

export function Booking() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="scroll-mt-20 bg-gradient-to-b from-ice-50 to-ice-100 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Complimentary · No obligation"
          title="Book your in-home water analysis"
          lead="Choose a time that works for you. A local Arizona water specialist will handle the rest."
          id="book-heading"
        />

        <div className="mx-auto mt-12 grid max-w-4xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
          {/* ── Form ── */}
          <div className="rounded-card bg-white p-4 shadow-lift ring-1 ring-ice-200 sm:p-6">
            {site.tallyFormId ? (
              <>
                <TallyEmbed formId={site.tallyFormId} />
                <p className="mt-4 border-t border-ice-200 pt-4 text-center text-sm text-muted">
                  Form not loading?{" "}
                  <a
                    href={tallyFallbackUrl(site.tallyFormId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                  >
                    Open the booking form in a new tab
                  </a>
                  .
                </p>
              </>
            ) : (
              /* Graceful pre-launch state — replaced automatically once
                 NEXT_PUBLIC_TALLY_FORM_ID is set. */
              <div className="px-4 py-14 text-center">
                <p className="text-lg font-semibold text-ink">
                  Online booking is almost ready
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-body">
                  {/* APPROVAL REQUIRED: set NEXT_PUBLIC_TALLY_FORM_ID to
                      activate the embedded booking form. */}
                  Our online scheduler is being finalized.
                  {site.phoneTel && site.phoneDisplay ? (
                    <>
                      {" "}
                      In the meantime, call{" "}
                      <a
                        href={`tel:${site.phoneTel}`}
                        className="font-medium text-brand-600 underline underline-offset-2"
                      >
                        {site.phoneDisplay}
                      </a>{" "}
                      to schedule your complimentary water analysis.
                    </>
                  ) : (
                    " Please check back shortly to schedule your complimentary water analysis."
                  )}
                </p>
              </div>
            )}
          </div>

          {/* ── Reassurance panel at the decision point ── */}
          <aside
            aria-label="What happens next"
            className="rounded-card bg-white/70 p-6 ring-1 ring-ice-200 backdrop-blur-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
              What happens next
            </h3>
            <ol className="mt-5 space-y-5">
              {NEXT_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-body">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center gap-3 border-t border-ice-200 pt-5">
              <Image
                src="/images/home-depot-authorized-provider.png"
                alt="The Home Depot Home Services — Authorized Independent Provider"
                width={40}
                height={47}
                className="h-auto w-10"
              />
              <p className="text-xs leading-relaxed text-muted">
                An Authorized Independent Provider for The Home Depot Home
                Services program.
              </p>
            </div>
          </aside>
        </div>

        <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-muted">
          Helping Arizona homeowners better understand their water quality
          through complimentary in-home water analysis. Your details are
          only used to schedule your visit.
        </p>
      </Container>
    </section>
  );
}
