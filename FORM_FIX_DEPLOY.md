# AVRX FORM FIX — DEPLOYMENT

1. Replace the GitHub project files with this package.
2. Vercel must deploy the repository as a Vite app; the `api/submit-form.ts` file is the serverless function.
3. Add Vercel Environment Variables: RESEND_API_KEY, ADMIN_EMAIL, EMAIL_FROM, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
4. Run supabase_leads.sql in Supabase.
5. Optional WhatsApp: WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID.
6. Redeploy.

The frontend no longer calls response.json() directly. It reads the response as text first, so an HTML/empty server response cannot crash the form UI.
