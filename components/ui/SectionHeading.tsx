/**
 * VERDANTINO — Section Heading Component
 * Consistent eyebrow label + heading + optional description pattern.
 */

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  headingId,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold tracking-[0.4em] uppercase text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
