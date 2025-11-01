"use client";
import React from "react";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

// Example certification logos (replace with your own as needed)
const certifications = [
  {
    name: "CE Marked",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/CE_mark.svg"
  },
  {
    name: "FDA Approved",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/FDA_logo.svg"
  },
  {
    name: "ISO 13485",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ISO_Logo.svg"
  },
  {
    name: "GMP Certified",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/GMP_logo.svg"
  },
  {
    name: "TUV Rheinland",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/T%C3%9CV_Rheinland_logo.svg"
  }
];

const CertificationMarquee = () => {
  // Duplicate certifications for seamless loop
  const marqueeCerts = [...certifications, ...certifications];
  return (
    <section className="relative py-12 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white", integralCF.className)}>Our Certifications</h2>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center whitespace-nowrap gap-16">
            {marqueeCerts.map((cert, idx) => (
              <div key={cert.name + idx} className="flex flex-col items-center min-w-[160px]">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md mb-2 flex items-center justify-center w-[100px] h-[100px]">
                  <img src={cert.img} alt={cert.name} className="object-contain w-full h-full" />
                </div>
                <span className={cn("text-base font-medium text-gray-700 dark:text-gray-200 text-center", integralCF.className)}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee-loop 22s linear infinite;
        }
        @keyframes marquee-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CertificationMarquee;
