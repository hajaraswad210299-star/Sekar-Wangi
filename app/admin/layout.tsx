import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Dashboard — Sekar Wangi Admin",
  description: "Panel admin Sekar Wangi.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#141415]">
      <AdminSidebar />
      <div className="flex-1 min-w-0 lg:p-[8px]">{children}</div>
    </div>
  );
}
