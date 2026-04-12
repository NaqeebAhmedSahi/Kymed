import React from "react";
import { Metadata } from "next";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import {
  getSurgicalInstrumentsCategory,
  isSurgicalShopCategoryParam,
  loadProductsData,
  slugify,
} from "@/lib/productsLoader";
import SubcategoryGrid from "@/components/shop/SubcategoryGrid";
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  if (!isSurgicalShopCategoryParam(params.category, surgical)) {
    notFound();
  }
  const category = data.categories.find(
    (c) => c.id === params.category || slugify(c.name) === params.category
  );

  return {
    title: category ? `${category.name} - KyMed` : "Category - KyMed",
    description: category?.description || "Browse surgical instruments by category",
  };
}

export async function generateStaticParams() {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  if (!surgical) return [];
  const slug = slugify(surgical.name);
  const segments = [surgical.id];
  if (slug !== surgical.id) segments.push(slug);
  return segments.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  if (!isSurgicalShopCategoryParam(params.category, surgical)) {
    notFound();
  }

  const category = data.categories.find(
    (c) => c.id === params.category || slugify(c.name) === params.category
  );

  if (!category) {
    notFound();
  }

  const subcategories = category.subcategories || [];

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <div className="mb-8">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          {category.name}
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl", openSans.className)}>
          {category.description}
        </p>
      </div>

      {subcategories.length > 0 ? (
        <SubcategoryGrid subcategories={subcategories} categoryId={category.id} />
      ) : (
        <div className="text-center py-12">
          <p className="text-[#5D6169]">No subcategories available</p>
        </div>
      )}
    </main>
  );
}