"use client";

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

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const subcategory = findSubcategory(params.category, params.subcategory);

  if (!subcategory) {
    return <div>Subcategory not found</div>;
  }

  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === params.category
  );

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Products Grid */}
      <div className="max-w-frame mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategory.products?.map((product) => (
            <Link
              href={`/shop/${params.category}/${params.subcategory}/${product.id}`}
              key={product.id}
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
          ))}
        </div>
      </div>
    </div>
  );
}