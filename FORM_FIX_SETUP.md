# AVRX Form Fix – Deployment

## 1. Database
Run `supabase_leads.sql` in Supabase SQL Editor.

## 2. Vercel secrets
Set these as Environment Variables for Production: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `ADMIN_EMAIL`, `EMAIL_FROM`, `EMAIL_FROM_NAME`.

For WhatsApp, also set `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_TEMPLATE_NAME`, `WHATSAPP_TEMPLATE_LANGUAGE`. The template must be approved in WhatsApp Manager.

## 3. Resend
Verify `avrx.in` in Resend and use a verified sender such as `contact@avrx.in`.

## 4. Result
The form now saves the lead first, then sends email/WhatsApp notifications. A provider failure no longer causes data loss, and the browser always receives JSON.
