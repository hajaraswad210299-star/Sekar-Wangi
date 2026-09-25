import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { isAllowedAdmin } from "@/lib/adminAccess";

/**
 * Supabase client for Server Components / Route Handlers that reads the
 * auth session from cookies (via @supabase/ssr).
 */
export async function supabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (list) => {
          try {
            list.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // called from a Server Component render — safe to ignore,
            // the middleware refreshes the session cookies.
          }
        },
      },
    },
  );
}

/** Returns the signed-in user, or null. */
export async function getCurrentUser() {
  try {
    const sb = await supabaseServer();
    const {
      data: { user },
    } = await sb.auth.getUser();
    return user;
  } catch {
    return null;
  }
}

/** Returns the signed-in user only if allowed into the admin, else null.
 *  Use to guard admin server actions. */
export async function getAdminUser() {
  const user = await getCurrentUser();
  return user && isAllowedAdmin(user.email) ? user : null;
}
