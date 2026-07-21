"use client";

import React, { useState, useMemo } from "react";
import ProductGrid from "./ProductGrid";
import FilterSidebar from "./FilterSidebar";
import { CatalogNode, Product } from "@/lib/productsLoader";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";

interface ProductListingContainerProps {
    categoryId: string;
    pathToNode: string[];
    initialItems: (CatalogNode | Product)[];
    subcategories: CatalogNode[];
    nodeName: string;
}

export default function ProductListingContainer({
    categoryId,
    pathToNode,
    initialItems,
    subcategories,
    nodeName,
}: ProductListingContainerProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubId, setSelectedSubId] = useState<string | null>(null);

    // Filter items based on subcategory and search term
    const filteredItems = useMemo(() => {
        return initialItems.filter((item) => {
            // 1. Filter by selected subcategory if any
            const matchesSub = !selectedSubId || item.id === selectedSubId;

            // 2. Filter by search term
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ("description" in item && item.description?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                ("short_description" in item && (item as Product).short_description?.toLowerCase().includes(searchTerm.toLowerCase()));

            return matchesSub && matchesSearch;
        });
    }, [initialItems, searchTerm, selectedSubId]);

    // For the sidebar, we calculate counts
    const categoryOptions = useMemo(() => {
        return subcategories.map(sub => ({
            id: sub.id,
            name: sub.name,
            count: sub.products?.length || sub.subcategories?.length || 0
        }));
    }, [subcategories]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Sidebar - Always visible on desktop, toggleable on mobile */}
            <FilterSidebar
                categories={categoryOptions}
                selectedCategory={selectedSubId}
                onSelectCategory={setSelectedSubId}
                onSearch={setSearchTerm}
                searchTerm={searchTerm}
            />

            {/* Main Content Area */}
            <div className="flex-grow space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C4C7CA]/30 pb-4">
                    <div className="space-y-1">
                        <h2 className={cn("text-xl font-bold text-[#202020]", montserrat.className)}>
                            {selectedSubId
                                ? subcategories.find(s => s.id === selectedSubId)?.name
                                : nodeName}
                            <span className="ml-2 text-sm font-normal text-[#5D6169]">
                                ({filteredItems.length} items found)
                            </span>
                        </h2>
                        {searchTerm && (
                            <p className="text-sm text-[#008C99]">
                                Showing results for "{searchTerm}"
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-[#5D6169]">Sort by:</label>
                        <select className="bg-white border border-[#C4C7CA]/30 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-[#008C99] transition-all">
                            <option>Newest</option>
                            <option>Name (A-Z)</option>
                            <option>Name (Z-A)</option>
                        </select>
                    </div>
                </div>

                {filteredItems.length > 0 ? (
                    <ProductGrid
                        categoryId={categoryId}
                        pathToNode={pathToNode}
                        items={filteredItems}
                        variant={selectedSubId ? "subcategories" : "products"} // This logic might need adjustment based on how ProductGrid handles it
                    />
                ) : (
                    <div className="text-center py-20 bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-[#C4C7CA]/30">
                        <div className="max-w-xs mx-auto space-y-4">
                            <div className="w-16 h-16 bg-[#E5F5F7] rounded-full flex items-center justify-center mx-auto">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className={cn("text-lg font-bold text-[#202020]", montserrat.className)}>
                                No instruments found
                            </h3>
                            <p className="text-sm text-[#5D6169]">
                                We couldn't find anything matching your current filters. Try adjusting your search or selection.
                            </p>
                            <button
                                onClick={() => { setSearchTerm(""); setSelectedSubId(null); }}
                                className="text-[#008C99] font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
