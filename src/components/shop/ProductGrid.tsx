"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { CatalogNode, Product } from "@/lib/productsLoader";

export type ProductGridItem = CatalogNode | Product;

interface ProductGridProps {
  categoryId: string;
  /** Path segments from the top category down to the node whose children or products we are listing. */
  pathToNode: string[];
  items: ProductGridItem[];
  variant: "subcategories" | "products";
}

function shopCategoryHref(categoryId: string, segments: string[]) {
  if (segments.length === 0) return `/shop/${categoryId}`;
  return `/shop/${categoryId}/${segments.join("/")}`;
}

/** Reserved segment before product id (see shop/[category]/[...slug]/page.tsx). */
const PRODUCT_SEGMENT = "p";

function isCatalogNode(item: ProductGridItem): item is CatalogNode {
  return "subcategories" in item && Array.isArray((item as CatalogNode).subcategories);
}

export default function ProductGrid({
  categoryId,
  pathToNode,
  items,
  variant,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const href =
          variant === "subcategories"
            ? shopCategoryHref(categoryId, [...pathToNode, item.id])
            : `${shopCategoryHref(categoryId, pathToNode)}/${PRODUCT_SEGMENT}/${item.id}`;

        const node = isCatalogNode(item) ? item : null;
        const product = !node ? (item as Product) : null;

        return (
          <Link key={item.id} href={href} className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white h-full">
              <div className="relative w-full h-64 p-4 bg-white">
                {(() => {
                  const node = isCatalogNode(item) ? item : null;
                  const prod = !node ? (item as Product) : null;
                  
                  let displayImg = item.image_local_path;
                  
                  if (prod) {
                    // Strictly follow "dont show first image" and "show second in product listing"
                    displayImg = (prod.image_local_paths && prod.image_local_paths.length > 1)
                      ? prod.image_local_paths[1]
                      : ""; // Hide if no second image
                  }

                  return displayImg ? (
                    <Image
                      src={`/${displayImg}`}
                      alt={item.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#E5F5F7] to-[#C4C7CA] flex items-center justify-center">
                      <span className="text-[#008C99]">No image available</span>
                    </div>
                  );
                })()}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className={cn("font-semibold text-lg text-[#2F323A]", montserrat.className)}>
                  {item.name}
                </h3>
                <p className={cn("text-sm text-[#5D6169] mt-2 line-clamp-2 flex-grow", openSans.className)}>
                  {node
                    ? node.description
                    : product?.short_description || product?.title || ""}
                </p>
                <div className="mt-4 text-[#008C99] font-semibold text-sm">
                  {variant === "subcategories"
                    ? `${(node?.products?.length || 0) + (node?.subcategories?.length || 0)} items →`
                    : "View details →"}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
