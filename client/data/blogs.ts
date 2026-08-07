export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-sustainable-farming-in-india",
    title: "The Future of Sustainable Farming in India",
    category: "Sustainable Farming",
    excerpt:
      "How technology-enabled supply chains are helping Indian farmers adopt more sustainable practices.",
    content: [
      "Sustainable farming is increasingly becoming central to how India grows and moves its food. Technology-enabled platforms are helping farmers access better practices, fair procurement and consistent demand.",
      "By connecting farmers directly with structured supply chains, wastage is reduced and produce reaches consumers faster and fresher.",
    ],
    date: "2025-03-12",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    slug: "how-agri-tech-is-transforming-supply-chains",
    title: "How Agri-Tech Is Transforming Supply Chains",
    category: "Agricultural Technology",
    excerpt:
      "A look at how digital platforms are streamlining the journey of produce from farms to homes.",
    content: [
      "Agricultural technology is reshaping how produce moves through the supply chain — from procurement planning to last-mile delivery.",
      "Data-driven demand forecasting and structured logistics are reducing inefficiencies across the value chain.",
    ],
    date: "2025-02-20",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    slug: "innovations-in-supply-chain-for-fresh-produce",
    title: "Innovations in Supply Chain for Fresh Produce",
    category: "Supply Chain Innovation",
    excerpt:
      "Exploring cold-chain logistics and how they help preserve the freshness of perishable produce.",
    content: [
      "Preserving freshness from farm to consumer requires careful coordination across storage, transport and handling.",
      "Investments in cold-chain infrastructure are helping reduce spoilage significantly across the supply journey.",
    ],
    date: "2025-01-18",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    slug: "why-fresh-produce-matters-for-healthy-living",
    title: "Why Fresh Produce Matters for Healthy Living",
    category: "Fresh Produce",
    excerpt: "Understanding the nutritional benefits of consuming fresh, seasonal produce.",
    content: [
      "Fresh, seasonal produce retains more nutrients and flavour compared to produce that travels long distances or sits in storage.",
      "Choosing seasonal fruits and vegetables also supports local farming communities.",
    ],
    date: "2024-12-22",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    slug: "smart-food-storage-tips-for-households",
    title: "Smart Food Storage Tips for Households",
    category: "Food Storage",
    excerpt: "Practical tips to store fruits, vegetables and grains for longer freshness at home.",
    content: [
      "Proper storage can significantly extend the shelf life of fresh produce and pantry staples.",
      "Simple practices like temperature control and appropriate packaging make a meaningful difference.",
    ],
    date: "2024-11-30",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    slug: "the-importance-of-farmer-first-sourcing",
    title: "The Importance of Farmer-First Sourcing",
    category: "Farmer Sourcing",
    excerpt: "Why direct sourcing from farmers benefits both producers and consumers.",
    content: [
      "Farmer-first sourcing models help ensure fair pricing for growers while maintaining transparency for consumers.",
      "This approach also strengthens long-term relationships across the agri value chain.",
    ],
    date: "2024-11-05",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    slug: "trends-shaping-indias-grocery-industry",
    title: "Trends Shaping India's Grocery Industry",
    category: "Grocery Industry",
    excerpt: "An overview of how consumer preferences and technology are reshaping grocery retail.",
    content: [
      "India's grocery industry is evolving rapidly with rising demand for quality, convenience and transparency.",
      "Technology-enabled platforms are playing a key role in meeting these expectations at scale.",
    ],
    date: "2024-10-14",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/freshira-blog-7/1200/700",
  },
  {
    id: 8,
    slug: "logistics-challenges-in-agri-commerce",
    title: "Logistics Challenges in Agri-Commerce",
    category: "Logistics",
    excerpt: "Understanding the complexities of moving perishable goods efficiently across India.",
    content: [
      "Agri-commerce logistics involves navigating diverse geographies, seasonal variability and perishability.",
      "Structured planning and reliable partners are essential to keeping the supply chain efficient.",
    ],
    date: "2024-09-28",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/freshira-blog-8/1200/700",
  },
  {
    id: 9,
    slug: "eating-with-the-seasons-a-guide",
    title: "Eating with the Seasons: A Guide",
    category: "Seasonal Produce",
    excerpt: "Why seasonal eating is better for your health, your wallet and the environment.",
    content: [
      "Seasonal produce is typically fresher, more flavourful and more affordable than out-of-season alternatives.",
      "Building meals around seasonal availability also reduces the environmental footprint of your food choices.",
    ],
    date: "2024-09-02",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/freshira-blog-9/1200/700",
  },
  {
    id: 10,
    slug: "simple-habits-for-healthy-eating",
    title: "Simple Habits for Healthy Eating",
    category: "Healthy Eating",
    excerpt: "Small, sustainable changes that make a meaningful difference to everyday nutrition.",
    content: [
      "Healthy eating doesn't require drastic changes — small, consistent habits compound over time.",
      "Prioritising fresh, whole foods is one of the simplest ways to improve everyday nutrition.",
    ],
    date: "2024-08-19",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/freshira-blog-10/1200/700",
  },
];

export const getBlogBySlug = (slug: string) => blogs.find((b) => b.slug === slug);
export const blogCategories = Array.from(new Set(blogs.map((b) => b.category)));
