import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdminCreateProduct, { type InitialProduct } from "@/components/admin/AdminCreateProduct";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Edit Produk — Sekar Wangi Admin",
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = await getProduct(id);
  if (!p) notFound();

  const initial: InitialProduct = {
    title: p.title,
    size: p.size_cm ? String(p.size_cm) : "",
    jenis: p.jenis ?? "Buket Bunga",
    tags: p.categories ?? [],
    thumbUrl: p.thumbnail_url,
    imageUrls: p.images ?? [],
    stok: p.stock ? String(p.stock) : "",
    harga: p.price ? String(p.price) : "",
    detail: p.detail ?? "",
    care: p.care ?? "",
    shipping: p.shipping ?? "",
  };

  return <AdminCreateProduct initial={initial} productId={id} />;
}
