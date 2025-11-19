import React from "react";
import Link from "next/link";

type Cert = {
  id: string;
  title: string;
  short?: string;
  description: string;
  issuedBy?: string;
  year?: number;
  docLink?: string;
};

const CertificationCard = ({ cert }: { cert: Cert }) => {
  return (
    <article className="group bg-white rounded-2xl border border-[#E7E9EB] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-none w-14 h-14 rounded-full bg-[#E5F5F7] flex items-center justify-center text-2xl text-[#008C99] font-bold">
          ✓
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#2F323A] mb-1">{cert.title}</h3>
          <div className="text-sm text-[#5D6169] mb-3">{cert.short}</div>
          <p className="text-sm text-[#5D6169] mb-4 line-clamp-3">{cert.description}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs text-[#5D6169]">{cert.issuedBy} • {cert.year}</div>
            {cert.docLink ? (
              <Link href={cert.docLink} target="_blank" className="inline-block px-4 py-2 rounded-full bg-[#E5F5F7] text-[#008C99] font-semibold text-sm hover:bg-[#008C99] hover:text-white transition-colors duration-200">
                View PDF
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CertificationCard;
