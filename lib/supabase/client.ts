import { createClient } from "@supabase/supabase-js";

/** Browser/anon Supabase client (safe for the client — respects RLS). */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
