import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="relative py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <div className="flex flex-col justify-center">
        <p
          className={cn([
            integralCF.className,
            "font-bold text-[32px] md:text-[40px] text-white mb-4 md:mb-6",
          ])}
        >
          STAY UPDATED WITH THE LATEST IN SURGICAL INSTRUMENTS & 
        </p>
        {/* <p className="text-white text-sm md:text-base mb-6">
          Join our community of medical professionals and get first access to
          new surgical products, offers, and innovations.
        </p> */}
 
      </div>
    </div>
  );
};

export default NewsLetterSection;
