import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="flex min-h-[60vh] items-center bg-gradient-to-b from-white to-ice-50 py-20"
      >
        <div className="mx-auto w-full max-w-content px-5 text-center sm:px-8">
          <Image
            src="/images/select-source-logo.png"
            alt=""
            width={72}
            height={72}
            className="mx-auto"
          />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Page not found
          </p>
          <h1 className="mt-3 text-display-sm text-ink">
            This page seems to have evaporated
          </h1>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-body">
            The page you&apos;re looking for doesn&apos;t exist — but your
            complimentary water analysis is one click away.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/#book"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-brand-600 px-8 py-4 font-semibold text-white shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-cta-hover motion-reduce:transform-none"
            >
              Book My Complimentary Water Analysis
            </Link>
          </div>
          <p className="mt-5 text-sm">
            <Link
              href="/"
              className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              Or return to the homepage
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
