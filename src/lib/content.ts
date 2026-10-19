/** Shared content collections: areas, process, why-choose-us, testimonials, FAQs. */

export const serviceAreas = {
  southGoa: [
    "Margao",
    "Navelim",
    "Fatorda",
    "Colva",
    "Benaulim",
    "Cuncolim",
    "Quepem",
    "Ponda",
    "Vasco da Gama",
  ],
  northGoa: [
    "Panaji",
    "Mapusa",
    "Calangute",
    "Candolim",
    "Porvorim",
    "Bicholim",
    "Bardez",
  ],
};

export type Step = {
  number: string;
  title: string;
  detail: string;
};

export const howItWorks: Step[] = [
  {
    number: "01",
    title: "Tell us what you're sending",
    detail:
      "Message us on WhatsApp or call the counter with the destination, rough weight and contents. We give you a clear rate and the realistic delivery time.",
  },
  {
    number: "02",
    title: "Pickup or drop-off",
    detail:
      "Drop the parcel at our Margao counter, or book a doorstep pickup across South and North Goa. We pack it properly if it needs it.",
  },
  {
    number: "03",
    title: "Booked & tracked",
    detail:
      "We book the shipment, hand you a docket number and share tracking. For international parcels we sort out the customs paperwork with you.",
  },
  {
    number: "04",
    title: "Delivered & confirmed",
    detail:
      "Your shipment moves through the network to its destination. We follow up on anything that gets stuck and confirm delivery on request.",
  },
];

export type Reason = {
  title: string;
  detail: string;
};

export const whyChooseUs: Reason[] = [
  {
    title: "Clear rates before booking",
    detail:
      "We book through established networks and follow up on shipments that need chasing. A parcel that actually arrives is worth more than a rate that looks good on paper.",
  },
  {
    title: "A local counter in Margao",
    detail:
      "We are a Goa counter run by people from here. Call us, WhatsApp us, or walk in — you talk to someone who knows your shipment, not a call centre.",
  },
  {
    title: "Pickup and drop-off options",
    detail:
      "Quotes on WhatsApp within working hours, usually in minutes. Same-day pickup across Margao and nearby areas when you book early.",
  },
  {
    title: "Domestic and international options",
    detail:
      "We quote surface and air options so you choose the trade-off. No padded charges, and account rates for businesses that ship regularly.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I send documents to my son in Dubai almost every month. They always tell me the correct charges first and the parcel reaches on time. No tension.",
    name: "Maria F.",
    location: "Navelim",
    context: "International documents",
  },
  {
    quote:
      "We run a small boutique and ship orders all over India. GoGoa picks up from our shop every evening and the monthly billing makes accounting simple.",
    name: "Sandeep K.",
    location: "Fatorda, Margao",
    context: "E-commerce seller",
  },
  {
    quote:
      "Needed property papers sent to Pune urgently. They packed it carefully, gave me the docket number and it was delivered next day. Very dependable.",
    name: "Rajesh N.",
    location: "Ponda",
    context: "Document delivery",
  },
  {
    quote:
      "Honest about what can be couriered abroad and what cannot. They saved me from a customs problem by explaining everything before booking.",
    name: "Pooja D.",
    location: "Colva",
    context: "International parcel",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Do you offer doorstep pickup, or do I have to come to the counter?",
    answer:
      "Both. You can drop your parcel at our Margao counter, or book a doorstep pickup across South Goa and most of North Goa. Book early in the day for same-day pickup near Margao.",
  },
  {
    question: "How are courier charges calculated?",
    answer:
      "Charges are based on the actual weight or the volumetric (dimensional) weight, whichever is higher, plus the destination and the service level you choose — surface or air. We always give you the rate before booking, with no hidden additions.",
  },
  {
    question: "Which countries can I send parcels to?",
    answer:
      "We send documents and parcels to most countries, including the Gulf, UK, USA, Canada, Australia and across Europe. Some items and destinations have restrictions, so message us with the contents and we will confirm what is allowed and the duties involved.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "Yes. Every booking comes with a docket / tracking number. You can track it through the carrier's tracking page, and you are welcome to call or WhatsApp us and we will check the status for you.",
  },
  {
    question: "Do you handle cash-on-delivery (COD) for online sellers?",
    answer:
      "Yes. For e-commerce sellers we book COD shipments and handle the remittance back to you. Talk to us about volume rates if you ship regularly.",
  },
  {
    question: "Are you an authorised DTDC franchise?",
    answer:
      "Yes, GoGoa Logistics operates as a DTDC franchise outlet in Goa, so you get DTDC's nationwide network with a local counter and a real person to deal with.",
  },
  {
    question: "How quickly will I get a quote?",
    answer:
      "Within working hours we usually reply on WhatsApp in a few minutes. You can also call the counter for an immediate quote.",
  },
];
