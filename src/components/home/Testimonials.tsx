import Section, { SectionHeading } from "@/components/ui/Section";

const shipmentExamples = [
  { title: "Documents abroad", detail: "Passports, certificates, agreements and other papers sent to family, colleges and offices overseas." },
  { title: "Parcels across India", detail: "Household items, gifts and shop orders booked by weight for destinations across the country." },
  { title: "Daily business dispatch", detail: "Scheduled pickup and consolidated booking for shops, online sellers and offices." },
  { title: "Urgent documents", detail: "Priority options for papers that need to reach a customer, office or family member quickly." },
];

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Typical shipments"
        title="What comes through the counter"
        description="A few common reasons people contact us. If your shipment is different, ask us before packing it."
      />

      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {shipmentExamples.map((item) => (
          <div key={item.title} className="flex flex-col bg-white p-6 sm:p-7">
            <h3 className="text-lg font-bold text-navy">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey">{item.detail}</p>
            <span className="mt-5 border-t border-line pt-3 text-xs font-semibold uppercase tracking-wide text-orange-dark">Ask for a quote</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
