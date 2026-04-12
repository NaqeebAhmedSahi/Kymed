"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { SubCategory } from "@/lib/productsLoader";

interface SubcategoryGridProps {
  subcategories: SubCategory[];
  categoryId: string;
}

export default function SubcategoryGrid({ subcategories, categoryId }: SubcategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {subcategories.map((subcat) => (
        <Link
          key={subcat.id}
          href={`/shop/${categoryId}/${subcat.id}`}
          className="group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-64 p-4 bg-white">
              {subcat.image_local_path ? (
                <Image
                  src={`/${subcat.image_local_path}`}
                  alt={subcat.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#E5F5F7] to-[#C4C7CA] flex items-center justify-center">
                  <span className="text-[#008C99]">No image</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className={cn("font-semibold text-lg text-[#2F323A]", montserrat.className)}>
                {subcat.name}
              </h3>
              <p className={cn("text-sm text-[#5D6169] mt-2 line-clamp-2", openSans.className)}>
                {subcat.description}
              </p>
              <div className="mt-4 text-[#008C99] font-semibold text-sm">
                {(subcat.subcategories?.length || 0) + (subcat.products?.length || 0)} Items →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
