import type { Metadata } from "next";
import ProductDetailPage from "@/components/ProductDetailPage";

export const metadata: Metadata = {
  title: "Velvet Orchid Rose — Sekar Wangi",
  description:
    "Velvet Orchid Rose — rangkaian bunga segar dengan komposisi lembut dan elegan. Pesan di Sekar Wangi.",
};

export default function Page() {
  return <ProductDetailPage />;
}
