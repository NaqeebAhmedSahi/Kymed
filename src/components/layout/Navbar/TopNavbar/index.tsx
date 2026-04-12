"use client";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import ResTopNavbar from "./ResTopNavbar";
import { FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiSearch, FiX, FiPhone, FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";


const TopNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [productsChildren, setProductsChildren] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load products data from products.json
    const loadProductsData = async () => {
      try {
        console.log("TopNavbar: Starting to fetch /products.json...");
        const response = await fetch("/products.json");
        console.log("TopNavbar: Response status:", response.status);
        const productsData = await response.json();
        console.log("TopNavbar: Received products data, categories count:", productsData.categories?.length);
        const categories = productsData.categories || [];

        // Extract Surgical instruments category (id: "9")
        const surgicalCategory = categories.find((cat: any) => cat.id === "9");
        console.log("TopNavbar: Found surgical category:", surgicalCategory?.name, "with", surgicalCategory?.subcategories?.length, "subcategories");

        if (surgicalCategory && surgicalCategory.subcategories) {
          // Transform Surgical instruments subcategories to menu structure
          // Include nested subcategories for display
          const children = surgicalCategory.subcategories.map((subcat: any) => ({
            id: subcat.id,
            label: subcat.name,
            url: `/shop/9/${subcat.id}`,
            description: subcat.description,
            subcategories: subcat.subcategories || [], // Include nested subcategories
          }));

          console.log("TopNavbar: Transformed children, count:", children.length);
          setProductsChildren(children);
          console.log("Loaded Surgical instruments subcategories:", children);
        } else {
          console.log("TopNavbar: No surgical category or subcategories found");
        }
      } catch (error) {
        console.error("Error loading products data:", error);
        setProductsChildren([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, []);

  // Build menu items with useMemo to ensure it updates when productsChildren changes
  const menuItems = useMemo(() => {
    console.log("TopNavbar: Building menuItems, productsChildren length:", productsChildren.length);
    const items = [
      { id: 0, type: "MenuItem" as const, label: "Home", url: "/", children: [] },
      { id: 1, type: "MenuList" as const, label: "Products", children: productsChildren },
      { id: 2, type: "MenuItem" as const, label: "Categories", url: "/categories", children: [] },
      { id: 4, type: "MenuItem" as const, label: "About", url: "/about", children: [] },
      { id: 5, type: "MenuItem" as const, label: "Contact Us", url: "/contact", children: [] },
    ];
    console.log("TopNavbar: MenuItems built, Surgical Instruments item children:", items[1].children.length);
    return items;
  }, [productsChildren]);

  const { cart } = useAppSelector((state: RootState) => state.carts);
  const totalQuantities = cart?.totalQuantities || 0;

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
              height={44}
              width={160}
              className="w-auto h-10 object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              {menuItems.map((item: any) => (
                <React.Fragment key={item.id}>
                  {item.type === "MenuItem" && (
                    <NavigationMenuItem className="relative">
                      <Link
                        href={item.url || "/"}
                        className={cn(
                          "relative px-4 py-2 flex items-center text-[#2F323A] font-semibold transition-all duration-300 hover:text-[#008C99] group/nav-item",
                          montserrat.className
                        )}
                      >
                        {item.label}
                        {/* Individual slide-in underline animation */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#008C99] to-[#006670] transition-all duration-300 group-hover/nav-item:w-full"></span>
                      </Link>
                    </NavigationMenuItem>
                  )}
                  {item.type === "MenuList" && (
                    <MenuList data={item.children} label={item.label} />
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

            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 text-[#5D6169] hover:text-[#008C99] hover:bg-[#E5F5F7] rounded-xl transition-all duration-200 group">
              <FiShoppingCart className="w-5 h-5" />
              {totalQuantities > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#008C99] text-white text-[10px] font-bold ring-2 ring-white">
                  {totalQuantities}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <ResTopNavbar data={menuItems} />
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