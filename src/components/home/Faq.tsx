"use client";

import { useState } from "react";
import Section, { SectionHeading } from "@/components/ui/Section";
import { ChevronDownIcon } from "@/components/ui/Icon";
import { faqs as defaultFaqs, type Faq as FaqType } from "@/lib/content";

export default function Faq({
  items = defaultFaqs,
  withSectionWrapper = true,
}: {
  items?: FaqType[];
  withSectionWrapper?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const list = (
    <div className="mt-8 divide-y divide-line border-y border-line">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-base font-semibold text-navy">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-orange transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <p className="pb-5 pr-8 text-sm leading-relaxed text-slatey">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );

  if (!withSectionWrapper) {
    return (
      <>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="The things people ask us most often. Anything else — just message us."
        />
        {list}
      </>
    );
  }

  return (
    <Section className="bg-offwhite">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        description="The things people ask us most often. Anything else — just message us."
      />
      {list}
    </Section>
  );
}
