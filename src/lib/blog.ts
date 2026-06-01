export type BlogCategory =
  | "International Shipping"
  | "Courier Tips"
  | "Business Logistics"
  | "Goa Shipping Guides";

export const blogCategories: BlogCategory[] = [
  "International Shipping",
  "Courier Tips",
  "Business Logistics",
  "Goa Shipping Guides",
];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  /** ISO date string. */
  date: string;
  readingMinutes: number;
  /** Markdown-ish plain paragraphs. Kept simple for the starter blog. */
  body: string[];
};

/**
 * Seed posts. The structure is ready for an SEO content programme — add
 * entries here (or wire a CMS/MDX later) and the listing + detail pages
 * pick them up automatically.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "send-courier-from-goa-to-dubai",
    title: "How to Send a Courier from Goa to Dubai: Costs, Time and Customs",
    category: "International Shipping",
    excerpt:
      "A practical guide for Goa families sending documents and parcels to relatives in the UAE — what it costs, how long it takes and what you can legally send.",
    date: "2026-05-18",
    readingMinutes: 6,
    body: [
      "A large number of Goan families have relatives working in Dubai and across the UAE, and sending documents and small parcels is a regular need. This guide explains what to expect when you courier from Goa to Dubai.",
      "Cost depends on the weight and whether you choose a document service or a parcel service. Lightweight documents are usually the most economical option. Parcels are charged on the higher of the actual weight or the volumetric (dimensional) weight, so a light but bulky box can cost more than you expect. We give you the exact rate when you book — message us for a current quote.",
      "Delivery time to Dubai is typically a few working days door-to-door, depending on customs clearance. We will give you a realistic window at the time of booking rather than an optimistic one.",
      "Customs matters. Food items, liquids and certain gifts have restrictions. Bring an honest description of the contents and we will tell you upfront what can be sent and what duties may apply at the destination.",
      "To get a quote, message us on WhatsApp with the destination emirate, the rough weight and what you are sending. We will reply with the rate and the documents you need to bring.",
    ],
  },
  {
    slug: "packing-a-parcel-so-it-survives-transit",
    title: "Packing a Parcel So It Actually Survives Transit",
    category: "Courier Tips",
    excerpt:
      "Most transit damage is a packing problem, not a courier problem. Here is how we pack fragile and valuable items so they arrive in one piece.",
    date: "2026-05-04",
    readingMinutes: 4,
    body: [
      "When a parcel arrives damaged, it is usually because it was packed for the journey it imagined, not the journey it actually took. Here is how we think about packing.",
      "Use a box one size larger than the item and fill the gaps. Movement inside the box is what breaks things. Bubble wrap, crumpled paper or foam keeps the contents from shifting.",
      "Wrap fragile items individually and keep them away from the box walls and corners, which take the hardest knocks during handling.",
      "Seal with proper packing tape along every seam in an H-pattern. Do not rely on a single strip of cello tape.",
      "Label clearly and remove old labels or barcodes from reused boxes so they are not scanned by mistake. If you are not sure, drop the item at our counter and we will pack it for you.",
    ],
  },
  {
    slug: "setting-up-dispatch-for-a-goa-online-store",
    title: "Setting Up Reliable Dispatch for a Goa Online Store",
    category: "Business Logistics",
    excerpt:
      "If you sell online from Goa, your dispatch process decides your reviews. Here is a simple, dependable setup for small sellers.",
    date: "2026-04-21",
    readingMinutes: 5,
    body: [
      "For an online seller, shipping is not an afterthought — late or damaged deliveries turn into bad reviews and returns. A simple, repeatable dispatch process fixes most of this.",
      "Fix a daily pickup slot. A scheduled evening pickup means orders go out the same day instead of waiting for someone to make a counter run.",
      "Standardise your packing materials so every order is packed the same way and you can predict your packing cost per order.",
      "Decide your COD policy. Cash-on-delivery increases conversions for many Indian buyers but adds remittance and return handling — we manage both for sellers we work with.",
      "Keep your docket numbers in one place so you can answer 'where is my order' instantly. We can set you up on monthly billing so the accounting stays clean.",
    ],
  },
  {
    slug: "courier-options-across-south-and-north-goa",
    title: "Courier Options Across South and North Goa: A Local Guide",
    category: "Goa Shipping Guides",
    excerpt:
      "Pickup areas, counter timings and the fastest way to book from Margao, Navelim and across Goa.",
    date: "2026-04-07",
    readingMinutes: 4,
    body: [
      "Goa is small, but courier convenience still depends on where you are and how you book. This is a quick local guide.",
      "Our counter is in Margao, which keeps South Goa — Navelim, Fatorda, Colva, Benaulim, Cuncolim and nearby — within easy reach for same-day pickup when you book early.",
      "We also serve North Goa, including Panaji, Mapusa, Porvorim and the Calangute–Candolim belt. Pickups there are scheduled, so a little notice helps.",
      "The fastest way to book is WhatsApp: send the destination, rough weight and contents and you will get a quote back quickly. You can also call the counter or walk in.",
      "For regular senders and businesses, we set up fixed pickup slots so you never have to think about it.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function postsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
