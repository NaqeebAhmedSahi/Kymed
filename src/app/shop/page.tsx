"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Fixed import
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import { FiSliders } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product } from "@/types/product.types";

const productsPerPage = 9;

export default function ShopPage({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const subcategory = searchParams.get("subcategory"); // Get subcategory from query params

  useEffect(() => {
    // Only proceed if category exists in the URL
    if (!params.category) return;

    const fetchProducts = async () => {
      try {
        const formattedCategory = params.category.replace(/-/g, " ").toLowerCase();
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${formattedCategory}`;
        
        // Add subcategory to the URL if it exists
        if (subcategory) {
          const formattedSubcategory = subcategory.replace(/-/g, " ").toLowerCase();
          url += `&subcategory=${formattedSubcategory}`;
        }
        
        console.log("🌐 Fetching from URL:", url);
        const response = await fetch(url);
        
        // Check if the response is valid
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log("📦 Products received:", data.products?.length || 0);
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.category, subcategory]); // Add subcategory to dependency array

  // ... rest of your component code remains the same
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Generate page title based on category and subcategory
  const getPageTitle = () => {
    if (subcategory) {
      const formattedSubcategory = subcategory.replace(/-/g, " ");
      return formattedSubcategory.charAt(0).toUpperCase() + formattedSubcategory.slice(1);
    }
    
    if (params.category) {
      const formattedCategory = params.category.replace(/-/g, " ");
      return formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);
    }
    
    return "All Products";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop category={params.category} subcategory={subcategory || undefined} />
        <div className="flex md:space-x-5 items-start">
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">{getPageTitle()}</h1>
              <div className="flex items-center">
                Srt by:
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
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
            {paginatedProducts.length > 0 && (
              <>
                <hr className="border-t-black/10" />
                <Pagination>
                  <PaginationPrevious
                    href="#"
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                  <PaginationContent>
                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === index + 1}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    {totalPages > 5 && <PaginationEllipsis />}
                  </PaginationContent>
                  <PaginationNext
                    href="#"
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </Pagination>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}