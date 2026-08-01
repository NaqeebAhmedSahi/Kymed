import React from "react";
import { montserrat, openSans } from "@/styles/fonts";
import { certifications, certificationsInProgress } from "@/data/certifications";
import CertificationCard from "@/components/certification/CertificationCard";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Certifications - KyMed",
  description:
    "KyMed certifications including ISO 13485, ISO 9001, cGMP, CE Class 1R, CE MDR Compliant, and FDA Compliant quality systems.",
};

export default function CertificationsPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <header className="text-center mb-12">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          Certifications & Quality
        </h1>
        <p className={cn("text-lg text-[#5D6169] max-w-3xl mx-auto", openSans.className)}>
          We maintain high standards for design, manufacturing, and testing. Below are our key certifications and compliance commitments.
        </p>
      </header>

      <section className="mb-16">
        <h2 className={cn("text-2xl md:text-3xl font-bold text-[#2F323A] mb-6", montserrat.className)}>
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className={cn("text-2xl md:text-3xl font-bold text-[#2F323A] mb-6", montserrat.className)}>
          In Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsInProgress.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-dashed border-[#008C99]/40 bg-[#E5F5F7]/40 p-1"
            >
              <CertificationCard cert={cert} />
            </div>
          ))}
        </div>
        <p className={cn("mt-4 text-sm text-[#5D6169]", openSans.className)}>
          Saudi FDA Certification — Application in process
        </p>
      </section>

      <section className="mt-8 bg-[#F8F9FA] rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className={cn("text-2xl font-semibold mb-2", montserrat.className)}>
              Need further assurance?
            </h2>
            <p className={cn(openSans.className, "text-[#5D6169]")}>
              Contact our quality team for reports, test data, and product-specific documentation.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670] text-white font-semibold"
          >
            Contact Quality Team
          </a>
        </div>
      </section>
    </main>
  );
}
