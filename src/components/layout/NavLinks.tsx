"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {primaryNav.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
              active
                ? "text-navy"
                : "text-slatey hover:text-navy"
            }`}
          >
            {item.label}
            <span
              className={`absolute inset-x-3 -bottom-px h-0.5 bg-orange transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </Link>
        );
      })}
    </nav>
  );
}
