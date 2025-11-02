"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import ReviewCard from "@/components/common/ReviewCard";
import { Review } from "@/types/review.types";

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);  // Clean up event listener
    };
  }, [api]);

  if (!isClient) return null;

  return (
    <section className="overflow-hidden bg-[#F8F9FA] py-16">
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full mb-6 md:mb-9"
        >
          <div className="relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0">
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={cn([
                montserrat.className,
                "text-[32px] leading-[36px] md:text-5xl capitalize mr-auto text-[#008C99] font-bold",
              ])}
            >
              Our Happy Customers
            </motion.h2>
            <div className="flex items-center space-x-1 ml-2">
              <CarouselPrevious variant="ghost" className="text-2xl text-[#008C99]">
                <FaArrowLeft />
              </CarouselPrevious>
              <CarouselNext variant="ghost" className="text-2xl text-[#008C99]">
                <FaArrowRight />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent>
            {data.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="w-full max-w-[358px] sm:max-w-[400px] pl-5"
              >
                <ReviewCard
                  className="h-full bg-white border border-[#C4C7CA] shadow-[0_4px_16px_0_rgba(47,50,58,0.08)] font-openSans text-[#2F323A]"
                  data={review}
                  blurChild={
                    data.length >= 6 && (
                      <div
                        className={cn([
                          isDesktop
                            ? current !== index &&
                              "backdrop-blur-[2px]"  // Apply blur based on current index
                            : current === index && "backdrop-blur-[2px]",  // Apply blur only for the current item in mobile
                          "absolute bg-[#E5F5F7] right-0 top-0 h-full w-full z-10",
                        ])}
                      />
                    )
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Reviews;
