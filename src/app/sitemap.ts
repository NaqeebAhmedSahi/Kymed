import { MetadataRoute } from 'next';
import { loadProductsData } from '@/lib/productsLoader';
import { catalogSegment, shopCategoryHref } from '@/lib/shopPaths';
import { categories as staticCategories } from '@/data/categories';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kymed.co';
  const routes = [
    '',
    '/shop',
    '/categories',
    '/about',
    '/contact',
    '/certifications',
    '/MaterialsTechnicalStandards',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    const productsData = await loadProductsData();
    const dynamicRoutes: MetadataRoute.Sitemap = [];

    const traverse = (node: any, categorySlug: string, currentPath: string[]) => {
      const url = `${baseUrl}${shopCategoryHref(categorySlug, currentPath)}`;
      dynamicRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: Math.max(0.4, 0.8 - currentPath.length * 0.1),
      });

      if (node.subcategories && Array.isArray(node.subcategories)) {
        node.subcategories.forEach((sc: any) => {
          traverse(sc, categorySlug, [...currentPath, catalogSegment(sc)]);
        });
      }
    };

    const surgical = productsData.categories.find(c => c.id === "9");
    if (surgical && surgical.subcategories) {
      const categorySlug = catalogSegment(surgical);
      surgical.subcategories.forEach((sc: any) => {
        traverse(sc, categorySlug, [catalogSegment(sc)]);
      });
    }

    staticCategories.forEach(cat => {
      dynamicRoutes.push({
        url: `${baseUrl}${cat.url}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });

    return [...routes, ...dynamicRoutes];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return routes;
  }
}
