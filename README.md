# AVRX Digital & Financial Solution

## SEO + Permalink deployment build

This build preserves the existing React SPA navigation while making direct service/blog/tool URLs deploy-safe.

### Important for Vercel
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` contains the SPA rewrite so URLs such as `/services/business-website` and `/services/static-onepage-website` load `index.html` instead of Vercel's NOT_FOUND page.
- The build also generates static route fallbacks inside `dist/` as an additional safeguard.

### Important
Deploy the **project root** (the folder containing `package.json` and `vercel.json`), not only the `dist` folder. If you upload only `dist`, the Vercel project settings must separately specify `dist` as the output directory and configure SPA rewrites.
