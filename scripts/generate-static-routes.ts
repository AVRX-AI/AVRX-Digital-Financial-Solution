/**
 * Generate directory index.html fallbacks for every public client-side route.
 * This makes React SPA permalinks work on static hosts that do not rewrite
 * /some/path -> /index.html automatically.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { ALL_SERVICES } from '../src/data/servicesData';
import { BLOG_POSTS_DATA } from '../src/data/blogData';
import { AI_SUITE_TOOLS } from '../src/data/aiToolsSuiteData';
import { TOOLS_LIST } from '../src/data/toolsData';

const dist = resolve(process.cwd(), 'dist');
const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) throw new Error(`Missing ${indexPath}; run vite build first.`);

const staticRoutes = [
  '/', '/digital-solutions', '/financial-solutions', '/tax-solutions', '/insurance-solutions',
  '/hosting-products', '/ai-tools', '/services', '/pricing', '/projects', '/portfolio', '/showcase',
  '/contact', '/partner', '/faq', '/blog', '/about', '/privacy', '/terms', '/disclaimer', '/tools',
  '/website-design', '/website-development', '/e-commerce-solutions', '/ecommerce-solutions', '/ecommerce', '/e-commerce',
  '/services/starter-website', '/services/business-website', '/services/ecommerce-website'
];

const aliases = [
  'seo', 'seo-services', 'search-engine-optimization', 'google-ranking', 'local-seo', 'technical-seo',
  'website-development', 'web-design', 'web-development', 'ecommerce', 'ecommerce-solutions', 'e-commerce',
  'app-development', 'mobile-app-development', 'mobile-apps', 'ios-app-development', 'flutter-app-development',
  'react-native-development', 'vehicle-insurance', 'gst', 'gst-filing', 'itr', 'income-tax', 'udyam', 'msme',
  'msme-registration', 'pmegp-loan', 'online-loan', 'quick-loan', 'lap-loan', 'loan-against-property',
  'gold-loans', 'shop-insurance'
].map((x) => `/services/${x}`);

const routes = new Set<string>(staticRoutes);
ALL_SERVICES.forEach((s) => routes.add(`/services/${s.id}`));
BLOG_POSTS_DATA.forEach((p) => routes.add(`/blog/${p.slug}`));
AI_SUITE_TOOLS.forEach((t) => routes.add(`/tools/${t.slug}`));
TOOLS_LIST.forEach((t) => routes.add(`/tools/${t.slug}`));
aliases.forEach((x) => routes.add(x));

const indexHtml = readFileSync(indexPath);
let created = 0;
for (const route of routes) {
  if (route === '/') continue;
  const clean = route.replace(/^\/+|\/+$/g, '');
  if (!clean) continue;
  const targetDir = join(dist, ...clean.split('/'));
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, 'index.html'), indexHtml);
  created++;
}

// A 404.html fallback is useful on static/CDN hosts that serve a custom 404 page.
writeFileSync(join(dist, '404.html'), indexHtml);
console.log(`Generated ${created} static SPA route fallbacks + dist/404.html`);
