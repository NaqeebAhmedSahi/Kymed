// pages/index.tsx or your home component file
import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import HowWeWork from '@/components/homepage/HowWeWork';
// import Reviews from '@/components/homepage/Reviews';
import WhyChooseUs from '@/components/homepage/ChooseUs'; 
import OurValue from '@/components/homepage/OurValue';
import CertificationMarquee from '@/components/homepage/CertificationMarquee';

import { Product } from '@/types/product.types';
import fs from 'fs';
import path from 'path';

type CatalogProduct = Product & {
  lineId: string;
  lineName: string;
  groupKey: string;
  pathIds: string[];
};

/**
 * Curated homepage lists from client product links.
 * Top Selling: Standard Sharp/Sharp, Mayo, Lister, Standard Straight
 * New Arrivals: Halsted-Mosquito, Kelly, Backhaus Towel Clamp, Metzenbaum
 */
const TOP_SELLING_IDS = [2069, 2102, 2129, 2293];
const NEW_ARRIVAL_IDS = [2444, 2451, 2461, 2115];

function slugify(str: string) {
  return str
    ? str
        .toLowerCase()
        .trim()
        .replace(/[&/]+/g, " ")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    : "";
}

function pickProductsByIds(
  products: CatalogProduct[],
  ids: number[]
): Product[] {
  const byId = new Map<number, CatalogProduct>();
  for (const p of products) {
    if (!byId.has(p.id)) byId.set(p.id, p);
  }

  const picked: Product[] = [];
  for (const id of ids) {
    const candidate = byId.get(id);
    if (!candidate) continue;
    const { lineId: _l, lineName: _n, groupKey: _g, pathIds: _p, ...rest } =
      candidate;
    picked.push(rest);
  }
  return picked;
}

export default async function Home() {
  const getProductsFromJson = (): CatalogProduct[] => {
    try {
      const filePath = path.join(process.cwd(), "public", "products.json");
      const fileContents = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileContents);

      const products: CatalogProduct[] = [];

      const extractProducts = (
        node: any,
        currentCategory: string,
        currentPathSlugs: string[],
        currentPathIds: string[],
        lineId: string,
        lineName: string
      ) => {
        if (node.products && Array.isArray(node.products)) {
          node.products.forEach((p: any) => {
            // Match product detail / listing: skip first image, use second when available
            const paths: string[] = Array.isArray(p.image_local_paths)
              ? p.image_local_paths.filter(Boolean)
              : [];
            const displayPath =
              paths.length > 1
                ? paths[1]
                : p.image_local_path || paths[0] || "";

            products.push({
              id: p.id ? parseInt(p.id, 10) : Math.floor(Math.random() * 100000),
              title: p.name || p.title || "Unknown Product",
              srcUrl: displayPath
                ? `/${displayPath}`
                : p.image_url || "/images/placeholder.jpg",
              gallery: paths.map((img) => `/${img}`),
              description: p.short_description || p.description || "",
              price: 0,
              discount: { amount: 0, percentage: 0 },
              rating: 5,
              category: currentCategory,
              subcategory: p.subcategory || lineName || "",
              pathToNode: currentPathSlugs,
              pathIds: currentPathIds,
              lineId,
              lineName,
              groupKey: lineId,
            });
          });
        }
        if (node.subcategories && Array.isArray(node.subcategories)) {
          node.subcategories.forEach((sc: any) => {
            const segSlug = slugify(sc.name) || String(sc.id);
            const segId = String(sc.id || segSlug);
            extractProducts(
              sc,
              currentCategory,
              [...currentPathSlugs, segSlug],
              [...currentPathIds, segId],
              lineId,
              lineName
            );
          });
        }
      };

      const surgical = data.categories?.find(
        (c: any) =>
          c.id === "9" ||
          c.name?.toLowerCase() === "surgical instruments"
      );

      if (surgical?.subcategories?.length) {
        const categorySlug = slugify(surgical.name) || "surgical-instruments";
        surgical.subcategories.forEach((line: any) => {
          const lineSlug = slugify(line.name) || String(line.id);
          extractProducts(
            line,
            categorySlug,
            [lineSlug],
            [String(line.id)],
            line.id || lineSlug,
            line.name || "Surgical"
          );
        });
      } else if (data.categories && Array.isArray(data.categories)) {
        data.categories.forEach((cat: any) => {
          const catSlug = slugify(cat.name) || cat.id || "9";
          extractProducts(
            cat,
            catSlug,
            [],
            [],
            cat.id || catSlug,
            cat.name || "Products"
          );
        });
      }

      return products;
    } catch (e) {
      console.error("Failed to load products from products.json", e);
      return [];
    }
  };

  const allProducts = getProductsFromJson();

  // Extract surgical instrument subcategories for "Browse by Product Category" section
  const getSubcategories = (): any[] => {
    try {
      const filePath = path.join(process.cwd(), "public", "products.json");
      const fileContents = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileContents);
      const surgicalCategory = data.categories?.find(
        (c: any) =>
          c.id === "9" || c.name?.toLowerCase() === "surgical instruments"
      );
      if (surgicalCategory && Array.isArray(surgicalCategory.subcategories)) {
        const categorySlug =
          slugify(surgicalCategory.name) || "surgical-instruments";
        return surgicalCategory.subcategories.slice(0, 5).map((sc: any) => ({
          title: sc.name,
          url: `/shop/${categorySlug}/${slugify(sc.name) || sc.id}`,
          image: sc.image_local_path
            ? `/${sc.image_local_path}`
            : sc.image_url || "/images/no-image.png",
        }));
      }
    } catch (e) {}
    return [];
  };
  const browseCategories = getSubcategories();

  const topSelling = pickProductsByIds(allProducts, TOP_SELLING_IDS).map(
    (p) => ({ ...p, topSelling: true })
  );
  const newArrivals = pickProductsByIds(allProducts, NEW_ARRIVAL_IDS).map(
    (p) => ({ ...p, newArrival: true })
  );

  return (
    <>
      <Header />
      <HowWeWork />
      <Brands />
      <main className="my-[50px] sm:my-[72px] ">
        <ProductListSec title="NEW ARRIVALS" data={newArrivals} viewAllLink="/shop" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="TOP SELLING" data={topSelling} viewAllLink="/shop" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <WhyChooseUs />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle subcategories={browseCategories} />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <OurValue />
        </div>
        <CertificationMarquee />
        {/* <Reviews /> */}
      </main>
    </>
  );
}
