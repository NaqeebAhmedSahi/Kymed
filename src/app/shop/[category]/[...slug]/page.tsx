import React from "react";
import { Metadata } from "next";
import { montserrat, openSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import {
  CatalogNode,
  getBreadcrumbTrail,
  getCatalogNodeByPath,
  getCategoryBySlug,
  getProductByCategoryPath,
  getProductsForCatalogPage,
  getRealSubcategories,
  getSurgicalInstrumentsCategory,
  isSurgicalShopCategoryParam,
  loadProductsData,
} from "@/lib/productsLoader";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductDetailContent from "@/components/shop/ProductDetailContent";
import { notFound } from "next/navigation";
import Link from "next/link";
import { catalogSegment, PRODUCT_SEGMENT, shopCategoryHref } from "@/lib/shopPaths";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

interface Props {
  params: { category: string; slug: string[] };
}

function parseSlug(slug: string[]): { kind: "product"; pathToParent: string[]; productId: string } | { kind: "catalog"; segments: string[] } {
  if (
    slug.length >= 2 &&
    slug[slug.length - 2] === PRODUCT_SEGMENT
  ) {
    return {
      kind: "product",
      pathToParent: slug.slice(0, -2),
      productId: slug[slug.length - 1]!,
    };
  }
  return { kind: "catalog", segments: slug };
}

async function getParentCatalogNode(
  categorySlug: string,
  path: string[]
): Promise<CatalogNode | null> {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return null;
  if (path.length <= 1) {
    return category as unknown as CatalogNode;
  }
  const parentPath = path.slice(0, -1);
  const r = await getCatalogNodeByPath(categorySlug, parentPath);
  return r?.node ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  if (!isSurgicalShopCategoryParam(params.category, surgical)) {
    notFound();
  }

  const parsed = parseSlug(params.slug);
  if (parsed.kind === "product") {
    const product = await getProductByCategoryPath(
      params.category,
      parsed.pathToParent,
      parsed.productId
    );
    return {
      title: product ? `${product.name} - KyMed` : "Product - KyMed",
      description:
        product?.short_description || product?.title || "Product details",
    };
  }
  const resolved = await getCatalogNodeByPath(params.category, parsed.segments);
  return {
    title: resolved ? `${resolved.node.name} - KyMed` : "Catalog - KyMed",
    description: resolved?.node.description?.slice(0, 160) || "Browse surgical instruments",
  };
}

export default async function ShopCategorySlugPage({ params }: Props) {
  const data = await loadProductsData();
  const surgical = getSurgicalInstrumentsCategory(data);
  if (!isSurgicalShopCategoryParam(params.category, surgical)) {
    notFound();
  }

  const parsed = parseSlug(params.slug);

  if (parsed.kind === "product") {
    const product = await getProductByCategoryPath(
      params.category,
      parsed.pathToParent,
      parsed.productId
    );
    if (!product) notFound();
    const breadcrumb = await getBreadcrumbTrail(
      params.category,
      parsed.pathToParent
    );
    const categorySlug = breadcrumb[0]
      ? catalogSegment(breadcrumb[0])
      : params.category;
    const pathSlugs = breadcrumb.slice(1).map((c) => catalogSegment(c));
    return (
      <ProductDetailContent
        product={product}
        categoryId={categorySlug}
        pathToNode={pathSlugs}
        breadcrumb={breadcrumb}
      />
    );
  }

  const segments = parsed.segments;
  const resolved = await getCatalogNodeByPath(params.category, segments);
  if (!resolved) {
    notFound();
  }

  const { node, category } = resolved;
  const parent = await getParentCatalogNode(params.category, segments);

  // Scraped JSON mirrors products as empty subcategory shells — treat those as products.
  const displaySubs = getRealSubcategories(node);
  const { products: productsToShow, usingFallback: usingFallbackProducts } =
    getProductsForCatalogPage(node, parent, displaySubs);

  const showSubcategories = displaySubs.length > 0;
  const showProducts = productsToShow.length > 0;

  const trail = await getBreadcrumbTrail(params.category, segments);
  const categorySlug = catalogSegment(category);
  const pathSlugs = trail.slice(1).map((c) => catalogSegment(c));
  // When showing borrowed parent products, drop the empty leaf from the product path.
  const productPathSlugs = usingFallbackProducts
    ? pathSlugs.slice(0, -1)
    : pathSlugs;

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      <nav className="text-sm text-[#5D6169] mb-6 flex flex-wrap gap-1 items-center">
        <Link href="/categories" className="text-[#008C99] hover:underline">
          Categories
        </Link>
        {trail.map((crumb, i) => {
          const href = shopCategoryHref(categorySlug, pathSlugs.slice(0, i));
          const isLast = i === trail.length - 1;
          return (
            <React.Fragment key={`${crumb.id}-${i}`}>
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-[#2F323A] font-medium">{crumb.name}</span>
              ) : (
                <Link href={href} className="text-[#008C99] hover:underline">
                  {crumb.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="mb-8">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-3", montserrat.className)}>
          {node.name}
        </h1>
        {node.description ? (
          <p className={cn("text-lg text-[#5D6169] max-w-3xl", openSans.className)}>
            {node.description}
          </p>
        ) : null}
      </div>

      {showSubcategories ? (
        <section className="mb-14">
          <h2 className={cn("text-2xl font-semibold mb-6 text-[#2F323A]", montserrat.className)}>
            Subcategories
          </h2>
          <ProductGrid
            categoryId={categorySlug}
            pathToNode={pathSlugs}
            items={displaySubs}
            variant="subcategories"
          />
        </section>
      ) : null}

      {showProducts ? (
        <section>
          <h2 className={cn("text-2xl font-semibold mb-6 text-[#2F323A]", montserrat.className)}>
            Products
          </h2>
          <ProductGrid
            categoryId={categorySlug}
            pathToNode={productPathSlugs}
            items={productsToShow}
            variant="products"
          />
        </section>
      ) : null}

      {!showSubcategories && !showProducts ? (
        <div className="text-center py-12 text-[#5D6169]">
          No subcategories or products in this section yet.
        </div>
      ) : null}
    </main>
  );
}
