// 'use client';
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

// Function to fetch a product by ID (server-side)
async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?id=${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data = await res.json();
    console.log("Fetched Product:", data.product);
    return data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Function to fix image URLs for downloaded_images directory
function fixImagePaths(product: Product): Product {
  const fixUrl = (url: string | undefined): string => {
    if (!url) return '/images/placeholder1111111111111111.jpg';
    
    // If it's already a valid URL or starts with /, return as is
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
      return url;
    }
    
    // If it's a filename without path, add the downloaded_images path
    if (!url.includes('/') && !url.includes('\\')) {
      return `/downloaded_images(1)/downloaded_images/${url}`;
    }
    
    // If it has a partial path but not the full one, fix it
    if (url.includes('downloaded_images') && !url.startsWith('/downloaded_images(1)/downloaded_images/')) {
      return url.replace(/.*downloaded_images[^/]*/, '/downloaded_images(1)/downloaded_images');
    }
    
    // Default case - assume it's a filename that needs the full path
    return `/downloaded_images(1)/downloaded_images/${url}`;
  };

  return {
    ...product,
    srcUrl: product.gallery?.[0] || [],
    gallery: product.gallery?.map(fixUrl) || [],
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productId = Number(params.slug[0]);
  let productData = await fetchProductById(productId);

  console.log("Raw Product Data", productData);

  if (!productData) {
    notFound();
  }

  // Fix the image paths before passing to components
  productData = fixImagePaths(productData);
  console.log("Fixed Product Data", productData);

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData.title ?? "Product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      {/* <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={[productData]} />
      </div> */}
      <div className="mb-[50px] sm:mb-20">
        {/* <h2 className="text-xl font-semibold mb-4">Product Description</h2> */}
        {/* <p className="text-gray-700">{productData.description}</p> */}
      </div>
    </main>
  );
}