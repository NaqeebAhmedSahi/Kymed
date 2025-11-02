import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";

// Import Google Fonts (if not already in your global styles)
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const CallToAction = () => {
  return (
    <div className="relative bg-[#F8F9FA] py-14 px-6 md:px-16 rounded-2xl overflow-hidden max-w-frame mx-auto shadow-sm border border-[#E5F5F7]">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E5F5F7] via-white to-[#E5F5F7] opacity-70 rounded-2xl" />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center space-y-6">
        <h2
          className={cn(
            montserrat.className,
            "text-3xl md:text-4xl font-bold text-[#2F323A]"
          )}
        >
          Partner with KyMed — Global Surgical Quality You Can Trust
        </h2>

        <p
          className={cn(
            openSans.className,
            "text-[#2F323A]/80 max-w-2xl text-base md:text-lg"
          )}
        >
          From German stainless steel to ISO-certified precision manufacturing,
          KyMed delivers instruments you can rely on — wherever you operate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            className={cn(
              montserrat.className,
              "bg-[#008C99] text-white text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:bg-[#E5F5F7] hover:text-[#008C99] transition-all duration-300 shadow-md"
            )}
          >
            Request a Quote
          </button>

          <button
            className={cn(
              montserrat.className,
              "border-2 border-[#008C99] text-[#008C99] text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:bg-[#008C99] hover:text-white transition-all duration-300"
            )}
          >
            Explore Product Range
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
