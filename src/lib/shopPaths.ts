/** Client-safe helpers for human-readable shop URLs. */

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[&/]+/g, " ")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Prefer a name slug; fall back to id when the name is empty. */
export function catalogSegment(node: { id?: string | number; name: string }): string {
  const fromName = slugify(node.name);
  if (fromName) return fromName;
  return String(node.id ?? "");
}

export function shopCategoryHref(categorySegment: string, pathSegments: string[] = []): string {
  if (pathSegments.length === 0) return `/shop/${categorySegment}`;
  return `/shop/${categorySegment}/${pathSegments.join("/")}`;
}

const PRODUCT_SEGMENT = "p";

export function shopProductHref(
  categorySegment: string,
  pathToParent: string[],
  product: { id?: string | number; name: string }
): string {
  return `${shopCategoryHref(categorySegment, pathToParent)}/${PRODUCT_SEGMENT}/${catalogSegment(product)}`;
}

export { PRODUCT_SEGMENT };
