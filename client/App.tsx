import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/FreshiraLayout";
import { StoreProvider } from "@/context/store-context";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {
  AboutPage,
  BlogPage,
  CartPage,
  CategoriesPage,
  CategoryPage,
  CareersPage,
  CheckoutPage,
  ContactPage,
  FAQPage,
  ProductDetailsPage,
  ProductsPage,
  ServicesPage,
  TestimonialsPage,
} from "./pages/FreshiraPages";
import { PolicyPage } from "./pages/PolicyPage";
import { WishlistPage } from "./pages/WishlistPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <StoreProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:slug" element={<CategoryPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy-policy" element={<PolicyPage />} />
              <Route path="/terms-and-conditions" element={<PolicyPage />} />
              <Route path="/refund-policy" element={<PolicyPage />} />
              <Route path="/return-policy" element={<PolicyPage />} />
              <Route path="/shipping-policy" element={<PolicyPage />} />
              <Route path="/cancellation-policy" element={<PolicyPage />} />
              <Route path="/cookie-policy" element={<PolicyPage />} />
              <Route path="/disclaimer" element={<PolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StoreProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
