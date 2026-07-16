import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/images/select-source-logo.png"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            {site.legalName}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {site.phoneTel && site.phoneDisplay ? (
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden text-sm font-medium text-body transition-colors hover:text-ink md:block"
            >
              {site.phoneDisplay}
            </a>
          ) : null}
          <CtaButton size="md" className="hidden sm:inline-flex">
            Schedule Analysis
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
