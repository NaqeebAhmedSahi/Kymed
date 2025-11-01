"use client";

import { useState, useMemo } from "react";
import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
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

// Helper function to find subcategory
const findSubcategory = (categorySlug: string, subcategorySlug: string) => {
  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  if (!category) return null;

  const subcategory = category.subcategories?.find(
    sub => sub.name.toLowerCase().replace(/\s+/g, '-') === subcategorySlug
  );
  return subcategory || null;
};

// Get product type for filtering
const getProductType = (product: { name: string; description: string; features: any[] }) => {
  const name = product.name.toLowerCase();
  const desc = product.description.toLowerCase();
  
  if (name.includes('premium') || desc.includes('premium')) return 'premium';
  if (name.includes('basic') || desc.includes('basic')) return 'basic';
  if (name.includes('professional') || desc.includes('professional')) return 'professional';
  if (name.includes('disposable') || desc.includes('disposable')) return 'disposable';
  if (name.includes('sterile') || desc.includes('sterile')) return 'sterile';
  if (name.includes('surgical') || desc.includes('surgical')) return 'surgical';
  if (name.includes('diagnostic') || desc.includes('diagnostic')) return 'diagnostic';
  return 'standard';
};

// Price range options
const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "Over $200", value: "200+" },
];

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 6;

  const subcategory = findSubcategory(params.category, params.subcategory);

  if (!subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className={cn("text-4xl font-bold mb-4", integralCF.className)}>Subcategory Not Found</h1>
          <p className="text-gray-600 mb-6">The subcategory you're looking for doesn't exist.</p>
          <Link href="/categories" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === params.category
  );

  // Get unique product types for filter
  const productTypes = useMemo(() => {
    if (!subcategory.products) return ["all"];
    const types: string[] = [];
    subcategory.products.forEach(product => {
      const productType = getProductType(product);
      types.push(productType);
    });
    return ["all", ...Array.from(new Set(types))];
  }, [subcategory.products]);

  // Filter and search logic for products
  const filteredProducts = useMemo(() => {
    if (!subcategory.products) return [];
    
    return subcategory.products.filter((product) => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Type filter
      const productType = getProductType(product);
      const matchesType = selectedType === "all" || productType === selectedType;
      
      // Price range filter
      let matchesPrice = true;
      if (selectedPriceRange !== "all") {
        const [min, max] = selectedPriceRange.split('-');
        if (max === '+') {
          matchesPrice = product.price >= parseInt(min);
        } else if (min && max) {
          matchesPrice = product.price >= parseInt(min) && product.price <= parseInt(max);
        }
      }
      
      // Rating filter
      let matchesRating = true;
      if (selectedRating !== "all") {
        const minRating = parseInt(selectedRating);
        matchesRating = product.rating >= minRating;
      }
      
      return matchesSearch && matchesType && matchesPrice && matchesRating;
    });
  }, [subcategory.products, searchTerm, selectedType, selectedPriceRange, selectedRating]);

  // Sort products (you can add sorting options later)
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredProducts]);

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedPriceRange("all");
    setSelectedRating("all");
    setCurrentPage(1);
  };

  // Check if any filter is active
  const hasActiveFilters = searchTerm || selectedType !== "all" || selectedPriceRange !== "all" || selectedRating !== "all";

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
    <div className="min-h-screen bg-gray-50">
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
              <BreadcrumbLink href={`/categories/${params.category}`}>
                {category?.name || params.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subcategory.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="h-[300px] md:h-[400px] relative">
          <Image
            src={subcategory.bannerImage || subcategory.image}
            alt={subcategory.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-frame mx-auto px-4 text-white">
            <h1 className={cn("text-4xl md:text-5xl font-bold mb-4", integralCF.className)}>
              {subcategory.name}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-200">
              {subcategory.longDescription || subcategory.description}
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
              placeholder={`Search ${subcategory.name} products...`}
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
                {hasActiveFilters && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>

              {hasActiveFilters && (
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
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Type Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Product Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {productTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "px-3 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200",
                          selectedType === type
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                        )}
                      >
                        {type === "all" ? "All Types" : type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => {
                          setSelectedPriceRange(range.value);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                          selectedPriceRange === range.value
                            ? "bg-green-600 text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Minimum Rating</h4>
                  <div className="flex flex-wrap gap-2">
                    {["all", "4", "3", "2", "1"].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => {
                          setSelectedRating(rating);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                          selectedRating === rating
                            ? "bg-yellow-600 text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-300 hover:border-yellow-500 hover:text-yellow-600"
                        )}
                      >
                        {rating === "all" ? "All Ratings" : `${rating}+ Stars`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-frame mx-auto px-4 pb-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className={cn("text-2xl font-bold mb-2 text-gray-600", integralCF.className)}>
              No products found
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
            <div className="flex items-center justify-between mb-8">
              <h2 className={cn("text-3xl font-bold", integralCF.className)}>
                {subcategory.name} Products
                {hasActiveFilters && (
                  <span className="text-lg text-gray-500 ml-2">({filteredProducts.length} results)</span>
                )}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedProducts.map((product) => {
                const productType = getProductType(product);
                return (
                  <Link
                    href={`/shop/${params.category}/${params.subcategory}/${product.id}`}
                    key={product.id}
                    className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="relative h-64 overflow-hidden group">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Product Type Badge */}
                      {productType && productType !== "standard" && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 capitalize">
                            {productType}
                          </Badge>
                        </div>
                      )}

                      {/* View Details Button */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
                          View Details
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={cn("text-xl font-semibold", integralCF.className)}>
                          {product.name}
                        </h3>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          ${product.price.toFixed(2)}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-4">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100">
                              {typeof feature === 'string' ? feature : feature.title}
                            </Badge>
                          ))}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              {[...Array(5)].map((_, i) => (
                                <StarFilledIcon
                                  key={i}
                                  className={cn(
                                    "w-4 h-4",
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              ({Array.isArray(product.reviews) ? product.reviews.length : product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Pagination - ALWAYS SHOWS */}
            {filteredProducts.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                {/* Results Info */}
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of{" "}
                  <span className="font-semibold">{filteredProducts.length}</span> products
                </div>

                {/* Pagination Controls */}
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-blue-600 mb-2", integralCF.className)}>
              {subcategory.products?.length || 0}+
            </div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-green-600 mb-2", integralCF.className)}>
              4.8
            </div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-purple-600 mb-2", integralCF.className)}>
              24/7
            </div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={cn("text-3xl font-bold text-orange-600 mb-2", integralCF.className)}>
              100%
            </div>
            <div className="text-gray-600">Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
}