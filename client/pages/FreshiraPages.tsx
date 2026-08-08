import { FormEvent, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowRight, Check, CircleCheck, Filter, Heart, Leaf, Minus, PackageCheck, Plus, Search, ShieldCheck, Trash2, Truck, X } from "lucide-react";
import { categories } from "@/data/categories";
import { blogs } from "@/data/blogs";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { getProductBySlug, getRelatedProducts, products, Product } from "@/data/products";
import { useStore } from "@/context/store-context";
import { CategoryCard, formatINR, PageHero, ProductCard, SectionHeading, StarRating } from "@/components/FreshiraUI";

const address = "SN.3A, Siddhata Apartment, Devalipada, Bolinj, Virar, Vasai, Palghar, Maharashtra – 401303, India";

export function ProductsPage() {
  const { search } = useLocation();
  const initialCategory = new URLSearchParams(search).get("category") || "all";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [availability, setAvailability] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [visible, setVisible] = useState(24);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesQuery = `${product.name} ${product.category} ${product.subcategory}`.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && (category === "all" || product.categorySlug === category) && (availability === "all" || product.availability === availability) && product.price <= maxPrice;
    });
    return [...result].sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : Number(b.featured) - Number(a.featured));
  }, [query, category, sort, availability, maxPrice]);
  return <><PageHero eyebrow="Freshira catalogue" title="Good food for every table" description="Explore 100+ carefully selected products, from farm-fresh produce to dependable pantry essentials." /><section className="section-py"><div className="container"><div className="mb-6 flex flex-col gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-soft md:flex-row md:items-center"><div className="flex flex-1 items-center gap-3 rounded-xl bg-brand-50 px-4 py-3"><Search size={18} className="text-primary" /><input value={query} onChange={(e) => { setQuery(e.target.value); setVisible(24); }} placeholder="Search fruits, pantry staples, spices..." className="w-full bg-transparent text-sm outline-none placeholder:text-brand-400" aria-label="Search products" /></div><button onClick={() => setFiltersOpen(!filtersOpen)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 px-4 py-3 text-sm font-bold text-brand-900 md:hidden"><Filter size={16} /> Filters</button><label className="flex items-center gap-2 text-sm font-semibold text-brand-800">Sort by<select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm outline-none"><option value="featured">Recommended</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div><div className="grid gap-8 lg:grid-cols-[230px_1fr]"><aside className={`${filtersOpen ? "block" : "hidden"} rounded-2xl border border-brand-100 bg-brand-50 p-5 lg:block`}><div className="flex items-center justify-between"><h2 className="font-display font-bold text-brand-950">Refine picks</h2><button onClick={() => setFiltersOpen(false)} className="lg:hidden" aria-label="Close filters"><X size={18}/></button></div><label className="mt-6 block text-xs font-bold uppercase tracking-wider text-brand-600">Category<select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 w-full rounded-lg border border-brand-200 bg-white p-2.5 text-sm"><option value="all">All categories</option>{categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label><fieldset className="mt-6"><legend className="text-xs font-bold uppercase tracking-wider text-brand-600">Availability</legend><div className="mt-3 space-y-2 text-sm">{["all", "In Stock", "Limited Stock"].map((value) => <label key={value} className="flex items-center gap-2"><input type="radio" name="availability" checked={availability === value} onChange={() => setAvailability(value)} />{value === "all" ? "All products" : value}</label>)}</div></fieldset><label className="mt-6 block text-xs font-bold uppercase tracking-wider text-brand-600">Price up to <span className="text-primary">{formatINR(maxPrice)}</span><input type="range" min="50" max="1000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-3 w-full accent-primary" /></label><button onClick={() => { setCategory("all"); setAvailability("all"); setMaxPrice(1000); setQuery(""); }} className="mt-7 text-sm font-bold text-primary">Clear all filters</button></aside><div><div className="mb-5 flex items-center justify-between"><p className="text-sm text-muted-foreground"><span className="font-bold text-brand-950">{filtered.length}</span> products found</p><p className="hidden text-xs text-brand-500 sm:block">Fresh picks, thoughtfully presented</p></div>{filtered.length ? <><div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">{filtered.slice(0, visible).map((product) => <ProductCard key={product.id} product={product} />)}</div>{visible < filtered.length && <button onClick={() => setVisible((value) => value + 24)} className="mx-auto mt-10 flex items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-bold text-primary hover:bg-brand-50">Load more products <ArrowRight size={16}/></button>}</> : <EmptyState title="No products match those filters" text="Try a wider search or reset your filters to explore the full Freshira assortment." onReset={() => { setQuery(""); setCategory("all"); setAvailability("all"); setMaxPrice(1000); }} />}</div></div></div></section></>;
}

