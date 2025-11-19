import React from "react";
import { montserrat, openSans } from "@/styles/fonts";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/certification/CertificationCard";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Certifications - Kymed",
  description: "Our certifications and quality assurances",
};

export default function CertificationsPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <header className="text-center mb-10">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          Certifications & Quality
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl mx-auto", openSans.className)}>
          We maintain high standards for design, manufacturing and testing. Below are our key certifications and documents demonstrating compliance.
        </p>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>

      <section className="mt-8 bg-[#F8F9FA] rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className={cn("text-2xl font-semibold mb-2", montserrat.className)}>Need further assurance?</h2>
            <p className={openSans.className + " text-[#5D6169]"}>Contact our quality team for full reports, test data and product-specific certificates.</p>
          </div>
          <div>
            <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670] text-white font-semibold">Contact Quality Team</a>
          </div>
        </div>
      </section>
    </main>
  );
}
