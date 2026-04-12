"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/productsLoader";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/shop/${category.id}`}
          className="group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-64">
              {category.image_local_path ? (
                <Image
                  src={`/${category.image_local_path}`}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#E5F5F7] to-[#C4C7CA] flex items-center justify-center">
                  <span className="text-[#008C99]">No image</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className={cn("font-semibold text-lg text-[#2F323A]", montserrat.className)}>
                {category.name}
              </h3>
              <p className={cn("text-sm text-[#5D6169] mt-2 line-clamp-2", openSans.className)}>
                {category.description}
              </p>
              <div className="mt-4 text-[#008C99] font-semibold text-sm">
                {category.subcategories?.length || 0} Subcategories →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
