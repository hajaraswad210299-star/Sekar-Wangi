"use client";

import { useEffect, useState } from "react";
import { IconSearch, IconCalendar, IconX } from "@/components/site/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  product: { name: string; price: string; image: string };
  qty: number;
};

const inputCls =
  "w-full bg-white border border-[#e1e2ea] rounded-[10px] px-[16px] py-[13px] text-[15px] text-[#3f425a] placeholder:text-[#a5a8c0] outline-none transition-colors focus:border-[#928ac7]";

export default function CheckoutModal({ open, onClose, product, qty }: Props) {
  const [note, setNote] = useState("");
  const [render, setRender] = useState(open);
  const [show, setShow] = useState(false);

  // mount/unmount with enter/leave animation
  useEffect(() => {
    if (open) {
      setRender(true);
      const t = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(t);
    }
    setShow(false);
    const t = setTimeout(() => setRender(false), 250);
    return () => clearTimeout(t);
  }, [open]);

  // esc to close + lock body scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!render) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Checkout Pesanan"
      onMouseDown={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-[250ms] ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(38, 34, 58, 0.55)", backdropFilter: "blur(2px)" }}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[640px] max-h-[92vh] overflow-y-auto bg-white rounded-[16px] shadow-[0_30px_80px_-20px_rgba(38,34,58,0.5)] transition-all duration-[250ms] ease-out ${
          show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.98]"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between gap-4 px-[24px] sm:px-[28px] py-[20px] border-b border-[#e1e2ea]">
          <h2 className="font-ivy font-semibold text-[#3f425a] text-[22px] sm:text-[24px] leading-[1.2]">
            Checkout Pesanan
          </h2>
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="flex items-center justify-center size-[34px] rounded-full border border-[#e1e2ea] text-[#696f96] transition-all duration-200 hover:bg-[#f2f3f7] hover:text-[#544997] hover:rotate-90"
          >
            <IconX className="size-[18px]" />
          </button>
        </div>

        {/* body */}
        <div className="grid md:grid-cols-2 gap-[24px] sm:gap-[28px] px-[24px] sm:px-[28px] py-[24px]">
          {/* left — shipping info */}
          <div className="flex flex-col gap-[14px]">
            <p className="font-medium text-[#3f425a] text-[17px]">Informasi Pengiriman</p>

            <div className="relative">
              <input className={inputCls + " pr-[44px]"} placeholder="Kirim Ke Kota Mana?" />
              <IconSearch className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[18px] text-[#a5a8c0]" />
            </div>
            <input className={inputCls} placeholder="Masukkan Alamat Lengkap Tujuan." />
            <div className="relative">
              <input className={inputCls + " pr-[44px]"} placeholder="Pilih Waktu Pengantaran." />
              <IconCalendar className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[18px] text-[#7a70ba]" />
            </div>

            <p className="font-medium text-[#3f425a] text-[15px] mt-[4px]">Ucapan</p>
            <div className="flex flex-col gap-[6px]">
              <textarea
                value={note}
                maxLength={400}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Tambahkan pesan manis untuk penerima (opsional)."
                className="w-full h-[120px] resize-none bg-[#f6f6f9] border border-[#e1e2ea] rounded-[10px] px-[16px] py-[13px] text-[15px] text-[#3f425a] placeholder:text-[#a5a8c0] outline-none transition-colors focus:border-[#928ac7] focus:bg-white"
              />
              <p className="text-right text-[13px] text-[#a5a8c0]">
                Character: <span className="text-[#696f96]">{note.length}</span>/400
              </p>
            </div>
          </div>

          {/* right — order summary */}
          <div className="flex flex-col gap-[14px]">
            <p className="font-medium text-[#3f425a] text-[17px]">Pesanan Anda</p>
            <div className="flex flex-col gap-[16px] border-b border-[#e1e2ea] pb-[16px]">
              <div className="flex gap-[16px] items-start">
                <div className="relative size-[100px] shrink-0 overflow-hidden rounded-[10px] bg-[#efeef4]">
                  <img alt={product.name} src={product.image} className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="flex flex-col gap-[6px] min-w-px">
                  <p className="font-medium text-[#544997] text-[16px] leading-[1.3]">{product.name}</p>
                  <p className="font-bold text-[#3f425a] text-[16px]">{product.price}</p>
                </div>
              </div>
              <p className="text-[#8b88a8] text-[14px]">{qty}x Item</p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="px-[24px] sm:px-[28px] pb-[24px] sm:pb-[28px]">
          <button
            type="button"
            className="group w-full bg-[#544997] flex items-center justify-center h-[54px] rounded-[8px] transition-colors hover:bg-[#443a86]"
          >
            <span className="font-medium text-white text-[16px]">Pesan Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  );
}
