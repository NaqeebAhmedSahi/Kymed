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
  if (data.gallery && data.gallery.length > 0) {
    imageUrl = data.gallery[0];
  } else if (data.srcUrl) {
    imageUrl = data.srcUrl;
  } else {
    imageUrl = "/images/no-image.png"; // Make sure this file exists in public/images
  }

  const productSlug = data.title
    ? data.title.split(" ").join("-")
    : "product";

  // Build URL: /shop/{category}/{subcategory}/{id}
  const categorySlug = data.category ? data.category.split(" ").join("-").toLowerCase() : "";
  const subcategorySlug = data.subcategory ? data.subcategory.split(" ").join("-").toLowerCase() : "";
  const productUrl = `/shop/${categorySlug}/${subcategorySlug}/${data.id}`;

  return (
    <Link
      href={productUrl}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title || "Product Image"}
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
