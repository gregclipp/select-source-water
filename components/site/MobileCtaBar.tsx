"use client";

import { useEffect, useState } from "react";
import { BOOKING_ANCHOR } from "@/lib/site";

/**
 * Mobile-only bottom CTA bar. Appears after the hero scrolls out of
 * view and hides while the booking section is on screen, so the
 * primary action is always one thumb-tap away for ad traffic.
 */
export function MobileCtaBar() {
  const [heroGone, setHeroGone] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const booking = document.getElementById("book");
    if (!hero || !booking) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    const bookingObserver = new IntersectionObserver(
      ([entry]) => setBookingVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    heroObserver.observe(hero);
    bookingObserver.observe(booking);
    return () => {
      heroObserver.disconnect();
      bookingObserver.disconnect();
    };
  }, []);

  const visible = heroGone && !bookingVisible;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/5 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={BOOKING_ANCHOR}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-brand-600 px-6 text-base font-semibold text-white shadow-cta transition-colors active:bg-brand-700"
      >
        Book My Complimentary Water Analysis
      </a>
    </div>
  );
}
