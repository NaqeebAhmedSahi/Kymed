"use client";
import { useState, useMemo } from "react";
import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiFilter, FiX, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// Define the category type based on your actual data structure
interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  bannerImage?: string;
  longDescription?: string;
  subcategories?: any[];
}

// Get category type for display - moved to top level
const getCategoryType = (category: { name: string }) => {
  const name = category.name.toLowerCase();
  if (name.includes('surgical')) return 'surgical';
  if (name.includes('diagnostic')) return 'diagnostic';
  if (name.includes('therapy')) return 'therapy';
  if (name.includes('monitoring')) return 'monitoring';
  if (name.includes('dental')) return 'dental';
  if (name.includes('ophthalmic')) return 'ophthalmic';
  if (name.includes('orthopedic')) return 'orthopedic';
  return 'general';
};

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 6;

  // Get unique categories for filter - using specialty or creating types from names
  const categoryTypes = useMemo(() => {
    // Since your categories don't have 'type', we'll create some based on name or use a fallback
    const types: string[] = [];
    categories.forEach(cat => {
      // Extract type from name or use a default
      const categoryType = getCategoryType(cat);
      types.push(categoryType);
    });
    return ["all", ...Array.from(new Set(types))];
  }, []);

  // Filter and search logic - use the actual category type without casting
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          category.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Since type doesn't exist, we'll create a dynamic type based on name for filtering
      const categoryType = getCategoryType(category);
      
      const matchesFilter = selectedFilter === "all" || categoryType === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCategories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCategories, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Always show first page
      visiblePages.push(1);
      
      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the beginning
      if (currentPage <= 3) {
        end = 4;
      }
      
      // Adjust if we're at the end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        visiblePages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        visiblePages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        visiblePages.push('...');
      }
      
      // Always show last page
      visiblePages.push(totalPages);
    }
    
    return visiblePages;
  };

  return (
    <div className="max-w-frame mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-6", integralCF.className)}>
          Product Categories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive range of medical equipment and supplies across various specialties
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search categories..."
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
              Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredCategories.length)} of {filteredCategories.length} categories
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {categoryTypes.map((type) => (
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
                    {type === "all" ? "All Categories" : type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className={cn("text-2xl font-bold mb-2 text-gray-600", integralCF.className)}>
            No categories found
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
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedCategories.map((category) => {
              const categoryType = getCategoryType(category);
              return (
                <Link
                  href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  key={category.id}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-200"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    {categoryType && categoryType !== "general" && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full capitalize">
                          {categoryType}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className={cn("text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200", integralCF.className)}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                      Browse Products
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Enhanced Pagination - ALWAYS SHOWS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            {/* Results Info */}
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredCategories.length)}</span> of{" "}
              <span className="font-semibold">{filteredCategories.length}</span> categories
            </div>

            {/* Pagination Controls - Always visible */}
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
        </>
      )}

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className={cn("text-3xl font-bold text-blue-600 mb-2", integralCF.className)}>
            {categories.length}+
          </div>
          <div className="text-gray-600">Product Categories</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className={cn("text-3xl font-bold text-green-600 mb-2", integralCF.className)}>
            1000+
          </div>
          <div className="text-gray-600">Medical Products</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className={cn("text-3xl font-bold text-purple-600 mb-2", integralCF.className)}>
            50+
          </div>
          <div className="text-gray-600">Specialties Served</div>
        </div>
      </div>
    </div>
  );
}