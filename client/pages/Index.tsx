import { ReactNode, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Truck,
  Building2,
  ShoppingBag,
  HeartHandshake,
  Sparkles,
  Clock,
  Layers,
  CheckCircle2
} from "lucide-react";
import { categories } from "@/data/categories";
import { type Product, bestSellerProducts, featuredProducts, newArrivalProducts, products, seasonalProducts } from "@/data/products";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { blogs } from "@/data/blogs";
import { CategoryCard, ProductCard, SectionHeading, StarRating } from "@/components/FreshiraUI";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const spring = { type: "spring", stiffness: 90, damping: 18 } as const;

const journeySteps = [
  {
    number: "01",
    title: "Farmers & Soil",
    description: "Sourced directly from 500+ verified organic & regional growers.",
    icon: Sprout,
    badge: "Direct Sourcing"
  },
  {
    number: "02",
    title: "Procurement",
    description: "Fair-trade farm gate collection with zero middleman markups.",
    icon: PackageCheck,
    badge: "Fair Price"
  },
  {
    number: "03",
    title: "Quality Audit",
    description: "3-layer purity & freshness testing at regional collection hubs.",
    icon: ShieldCheck,
    badge: "Lab Checked"
  },
  {
    number: "04",
    title: "Climate Storage",
    description: "Humidity-controlled atmospheric hubs locking in peak nutrition.",
    icon: Building2,
    badge: "Cold Storage"
  },
  {
    number: "05",
    title: "Smart Logistics",
    description: "GPS-tracked cold transport routes with real-time temperature monitoring.",
    icon: Truck,
    badge: "Cold Chain"
  },
  {
    number: "06",
    title: "Doorstep Fresh",
    description: "Hand-curated packaging delivered directly to your home kitchen.",
    icon: ShoppingBag,
    badge: "Same Day"
  }
];

const impactStats = [
  {
    value: "100+",
    title: "Fresh Harvest Items",
    subtitle: "Organic produce & everyday kitchen staples",
    icon: Sprout
  },
  {
    value: "25+",
    title: "Produce Categories",
    subtitle: "From native heirloom fruits to cold-pressed oils",
    icon: Layers
  },
  {
    value: "100%",
    title: "Farm-Connected",
    subtitle: "Direct grower network for true origin transparency",
    icon: CheckCircle2
  },
  {
    value: "< 24h",
    title: "Farm-to-Door Transit",
    subtitle: "Temperature-monitored rapid supply chain",
    icon: Clock
  }
];

