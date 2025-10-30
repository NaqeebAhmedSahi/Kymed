import { categories } from "@/data/categories";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Helper function to convert category name to slug
const nameToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// Helper function to get category by slug
const getCategoryBySlug = (slug: string) => {
  return categories.find(category => nameToSlug(category.name) === slug);
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-frame mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <Image
          src={category.bannerImage || category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center">
          <div className="max-w-frame mx-auto px-4 text-white">
            <h1 className={cn("text-5xl font-bold mb-6", integralCF.className)}>
              {category.name}
            </h1>
            <p className="text-xl max-w-2xl">
              {category.longDescription || category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-frame mx-auto px-4 py-16">
        <h2 className={cn("text-3xl font-bold mb-8 text-center", integralCF.className)}>
          Browse {category.name} Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subcategories?.map((subcategory) => (
            <Link
              href={subcategory.url}
              key={subcategory.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={subcategory.image}
                  alt={subcategory.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={cn("text-2xl font-bold mb-2", integralCF.className)}>
                    {subcategory.name}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2 mb-4">
                    {subcategory.description}
                  </p>
                  <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    View Products
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}