export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  businessValue: string;
}

export const services: Service[] = [
  {
    slug: "online-grocery-marketplace",
    name: "Online Grocery Marketplace",
    icon: "ShoppingBasket",
    shortDescription:
      "A curated online marketplace connecting consumers with fresh produce and grocery essentials.",
    businessValue: "Wider reach for suppliers, consistent quality for customers.",
  },
  {
    slug: "fresh-produce-supply",
    name: "Fresh Produce Supply",
    icon: "Leaf",
    shortDescription:
      "Reliable supply of fresh fruits and vegetables sourced through a verified farmer network.",
    businessValue: "Consistent quality and availability across seasons.",
  },
  {
    slug: "farm-to-home-delivery",
    name: "Farm-to-Home Delivery",
    icon: "Truck",
    shortDescription:
      "Direct delivery model that shortens the journey from farm to your doorstep.",
    businessValue: "Fresher produce with fewer intermediaries.",
  },
  {
    slug: "b2b-supply",
    name: "B2B Supply",
    icon: "Building2",
    shortDescription:
      "Structured supply programs for retailers, restaurants and institutions.",
    businessValue: "Predictable sourcing and volume-based reliability.",
  },
  {
    slug: "wholesale-trading",
    name: "Wholesale Trading",
    icon: "Warehouse",
    shortDescription:
      "Bulk trading of agricultural produce and grocery staples for business buyers.",
    businessValue: "Competitive bulk pricing with quality assurance.",
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    icon: "Package",
    shortDescription:
      "Strategically located warehousing infrastructure for efficient inventory management.",
    businessValue: "Reduced spoilage and faster order fulfilment.",
  },
  {
    slug: "cold-storage",
    name: "Cold Storage",
    icon: "Snowflake",
    shortDescription:
      "Temperature-controlled storage to preserve freshness of perishable produce.",
    businessValue: "Extended shelf life and reduced wastage.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    shortDescription:
      "End-to-end logistics coordination across the agri supply chain.",
    businessValue: "Timely movement of goods from origin to destination.",
  },
  {
    slug: "distribution",
    name: "Distribution",
    icon: "Network",
    shortDescription:
      "Structured distribution network covering multiple service locations.",
    businessValue: "Wider market access for producers and suppliers.",
  },
  {
    slug: "export-support",
    name: "Export Support",
    icon: "Ship",
    shortDescription:
      "Support services for agricultural produce aiming for export-ready standards.",
    businessValue: "Improved market access beyond domestic demand.",
  },
  {
    slug: "procurement-services",
    name: "Procurement Services",
    icon: "ClipboardList",
    shortDescription:
      "Structured procurement directly from farmers and verified suppliers.",
    businessValue: "Fair sourcing with quality and traceability focus.",
  },
  {
    slug: "supply-chain-solutions",
    name: "Supply Chain Solutions",
    icon: "Workflow",
    shortDescription:
      "Technology-enabled supply chain solutions connecting every stakeholder.",
    businessValue: "Improved efficiency, visibility and reliability end-to-end.",
  },
];
