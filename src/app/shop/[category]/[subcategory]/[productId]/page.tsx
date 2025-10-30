"use client";
import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarFilledIcon, CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Helper function to find product
interface ProductFeature {
  title: string;
  description: string;
}

interface ProductReview {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
  pros: string[];
  cons: string[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  galleryImages?: string[];
  features: (string | ProductFeature)[];
  specifications?: Record<string, string>;
  rating: number;
  reviews: ProductReview[] | number;
  stockStatus?: string;
  sku?: string;
  certifications?: string[];
  warranty?: string;
  shipping?: {
    estimated: string;
    free: boolean;
    threshold: number;
  };
  relatedProducts?: string[];
}

const findProduct = (categorySlug: string, subcategorySlug: string, productId: string) => {
  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  if (!category) return null;

  const subcategory = category.subcategories?.find(
    sub => sub.name.toLowerCase().replace(/\s+/g, '-') === subcategorySlug
  );
  if (!subcategory) return null;

  return subcategory.products?.find(product => product.id === productId) || null;
};

export default function ProductPage({
  params,
}: {
  params: { category: string; subcategory: string; productId: string };
}) {
  const product = findProduct(params.category, params.subcategory, params.productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

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
                {params.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/shop/${params.category}/${params.subcategory}`}>
                {params.subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Overview Section */}
      <div className="max-w-frame mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.galleryImages?.[selectedImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "relative aspect-square rounded-lg overflow-hidden bg-gray-100",
                        selectedImage === index ? "ring-2 ring-blue-600" : "hover:ring-2 hover:ring-blue-400"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className={cn("text-3xl font-bold mb-2", integralCF.className)}>
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2 mb-6">
                  <Badge variant={product.stockStatus === "In Stock" ? "default" : "secondary"}>
                    {product.stockStatus}
                  </Badge>
                  <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex space-x-4 mb-8">
                  <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    Add to Wishlist
                  </Button>
                </div>

                {/* Key Features */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <div className="grid gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">
                            {typeof feature === 'string' ? feature : feature.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {typeof feature === 'string' ? '' : feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="border-t border-b py-6 mt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {product.shipping?.free ? 'Free Shipping' : 'Calculated at checkout'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span>Estimated delivery</span>
                    <span className="font-medium">{product.shipping?.estimated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <div className="max-w-frame mx-auto px-4 py-12">
        <Tabs defaultValue="details" className="bg-white rounded-2xl shadow-lg p-6">
          <TabsList className="grid grid-cols-4 gap-4 mb-8">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="prose max-w-none">
              <h3 className={cn("text-2xl font-bold mb-4", integralCF.className)}>
                Product Description
              </h3>
              <p className="text-gray-600">{product.longDescription}</p>
              
              {product.certifications && product.certifications.length > 0 && (
                <>
                  <h4 className="text-xl font-semibold mt-8 mb-4">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            {product.specifications && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-4">
                    <span className="font-medium text-gray-600 w-1/3">{key}</span>
                    <span className="text-gray-900 w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-8">
              {/* Overall Rating */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl font-bold text-blue-600">{product.rating}</div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarFilledIcon
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on {Array.isArray(product.reviews) ? product.reviews.length : product.reviews} reviews
                  </p>
                </div>
              </div>

              {/* Individual Reviews */}
              {Array.isArray(product.reviews) && (
                <div className="space-y-6">
                  {product.reviews.map((review: ProductReview) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="font-medium">{review.user}</span>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <StarFilledIcon
                                key={i}
                                className={cn(
                                  "w-4 h-4",
                                  i < Math.floor(review.rating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{review.comment}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Pros</h5>
                          <ul className="space-y-1">
                            {review.pros.map((pro: string, index: number) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {review.cons.length > 0 && (
                          <div>
                            <h5 className="font-medium mb-2">Cons</h5>
                            <ul className="space-y-1">
                              {review.cons.map((con: string, index: number) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <MinusIcon className="w-4 h-4 text-red-500 mr-2" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="shipping">
            <div className="prose max-w-none">
              <h3 className={cn("text-2xl font-bold mb-4", integralCF.className)}>
                Shipping Information
              </h3>
              <div className="space-y-4">
                <p>
                  {product.shipping?.free 
                    ? `Free shipping on orders over $${product.shipping.threshold}`
                    : 'Shipping costs will be calculated at checkout'}
                </p>
                <p>Estimated delivery time: {product.shipping?.estimated}</p>
                
                <h4 className="text-xl font-semibold mt-8 mb-4">Warranty</h4>
                <p>{product.warranty || 'Standard manufacturer warranty applies'}</p>

                <h4 className="text-xl font-semibold mt-8 mb-4">Returns</h4>
                <p>
                  We accept returns within 30 days of delivery. Items must be unused
                  and in their original packaging. Please contact our customer service
                  team to initiate a return.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="max-w-frame mx-auto px-4 py-12">
        <h2 className={cn("text-2xl font-bold mb-8", integralCF.className)}>
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Add related products here */}
        </div>
      </div>
    </div>
  );
}