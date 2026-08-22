create extension if not exists pgcrypto;

create table if not exists public.leads (
  id text primary key,
  created_at timestamptz not null default now(),
  name text, email text, phone text, service text, message text,
  location text, city text, state text, form_name text, page_name text,
  source_page text, current_url text, device_type text, status text default 'New',
  email_status text, email_error text, ip_address text, metadata jsonb default '{}'::jsonb
);
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_phone_idx on public.leads(phone);
