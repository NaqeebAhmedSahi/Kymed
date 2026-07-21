import React from "react";
import { Metadata } from "next";
import { loadProductsData, searchAllProducts } from "@/lib/productsLoader";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import ProductGrid from "@/components/shop/ProductGrid";
import Link from "next/link";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Search Results - KyMed",
    description: "Search our extensive catalog of surgical and dental instruments.",
};

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { q?: string };
}) {
    const query = searchParams.q || "";
    const data = await loadProductsData();
    const searchResults = searchAllProducts(data, query);

    // Map search results to ProductGrid items
    // Note: searchAllProducts returns {product, pathToParent, categoryId}
    // We need to handle generating unique Href for each in a modified ProductGrid or just handle it here
    const products = searchResults.map(r => ({
        ...r.product,
        // Add custom metadata for the grid to use if needed
        _pathToParent: r.pathToParent,
        _categoryId: r.categoryId
    }));

    return (
        <main className="max-w-frame mx-auto px-4 xl:px-0 py-12 min-h-[60vh]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <Link
                        href="/shop"
                        className="inline-flex items-center text-sm text-[#008C99] hover:underline mb-4"
                    >
                        <FiArrowLeft className="mr-2" /> Back to Shop
                    </Link>
                    <h1 className={cn("text-4xl font-bold text-[#2F323A]", montserrat.className)}>
                        Search Results
                    </h1>
                    <p className={cn("text-lg text-[#5D6169]", openSans.className)}>
                        {query
                            ? `Showing results for "${query}"`
                            : "Enter a search term to find instruments"}
                    </p>
                </div>

                <div className="bg-[#E5F5F7] px-6 py-4 rounded-2xl border border-[#008C99]/20">
                    <span className="text-2xl font-bold text-[#008C99]">{searchResults.length}</span>
                    <span className="ml-2 text-[#5D6169] font-medium">Instruments Match</span>
                </div>
            </div>

            {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((result, idx) => (
                        <Link
                            key={`${result.product.id}-${idx}`}
                            href={`/shop/${result.categoryId}/${result.pathToParent.join("/")}/p/${result.product.id}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C4C7CA]/20 flex flex-col"
                        >
                            <div className="relative aspect-square sm:aspect-video lg:aspect-square w-full bg-white p-6 overflow-hidden">
                                <img
                                    src={`/${result.product.image_local_paths?.[1] || result.product.image_local_path || "images/logo.png"}`}
                                    alt={result.product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[10px] font-bold text-[#008C99] uppercase tracking-wider mb-2">
                                    {result.pathToParent[result.pathToParent.length - 1] || "Product"}
                                </div>
                                <h3 className={cn("text-lg font-bold text-[#2F323A] mb-2 group-hover:text-[#008C99] transition-colors", montserrat.className)}>
                                    {result.product.name}
                                </h3>
                                <p className={cn("text-sm text-[#5D6169] line-clamp-2 mb-4 flex-grow", openSans.className)}>
                                    {result.product.short_description || result.product.title || "View surgical instrument details"}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-[#C4C7CA]/10">
                                    <span className="text-xs font-semibold text-[#C4C7CA]">KyMed Certified</span>
                                    <span className="text-[#008C99] text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                                        View Product <span className="ml-1">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-[#F8F9FA] rounded-3xl border-2 border-dashed border-[#C4C7CA]/30">
                    <div className="max-w-md mx-auto space-y-6">
                        <div className="w-20 h-20 bg-[#E5F5F7] rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiSearch className="w-10 h-10 text-[#008C99]" />
                        </div>
                        <h2 className={cn("text-2xl font-bold text-[#202020]", montserrat.className)}>
                            {query ? "No instruments found" : "Ready to search"}
                        </h2>
                        <p className="text-[#5D6169]">
                            {query
                                ? `We couldn't find any products matching "${query}". Please check your spelling or try a more general term like "scissors" or "forceps".`
                                : "Type in the search bar above to explore our catalog of thousands of medical instruments."}
                        </p>
                        {query && (
                            <Link
                                href="/shop"
                                className="inline-block px-8 py-3 bg-[#008C99] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                            >
                                Browse All Categories
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
