import React from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id?: { $oid: string };
  id: number;
  title: string;
  category?: string;
  subcategory?: string;
  description?: string;
  gallery?: string[];
  srcUrl?: string | null;
};

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  // Use the first image in gallery, then srcUrl, then fallback
  let imageUrl = "";
  if (data.srcUrl) {
    imageUrl = data.srcUrl;
  } else if (data.gallery && data.gallery.length > 0) {
    imageUrl = data.gallery[0];
  } else {
    imageUrl = "/images/no-image.png"; // Make sure this file exists in public/images
  }

  const productSlug = data.title
    ? data.title.split(" ").join("-").toLowerCase()
    : "product";

  // Build canonical URL: /shop/{category}/{pathSegments}/p/{id}
  const categoryId = data.category || "9"; // Default to surgical instruments
  const pathSegments = (data as any).pathToNode && (data as any).pathToNode.length > 0 ? (data as any).pathToNode.join("/") + "/" : "";
  const productUrl = `/shop/${categoryId}/${pathSegments}p/${data.id}`;

  return (
    <Link
      href={productUrl}
      className="flex flex-col items-start aspect-auto group"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden relative">
        {/* Badges: New Arrival / Top Selling (clickable, link to product) */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {(data as any).newArrival && (
            <span className="uppercase text-[#008C99] bg-[#F8F9FA] border-b-4 border-[#C4C7CA] px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">New Arrival</span>
          )}
          {(data as any).topSelling && (
            <span className="uppercase text-[#2F323A] bg-[#F8F9FA] border-b-4 border-[#E5F5F7] px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">Top Selling</span>
          )}
        </div>

        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-md object-contain group-hover:scale-110 transition-transform duration-500 bg-white"
          alt={data.title || "Product Image"}
          unoptimized={imageUrl.startsWith("http")}
          priority
        />
      </div>
      <strong className="text-black xl:text-xl">
        {data.title || "Unnamed Product"}
      </strong>
      <div className="flex gap-2 mt-2 flex-wrap">
        {data.category && (
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{data.category}</span>
        )}
        {data.subcategory && (
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{data.subcategory}</span>
        )}
      </div>
      {data.description && (
        <div className="mt-2 text-xs text-gray-500 line-clamp-2">{data.description}</div>
      )}
    </Link>
  );
};

export default ProductCard;
