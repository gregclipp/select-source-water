/**
 * Signature element: a quiet "waterline" — a single flowing stroke that
 * separates major sections, echoing the ripple in the hero artwork.
 */
export function WaterDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        className="block h-8 w-full text-ice-200 sm:h-10"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 24C240 8 480 8 720 22C960 36 1200 36 1440 20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M0 30C240 16 480 16 720 28C960 40 1200 40 1440 26"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
