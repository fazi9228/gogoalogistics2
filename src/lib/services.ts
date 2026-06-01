export type Service = {
  slug: string;
  title: string;
  /** One-line summary used in grids and listings. */
  summary: string;
  /** Longer paragraph used on the services page. */
  description: string;
  benefits: string[];
  /** Simple line-icon key handled by the Icon component. */
  icon:
    | "domestic"
    | "international"
    | "business"
    | "document"
    | "ecommerce"
    | "express";
};

export const services: Service[] = [
  {
    slug: "domestic-courier",
    title: "Domestic Courier",
    summary:
      "Parcels and packages to every state in India, with daily pickups across Goa.",
    description:
      "Send parcels anywhere in India from our Margao counter or with a doorstep pickup. We book through established networks for reliable transit to metros, tier-2 cities and smaller towns alike. Whether it is a single packet for a family member or regular dispatches for your shop, you get a docket number, transit updates and a clear delivery timeline.",
    benefits: [
      "Daily pickups across South & North Goa",
      "Surface and air options to suit budget and urgency",
      "Docket number and tracking for every shipment",
      "Cash, UPI and account billing accepted",
    ],
    icon: "domestic",
  },
  {
    slug: "international-courier",
    title: "International Courier",
    summary:
      "Documents and parcels to the Gulf, UK, USA, Europe and beyond.",
    description:
      "Goa families and students send a lot abroad — to relatives in the Gulf, children studying in the UK or Australia, and customers overseas. We handle international documents and parcels with proper customs paperwork, weight-based quoting and trusted carriers. We will tell you upfront what can and cannot be sent, the duties involved, and the realistic delivery window.",
    benefits: [
      "Door-to-door service to 200+ countries",
      "Help with customs declarations and invoicing",
      "Honest weight and volumetric quoting before you commit",
      "Specialised handling for food items and gifts (where permitted)",
    ],
    icon: "international",
  },
  {
    slug: "business-logistics",
    title: "Business Logistics Solutions",
    summary:
      "Scheduled pickups, bulk dispatch and monthly billing for shops and offices.",
    description:
      "If you dispatch regularly, walking to a counter every day does not make sense. We set up scheduled daily pickups, handle bulk bookings, and put you on monthly account billing so your team can focus on the business. Suitable for retailers, distributors, clinics, hotels and offices across Goa that need a dependable dispatch partner.",
    benefits: [
      "Fixed daily or weekly pickup slots",
      "Bulk booking and consolidated manifests",
      "Monthly invoicing with a single point of contact",
      "Negotiated rates based on volume",
    ],
    icon: "business",
  },
  {
    slug: "document-delivery",
    title: "Document Delivery",
    summary:
      "Cheques, agreements, certificates and legal papers — handled with care.",
    description:
      "Time-sensitive and confidential documents need a careful hand. We move cheques, property papers, agreements, academic certificates and legal notices both within Goa and across India, with proof of delivery on request. Lightweight document rates keep the cost low for what matters most.",
    benefits: [
      "Economical document-rate pricing",
      "Proof of delivery available",
      "Tamper-evident packing for sensitive papers",
      "Same-day options within Margao and nearby areas",
    ],
    icon: "document",
  },
  {
    slug: "ecommerce-shipping",
    title: "E-commerce Shipping",
    summary:
      "Pickup, packing and dispatch for online sellers — including COD remittance.",
    description:
      "Selling on marketplaces or your own store from Goa? We pick up from your location, pack securely and dispatch to your buyers across India. We assist with COD shipments and remittance, returns handling and the volume rates that make small-seller economics work.",
    benefits: [
      "Doorstep pickup from your home or warehouse",
      "Cash-on-delivery booking and remittance support",
      "Secure packing to reduce transit damage and returns",
      "Volume pricing for regular sellers",
    ],
    icon: "ecommerce",
  },
  {
    slug: "express-delivery",
    title: "Express Delivery",
    summary:
      "Priority air shipments when the parcel simply has to be there fast.",
    description:
      "When a shipment is urgent, we book it on priority air services for the fastest realistic delivery to major Indian cities. We will be straight with you about cut-off times and what is achievable for next-day or time-definite delivery so there are no surprises.",
    benefits: [
      "Priority air handling to metro cities",
      "Clear cut-off times communicated upfront",
      "Time-definite delivery where the network supports it",
      "Tracking and delivery confirmation",
    ],
    icon: "express",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** DTDC franchise is presented separately as a partnership, not a core service card. */
export const dtdcFranchise = {
  title: "Authorised DTDC Franchise Services",
  description:
    "GoGoa Logistics operates as a DTDC franchise outlet in Goa. That means you get DTDC's nationwide booking and tracking network combined with a local counter you can actually walk into and a person who answers the phone. Book DTDC domestic and international shipments with us directly.",
};
