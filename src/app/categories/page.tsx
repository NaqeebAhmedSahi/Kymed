import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="max-w-frame mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className={cn("text-4xl md:text-5xl font-bold mb-6", integralCF.className)}>
          Product Categories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive range of medical equipment and supplies across various specialties
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={category.id}
            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
            </div>
            <div className="p-6 bg-white">
              <h3 className={cn("text-xl font-semibold mb-2", integralCF.className)}>
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Browse Products
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}