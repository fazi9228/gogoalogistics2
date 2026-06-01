"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { MenuIcon, CloseIcon, WhatsAppIcon, PhoneIcon } from "@/components/ui/Icon";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center border border-line text-navy"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-navy-dark/50"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-slatey">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center border border-line text-navy"
                aria-label="Close menu"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-2 py-2">
              {primaryNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b border-line px-3 py-4 text-base font-semibold ${
                      active ? "text-orange-dark" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-3 border-t border-line p-4">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 bg-orange font-semibold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 border border-navy font-semibold text-navy"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
