"use client";
import { useState, useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarFilledIcon, CheckIcon, MinusIcon } from "@radix-ui/react-icons";
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
import { FiHome, FiShoppingCart, FiHeart, FiShare2, FiTruck, FiShield } from "react-icons/fi";

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

  if (!product) {
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
              Product Not Found
            </h1>
            <p className="text-xl text-[#5D6169] mb-8 max-w-2xl mx-auto">
              The product you're looking for doesn't exist or may have been moved.
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

  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === params.category
  );

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
                <BreadcrumbLink href={`/categories/${params.category}`} className="text-[#008C99] hover:text-[#006670] transition-colors duration-200">
                  {category?.name || params.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C4C7CA]" />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/shop/${params.category}/${params.subcategory}`} className="text-[#008C99] hover:text-[#006670] transition-colors duration-200">
                  {params.subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C4C7CA]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#2F323A] font-semibold">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Product Overview Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white rounded-2xl border border-[#C4C7CA]/30 shadow-sm p-6 md:p-8 backdrop-blur-sm">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Image Gallery */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#E5F5F7] border border-[#C4C7CA]/30">
                  <Image
                    src={product.galleryImages?.[selectedImage] || product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
                {product.galleryImages && product.galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.galleryImages.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "relative aspect-square rounded-xl overflow-hidden bg-[#E5F5F7] border-2 transition-all duration-300",
                          selectedImage === index 
                            ? "border-[#008C99] shadow-md" 
                            : "border-[#C4C7CA] hover:border-[#008C99]"
                        )}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <div>
                  <h1 className={cn("text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
                    {product.name}
                  </h1>
                  <p className="text-xl text-[#5D6169] leading-relaxed mb-6">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarFilledIcon
                          key={i}
                          className={cn(
                            "w-6 h-6",
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-lg text-[#5D6169]">
                      {product.rating} • {Array.isArray(product.reviews) ? product.reviews.length : product.reviews} reviews
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center space-x-4 mb-8">
                    <Badge className={cn(
                      "text-base px-4 py-2",
                      product.stockStatus === "In Stock" 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : "bg-red-100 text-red-800 border-red-200"
                    )}>
                      {product.stockStatus || "Available"}
                    </Badge>
                    <span className="text-[#5D6169]">SKU: {product.sku}</span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-6 mb-8">
                    <span className="text-lg font-semibold text-[#2F323A]">Quantity:</span>
                    <div className="flex items-center border border-[#C4C7CA] rounded-xl overflow-hidden">
                      <motion.button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        whileHover={{ backgroundColor: "#E5F5F7" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 hover:bg-[#E5F5F7] transition-colors duration-200"
                      >
                        -
                      </motion.button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-20 text-center border-x border-[#C4C7CA] py-3 bg-white"
                      />
                      <motion.button
                        onClick={() => setQuantity(quantity + 1)}
                        whileHover={{ backgroundColor: "#E5F5F7" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 hover:bg-[#E5F5F7] transition-colors duration-200"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mb-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 flex-1 bg-gradient-to-r from-[#008C99] to-[#006670] text-white py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 shadow-md font-semibold"
                    >
                      <FiShoppingCart className="w-5 h-5" />
                      Request Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 border border-[#C4C7CA] rounded-xl hover:border-[#008C99] hover:text-[#008C99] transition-all duration-300"
                    >
                      <FiHeart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 border border-[#C4C7CA] rounded-xl hover:border-[#008C99] hover:text-[#008C99] transition-all duration-300"
                    >
                      <FiShare2 className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Key Features */}
                  <div className="border-t border-[#C4C7CA]/30 pt-8">
                    <h3 className={cn("text-2xl font-bold mb-6", montserrat.className)}>Key Features</h3>
                    <div className="grid gap-6">
                      {product.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start p-4 rounded-xl bg-[#E5F5F7] border border-[#008C99]/20"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckIcon className="w-6 h-6 text-[#008C99] mt-0.5 mr-4 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-[#2F323A] text-lg">
                              {typeof feature === 'string' ? feature : feature.title}
                            </h4>
                            {typeof feature !== 'string' && (
                              <p className="text-[#5D6169] mt-1 leading-relaxed">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping & Warranty Info */}
                  <div className="border-t border-b border-[#C4C7CA]/30 py-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-4">
                        <FiTruck className="w-6 h-6 text-[#008C99]" />
                        <div>
                          <span className="font-semibold text-[#2F323A]">Shipping</span>
                          <p className="text-[#5D6169] text-sm">
                            {product.shipping?.free ? 'Free Shipping Available' : 'Contact for Shipping'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FiShield className="w-6 h-6 text-[#008C99]" />
                        <div>
                          <span className="font-semibold text-[#2F323A]">Warranty</span>
                          <p className="text-[#5D6169] text-sm">
                            {product.warranty || 'Standard Manufacturer Warranty'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Detailed Information Tabs */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="details" className="bg-white rounded-2xl border border-[#C4C7CA]/30 shadow-sm p-6 md:p-8 backdrop-blur-sm">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-1 bg-[#E5F5F7] rounded-xl">
              {[
                { value: "details", label: "Product Details" },
                { value: "specifications", label: "Specifications" },
                { value: "reviews", label: "Reviews" },
                { value: "shipping", label: "Shipping & Returns" }
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#008C99] data-[state=active]:shadow-sm rounded-lg transition-all duration-200 font-semibold"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={cn("text-3xl font-bold mb-6 bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
                  Product Description
                </h3>
                <p className="text-lg text-[#5D6169] leading-relaxed mb-8">
                  {product.longDescription || product.description}
                </p>
                
                {product.certifications && product.certifications.length > 0 && (
                  <>
                    <h4 className={cn("text-2xl font-bold mb-6", montserrat.className)}>Certifications</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.certifications.map((cert, index) => (
                        <Badge key={index} className="bg-[#E5F5F7] text-[#008C99] border-[#008C99]/30 px-4 py-2 text-base">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="specifications">
              {product.specifications && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-[#C4C7CA]/30 pb-4">
                      <span className="font-semibold text-[#2F323A] w-1/2">{key}</span>
                      <span className="text-[#5D6169] w-1/2">{value}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="reviews">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Overall Rating */}
                <div className="flex items-center space-x-8 mb-8 p-6 bg-[#E5F5F7] rounded-2xl border border-[#008C99]/20">
                  <div className="text-5xl font-bold text-[#008C99]">{product.rating}</div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarFilledIcon
                          key={i}
                          className={cn(
                            "w-6 h-6",
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-[#5D6169]">
                      Based on {Array.isArray(product.reviews) ? product.reviews.length : product.reviews} reviews
                    </p>
                  </div>
                </div>

                {/* Individual Reviews */}
                {Array.isArray(product.reviews) && (
                  <div className="space-y-8">
                    {product.reviews.map((review: ProductReview) => (
                      <div key={review.id} className="border-b border-[#C4C7CA]/30 pb-8 last:border-b-0">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="font-semibold text-lg text-[#2F323A]">{review.user}</span>
                            <div className="flex items-center mt-2">
                              {[...Array(5)].map((_, i) => (
                                <StarFilledIcon
                                  key={i}
                                  className={cn(
                                    "w-5 h-5",
                                    i < Math.floor(review.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-[#5D6169]">{review.date}</span>
                        </div>
                        <p className="text-[#5D6169] leading-relaxed mb-6">{review.comment}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-[#2F323A] mb-3">Pros</h5>
                            <ul className="space-y-2">
                              {review.pros.map((pro: string, index: number) => (
                                <li key={index} className="flex items-center text-[#5D6169]">
                                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {review.cons.length > 0 && (
                            <div>
                              <h5 className="font-semibold text-[#2F323A] mb-3">Cons</h5>
                              <ul className="space-y-2">
                                {review.cons.map((con: string, index: number) => (
                                  <li key={index} className="flex items-center text-[#5D6169]">
                                    <MinusIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
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
              </motion.div>
            </TabsContent>

            <TabsContent value="shipping">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={cn("text-3xl font-bold mb-6 bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
                  Shipping & Returns
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-[#E5F5F7] rounded-2xl border border-[#008C99]/20">
                    <h4 className={cn("text-xl font-bold mb-4", montserrat.className)}>Shipping Information</h4>
                    <p className="text-[#5D6169] leading-relaxed">
                      {product.shipping?.free 
                        ? `Free shipping available for qualified orders. Contact our sales team for details.`
                        : 'Shipping costs will be calculated based on your location and order requirements.'}
                    </p>
                    <p className="text-[#5D6169] mt-4">
                      Estimated delivery time: {product.shipping?.estimated || '2-5 business days'}
                    </p>
                  </div>

                  <div className="p-6 bg-[#E5F5F7] rounded-2xl border border-[#008C99]/20">
                    <h4 className={cn("text-xl font-bold mb-4", montserrat.className)}>Warranty</h4>
                    <p className="text-[#5D6169] leading-relaxed">
                      {product.warranty || 'This product comes with a standard manufacturer warranty. Please contact us for specific warranty details and duration.'}
                    </p>
                  </div>

                  <div className="p-6 bg-[#E5F5F7] rounded-2xl border border-[#008C99]/20">
                    <h4 className={cn("text-xl font-bold mb-4", montserrat.className)}>Returns Policy</h4>
                    <p className="text-[#5D6169] leading-relaxed">
                      We accept returns within 30 days of delivery for unused items in their original packaging. 
                      For medical equipment, specific return conditions may apply. Please contact our customer service 
                      team to initiate a return or for any questions about our return policy.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={cn("text-4xl font-bold mb-12 text-center bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent", montserrat.className)}>
            Related Products
          </h2>
          <div className="text-center text-[#5D6169] text-lg">
            <p>Explore more products in this category or contact us for custom solutions.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block"
            >
              <Link 
                href={`/shop/${params.category}/${params.subcategory}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#008C99] to-[#006670] text-white rounded-xl hover:shadow-lg transition-all duration-300 shadow-md font-semibold"
              >
                View All Products
                <FiShoppingCart className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}