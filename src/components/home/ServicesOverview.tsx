import Link from "next/link";
import Section, { SectionHeading } from "@/components/ui/Section";
import { ServiceIcon, ArrowRightIcon } from "@/components/ui/Icon";
import { services } from "@/lib/services";

export default function ServicesOverview() {
  return (
    <Section className="bg-offwhite">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="What we handle"
          title="Documents, parcels and regular dispatch"
          description="Individuals, families, students, online sellers and businesses across Goa rely on us for the same thing — parcels and documents that arrive."
        />
        <Link
          href="/services"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-orange-dark hover:text-orange sm:inline-flex"
        >
          All services
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services#${s.slug}`}
            className="group flex flex-col bg-white p-6 transition-colors hover:bg-offwhite"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-line bg-offwhite text-navy group-hover:border-orange/40 group-hover:text-orange-dark">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold text-navy">{s.title}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey">
              {s.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark">
              Learn more
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
