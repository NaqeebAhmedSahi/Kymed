// Load product data from Book1.json (exported from products.json)
export async function loadProductsData() {
  try {
    const response = await fetch("/Book1.json");
    if (!response.ok) throw new Error("Failed to fetch products data");
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error loading products data:", error);
    return [];
  }
}

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image_local_path?: string;
  url?: string;
  subcategories?: ProductSubcategory[];
};

export type ProductSubcategory = {
  id: string;
  name: string;
  description: string;
  image_local_path?: string;
  url?: string;
  subcategories?: any[];
  products?: any[];
};
