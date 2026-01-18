import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const metadataPath = path.join(rootDir, 'metadata.json');

const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
const siteUrl = (metadata.siteUrl || 'https://example.com').replace(/\/+$/, '');
const pages = Array.isArray(metadata.pages) && metadata.pages.length > 0 ? metadata.pages : ['/'];
const lastmod = new Date().toISOString().split('T')[0];

const urls = pages
  .map((page) => {
    const normalized = page.startsWith('/') ? page : `/${page}`;
    return `  <url>
    <loc>${siteUrl}${normalized === '/' ? '/' : normalized}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${normalized === '/' ? '1.0' : '0.7'}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemap, 'utf-8');
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robots, 'utf-8');

console.log('Generated sitemap.xml and robots.txt');
