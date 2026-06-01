import Section, { SectionHeading } from "@/components/ui/Section";
import { whyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why customers choose us"
        title="A courier partner, not just a counter"
        description="There are plenty of places to drop a parcel. Here is why people in Goa keep coming back to us."
      />

      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {whyChooseUs.map((reason, i) => (
          <div key={reason.title} className="bg-white p-6 sm:p-7">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-navy">{reason.title}</h3>
            </div>
            <p className="mt-2 pl-8 text-sm leading-relaxed text-slatey">
              {reason.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
