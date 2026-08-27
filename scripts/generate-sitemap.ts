import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { ALL_SERVICES } from '../src/data/servicesData';
import { BLOG_POSTS_DATA } from '../src/data/blogData';
import { AI_SUITE_TOOLS } from '../src/data/aiToolsSuiteData';
import { TOOLS_LIST } from '../src/data/toolsData';

const base = 'https://www.avrx.in';
const staticPaths = [
  '/', '/digital-solutions', '/financial-solutions', '/tax-solutions', '/insurance-solutions',
  '/hosting-products', '/ai-tools', '/services', '/pricing', '/projects', '/contact', '/partner',
  '/faq', '/about', '/privacy', '/terms', '/disclaimer', '/blog', '/tools',
  '/services/starter-website', '/services/business-website', '/services/ecommerce-website'
];
const urls = new Set<string>(staticPaths);
ALL_SERVICES.forEach((s) => urls.add(`/services/${s.id}`));
BLOG_POSTS_DATA.forEach((p) => urls.add(`/blog/${p.slug}`));
AI_SUITE_TOOLS.forEach((t) => urls.add(`/tools/${t.slug}`));
TOOLS_LIST.forEach((t) => urls.add(`/tools/${t.slug}`));

const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const body = [...urls].sort().map((path) => `  <url><loc>${esc(base + path)}</loc></url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
const publicDir = resolve(process.cwd(), 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, 'sitemap.xml'), xml);
console.log(`Generated sitemap with ${urls.size} URLs`);
