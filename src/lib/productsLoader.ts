import fs from "fs";
import path from "path";

export interface ProductVariant {
  article_number: string;
  description: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  title?: string;
  url: string;
  description?: string | null;
  short_description?: string;
  full_details?: string;
  long_description?: string;
  subcategory?: string;
  image_url: string;
  image_urls: string[];
  image_local_path: string;
  image_local_paths: string[];
  variants: ProductVariant[];
  specifications: ProductVariant[];
  article_numbers: string[];
}

/** Any catalog branch node (recursive tree from JSON). */
export interface CatalogNode {
  id: string;
  name: string;
  url: string;
  description: string;
  image_url: string;
  image_local_path: string;
  subcategories: CatalogNode[];
  products: Product[];
}

export interface SubSubCategory {
  id: string;
  name: string;
  url: string;
  description: string;
  image_url: string;
  image_local_path: string;
  subcategories: CatalogNode[];
  products: Product[];
}

export interface SubCategory {
  id: string;
  name: string;
  url: string;
  description: string;
  image_url: string;
  image_local_path: string;
  subcategories: SubSubCategory[];
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  url: string;
  description: string;
  image_url: string;
  image_local_path: string;
  subcategories: SubCategory[];
}

export interface ProductsData {
  metadata: {
    website: string;
    total_categories: number;
    total_products: number;
    last_updated: string;
    scraping_status: string;
  };
  categories: Category[];
}

let cachedProducts: ProductsData | null = null;

export async function loadProductsData(): Promise<ProductsData> {
  if (cachedProducts && process.env.NODE_ENV === "production") {
    return cachedProducts;
  }

  try {
    const filePath = path.join(process.cwd(), "public", "products.json");
    const data = fs.readFileSync(filePath, "utf-8");
    cachedProducts = JSON.parse(data) as ProductsData;
    return cachedProducts;
  } catch (error) {
    console.error("Failed to load products.json:", error);
    return {
      metadata: {
        website: "",
        total_categories: 0,
        total_products: 0,
        last_updated: "",
        scraping_status: "error",
      },
      categories: [],
    };
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const data = await loadProductsData();
  return (
    data.categories.find(
      (cat) => slugify(cat.name) === slug || cat.id === slug
    ) || null
  );
}

export async function getSubCategoryBySlug(
  categorySlug: string,
  subSlug: string
): Promise<SubCategory | null> {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return null;
  return (
    category.subcategories.find(
      (sub) => slugify(sub.name) === subSlug || sub.id === subSlug
    ) || null
  );
}

export async function getSubSubCategoryBySlug(
  categorySlug: string,
  subSlug: string,
  subsubSlug: string
): Promise<SubSubCategory | null> {
  const subCategory = await getSubCategoryBySlug(categorySlug, subSlug);
  if (!subCategory) return null;
  return (
    subCategory.subcategories.find(
      (subsub) => slugify(subsub.name) === subsubSlug || subsub.id === subsubSlug
    ) || null
  );
}

export async function getProductById(
  categorySlug: string,
  subSlug: string,
  subsubSlug: string,
  productId: string
): Promise<Product | null> {
  const subsubCategory = await getSubSubCategoryBySlug(
    categorySlug,
    subSlug,
    subsubSlug
  );
  if (!subsubCategory) return null;
  return (
    subsubCategory.products.find((prod) => prod.id === productId) || null
  );
}

/** Walk from a top-level category down a chain of child ids or name slugs. */
export async function getCatalogNodeByPath(
  categorySlug: string,
  pathSegmentIds: string[]
): Promise<{ node: CatalogNode; category: Category } | null> {
  const category = await getCategoryBySlug(categorySlug);
  if (!category || !pathSegmentIds.length) return null;

  let node: CatalogNode = category as unknown as CatalogNode;
  for (const seg of pathSegmentIds) {
    const children = node.subcategories || [];
    const next = children.find(
      (c) => c.id === seg || slugify(c.name) === seg
    );
    if (!next) return null;
    node = next;
  }
  return { node, category };
}

export async function getProductByCategoryPath(
  categorySlug: string,
  pathToProductParent: string[],
  productId: string
): Promise<Product | null> {
  const resolved = await getCatalogNodeByPath(categorySlug, pathToProductParent);
  if (!resolved) return null;
  return resolved.node.products?.find((p) => p.id === productId) ?? null;
}

/** Products to show on a node: own products plus, for empty leaf children, parent-listed products tagged with that subcategory name. */
export function getDisplayProductsForNode(
  node: CatalogNode,
  parent: CatalogNode | null
): Product[] {
  const direct = node.products || [];
  if (direct.length > 0) return direct;
  if (!parent?.products?.length) return [];
  return parent.products.filter(
    (p) => p.subcategory && p.subcategory === node.name
  );
}

export async function getBreadcrumbTrail(
  categorySlug: string,
  pathSegmentIds: string[]
): Promise<{ id: string; name: string }[]> {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return [];
  const trail: { id: string; name: string }[] = [
    { id: category.id, name: category.name },
  ];
  let node: CatalogNode = category as unknown as CatalogNode;
  for (const seg of pathSegmentIds) {
    const next = (node.subcategories || []).find(
      (c) => c.id === seg || slugify(c.name) === seg
    );
    if (!next) break;
    trail.push({ id: next.id, name: next.name });
    node = next;
  }
  return trail;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Only the top-level "Surgical instruments" tree is exposed in the shop UI. */
export function getSurgicalInstrumentsCategory(
  data: ProductsData
): Category | null {
  const list = data.categories || [];
  return (
    list.find(
      (c) =>
        slugify(c.name) === "surgical-instruments" ||
        /^surgical\s+instruments$/i.test(c.name.trim())
    ) ?? null
  );
}

export function isSurgicalShopCategoryParam(
  categoryParam: string,
  surgical: Category | null
): boolean {
  if (!surgical) return false;
  if (categoryParam === surgical.id) return true;
  const nameSlug = slugify(surgical.name);
  return nameSlug === categoryParam || nameSlug === slugify(categoryParam);
}
