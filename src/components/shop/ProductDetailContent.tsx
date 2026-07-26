"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useAppDispatch } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { parsePrice } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductDetailContentProps {
  product: {
    id: string;
    name: string;
    title?: string;
    short_description?: string;
    full_details?: string;
    long_description?: string;
    image_url: string;
    image_urls: string[];
    image_local_path: string;
    image_local_paths: string[];
    variants: Array<{ article_number: string; description: string; price: string }>;
    specifications: Array<{ article_number: string; description: string; price: string }>;
  };
  categoryId: string;
  /** Path segments to the catalog node that owns this product (e.g. ["145","271"]). */
  pathToNode: string[];
  breadcrumb: { id: string; name: string }[];
}

function shopListingHref(categoryId: string, pathSegments: string[]) {
  if (pathSegments.length === 0) return `/shop/${categoryId}`;
  return `/shop/${categoryId}/${pathSegments.join("/")}`;
}

export default function ProductDetailContent({
  product,
  categoryId,
  pathToNode,
  breadcrumb,
}: ProductDetailContentProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const allPaths =
    product.image_local_paths?.filter(Boolean) && product.image_local_paths.length > 0
      ? product.image_local_paths
      : product.image_local_path
        ? [product.image_local_path]
        : [];

  // Strictly skip the first image (index 0) as requested: "dont show first image", "show second to onward"
  const paths = allPaths.length > 1 ? allPaths.slice(1) : [];

  const safeImageIdx = Math.min(selectedImageIndex, Math.max(0, paths.length - 1));
  const mainImage = paths.length > 0 ? `/${paths[safeImageIdx]}` : null;

  const [isAdded, setIsAdded] = useState(false);
  const variants = product.variants || [];

  const handleAddToCart = () => {
    const variant = variants[selectedVariantIndex];
    if (!variant) return;

    dispatch(
      addToCart({
        id: parseInt(product.id, 10) || Math.floor(Math.random() * 100000),
        name: product.name,
        srcUrl: mainImage || "",
        price: parsePrice(variant.price),
        attributes: [variant.article_number, variant.description],
        discount: { amount: 0, percentage: 0 },
        quantity: quantity,
        url: typeof window !== "undefined" ? window.location.pathname : "",
      })
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#008C99] hover:text-[#006670]">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories" className="text-[#008C99] hover:text-[#006670]">
              Categories
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {breadcrumb.map((crumb, i) => {
            const href = shopListingHref(categoryId, pathToNode.slice(0, i));
            return (
              <React.Fragment key={`${crumb.id}-${i}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={href}
                    className="text-[#008C99] hover:text-[#006670] max-w-[180px] truncate"
                  >
                    {crumb.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          })}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#2F323A] font-semibold max-w-[220px] truncate">
              {product.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative w-full h-96 bg-[#F8F9FA] rounded-2xl overflow-hidden border border-[#C4C7CA]/30">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[#5D6169]">
                No image
              </div>
            )}
          </div>

          {paths.length > 1 ? (
            <div className="flex gap-4 flex-wrap">
              {paths.map((imgPath, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={cn(
                    "relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
                    selectedImageIndex === idx
                      ? "border-[#008C99] shadow-lg"
                      : "border-[#C4C7CA] hover:border-[#008C99]"
                  )}
                >
                  <Image
                    src={`/${imgPath}`}
                    alt={`${product.name} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-8">
          <div>
            <h1 className={cn("text-4xl font-bold mb-4 text-[#2F323A]", montserrat.className)}>
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarFilledIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-[#5D6169]">KyMed catalog</span>
            </div>

            <p className={cn("text-lg text-[#5D6169] leading-relaxed", openSans.className)}>
              {product.short_description || product.title || ""}
            </p>
          </div>

          {variants.length > 0 ? (
            <div>
              <h3 className={cn("text-xl font-semibold mb-4 text-[#2F323A]", montserrat.className)}>
                Available variants
              </h3>
              <div className="space-y-3">
                {variants.map((variant, idx) => (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedVariantIndex(idx);
                    }}
                    className={cn(
                      "p-4 rounded-lg border-2 cursor-pointer transition-all duration-200",
                      selectedVariantIndex === idx
                        ? "border-[#008C99] bg-[#E5F5F7]"
                        : "border-[#C4C7CA] hover:border-[#008C99]"
                    )}
                    onClick={() => setSelectedVariantIndex(idx)}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-semibold text-[#2F323A]">{variant.article_number}</p>
                        <p className="text-sm text-[#5D6169]">{variant.description}</p>
                      </div>
                      {/* <Badge className="bg-[#008C99] text-white shrink-0">{variant.price}</Badge> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className={cn("font-semibold text-[#2F323A]", montserrat.className)}>
                Quantity:
              </label>
              <div className="flex items-center border border-[#C4C7CA] rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#008C99] hover:bg-[#E5F5F7]"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-16 text-center border-0 focus:ring-0"
                  min={1}
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#008C99] hover:bg-[#E5F5F7]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={cn(
                  "w-full py-6 text-lg rounded-xl transition-all duration-300",
                  isAdded 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-gradient-to-r from-[#008C99] to-[#006670] text-white hover:shadow-lg"
                )}
              >
                {isAdded ? "✓ Added to Cart" : "Add to Cart"}
              </Button>
              {isAdded && (
                <Link 
                  href="/cart" 
                  className="text-center text-[#008C99] font-bold py-2 border-2 border-[#008C99] rounded-xl hover:bg-[#E5F5F7] transition-all"
                >
                  View Cart ↗
                </Link>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full py-6 text-lg rounded-xl border-[#C4C7CA] hover:border-[#008C99] hover:text-[#008C99]"
            >
              Request Quote
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#E5F5F7] rounded-lg">
              <p className="text-sm text-[#5D6169]">Variants</p>
              <p className="font-semibold text-[#2F323A]">{variants.length}</p>
            </div>
            <div className="p-4 bg-[#E5F5F7] rounded-lg">
              <p className="text-sm text-[#5D6169]">Supplier</p>
              <p className="font-semibold text-[#008C99]">KyMed</p>
            </div>
          </div>
        </div>
      </div>

      {product.full_details ? (
        <div className="mt-16 pt-12 border-t border-[#C4C7CA]/30">
          <h2 className={cn("text-3xl font-bold mb-6 text-[#2F323A]", montserrat.className)}>
            Product details
          </h2>
          <div className={cn("prose prose-sm max-w-none text-[#5D6169]", openSans.className)}>
            <p className="whitespace-pre-wrap leading-relaxed">{product.full_details}</p>
          </div>
        </div>
      ) : null}

      {product.specifications && product.specifications.length > 0 ? (
        <div className="mt-12">
          <h2 className={cn("text-3xl font-bold mb-6 text-[#2F323A]", montserrat.className)}>
            Specifications
          </h2>
          <div className="space-y-3">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#C4C7CA]/30 rounded-lg">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#2F323A]">{spec.article_number}</p>
                    <p className="text-[#5D6169]">{spec.description}</p>
                  </div>
                  {/* <Badge className="h-fit bg-[#008C99] shrink-0">{spec.price}</Badge> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-10">
        <Link
          href={shopListingHref(categoryId, pathToNode)}
          className="text-[#008C99] font-semibold hover:underline"
        >
          ← Back to listing
        </Link>
      </div>
    </main>
  );
}
