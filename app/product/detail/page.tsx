import type { Metadata } from "next";
import ProductDetailPage from "@/components/ProductDetailPage";
import type { DetailData } from "@/components/site/ProductDetail";
import {
  getProduct,
  listPublishedProducts,
  productImage,
  rupiah,
  type ProductRow,
} from "@/lib/products";
import type { RelatedItem } from "@/components/site/RelatedProducts";

export const metadata: Metadata = {
  title: "Detail Produk — Sekar Wangi",
  description: "Detail rangkaian bunga segar Sekar Wangi.",
};

function toDetail(p: ProductRow): DetailData {
  const gallery = p.images && p.images.length ? p.images : [productImage(p)];

  return {
    name: p.title,
    category: p.categories[0] ?? p.jenis ?? "Produk",
    size: p.size_cm ? `Ukuran: ${p.size_cm} cm` : undefined,
    price: rupiah(p.price),
    stock: p.stock || 1,
    gallery,
    tabs: [
      { label: "Detail Buket", body: p.detail ? [p.detail] : ["Belum ada deskripsi untuk produk ini."] },
      { label: "Perawatan", body: p.care ? [p.care] : ["Belum ada informasi perawatan."] },
      {
        label: "Pengiriman & Pengembalian",
        body: p.shipping ? [p.shipping] : ["Belum ada informasi pengiriman & pengembalian."],
      },
    ],
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const row = id ? await getProduct(id) : null;
  const product = row ? toDetail(row) : undefined;

  const published = await listPublishedProducts(12);
  const related: RelatedItem[] = published
    .filter((p) => p.id !== id)
    .slice(0, 8)
    .map((p) => ({
      img: productImage(p),
      name: p.title,
      price: rupiah(p.price),
      href: `/product/detail?id=${p.id}`,
    }));

  return (
    <ProductDetailPage
      product={product}
      related={related.length ? related : undefined}
    />
  );
}
