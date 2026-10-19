import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { primaryNav } from "@/lib/nav";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/ui/Icon";

export default function Footer() {
  const year = 2026; // Static to keep build deterministic; bump as needed.

  return (
    <footer className="border-t-4 border-orange bg-navy text-white/80">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Courier and logistics services across Goa — domestic and
            international shipping, document and parcel delivery, and dispatch
            support for businesses. Authorised DTDC franchise.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Pages
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-orange">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.city},{" "}
                {site.address.region} {site.address.postalCode}
              </span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href={site.phoneHref} className="hover:text-orange">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href={`mailto:${site.email}`} className="hover:text-orange">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>
                Mon–Sat 9:00–20:00
                <br />
                Sun 10:00–14:00
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Serving Margao, Navelim, South Goa &amp; North Goa. ·{" "}
            <span className="text-white/40">
              Address shown is a placeholder — update before launch.
            </span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
