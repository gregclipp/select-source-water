"use client";

import Script from "next/script";
import { tallyEmbedUrl } from "@/lib/site";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

/**
 * Tally embedded form. The official widget script upgrades the iframe
 * (dynamic height, transparent background). `data-tally-src` +
 * lazyOnload keeps the third-party script off the critical path.
 */
export function TallyEmbed({ formId }: { formId: string }) {
  return (
    <>
      <iframe
        data-tally-src={tallyEmbedUrl(formId)}
        loading="lazy"
        width="100%"
        height="420"
        title="Schedule your complimentary in-home water analysis"
        className="min-h-[26rem] w-full rounded-xl border-0"
      />
      <Script
        id="tally-embed"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.Tally?.loadEmbeds();
        }}
      />
    </>
  );
}
