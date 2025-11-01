// pages/index.tsx or your home component file
import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import Reviews from '@/components/homepage/Reviews';
import WhyChooseUs from '@/components/homepage/ChooseUs'; 
import OurValue from '@/components/homepage/OurValue';
import CertificationMarquee from '@/components/homepage/CertificationMarquee';

import { Product } from '@/types/product.types';
import { reviewsData } from '@/utils/data';
import { categories } from '@/data/categories';

// Component definition
interface HomeProps {
  newArrivals: Product[]; // Type for newArrivals
  topSelling: Product[];  // Type for topSelling
}

export default async function Home() {
  // Backend fetch commented out. Using local categories.ts data for newArrivals.
  // Helper to flatten all products from categories
  function getAllProductsFromCategories(): Product[] {
    const products: Product[] = [];
    categories.forEach(category => {
      category.subcategories?.forEach(subcat => {
        subcat.products?.forEach(product => {
          products.push({
            id: typeof product.id === "string" ? parseInt(product.id.replace(/\D/g, "")) : product.id,
            title: product.name,
            srcUrl: product.image || "",
            gallery: product.galleryImages || [],
            description: product.description || "",
            price: product.price || 0,
            discount: { amount: 0, percentage: 0 },
            rating: product.rating || 0,
            category: category.name,
            subcategory: subcat.name,
          });
        });
      });
    });
    return products;
  }

  const allProducts: Product[] = getAllProductsFromCategories();
  // Fix: filter by newArrival and topSelling flags from categories.ts
  const newArrivals: Product[] = allProducts.filter(product => {
    let found = false;
    categories.forEach(category => {
      category.subcategories?.forEach(subcat => {
        subcat.products?.forEach(prod => {
          const prodIdNum = typeof prod.id === "string" ? parseInt(prod.id.replace(/\D/g, "")) : prod.id;
          if (prodIdNum === product.id && prod.newArrival === true) {
            found = true;
          }
        });
      });
    });
    return found;
  });
  const topSelling: Product[] = allProducts.filter(product => {
    let found = false;
    categories.forEach(category => {
      category.subcategories?.forEach(subcat => {
        subcat.products?.forEach(prod => {
          const prodIdNum = typeof prod.id === "string" ? parseInt(prod.id.replace(/\D/g, "")) : prod.id;
          if (prodIdNum === product.id && prod.topSelling === true) {
            found = true;
          }
        });
      });
    });
    return found;
  });

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
          <DressStyle />
        </div>
         {/* Add the Our Value section here */}
         <div className="mb-[50px] sm:mb-20">
          <OurValue />
        </div>
        {/* Certification Marquee Section */}
        <div className="mb-[50px] sm:mb-20">
          <CertificationMarquee />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}