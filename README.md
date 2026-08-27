# AVRX Digital & Financial Solution

## SEO + Permalink Fixes
- Restored SPA catch-all routing so direct client-side permalinks work again.
- Fixed `/services/*` routing compatibility with the original project behavior.
- Added explicit support for website package routes:
  - `/services/starter-website`
  - `/services/business-website`
  - `/services/ecommerce-website`
- Website package URLs now open the Website Design master page instead of falling back to an unrelated service.
- Service sitemap generation uses the actual `ServiceItem.id` values.
- Added legacy service alias redirects while preserving direct service URLs.
- Sitemap includes website package URLs.

## Run
```bash
npm install
npm run build
npm start
```
