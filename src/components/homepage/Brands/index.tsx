"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const CallToAction = () => {
  return (
    <section className="bg-[#F8F9FA] text-[#2F323A] py-16 md:py-24 px-6 md:px-16">
      {/* Split Headline */}
      <div className="max-w-6xl mx-auto mb-14">
        <h1
          className={cn(
            montserrat.className,
            "text-4xl md:text-6xl font-bold text-[#008C99] leading-tight"
          )}
        >
          <span className="block text-left">Precision in Every Cut</span>
          <span className="block text-right text-[#2F323A]">
            Integrity in Every Instrument
          </span>
        </h1>
      </div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Section */}
        <div>
          <h2
            className={cn(
              montserrat.className,
              "text-2xl md:text-3xl font-bold mb-4 text-[#008C99]"
            )}
          >
            Global Excellence in Surgical & Dental Instruments
          </h2>
          <p
            className={cn(
              openSans.className,
              "text-base md:text-lg mb-8 text-[#2F323A]/80"
            )}
          >
            KyMed is a global <strong>medical device manufacturer</strong> specializing in
            <strong> surgical and dental instruments</strong> crafted from
            <strong> high quality stainless steel</strong>. Engineered at our
            <strong> manufacturing facility in Sialkot</strong>, Pakistan and
            distributed worldwide, KyMed combines precision engineering, quality
            assurance, and on-time delivery to serve healthcare professionals
            across continents.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/categories"
              className={cn(
                montserrat.className,
                "bg-[#008C99] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#007885] transition-all duration-300 w-full sm:w-auto text-center"
              )}
            >
              Explore Product Range
            </Link>
            <Link
              href="/contact"
              className={cn(
                montserrat.className,
                "bg-[#C4C7CA] text-[#2F323A] px-6 py-3 rounded-2xl font-semibold hover:bg-[#E5F5F7] transition-all duration-300 w-full sm:w-auto text-center"
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/MaterialsTechnicalStandards"
              className={cn(
                montserrat.className,
                "border border-[#008C99] text-[#008C99] px-6 py-3 rounded-2xl font-semibold hover:bg-[#E5F5F7] transition-all duration-300 w-full sm:w-auto text-center"
              )}
            >
              Materials & Quality
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/picture01.jpg"
            alt="KyMed Surgical Instruments"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg border border-[#E5F5F7]"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
