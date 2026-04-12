import React from "react";
import { Metadata } from "next";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import {
  getSurgicalInstrumentsCategory,
  loadProductsData,
} from "@/lib/productsLoader";
import SubcategoryGrid from "@/components/shop/SubcategoryGrid";

export const metadata: Metadata = {
  title: "Surgical instruments - KyMed",
  description:
    "Browse Stille, scissors, forceps, retractors, and our full surgical instruments range.",
  openGraph: {
    title: "Surgical instruments - KyMed",
    description: "Browse surgical instrument categories",
    url: "https://kymed.co/categories",
  },
};

export default async function CategoriesPage() {
  const productsData = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(productsData);
  const subcategories = surgical?.subcategories ?? [];

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <header className="text-center mb-12">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          Surgical instruments
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl mx-auto", openSans.className)}>
          Scissors and forceps can be seen as an extension of the researcher’s fingers—delicate
          and precise. Here you will find a wide range of surgical instruments, with the Swedish
          brand Stille as our highest-quality supplier.
        </p>
      </header>

      {surgical && subcategories.length > 0 ? (
        <SubcategoryGrid subcategories={subcategories} categoryId={surgical.id} />
      ) : (
        <div className="text-center py-12">
          <p className="text-[#5D6169]">Surgical instruments catalog is not available.</p>
        </div>
      )}
    </main>
  );
}
