/**
 * Central site configuration.
 *
 * Keep the contact details here as the single source of truth for the site.
 */

export const site = {
  name: "GoGoa Logistics",
  legalName: "GoGoa Logistics",
  tagline: "Courier & Logistics Services in Goa",
  domain: "gogoalogistics.com",
  url: "https://www.gogoalogistics.com",

  // --- Contact ---
  phoneDisplay: "+91 95459 22170",
  phoneHref: "tel:+919545922170",
  // wa.me requires the number in international format, digits only.
  whatsappNumber: "919545922170",
  email: "gogoalogistics1@gmail.com",

  // --- Address (replace with the exact counter address before launch) ---
  address: {
    line1: "Shop No. 00, Ground Floor",
    line2: "Near Municipal Market, Station Road",
    city: "Margao",
    region: "South Goa",
    state: "Goa",
    postalCode: "403601",
    country: "India",
  },

  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],

  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

/** Pre-built WhatsApp link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hello GoGoa Logistics, I would like to enquire about your courier services.";
