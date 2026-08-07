import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { PageHero } from "@/components/FreshiraUI";

const pageTitles: Record<string, [string, string]> = {
  "/about": ["Growing a better food connection", "Learn how Freshira brings agriculture, commerce and supply chains closer together."],
  "/products": ["Fresh products", "Browse Freshira's curated demo catalogue of everyday essentials and premium produce."],
  "/categories": ["Shop by category", "Discover a broad range of fresh produce, pantry staples and household essentials."],
  "/services": ["Supply chain, made fresher", "Explore Freshira's technology-enabled commerce and supply-chain capabilities."],
  "/blog": ["The Freshira journal", "Stories and insights from agriculture, freshness and modern food supply chains."],
  "/contact": ["Let's connect", "Reach out to Freshira for customer, sourcing or business enquiries."],
  "/cart": ["Your cart", "Your selected Freshira products will appear here."],
  "/checkout": ["Checkout", "A simple, secure path to complete your Freshira order."],
  "/faq": ["Frequently asked questions", "Find helpful answers about Freshira's products and services."],
  "/testimonials": ["Customer stories", "Feedback from Freshira's community of customers and business buyers."],
  "/careers": ["Grow with Freshira", "Explore future possibilities across commerce, agriculture and supply chains."],
};

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const [title, description] = pageTitles[pathname] ?? ["Freshira", "This section is being prepared as part of the Freshira experience."];
  return <><PageHero title={title} description={description}/><section className="section-py"><div className="container"><div className="mx-auto max-w-2xl rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-soft sm:p-12"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-primary"><Leaf size={28}/></span><h2 className="mt-5 font-display text-2xl font-bold text-brand-950">Designed for a richer next step</h2><p className="mt-3 leading-7 text-muted-foreground">This route is available and shares Freshira's production-ready shell. Detailed content can be developed next while preserving the design system and navigation.</p><Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">Back to Freshira <ArrowRight size={16}/></Link></div></div></section></>;
}
