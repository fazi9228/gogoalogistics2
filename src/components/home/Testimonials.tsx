import Section, { SectionHeading } from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Customer feedback"
        title="What Goa senders say"
        description="A few words from individuals and businesses we ship for."
      />

      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col bg-white p-6 sm:p-7"
          >
            <div className="mb-3 flex gap-0.5 text-orange" aria-hidden>
              {"★★★★★"}
            </div>
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 border-t border-line pt-3 text-sm">
              <span className="font-bold text-navy">{t.name}</span>
              <span className="text-slatey"> · {t.location}</span>
              <span className="mt-0.5 block text-xs uppercase tracking-wide text-mute">
                {t.context}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
