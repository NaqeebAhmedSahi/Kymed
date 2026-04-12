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
import { reviewsData } from '@/utils/data';
import fs from 'fs';
import path from 'path';

// Component definition
interface HomeProps {
  newArrivals: Product[]; // Type for newArrivals
  topSelling: Product[];  // Type for topSelling
}

export default async function Home() {
  const getProductsFromJson = (): Product[] => {
    try {
      const filePath = path.join(process.cwd(), 'public', 'products.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);

      const products: Product[] = [];
      
      const extractProducts = (node: any, currentCategory: string = "9", currentPath: string[] = []) => {
        if (node.products && Array.isArray(node.products)) {
          node.products.forEach((p: any) => {
            products.push({
              id: p.id ? parseInt(p.id, 10) : Math.floor(Math.random() * 100000),
              title: p.name || p.title || 'Unknown Product',
              srcUrl: p.image_local_path ? `/${p.image_local_path}` : (p.image_url || '/images/placeholder.jpg'),
              gallery: p.image_urls || [],
              description: p.short_description || p.description || '',
              price: 0,
              discount: { amount: 0, percentage: 0 },
              rating: 5,
              category: currentCategory,
              subcategory: p.subcategory || '',
              pathToNode: currentPath,
            });
          });
        }
        if (node.subcategories && Array.isArray(node.subcategories)) {
          node.subcategories.forEach((sc: any) => {
            extractProducts(sc, currentCategory, [...currentPath, sc.id || slugify(sc.name)]);
          });
        }
      }

      const slugify = (str: string) => {
        return str ? str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") : "";
      };

      if (data.categories && Array.isArray(data.categories)) {
        // Specifically look for surgical instruments to prioritize them as requested
        data.categories.forEach((cat: any) => {
          extractProducts(cat, cat.id || "9", []);
        });
      }

      return products;
    } catch (e) {
      console.error("Failed to load products from products.json", e);
      return [];
    }
  }

  const allProducts: Product[] = getProductsFromJson();

  // Extract surgical instrument subcategories for "Browse by Product Category" section
  const getSubcategories = (): any[] => {
    try {
      const filePath = path.join(process.cwd(), 'public', 'products.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      const surgicalCategory = data.categories?.find((c: any) => c.id === "9" || c.name?.toLowerCase() === "surgical instruments");
      if (surgicalCategory && Array.isArray(surgicalCategory.subcategories)) {
        return surgicalCategory.subcategories.slice(0, 5).map((sc: any) => ({
          title: sc.name,
          url: `/shop/9/${sc.id}`,
          image: sc.image_local_path ? `/${sc.image_local_path}` : (sc.image_url || '/images/no-image.png')
        }));
      }
    } catch(e) {}
    return [];
  }
  const browseCategories = getSubcategories();

  // Show actual products for New Arrivals and Top Selling
  const newArrivals = allProducts.slice(0, 4);
  const topSelling = allProducts.slice(4, 8);

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px] ">
        <ProductListSec title="NEW ARRIVALS" data={newArrivals} viewAllLink="/shop/all" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="TOP SELLING" data={topSelling} viewAllLink="/shop/all" />
        </div>
        {/* Add the Why Choose Us section here */}
        <div className="mb-[50px] sm:mb-20">
          <WhyChooseUs />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle subcategories={browseCategories} />
        </div>
         {/* Add the Our Value section here */}
         <div className="mb-[50px] sm:mb-20">
          <OurValue />
        </div>
        {/* Certification Marquee Section */}
        <div>
          <CertificationMarquee />
        </div>
        {/* <Reviews data={reviewsData} /> */}
      </main>
    </>
  );
}