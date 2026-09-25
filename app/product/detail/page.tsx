import type { Metadata } from "next";
import ProductDetailPage from "@/components/ProductDetailPage";
import type { DetailData } from "@/components/site/ProductDetail";
import { detailProduct } from "@/components/figmaAssets";
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
  const gallery =
    p.images && p.images.length
      ? p.images
      : p.thumbnail_url
        ? [p.thumbnail_url]
        : detailProduct.gallery;

  return {
    name: p.title,
    badge: detailProduct.badge,
    category: p.categories[0] ?? p.jenis ?? detailProduct.category,
    size: p.size_cm ? `Ukuran: ${p.size_cm} cm` : detailProduct.size,
    rating: detailProduct.rating,
    ratingValue: detailProduct.ratingValue,
    price: rupiah(p.price),
    installment: detailProduct.installment,
    sold: detailProduct.sold,
    stock: p.stock || 1,
    gallery,
    tabs: [
      { label: "Detail Buket", body: p.detail ? [p.detail] : detailProduct.tabs[0].body },
      { label: "Perawatan", body: p.care ? [p.care] : detailProduct.tabs[1].body },
      {
        label: "Pengiriman & Pengembalian",
        body: p.shipping ? [p.shipping] : detailProduct.tabs[2].body,
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
