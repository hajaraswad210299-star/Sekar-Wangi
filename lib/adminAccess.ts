/**
 * Admin access control.
 *
 * ADMIN_EMAILS (server env, comma-separated) restricts who may enter the admin.
 * If it's empty/unset, ANY authenticated user is allowed (open mode) — set it
 * to your own email(s) once Google login works to lock the admin down.
 */
export function adminEmails(): string[] | null {
  const raw = process.env.ADMIN_EMAILS?.trim();
  if (!raw) return null; // null → allow any authenticated user
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedAdmin(email?: string | null): boolean {
  const list = adminEmails();
  if (!list || list.length === 0) return true;
  return !!email && list.includes(email.toLowerCase());
}
