import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Produk — Sekar Wangi",
  description:
    "Koleksi untuk setiap momen. Temukan bunga yang tepat untuk setiap cerita di Sekar Wangi.",
};

export default function Page() {
  return <ProductPage />;
}
