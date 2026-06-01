import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  /** Visually tighten the default vertical rhythm. */
  compact?: boolean;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${compact ? "py-10 sm:py-12" : "py-14 sm:py-16"} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

/** Left-aligned section heading with an orange rule — the house style. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-orange" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-dark">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slatey">{description}</p>
      )}
    </div>
  );
}
