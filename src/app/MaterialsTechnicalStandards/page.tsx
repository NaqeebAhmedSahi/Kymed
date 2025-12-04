"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const MaterialsTechnicalStandards = () => {
  return (
    <section className="bg-[#F8F9FA] text-[#2F323A] py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1
          className={cn(
            montserrat.className,
            "text-3xl sm:text-4xl md:text-6xl font-bold text-[#008C99] leading-tight mb-6"
          )}
        >
          Materials & Technical Standards
        </h1>
        <p
          className={cn(
            openSans.className,
            "text-sm sm:text-base md:text-xl text-[#2F323A]/90 max-w-3xl mx-auto"
          )}
        >
          Comprehensive overview of materials, grades, testing, and compliance that ensure KyMed instruments meet international quality standards.
        </p>
      </div>

      {/* German Stainless Steel Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
          <h2 className={cn(montserrat.className, "text-3xl md:text-4xl font-bold text-[#008C99] mb-6")}>
            high quality stainless steel — Verified and Certified
          </h2>
          <p className={cn(openSans.className, "text-base md:text-lg mb-6")}>
            KyMed utilizes European mill-certified stainless steels that comply with <strong>ISO 7153-1</strong> and <strong>ASTM F899</strong> standards. Grades are selected based on instrument function, hardness requirement, and corrosion resistance.
          </p>

          {/* Core Martensitic Grades Table */}
          <h3 className={cn(montserrat.className, "text-lg sm:text-xl font-bold text-[#008C99] mb-3")}>Core Martensitic Grades (Cutting & Holding Edges)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-[#C4C7CA] rounded-lg overflow-hidden text-left text-sm sm:text-base">
              <thead className="bg-[#E5F5F7]">
                <tr>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">EN / DIN Grade</th>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">AISI Equivalent</th>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">Typical Application</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: "1.4021 (X20Cr13)", aisi: "420A", application: "General instruments, forceps" },
                  { grade: "1.4028 (X30Cr13)", aisi: "420B", application: "Scissors, needle holders" },
                  { grade: "1.4034 (X46Cr13)", aisi: "420C / 440A", application: "Cutting instruments requiring high hardness" },
                  { grade: "1.4116 (X50CrMoV15)", aisi: "—", application: "Premium German grade for superior cutting and corrosion resistance" },
                  { grade: "1.4122 (X39CrMo17-1)", aisi: "—", application: "Enhanced strength and durability applications" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F0F0F0] transition-colors">
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.grade}</td>
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.aisi}</td>
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src="/images/Clinical-risk-management.webp"
            alt="high quality stainless steel"
            width={800}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            className="rounded-2xl shadow-lg border border-[#E5F5F7] w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Austenitic Grades Card */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 mb-16">
        <h2 className={cn(montserrat.className, "text-3xl md:text-4xl font-bold text-[#008C99] mb-6")}>
          Austenitic Grades (Non-Cutting & Corrosion-Critical)
        </h2>
          <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#C4C7CA] rounded-lg overflow-hidden text-left text-sm sm:text-base">
            <thead className="bg-[#E5F5F7]">
              <tr>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">EN / DIN Grade</th>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">AISI Equivalent</th>
                  <th className="px-3 py-2 border-b border-[#C4C7CA]">Typical Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                { grade: "1.4301 (X5CrNi18-10)", aisi: "304", application: "Handles, non-cutting parts" },
                { grade: "1.4404 (X2CrNiMo17-12-2)", aisi: "316L", application: "High-corrosion areas, retractors, trays" },
                { grade: "1.4310 (X10CrNi18-8)", aisi: "301", application: "Springs and flexible components" },
              ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F0F0F0] transition-colors">
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.grade}</td>
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.aisi}</td>
                    <td className="px-3 py-2 border-b border-[#C4C7CA]">{row.application}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Precipitation-Hardening Grade Card */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-16">
        <h2 className={cn(montserrat.className, "text-3xl md:text-4xl font-bold text-[#008C99] mb-6")}>
          Precipitation-Hardening Grade
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#C4C7CA] rounded-lg overflow-hidden text-left">
            <thead className="bg-[#E5F5F7]">
              <tr>
                <th className="px-4 py-2 border-b border-[#C4C7CA]">EN / DIN Grade</th>
                <th className="px-4 py-2 border-b border-[#C4C7CA]">AISI Equivalent</th>
                <th className="px-4 py-2 border-b border-[#C4C7CA]">Typical Application</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F0F0F0] transition-colors">
                <td className="px-4 py-2 border-b border-[#C4C7CA]">1.4542 (X5CrNiCuNb16-4)</td>
                <td className="px-4 py-2 border-b border-[#C4C7CA]">17-4 PH</td>
                <td className="px-4 py-2 border-b border-[#C4C7CA]">High-strength locks and jaws</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Other Sections as Cards */}
      {[
        {
          title: "Testing & Validation",
          items: [
            "Hardness: 48–56 HRC (ASTM E18)",
            "Surface Roughness: ≤ 0.2 µm for surgical finish",
            "Corrosion Resistance: Boiling-water & autoclave cycles; passivation (ASTM A967)",
            "Material Verification: Spectro analysis for each heat lot",
            "Traceability: Mill Certificate → Batch → MTR linked to shipment",
          ],
        },
        {
          title: "Certified Precision. Proven Performance.",
          items: [
            "ISO 13485:2016 — Medical Devices QMS",
            "ISO 9001:2015 — Quality Management Systems",
            // "CE Marking Directives for Surgical Instruments",
            "Every batch undergoes documented inspection for dimensional accuracy, functional testing, and visual excellence before packing.",
            "All instruments ship with traceable Material Test Reports (MTRs) and Quality Conformance Certificates (QCCs).",
          ],
        },
        {
          title: "Packaging & Delivery",
          items: [
            "CE-compliant sterile and non-sterile options",
            "Moisture-barrier poly and medical-grade pouch packs",
            "Barcode-based batch tracking",
            "Custom branding & private label support",
            "Secure export crating for international air and sea freight",
          ],
        },
      ].map((section, idx) => (
        <div
            key={idx}
            className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 mb-16 flex flex-col justify-center"
          >
          <h2 className={cn(montserrat.className, "text-3xl md:text-4xl font-bold text-[#008C99] mb-6")}>
            {section.title}
          </h2>
          <ul className={cn(openSans.className, "list-disc list-inside text-lg space-y-2")}>
            {section.items.map((item, idy) => (
              <li key={idy}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default MaterialsTechnicalStandards;
