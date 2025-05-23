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
        url: "/shop/general-surgery",
        description: (
          <>
            <Link href="/shop/scalpels" className="text-gray-400 hover:underline">
              Scalpels
            </Link>
            <br />
            <Link href="/shop/forceps" className="text-gray-400 hover:underline">
              Forceps
            </Link>
            <br />
            <Link href="/shop/surgical-scissors" className="text-gray-400 hover:underline">
              Surgical Scissors
            </Link>
            <br />
            <Link href="/shop/retractors" className="text-gray-400 hover:underline">
              Retractors
            </Link>
            <br />
            <Link href="/shop/scalpel-handles" className="text-gray-400 hover:underline">
              Scalpel Handles
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>


          </>
        ),
      },
      {
        id: 14,
        label: "Dental Equipment",
        url: "/shop/dental-equipment",
        description: (
          <>
            <Link href="/shop/extraction-forceps" className="text-gray-400 hover:underline">
              Extraction Forceps
            </Link>
            <br />
            <Link href="/shop/dental-scissors" className="text-gray-400 hover:underline">
              Dental Scissors
            </Link>
            <br />
            <Link href="/shop/dental-elevators" className="text-gray-400 hover:underline">
              Dental Elevators
            </Link>
            <br />
            <Link href="/shop/orthodontic-cutters" className="text-gray-400 hover:underline">
              Orthodontic Cutters and Pliers
            </Link>
            <br />
            <Link href="/shop/dental-mirrors" className="text-gray-400 hover:underline">
              Dental Mirrors
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
            </Link>
          </>
        ),
      },
      {
        id: 16,
        label: "Electrosurgery",
        url: "/shop/electrosurgery",
        description: (
          <>
            <Link href="/shop/bipolar-forceps" className="text-gray-400 hover:underline">
              Bipolar Forceps
            </Link>
            <br />
            <Link href="/shop/bipolar-scissors" className="text-gray-400 hover:underline">
              Bipolar Scissors and Cables
            </Link>
            <br />
            <Link href="/shop/diathermi-speculums" className="text-gray-400 hover:underline">
              Diathermi Speculums
            </Link>
            <br />
            <Link href="/shop/diathermi-forceps" className="text-gray-400 hover:underline">
              Diathermi Forceps
            </Link>
            <br />
            <Link href="/shop/diathermi-scissors" className="text-gray-400 hover:underline">
              Diathermi Scissors
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium text-lg py-2 "
            >
              View All
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
            <Link href="/shop/bone-holding-forceps" className="text-gray-400 hover:underline">
              Bone Holding Forceps
            </Link>
            <br />
            <Link href="/shop/bone-cutting-forceps" className="text-gray-400 hover:underline">
              Bone Cutting Forceps
            </Link>
            <br />
            <Link href="/shop/bone-rongeurs" className="text-gray-400 hover:underline">
              Bone Rongeurs
            </Link>
            <br />
            <Link href="/shop/chizzels" className="text-gray-400 hover:underline">
              Chizzels
            </Link>
            <br />
            <Link href="/shop/austiotomes" className="text-gray-400 hover:underline">
              Austiotomes
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
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
            <Link href="/shop/ophthalmic-scissors" className="text-gray-400 hover:underline">
              Ophthalmic Scissors
            </Link>
            <br />
            <Link href="/shop/needle-holders" className="text-gray-400 hover:underline">
              Needle Holders
            </Link>
            <br />
            <Link href="/shop/picsation-forceps" className="text-gray-400 hover:underline">
              Picsation Forceps
            </Link>
            <br />
            <Link href="/shop/dissecting-forceps" className="text-gray-400 hover:underline">
              Dissecting Forceps
            </Link>
            <br />
            <Link href="/shop/cilia-forceps" className="text-gray-400 hover:underline">
              Cilia Forceps
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
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
            <Link href="/shop/laryngoscope" className="text-gray-400 hover:underline">
              Laryngoscope
            </Link>
            <br />
            <Link href="/shop/mouth-gags" className="text-gray-400 hover:underline">
              Mouth Gags
            </Link>
            <br />
            <Link href="/shop/nasal-forceps" className="text-gray-400 hover:underline">
              Nasal Forceps
            </Link>
            <br />
            <Link href="/shop/spaculum" className="text-gray-400 hover:underline">
              Spaculum
            </Link>
            <br />
            <Link href="/shop/suction-tubes" className="text-gray-400 hover:underline">
              Suction Tubes
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
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
            <Link href="/shop/caesarean-forceps" className="text-gray-400 hover:underline">
              Caesarean Forceps
            </Link>
            <br />
            <Link href="/shop/catheters" className="text-gray-400 hover:underline">
              Catheters
            </Link>
            <br />
            <Link href="/shop/lamps" className="text-gray-400 hover:underline">
              Lamps
            </Link>
            <br />
            <Link href="/shop/depressors" className="text-gray-400 hover:underline">
              Depressors
            </Link>
            <br />
            <Link href="/shop/dilators" className="text-gray-400 hover:underline">
              Dilators
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
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
            <Link href="/shop/atrial-clamps" className="text-gray-400 hover:underline">
              Atrial Clamps
            </Link>
            <br />
            <Link href="/shop/forceps" className="text-gray-400 hover:underline">
              Forceps
            </Link>
            <br />
            <Link href="/shop/needle-holders" className="text-gray-400 hover:underline">
              Needle Holders
            </Link>
            <br />
            <Link href="/shop/retractors" className="text-gray-400 hover:underline">
              Retractors
            </Link>
            <br />
            <Link href="/shop/rib-shears" className="text-gray-400 hover:underline">
              Rib Shears
            </Link>
            <br />
            <Link
              href="/shop/needle-holders"
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
