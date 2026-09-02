<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bad4c2ff-4a3a-400f-984b-ebd7d1a59f53

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Latest update — 02 September 2026
- Added the AVRX blog post: “क्यों चुनें एक Verified और Futuristic Web Design Company?”
- Added its featured image under `src/assets/images/blog/`.
- Registered the post inside the existing `src/data/blogData.ts` blog system.
- Because `BlogSection.tsx` already renders the first 3 entries from `BLOG_POSTS_DATA`, the new post appears in the existing homepage Latest/Insights section.
- The existing Google AdSense integration from the previous update is retained.
- Blog URL: `/blog/why-choose-verified-futuristic-web-design-company`
