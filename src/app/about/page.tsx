import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section, { SectionHeading } from "@/components/ui/Section";
import ContactCta from "@/components/home/ContactCta";
import ServiceAreas from "@/components/home/ServiceAreas";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { whyChooseUs } from "@/lib/content";
import { dtdcFranchise } from "@/lib/services";
import { CheckIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About GoGoa Logistics — A Margao Courier You Can Reach",
  description:
    "GoGoa Logistics is a courier and logistics business based in Margao, Goa. Learn about how we work, our service areas across South and North Goa, and why customers trust us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GoGoa Logistics — A Margao Courier You Can Reach",
    description:
      "A courier and logistics business based in Margao, Goa, handling domestic and international shipping for individuals and businesses.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A Goa courier built on getting it there"
        intro="GoGoa Logistics is a courier and logistics business run out of Margao. We handle the everyday shipping that families, students, sellers and businesses across Goa depend on."
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      {/* Story */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our story" title="How we got here" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slatey">
              <p>
                GoGoa Logistics started the way a lot of good local businesses
                do — people kept asking for help getting things from one place
                to another, and we were good at it. What began as booking the
                occasional parcel grew into a full counter handling documents
                and shipments across India and overseas every single day.
              </p>
              <p>
                Goa sends a lot out into the world. Parents posting documents to
                children studying abroad, families sending gifts to relatives in
                the Gulf, shops dispatching orders to customers across the
                country, offices moving paperwork that cannot be late. We built
                GoGoa around those real, everyday needs — not around a slogan.
              </p>
              <p>
                As an authorised DTDC franchise, we pair a trusted national
                network with something a big network can&apos;t give you on its
                own: a local counter in Margao, a phone someone actually
                answers, and people who remember your shipment.
              </p>
            </div>
          </div>

          {/* Mission / Vision */}
          <div className="lg:col-span-5">
            <div className="border border-line bg-offwhite">
              <div className="border-b border-line p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-orange-dark">
                  Our mission
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  To be the courier in Goa people recommend without thinking
                  twice — because their parcels arrive, the price is fair, and
                  someone picks up the phone.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-orange-dark">
                  Our vision
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  A dependable shipping partner for every home and business
                  across South and North Goa, from a single document to daily
                  dispatch — without anyone ever feeling like a tracking number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DTDC franchise */}
      <Section className="bg-navy text-white" compact>
        <div className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange">
              Authorised partner
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              {dtdcFranchise.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
              {dtdcFranchise.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-4">
              <span className="grid h-12 w-12 place-items-center bg-orange text-lg font-extrabold text-white">
                D
              </span>
              <div className="text-left">
                <p className="text-sm font-bold">DTDC Franchise</p>
                <p className="text-xs text-white/60">Nationwide network</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why trust us */}
      <Section>
        <SectionHeading
          eyebrow="Why customers trust us"
          title="Plain reasons, not promises"
        />
        <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {whyChooseUs.map((reason) => (
            <div key={reason.title} className="bg-white p-6">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <h3 className="text-base font-bold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slatey">
                    {reason.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ServiceAreas />
      <ContactCta />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
    </>
  );
}
