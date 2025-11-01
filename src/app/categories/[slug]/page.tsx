"use client";
import { useState, useMemo } from "react";
import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FiSearch, FiFilter, FiX, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// Helper function to convert category name to slug
const nameToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// Helper function to get category by slug
const getCategoryBySlug = (slug: string) => {
  return categories.find(category => nameToSlug(category.name) === slug);
};

// Get subcategory type for filtering
const getSubcategoryType = (subcategory: { name: string; description: string }) => {
  const name = subcategory.name.toLowerCase();
  const desc = subcategory.description.toLowerCase();
  
  if (name.includes('surgical') || desc.includes('surgical')) return 'surgical';
  if (name.includes('diagnostic') || desc.includes('diagnostic')) return 'diagnostic';
  if (name.includes('therapy') || desc.includes('therapy')) return 'therapy';
  if (name.includes('monitoring') || desc.includes('monitoring')) return 'monitoring';
  if (name.includes('dental') || desc.includes('dental')) return 'dental';
  if (name.includes('ophthalmic') || desc.includes('ophthalmic')) return 'ophthalmic';
  if (name.includes('orthopedic') || desc.includes('orthopedic')) return 'orthopedic';
  if (name.includes('disposable') || desc.includes('disposable')) return 'disposable';
  if (name.includes('equipment') || desc.includes('equipment')) return 'equipment';
  return 'general';
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 6;

  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={cn("text-4xl font-bold mb-4", integralCF.className)}>Category Not Found</h1>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
          <Link href="/categories" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  // Get unique subcategory types for filter
  const subcategoryTypes = useMemo(() => {
    if (!category.subcategories) return ["all"];
    const types: string[] = [];
    category.subcategories.forEach(subcat => {
      const subcatType = getSubcategoryType(subcat);
      types.push(subcatType);
    });
    return ["all", ...Array.from(new Set(types))];
  }, [category.subcategories]);

  // Filter and search logic for subcategories
  const filteredSubcategories = useMemo(() => {
    if (!category.subcategories) return [];
    
    return category.subcategories.filter((subcategory) => {
      const matchesSearch = subcategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          subcategory.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const subcatType = getSubcategoryType(subcategory);
      const matchesFilter = selectedFilter === "all" || subcatType === selectedFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [category.subcategories, searchTerm, selectedFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSubcategories.length / itemsPerPage);
  const paginatedSubcategories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredSubcategories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredSubcategories, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedFilter("all");
    setCurrentPage(1);
  };

  // Generate visible page numbers
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      visiblePages.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 3) {
        end = 4;
      }
      
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }
      
      if (start > 2) {
        visiblePages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        visiblePages.push(i);
      }
      
      if (end < totalPages - 1) {
        visiblePages.push('...');
      }
      
      visiblePages.push(totalPages);
    }
    
    return visiblePages;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-frame mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <Image
          src={category.bannerImage || category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center">
          <div className="max-w-frame mx-auto px-4 text-white">
            <h1 className={cn("text-5xl font-bold mb-6", integralCF.className)}>
              {category.name}
            </h1>
            <p className="text-xl max-w-2xl">
              {category.longDescription || category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-frame mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={`Search ${category.name} subcategories...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FiFilter className="h-4 w-4" />
                Filters
                {selectedFilter !== "all" && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>

              {(searchTerm || selectedFilter !== "all") && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <FiX className="h-4 w-4" />
                  Clear all
                </button>
              )}
            </div>

            <div className="text-sm text-gray-500">
              Showing {paginatedSubcategories.length} of {filteredSubcategories.length} subcategories
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {subcategoryTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedFilter(type);
                      setCurrentPage(1);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200",
                      selectedFilter === type
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                    )}
                  >
                    {type === "all" ? "All Types" : type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-frame mx-auto px-4 pb-16">
        {filteredSubcategories.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className={cn("text-2xl font-bold mb-2 text-gray-600", integralCF.className)}>
              No subcategories found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <h2 className={cn("text-3xl font-bold mb-8 text-center", integralCF.className)}>
              Browse {category.name} Categories
              {searchTerm || selectedFilter !== "all" ? ` (${filteredSubcategories.length} results)` : ""}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedSubcategories.map((subcategory) => {
                const subcatType = getSubcategoryType(subcategory);
                return (
                  <Link
                    href={subcategory.url}
                    key={subcategory.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-200"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={subcategory.image}
                        alt={subcategory.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
                      {subcatType && subcatType !== "general" && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full capitalize">
                            {subcatType}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className={cn("text-2xl font-bold mb-2", integralCF.className)}>
                          {subcategory.name}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2 mb-4">
                          {subcategory.description}
                        </p>
                        <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                          View Products
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Pagination - ALWAYS SHOWS */}
            {filteredSubcategories.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                {/* Results Info */}
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredSubcategories.length)}</span> of{" "}
                  <span className="font-semibold">{filteredSubcategories.length}</span> subcategories
                </div>

                {/* Pagination Controls - Always visible when there are results */}
                <div className="flex items-center space-x-1">
                  {/* First Page */}
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className={cn(
                      "p-2 rounded-lg border border-gray-300 transition-all duration-200",
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                    )}
                    title="First page"
                  >
                    <FiChevronsLeft className="h-4 w-4" />
                  </button>

                  {/* Previous Page */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={cn(
                      "p-2 rounded-lg border border-gray-300 transition-all duration-200",
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                    )}
                    title="Previous page"
                  >
                    <FiChevronLeft className="h-4 w-4" />
                  </button>

                  {/* Page Numbers */}
                  {getVisiblePages().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && handlePageChange(page)}
                      disabled={page === '...'}
                      className={cn(
                        "min-w-[40px] px-3 py-2 rounded-lg border font-medium transition-all duration-200",
                        page === '...'
                          ? "text-gray-400 border-transparent cursor-default"
                          : currentPage === page
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                      )}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next Page */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={cn(
                      "p-2 rounded-lg border border-gray-300 transition-all duration-200",
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                    )}
                    title="Next page"
                  >
                    <FiChevronRight className="h-4 w-4" />
                  </button>

                  {/* Last Page */}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className={cn(
                      "p-2 rounded-lg border border-gray-300 transition-all duration-200",
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                    )}
                    title="Last page"
                  >
                    <FiChevronsRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Page Size Info */}
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">{itemsPerPage}</span> per page
                </div>
              </div>
            )}
          </>
        )}

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-blue-600 mb-2", integralCF.className)}>
              {category.subcategories?.length || 0}+
            </div>
            <div className="text-gray-600">Subcategories</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-green-600 mb-2", integralCF.className)}>
              500+
            </div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-purple-600 mb-2", integralCF.className)}>
              100%
            </div>
            <div className="text-gray-600">Quality Guaranteed</div>
          </div>
        </div>
      </div>
    </div>
  );
}