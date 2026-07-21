import React from "react";
import { Metadata } from "next";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import {
  getSurgicalInstrumentsCategory,
  loadProductsData,
} from "@/lib/productsLoader";
import SubcategoryGrid from "@/components/shop/SubcategoryGrid";
import { FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Surgical instruments - KyMed",
  description:
    "Browse Stille, scissors, forceps, retractors, and our full surgical instruments range.",
  openGraph: {
    title: "Surgical instruments - KyMed",
    description: "Browse surgical instrument categories",
    url: "https://kymed.co/shop",
  },
};

export default async function ShopPage() {
  const productsData = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(productsData);
  const subcategories = surgical?.subcategories ?? [];

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <header className="text-center mb-16">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-4", montserrat.className)}>
          Surgical Instruments Catalog
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl mx-auto leading-relaxed mb-10", openSans.className)}>
          Precision and quality you can trust. Explore our comprehensive range of high-grade
          surgical instruments, designed for medical excellence and long-term durability.
        </p>

        {/* Professional Search Bar in Shop Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <form
            action="/search"
            method="GET"
            className="relative flex items-center shadow-xl rounded-2xl overflow-hidden border border-[#C4C7CA]/20"
          >
            <div className="absolute left-6 text-[#008C99]">
              <FiSearch className="w-6 h-6" />
            </div>
            <input
              name="q"
              type="text"
              placeholder="Search by name, article number or description..."
              className="w-full py-5 pl-16 pr-32 bg-white outline-none text-lg text-[#2F323A] placeholder-[#C4C7CA]"
            />
            <button
              type="submit"
              className="absolute right-2 px-6 py-3 bg-[#008C99] text-white rounded-xl font-bold hover:bg-[#006670] transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {surgical && subcategories.length > 0 ? (
        <section>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C4C7CA]/20">
            <h2 className={cn("text-2xl font-bold text-[#2F323A]", montserrat.className)}>
              Browse Categories
            </h2>
            <span className="text-sm font-medium text-[#5D6169]">
              {subcategories.length} Main Categories
            </span>
          </div>
          <SubcategoryGrid subcategories={subcategories} categoryId={surgical.id} />
        </section>
      ) : (
        <div className="text-center py-20 bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-[#C4C7CA]/30">
          <p className="text-[#5D6169]">Surgical instruments catalog is currently being updated. Please check back later.</p>
        </div>
      )}
    </main>
  );
}
