"use client";

import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart";
import ProductCard from "@/components/cart-page/ProductCard";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF, montserrat } from "@/styles/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TbBasketExclamation } from "react-icons/tb";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";
import Link from "next/link";

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  );

  return (
    <main className="pt-10 md:pt-16 pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        {cart && cart.items.length > 0 ? (
          <>
            <BreadcrumbCart />
            <h2
              className={cn([
                montserrat.className,
                "font-bold text-[32px] md:text-[40px] text-black mb-5 md:mb-6",
              ])}
            >
              Shopping Cart
            </h2>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8 items-start">
              <div className="w-full flex-col space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 rounded-2xl border border-[#C4C7CA]/30 bg-white shadow-sm">
                  {cart?.items.map((product, idx, arr) => (
                    <React.Fragment key={idx}>
                      <ProductCard data={product} />
                      {arr.length - 1 !== idx && (
                        <hr className="my-6 border-t-[#C4C7CA]/30" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="w-full lg:max-w-[450px] p-6 md:px-8 flex-col space-y-6 rounded-2xl border border-[#C4C7CA]/30 bg-[#F8F9FA] shadow-sm sticky top-24">
                <h6 className={cn("text-xl md:text-2xl font-bold text-[#2F323A]", montserrat.className)}>
                  Order Summary
                </h6>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5D6169]">Subtotal</span>
                    <span className="font-semibold text-[#2F323A]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-teal-600">
                    <span className="text-sm italic">Shipping (Estimated)</span>
                    <span className="font-semibold">Calculated at checkout</span>
                  </div>
                  <hr className="border-t-[#C4C7CA]/30" />
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xl font-bold text-[#2F323A]", montserrat.className)}>Total</span>
                    <span className="text-2xl font-bold text-[#008C99]">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <Button
                  type="button"
                  className="w-full py-7 text-lg font-bold bg-gradient-to-r from-[#008C99] to-[#006670] hover:from-[#006670] hover:to-[#004D54] text-white rounded-xl shadow-lg transition-all duration-300 group"
                >
                  Proceed to Checkout
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="pt-4 text-center">
                  <p className="text-xs text-[#5D6169]">
                    Secure payments processed for global medical professionals.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-[#C4C7CA] mt-24 py-12 px-6 text-center">
            <div className="w-24 h-24 bg-[#E5F5F7] rounded-full flex items-center justify-center mb-6">
              <TbBasketExclamation strokeWidth={1.5} className="text-5xl text-[#008C99]" />
            </div>
            <h3 className={cn("text-2xl font-bold text-[#2F323A] mb-2", montserrat.className)}>
              Your cart is empty
            </h3>
            <p className="max-w-xs text-[#5D6169] mb-8">
              Explore our precision-crafted surgical and dental instruments to get started.
            </p>
            <Button className="bg-[#008C99] hover:bg-[#006670] text-white rounded-xl px-10 py-6 font-semibold shadow-md transition-all" asChild>
              <Link href="/shop/9">Browse Catalog</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
