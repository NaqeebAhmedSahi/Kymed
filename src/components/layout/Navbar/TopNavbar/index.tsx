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
    <nav className="sticky top-0 bg-white z-20">
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
              className="w-[100px] h-[40px] sm:w-[150px] sm:h-[40px] md:w-[350px] md:h-[45px] lg:w-[350px] lg:h-[50px] xl:w-[400px] xl:h-[50px]"
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
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
      </div>
    </nav>
  );
};

export default TopNavbar;
