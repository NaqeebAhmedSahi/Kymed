import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuListData } from "../navbar.types";
import { ChevronRight, ArrowRight } from "lucide-react";
import { montserrat } from "@/styles/fonts";

export type MenuListProps = {
  data: MenuListData;
  label: string;
};

export function MenuList({ data, label }: MenuListProps) {
  console.log("MenuList received data:", data, "data length:", data?.length, "label:", label);
  
  if (!data || data.length === 0) {
    console.log("MenuList: No data provided, showing trigger only");
    return (
      <NavigationMenuItem className="relative group/nav-item">
        <NavigationMenuTrigger className={cn(
          "font-semibold px-4 py-2 text-[#2F323A] text-base transition-all duration-300 hover:text-[#008C99] bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
          montserrat.className
        )}>
          {label}
        </NavigationMenuTrigger>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#008C99] to-[#006670] transition-all duration-300 group-hover/nav-item:w-full pointer-events-none"></span>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem className="relative group/nav-item">
      <NavigationMenuTrigger className={cn(
        "font-semibold px-4 py-2 text-[#2F323A] text-base transition-all duration-300 hover:text-[#008C99] bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
        montserrat.className
      )}>
        {label}
      </NavigationMenuTrigger>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#008C99] to-[#006670] transition-all duration-300 group-hover/nav-item:w-full pointer-events-none"></span>
      <NavigationMenuContent>
        <div className="w-[1200px] max-w-[95vw] max-h-[85vh] flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden mt-2">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#008C99] to-[#006670] px-8 py-6 shrink-0">
            <h2 className={cn(
              "text-white text-2xl font-bold mb-2",
              montserrat.className
            )}>
              {label}
            </h2>
            <p className="text-[#E5F5F7] text-sm font-medium">
              Browse our comprehensive collection of high-quality surgical instruments
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 flex-1 overflow-y-auto">
            {data.map((item: any, index: number) => (
              <div
                key={item.id}
                className={cn(
                  "border-b border-gray-100",
                  "lg:border-r lg:border-b",
                  index % 4 === 3 && "xl:border-r-0",
                  "hover:bg-gradient-to-br hover:from-[#008C99]/8 hover:to-[#006670]/4 transition-all duration-300"
                )}
              >
                <div className="p-6 h-full">
                  {/* Main Category Header */}
                  <Link
                    href={item.url ?? "/"}
                    className="group block mb-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className={cn(
                          "font-bold text-[#2F323A] text-lg group-hover:text-[#008C99] transition-colors duration-300 leading-tight",
                          montserrat.className
                        )}>
                          {item.label}
                        </h3>
                        <p className="text-xs text-[#008C99] font-semibold mt-2 tracking-wide uppercase">
                          {item.subcategories?.length || 0} Product Lines
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#008C99] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0" />
                    </div>
                  </Link>

                  {/* Separator Line */}
                  <div className="h-px bg-gradient-to-r from-[#008C99]/20 to-transparent my-4"></div>

                  {/* Subcategories List */}
                  {item.subcategories && item.subcategories.length > 0 && (
                    <div className="space-y-0">
                      {item.subcategories.slice(0, 7).map((subitem: any, idx: number) => (
                        <Link
                          key={subitem.id}
                          href={`/shop/9/${item.id}/${subitem.id}`}
                          className="group/sub flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-[#008C99]/12 hover:text-[#008C99] hover:font-semibold transition-all duration-200"
                        >
                          <span className="font-medium leading-tight">{subitem.name}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all duration-200 text-[#008C99] flex-shrink-0" />
                        </Link>
                      ))}
                      
                      {/* View All Link */}
                      {item.subcategories.length > 7 && (
                        <Link
                          href={item.url ?? "/"}
                          className={cn(
                            "group/more flex items-center justify-between px-2.5 py-3 rounded-lg text-sm font-bold text-[#008C99] hover:bg-[#008C99]/12 transition-all duration-200 mt-3 pt-4 border-t border-gray-100",
                            montserrat.className
                          )}
                        >
                          <span>View all {item.subcategories.length} items</span>
                          <ArrowRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform duration-200" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA Section */}
          <div className="bg-gradient-to-r from-[#008C99]/8 to-[#006670]/4 px-8 py-5 border-t border-gray-200 flex items-center justify-between">
            <div>
              <p className={cn(
                "text-sm font-semibold text-[#2F323A] mb-1",
                montserrat.className
              )}>
                Need Expert Guidance?
              </p>
              <p className="text-xs text-gray-600">
                Our specialists can help you find the perfect instruments for your needs
              </p>
            </div>
            <Link
              href="/contact"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#008C99] to-[#006670] text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap",
                montserrat.className
              )}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
