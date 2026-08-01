import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";
import CallToAction from "./NewsLetterSection";
import {
  getSurgicalInstrumentsCategory,
  loadProductsData,
} from "@/lib/productsLoader";
import { catalogSegment, shopCategoryHref } from "@/lib/shopPaths";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const socialsData = [
  { id: 4, icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/kymed" },
];

const Footer = async () => {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  const categorySlug = surgical ? catalogSegment(surgical) : "surgical-instruments";
  const productCategoryLinks = (surgical?.subcategories || []).map((subcat) => ({
    label: subcat.name,
    url: shopCategoryHref(categorySlug, [catalogSegment(subcat)]),
  }));

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", url: "/about" },
        { label: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Product Categories",
      links: productCategoryLinks.length
        ? productCategoryLinks
        : [{ label: "Surgical Instruments", url: "/shop" }],
    },
    {
      title: "Resources",
      links: [
        { label: "Materials & Quality", url: "/MaterialsTechnicalStandards" },
        { label: "Certifications", url: "/certifications" },
        { label: "Request a Quote", url: "/contact" },
      ],
    },
  ];

  return (
    <footer className="mt-20">
      <div className="px-4 mb-20">
        <CallToAction />
      </div>

      <div className="bg-[#2F323A] text-[#F8F9FA] pt-14 pb-8 px-6 md:px-16 rounded-t-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="KyMed Logo"
                width={160}
                height={44}
                className="brightness-200"
                unoptimized
              />
            </Link>
            <p
              className={cn(
                openSans.className,
                "text-[#C4C7CA] text-sm leading-relaxed mb-6"
              )}
            >
              KyMed — crafting precision surgical and dental instruments from
              Sialkot, Pakistan for the world’s healthcare professionals.
            </p>

            <div className="flex gap-3">
              {socialsData.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="w-9 h-9 bg-[#F8F9FA] text-[#008C99] rounded-full flex items-center justify-center hover:bg-[#008C99] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-0">
              <h3
                className={cn(
                  montserrat.className,
                  "text-white text-lg font-semibold mb-5"
                )}
              >
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <Link
                      href={link.url}
                      className="text-[#C4C7CA] hover:text-[#E5F5F7] text-sm leading-snug transition-colors break-words"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-t border-[#C4C7CA]/20 mt-10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={cn(
              openSans.className,
              "text-[#C4C7CA] text-xs md:text-sm text-center"
            )}
          >
            © {new Date().getFullYear()} KyMed. All rights reserved.
          </p>
        </div>

        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
