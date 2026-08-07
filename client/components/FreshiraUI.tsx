import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Heart, ShoppingBag, Star, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Product } from "@/data/products";
import { useStore } from "@/context/store-context";

export const formatINR = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export function SectionHeading({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end"
    >
      <div className="max-w-2xl">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-primary">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-brand-950 sm:text-5xl">{title}</h2>
        {description && <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>}
      </div>
      {action}
    </motion.div>
  );
}

export function StarRating({ rating, reviews, compact = false }: { rating: number; reviews?: number; compact?: boolean }) {
  return (
    <span className="flex items-center gap-1 text-xs">
      <Star size={compact ? 12 : 14} className="fill-gold-400 text-gold-400" />
      <span className="font-bold text-brand-900">{rating.toFixed(1)}</span>
      {reviews !== undefined && <span className="text-muted-foreground">({reviews})</span>}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `${product.unit} • ₹${product.price} • Sourced fresh`,
    });
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
    toast(wishlisted ? `Removed from wishlist` : `Added to wishlist`, {
      description: product.name,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[1.35rem] border border-brand-100/80 bg-card shadow-soft hover:shadow-card transition-all duration-300"
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-brand-50">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[.94] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
        {product.availability}
      </div>
      <button
        onClick={handleWishlist}
        className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card/95 shadow-sm transition hover:scale-105 ${
          wishlisted ? "text-rose-500" : "text-brand-800"
        }`}
        aria-label="Toggle wishlist"
      >
        <Heart size={16} className={wishlisted ? "fill-current" : ""} />
      </button>
      <div className="p-4 sm:p-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-primary">{product.category}</p>
        <Link to={`/products/${product.slug}`} className="line-clamp-1 font-display text-lg font-semibold text-brand-950 hover:text-primary transition-colors">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <StarRating rating={product.rating} reviews={product.reviewCount} compact />
          <span className="text-[11px] font-semibold text-muted-foreground">{product.unit}</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div>
            <span className="font-display text-lg font-semibold text-brand-950">{formatINR(product.price)}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#0B1E14] text-white transition hover:bg-primary hover:scale-105 shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function CategoryCard({ name, slug, image, count }: { name: string; slug: string; image: string; count?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/categories/${slug}`} className="group relative block overflow-hidden rounded-[1.4rem] bg-brand-900 shadow-soft">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="aspect-[.9] w-full object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="font-display text-lg font-semibold sm:text-xl">{name}</p>
              {count !== undefined && <p className="mt-1 text-xs text-brand-100">{count} fresh picks</p>}
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 transition group-hover:bg-gold-400 group-hover:text-brand-950">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const bannerImages: Record<string, string> = {
  "/about": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=90",
  "/services": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1920&q=90",
  "/products": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=90",
  "/categories": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1920&q=90",
  "/blog": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=90",
  "/contact": "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1920&q=90",
  "/careers": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=90",
  "/faq": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1920&q=90",
  "/testimonials": "https://images.unsplash.com/photo-1491438590914-bc09f6af77a4?auto=format&fit=crop&w=1920&q=90",
};

export function PageHero({ title, description, eyebrow }: { title: string; description: string; eyebrow?: string }) {
  const { pathname } = useLocation();
  const image = bannerImages[pathname] || "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=85";

  return (
    <section className="relative isolate overflow-hidden bg-[#0B1E14] py-20 text-white sm:py-28">
      {/* HD Background Image */}
      <img
        src={image}
        alt="Banner background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E14]/85 via-[#0B1E14]/70 to-[#0B1E14]/50" />
      <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border-[40px] border-gold-400/15" />
      <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/10 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[.26em] text-gold-300 backdrop-blur mb-4">
            <Sparkles size={13} className="text-gold-400" /> {eyebrow || "Freshira Supply Network"}
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl text-white">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-100 sm:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-gold-400" /> 100% Quality Inspected
            </span>
            <span className="h-1 w-1 rounded-full bg-gold-400/60" />
            <span>Farm-Gate Procurement</span>
            <span className="h-1 w-1 rounded-full bg-gold-400/60" />
            <span>Cold-Chain Delivered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

