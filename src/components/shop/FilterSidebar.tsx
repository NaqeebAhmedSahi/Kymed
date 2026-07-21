"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import { FiSearch, FiSliders, FiChevronRight, FiX } from "react-icons/fi";

interface FilterSidebarProps {
    categories: { id: string; name: string; count?: number }[];
    selectedCategory: string | null;
    onSelectCategory: (id: string | null) => void;
    onSearch: (term: string) => void;
    searchTerm: string;
}

const FilterSidebar = ({
    categories,
    selectedCategory,
    onSelectCategory,
    onSearch,
    searchTerm,
}: FilterSidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full lg:w-64 flex-shrink-0">
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#E5F5F7] text-[#008C99] rounded-xl font-semibold mb-6 transition-all active:scale-95"
            >
                <FiSliders className="w-5 h-5" />
                {isOpen ? "Close Filters" : "Show Filters"}
            </button>

            {/* Sidebar Content */}
            <div className={cn(
                "space-y-8 lg:block",
                isOpen ? "block animate-in fade-in slide-in-from-top-4 duration-300" : "hidden"
            )}>
                {/* Search Input */}
                <div className="space-y-3">
                    <h3 className={cn("text-lg font-bold text-[#202020]", montserrat.className)}>
                        Search
                    </h3>
                    <div className="relative group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D6169] group-focus-within:text-[#008C99] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search in results..."
                            value={searchTerm}
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-[#F8F9FA] border border-[#C4C7CA]/30 rounded-xl outline-none focus:border-[#008C99] focus:ring-2 focus:ring-[#008C99]/10 transition-all text-sm"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => onSearch("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-[#E5F5F7] rounded-full transition-colors"
                            >
                                <FiX className="w-3 h-3 text-[#5D6169]" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#C4C7CA]/30 pb-3">
                        <h3 className={cn("text-lg font-bold text-[#202020]", montserrat.className)}>
                            Subcategories
                        </h3>
                        {selectedCategory && (
                            <button
                                onClick={() => onSelectCategory(null)}
                                className="text-xs text-[#008C99] font-medium hover:underline"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#C4C7CA] scrollbar-track-transparent">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => onSelectCategory(cat.id === selectedCategory ? null : cat.id)}
                                className={cn(
                                    "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm group",
                                    selectedCategory === cat.id
                                        ? "bg-[#008C99] text-white shadow-md"
                                        : "text-[#5D6169] hover:bg-[#E5F5F7] hover:text-[#008C99]"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    <FiChevronRight className={cn(
                                        "w-3 h-3 transition-transform",
                                        selectedCategory === cat.id ? "rotate-90" : "group-hover:translate-x-1"
                                    )} />
                                    <span className={cn("font-medium", openSans.className)}>{cat.name}</span>
                                </span>
                                {cat.count !== undefined && (
                                    <span className={cn(
                                        "text-[10px] px-1.5 py-0.5 rounded-full",
                                        selectedCategory === cat.id ? "bg-white/20" : "bg-gray-100"
                                    )}>
                                        {cat.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Filters / Attributes (Static Placeholder for Professionalsm) */}
                <div className="space-y-4 pt-4 border-t border-[#C4C7CA]/30">
                    <h3 className={cn("text-lg font-bold text-[#202020]", montserrat.className)}>
                        Material
                    </h3>
                    <div className="space-y-2">
                        {["Stainless Steel", "Titanium", "Carbon Steel"].map((material) => (
                            <label key={material} className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-5 h-5 border-2 border-[#C4C7CA] rounded-md group-hover:border-[#008C99] transition-colors flex items-center justify-center">
                                    {/* Checkbox SVG would go here */}
                                </div>
                                <span className="text-sm text-[#5D6169] font-medium group-hover:text-[#202020] transition-colors">{material}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
