import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ContactCta from "@/components/home/ContactCta";
import HowItWorks from "@/components/home/HowItWorks";
import { Button } from "@/components/ui/Button";
import { ServiceIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/Icon";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Courier & Logistics Services in Goa | GoGoa Logistics",
  description:
    "Domestic and international courier, document and parcel delivery, e-commerce shipping and business logistics across Goa. Doorstep pickup in Margao, Navelim and beyond.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Courier & Logistics Services in Goa | GoGoa Logistics",
    description:
      "Domestic and international courier, document and parcel delivery, e-commerce shipping and business logistics across Goa.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Courier & logistics services across Goa"
        intro="Whatever you need to send and wherever it's going, there's a service for it below. Not sure which one fits? Message us and we'll point you to the right option."
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      <Section>
        <div className="space-y-px border border-line bg-line">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-12">
                {/* Title + icon */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-line bg-offwhite text-navy">
                      <ServiceIcon name={service.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-bold leading-tight text-navy">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Description + benefits */}
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-slatey">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-3">
                  <div className="flex h-full flex-col justify-center gap-2.5 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <Button
                      href={whatsappLink(
                        `Hello GoGoa Logistics, I'd like to enquire about ${service.title}.`
                      )}
                      external
                      variant="primary"
                      className="w-full"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enquire
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="w-full"
                    >
                      Request a quote
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <HowItWorks />
      <ContactCta />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
    </>
  );
}
