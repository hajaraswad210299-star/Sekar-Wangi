import { supabaseAdmin } from "@/lib/supabase/admin";
import { supabase } from "@/lib/supabase/client";

export type ProductRow = {
  id: string;
  title: string;
  size_cm: number | null;
  jenis: string | null;
  categories: string[];
  price: number;
  stock: number;
  thumbnail_url: string | null;
  images: string[];
  detail: string | null;
  care: string | null;
  shipping: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

const PLACEHOLDER = "/figma/imgImage1.png";

export function rupiah(n: number): string {
  return "Rp " + (n || 0).toLocaleString("id-ID");
}

export function productImage(p: Pick<ProductRow, "thumbnail_url" | "images">): string {
  return p.thumbnail_url || p.images?.[0] || PLACEHOLDER;
}

/** All products for the admin table (service_role — bypasses RLS). [] on error. */
export async function listAdminProducts(): Promise<ProductRow[]> {
  try {
    const sb = supabaseAdmin();
    const { data, error } = await sb
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as ProductRow[];
  } catch {
    return [];
  }
}

/** Published products for the public site (anon — RLS filtered). [] on error. */
export async function listPublishedProducts(limit = 100): Promise<ProductRow[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    return (data ?? []) as ProductRow[];
  } catch {
    return [];
  }
}

/** Single product by id (service_role). null on error / not found. */
export async function getProduct(id: string): Promise<ProductRow | null> {
  try {
    const sb = supabaseAdmin();
    const { data, error } = await sb.from("products").select("*").eq("id", id).single();
    if (error) throw error;
    return data as ProductRow;
  } catch {
    return null;
  }
}
