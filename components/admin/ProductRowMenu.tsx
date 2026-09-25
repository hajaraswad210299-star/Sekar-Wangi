"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setProductStatus, deleteProduct } from "@/app/admin/products/actions";
import { IconKebab } from "@/components/admin/icons";

export default function ProductRowMenu({ id, status }: { id: string; status: string }) {
  const [open, setOpen] = useState(false);
  const [pending, start] = useTransition();
  const router = useRouter();
  const published = status === "published";

  const run = (fn: () => Promise<{ ok: boolean; error?: string }>) =>
    start(async () => {
      const res = await fn();
      setOpen(false);
      if (!res.ok) alert(res.error ?? "Terjadi kesalahan");
      router.refresh();
    });

  return (
    <div className="relative">
      <button
        aria-label="Aksi produk"
        disabled={pending}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center size-[30px] rounded-[8px] text-[#8b8f99] transition-colors hover:bg-[#eceaf6] hover:text-[#544997] disabled:opacity-50"
      >
        <IconKebab className="size-[15px]" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-[34px] z-20 w-[184px] bg-white border border-[#ececf1] rounded-[10px] shadow-[0_12px_30px_-12px_rgba(31,33,45,0.35)] py-[6px]">
            <a
              href={`/admin/products/${id}/edit`}
              className="flex items-center px-[14px] py-[9px] text-[14px] text-[#3f425a] transition-colors hover:bg-[#f5f4fb]"
            >
              Edit produk
            </a>
            <button
              type="button"
              onClick={() => run(() => setProductStatus(id, published ? "draft" : "published"))}
              className="flex w-full items-center px-[14px] py-[9px] text-left text-[14px] text-[#3f425a] transition-colors hover:bg-[#f5f4fb]"
            >
              {published ? "Jadikan Draft" : "Publish"}
            </button>
            <div className="my-[4px] border-t border-[#f0f0f4]" />
            <button
              type="button"
              onClick={() => {
                if (confirm("Hapus produk ini? Tindakan tidak bisa dibatalkan.")) {
                  run(() => deleteProduct(id));
                }
              }}
              className="flex w-full items-center px-[14px] py-[9px] text-left text-[14px] text-[#e0244f] transition-colors hover:bg-[#fdeaf0]"
            >
              Hapus produk
            </button>
          </div>
        </>
      )}
    </div>
  );
}
