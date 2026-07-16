import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.legalName}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

/**
 * ⚠️ LEGAL REVIEW REQUIRED — this page is a structured draft, not
 * final legal language. Counsel must review and approve every section
 * before launch, and every [PLACEHOLDER] must be replaced.
 */
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="bg-white py-16 sm:py-20">
        <Container className="max-w-prose">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Legal
          </p>
          <h1 className="mt-3 text-display-sm text-ink">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">
            Last updated: [PLACEHOLDER — set on approval]
          </p>

          <div className="mt-6 rounded-card bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
            <strong>Internal note — remove before launch:</strong> this
            page is a draft for legal review. It must be approved by
            counsel, and all placeholders replaced, before the site goes
            live.
          </div>

          <div className="prose-sm mt-10 space-y-8 text-body [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_p]:mt-2 [&_p]:leading-relaxed">
            <section>
              <h2>Who we are</h2>
              <p>
                {site.legalName} (&quot;we&quot;, &quot;us&quot;) provides
                complimentary in-home water analysis for homeowners in{" "}
                {site.serviceArea}. Our mailing address is [PLACEHOLDER —
                business address].
              </p>
            </section>

            <section>
              <h2>Information we collect</h2>
              <p>
                When you request an appointment through our booking form, we
                collect the information you provide — typically your name,
                contact details, address, and preferred appointment times.
                Our booking form is operated by Tally (tally.so), which
                processes form submissions on our behalf.
              </p>
              <p>
                Like most websites, our hosting provider (Vercel) may
                collect standard technical logs such as IP address and
                browser type. [PLACEHOLDER — list any analytics or
                advertising pixels added for ad campaigns, e.g. Meta Pixel,
                TikTok Pixel, Google tags, and their purposes.]
              </p>
            </section>

            <section>
              <h2>How we use your information</h2>
              <p>
                We use the information you submit to schedule and provide
                your complimentary in-home water analysis, to communicate
                with you about your appointment, and to respond to your
                questions. [PLACEHOLDER — confirm whether information is
                used for marketing follow-up and describe opt-out.]
              </p>
            </section>

            <section>
              <h2>Sharing</h2>
              <p>
                [PLACEHOLDER — legal to confirm: describe any sharing with
                service providers, The Home Depot program requirements, or
                scheduling partners. We do not sell personal information.]
              </p>
            </section>

            <section>
              <h2>Data retention</h2>
              <p>
                [PLACEHOLDER — legal to define retention periods for
                appointment and contact records.]
              </p>
            </section>

            <section>
              <h2>Your choices</h2>
              <p>
                You may request access to, correction of, or deletion of
                your personal information by contacting us at
                {site.email ? ` ${site.email}` : " [PLACEHOLDER — contact email]"}.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Questions about this policy can be sent to
                {site.email ? ` ${site.email}` : " [PLACEHOLDER — contact email]"} or
                mailed to [PLACEHOLDER — business address].
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm">
            <Link
              href="/"
              className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              ← Back to home
            </Link>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
