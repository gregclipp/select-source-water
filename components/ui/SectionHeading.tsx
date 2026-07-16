export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  id?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-prose ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-display-sm text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
