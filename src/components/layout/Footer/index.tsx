import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { PaymentBadge, SocialNetworks } from "./footer.types";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";

// Socials Data
const socialsData: SocialNetworks[] = [
  { id: 1, icon: <FaTwitter />, url: "https://twitter.com" },
  { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
  { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
  { id: 4, icon: <FaGithub />, url: "https://github.com/mohammadoftadeh" },
];

// Payment Badges Data
const paymentBadgesData: PaymentBadge[] = [
  { id: 1, srcUrl: "/icons/Visa.svg" },
  { id: 2, srcUrl: "/icons/mastercard.svg" },
  { id: 3, srcUrl: "/icons/paypal.svg" },
  { id: 4, srcUrl: "/icons/applePay.svg" },
  { id: 5, srcUrl: "/icons/googlePay.svg" },
];

// Menu Structure Data (Following the Provided Format)
const data = [
  {
    id: 0,
    type: "MenuItem",
    label: "Home",
    url: "/",
    children: [],
  },
  {
    id: 1,
    label: "Products",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "General Surgery",
        url: "/shop/general-surgery",
        description: "Tools and equipment for surgery procedures.",
      },
      {
        id: 12,
        label: "Laryngoscopes",
        url: "/shop/laryngoscopes",
        description: "Laryngoscopes for medical examination.",
      },
      {
        id: 13,
        label: "Dental",
        url: "/shop/dental",
        description: "Dental care tools and equipment.",
      },
      {
        id: 14,
        label: "Micro Surgery",
        url: "/shop/micro-surgery",
        description: "Precision tools for micro surgery procedures.",
      },
      {
        id: 15,
        label: "Beauty",
        url: "/shop/beauty",
        description: "Beauty products and equipment.",
      },
      {
        id: 16,
        label: "Ophthalmology",
        url: "/shop/ophthalmology",
        description: "Ophthalmology tools and equipment.",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Brochure",
    url: "/shop/on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "About",
    url: "/about",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Contact Us",
    url: "/contact",
    children: [],
  },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            {/* Left Column */}
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <Link href="/" className="mr-3 lg:mr-10">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  height={40}
                  width={150}
                />
              </Link>
              <p className="text-black/60 text-sm mb-9">
              We provide medical equipment and tools designed for professionals and patients alike.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages and Categories Section */}
            <div className="lg:col-span-9 lg:grid lg:grid-cols-2 lg:pl-10">
              {/* Pages Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Pages</h3>
                <ul>
                  {data
                    .filter(item => item.type === "MenuItem")
                    .map((page) => (
                      <li key={page.id} className="mb-4">
                        <Link
                          href={page.url || '/'}
                          className="text-black/60 hover:text-black transition-colors"
                        >
                          {page.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Product Categories Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {data
                    .filter(item => item.type === "MenuList")
                    .map((category) => (
                      <div key={category.id}>
                        {category.children.map((child, index) => (
                          <li key={child.id} className="mb-4">
                            <Link
                              href={child.url || '/'} // Fallback URL in case the URL is undefined
                              className="text-black/60 hover:text-black transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                </ul>
              </div>


            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              SMF © Made by{" "}
              <Link
                href="/"
                className="text-black font-medium"
              >
                Naqeeb Ahmed
              </Link>
              {", "}
              Designed by{" "}
              <Link
                href="/"
                className="text-black font-medium"
              >
                Huma Mushtaq
              </Link>
            </p>
            <div className="flex items-center">
              {paymentBadgesData.map((badge, _, arr) => (
                <span
                  key={badge.id}
                  className={cn([
                    arr.length !== badge.id && "mr-3",
                    "w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center",
                  ])}
                >
                  <Image
                    priority
                    src={badge.srcUrl}
                    width={33}
                    height={100}
                    alt="payment badge"
                    className="max-h-[15px]"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
