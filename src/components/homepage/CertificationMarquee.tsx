"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";

const certifications = [
  { name: "ISO 13485", short: "Quality Management" },
  { name: "ISO 9001", short: "QMS" },
  { name: "cGMP", short: "Good Manufacturing" },
  { name: "CE Class 1R", short: "European Conformity" },
  { name: "CE MDR Compliant", short: "EU MDR Alignment" },
  { name: "FDA Compliant", short: "U.S. Compliance" },
];

const CertificationMarquee = () => {
  const marqueeCerts = [...certifications, ...certifications];

  return (
    <section className="relative py-14 md:py-16 overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#E5F5F7]/40 to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p
            className={cn(
              openSans.className,
              "text-xs md:text-sm uppercase tracking-[0.25em] text-[#008C99] mb-3"
            )}
          >
            Quality & Compliance
          </p>
          <h2
            className={cn(
              montserrat.className,
              "text-3xl md:text-4xl font-bold text-[#2F323A]"
            )}
          >
            Our Certifications
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670]" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-5 md:gap-7 w-max">
          {marqueeCerts.map((cert, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className="group flex items-center gap-3 rounded-2xl border border-[#C4C7CA]/50 bg-white/90 px-5 py-3.5 shadow-[0_8px_24px_rgba(47,50,58,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-[#008C99]/40"
            >
              <span
                className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-[#008C99] to-[#006670]"
                aria-hidden
              />
              <div className="flex flex-col items-start min-w-0">
                <span
                  className={cn(
                    montserrat.className,
                    "text-sm md:text-base font-semibold text-[#2F323A] whitespace-nowrap tracking-wide"
                  )}
                >
                  {cert.name}
                </span>
                <span
                  className={cn(
                    openSans.className,
                    "text-xs text-[#5D6169] whitespace-nowrap"
                  )}
                >
                  {cert.short}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-loop 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default CertificationMarquee;
