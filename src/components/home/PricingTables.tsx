import Section, { SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icon";
import { internationalExtraCharges, internationalRateTables, domesticRateTables, RateTable } from "@/lib/rates";
import { whatsappLink } from "@/lib/site";

function RateTableCard({ table }: { table: RateTable }) {
  return (
    <div className="border border-line bg-white">
      <div className="border-b border-line p-5 sm:p-6">
        <h3 className="text-lg font-bold text-navy">{table.title}</h3>
        {table.description && <p className="mt-1 text-sm text-slatey">{table.description}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="whitespace-nowrap px-4 py-3 font-semibold">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {table.rows.map((row) => (
              <tr key={row[0]} className="hover:bg-offwhite">
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className={`whitespace-nowrap px-4 py-3 ${index === 0 ? "font-medium text-ink" : "text-slatey"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingTables() {
  return (
    <Section id="walk-in-rates" className="bg-offwhite">
      <SectionHeading
        eyebrow="Walk-in rates"
        title="Clear rates before you book"
        description="Use these rates as a quick guide for common shipments. Final charges can vary with actual or volumetric weight, destination, packing and carrier rules."
      />

      <div className="mt-8 space-y-10">
        <div>
          <h3 className="mb-4 text-xl font-bold text-navy">Domestic courier</h3>
          <div className="grid gap-5 xl:grid-cols-2">
            {domesticRateTables.map((table) => <RateTableCard key={table.title} table={table} />)}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-navy">International courier</h3>
          <div className="grid gap-5 xl:grid-cols-2">
            {internationalRateTables.map((table) => <RateTableCard key={table.title} table={table} />)}
            <div className="border border-line bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-navy">Extra charges</h3>
              <p className="mt-1 text-sm text-slatey">Additional charges listed in the rate sheet.</p>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {internationalExtraCharges.map(([item, price]) => (
                  <div key={item} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <dt className="text-ink">{item}</dt><dd className="font-semibold text-navy">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border border-orange/30 bg-orange/5 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="max-w-2xl text-sm leading-relaxed text-ink"><strong>Need an exact quote?</strong> Send us the destination, parcel contents and weight. We’ll confirm the applicable rate and delivery option before booking.</p>
          <Button href={whatsappLink("Hello GoGoa Logistics, I need a rate quote.")} external className="shrink-0"><WhatsAppIcon className="h-4 w-4" /> Get a quote</Button>
        </div>
      </div>
    </Section>
  );
}
