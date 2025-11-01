"use client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

// Updated menu data with multiple clickable links inside descriptions
// Updated menu data with proper links that include both category and subcategory
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
            <Link href="/categories/general-surgery" className="font-semibold text-black hover:text-gray-700 block mb-2">
              General Surgery
            </Link>
            <div className="space-y-1">
              <Link href="/shop/general-surgery/scalpels" className="text-gray-500 hover:text-gray-700 block">
                Scalpels
              </Link>
              <Link href="/shop/general-surgery/forceps" className="text-gray-500 hover:text-gray-700 block">
                Forceps
              </Link>
              <Link href="/shop/general-surgery/surgical-scissors" className="text-gray-500 hover:text-gray-700 block">
                Surgical Scissors
              </Link>
              <Link href="/shop/general-surgery/retractors" className="text-gray-500 hover:text-gray-700 block">
                Retractors
              </Link>
              <Link href="/shop/general-surgery/scalpel-handles" className="text-gray-500 hover:text-gray-700 block">
                Scalpel Handles
              </Link>
            </div>
            <Link
              href="/categories/general-surgery"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Products
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
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
            <Link href="/categories/dental" className="font-semibold text-black hover:text-gray-700 block mb-2">
              Dental Instruments
            </Link>
            <div className="space-y-1">
              <Link href="/shop/dental/extraction-forceps" className="text-gray-500 hover:text-gray-700 block">
                Extraction Forceps
              </Link>
              <Link href="/shop/dental/dental-scissors" className="text-gray-500 hover:text-gray-700 block">
                Dental Scissors
              </Link>
              <Link href="/shop/dental/dental-elevators" className="text-gray-500 hover:text-gray-700 block">
                Dental Elevators
              </Link>
              <Link href="/shop/dental/orthodontic-cutters" className="text-gray-500 hover:text-gray-700 block">
                Orthodontic Cutters and Pliers
              </Link>
              <Link href="/shop/dental/dental-mirrors" className="text-gray-500 hover:text-gray-700 block">
                Dental Mirrors
              </Link>
            </div>
            <Link
              href="/categories/dental"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Products
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
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
            <Link href="/categories/electrosurgery" className="font-semibold text-black hover:text-gray-700 block mb-2">
              Electrosurgery
            </Link>
            <div className="space-y-1">
              <Link href="/shop/electrosurgery/bipolar-forceps" className="text-gray-500 hover:text-gray-700 block">
                Bipolar Forceps
              </Link>
              <Link href="/shop/electrosurgery/bipolar-scissors" className="text-gray-500 hover:text-gray-700 block">
                Bipolar Scissors and Cables
              </Link>
              <Link href="/shop/electrosurgery/diathermi-speculums" className="text-gray-500 hover:text-gray-700 block">
                Diathermi Speculums
              </Link>
              <Link href="/shop/electrosurgery/diathermi-forceps" className="text-gray-500 hover:text-gray-700 block">
                Diathermi Forceps
              </Link>
              <Link href="/shop/electrosurgery/diathermi-scissors" className="text-gray-500 hover:text-gray-700 block">
                Diathermi Scissors
              </Link>
            </div>
            <Link
              href="/categories/electrosurgery"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Products
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        ),
      },
      {
        id: 17,
        label: "Orthopedic Instruments",
        url: "/shop/orthopedic-instruments",
        description: (
          <>
            <Link href="/shop/orthopedic-instruments?subcategory=bone-holding-forceps" className="text-gray-400 hover:underline">
              Bone Holding Forceps
            </Link>
            <br />
            <Link href="/shop/orthopedic-instruments?subcategory=bone-cutting-forceps" className="text-gray-400 hover:underline">
              Bone Cutting Forceps
            </Link>
            <br />
            <Link href="/shop/orthopedic-instruments?subcategory=bone-rongeurs" className="text-gray-400 hover:underline">
              Bone Rongeurs
            </Link>
            <br />
            <Link href="/shop/orthopedic-instruments?subcategory=chizzels" className="text-gray-400 hover:underline">
              Chizzels
            </Link>
            <br />
            <Link href="/shop/orthopedic-instruments?subcategory=austiotomes" className="text-gray-400 hover:underline">
              Austiotomes
            </Link>
            <br />
            <Link
              href="/shop/orthopedic-instruments"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>
          </>
        ),
      },
      {
        id: 18,
        label: "Ophthalmic Instruments",
        url: "/shop/ophthalmic-instruments",
        description: (
          <>
            <Link href="/shop/ophthalmic-instruments?subcategory=ophthalmic-scissors" className="text-gray-400 hover:underline">
              Ophthalmic Scissors
            </Link>
            <br />
            <Link href="/shop/ophthalmic-instruments?subcategory=needle-holders" className="text-gray-400 hover:underline">
              Needle Holders
            </Link>
            <br />
            <Link href="/shop/ophthalmic-instruments?subcategory=picsation-forceps" className="text-gray-400 hover:underline">
              Picsation Forceps
            </Link>
            <br />
            <Link href="/shop/ophthalmic-instruments?subcategory=dissecting-forceps" className="text-gray-400 hover:underline">
              Dissecting Forceps
            </Link>
            <br />
            <Link href="/shop/ophthalmic-instruments?subcategory=cilia-forceps" className="text-gray-400 hover:underline">
              Cilia Forceps
            </Link>
            <br />
            <Link
              href="/shop/ophthalmic-instruments"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>
          </>
        ),
      },
      {
        id: 19,
        label: "ENT Instruments",
        url: "/shop/ent-instruments",
        description: (
          <>
            <Link href="/shop/ent-instruments?subcategory=laryngoscope" className="text-gray-400 hover:underline">
              Laryngoscope
            </Link>
            <br />
            <Link href="/shop/ent-instruments?subcategory=mouth-gags" className="text-gray-400 hover:underline">
              Mouth Gags
            </Link>
            <br />
            <Link href="/shop/ent-instruments?subcategory=nasal-forceps" className="text-gray-400 hover:underline">
              Nasal Forceps
            </Link>
            <br />
            <Link href="/shop/ent-instruments?subcategory=spaculum" className="text-gray-400 hover:underline">
              Spaculum
            </Link>
            <br />
            <Link href="/shop/ent-instruments?subcategory=suction-tubes" className="text-gray-400 hover:underline">
              Suction Tubes
            </Link>
            <br />
            <Link
              href="/shop/ent-instruments"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>
          </>
        ),
      },
      {
        id: 20,
        label: "Gynecology Instruments",
        url: "/shop/gynecology-instruments",
        description: (
          <>
            <Link href="/shop/gynecology-instruments?subcategory=caesarean-forceps" className="text-gray-400 hover:underline">
              Caesarean Forceps
            </Link>
            <br />
            <Link href="/shop/gynecology-instruments?subcategory=catheters" className="text-gray-400 hover:underline">
              Catheters
            </Link>
            <br />
            <Link href="/shop/gynecology-instruments?subcategory=lamps" className="text-gray-400 hover:underline">
              Lamps
            </Link>
            <br />
            <Link href="/shop/gynecology-instruments?subcategory=depressors" className="text-gray-400 hover:underline">
              Depressors
            </Link>
            <br />
            <Link href="/shop/gynecology-instruments?subcategory=dilators" className="text-gray-400 hover:underline">
              Dilators
            </Link>
            <br />
            <Link
              href="/shop/gynecology-instruments"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>
          </>
        ),
      },
      {
        id: 21,
        label: "Cardioendthoracic Instruments",
        url: "/shop/cardioendthoracic-instruments",
        description: (
          <>
            <Link href="/shop/cardioendthoracic-instruments?subcategory=atrial-clamps" className="text-gray-400 hover:underline">
              Atrial Clamps
            </Link>
            <br />
            <Link href="/shop/cardioendthoracic-instruments?subcategory=forceps" className="text-gray-400 hover:underline">
              Forceps
            </Link>
            <br />
            <Link href="/shop/cardioendthoracic-instruments?subcategory=needle-holders" className="text-gray-400 hover:underline">
              Needle Holders
            </Link>
            <br />
            <Link href="/shop/cardioendthoracic-instruments?subcategory=retractors" className="text-gray-400 hover:underline">
              Retractors
            </Link>
            <br />
            <Link href="/shop/cardioendthoracic-instruments?subcategory=rib-shears" className="text-gray-400 hover:underline">
              Rib Shears
            </Link>
            <br />
            <Link
              href="/shop/cardioendthoracic-instruments"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
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
    id: 3,
    type: "MenuItem",
    label: "Brochure",
    url: "/brochures",
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
    id: 4,
    type: "MenuItem",
    label: "Contact Us",
    url: "/contact",
    children: [],
  },
];




