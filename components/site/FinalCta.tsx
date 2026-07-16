import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { CTA_LABEL } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-brand-800 py-24 text-white sm:py-28"
    >
      {/* Quiet water atmosphere on deep blue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(94,166,227,0.35),transparent)]"
      />
      <Container className="relative text-center">
        <h2
          id="final-cta-heading"
          className="mx-auto max-w-[22ch] text-display-sm text-white"
        >
          Know what&apos;s in your water — with confidence
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] leading-relaxed text-brand-100">
          One complimentary visit is all it takes to understand your
          home&apos;s water. No obligation. No pressure. Just clarity.
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton variant="inverted">
            {CTA_LABEL}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
