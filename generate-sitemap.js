import { createClient } from '@sanity/client';
import { writeFileSync } from 'fs';

const client = createClient({
  projectId: 'g5bfkjdx',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-05-14',
});

const BASE_URL = 'https://tareeztech.com';

const staticPages = [
  { path: '/',                                            priority: '1.0', changefreq: 'weekly' },
  { path: '/services/digital-marketing-lahore',          priority: '0.9', changefreq: 'monthly' },
  { path: '/services/seo-services-lahore',               priority: '0.9', changefreq: 'monthly' },
  { path: '/services/social-media-marketing-pakistan',   priority: '0.9', changefreq: 'monthly' },
  { path: '/services/web-development-lahore',            priority: '0.9', changefreq: 'monthly' },
  { path: '/services/web-design-pakistan',               priority: '0.9', changefreq: 'monthly' },
  { path: '/services/web-app-development',               priority: '0.9', changefreq: 'monthly' },
  { path: '/services/wordpress-development',             priority: '0.9', changefreq: 'monthly' },
  { path: '/services/graphic-design-video-editing',      priority: '0.9', changefreq: 'monthly' },
  { path: '/services/ecommerce-digital-marketing',       priority: '0.9', changefreq: 'monthly' },
  { path: '/blog',                                        priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy',                             priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-conditions',                       priority: '0.3', changefreq: 'yearly' },
];

async function generateSitemap() {
  const posts = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current, publishedAt } | order(publishedAt desc)`
  );

  const staticUrls = staticPages.map(({ path, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('');

  const blogUrls = posts.map(({ slug, publishedAt }) => `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    ${publishedAt ? `<lastmod>${publishedAt.split('T')[0]}</lastmod>` : ''}
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

  writeFileSync('public/sitemap.xml', xml);
  console.log(`Sitemap generated: ${staticPages.length} static pages + ${posts.length} blog posts`);
}

generateSitemap().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
