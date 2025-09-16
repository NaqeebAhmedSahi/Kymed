import React from "react";
import Image from "next/image";
import Link from "next/link";

// Update Product type to match your data structure
type Product = {
  _id?: { $oid: string };
  id: number;
  title: string;
  category?: string;
  subcategory?: string;
  description?: string;
  gallery?: string | null;
};

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  // Fallback image if gallery is null or undefined
  const imageUrl = data.gallery
    ? `/downloaded_images(1)/downloaded_images/${data.gallery}`
    : "/images/placeholder.png";

  const productSlug = data.title
    ? data.title.split(" ").join("-")
    : "product";

  return (
    <Link
      href={`/shop/product/${data.id}/${productSlug}`}
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
      {data.category && (
        <span className="text-gray-600 text-sm mt-1">{data.category}</span>
      )}
    </Link>
  );
};

export default ProductCard;
