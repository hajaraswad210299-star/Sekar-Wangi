import type { Metadata } from "next";
import AdminCreateProduct from "@/components/admin/AdminCreateProduct";

export const metadata: Metadata = {
  title: "Add New Product — Sekar Wangi Admin",
  description: "Tambah produk & buket baru.",
};

export default function Page() {
  return <AdminCreateProduct />;
}
