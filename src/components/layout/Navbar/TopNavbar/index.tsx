"use client";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { categories } from "@/data/categories";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import ResTopNavbar from "./ResTopNavbar";
import { FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiSearch, FiX, FiPhone } from "react-icons/fi";

// Build menu dynamically from `categories` data
const productsChildren = categories.map((cat) => ({
  id: cat.id,
  label: cat.name,
  url: cat.url,
  description: (
    <>
      <Link href={cat.url} className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
        {cat.name}
      </Link>
      <div className="space-y-2">
        {(cat.subcategories || []).slice(0, 6).map((sc) => (
          <Link key={sc.id} href={sc.url} className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
            {sc.name}
          </Link>
        ))}
      </div>
      <Link
        href={cat.url}
        className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
      >
        View All Products
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </Link>
    </>
  ),
}));

const data: NavMenu = [
  { id: 0, type: "MenuItem", label: "Home", url: "/", children: [] },
  { id: 1, type: "MenuList", label: "Products", children: productsChildren },
  { id: 2, type: "MenuItem", label: "Categories", url: "/categories", children: [] },
  { id: 3, type: "MenuItem", label: "Brochures", url: "/brochure-viewer", children: [] },
  { id: 4, type: "MenuItem", label: "About", url: "/about", children: [] },
  { id: 5, type: "MenuItem", label: "Contact Us", url: "/contact", children: [] },
];

const TopNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Topbar (contact info/social) - not sticky, scrolls away */}
      <div className="bg-gradient-to-r from-[#008C99] to-[#006670] text-white text-sm w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-[#E5F5F7] transition-colors duration-200">
              <FiPhone className="w-4 h-4 text-[#E5F5F7]" />
              +92 329 9958000
            </span>
            <span className="flex items-center gap-2 hover:text-[#E5F5F7] transition-colors duration-200">
              <FiMail className="w-4 h-4 text-[#E5F5F7]" />
              <a href="mailto:info@kymed.co" className="hover:underline">info@kymed.co</a>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {/* <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiInstagram className="w-5 h-5" />
            </a> */}
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiLinkedin className="w-5 h-5" />
            </a>
            {/* <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiTwitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Navbar - sticky */}
      <nav className="sticky top-0 bg-white shadow-lg z-50 border-b border-[#C4C7CA]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          {/* Logo - Fixed sizing */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="KyMed Logo"
              height={40}
              width={100}
              className="w-auto h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              {data.map((item: any) => (
                <React.Fragment key={item.id}>
                  {item.type === "MenuItem" && (
                    <div className="relative">
                      <Link 
                        href={item.url || "/"} 
                        className={cn(
                          "relative px-4 py-2 text-[#2F323A] font-semibold transition-all duration-300 hover:text-[#008C99] group/nav-item",
                          montserrat.className
                        )}
                      >
                        {item.label}
                        {/* Individual slide-in underline animation */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#008C99] to-[#006670] transition-all duration-300 group-hover/nav-item:w-full"></span>
                      </Link>
                    </div>
                  )}
                  {item.type === "MenuList" && (
                    <div className="relative">
                      <div className="group/nav-item">
                        {/* Added font styling to make Products bold like others */}
                        <div className={cn(
                          "text-[#2F323A] font-semibold hover:text-[#008C99] transition-all duration-300",
                          montserrat.className
                        )}>
                          <MenuList data={item.children} label={item.label} />
                        </div>
                        {/* Individual slide-in underline animation for Products */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#008C99] to-[#006670] transition-all duration-300 group-hover/nav-item:w-full"></span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center bg-white border border-[#C4C7CA] rounded-xl pl-4 pr-2 py-2 shadow-sm">
                  <FiSearch className="w-4 h-4 text-[#5D6169] mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-48 outline-none text-[#2F323A] placeholder-[#5D6169]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchTerm("");
                    }}
                    className="ml-2 p-1 hover:bg-[#E5F5F7] rounded transition-colors duration-200"
                  >
                    <FiX className="w-4 h-4 text-[#5D6169]" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-[#5D6169] hover:text-[#008C99] hover:bg-[#E5F5F7] rounded-xl transition-all duration-200"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <ResTopNavbar data={data} />
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link 
                href="/contact"
                className={cn(
                  "px-6 py-2 bg-gradient-to-r from-[#008C99] to-[#006670] text-white rounded-xl hover:shadow-lg transition-all duration-300 shadow-md font-semibold hover:scale-105 text-sm",
                  montserrat.className
                )}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;