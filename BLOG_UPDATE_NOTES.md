# AVRX Blog Update — September 2026

This package keeps the existing AVRX website structure and adds a systematic blog library without redesigning the rest of the site.

## Added blog posts
1. Website Design Services in India — `website-design-services-avrx`
2. App Design Services (Android & iOS) — `app-design-android-ios-avrx`
3. Digital Marketing Services in India — `digital-marketing-services-avrx`
4. All Types of Loans in India — `all-types-loans-avrx`
5. Health Insurance Plans in India — `health-insurance-avrx`
6. Life Insurance Plans in India — `life-insurance-avrx`
7. Motor Insurance in India — `motor-insurance-avrx`
8. ITR Filing Services in India — `itr-filing-services-avrx`
9. UDYAM Registration Online in India — `udyam-registration-avrx`
10. PF Withdrawal Services in India — `pf-withdrawal-services-avrx`
11. GST Registration & Filing Services in India — `gst-registration-filing-avrx`

## Integration
- Added `src/data/additionalBlogs.ts` and merged it into `src/data/blogData.ts`.
- Added one separate local SVG featured image for every new blog.
- Blog page now opens on `All Blogs` so every category is immediately visible.
- Popular topic chips were updated to the new blog topics.
- Blog post rendering was made topic-aware so the website infographic appears only on website-focused posts instead of every article.
- Generic article section heading now uses the actual number of sections in each article.
- Existing routes, design system, components and non-blog pages were left intact.

## Routes
All new articles are available under `/blog/<slug>` and are linked through the existing BlogCard/listing system.
