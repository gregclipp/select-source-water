import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ice-200 bg-white pb-24 pt-14 md:pb-14">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <Image
                src="/images/select-source-logo.png"
                alt=""
                width={44}
                height={44}
              />
              <p className="text-sm font-semibold tracking-tight text-ink">
                {site.legalName}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Complimentary in-home water analysis for {site.serviceArea}{" "}
              homeowners. An Authorized Independent Provider for The Home
              Depot Home Services program.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <Image
              src="/images/home-depot-authorized-provider.png"
              alt="The Home Depot Home Services — Authorized Independent Provider"
              width={52}
              height={61}
              className="h-auto w-[3.25rem]"
            />
            {site.phoneTel && site.phoneDisplay ? (
              <a
                href={`tel:${site.phoneTel}`}
                className="text-sm font-medium text-body hover:text-ink"
              >
                {site.phoneDisplay}
              </a>
            ) : null}
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-body hover:text-ink"
              >
                {site.email}
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ice-200 pt-6 text-xs text-muted md:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="underline-offset-2 hover:text-ink hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* APPROVAL REQUIRED: confirm exact partnership disclosure wording
            with The Home Depot program requirements before launch. */}
        <p className="mt-6 text-center text-[0.6875rem] leading-relaxed text-muted/80 md:text-left">
          {site.legalName} is an independently owned and operated business
          and an Authorized Independent Provider for The Home Depot Home
          Services program. The Home Depot name and logo are trademarks of
          Home Depot Product Authority, LLC, used under authorization.
        </p>
      </div>
    </footer>
  );
}
