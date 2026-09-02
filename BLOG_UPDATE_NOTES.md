# AVRX Blog Integration — September 2026

This version is based on the latest AVRX Digital & Financial Solution website ZIP supplied from the AI Studio/GitHub workflow.

## Integrated 11 additional blogs
1. website-design-services-avrx
2. app-design-android-ios-avrx
3. digital-marketing-services-avrx
4. all-types-loans-avrx
5. health-insurance-avrx
6. life-insurance-avrx
7. motor-insurance-avrx
8. itr-filing-services-avrx
9. udyam-registration-avrx
10. pf-withdrawal-services-avrx
11. gst-registration-filing-avrx

## Files added
- `src/data/additionalBlogs.ts`
- `src/assets/images/blog/*.svg` (11 local AVRX topic images)

## Files updated
- `src/data/blogData.ts` — imports and appends `ADDITIONAL_BLOG_POSTS`
- `src/pages/BlogPage.tsx` — blog starts on All and includes topic search chips for the added blogs
- `src/pages/BlogPostPage.tsx` — generic section heading and website-only infographic display

## Important
The latest website design/code was kept as the base. The blog integration was merged into that version rather than replacing the latest AI Studio/GitHub website.

Direct blog routes continue to use the existing SPA route handling in `src/App.tsx`.