export function CategoriesPage() { return <><PageHero eyebrow="Explore the range" title="Shop by category" description="From seasonal produce to everyday essentials, find a considered selection for every kind of kitchen." /><section className="section-py"><div className="container grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.slug} {...category} count={products.filter((product) => product.categorySlug === category.slug).length} />)}</div></section></>; }

export function CategoryPage() { const { slug = "" } = useParams(); const category = categories.find((item) => item.slug === slug); const listed = products.filter((product) => product.categorySlug === slug); if (!category) return <EmptyState title="Category not found" text="Explore the full Freshira catalogue instead." />; return <><PageHero eyebrow="Freshira categories" title={category.name} description={category.description} /><section className="section-py"><div className="container"><SectionHeading title={`${category.name} picks`} description={`${listed.length} products selected for your everyday needs.`} action={<Link to="/products" className="text-sm font-bold text-primary">All products <ArrowRight size={15} className="inline"/></Link>} /><div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{listed.map((product) => <ProductCard key={product.id} product={product}/>)}</div></div></section></>; }

export function ProductDetailsPage() { const { slug = "" } = useParams(); const product = getProductBySlug(slug); const { addToCart, toggleWishlist, isWishlisted } = useStore(); const [quantity, setQuantity] = useState(1); const [selectedImage, setSelectedImage] = useState(product?.image || ""); if (!product) return <EmptyState title="Product not found" text="That product may have moved. Browse the catalogue for more fresh picks." />; const related = getRelatedProducts(product); return <><section className="border-b border-brand-100 bg-brand-50 py-4"><div className="container text-xs text-brand-600"><Link to="/products" className="hover:text-primary">Products</Link> <span className="mx-2">/</span> {product.category} <span className="mx-2">/</span> <span className="text-brand-950">{product.name}</span></div></section><section className="section-py"><div className="container grid gap-10 lg:grid-cols-2"><div className="grid gap-3 sm:grid-cols-[88px_1fr]"><div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">{[product.image, ...product.gallery].map((image, index) => <button key={image} onClick={() => setSelectedImage(image)} className={`shrink-0 overflow-hidden rounded-xl border-2 ${selectedImage === image ? "border-primary" : "border-transparent"}`}><img src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-20 object-cover" /></button>)}</div><div className="order-1 overflow-hidden rounded-3xl bg-brand-50 sm:order-2"><img src={selectedImage} alt={product.name} className="aspect-square w-full object-cover" /></div></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">{product.category} · {product.subcategory}</p><h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">{product.name}</h1><div className="mt-4 flex flex-wrap items-center gap-4"><StarRating rating={product.rating} reviews={product.reviewCount}/><span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-primary">{product.availability}</span></div><p className="mt-5 text-base leading-7 text-muted-foreground">{product.shortDescription}</p><div className="mt-7 flex items-end gap-3"><span className="font-display text-3xl font-bold text-brand-950">{formatINR(product.price)}</span>{product.originalPrice && <del className="pb-1 text-sm text-muted-foreground">{formatINR(product.originalPrice)}</del>}<span className="pb-1 text-sm text-muted-foreground">/ {product.unit}</span></div><div className="mt-7 flex flex-wrap gap-3"><div className="flex items-center rounded-xl border border-brand-200"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid h-12 w-11 place-items-center" aria-label="Decrease quantity"><Minus size={16}/></button><span className="w-8 text-center text-sm font-bold">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="grid h-12 w-11 place-items-center" aria-label="Increase quantity"><Plus size={16}/></button></div><button onClick={() => addToCart(product, quantity)} className="flex-1 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 sm:flex-none">Add to cart</button><button onClick={() => toggleWishlist(product.id)} className={`grid h-12 w-12 place-items-center rounded-xl border ${isWishlisted(product.id) ? "border-rose-200 text-rose-500" : "border-brand-200 text-brand-800"}`} aria-label="Toggle wishlist"><Heart size={19} className={isWishlisted(product.id) ? "fill-current" : ""}/></button></div><div className="mt-8 grid gap-3 border-t border-brand-100 pt-6 text-sm text-brand-800 sm:grid-cols-2"><p className="flex gap-2"><Truck size={18} className="text-primary"/> Delivery availability varies by location</p><p className="flex gap-2"><ShieldCheck size={18} className="text-primary"/> Quality-led handling</p></div></div></div><div className="container mt-14 grid gap-10 border-t border-brand-100 pt-10 lg:grid-cols-[1.1fr_.9fr]"><div><h2 className="font-display text-2xl font-bold text-brand-950">About this product</h2><p className="mt-4 leading-7 text-muted-foreground">{product.description}</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{(product.features || []).map((feature) => <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-brand-800"><Check size={17} className="text-primary"/> {feature}</li>)}</ul></div><div className="rounded-2xl bg-brand-50 p-6"><h2 className="font-display text-xl font-bold text-brand-950">Product details</h2><dl className="mt-4 divide-y divide-brand-200">{(product.specifications || []).map((specification) => <div key={specification.label} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-muted-foreground">{specification.label}</dt><dd className="text-right font-semibold text-brand-900">{specification.value}</dd></div>)}</dl></div></div></section><section className="section-py bg-brand-50"><div className="container"><SectionHeading title="You may also like" description="More thoughtful picks from the same category."/><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item}/>)}</div></div></section></>; }

