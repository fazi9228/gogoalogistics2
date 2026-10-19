export type RateTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
};

export const domesticRateTables: RateTable[] = [
  {
    title: "Documents",
    description: "Walk-in rates for domestic documents and small parcels.",
    columns: ["Destination", "250 g", "500 g", "1 kg", "2 kg"],
    rows: [
      ["Goa", "₹60", "₹80", "₹120", "₹240"],
      ["Karnataka / Mumbai / Pune", "₹120", "₹180", "₹220", "₹350"],
      ["Maharashtra and Gujarat", "₹150", "₹200", "₹250", "₹450"],
      ["South India", "₹200", "₹220", "₹300", "₹450"],
      ["Delhi, Kolkata, UP, Rajasthan", "₹200", "₹220", "₹350", "₹500"],
      ["North India", "₹200", "₹250", "₹400", "₹600"],
      ["Jammu & Kashmir", "₹220", "₹280", "₹500", "₹650"],
      ["North East", "₹250", "₹400", "₹600", "₹700"],
    ],
  },
  {
    title: "Surface per kg",
    columns: ["Destination", "Up to 3 kg", "Up to 10 kg", "Up to 25 kg", "Up to 50 kg"],
    rows: [
      ["Goa", "₹60", "₹60", "₹50", "₹50"],
      ["Maharashtra and Gujarat", "₹150", "₹150", "₹120", "₹100"],
      ["Karnataka / Mumbai / Pune", "₹120", "₹120", "₹80", "₹70"],
      ["South India", "₹150", "₹150", "₹120", "₹90"],
      ["Delhi, Kolkata, UP, Rajasthan", "₹160", "₹160", "₹130", "₹120"],
      ["North India", "₹180", "₹160", "₹140", "₹140"],
      ["Jammu & Kashmir", "₹220", "₹220", "₹210", "₹190"],
      ["North East", "₹240", "₹230", "₹210", "₹190"],
    ],
  },
  {
    title: "Air per kg",
    columns: ["Destination", "Up to 3 kg", "Up to 10 kg", "Up to 25 kg", "Up to 50 kg"],
    rows: [
      ["Maharashtra", "₹220", "₹220", "₹200", "₹150"],
      ["Karnataka", "₹220", "₹200", "₹180", "₹170"],
      ["South India / Gujarat", "₹250", "₹250", "₹200", "₹190"],
      ["Delhi, Kolkata, UP, Rajasthan", "₹280", "₹250", "₹230", "₹220"],
      ["North India", "₹280", "₹270", "₹250", "₹240"],
      ["Jammu & Kashmir", "₹300", "₹290", "₹270", "₹250"],
      ["North East", "₹340", "₹330", "₹310", "₹290"],
    ],
  },
];

export const internationalRateTables: RateTable[] = [
  {
    title: "Standard international",
    description: "Standard rates. Aadhaar and PAN may be required for booking.",
    columns: ["Destination", "DOX", "1 kg", "DHL 500 g"],
    rows: [
      ["United Kingdom", "₹2,200", "₹3,600", "₹4,200"],
      ["United States of America", "₹3,400", "₹3,950", "₹4,800"],
      ["Canada", "₹3,500", "₹4,200", "₹4,500"],
      ["Dubai", "₹1,200", "₹2,000", "₹3,750"],
    ],
  },
  {
    title: "International bulk rates",
    description: "Per-kg rates for larger shipments.",
    columns: ["Destination", "6 kg+", "11 kg+", "21 kg+"],
    rows: [
      ["United Kingdom", "₹550/kg", "₹400/kg", "₹400/kg"],
      ["United States of America", "₹1,200/kg", "₹950/kg", "₹930/kg"],
      ["Canada (sausage)", "₹1,400/kg", "₹1,100/kg", "₹1,050/kg"],
      ["Republic of Ireland", "₹1,100/kg", "₹800/kg", "₹750/kg"],
      ["Rest of Europe", "₹1,200/kg", "₹850/kg", "₹800/kg"],
      ["Dubai", "₹350/kg", "₹300/kg", "₹280/kg"],
    ],
  },
  {
    title: "Medicine shipments",
    description: "International medicine rates; supporting documents are required.",
    columns: ["Destination", "500 g", "1 kg", "1.5 kg"],
    rows: [
      ["United Kingdom", "₹3,500", "₹4,500", "₹5,200"],
      ["United States of America", "₹4,200", "₹4,700", "₹5,400"],
      ["Canada", "₹4,500", "₹5,500", "₹6,200"],
      ["Dubai", "₹3,500", "₹4,500", "₹5,200"],
    ],
  },
];

export const internationalExtraCharges = [
  ["Dry fish", "₹1,200"],
  ["Vinegar", "₹500/litre"],
  ["Electronics", "₹1,200"],
  ["Cosmetics", "₹1,200"],
  ["Ghee", "₹1,200"],
];
