import { categories } from "@/data/categories";

function urlEntry(loc: string, priority = 0.6) {
  const lastmod = new Date().toISOString();
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const base = "https://kymed.co";
  const urls = [
    urlEntry(`${base}/`, 1.0),
    urlEntry(`${base}/shop`, 0.8),
  ];

  // Add categories and subcategories
  categories.forEach((cat) => {
    try {
      const catUrl = cat.url?.startsWith("/") ? `${base}${cat.url}` : `${base}/${cat.url}`;
      urls.push(urlEntry(catUrl, 0.8));
      (cat.subcategories || []).forEach((sc: any) => {
        const scUrl = sc.url?.startsWith("/") ? `${base}${sc.url}` : `${base}/${sc.url}`;
        urls.push(urlEntry(scUrl, 0.6));
      });
    } catch (e) {
      // skip malformed entries
    }
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400"
    }
  });
}
