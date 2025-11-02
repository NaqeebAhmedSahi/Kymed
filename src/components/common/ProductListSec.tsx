import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => {
  // Brand color mapping
  const colorMap: Record<string, string> = {
    "NEW ARRIVALS": "text-[#008C99] bg-[#F8F9FA] border-b-4 border-[#C4C7CA]", // Deep Teal, White Smoke, Surgical Silver accent
    "TOP SELLING": "text-[#2F323A] bg-[#F8F9FA] border-b-4 border-[#E5F5F7]", // Graphite Gray, White Smoke, Ice Blue accent
  };
  return (
    <section className={cn("max-w-frame mx-auto text-center rounded-3xl shadow-lg p-8 mb-12", colorMap[title.toUpperCase()]?.split(" ").filter(c => c.startsWith("bg"))[0] || "bg-white")}> 
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          montserrat.className,
          "font-bold text-[32px] md:text-5xl mb-8 md:mb-14 capitalize",
          colorMap[title.toUpperCase()]?.split(" ").filter(c => c.startsWith("text"))[0] || "text-black",
          colorMap[title.toUpperCase()]?.split(" ").filter(c => c.startsWith("border"))[0] || ""
        ])}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={openSans.className}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mb-6 md:mb-9"
        >
          <CarouselContent className="mx-4 xl:mx-0 space-x-4 sm:space-x-5">
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-full max-w-[198px] sm:max-w-[295px] pl-0"
              >
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {viewAllLink && (
          <div className="w-full px-4 sm:px-0 text-center">
            <Link
              href={viewAllLink}
              className={cn("w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full font-semibold font-montserrat text-sm sm:text-base border-[#C4C7CA] bg-[#E5F5F7] text-[#008C99] transition-colors duration-300 hover:bg-[#008C99] hover:text-white")}
            >
              View All
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;
