"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { getCurrentUser } from "@/lib/supabase/server";

export type ActionResult = { ok: true } | { ok: false; error: string };

const UNAUTH: ActionResult = { ok: false, error: "Tidak diizinkan. Silakan login sebagai admin." };

function revalidateProductPages() {
  revalidatePath("/admin/products");
  revalidatePath("/");
  revalidatePath("/product");
}

export async function setProductStatus(
  id: string,
  status: "draft" | "published" | "archived",
): Promise<ActionResult> {
  if (!(await getCurrentUser())) return UNAUTH;
  try {
    const sb = supabaseAdmin();
    const { error } = await sb.from("products").update({ status }).eq("id", id);
    if (error) throw error;
    revalidateProductPages();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui status" };
  }
}

export async function deleteProduct(id: string): Promise<ActionResult> {
  if (!(await getCurrentUser())) return UNAUTH;
  try {
    const sb = supabaseAdmin();
    const { error } = await sb.from("products").delete().eq("id", id);
    if (error) throw error;
    revalidateProductPages();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus produk" };
  }
}
