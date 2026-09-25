"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { getCurrentUser } from "@/lib/supabase/server";

type SupabaseStorage = ReturnType<typeof supabaseAdmin>["storage"];

async function uploadFile(storage: SupabaseStorage, file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await storage.from("products").upload(path, file, {
    contentType: file.type || "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  return storage.from("products").getPublicUrl(path).data.publicUrl;
}

export type CreateResult = { ok: true; id: string; warning?: string } | { ok: false; error: string };

export async function createProduct(formData: FormData): Promise<CreateResult> {
  if (!(await getCurrentUser())) return { ok: false, error: "Tidak diizinkan. Silakan login sebagai admin." };
  const sb = supabaseAdmin();

  let thumbnail_url = (formData.get("thumbExisting") as string) || null;
  const images: string[] = JSON.parse((formData.get("existingImages") as string) || "[]");

  const thumbFile = formData.get("thumbnail");
  const imageFiles = formData.getAll("image").filter((f): f is File => f instanceof File && f.size > 0);

  let warning: string | undefined;
  try {
    if (thumbFile instanceof File && thumbFile.size > 0) {
      thumbnail_url = await uploadFile(sb.storage, thumbFile);
    }
    for (const f of imageFiles) images.push(await uploadFile(sb.storage, f));
  } catch (e) {
    warning =
      'Upload gambar gagal — pastikan bucket Storage "products" ada & public. Produk tetap tersimpan. ' +
      (e instanceof Error ? e.message : "");
  }
  if (!thumbnail_url) thumbnail_url = images[0] ?? null;

  const row = {
    title: ((formData.get("title") as string) || "").trim() || "Untitled Product",
    size_cm: Number(formData.get("size_cm")) || null,
    jenis: (formData.get("jenis") as string) || null,
    categories: JSON.parse((formData.get("categories") as string) || "[]"),
    price: Number(formData.get("price")) || 0,
    stock: Number(formData.get("stock")) || 0,
    thumbnail_url,
    images,
    detail: (formData.get("detail") as string) || null,
    care: (formData.get("care") as string) || null,
    shipping: (formData.get("shipping") as string) || null,
    status: (formData.get("status") as string) || "draft",
  };

  const { data, error } = await sb.from("products").insert(row).select("id").single();
  if (error) return { ok: false, error: error.message };

  revalidatePath("/admin/products");
  return { ok: true, id: data.id as string, warning };
}

export async function updateProduct(id: string, formData: FormData): Promise<CreateResult> {
  if (!(await getCurrentUser())) return { ok: false, error: "Tidak diizinkan. Silakan login sebagai admin." };
  const sb = supabaseAdmin();

  let thumbnail_url = (formData.get("thumbExisting") as string) || null;
  const images: string[] = JSON.parse((formData.get("existingImages") as string) || "[]");

  const thumbFile = formData.get("thumbnail");
  const imageFiles = formData.getAll("image").filter((f): f is File => f instanceof File && f.size > 0);

  let warning: string | undefined;
  try {
    if (thumbFile instanceof File && thumbFile.size > 0) {
      thumbnail_url = await uploadFile(sb.storage, thumbFile);
    }
    for (const f of imageFiles) images.push(await uploadFile(sb.storage, f));
  } catch (e) {
    warning =
      'Upload gambar gagal — pastikan bucket Storage "products" ada & public. Perubahan lain tetap tersimpan. ' +
      (e instanceof Error ? e.message : "");
  }
  if (!thumbnail_url) thumbnail_url = images[0] ?? null;

  const row = {
    title: ((formData.get("title") as string) || "").trim() || "Untitled Product",
    size_cm: Number(formData.get("size_cm")) || null,
    jenis: (formData.get("jenis") as string) || null,
    categories: JSON.parse((formData.get("categories") as string) || "[]"),
    price: Number(formData.get("price")) || 0,
    stock: Number(formData.get("stock")) || 0,
    thumbnail_url,
    images,
    detail: (formData.get("detail") as string) || null,
    care: (formData.get("care") as string) || null,
    shipping: (formData.get("shipping") as string) || null,
    status: (formData.get("status") as string) || "draft",
  };

  const { error } = await sb.from("products").update(row).eq("id", id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/admin/products");
  revalidatePath("/");
  revalidatePath("/product");
  return { ok: true, id, warning };
}
