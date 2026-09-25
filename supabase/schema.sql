-- ============================================================================
--  Sekar Wangi — database schema
--  Jalankan sekali di Supabase → SQL Editor (project kamu di .env.local).
--  Aman dijalankan ulang (idempotent).
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
--  products
-- ---------------------------------------------------------------------------
create table if not exists public.products (
  id            uuid primary key default gen_random_uuid(),
  title         text not null default 'Untitled Product',
  size_cm       integer,
  jenis         text,
  categories    text[]      not null default '{}',
  price         integer     not null default 0,
  stock         integer     not null default 0,
  thumbnail_url text,
  images        text[]      not null default '{}',
  detail        text,
  care          text,
  shipping      text,
  status        text        not null default 'draft'
                  check (status in ('draft', 'published', 'archived')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists products_status_idx     on public.products (status);
create index if not exists products_created_at_idx  on public.products (created_at desc);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
--  Row Level Security
--  Anon/browser hanya boleh membaca produk yang sudah "published".
--  service_role (dipakai admin server actions) otomatis bypass RLS.
-- ---------------------------------------------------------------------------
alter table public.products enable row level security;

drop policy if exists "public reads published products" on public.products;
create policy "public reads published products"
  on public.products for select
  to anon, authenticated
  using (status = 'published');

-- ---------------------------------------------------------------------------
--  Storage bucket untuk gambar produk (public read)
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do update set public = true;
