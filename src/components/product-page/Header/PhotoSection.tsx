"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Function to ensure image URLs are properly formatted
const formatImageUrl = (url: string | undefined): string => {
  if (!url) return '/images/placeholder.jpg';
  
  // If it's already a valid URL or starts with /, return as is
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
    return url;
  }
  
  // If it's just a filename, add the downloaded_images path
  return `${url}`;
};

const PhotoSection = ({ data }: { data: Product }) => {
  // Format the main image URL
  const mainImageUrl = formatImageUrl(data.srcUrl);
  
  // Format gallery URLs
  const galleryUrls = data?.gallery?.map(formatImageUrl) || [];
  
  // Initialize selected image - use main image if gallery is empty
  const [selected, setSelected] = useState<string>(mainImageUrl);

  // Update selected image when data changes
  useEffect(() => {
    setSelected(mainImageUrl);
  }, [mainImageUrl]);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
      {/* Show gallery only if there are multiple images */}
      {galleryUrls.length > 0 && (
        <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3.5 w-full lg:w-fit items-center lg:justify-start justify-center">
          {galleryUrls.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
              onClick={() => setSelected(photo)}
            >
              <Image
                src={photo}
                width={152}
                height={167}
                className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                alt={data.title}
                priority
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
        <Image
          src={selected}
          width={444}
          height={530}
          className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>
    </div>
  );
};

export default PhotoSection;