import React from "react";
import Image from "next/image";
import Link from "next/link";

type Subcategory = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  url?: string;
  longDescription?: string;
  parentCategory?: string;
};

type Props = {
  data: Subcategory;
};

const SubcategoryCard = ({ data }: Props) => {
  const imageUrl = data.image || data.bannerImage || "/images/no-image.png";

  // build link to subcategory: prefer data.url, otherwise /shop/<category>/<subcategory>
  const href = data.url || 
    `/shop/${(data.parentCategory || "").toLowerCase().split(" ").join("-")}/${data.name.toLowerCase().split(" ").join("-")}`;

  return (
    <Link href={href} className="flex flex-col items-start aspect-auto">
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden relative">
        <Image
          src={imageUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-cover transition-all duration-500"
          alt={data.name}
          priority
        />
      </div>
      <strong className="text-black xl:text-xl">{data.name}</strong>
      {data.parentCategory && (
        <div className="flex gap-2 mt-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{data.parentCategory}</span>
        </div>
      )}
      {data.description && (
        <div className="mt-2 text-xs text-gray-500 line-clamp-2">{data.description}</div>
      )}
    </Link>
  );
};

export default SubcategoryCard;