export function CartPage() { const { cart, cartSubtotal, updateQuantity, removeFromCart } = useStore(); const [coupon, setCoupon] = useState(""); const discount = coupon.trim().toUpperCase() === "FRESH10" ? Math.round(cartSubtotal * .1) : 0; if (!cart.length) return <><PageHero title="Your cart" description="Your selected Freshira products will appear here."/><EmptyState title="Your cart is ready for fresh picks" text="Browse the catalogue and add something good to your basket." link="/products" linkText="Browse products" /></>; return <><PageHero title="Your cart" description="Review your selection before moving to the demo checkout."/><section className="section-py"><div className="container grid gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-3">{cart.map(({ product, quantity }) => <div key={product.id} className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-soft"><img src={product.image} alt={product.name} className="h-24 w-24 rounded-xl bg-brand-50 object-cover"/><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-primary">{product.category}</p><Link to={`/products/${product.slug}`} className="mt-1 block font-display font-bold text-brand-950">{product.name}</Link><p className="mt-1 text-xs text-muted-foreground">{product.unit}</p></div><button onClick={() => removeFromCart(product.id)} className="text-brand-400 hover:text-rose-500" aria-label={`Remove ${product.name}`}><Trash2 size={17}/></button></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-lg border border-brand-200"><button onClick={() => updateQuantity(product.id, quantity - 1)} className="grid h-8 w-8 place-items-center"><Minus size={13}/></button><span className="w-8 text-center text-xs font-bold">{quantity}</span><button onClick={() => updateQuantity(product.id, quantity + 1)} className="grid h-8 w-8 place-items-center"><Plus size={13}/></button></div><p className="font-display font-bold text-brand-950">{formatINR(product.price * quantity)}</p></div></div></div>)}</div><OrderSummary subtotal={cartSubtotal} discount={discount} coupon={coupon} setCoupon={setCoupon} /></div></section></>; }

function OrderSummary({ subtotal, discount = 0, coupon, setCoupon }: { subtotal: number; discount?: number; coupon?: string; setCoupon?: (value: string) => void }) { const delivery = subtotal >= 999 ? 0 : 49; const total = subtotal - discount + delivery; return <aside className="h-fit rounded-2xl border border-brand-100 bg-brand-50 p-6"><h2 className="font-display text-xl font-bold text-brand-950">Order summary</h2>{setCoupon && <div className="mt-5 flex gap-2"><input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="min-w-0 flex-1 rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm"/><button className="rounded-lg bg-brand-900 px-3 text-xs font-bold text-white">Apply</button></div>}<div className="mt-6 space-y-3 border-t border-brand-200 pt-5 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatINR(subtotal)}</span></div><div className="flex justify-between"><span className="text-muted-foreground">Discount</span><span className="text-primary">-{formatINR(discount)}</span></div><div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{delivery ? formatINR(delivery) : "Free"}</span></div><div className="flex justify-between border-t border-brand-200 pt-4 text-base font-bold text-brand-950"><span>Total</span><span>{formatINR(total)}</span></div></div><Link to="/checkout" className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-brand-700">Proceed to checkout <ArrowRight size={16}/></Link><Link to="/products" className="mt-4 block text-center text-xs font-bold text-primary">Continue shopping</Link></aside>; }

export function CheckoutPage() { const { cart, cartSubtotal, clearCart } = useStore(); const [submitted, setSubmitted] = useState(false); const [same, setSame] = useState(true); const [payment, setPayment] = useState("UPI"); const [error, setError] = useState(""); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (!cart.length) return; setError(""); setSubmitted(true); clearCart(); }; if (submitted) return <section className="section-py"><div className="container"><div className="mx-auto max-w-xl rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-card sm:p-14"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-primary"><CircleCheck size={34}/></span><h1 className="mt-6 font-display text-3xl font-bold text-brand-950">Demo order received</h1><p className="mt-3 leading-7 text-muted-foreground">Thank you for exploring Freshira. This static showcase does not process payments or create a real order.</p><Link to="/products" className="mt-7 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Continue browsing</Link></div></div></section>; if (!cart.length) return <><PageHero title="Checkout" description="A simple demo checkout experience."/><EmptyState title="There is nothing to check out yet" text="Add a few Freshira products to continue." link="/products" linkText="Browse products" /></>; return <><PageHero title="Checkout" description="A polished frontend-only checkout flow. No payment or order is processed."/><section className="section-py"><div className="container"><form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-6"><fieldset className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"><legend className="font-display text-xl font-bold text-brand-950">Billing details</legend><div className="mt-5 grid gap-4 sm:grid-cols-2"><Field label="Full name" required/><Field label="Email address" type="email" required/><Field label="Phone number" required/><Field label="PIN code" required/><Field label="Address" className="sm:col-span-2" required/><Field label="City" required/><Field label="State" required/></div></fieldset><label className="flex items-center gap-3 text-sm font-semibold text-brand-800"><input type="checkbox" checked={same} onChange={(e) => setSame(e.target.checked)} /> Shipping address is the same as billing address</label>{!same && <fieldset className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"><legend className="font-display text-xl font-bold text-brand-950">Shipping address</legend><div className="mt-5 grid gap-4 sm:grid-cols-2"><Field label="Recipient name" required/><Field label="Phone number" required/><Field label="Address" className="sm:col-span-2" required/><Field label="City" required/><Field label="PIN code" required/></div></fieldset>}<fieldset className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"><legend className="font-display text-xl font-bold text-brand-950">Payment method</legend><div className="mt-5 grid gap-3 sm:grid-cols-2">{["UPI", "Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((method) => <label key={method} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold ${payment === method ? "border-primary bg-brand-50 text-primary" : "border-brand-100"}`}><input type="radio" name="payment" value={method} checked={payment === method} onChange={() => setPayment(method)} />{method}</label>)}</div></fieldset>{error && <p className="text-sm font-semibold text-rose-600">{error}</p>}</div><aside className="h-fit rounded-2xl border border-brand-100 bg-brand-50 p-6"><h2 className="font-display text-xl font-bold text-brand-950">Your order</h2><div className="mt-5 space-y-3 border-b border-brand-200 pb-5">{cart.map(({ product, quantity }) => <div key={product.id} className="flex justify-between gap-3 text-sm"><span className="text-muted-foreground">{product.name} × {quantity}</span><span className="font-semibold">{formatINR(product.price * quantity)}</span></div>)}</div><div className="mt-5 flex justify-between text-base font-bold text-brand-950"><span>Total</span><span>{formatINR(cartSubtotal + (cartSubtotal >= 999 ? 0 : 49))}</span></div><button type="submit" className="mt-6 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-brand-700">Place demo order</button><p className="mt-3 text-center text-xs leading-5 text-muted-foreground">No payment is collected. This is a frontend demonstration.</p></aside></form></div></section></>; }

function Field({ label, type = "text", required = false, className = "" }: { label: string; type?: string; required?: boolean; className?: string }) { return <label className={`block text-sm font-semibold text-brand-800 ${className}`}>{label}{required && <span className="text-primary"> *</span>}<input type={type} required={required} className="mt-2 w-full rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>; }

export function AboutPage() { return <><PageHero eyebrow="Our story" title="A better connection between farms and everyday life" description="Freshira is a technology-enabled agri-commerce and supply-chain platform designed to make sourcing, movement and access to fresh food more thoughtful."/><section className="section-py"><div className="container grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Why Freshira</p><h2 className="mt-3 font-display text-3xl font-bold text-brand-950">Modern commerce, rooted in agriculture.</h2><p className="mt-5 leading-7 text-muted-foreground">Freshira India Private Limited brings farmers, suppliers, logistics, businesses, retailers and consumers closer through a connected commerce ecosystem. We use technology as an enabler for better visibility, dependable sourcing and a more considered customer experience.</p><p className="mt-4 leading-7 text-muted-foreground">Our focus is simple: help quality food move efficiently while creating room for stronger relationships across the supply chain.</p></div><div className="rounded-3xl bg-brand-950 p-8 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-gold-300">Our direction</p><div className="mt-7 grid gap-7 sm:grid-cols-2"><div><h3 className="font-display text-xl font-bold">Mission</h3><p className="mt-2 text-sm leading-6 text-brand-200">Connect agriculture and modern commerce through quality-led, reliable supply journeys.</p></div><div><h3 className="font-display text-xl font-bold">Vision</h3><p className="mt-2 text-sm leading-6 text-brand-200">Make fresh, trusted access a more natural part of everyday life.</p></div></div></div></div></section><section className="section-py bg-brand-50"><div className="container"><SectionHeading eyebrow="What guides us" title="Values that travel with every order"/><div className="grid gap-4 md:grid-cols-3">{[["Freshness with purpose","We care about the quality and context behind every product."],["Trust through clarity","We communicate simply and build dependable experiences."],["Progress with responsibility","We look for smarter, more sustainable ways to move forward."]].map(([title, text]) => <div key={title} className="rounded-2xl border border-brand-100 bg-white p-6"><Check className="text-primary"/><h3 className="mt-5 font-display text-xl font-bold text-brand-950">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section></>; }

export function ServicesPage() { return <><PageHero eyebrow="Capabilities" title="Supply chain, made fresher" description="Flexible commerce and operations capabilities for households, businesses, retailers and supply partners."/><section className="section-py"><div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.slug} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"><div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-primary"><PackageCheck/></div><h2 className="mt-5 font-display text-xl font-bold text-brand-950">{service.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.shortDescription}</p><p className="mt-5 border-t border-brand-100 pt-4 text-xs font-bold uppercase tracking-wider text-primary">Business value</p><p className="mt-2 text-sm leading-6 text-brand-800">{service.businessValue || "A dependable, coordinated path from source to destination."}</p></article>)}</div></section></>; }

export function BlogPage() { const [query, setQuery] = useState(""); const listed = blogs.filter((blog) => `${blog.title} ${blog.category}`.toLowerCase().includes(query.toLowerCase())); return <><PageHero eyebrow="The Freshira journal" title="Fresh thinking for a changing food system" description="Practical notes on agriculture, sourcing, storage, logistics and everyday food choices."/><section className="section-py"><div className="container"><div className="mb-8 flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3"><Search size={18} className="text-primary"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the journal" className="w-full bg-transparent text-sm outline-none" aria-label="Search articles"/></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{listed.map((blog) => <article key={blog.id} className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft"><img src={blog.image} alt={blog.title} loading="lazy" className="aspect-[1.7] w-full object-cover"/><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-primary">{blog.category}</p><h2 className="mt-2 font-display text-xl font-bold text-brand-950">{blog.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{blog.excerpt}</p><div className="mt-5 flex justify-between text-xs font-semibold text-brand-500"><span>{blog.date}</span><span>{blog.readTime}</span></div></div></article>)}</div></div></section></>; }

export function FAQPage() { return <><PageHero eyebrow="Helpful answers" title="Frequently asked questions" description="Clear, useful answers about Freshira products, delivery, sourcing and services."/><section className="section-py"><div className="container max-w-4xl space-y-10">{faqs.map((group) => <section key={group.category}><h2 className="font-display text-2xl font-bold text-brand-950">{group.category}</h2><div className="mt-4 space-y-3">{group.items.map((item) => <details key={item.question} className="rounded-xl border border-brand-100 bg-white p-5 shadow-soft"><summary className="cursor-pointer list-none pr-5 font-semibold text-brand-950">{item.question}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p></details>)}</div></section>)}</div></section></>; }

export function TestimonialsPage() { return <><PageHero eyebrow="Community voices" title="Stories from the Freshira community" description="Fictional demo testimonials showing how the platform can speak to households and businesses."/><section className="section-py"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((item) => <article key={item.id} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"><StarRating rating={item.rating}/><p className="mt-5 leading-7 text-brand-800">“{item.text}”</p><div className="mt-6 border-t border-brand-100 pt-4"><p className="font-display font-bold text-brand-950">{item.name}</p><p className="text-xs text-muted-foreground">{item.role} · Demo identity</p></div></article>)}</div></section></>; }

export function CareersPage() { return <><PageHero eyebrow="Careers" title="Build a better food connection" description="Demo opportunities for people who care about agriculture, technology, operations and everyday customer experiences."/><section className="section-py"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="font-display text-3xl font-bold text-brand-950">Bring your perspective.</h2><p className="mt-4 leading-7 text-muted-foreground">Freshira sits at the intersection of food, technology and movement. We value curiosity, ownership, empathy and a practical bias for progress.</p><div className="mt-7 space-y-3">{["Meaningful work across the food journey","A culture of learning and collaboration","Room to shape a growing platform"].map((item) => <p key={item} className="flex gap-2 text-sm font-semibold text-brand-800"><Check className="text-primary" size={18}/>{item}</p>)}</div></div><div className="space-y-3">{["Technology", "Procurement", "Supply Chain", "Logistics", "Sales & Marketing", "Customer Support"].map((department, index) => <div key={department} className="flex items-center justify-between rounded-xl border border-brand-100 bg-white p-5 shadow-soft"><div><p className="font-display font-bold text-brand-950">{department}</p><p className="mt-1 text-xs text-muted-foreground">Demo role · Mumbai / hybrid</p></div><span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-700">{index % 2 ? "Open" : "Planned"}</span></div>)}</div></div></section></>; }

export function ContactPage() { const [sent, setSent] = useState(false); return <><PageHero eyebrow="Get in touch" title="Let’s build better food connections" description="For customer, sourcing or business enquiries, send us a note through this frontend demo form."/><section className="section-py"><div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div className="space-y-4"><div className="rounded-2xl bg-brand-950 p-7 text-white"><p className="text-xs font-bold uppercase tracking-wider text-gold-300">Registered office</p><address className="mt-4 not-italic text-sm leading-7 text-brand-100">{address}</address></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><InfoCard title="Email" text="To be confirmed by Freshira"/><InfoCard title="Phone" text="Please use the enquiry form for a callback request"/><InfoCard title="Working hours" text="Enquiries are reviewed during business days"/></div></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"><h2 className="font-display text-2xl font-bold text-brand-950">Send an enquiry</h2>{sent ? <div className="mt-8 rounded-xl bg-brand-50 p-6 text-center"><CircleCheck className="mx-auto text-primary"/><p className="mt-3 font-semibold text-brand-950">Thanks — your demo enquiry is ready.</p><p className="mt-1 text-sm text-muted-foreground">No message was sent to a server.</p></div> : <><div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Your name" required/><Field label="Email address" type="email" required/><Field label="Phone number"/><Field label="Enquiry type"/><Field label="Message" className="sm:col-span-2" required/></div><button className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">Send demo enquiry</button></>}</form></div></section></>; }
function InfoCard({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"><p className="text-xs font-bold uppercase tracking-wider text-primary">{title}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>; }

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        eyebrow="Legal information" 
        title="Privacy Policy" 
        description="How Freshira India Private Limited collects, uses, and protects your information."
      />
      <article className="section-py">
        <div className="container max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <div className="rounded-xl bg-brand-50 p-5 border border-brand-100">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Effective Date</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 mt-4">Last Updated</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">1. Introduction</h2>
            <p className="mt-3 text-brand-950">Freshira India Private Limited ("Freshira," "we," "us," or "our") is committed to protecting your privacy and maintaining the security of any personal information we collect. As an Agri-Commerce & Supply Chain platform, we recognize the importance of data protection and are dedicated to handling your information with transparency, integrity, and respect for your privacy rights.</p>
            <p className="mt-3">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services. By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">2. Information We Collect</h2>
            
            <h3 className="mt-4 font-semibold text-brand-950">Personal Information</h3>
            <p className="mt-2">We may collect information that can be used to identify you or contact you ("Personal Information"). This may include:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>Full name, email address, phone number, and mailing address</li>
              <li>Account credentials (username and password) if you register for an account</li>
              <li>Business information if you represent a commercial entity (company name, business address, tax identification numbers)</li>
              <li>Payment information, if and when payment processing services are introduced, processed through secure third-party payment gateways</li>
              <li>Delivery preferences and special instructions, when delivery services are available</li>
            </ul>

            <h3 className="mt-4 font-semibold text-brand-950">Technical Information</h3>
            <p className="mt-2">We automatically collect certain technical information when you visit our website:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Referring website and pages visited</li>
              <li>Time spent on pages and click patterns</li>
              <li>Location information based on IP address</li>
            </ul>

            <h3 className="mt-4 font-semibold text-brand-950">Information You Voluntarily Provide</h3>
            <p className="mt-2">You may voluntarily provide additional information through:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>Contact forms and enquiry submissions</li>
              <li>Customer support communications</li>
              <li>Feedback and survey responses</li>
              <li>Product reviews and ratings, when such features are available</li>
              <li>Newsletter subscriptions, when offered</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">3. How We Use Your Information</h2>
            <p className="mt-3 text-brand-950">We use the information we collect for various legitimate business purposes:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Providing, maintaining, and improving our services and website functionality</li>
              <li>Processing and fulfilling orders, including delivery coordination, when such services are operational</li>
              <li>Sending transaction-related communications (order confirmations, delivery updates) when applicable</li>
              <li>Sending technical notices, security alerts, and support messages</li>
              <li>Responding to your comments, questions, and customer service requests</li>
              <li>Communicating with you about products, services, events, and promotional offers (with your consent)</li>
              <li>Monitoring and analyzing trends, usage, and activities to improve user experience</li>
              <li>Detecting, preventing, and addressing technical issues, fraud, and security threats</li>
              <li>Complying with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">4. Cookies & Similar Technologies</h2>
            <p className="mt-3 text-brand-950">We use cookies and similar tracking technologies to collect information about your browsing activities and to enhance your experience on our website. Cookies are small data files stored on your device that help us:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Remember your preferences and settings</li>
              <li>Keep you logged in to your account</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Personalize content and advertisements</li>
              <li>Improve website performance and functionality</li>
            </ul>
            <p className="mt-3">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, without cookies, some parts of our website may not function properly.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">5. Data Sharing & Third Parties</h2>
            <p className="mt-3 text-brand-950">We may share your information with carefully selected third parties for specific purposes:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Service Providers:</strong> Third-party companies that perform services on our behalf, such as payment processing (when introduced), data analysis, email delivery, hosting services, and logistics partners</li>
              <li><strong>Business Partners:</strong> Suppliers, farmers, and logistics providers as necessary for order fulfillment and service delivery, when such services are operational</li>
              <li><strong>Legal Compliance:</strong> When required to comply with legal obligations, court orders, government requests, or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, divestiture, restructuring, reorganization, dissolution, or sale or transfer of some or all of our assets</li>
            </ul>
            <p className="mt-3">We do not sell your Personal Information to third parties for their marketing purposes without your explicit consent. We require all third parties to respect the security of your Personal Information and to use it only in accordance with this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">6. Data Security</h2>
            <p className="mt-3 text-brand-950">We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Secure socket layer (SSL) encryption for data transmission</li>
              <li>Secure payment processing through reputable third-party gateways, when payment services are introduced</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security reviews and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="mt-3">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your Personal Information, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">7. Data Retention</h2>
            <p className="mt-3 text-brand-950">We retain your Personal Information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods may vary based on:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>The type of information and the purpose for which it was collected</li>
              <li>Legal and regulatory requirements</li>
              <li>Business needs and operational considerations</li>
              <li>Your preferences and consent settings</li>
            </ul>
            <p className="mt-3">When we no longer need your Personal Information for the purposes for which it was collected, we will securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">8. Your Privacy Rights</h2>
            <p className="mt-3 text-brand-950">Depending on applicable law, you may have the following rights regarding your Personal Information:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Access:</strong> Request access to and receive a copy of your Personal Information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your Personal Information, subject to certain exceptions</li>
              <li><strong>Restriction:</strong> Object to or restrict processing of your Personal Information</li>
              <li><strong>Portability:</strong> Request transfer of your Personal Information to another service provider</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on your consent to process your information</li>
              <li><strong>Complaint:</strong> Lodge a complaint with a supervisory authority or data protection regulator</li>
            </ul>
            <p className="mt-3">To exercise these rights, please contact us using the information provided in the Contact Us section below.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">9. Children's Privacy</h2>
            <p className="mt-3 text-brand-950">Our services are not intended for individuals under the applicable legal age as defined by relevant laws. We do not knowingly collect Personal Information from children under this age. If you become aware that a child has provided us with Personal Information, please contact us immediately, and we will take steps to delete such information.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">10. International Data Transfers</h2>
            <p className="mt-3 text-brand-950">Freshira India Private Limited is headquartered in India and primarily operates within India. If we expand our operations internationally or engage with service providers located in other countries, your Personal Information may be transferred to and processed in countries outside of India. In such cases, we will ensure that appropriate safeguards are in place to protect your Personal Information in accordance with applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">11. Third-Party Links</h2>
            <p className="mt-3 text-brand-950">Our website may contain links to third-party websites, including those of our partners, suppliers, and service providers. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">12. Changes to This Privacy Policy</h2>
            <p className="mt-3 text-brand-950">We may update our Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email notification to registered users (for material changes)</li>
            </ul>
            <p className="mt-3">You are advised to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">13. Contact Us</h2>
            <p className="mt-3 text-brand-950">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="mt-4 rounded-xl bg-brand-50 p-5 border border-brand-100">
              <p className="font-semibold text-brand-950">Freshira India Private Limited</p>
              <p className="mt-2">SN.3A, Siddhata Apartment, Devalipada, Bolinj, Virar, Vasai, Palghar, Maharashtra – 401303, India</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
              <p className="mt-2">Phone: Use the enquiry form on the Contact page</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Privacy-related enquiries</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
            </div>
            <p className="mt-3">We will respond to your privacy-related inquiries within a reasonable timeframe.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">14. Final Statement</h2>
            <p className="mt-3 text-brand-950">This Privacy Policy is intended to provide transparency about our data practices and to build trust with our users. Freshira India Private Limited is committed to protecting your privacy and handling your Personal Information responsibly in accordance with applicable laws and regulations.</p>
          </section>
        </div>
      </article>
    </>
  );
}

export function TermsAndConditionsPage() {
  return (
    <>
      <PageHero 
        eyebrow="Legal information" 
        title="Terms & Conditions" 
        description="Terms governing your use of Freshira's website and services."
      />
      <article className="section-py">
        <div className="container max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <div className="rounded-xl bg-brand-50 p-5 border border-brand-100">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Effective Date</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 mt-4">Last Updated</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">Table of Contents</h2>
            <ol className="mt-3 space-y-2 list-decimal list-inside text-brand-950">
              <li>Introduction</li>
              <li>Acceptance of Terms</li>
              <li>Eligibility to Use the Website</li>
              <li>Website Purpose</li>
              <li>User Responsibilities</li>
              <li>Intellectual Property Rights</li>
              <li>Product & Service Information</li>
              <li>Pricing & Availability</li>
              <li>Orders, Payments & Future Transactions</li>
              <li>Third-Party Links & Services</li>
              <li>Prohibited Uses</li>
              <li>Limitation of Liability</li>
              <li>Indemnification</li>
              <li>Privacy</li>
              <li>Suspension or Termination of Access</li>
              <li>Governing Law & Jurisdiction</li>
              <li>Changes to These Terms</li>
              <li>Contact Us</li>
              <li>Final Statement</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">1. Introduction</h2>
            <p className="mt-3 text-brand-950">Welcome to the website of Freshira India Private Limited ("Freshira," "we," "us," or "our"). We appreciate your interest in our Agri-Commerce & Supply Chain platform. These Terms & Conditions ("Terms") establish the legal framework governing your use of our website and any services we may offer. Freshira is committed to providing a professional, reliable, and transparent digital experience that reflects our dedication to quality and excellence in agricultural commerce.</p>
            <p className="mt-3">We encourage you to read these Terms carefully before accessing or using our website. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms in their entirety, please do not access or use our website. Your continued use of our website following any changes to these Terms constitutes your acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">2. Acceptance of Terms</h2>
            <p className="mt-3 text-brand-950">By accessing or using this website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using this website. The materials contained on this website are protected by applicable copyright and trademark law.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">3. Eligibility to Use the Website</h2>
            <p className="mt-3 text-brand-950">You must be at least the applicable legal age as defined by relevant laws to use this website. By using this website, you warrant that you meet this eligibility requirement. If you are using this website on behalf of an organization, you warrant that you have the authority to bind that organization to these Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">4. Website Purpose</h2>
            <p className="mt-3 text-brand-950">This website currently serves as an informational and corporate presentation platform for Freshira India Private Limited. It provides information about our Agri-Commerce & Supply Chain platform, our services, and our business. Certain features such as online ordering, payment processing, customer accounts, and delivery services may be introduced in the future. The availability and functionality of such features will be communicated at the time of introduction.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">5. User Responsibilities</h2>
            <p className="mt-3 text-brand-950">As a user of this website, you agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide accurate and complete information when required</li>
              <li>Maintain the confidentiality of your account credentials, if you create an account</li>
              <li>Notify us immediately of any unauthorized use of your account or any other security breach</li>
              <li>Use this website only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the website in any manner that could damage, disable, overburden, or impair our servers or networks</li>
              <li>Not attempt to gain unauthorized access to any part of the website or any related systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">6. Intellectual Property Rights</h2>
            <p className="mt-3 text-brand-950">All content, features, and functionality on this website, including but not limited to text, graphics, logos, images, software, designs, and trademarks, are the exclusive property of Freshira India Private Limited or its licensors and are protected by international copyright, trademark, and other intellectual property laws. You may not use, reproduce, modify, distribute, display, or create derivative works of any content without our prior written consent.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">7. Product & Service Information</h2>
            <p className="mt-3 text-brand-950">Product information, descriptions, images, pricing, and availability displayed on this website are for informational purposes only and are subject to change without prior notice. While we strive to maintain accurate and up-to-date information, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free. Any reliance on such information is entirely at your own risk.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">8. Pricing & Availability</h2>
            <p className="mt-3 text-brand-950">All prices displayed on this website are subject to change without notice. We reserve the right at any time to modify or discontinue any product or service without notice. We are not liable to you or to any third party for any modification, price change, suspension, or discontinuance of any product or service.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">9. Orders, Payments & Future Transactions</h2>
            <p className="mt-3 text-brand-950">If and when ordering and payment services are introduced on this website, all orders will be subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product information, or suspected fraud. Payment terms, if applicable, will be specified at the time of order. We may use third-party payment processors and do not store complete payment information on our servers.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">10. Third-Party Links & Services</h2>
            <p className="mt-3 text-brand-950">This website may contain links to third-party websites or services that are not owned or controlled by Freshira. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the terms and conditions and privacy policies of any third-party websites you visit.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">11. Prohibited Uses</h2>
            <p className="mt-3 text-brand-950">You may not use this website for any purpose that is unlawful or prohibited by these Terms. Prohibited uses include, but are not limited to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Using the website for any fraudulent or unlawful purpose</li>
              <li>Copying, scraping, or harvesting data from the website without authorization</li>
              <li>Introducing viruses, malware, or any harmful code into the website</li>
              <li>Attempting to interfere with or disrupt the website or servers</li>
              <li>Using automated tools to access the website without permission</li>
              <li>Impersonating any person or entity or misrepresenting your affiliation</li>
              <li>Violating any applicable local, state, national, or international law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">12. Limitation of Liability</h2>
            <p className="mt-3 text-brand-950">To the fullest extent permitted by applicable law, Freshira shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from your use or inability to use the website. In no event shall Freshira's total liability to you for all claims exceed the amount you have paid, if any, to access the website.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">13. Indemnification</h2>
            <p className="mt-3 text-brand-950">You agree to indemnify, defend, and hold harmless Freshira India Private Limited, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of the website, your violation of these Terms, or your violation of any rights of another.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">14. Privacy</h2>
            <p className="mt-3 text-brand-950">Your use of our website is also subject to our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">15. Suspension or Termination of Access</h2>
            <p className="mt-3 text-brand-950">We reserve the right to suspend or terminate your access to this website at any time, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms. Upon termination, your right to use the website will immediately cease.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">16. Governing Law & Jurisdiction</h2>
            <p className="mt-3 text-brand-950">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts located in Maharashtra, India.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">17. Changes to These Terms</h2>
            <p className="mt-3 text-brand-950">We reserve the right to modify these Terms at any time. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes. We will notify users of material changes by updating the "Last Updated" date and, where appropriate, through other communication channels.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">18. Contact Us</h2>
            <p className="mt-3 text-brand-950">If you have any questions, concerns, or requests regarding these Terms & Conditions, please contact us. We welcome your enquiries and are committed to addressing your questions in a timely and professional manner.</p>
            <div className="mt-4 rounded-xl bg-brand-50 p-5 border border-brand-100">
              <p className="font-semibold text-brand-950">Freshira India Private Limited</p>
              <p className="mt-2">SN.3A, Siddhata Apartment, Devalipada, Bolinj, Virar, Vasai, Palghar, Maharashtra – 401303, India</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
              <p className="mt-2">Phone: Use the enquiry form on the Contact page</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Business Enquiries</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Legal Enquiries</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
            </div>
            <p className="mt-3">We will respond to your inquiries within a reasonable timeframe and appreciate your patience as we address your questions.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">19. Final Statement</h2>
            <p className="mt-3 text-brand-950">These Terms & Conditions establish a clear and transparent framework for your use of our website. Freshira India Private Limited is committed to maintaining a secure, reliable, and professional digital platform that upholds the highest standards of integrity and user trust. We value your engagement with our platform and are dedicated to ensuring that your experience is positive, informative, and aligned with our commitment to excellence in agricultural commerce.</p>
            <p className="mt-3">We encourage you to review these Terms periodically to stay informed about any updates. Your responsible use of our website contributes to a safe and productive digital environment for all users. Should you have any questions, concerns, or suggestions, please do not hesitate to contact us. We appreciate your trust in Freshira and look forward to serving you with the professionalism and dedication that define our brand.</p>
          </section>
        </div>
      </article>
    </>
  );
}

export function ShippingPolicyPage() {
  return (
    <>
      <PageHero 
        eyebrow="Legal information" 
        title="Shipping Policy" 
        description="Delivery information, service areas, timing, and charges for Freshira orders."
      />
      <article className="section-py">
        <div className="container max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <div className="rounded-xl bg-brand-50 p-5 border border-brand-100">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Effective Date</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 mt-4">Last Updated</p>
            <p className="text-brand-950">Effective from the date this policy is published</p>
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">Table of Contents</h2>
            <ol className="mt-3 space-y-2 list-decimal list-inside text-brand-950">
              <li>Introduction</li>
              <li>Shipping Coverage</li>
              <li>Order Processing</li>
              <li>Estimated Delivery Timelines</li>
              <li>Shipping Charges</li>
              <li>Delivery Attempts</li>
              <li>Order Tracking</li>
              <li>Delays & Unforeseen Circumstances</li>
              <li>Customer Responsibilities</li>
              <li>Damaged or Missing Shipments</li>
              <li>Future Shipping Services</li>
              <li>Changes to This Shipping Policy</li>
              <li>Contact Us</li>
              <li>Final Statement</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">1. Introduction</h2>
            <p className="mt-3 text-brand-950">This Shipping Policy outlines the delivery terms, service areas, timing, and charges applicable to orders placed through Freshira India Private Limited ("Freshira"). As an Agri-Commerce & Supply Chain platform, we are committed to ensuring that your products reach you in optimal condition and within reasonable timeframes when shipping services are operational.</p>
            <p className="mt-3">Please note that this policy provides a framework for our shipping operations. Specific details regarding service areas, delivery timelines, and shipping charges will be confirmed when shipping services become available. We reserve the right to modify this policy as our operations evolve.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">2. Shipping Coverage</h2>
            <p className="mt-3 text-brand-950">When shipping services are introduced, Freshira aims to provide delivery services to specific geographic regions. Our intended service coverage may include:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Primary service areas within Maharashtra, with our registered office in Palghar district</li>
              <li>Extended service areas based on logistics partnerships and route optimization</li>
              <li>Delivery to specific pin codes within our operational network</li>
            </ul>
            <p className="mt-3">Service availability is subject to change based on operational considerations, seasonal factors, logistics partner capabilities, and business requirements. We will communicate confirmed service areas when shipping services are officially launched.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">3. Order Processing</h2>
            <p className="mt-3 text-brand-950">When order processing and shipping services are operational, orders will be processed within the following intended timeframes:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Standard orders: Processed within the processing window shown at order confirmation</li>
              <li>Orders placed after cutoff time: Processed on the next business day</li>
              <li>Orders placed on weekends or holidays: Processed on the next working day</li>
              <li>Custom or bulk orders: Processing time communicated at order confirmation</li>
            </ul>
            <p className="mt-3">Processing times may vary based on order complexity, product availability, and operational capacity. We will provide confirmed processing timelines when shipping services are introduced.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">4. Estimated Delivery Timelines</h2>
            <p className="mt-3 text-brand-950">When delivery services are available, estimated delivery times may vary based on location and product category:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Local delivery within primary service area: [To be specified] business days</li>
              <li>Regional delivery within extended service area: [To be specified] business days</li>
              <li>Perishable products: Expedited delivery options may be available when operational</li>
              <li>Non-perishable products: Standard delivery timelines may apply</li>
            </ul>
            <p className="mt-3">Delivery estimates will be provided as guidelines and are not guaranteed. Actual delivery times may vary due to weather conditions, traffic, address accessibility, and other factors beyond our control. Confirmed delivery timelines will be provided at the time of order.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">5. Shipping Charges</h2>
            <p className="mt-3 text-brand-950">When shipping services are introduced, shipping fees may be calculated based on:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Order value and weight</li>
              <li>Delivery distance and service area</li>
              <li>Product category (perishable vs. non-perishable)</li>
              <li>Delivery speed preference (standard vs. expedited)</li>
            </ul>
            <p className="mt-3">Free delivery may be available for orders meeting minimum purchase thresholds. Specific thresholds, charges, and shipping options will be displayed at checkout when shipping services are operational. Shipping charges are subject to change without prior notice.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">6. Delivery Attempts</h2>
            <p className="mt-3 text-brand-950">When delivery services are operational, our standard practice may include:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Delivery attempts at the specified address during business hours</li>
              <li>Contact with the recipient to coordinate delivery timing</li>
              <li>Proof of delivery through signature or photo confirmation</li>
            </ul>
            <p className="mt-3">If delivery cannot be completed due to incorrect address, recipient unavailability, or inaccessible location, additional charges may apply for redelivery or the order may be returned to origin. Specific procedures will be communicated when shipping services are introduced.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">7. Order Tracking</h2>
            <p className="mt-3 text-brand-950">When shipping services are available, Freshira intends to provide order tracking capabilities to help you monitor your delivery status. Tracking information may be shared via email, SMS, or app notification once your order is dispatched. The availability and features of order tracking will be confirmed when shipping services are launched.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">8. Delays & Unforeseen Circumstances</h2>
            <p className="mt-3 text-brand-950">Freshira is not responsible for delivery delays caused by circumstances beyond our control, including but not limited to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Natural disasters, severe weather conditions, or force majeure events</li>
              <li>Government restrictions, curfews, or regulatory actions</li>
              <li>Third-party logistics partner disruptions</li>
              <li>Address inaccuracies or recipient unavailability</li>
              <li>Local security or access restrictions</li>
              <li>Transportation strikes or labor disputes</li>
            </ul>
            <p className="mt-3">We will make reasonable efforts to communicate significant delays to affected customers when possible.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">9. Customer Responsibilities</h2>
            <p className="mt-3 text-brand-950">To ensure successful delivery when shipping services are operational, customers are responsible for:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Providing complete and accurate shipping address details at checkout</li>
              <li>Ensuring someone is available to receive the delivery at the specified time</li>
              <li>Providing a contact number for delivery coordination</li>
              <li>Ensuring access to the delivery location is unobstructed</li>
              <li>Communicating special delivery instructions clearly</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">10. Damaged or Missing Shipments</h2>
            <p className="mt-3 text-brand-950">If you receive a damaged shipment or if your shipment is missing, please contact us within the timeframe stated in the order confirmation of the expected delivery date. We may require:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Photos of the damaged packaging and products</li>
              <li>Description of the damage or missing items</li>
              <li>Order confirmation details</li>
            </ul>
            <p className="mt-3">We will review such cases on an individual basis and take appropriate action in accordance with our Return and Refund Policies when those policies are operational. Specific procedures for handling damaged or missing shipments will be communicated when shipping services are introduced.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">11. Future Shipping Services</h2>
            <p className="mt-3 text-brand-950">This Shipping Policy provides a framework for future shipping operations. Freshira may introduce shipping services, delivery options, and logistics partnerships at its discretion. The availability, scope, and terms of shipping services will be communicated at the time of introduction. This policy may be updated to reflect actual operational capabilities and service offerings.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">12. Changes to This Shipping Policy</h2>
            <p className="mt-3 text-brand-950">We reserve the right to modify this Shipping Policy at any time. Changes may include updates to service areas, delivery timelines, shipping charges, and operational procedures. All changes are effective immediately when we post them. Your continued use of our shipping services following the posting of revised policy means that you accept and agree to the changes. We will notify customers of material changes by updating the "Last Updated" date and, where appropriate, through other communication channels.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">13. Contact Us</h2>
            <p className="mt-3 text-brand-950">If you have any questions about this Shipping Policy or shipping-related inquiries, please contact us:</p>
            <div className="mt-4 rounded-xl bg-brand-50 p-5 border border-brand-100">
              <p className="font-semibold text-brand-950">Freshira India Private Limited</p>
              <p className="mt-2">SN.3A, Siddhata Apartment, Devalipada, Bolinj, Virar, Vasai, Palghar, Maharashtra – 401303, India</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
              <p className="mt-2">Phone: Use the enquiry form on the Contact page</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Shipping Enquiries</p>
              <p className="mt-2">Email: Use the enquiry form on the Contact page</p>
            </div>
            <p className="mt-3">We will respond to your shipping-related inquiries within a reasonable timeframe and appreciate your patience as we develop our shipping operations.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">14. Final Statement</h2>
            <p className="mt-3 text-brand-950">This Shipping Policy is intended to provide transparency about our approach to delivery and logistics. Freshira India Private Limited is committed to developing reliable, efficient, and customer-focused shipping services that align with our dedication to quality in agricultural commerce. We will update this policy as our shipping operations evolve and encourage you to review it periodically for the most current information.</p>
          </section>
        </div>
      </article>
    </>
  );
}

const legalCopy: Record<string, [string, string]> = { "/return-policy": ["Return Policy", "Return eligibility, quality concerns and support timelines should be confirmed and approved before production use."], "/refund-policy": ["Refund Policy", "Any refund approach for a production commerce service would be defined with product, payment and service-specific rules."], "/cancellation-policy": ["Cancellation Policy", "A production cancellation policy should explain when an order can be changed or cancelled and how refunds are handled."], "/cookie-policy": ["Cookie Policy", "A production website may use essential and optional cookies to support functionality, preferences and measurement."], "/disclaimer": ["Disclaimer", "Product details, prices, policies, statistics and testimonials may change as Freshira’s operations develop. Please confirm current information before relying on it."], };
export function LegalPage() { const { pathname } = useLocation(); const [title, intro] = legalCopy[pathname] || legalCopy["/disclaimer"]; return <><PageHero eyebrow="Freshira information" title={title} description={intro}/><article className="section-py"><div className="container max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground"><p><strong className="text-brand-950">Demo notice.</strong> This generated content is for a frontend presentation only. It is not legal advice, and the final policy should be reviewed and approved by Freshira India Private Limited and legal counsel before production use.</p>{["Purpose and scope", "Information and communication", "Service expectations", "Updates and contact", "Review before production"].map((heading) => <section key={heading}><h2 className="font-display text-2xl font-bold text-brand-950">{heading}</h2><p className="mt-3">Freshira may use this section to explain its approach, responsibilities and customer-facing expectations in clear language appropriate to the relevant service. Specific terms, retention periods, rights, exceptions and contact channels should be completed using verified company information.</p></section>)}</div></article></>; }

function EmptyState({ title, text, link = "/products", linkText = "Explore products", onReset }: { title: string; text: string; link?: string; linkText?: string; onReset?: () => void }) { return <section className="section-py"><div className="container"><div className="mx-auto max-w-xl rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-soft sm:p-12"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-primary"><LeafIcon/></span><h2 className="mt-5 font-display text-2xl font-bold text-brand-950">{title}</h2><p className="mt-3 leading-7 text-muted-foreground">{text}</p>{onReset ? <button onClick={onReset} className="mt-7 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Reset filters</button> : <Link to={link} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">{linkText} <ArrowRight size={16}/></Link>}</div></div></section>; }
function LeafIcon() { return <Leaf size={28}/>; }