const TopNavbar = () => {
  return (

    <>
      {/* Topbar (address/social) - not sticky, scrolls away */}
      <div className="bg-gray-900 text-gray-100 text-xs w-full">
        <div className="max-w-frame mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243a8 8 0 1 1 11.314 0z"/><circle cx="12" cy="12" r="3"/></svg>
              Abdullah Street, Ugoki Road, Adalatgarh, Sialkot 51310 Pakistan
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.5A8.5 8.5 0 0 1 3 6.5v2a8.5 8.5 0 0 0 8.5 8.5c.34 0 .67-.02 1-.05v2a10.5 10.5 0 0 1-10.5-10.5V6.5A10.5 10.5 0 0 1 12 17c2.21 0 4.25-.72 5.9-1.95z"/></svg>
              <a href="mailto:info@saluvia.com" className="hover:underline">info@saluvia.com</a>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <a href="#" className="text-blue-500 hover:text-blue-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/></svg></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.334 3.608 1.308c-1.054 1.054-1.257 2.166-1.316 3.447C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.262 2.393 1.316 3.447 1.051.974 2.163 1.177 3.444 1.236C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.262 3.447-1.316 1.054-1.054 1.257-2.166 1.316-3.447.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.262-2.393-1.316-3.447-1.051-.974-2.163-1.177-3.444-1.236C15.668.013 15.259 0 12 0z"/></svg></a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-7 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg></a>
          </div>
        </div>
      </div>
      {/* Main Navbar - sticky */}
      <nav className="sticky top-0 bg-white shadow-md z-30">
        <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
          <div className="flex items-center">
            <div className="block md:hidden mr-4">
              <ResTopNavbar data={data} />
            </div>
            <Link href="/" className="mr-3 lg:mr-10">
              <Image
                src="/images/logo.png"
                alt="Logo"
                height={40}
                width={80}
                className="w-[100px] h-[30px] sm:w-[100px] sm:h-[30px] md:w-[100px] md:h-[30px] lg:w-[100px] lg:h-[30px] xl:w-[100px] xl:h-[30px]"
              />
            </Link>
          </div>
          <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
            <NavigationMenuList>
              {data.map((item: any) => (
                <React.Fragment key={item.id}>
                  {item.type === "MenuItem" && (
                    <Link href={item.url || "/"}>
                      <MenuItem label={item.label} url={item.url || "/"} />
                    </Link>
                  )}
                  {item.type === "MenuList" && (
                    <MenuList data={item.children} label={item.label} />
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
