import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/FreshiraUI";
import { useStore } from "@/context/store-context";
import { products } from "@/data/products";

export function WishlistPage() {
  const { wishlist } = useStore();
  const savedProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <section className="section-py">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 border-b border-brand-100 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.22em] text-primary">Your collection</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-950">Saved for later</h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Keep track of products you want to revisit, then add them to your cart when you are ready.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800"><Heart size={16} className="text-primary" />{savedProducts.length} saved</span>
        </div>
        {savedProducts.length ? (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{savedProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-soft sm:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-primary"><Heart size={26} /></span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-brand-950">Nothing saved yet</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Tap the heart on any product to save it here for later.</p>
            <Link to="/products" className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700">Browse products</Link>
          </div>
        )}
      </div>
    </section>
  );
}
