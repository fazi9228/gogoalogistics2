import Section, { SectionHeading } from "@/components/ui/Section";
import { serviceAreas } from "@/lib/content";
import { PinIcon } from "@/components/ui/Icon";

function AreaColumn({
  title,
  areas,
}: {
  title: string;
  areas: string[];
}) {
  return (
    <div className="bg-white p-6">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <PinIcon className="h-5 w-5 text-orange" />
        <h3 className="text-base font-bold text-navy">{title}</h3>
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slatey">
        {areas.map((a) => (
          <li key={a} className="flex items-center gap-2">
            <span className="h-1 w-1 shrink-0 bg-orange" aria-hidden />
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceAreas() {
  return (
    <Section className="bg-offwhite">
      <SectionHeading
        eyebrow="Service areas"
        title="Pickup and drop-off across Goa"
        description="Our counter is in Margao, with doorstep pickup across South Goa and scheduled pickups in North Goa. If your area is not listed, ask us — we likely cover it."
      />

      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        <AreaColumn title="South Goa" areas={serviceAreas.southGoa} />
        <AreaColumn title="North Goa" areas={serviceAreas.northGoa} />
      </div>
    </Section>
  );
}
