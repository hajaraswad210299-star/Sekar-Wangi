import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service_role/secret key.
 * Bypasses RLS — never import this into a client component.
 */
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase env belum lengkap. Set NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY di .env.local",
    );
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
