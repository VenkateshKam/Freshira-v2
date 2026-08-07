export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

const categoryImageMap: Record<string, string> = {
  "fresh-fruits": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85",
  "fresh-vegetables": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
  "exotic-fruits": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=85",
  "exotic-vegetables": "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=900&q=85",
  "organic-products": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",
  "rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85",
  "wheat": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
  "pulses": "https://images.unsplash.com/photo-1585996748352-6b0e7f3e3b54?auto=format&fit=crop&w=900&q=85",
  "spices": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  "flour": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
  "cooking-oils": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85",
  "dairy": "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85",
  "bakery": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
  "grocery": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
  "dry-fruits": "https://images.unsplash.com/photo-1599599810694-57a8b9c2a35f?auto=format&fit=crop&w=900&q=85",
  "herbs": "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=900&q=85",
  "seeds": "https://images.unsplash.com/photo-1603048719539-9ecb4c7b8e7f?auto=format&fit=crop&w=900&q=85",
  "beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
  "frozen-foods": "https://images.unsplash.com/photo-1601598851547-4302969d7d3b?auto=format&fit=crop&w=900&q=85",
  "health-foods": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  "snacks": "https://images.unsplash.com/photo-1621939514649-280e2aa2b4f3?auto=format&fit=crop&w=900&q=85",
  "household-essentials": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=85",
  "personal-care": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
  "cleaning-products": "https://images.unsplash.com/photo-1585832770485-e68a5dbdae47?auto=format&fit=crop&w=900&q=85",
  "farm-produce": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=85",
};

const categorySeed: Category[] = [
  {
    slug: "fresh-fruits",
    name: "Fresh Fruits",
    description: "Hand-picked seasonal fruits sourced fresh from partner farms.",
    icon: "Apple",
    image: "https://picsum.photos/seed/freshira-fresh-fruits/800/600",
  },
  {
    slug: "fresh-vegetables",
    name: "Fresh Vegetables",
    description: "Farm-fresh vegetables delivered with quality assurance.",
    icon: "Carrot",
    image: "https://picsum.photos/seed/freshira-fresh-vegetables/800/600",
  },
  {
    slug: "exotic-fruits",
    name: "Exotic Fruits",
    description: "Premium imported and rare fruit varieties.",
    icon: "Cherry",
    image: "https://picsum.photos/seed/freshira-exotic-fruits/800/600",
  },
  {
    slug: "exotic-vegetables",
    name: "Exotic Vegetables",
    description: "Specialty vegetables for modern kitchens.",
    icon: "Leaf",
    image: "https://picsum.photos/seed/freshira-exotic-vegetables/800/600",
  },
  {
    slug: "organic-products",
    name: "Organic Products",
    description: "Certified-style organic produce and staples.",
    icon: "Sprout",
    image: "https://picsum.photos/seed/freshira-organic/800/600",
  },
  {
    slug: "rice",
    name: "Rice",
    description: "Premium rice varieties from trusted growers.",
    icon: "Wheat",
    image: "https://picsum.photos/seed/freshira-rice/800/600",
  },
  {
    slug: "wheat",
    name: "Wheat",
    description: "High-quality wheat and wheat-based staples.",
    icon: "WheatOff",
    image: "https://picsum.photos/seed/freshira-wheat/800/600",
  },
  {
    slug: "pulses",
    name: "Pulses",
    description: "Protein-rich dals and lentils.",
    icon: "CircleDot",
    image: "https://picsum.photos/seed/freshira-pulses/800/600",
  },
  {
    slug: "spices",
    name: "Spices",
    description: "Aromatic whole and ground spices.",
    icon: "FlameKindling",
    image: "https://picsum.photos/seed/freshira-spices/800/600",
  },
  {
    slug: "flour",
    name: "Flour",
    description: "Stone-ground flours for everyday cooking.",
    icon: "Wheat",
    image: "https://picsum.photos/seed/freshira-flour/800/600",
  },
  {
    slug: "cooking-oils",
    name: "Cooking Oils",
    description: "Pure and refined cooking oils.",
    icon: "Droplet",
    image: "https://picsum.photos/seed/freshira-oils/800/600",
  },
  {
    slug: "dairy",
    name: "Dairy",
    description: "Fresh dairy products sourced daily.",
    icon: "Milk",
    image: "https://picsum.photos/seed/freshira-dairy/800/600",
  },
  {
    slug: "bakery",
    name: "Bakery",
    description: "Freshly baked breads and bakery items.",
    icon: "Croissant",
    image: "https://picsum.photos/seed/freshira-bakery/800/600",
  },
  {
    slug: "grocery",
    name: "Grocery",
    description: "Everyday grocery essentials.",
    icon: "ShoppingBasket",
    image: "https://picsum.photos/seed/freshira-grocery/800/600",
  },
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    description: "Premium nuts and dried fruits.",
    icon: "Nut",
    image: "https://picsum.photos/seed/freshira-dry-fruits/800/600",
  },
  {
    slug: "herbs",
    name: "Herbs",
    description: "Fresh and dried culinary herbs.",
    icon: "Flower2",
    image: "https://picsum.photos/seed/freshira-herbs/800/600",
  },
  {
    slug: "seeds",
    name: "Seeds",
    description: "Nutritious seeds for cooking and health.",
    icon: "CircleDashed",
    image: "https://picsum.photos/seed/freshira-seeds/800/600",
  },
  {
    slug: "beverages",
    name: "Beverages",
    description: "Refreshing drinks, juices and beverages.",
    icon: "CupSoda",
    image: "https://picsum.photos/seed/freshira-beverages/800/600",
  },
  {
    slug: "frozen-foods",
    name: "Frozen Foods",
    description: "Quality frozen produce and ready foods.",
    icon: "Snowflake",
    image: "https://picsum.photos/seed/freshira-frozen/800/600",
  },
  {
    slug: "health-foods",
    name: "Health Foods",
    description: "Wholesome foods for a healthy lifestyle.",
    icon: "HeartPulse",
    image: "https://picsum.photos/seed/freshira-health/800/600",
  },
  {
    slug: "snacks",
    name: "Snacks",
    description: "Tasty snacks for every craving.",
    icon: "Cookie",
    image: "https://picsum.photos/seed/freshira-snacks/800/600",
  },
  {
    slug: "household-essentials",
    name: "Household Essentials",
    description: "Everyday household necessities.",
    icon: "Home",
    image: "https://picsum.photos/seed/freshira-household/800/600",
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    description: "Personal hygiene and wellness products.",
    icon: "Sparkles",
    image: "https://picsum.photos/seed/freshira-personal-care/800/600",
  },
  {
    slug: "cleaning-products",
    name: "Cleaning Products",
    description: "Effective home cleaning solutions.",
    icon: "SprayCan",
    image: "https://picsum.photos/seed/freshira-cleaning/800/600",
  },
  {
    slug: "farm-produce",
    name: "Farm Produce",
    description: "Bulk farm produce sourced directly from growers.",
    icon: "Tractor",
    image: "https://picsum.photos/seed/freshira-farm-produce/800/600",
  },
];

export const categories: Category[] = categorySeed.map((category) => ({
  ...category,
  image: categoryImageMap[category.slug] || category.image,
}));

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
