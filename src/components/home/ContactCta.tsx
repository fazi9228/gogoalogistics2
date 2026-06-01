import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "@/components/ui/Icon";
import { site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function ContactCta() {
  return (
    <section className="bg-orange">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center lg:py-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Have something to send? Let&apos;s get it moving.
          </h2>
          <p className="mt-2 text-base text-white/90">
            Message us with the destination and rough weight and we&apos;ll come
            back with a clear rate — usually within minutes during working hours.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/95">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <Button
            href={whatsappLink(defaultWhatsappMessage)}
            external
            size="lg"
            variant="secondary"
            className="border-white/0"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp us
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border-white bg-white text-navy hover:bg-offwhite"
          >
            Contact form
          </Button>
        </div>
      </Container>
    </section>
  );
}
