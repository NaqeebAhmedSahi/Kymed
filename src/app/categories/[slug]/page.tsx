"use client";
import { useState, useMemo, useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
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
import { FiSearch, FiFilter, FiX, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight, FiHome } from "react-icons/fi";

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (!category) {
    return (
      <section className="relative bg-[#F8F9FA] text-[#2F323A] min-h-screen py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,245,247,0.8),rgba(248,249,250,0.9))]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#C4C7CA] text-8xl mb-6">🔍</div>
            <h1 className={cn("text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
              Category Not Found
            </h1>
            <p className="text-xl text-[#5D6169] mb-8 max-w-2xl mx-auto">
              The category you're looking for doesn't exist or may have been moved.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/categories" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#008C99] to-[#006670] text-white rounded-xl hover:shadow-lg transition-all duration-300 shadow-md font-semibold"
              >
                <FiHome className="w-5 h-5" />
                Back to Categories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
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
    window.scrollTo({ top: 600, behavior: "smooth" });
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
    <section className="relative bg-[#F8F9FA] text-[#2F323A] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,245,247,0.8),rgba(248,249,250,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      </div>

      <div className="relative">
        {/* Breadcrumb */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#008C99] hover:text-[#006670] transition-colors duration-200">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C4C7CA]" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories" className="text-[#008C99] hover:text-[#006670] transition-colors duration-200">Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C4C7CA]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#2F323A] font-semibold">{category.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Hero Banner */}
        <motion.div 
          className="relative h-[500px] w-full mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={category.bannerImage || category.image}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F323A]/70 to-transparent flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <motion.h1
                className={cn("text-5xl md:text-7xl font-bold mb-6", montserrat.className)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {category.name}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-2xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {category.longDescription || category.description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Search and Filter Section */}
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl border border-[#C4C7CA]/30 shadow-sm p-8 backdrop-blur-sm">
              {/* Search Bar */}
              <motion.div className="relative mb-8" variants={itemVariants}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-[#008C99]" />
                </div>
                <input
                  type="text"
                  placeholder={`Search ${category.name} subcategories...`}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="block w-full pl-12 pr-4 py-4 border border-[#C4C7CA] rounded-xl bg-white/80 focus:ring-2 focus:ring-[#008C99]/40 focus:border-transparent transition-all duration-200 text-[#2F323A]"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <FiX className="h-5 w-5 text-[#5D6169] hover:text-[#2F323A] transition-colors duration-200" />
                  </button>
                )}
              </motion.div>

              {/* Filter Controls */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-3 px-6 py-3 bg-[#E5F5F7] text-[#008C99] rounded-xl hover:bg-[#008C99] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <FiFilter className="h-5 w-5" />
                    Filters
                    {selectedFilter !== "all" && (
                      <span className="bg-[#008C99] text-white text-xs px-2 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </button>

                  {(searchTerm || selectedFilter !== "all") && (
                    <button
                      onClick={resetFilters}
                      className="flex items-center gap-2 px-4 py-3 text-[#5D6169] hover:text-[#2F323A] transition-colors duration-200"
                    >
                      <FiX className="h-4 w-4" />
                      Clear all
                    </button>
                  )}
                </div>

                <div className="text-[#5D6169]">
                  Showing <span className="font-semibold text-[#2F323A]">{paginatedSubcategories.length}</span> of{" "}
                  <span className="font-semibold text-[#2F323A]">{filteredSubcategories.length}</span> subcategories
                </div>
              </motion.div>

              {/* Filter Options */}
              {showFilters && (
                <motion.div 
                  className="mt-6 p-6 bg-[#E5F5F7] rounded-xl border border-[#008C99]/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-3">
                    {subcategoryTypes.map((type) => (
                      <motion.button
                        key={type}
                        onClick={() => {
                          setSelectedFilter(type);
                          setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-200",
                          selectedFilter === type
                            ? "bg-gradient-to-r from-[#008C99] to-[#006670] text-white shadow-lg"
                            : "bg-white text-[#2F323A] border border-[#C4C7CA] hover:border-[#008C99] hover:text-[#008C99]"
                        )}
                      >
                        {type === "all" ? "All Types" : type}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Subcategories Section */}
          {filteredSubcategories.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#C4C7CA] text-6xl mb-6">🔍</div>
              <h3 className={cn("text-3xl font-bold mb-4 text-[#2F323A]", montserrat.className)}>
                No subcategories found
              </h3>
              <p className="text-[#5D6169] mb-8 text-lg">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                onClick={resetFilters}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#008C99] to-[#006670] text-white rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
              >
                Reset Filters
              </motion.button>
            </motion.div>
          ) : (
            <>
              <motion.h2
                className={cn("text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Browse {category.name} Categories
                {(searchTerm || selectedFilter !== "all") && (
                  <span className="block text-lg text-[#5D6169] mt-2">
                    ({filteredSubcategories.length} results found)
                  </span>
                )}
              </motion.h2>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {paginatedSubcategories.map((subcategory, index) => {
                  const subcatType = getSubcategoryType(subcategory);
                  return (
                    <motion.div
                      key={subcategory.id}
                      variants={cardVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={subcategory.url}
                        className="group block overflow-hidden rounded-2xl bg-white border border-[#C4C7CA]/30 shadow-sm hover:shadow-xl transition-all duration-500"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={subcategory.image}
                            alt={subcategory.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2F323A]/60 to-transparent group-hover:from-[#008C99]/20 transition-all duration-500" />
                          {subcatType && subcatType !== "general" && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-2 bg-white/90 backdrop-blur-sm text-[#2F323A] text-sm font-medium rounded-full capitalize shadow-sm">
                                {subcatType}
                              </span>
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className={cn("text-2xl font-bold mb-2", montserrat.className)}>
                              {subcategory.name}
                            </h3>
                            <p className="text-white/90 text-sm line-clamp-2 mb-4 leading-relaxed">
                              {subcategory.description}
                            </p>
                            <span className="inline-flex items-center text-[#E5F5F7] font-semibold group-hover:text-white transition-colors duration-300">
                              View Products
                              <svg
                                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Enhanced Pagination */}
              {filteredSubcategories.length > 0 && (
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 p-6 bg-white rounded-2xl border border-[#C4C7CA]/30 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Results Info */}
                  <div className="text-[#5D6169]">
                    Showing <span className="font-semibold text-[#2F323A]">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredSubcategories.length)}</span> of{" "}
                    <span className="font-semibold text-[#2F323A]">{filteredSubcategories.length}</span> subcategories
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center space-x-2">
                    {/* First Page */}
                    <motion.button
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-3 rounded-xl border transition-all duration-200",
                        currentPage === 1
                          ? "text-[#C4C7CA] border-[#C4C7CA] cursor-not-allowed"
                          : "text-[#008C99] border-[#008C99] hover:bg-[#E5F5F7]"
                      )}
                      title="First page"
                    >
                      <FiChevronsLeft className="h-5 w-5" />
                    </motion.button>

                    {/* Previous Page */}
                    <motion.button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-3 rounded-xl border transition-all duration-200",
                        currentPage === 1
                          ? "text-[#C4C7CA] border-[#C4C7CA] cursor-not-allowed"
                          : "text-[#008C99] border-[#008C99] hover:bg-[#E5F5F7]"
                      )}
                      title="Previous page"
                    >
                      <FiChevronLeft className="h-5 w-5" />
                    </motion.button>

                    {/* Page Numbers */}
                    {getVisiblePages().map((page, index) => (
                      <motion.button
                        key={index}
                        onClick={() => typeof page === 'number' && handlePageChange(page)}
                        disabled={page === '...'}
                        whileHover={{ scale: page !== '...' ? 1.1 : 1 }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                          "min-w-[44px] px-4 py-3 rounded-xl border font-medium transition-all duration-200",
                          page === '...'
                            ? "text-[#C4C7CA] border-transparent cursor-default"
                            : currentPage === page
                            ? "bg-gradient-to-r from-[#008C99] to-[#006670] text-white border-transparent shadow-lg"
                            : "text-[#2F323A] border-[#C4C7CA] hover:border-[#008C99] hover:text-[#008C99]"
                        )}
                      >
                        {page}
                      </motion.button>
                    ))}

                    {/* Next Page */}
                    <motion.button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-3 rounded-xl border transition-all duration-200",
                        currentPage === totalPages
                          ? "text-[#C4C7CA] border-[#C4C7CA] cursor-not-allowed"
                          : "text-[#008C99] border-[#008C99] hover:bg-[#E5F5F7]"
                      )}
                      title="Next page"
                    >
                      <FiChevronRight className="h-5 w-5" />
                    </motion.button>

                    {/* Last Page */}
                    <motion.button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-3 rounded-xl border transition-all duration-200",
                        currentPage === totalPages
                          ? "text-[#C4C7CA] border-[#C4C7CA] cursor-not-allowed"
                          : "text-[#008C99] border-[#008C99] hover:bg-[#E5F5F7]"
                      )}
                      title="Last page"
                    >
                      <FiChevronsRight className="h-5 w-5" />
                    </motion.button>
                  </div>

                  {/* Page Size Info */}
                  <div className="text-[#5D6169]">
                    <span className="font-semibold text-[#2F323A]">{itemsPerPage}</span> per page
                  </div>
                </motion.div>
              )}
            </>
          )}

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { number: `${category.subcategories?.length || 0}+`, label: "Subcategories", color: "from-[#008C99] to-[#006670]" },
              { number: "500+", label: "Products Available", color: "from-[#008C99] to-[#006670]" },
              { number: "100%", label: "Quality Guaranteed", color: "from-[#008C99] to-[#006670]" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500 ${stat.color}`} />
                <div className="relative h-full p-8 rounded-2xl bg-white border border-[#C4C7CA]/30 backdrop-blur-sm group-hover:border-[#008C99]/50 transition-all duration-500 shadow-sm text-center">
                  <div className={cn("text-4xl font-bold mb-4 bg-gradient-to-br from-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
                    {stat.number}
                  </div>
                  <div className="text-[#5D6169] text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}