import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Complimentary In-Home Water Analysis in Arizona`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "water analysis Arizona",
    "in-home water test",
    "hard water Arizona",
    "water quality Phoenix",
    "complimentary water analysis",
    "Home Depot authorized provider water",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `What's Really In Your Arizona Tap Water? — ${site.name}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — complimentary in-home water analysis in Arizona`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `What's Really In Your Arizona Tap Water? — ${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7FBFE",
  width: "device-width",
  initialScale: 1,
};

/**
 * LocalBusiness structured data. Only facts present in approved
 * branding/messaging — no invented ratings, hours, or addresses.
 * APPROVAL REQUIRED: add address/phone/geo once confirmed by leadership.
 */
function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    image: `${site.url}/images/select-source-logo.png`,
    description: site.description,
    areaServed: { "@type": "State", name: "Arizona" },
    foundingDate: site.establishedYear,
    ...(site.phoneTel ? { telephone: site.phoneTel } : {}),
    ...(site.email ? { email: site.email } : {}),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* The booking form is the conversion path — warm up its origin */}
        <link rel="preconnect" href="https://tally.so" />
        <link rel="dns-prefetch" href="https://tally.so" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </body>
    </html>
  );
}
