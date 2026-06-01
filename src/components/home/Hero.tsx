import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  WhatsAppIcon,
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/Icon";
import {
  site,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/site";
import { services } from "@/lib/services";

const trustPoints = [
  "Daily pickups across Goa",
  "Domestic & international",
  "Authorised DTDC franchise",
];

export default function Hero() {
  return (
    <section className="border-b border-line bg-navy text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-12 lg:py-16">
        {/* Left: proposition */}
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            <span className="h-1.5 w-1.5 bg-orange" aria-hidden />
            Based in Margao · Serving all of Goa
          </div>

          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Courier &amp; logistics in Goa,{" "}
            <span className="text-orange">done properly.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            From a single document to your daily business dispatch — GoGoa
            Logistics handles domestic and international courier, parcel and
            document delivery and e-commerce shipping from our Margao counter.
            Clear rates, real tracking, and a local team you can actually reach.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink(defaultWhatsappMessage)}
              external
              size="lg"
              variant="primary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enquire on WhatsApp
            </Button>
            <Button href={site.phoneHref} external size="lg" variant="ghost">
              <PhoneIcon className="h-5 w-5" />
              Call {site.phoneDisplay}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <CheckIcon className="h-4 w-4 text-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: service snapshot panel */}
        <div className="lg:col-span-5">
          <div className="border border-white/15 bg-white">
            <div className="flex items-center justify-between border-b border-line bg-offwhite px-4 py-3">
              <span className="text-sm font-bold uppercase tracking-wider text-navy">
                What can we send for you?
              </span>
            </div>
            <ul className="divide-y divide-line">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex items-center justify-between px-4 py-3 hover:bg-offwhite"
                  >
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {s.title}
                      </p>
                      <p className="text-xs text-slatey">{s.summary}</p>
                    </div>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-mute group-hover:text-orange" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-4">
              <Link
                href="/contact"
                className="flex h-11 w-full items-center justify-center gap-2 bg-navy text-sm font-semibold text-white hover:bg-navy-light"
              >
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
