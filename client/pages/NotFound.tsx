import { Link } from "react-router-dom";
import { ArrowRight, MapPinOff } from "lucide-react";

export default function NotFound() {
  return <section className="grid min-h-[60vh] place-items-center bg-brand-50 px-4 py-16"><div className="max-w-lg text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold-100 text-gold-700"><MapPinOff size={30}/></span><p className="mt-6 font-display text-7xl font-bold text-brand-950">404</p><h1 className="mt-3 font-display text-2xl font-bold text-brand-950">This path isn't on our route.</h1><p className="mt-3 leading-7 text-muted-foreground">The page you were looking for may have moved. Let's get you back to Freshira's fresh picks.</p><div className="mt-7 flex justify-center gap-3"><Link to="/" className="rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-brand-700">Return home</Link><Link to="/products" className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm font-bold text-brand-900 hover:bg-brand-50">Browse products <ArrowRight size={16}/></Link></div></div></section>;
}
