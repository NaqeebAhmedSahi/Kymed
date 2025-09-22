"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import { FiSliders, FiX } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product } from "@/types/product.types";
import SpinnerbLoader from "@/components/ui/SpinnerbLoader";
import Link from "next/link";

const productsPerPage = 9;

export default function ShopPage({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams();
  const subcategory = searchParams.get("subcategory");
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    subcategory: ""
  });
  
  // Get category from the URL params and format it
  const category = params.category.replace(/-/g, " ").toLowerCase();

  useEffect(() => {
    // Fetch data from the backend API
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Build query string
        let queryString = `category=${category}`;
        if (subcategory) {
          queryString += `&subcategory=${subcategory}`;
        }
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?${queryString}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await response.json();
        setProducts(data.products);
        setActiveFilters({
          category: data.filters.category || category,
          subcategory: data.filters.subcategory || ""
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, subcategory]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  // Generate pagination items
  const paginationItems = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          isActive={currentPage === i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  // Function to format text for display
  const formatText = (text: string) => {
    return text.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SpinnerbLoader className="w-10 border-2 border-gray-300 border-r-gray-600" />
      </div>
    );
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop 
          category={activeFilters.category} 
          subcategory={activeFilters.subcategory} 
        />
        
        {/* Active Filters Display */}
        {activeFilters.subcategory && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-blue-800">
                  Filtering by: {formatText(activeFilters.subcategory)}
                </h2>
                <p className="text-blue-600 mt-1">
                  Showing {products.length} product{products.length !== 1 ? 's' : ''} in this subcategory
                </p>
              </div>
              <Link 
                href={`/shop/${params.category}`}
                className="mt-3 sm:mt-0 flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <FiX className="mr-1" /> Clear filter
              </Link>
            </div>
          </div>
        )}
        
        <div className="flex md:space-x-5 items-start">
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div>
                <h1 className="font-bold text-2xl md:text-[32px] capitalize mb-2">
                  {formatText(activeFilters.category)}
                </h1>
                {!activeFilters.subcategory && (
                  <p className="text-gray-600">
                    {products.length} product{products.length !== 1 ? 's' : ''} available
                  </p>
                )}
              </div>
              <div className="flex items-center mt-3 lg:mt-0">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <Select defaultValue="most-popular">
                  <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="low-price">Low Price</SelectItem>
                    <SelectItem value="high-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {products.length === 0 ? (
              <div className="text-center py-10">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activeFilters.subcategory 
                      ? `No products found in "${formatText(activeFilters.subcategory)}" subcategory.` 
                      : `No products found in "${formatText(activeFilters.category)}" category.`
                    }
                  </p>
                  {activeFilters.subcategory && (
                    <Link 
                      href={`/shop/${params.category}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all {formatText(activeFilters.category)} products
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <>
                    <hr className="border-t-black/10" />
                    <div className="flex justify-center">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              href="#"
                              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                          </PaginationItem>
                          
                          {paginationItems}
                          
                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                    <div className="text-center text-gray-600 text-sm">
                      Page {currentPage} of {totalPages}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}