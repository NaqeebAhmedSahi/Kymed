import React from "react";
import { Metadata } from "next";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { loadProductsData } from "@/lib/productsLoader";
import CategoryGrid from "@/components/shop/CategoryGrid";

export const metadata: Metadata = {
  title: "All Categories - KyMed",
  description: "Browse all surgical instrument categories from our comprehensive collection",
  openGraph: {
    title: "All Categories - KyMed",
    description: "Browse surgical instrument categories",
    url: "https://kymed.co/categories",
  },
};

export default async function CategoriesPage() {
  const productsData = await loadProductsData();
  const categories = productsData.categories || [];

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <header className="text-center mb-12">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          Browse All Categories
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl mx-auto", openSans.className)}>
          Explore our comprehensive range of surgical instruments organized by category.
          From surgical instruments to dental tools, find everything you need.
        </p>
      </header>

      {categories.length > 0 ? (
        <CategoryGrid categories={categories} />
      ) : (
        <div className="text-center py-12">
          <p className="text-[#5D6169]">No categories available</p>
        </div>
      )}
    </main>
  );
}