function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setIsVideoLoaded(true))
        .catch(() => setIsVideoLoaded(false));
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Real Professional Farm Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onCanPlay={() => setIsVideoLoaded(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isVideoLoaded ? 0.8 : 0, scale: 1.05 }}
        transition={{ opacity: { duration: 1.2, ease: "easeOut" }, scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      >
        <source
          src="https://videos.pexels.com/video-files/5765580/5765580-sd_960_540_30fps.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Premium Fallback Image with Ken Burns Zoom Animation */}
      <motion.img
        src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=90"
        alt="Professional farm field"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ scale: { duration: 18, repeat: Infinity, ease: "easeInOut" } }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-50"
        }`}
      />

      {/* Premium Dark Green/Cream Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E14]/70 via-[#0B1E14]/40 to-[#0B1E14]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E14]/25 via-transparent to-[#0B1E14]/5" />
      
      {/* Subtle cream accent overlay for warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 via-transparent to-emerald-50/5 pointer-events-none" />
    </div>
  );
}

export default function Index() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate min-h-[700px] overflow-hidden bg-[#0B1E14] text-white sm:min-h-[780px]">
        <HeroVideoBackground />
        <div className="absolute -right-44 top-10 h-[34rem] w-[34rem] rounded-full border-[70px] border-gold-400/10" />
        <div className="container relative grid min-h-[700px] items-end gap-12 py-16 sm:min-h-[780px] sm:py-24 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="max-w-2xl">
            <motion.p variants={reveal} className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-gold-200 backdrop-blur">
              <Sprout size={14} className="text-gold-300" /> Rooted in freshness
            </motion.p>
            <motion.h1 variants={reveal} className="font-display text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">
              From good soil<br />
              <span className="bg-gradient-to-r from-gold-300 via-amber-300 to-gold-400 bg-clip-text text-transparent">to good tables.</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-8 text-brand-100 sm:text-lg">
              Freshira connects farmers, quality sourcing and smart supply chains to make everyday freshness feel closer, simpler and more dependable.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-gold-300 shadow-md">
                Shop fresh picks <ArrowDownRight size={17} className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                Our approach
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            className="relative mx-auto w-full max-w-[390px] lg:mr-4"
          >
            <div className="organic-blob relative overflow-hidden border-[10px] border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=90"
                alt="Colourful fresh produce"
                className="aspect-[.82] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 -mt-8">
        <div className="container grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-brand-100 bg-card shadow-card sm:grid-cols-4">
          <Trust icon={<ShieldCheck />} title="Quality first" text="Carefully checked" />
          <Trust icon={<Leaf />} title="Better sourcing" text="Farm-connected" />
          <Trust icon={<PackageCheck />} title="Handled with care" text="Thoughtful packing" />
          <Trust icon={<Truck />} title="Supply ready" text="Reliable movement" />
        </div>
      </section>

      {/* Category Harvest */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="Browse the harvest"
            title="A little closer to what you love"
            description="Fresh produce, pantry staples and everyday essentials, curated around real kitchens."
            action={
              <Link
                to="/categories"
                className="hidden items-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-xs font-bold text-brand-900 transition hover:border-primary hover:text-primary sm:flex"
              >
                Explore all <ArrowRight size={15} />
              </Link>
            }
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.07 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {categories.slice(0, 6).map((category) => (
              <motion.div variants={reveal} key={category.slug}>
                <CategoryCard
                  {...category}
                  count={products.filter((p) => p.categorySlug === category.slug).length}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-py bg-brand-100/30">
        <div className="container">
          <SectionHeading
            eyebrow="The Freshira edit"
            title="Fresh picks with a point of view"
            description="A considered selection for everyday cooking, gifting, sharing and stocking up."
            action={
              <Link to="/products" className="hidden items-center gap-2 text-sm font-bold text-primary sm:flex">
                View catalogue <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Journey Section */}
      <section className="section-py bg-gradient-to-b from-transparent via-brand-50/50 to-transparent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[.26em] text-primary mb-3">
              From Origin to Doorstep
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-5xl">
              A journey worth knowing
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Complete transparency and climate-controlled handling at every stage of the supply chain.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 relative">
            {journeySteps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-[1.6rem] border border-brand-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card hover:-translate-y-1"
                >
                  <div>
                    {/* Header line with step badge and number */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1E14] text-gold-300 shadow-sm transition group-hover:scale-105">
                        <IconComp size={22} />
                      </span>
                      <span className="font-display text-2xl font-extrabold text-gold-600/80">
                        {step.number}
                      </span>
                    </div>

                    <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                      {step.badge}
                    </span>

                    <h3 className="font-display text-lg font-bold text-brand-950 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {index < journeySteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white border border-brand-200 text-primary shadow-xs">
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B & Capabilities */}
      <section className="section-py bg-[#0B1E14] text-white">
        <div className="container">
          <SectionHeading
            eyebrow="Beyond the basket"
            title="Built to move food better"
            description="Commerce and supply-chain capabilities that help good food travel further."
            action={
              <Link to="/services" className="hidden items-center gap-2 text-sm font-bold text-gold-300 sm:flex">
                See capabilities <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                whileHover={{ y: -6 }}
                transition={spring}
                key={service.slug}
                className="group rounded-[1.4rem] border border-brand-700 bg-brand-900/60 p-6"
              >
                <span className="text-xs font-bold text-gold-300">0{index + 1}</span>
                <h3 className="mt-9 font-display text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-200">{service.shortDescription}</p>
                <ArrowRight size={18} className="mt-6 text-brand-500 transition group-hover:translate-x-2 group-hover:text-gold-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <ProductSection
        eyebrow="Loved by the community"
        title="Best sellers, naturally"
        products={bestSellerProducts.slice(0, 4)}
        link="/products"
      />

      {/* Seasonal Section */}
      <section className="section-py bg-gold-50/60">
        <div className="container">
          <SectionHeading
            eyebrow="In season"
            title="The good stuff, right now"
            description="Celebrate the varieties that are freshest in this moment."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Luxury Impact & Metric Showcase Section */}
      <section ref={statsRef} className="section-py">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B1E14] p-8 text-white sm:p-14 shadow-2xl border border-brand-900/80">
            {/* Ambient Background Glows */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-10 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/10 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
                <Sparkles size={13} className="text-gold-400" /> Scaled for Freshness
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Impact across the supply chain
              </h2>
              <p className="mt-3 text-xs leading-6 text-brand-200 sm:text-sm">
                Built to connect farms directly with modern kitchens through efficient, zero-compromise logistics.
              </p>
            </div>

            <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col justify-between rounded-2xl border border-brand-800/80 bg-brand-900/40 p-6 backdrop-blur transition hover:border-gold-400/40 hover:bg-brand-900/70"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                          <StatIcon size={20} />
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-400">
                          Freshira Standard
                        </span>
                      </div>
                      <p className="font-display text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gold-300 via-amber-300 to-gold-400 bg-clip-text text-transparent sm:text-5xl">
                        {stat.value}
                      </p>
                      <h3 className="mt-3 font-display text-base font-bold text-white">
                        {stat.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-brand-200">
                        {stat.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-brand-100/20">
        <div className="container">
          <SectionHeading eyebrow="Community voices" title="Good food has a way of bringing people together" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <article key={testimonial.id} className="rounded-[1.4rem] border border-brand-100 bg-card p-6 shadow-soft">
                <StarRating rating={testimonial.rating} />
                <p className="mt-6 font-display text-xl leading-8 text-brand-900">“{testimonial.text}”</p>
                <div className="mt-8 flex items-center gap-3 border-t border-brand-100 pt-5">
                  <img src={`https://i.pravatar.cc/80?u=${testimonial.avatarSeed}`} alt="" className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-brand-950">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} · Demo identity</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Journal */}
      <section className="section-py">
        <div className="container grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionHeading
              eyebrow="A little reading"
              title="Notes from the source"
              description="Stories about agriculture, freshness, logistics and the choices behind everyday food."
              action={
                <Link to="/blog" className="text-sm font-bold text-primary">
                  Read the journal <ArrowRight size={15} className="inline" />
                </Link>
              }
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <Link key={blog.id} to="/blog" className="group overflow-hidden rounded-[1.3rem] border border-brand-100 bg-card shadow-soft">
                <img src={blog.image} alt={blog.title} loading="lazy" className="aspect-[1.25] w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">{blog.category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-brand-950">{blog.title}</h3>
                  <p className="mt-3 text-xs font-semibold text-brand-500">{blog.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-py">
        <div className="container grid gap-8 rounded-[2.5rem] bg-[#0B1E14] p-8 text-white sm:p-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center shadow-2xl border border-brand-900">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.24em] text-gold-300">Stay close to the source</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Good food starts with good connections.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-brand-200">
              Get fresh product updates, seasonal picks and thoughtful stories from the Freshira ecosystem.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white/10 p-2 backdrop-blur">
            <div className="flex rounded-[1.15rem] bg-card p-2">
              <input
                aria-label="Email address"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-xl bg-transparent px-4 text-sm text-brand-950 outline-none placeholder:text-brand-400"
              />
              <button className="rounded-xl bg-gold-400 px-6 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-gold-300 shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Trust({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 border-brand-100 px-3 py-5 text-center [&:not(:last-child)]:border-r sm:py-6">
      <span className="text-primary">{icon}</span>
      <span>
        <b className="block text-sm text-brand-950">{title}</b>
        <small className="text-[11px] text-muted-foreground">{text}</small>
      </span>
    </div>
  );
}

function ProductSection({
  eyebrow,
  title,
  products: shownProducts,
  link,
  muted = false
}: {
  eyebrow: string;
  title: string;
  products: Product[];
  link: string;
  muted?: boolean;
}) {
  return (
    <section className={`section-py ${muted ? "bg-gold-50/50" : ""}`}>
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          action={
            <Link to={link} className="hidden items-center gap-2 text-sm font-bold text-primary sm:flex">
              View all <ArrowRight size={16} />
            </Link>
          }
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shownProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
