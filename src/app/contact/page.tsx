import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/ui/Icon";
import {
  site,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact GoGoa Logistics — Courier in Margao, Goa",
  description:
    "Get a courier quote or book a pickup with GoGoa Logistics in Margao, Goa. Reach us by WhatsApp, phone, email or the enquiry form. Serving South and North Goa.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GoGoa Logistics — Courier in Margao, Goa",
    description:
      "Get a courier quote or book a pickup with GoGoa Logistics in Margao, Goa.",
    url: "/contact",
  },
};

const addr = site.address;
const mapsQuery = encodeURIComponent(
  `${addr.line2}, ${addr.city}, ${addr.region}, ${addr.state} ${addr.postalCode}`
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        intro="Tell us what you're sending and where it's going. We'll come back with a clear rate — usually within minutes during working hours."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: contact details */}
          <div className="lg:col-span-5">
            <h2 className="text-xl font-bold text-navy">Reach us directly</h2>
            <p className="mt-2 text-sm leading-relaxed text-slatey">
              WhatsApp is the fastest way to get a quote. Prefer to talk or
              walk in? Our counter details are below.
            </p>

            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 bg-[#25D366] text-sm font-semibold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <dl className="mt-6 divide-y divide-line border border-line">
              <div className="flex gap-3 p-4">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="text-sm font-medium text-navy hover:text-orange-dark"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 p-4">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-medium text-navy hover:text-orange-dark"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 p-4">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
                    Counter address
                  </dt>
                  <dd className="text-sm font-medium text-navy">
                    {addr.line1}, {addr.line2},<br />
                    {addr.city}, {addr.region}, {addr.state} {addr.postalCode}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 p-4">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
                    Working hours
                  </dt>
                  <dd className="text-sm font-medium text-navy">
                    {site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <h2 className="mb-4 text-xl font-bold text-navy">
              Send an enquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-offwhite" compact>
        <h2 className="text-xl font-bold text-navy">Find our counter</h2>
        <p className="mt-2 max-w-2xl text-sm text-slatey">
          We&apos;re in {addr.city}, {addr.region}. The map below is a
          placeholder — replace the embed URL in{" "}
          <code className="bg-line px-1 py-0.5 text-xs">
            src/app/contact/page.tsx
          </code>{" "}
          with your exact Google Maps location.
        </p>
        <div className="mt-5 overflow-hidden border border-line bg-white">
          <iframe
            title={`Map showing GoGoa Logistics in ${addr.city}, Goa`}
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </Section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </>
  );
}
