import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { loadProductsData, type ProductCategory } from "@/lib/productsDataLoader";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const generateFaqsFromProducts = (categories: ProductCategory[]): FaqItem[] => {
  return categories.map((category) => ({
    question: category.name,
    answer: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">{category.description}</p>
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 mt-4">Subcategories:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.subcategories.map((subcat: any, idx: number) => {
                const itemCount = subcat.subcategories?.length || subcat.products?.length || 0;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md hover:border-[#008C99]/30 transition-all duration-200"
                  >
                    <Link
                      href={subcat.url || "#"}
                      className="font-semibold text-[#008C99] hover:text-[#006670] block mb-2 text-sm md:text-base"
                    >
                      {subcat.name}
                    </Link>
                    <p className="text-sm text-gray-600 line-clamp-2">{subcat.description}</p>
                    {itemCount > 0 && (
                      <span className="inline-block mt-3 text-sm font-bold text-white bg-gradient-to-r from-[#008C99] to-[#006670] px-3 py-1 rounded-full">
                        {itemCount} Items →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    ),
  }));
};

const FaqContent = () => {
  const [faqsData, setFaqsData] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await loadProductsData();
      const faqs = generateFaqsFromProducts(categories);
      setFaqsData(faqs);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
          Frequently asked questions
        </h3>
        <p className="text-gray-600">Loading product categories...</p>
      </section>
    );
  }

  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Product Categories
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
