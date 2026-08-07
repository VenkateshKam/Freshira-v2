import { type ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUp, Heart, Leaf, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/context/store-context";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Categories", "/categories"],
  ["Services", "/services"],
  ["Journal", "/blog"],
] as const;

const footerColumns = [
  { title: "Discover", links: [["Our story", "/about"], ["Catalogue", "/products"], ["Categories", "/categories"], ["Services", "/services"]] },
  { title: "Support", links: [["Contact us", "/contact"], ["FAQs", "/faq"], ["Delivery policy", "/shipping-policy"], ["Returns", "/return-policy"]] },
  { title: "Company", links: [["Careers", "/careers"], ["Privacy", "/privacy-policy"], ["Terms of use", "/terms-and-conditions"], ["Disclaimer", "/disclaimer"]] },
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Freshira home"><span className={`relative grid h-10 w-10 place-items-center rounded-2xl shadow-soft transition duration-300 group-hover:-rotate-6 ${inverse ? "bg-gold-400 text-brand-950" : "bg-primary text-white"}`}><Leaf size={21} strokeWidth={2.5} /><span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ${inverse ? "bg-white" : "bg-gold-400"}`} /></span><span className={`font-display text-[1.65rem] font-semibold tracking-tight ${inverse ? "text-white" : "text-brand-950"}`}>fresh<span className={inverse ? "text-gold-300" : "text-primary"}>ira</span></span></Link>;
}

function NavLinks({ mobile = false, close }: { mobile?: boolean; close?: () => void }) {
  return <nav className={mobile ? "grid gap-1" : "hidden items-center gap-0.5 rounded-full border border-brand-100/80 bg-white/85 p-1.5 shadow-soft lg:flex"} aria-label="Primary navigation">
    {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={close} className={({ isActive }) => `rounded-full px-3.5 py-2.5 text-xs font-bold transition ${isActive ? "bg-brand-950 text-white shadow-sm" : "text-brand-800 hover:bg-brand-50 hover:text-primary"}`}>{label}</NavLink>)}
  </nav>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist } = useStore();
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-[#FAF8F5]/90 backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between gap-4"><Logo /><NavLinks /><div className="flex items-center gap-1"><Link to="/products" className="grid h-10 w-10 place-items-center rounded-full text-brand-800 transition hover:bg-brand-100 hover:text-primary" aria-label="Search products"><Search size={18} /></Link><Link to="/wishlist" className="relative grid h-10 w-10 place-items-center rounded-full text-brand-800 transition hover:bg-brand-100 hover:text-primary" aria-label="Wishlist"><Heart size={18} /><span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold-400 px-1 text-[9px] font-bold text-brand-950">{wishlist.length}</span></Link><Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full bg-primary text-white shadow-sm transition hover:bg-brand-700" aria-label="Cart"><ShoppingBag size={17} /><span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-400 px-1 text-[9px] font-bold text-brand-950">{cartCount}</span></Link><button type="button" onClick={() => setOpen((value) => !value)} className="ml-1 grid h-10 w-10 place-items-center rounded-full border border-brand-200 text-brand-800 lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={19} />}</button></div></div>
    {open && <div className="border-t border-brand-100 bg-[#FAF8F5] px-4 py-4 shadow-card lg:hidden"><NavLinks mobile close={() => setOpen(false)} /><Link to="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-white">Talk to Freshira</Link></div>}
  </header>;
}

export function Footer() {
  return <footer className="relative overflow-hidden bg-brand-950 text-brand-100"><div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[52px] border-gold-400/10" /><div className="container relative pt-14 sm:pt-20"><div className="grid gap-12 border-b border-brand-800 pb-12 lg:grid-cols-[1.4fr_1.8fr]"><div><Logo inverse /><p className="mt-6 max-w-sm text-sm leading-7 text-brand-200">Freshira connects more thoughtful sourcing, dependable operations, and better everyday food experiences.</p><Link to="/contact" className="mt-7 inline-flex rounded-full border border-gold-300/50 px-5 py-3 text-sm font-bold text-gold-200 transition hover:bg-gold-300 hover:text-brand-950">Start a conversation</Link></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{footerColumns.map((column) => <div key={column.title}><h2 className="text-[11px] font-bold uppercase tracking-[.18em] text-gold-300">{column.title}</h2><ul className="mt-5 space-y-3">{column.links.map(([label, path]) => <li key={path}><Link to={path} className="text-sm text-brand-200 transition hover:text-white">{label}</Link></li>)}</ul></div>)}</div></div><div className="flex flex-col gap-3 py-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Freshira India Private Limited.</p><div className="flex gap-5"><Link to="/privacy-policy" className="transition hover:text-brand-100">Privacy</Link><Link to="/terms-and-conditions" className="transition hover:text-brand-100">Terms</Link><Link to="/cookie-policy" className="transition hover:text-brand-100">Cookies</Link></div></div></div></footer>;
}

export function Layout({ children }: { children: ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => { const onScroll = () => setShowTop(window.scrollY > 500); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5]"><Header /><main>{children}</main><Footer />{showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand-950 text-white shadow-card transition hover:bg-primary" aria-label="Back to top"><ArrowUp size={18} /></button>}</div>;
}
