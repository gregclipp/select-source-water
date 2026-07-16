import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WaterConcerns } from "@/components/site/WaterConcerns";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyUs } from "@/components/site/WhyUs";
import { Booking } from "@/components/site/Booking";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { WaterDivider } from "@/components/ui/WaterDivider";
import { FAQS } from "@/lib/faqs";

/** FAQPage structured data — eligible for rich results in search. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WaterDivider />
        <WaterConcerns />
        <HowItWorks />
        <WhyUs />
        <Booking />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
