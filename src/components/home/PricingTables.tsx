"use client";

import { useState } from "react";
import Section, { SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icon";
import {
  internationalExtraCharges,
  internationalRateTables,
  domesticRateTables,
  RateTable,
} from "@/lib/rates";
import { whatsappLink } from "@/lib/site";

function RateTableCard({ table }: { table: RateTable }) {
  return (
    <div className="overflow-hidden border border-line bg-white shadow-panel">
      <div className="border-b border-line p-5 sm:p-6">
        <h3 className="text-lg font-bold text-navy">{table.title}</h3>
        {table.description && (
          <p className="mt-1 text-sm text-slatey">{table.description}</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="whitespace-nowrap px-4 py-3 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {table.rows.map((row) => (
              <tr key={row[0]} className="hover:bg-offwhite">
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={`whitespace-nowrap px-4 py-3 ${
                      index === 0 ? "font-medium text-ink" : "text-slatey"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExtraChargesCard() {
  return (
    <div className="border border-line bg-white p-5 shadow-panel sm:p-6">
      <h3 className="text-lg font-bold text-navy">Extra charges</h3>
      <p className="mt-1 text-sm text-slatey">Additional charges listed in the rate sheet.</p>
      <dl className="mt-5 divide-y divide-line border-y border-line">
        {internationalExtraCharges.map(([item, price]) => (
          <div key={item} className="flex items-center justify-between gap-4 py-3 text-sm">
            <dt className="text-ink">{item}</dt>
            <dd className="font-semibold text-navy">{price}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function PricingTables() {
  const [category, setCategory] = useState<"domestic" | "international">("domestic");
  const [domesticIndex, setDomesticIndex] = useState(0);
  const [internationalIndex, setInternationalIndex] = useState(0);

  const isDomestic = category === "domestic";
  const activeTables = isDomestic ? domesticRateTables : internationalRateTables;
  const activeIndex = isDomestic ? domesticIndex : internationalIndex;
  const activeTable = activeTables[activeIndex];

  function chooseTable(index: number) {
    if (isDomestic) {
      setDomesticIndex(index);
    } else {
      setInternationalIndex(index);
    }
  }

  return (
    <Section id="walk-in-rates" className="bg-offwhite">
      <SectionHeading
        eyebrow="Walk-in rates"
        title="Clear rates before you book"
        description="Use these rates as a quick guide for common shipments. Final charges can vary with actual or volumetric weight, destination, packing and carrier rules."
      />

      <div className="mt-8">
        <div className="border border-line bg-white p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-dark">Choose a service</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {([
              ["domestic", "Domestic courier"],
              ["international", "International courier"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setCategory(value)}
                aria-pressed={category === value}
                className={`border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  category === value
                    ? "border-orange bg-orange text-white"
                    : "border-line bg-white text-navy hover:border-orange/50 hover:bg-orange/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slatey">Choose a rate type</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeTables.map((table, index) => (
                <button
                  key={table.title}
                  type="button"
                  onClick={() => chooseTable(index)}
                  aria-pressed={activeIndex === index}
                  className={`border px-3 py-2 text-sm font-medium transition-colors ${
                    activeIndex === index
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-slatey hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {table.title}
                </button>
              ))}
              {!isDomestic && (
                <button
                  type="button"
                  onClick={() => setInternationalIndex(internationalRateTables.length)}
                  aria-pressed={activeIndex === internationalRateTables.length}
                  className={`border px-3 py-2 text-sm font-medium transition-colors ${
                    activeIndex === internationalRateTables.length
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-slatey hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  Extra charges
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          {activeIndex === activeTables.length && !isDomestic ? (
            <ExtraChargesCard />
          ) : (
            <RateTableCard table={activeTable} />
          )}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-orange/30 bg-orange/5 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="max-w-2xl text-sm leading-relaxed text-ink">
            <strong>Need an exact quote?</strong> Send us the destination, parcel contents and weight. We&apos;ll confirm the applicable rate and delivery option before booking.
          </p>
          <Button href={whatsappLink("Hello GoGoa Logistics, I need a rate quote.")} external className="shrink-0">
            <WhatsAppIcon className="h-4 w-4" /> Get a quote
          </Button>
        </div>
      </div>
    </Section>
  );
}
