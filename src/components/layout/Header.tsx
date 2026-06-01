import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "@/components/ui/Icon";

/**
 * Two-row sticky header — the "operations desk" signature.
 * Row 1 (navy utility strip): phone, email, hours.
 * Row 2 (white nav bar): logo, nav, primary CTA.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* Utility strip */}
      <div className="hidden bg-navy text-white md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-white/85 hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-orange" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white"
            >
              <MailIcon className="h-3.5 w-3.5 text-orange" />
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            <ClockIcon className="h-3.5 w-3.5 text-orange" />
            <span>Mon–Sat 9:00–20:00 · Sun 10:00–14:00</span>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-2">
            <NavLinks />

            <div className="hidden items-center gap-2 pl-3 lg:flex">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center gap-1.5 border border-navy/25 px-3 text-sm font-semibold text-navy hover:border-navy hover:bg-navy/5"
              >
                Get a Quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 bg-orange px-4 text-sm font-semibold text-white hover:bg-orange-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
