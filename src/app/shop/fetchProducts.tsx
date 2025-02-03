// fetchProducts.ts
import { Product } from "@/types/product.types";

/**
 * Fetch products from the backend for a given category.
 * @param category - The category of products to fetch.
 * @returns An array of products.
 */
export async function fetchProducts(category: string): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${encodeURIComponent(category)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
