// pages/index.tsx or your home component file
import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
// import Reviews from '@/components/homepage/Reviews';
import WhyChooseUs from '@/components/homepage/ChooseUs'; 
import OurValue from '@/components/homepage/OurValue';
import CertificationMarquee from '@/components/homepage/CertificationMarquee';

import { Product } from '@/types/product.types';
import fs from 'fs';
import path from 'path';

type CatalogProduct = Product & { lineId: string; lineName: string };

/** Homepage featured lines only */
const FEATURED_LINE_IDS = new Set(["146", "147", "150"]); // Scissors, Forceps, Scalpels & Blades

function slugify(str: string) {
  return str
    ? str
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
    : "";
}

function hasUsableImage(srcUrl: string) {
  return Boolean(
    srcUrl &&
      !srcUrl.includes("placeholder") &&
      !srcUrl.includes("no-image")
  );
}

/** ToughCut scissors use black handles — exclude from homepage carousels. */
const BLACK_SCISSOR_SUB_IDS = new Set(["874", "888", "2195"]); // ToughCut, ToughCut & TC, CeramaCut

function isBlackHandleScissor(p: CatalogProduct) {
  if (p.lineId !== "146") return false;
  if ((p.pathToNode || []).some((seg) => BLACK_SCISSOR_SUB_IDS.has(String(seg)))) {
    return true;
  }
  const hay = `${p.title} ${p.subcategory || ""}`.toLowerCase();
  return (
    hay.includes("toughcut") ||
    hay.includes("tough cut") ||
    hay.includes("ceramacut") ||
    hay.includes("ceramic coated")
  );
}

/** Pick up to `limit` products, spreading across featured product lines. */
function pickDiverseProducts(
  products: CatalogProduct[],
  limit: number,
  excludeIds: Set<number> = new Set()
): Product[] {
  const byLine = new Map<string, CatalogProduct[]>();
  for (const p of products) {
    if (excludeIds.has(p.id)) continue;
    if (!hasUsableImage(p.srcUrl)) continue;
    if (isBlackHandleScissor(p)) continue;
    const list = byLine.get(p.lineId) || [];
    list.push(p);
    byLine.set(p.lineId, list);
  }

  // Prefer stable order: Scissors → Forceps → Scalpels
  const preferredOrder = ["146", "147", "150"];
  const lineIds = preferredOrder.filter((id) => byLine.has(id));
  const picked: Product[] = [];
  const usedIds = new Set<number>();
  let round = 0;

  while (picked.length < limit && lineIds.length > 0) {
    let addedThisRound = false;
    for (const lineId of lineIds) {
      if (picked.length >= limit) break;
      const pool = byLine.get(lineId) || [];
      const candidate = pool[round];
      if (!candidate || usedIds.has(candidate.id)) continue;
      usedIds.add(candidate.id);
      const { lineId: _l, lineName: _n, ...rest } = candidate;
      picked.push(rest);
      addedThisRound = true;
    }
    if (!addedThisRound) break;
    round += 1;
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
        currentPath: string[],
        lineId: string,
        lineName: string
      ) => {
        if (node.products && Array.isArray(node.products)) {
          node.products.forEach((p: any) => {
            products.push({
              id: p.id ? parseInt(p.id, 10) : Math.floor(Math.random() * 100000),
              title: p.name || p.title || "Unknown Product",
              srcUrl: p.image_local_path
                ? `/${p.image_local_path}`
                : p.image_url || "/images/placeholder.jpg",
              gallery: p.image_urls || [],
              description: p.short_description || p.description || "",
              price: 0,
              discount: { amount: 0, percentage: 0 },
              rating: 5,
              category: currentCategory,
              subcategory: p.subcategory || lineName || "",
              pathToNode: currentPath,
              lineId,
              lineName,
            });
          });
        }
        if (node.subcategories && Array.isArray(node.subcategories)) {
          node.subcategories.forEach((sc: any) => {
            extractProducts(
              sc,
              currentCategory,
              [...currentPath, sc.id || slugify(sc.name)],
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
        surgical.subcategories
          .filter((line: any) => FEATURED_LINE_IDS.has(String(line.id)))
          .forEach((line: any) => {
            extractProducts(
              line,
              surgical.id || "9",
              [line.id || slugify(line.name)],
              line.id || slugify(line.name),
              line.name || "Surgical"
            );
          });
      } else if (data.categories && Array.isArray(data.categories)) {
        data.categories.forEach((cat: any) => {
          extractProducts(cat, cat.id || "9", [], cat.id || "9", cat.name || "Products");
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
        return surgicalCategory.subcategories.slice(0, 5).map((sc: any) => ({
          title: sc.name,
          url: `/shop/9/${sc.id}`,
          image: sc.image_local_path
            ? `/${sc.image_local_path}`
            : sc.image_url || "/images/no-image.png",
        }));
      }
    } catch (e) {}
    return [];
  };
  const browseCategories = getSubcategories();

  // Same 3 categories for both sections, different products; no black-handle scissors
  const newArrivals = pickDiverseProducts(allProducts, 6);
  const topSelling = pickDiverseProducts(
    allProducts,
    6,
    new Set(newArrivals.map((p) => p.id))
  );

  return (
    <>
      <Header />
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
        <div>
          <CertificationMarquee />
        </div>
      </main>
    </>
  );
}