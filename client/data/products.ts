export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  price: number;
  unit: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviewCount: number;
  availability: "in-stock" | "low-stock" | "out-of-stock";
  featured: boolean;
  description: string;
  shortDescription?: string;
  originalPrice?: number;
  features?: string[];
  specifications?: { label: string; value: string }[];
}

const productSeed: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    slug: "organic-tomatoes",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    subcategory: "Tomatoes",
    price: 45,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1546470427-227c7369a9b7?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1546470427-227c7369a9b7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.8,
    reviewCount: 124,
    availability: "in-stock",
    featured: true,
    description: "Fresh organic tomatoes sourced directly from certified farms."
  },
  {
    id: 2,
    name: "Fresh Spinach",
    slug: "fresh-spinach",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    subcategory: "Leafy Greens",
    price: 35,
    unit: "250g",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1574316081805-47e490f009e8?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.6,
    reviewCount: 89,
    availability: "in-stock",
    featured: true,
    description: "Crisp fresh spinach leaves, perfect for salads and cooking."
  },
  {
    id: 3,
    name: "Organic Apples",
    slug: "organic-apples",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    subcategory: "Apples",
    price: 180,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.9,
    reviewCount: 256,
    availability: "in-stock",
    featured: true,
    description: "Sweet and crisp organic apples, perfect for snacking."
  },
  {
    id: 4,
    name: "Basmati Rice",
    slug: "basmati-rice",
    category: "Rice",
    categorySlug: "rice",
    subcategory: "Basmati",
    price: 120,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.7,
    reviewCount: 312,
    availability: "in-stock",
    featured: false,
    description: "Premium aged basmati rice with extra-long grains."
  },
  {
    id: 5,
    name: "Organic Turmeric",
    slug: "organic-turmeric",
    category: "Spices",
    categorySlug: "spices",
    subcategory: "Ground Spices",
    price: 85,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599909533681-74471e51e5c8?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.5,
    reviewCount: 78,
    availability: "in-stock",
    featured: false,
    description: "High-quality organic turmeric powder with rich color."
  },
  {
    id: 6,
    name: "Fresh Carrots",
    slug: "fresh-carrots",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    subcategory: "Root Vegetables",
    price: 40,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.4,
    reviewCount: 92,
    availability: "in-stock",
    featured: false,
    description: "Crunchy fresh carrots, perfect for salads and cooking."
  },
  {
    id: 7,
    name: "Almonds",
    slug: "almonds",
    category: "Dry Fruits",
    categorySlug: "dry-fruits",
    subcategory: "Nuts",
    price: 450,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b8d46?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1508061253366-f7da158b8d46?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1578184697930-3bed1b0ab9c9?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.8,
    reviewCount: 167,
    availability: "in-stock",
    featured: true,
    description: "Premium California almonds, rich and crunchy."
  },
  {
    id: 8,
    name: "Whole Wheat Flour",
    slug: "whole-wheat-flour",
    category: "Flour",
    categorySlug: "flour",
    subcategory: "Wheat Flour",
    price: 65,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.6,
    reviewCount: 143,
    availability: "in-stock",
    featured: false,
    description: "Stone-ground whole wheat flour for healthy cooking."
  },
  {
    id: 9,
    name: "Organic Honey",
    slug: "organic-honey",
    category: "Grocery",
    categorySlug: "grocery",
    subcategory: "Sweeteners",
    price: 280,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622423325354-a7e7e1c6d5d1?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.9,
    reviewCount: 201,
    availability: "in-stock",
    featured: true,
    description: "Pure organic honey from wild flowers."
  },
  {
    id: 10,
    name: "Fresh Oranges",
    slug: "fresh-oranges",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    subcategory: "Citrus",
    price: 90,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5a?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.7,
    reviewCount: 189,
    availability: "in-stock",
    featured: false,
    description: "Juicy sweet oranges, rich in Vitamin C."
  },
  {
    id: 11,
    name: "Mustard Oil",
    slug: "mustard-oil",
    category: "Cooking Oils",
    categorySlug: "cooking-oils",
    subcategory: "Cold Pressed",
    price: 150,
    unit: "1L",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599940824399-b87987ced72a?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.5,
    reviewCount: 112,
    availability: "in-stock",
    featured: false,
    description: "Cold-pressed mustard oil for authentic cooking."
  },
  {
    id: 12,
    name: "Fresh Milk",
    slug: "fresh-milk",
    category: "Dairy",
    categorySlug: "dairy",
    subcategory: "Milk",
    price: 60,
    unit: "1L",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.8,
    reviewCount: 278,
    availability: "in-stock",
    featured: true,
    description: "Fresh farm milk, pasteurized and pure."
  }
];

export const products: Product[] = productSeed;

export const featuredProducts: Product[] = products.filter(p => p.featured);

export const bestSellerProducts: Product[] = products
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 4);

export const newArrivalProducts: Product[] = products.slice(0, 4);

export const seasonalProducts: Product[] = products.filter(p => 
  ["fresh-fruits", "fresh-vegetables"].includes(p.categorySlug)
).slice(0, 4);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find(p => p.slug === slug);

export const getRelatedProducts = (product: Product): Product[] =>
  products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);
