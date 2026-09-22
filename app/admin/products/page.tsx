import type { Metadata } from "next";
import AdminProducts from "@/components/admin/AdminProducts";

export const metadata: Metadata = {
  title: "Products — Sekar Wangi Admin",
  description: "Kelola koleksi produk & buket Sekar Wangi.",
};

export default function Page() {
  return <AdminProducts />;
}
