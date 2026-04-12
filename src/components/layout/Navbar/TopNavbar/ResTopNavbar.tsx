import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  const { cart } = useAppSelector((state: RootState) => state.carts);
  const totalQuantities = cart?.totalQuantities || 0;

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Image
          priority
          src="/icons/menu.svg"
          height={100}
          width={100}
          alt="menu"
          className="max-w-[22px] max-h-[22px]"
        />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Kymed Logo"
                  width={160}
                  height={44}
                  className="h-auto w-auto max-h-10 w-auto"
                  priority
                  unoptimized
                />
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-start w-full">
          {/* Cart Link (Mobile) */}
          <SheetClose asChild>
            <Link href="/cart" className="flex items-center justify-between w-full mb-6 p-3 bg-[#E5F5F7] rounded-xl text-[#008C99] font-bold">
              <div className="flex items-center gap-2">
                <FiShoppingCart className="w-5 h-5" />
                <span>My Cart</span>
              </div>
              {totalQuantities > 0 && (
                <span className="bg-[#008C99] text-white px-2.5 py-0.5 rounded-full text-xs">
                  {totalQuantities}
                </span>
              )}
            </Link>
          </SheetClose>

          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link href={item.url ?? "/"} className="mb-4">
                    {item.label}
                  </Link>
                </SheetClose>
              )}
              {item.type === "MenuList" && (
                <div className="mb-4 w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label} className="border-none">
                      <AccordionTrigger className="text-left p-0 py-0.5 font-normal text-base">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pb-0 border-l flex flex-col">
                        {item.children.map((itemChild, idx) => (
                          <SheetClose
                            key={itemChild.id}
                            asChild
                            className="w-fit py-2 text-base"
                          >
                            <Link href={itemChild.url ?? "/"}>
                              {itemChild.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;
