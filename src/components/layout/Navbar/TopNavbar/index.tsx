"use client";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import ResTopNavbar from "./ResTopNavbar";
import { FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiSearch, FiX, FiPhone } from "react-icons/fi";

// Updated menu data with proper links
const data: NavMenu = [
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
        url: "/categories/general-surgery",
        description: (
          <>
            <Link href="/categories/general-surgery" className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
              General Surgery
            </Link>
            <div className="space-y-2">
              <Link href="/shop/general-surgery/scalpels" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Scalpels
              </Link>
              <Link href="/shop/general-surgery/forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Forceps
              </Link>
              <Link href="/shop/general-surgery/surgical-scissors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Surgical Scissors
              </Link>
              <Link href="/shop/general-surgery/retractors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Retractors
              </Link>
              <Link href="/shop/general-surgery/scalpel-handles" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Scalpel Handles
              </Link>
            </div>
            <Link
              href="/categories/general-surgery"
              className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      },
      {
        id: 14,
        label: "Dental Instruments",
        url: "/categories/dental",
        description: (
          <>
            <Link href="/categories/dental" className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
              Dental Instruments
            </Link>
            <div className="space-y-2">
              <Link href="/shop/dental/extraction-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Extraction Forceps
              </Link>
              <Link href="/shop/dental/dental-scissors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Dental Scissors
              </Link>
              <Link href="/shop/dental/dental-elevators" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Dental Elevators
              </Link>
              <Link href="/shop/dental/orthodontic-cutters" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Orthodontic Cutters and Pliers
              </Link>
              <Link href="/shop/dental/dental-mirrors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Dental Mirrors
              </Link>
            </div>
            <Link
              href="/categories/dental"
              className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      },
      {
        id: 16,
        label: "Electrosurgery",
        url: "/categories/electrosurgery",
        description: (
          <>
            <Link href="/categories/electrosurgery" className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
              Electrosurgery
            </Link>
            <div className="space-y-2">
              <Link href="/shop/electrosurgery/bipolar-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Bipolar Forceps
              </Link>
              <Link href="/shop/electrosurgery/bipolar-scissors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Bipolar Scissors and Cables
              </Link>
              <Link href="/shop/electrosurgery/diathermi-speculums" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Diathermi Speculums
              </Link>
              <Link href="/shop/electrosurgery/diathermi-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Diathermi Forceps
              </Link>
              <Link href="/shop/electrosurgery/diathermi-scissors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Diathermi Scissors
              </Link>
            </div>
            <Link
              href="/categories/electrosurgery"
              className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      },
      {
        id: 17,
        label: "Orthopedic Instruments",
        url: "/categories/orthopedic",
        description: (
          <>
            <Link href="/categories/orthopedic" className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
              Orthopedic Instruments
            </Link>
            <div className="space-y-2">
              <Link href="/shop/orthopedic/bone-holding-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Bone Holding Forceps
              </Link>
              <Link href="/shop/orthopedic/bone-cutting-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Bone Cutting Forceps
              </Link>
              <Link href="/shop/orthopedic/bone-rongeurs" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Bone Rongeurs
              </Link>
              <Link href="/shop/orthopedic/chizzels" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Chizzels
              </Link>
              <Link href="/shop/orthopedic/austiotomes" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Austiotomes
              </Link>
            </div>
            <Link
              href="/categories/orthopedic"
              className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      },
      {
        id: 18,
        label: "Ophthalmic Instruments",
        url: "/categories/ophthalmic",
        description: (
          <>
            <Link href="/categories/ophthalmic" className="font-semibold text-[#2F323A] hover:text-[#008C99] transition-colors duration-200 block mb-3">
              Ophthalmic Instruments
            </Link>
            <div className="space-y-2">
              <Link href="/shop/ophthalmic/ophthalmic-scissors" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Ophthalmic Scissors
              </Link>
              <Link href="/shop/ophthalmic/needle-holders" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Needle Holders
              </Link>
              <Link href="/shop/ophthalmic/picsation-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Picsation Forceps
              </Link>
              <Link href="/shop/ophthalmic/dissecting-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Dissecting Forceps
              </Link>
              <Link href="/shop/ophthalmic/cilia-forceps" className="text-[#5D6169] hover:text-[#008C99] block transition-colors duration-200">
                Cilia Forceps
              </Link>
            </div>
            <Link
              href="/categories/ophthalmic"
              className="inline-flex items-center mt-4 text-[#008C99] hover:text-[#006670] font-semibold transition-colors duration-200 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      }
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Categories",
    url: "/categories",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "About",
    url: "/about",
    children: [],
  },
  {
    id: 5,
    type: "MenuItem",
    label: "Contact Us",
    url: "/contact",
    children: [],
  },
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
              +92 300 0915553
            </span>
            <span className="flex items-center gap-2 hover:text-[#E5F5F7] transition-colors duration-200">
              <FiMail className="w-4 h-4 text-[#E5F5F7]" />
              <a href="mailto:info@kymed.co" className="hover:underline">info@kymed.co</a>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#E5F5F7] transition-colors duration-200">
              <FiTwitter className="w-5 h-5" />
            </a>
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