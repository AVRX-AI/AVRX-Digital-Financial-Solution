create extension if not exists pgcrypto;
create table if not exists public.leads (id text primary key, created_at timestamptz not null default now(), name text, email text, phone text, location text, service text, subject text, message text, page_name text, source_page text, current_url text, device_type text, status text default ''New'', metadata jsonb default ''{}''::jsonb);
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_phone_idx on public.leads(phone);
