export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqs: FAQCategory[] = [
  {
    category: "Products",
    items: [
      {
        question: "What kind of products does Freshira offer?",
        answer:
          "Freshira offers a wide range of fresh fruits, vegetables, organic products, grains, spices, dairy, dry fruits, beverages and everyday grocery essentials sourced through a verified supply network.",
      },
      {
        question: "Are products sourced directly from farmers?",
        answer:
          "Freshira works with a network of farmers, suppliers and verified vendors to source produce as directly as possible within its supply chain model.",
      },
    ],
  },
  {
    category: "Freshness",
    items: [
      {
        question: "How is freshness maintained during delivery?",
        answer:
          "Produce moves through a structured cold-chain and logistics process designed to preserve freshness from procurement to delivery.",
      },
      {
        question: "What happens if a product isn't fresh on arrival?",
        answer:
          "Customers can raise a concern through customer support, and eligible cases are handled as per the Freshira return and refund policy.",
      },
    ],
  },
  {
    category: "Delivery",
    items: [
      {
        question: "What are the delivery timelines?",
        answer:
          "Delivery timelines vary by location and product category. Estimated timelines are shown during the demo checkout process.",
      },
      {
        question: "Do you deliver to all locations?",
        answer:
          "Freshira is expanding its service locations progressively. Availability by pin code will be reflected in the platform experience.",
      },
    ],
  },
  {
    category: "Orders",
    items: [
      {
        question: "How do I place an order?",
        answer:
          "Browse products, add items to your cart, and proceed through the checkout flow to place a demo order on this showcase platform.",
      },
      {
        question: "Can I modify an order after placing it?",
        answer:
          "In a production environment, order modification would be available within a limited window after placement, subject to processing status.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        question: "What payment methods are supported?",
        answer:
          "This showcase supports demo selections for UPI, Credit/Debit Card, Net Banking and Cash on Delivery. No real payment processing occurs.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "As this is a frontend showcase, no real payment information is collected or processed.",
      },
    ],
  },
  {
    category: "Returns",
    items: [
      {
        question: "What is the return policy?",
        answer:
          "Please refer to our Return Policy and Refund Policy pages for detailed, general guidance suitable for perishable and non-perishable goods.",
      },
      {
        question: "How long does a refund take?",
        answer:
          "Refund timelines depend on the payment method and are outlined generally in our Refund Policy page.",
      },
    ],
  },
  {
    category: "B2B Supply",
    items: [
      {
        question: "Does Freshira support bulk or wholesale orders?",
        answer:
          "Yes, Freshira offers B2B supply, wholesale trading and procurement services for retailers, restaurants and institutions.",
      },
      {
        question: "How can a business start sourcing from Freshira?",
        answer:
          "Businesses can reach out through the Contact page to discuss requirements with the Freshira team.",
      },
    ],
  },
  {
    category: "Procurement",
    items: [
      {
        question: "How does Freshira procure produce?",
        answer:
          "Freshira procures through a network of farmers and suppliers, with quality checks built into the procurement process.",
      },
    ],
  },
  {
    category: "Storage",
    items: [
      {
        question: "How is produce stored before delivery?",
        answer:
          "Produce is stored using appropriate warehousing and cold-storage practices depending on the product category.",
      },
    ],
  },
  {
    category: "Customer Support",
    items: [
      {
        question: "How can I reach customer support?",
        answer:
          "You can reach out via the Contact page using the details provided, including the contact form and WhatsApp option.",
      },
    ],
  },
];
