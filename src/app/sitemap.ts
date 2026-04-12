import { MetadataRoute } from 'next';
import { loadProductsData, slugify } from '@/lib/productsLoader';
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

    const traverse = (node: any, currentPath: string[]) => {
      // Add this category/subcategory
      const url = `${baseUrl}/shop/9/${currentPath.join('/')}`;
      dynamicRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: Math.max(0.4, 0.8 - currentPath.length * 0.1),
      });

      // Recurse children
      if (node.subcategories && Array.isArray(node.subcategories)) {
        node.subcategories.forEach((sc: any) => {
          traverse(sc, [...currentPath, sc.id || slugify(sc.name)]);
        });
      }
    };

    // Only surgical instruments (id: 9) are currently exposed in the shop sub-routes
    const surgical = productsData.categories.find(c => c.id === "9");
    if (surgical && surgical.subcategories) {
      surgical.subcategories.forEach((sc: any) => {
        traverse(sc, [sc.id || slugify(sc.name)]);
      });
    }

    // Add static categories from @/data/categories
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
