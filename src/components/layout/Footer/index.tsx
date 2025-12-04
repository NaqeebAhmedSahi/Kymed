import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";
import CallToAction from "./NewsLetterSection"; // replaces NewsLetterSection
import { categories } from "@/data/categories";

// Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

// Socials Data
const socialsData = [
  // { id: 1, icon: <FaTwitter />, url: "https://twitter.com" },
  // { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
  // { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
  { id: 4, icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  // { id: 5, icon: <FaGithub />, url: "https://github.com/mohammadoftadeh" },
];

// Menu Data
const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", url: "/about" },
      // { label: "Brochure", url: "/brochures" },
      { label: "Contact Us", url: "/contact" },
      // { label: "Materials Technical Standards", url: "/MaterialsTechnicalStandards" },

    ],
  },
  {
    title: "Product Categories",
    // Build category links from the canonical categories data so URLs stay in sync
    links: categories.map((c) => ({ label: c.name, url: c.url ?? `/categiries/${c.name.toLowerCase().replace(/\s+/g, '-')}` })),
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

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* CTA Section */}
      <div className="px-4 mb-20">
        <CallToAction />
      </div>

      {/* Main Footer */}
      <div className="bg-[#2F323A] text-[#F8F9FA] pt-14 pb-8 px-6 md:px-16 rounded-t-2xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="KyMed Logo"
                width={150}
                height={40}
                className="brightness-200"
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

          {/* Dynamic Links Section */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3
                className={cn(
                  montserrat.className,
                  "text-white text-lg font-semibold mb-5"
                )}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className="text-[#C4C7CA] hover:text-[#E5F5F7] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-[#C4C7CA]/20 mt-10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={cn(
              openSans.className,
              "text-[#C4C7CA] text-xs md:text-sm text-center"
            )}
          >
            © {new Date().getFullYear()} KyMed. All rights reserved.  
            {/* Engineered in Sialkot, Pakistan. */}
          </p>

          {/* <div className="flex items-center gap-3">
            {["/icons/Visa.svg", "/icons/mastercard.svg", "/icons/paypal.svg"].map(
              (src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  width={36}
                  height={22}
                  alt="Payment"
                  className="opacity-80"
                />
              )
            )}
          </div> */}
        </div>

        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
