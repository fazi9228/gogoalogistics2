import Section, { SectionHeading } from "@/components/ui/Section";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <Section className="bg-navy text-white">
      <SectionHeading
        eyebrow="How it works"
        title="From your hands to its destination"
        description="A simple, predictable process — whether it is one parcel or your daily dispatch."
        className="[&_h2]:text-white [&_p]:text-white/75"
      />

      <ol className="mt-9 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((step) => (
          <li key={step.number} className="bg-navy p-6">
            <span className="block text-3xl font-extrabold text-orange">
              {step.number}
            </span>
            <h3 className="mt-3 text-base font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
