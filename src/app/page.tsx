// pages/index.tsx or your home component file
import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import Reviews from '@/components/homepage/Reviews';
import WhyChooseUs from '@/components/homepage/ChooseUs'; 
import OurValue from '@/components/homepage/OurValue'; // Import OurValue component

import { Product } from '@/types/product.types';
import { reviewsData } from '@/utils/data';

// Component definition
interface HomeProps {
  newArrivals: Product[]; // Type for newArrivals
  topSelling: Product[];  // Type for topSelling
}

export default async function Home() {
  let newArrivals: Product[] = [];
  let topSelling: Product[] = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      method: 'GET',
      headers: {
        // 'Authorization': `Bearer ${yourAuthToken}`, // Add the token here if needed
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    // Filter top-rated products with a rating of 5
    topSelling = data.products.filter((product: Product) => product.rating === 5);
    newArrivals = data.products;

  } catch (error) {
    console.error('Error fetching data:', error);
    // Optional: Provide fallback data in case of an error
    newArrivals = [];
    topSelling = [];
  }

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
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
          <OurValue /> {/* Render the OurValue component */}
        </div>

        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
