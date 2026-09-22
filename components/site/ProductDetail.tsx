"use client";

import { useState } from "react";
import { detailProduct } from "@/components/figmaAssets";
import { IconStar, IconBag, IconTag, IconHome } from "@/components/site/icons";
import Reveal from "@/components/site/Reveal";
import CheckoutModal from "@/components/site/CheckoutModal";

export default function ProductDetail() {
  const p = detailProduct;
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section className="w-full bg-[#f3f2f7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[60px] py-[28px] lg:py-[40px]">
        {/* breadcrumb */}
        <div className="flex gap-[8px] items-center text-[14px] lg:text-[15px] leading-[1.35] mb-[24px] lg:mb-[32px]">
          <IconHome className="size-[17px] text-[#7a70ba]" />
          <a href="/" className="text-[#696f96] transition-colors hover:text-[#7a70ba]">Home</a>
          <span className="text-[#c3c5d5]">›</span>
          <a href="/product" className="text-[#696f96] transition-colors hover:text-[#7a70ba]">Product</a>
          <span className="text-[#c3c5d5]">›</span>
          <span className="font-semibold text-[#544997]">{p.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[28px] lg:gap-[48px] items-start">
          {/* ------------------------------ gallery ------------------------------ */}
          <div className="w-full lg:w-[600px] shrink-0 flex flex-col gap-[16px]">
            <div className="relative w-full aspect-[610/654] overflow-hidden border border-[#e1e2ea] bg-[#efeef4] group">
              <img
                key={active}
                alt={p.name}
                src={p.gallery[active]}
                className="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03] animate-[fadeIn_0.4s_ease]"
              />
            </div>
            <div className="grid grid-cols-5 gap-[12px]">
              {p.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Foto ${i + 1}`}
                  className={`relative aspect-[123/88] overflow-hidden border-2 transition-all duration-200 ${
                    active === i
                      ? "border-[#7a70ba]"
                      : "border-transparent opacity-80 hover:opacity-100 hover:border-[#d9d6eb]"
                  }`}
                >
                  <img alt="" src={src} className="absolute inset-0 size-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ------------------------------- info -------------------------------- */}
          <Reveal className="flex flex-col gap-[18px] w-full min-w-px">
            {/* title + badge */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-ivy font-semibold leading-[1.15] text-[#544997] text-[30px] sm:text-[36px] lg:text-[40px]">
                {p.name}
              </h1>
              <span className="shrink-0 bg-[#7a70ba] text-white text-[13px] font-medium leading-[1.35] px-[14px] py-[6px] rounded-[6px]">
                {p.badge}
              </span>
            </div>

            {/* meta + rating */}
            <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[8px] text-[#696f96] text-[15px] lg:text-[16px]">
              <span>{p.category}</span>
              <span className="h-[16px] w-px bg-[#c3c5d5]" />
              <span>{p.size}</span>
              <span className="flex items-center gap-[6px] ml-[2px]">
                <span className="flex items-center gap-[2px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStar
                      key={i}
                      className={`size-[18px] ${i < p.rating ? "text-[#7a70ba]" : "text-[#d5d3e4]"}`}
                    />
                  ))}
                </span>
                <span className="text-[#3f425a] font-medium">{p.ratingValue}</span>
              </span>
            </div>

            {/* price + installment */}
            <div className="flex flex-wrap items-baseline gap-x-[16px] gap-y-[4px]">
              <p className="font-ivy font-semibold text-[#544997] text-[34px] lg:text-[40px] leading-[1.1]">
                {p.price}
              </p>
              <p className="text-[#8b88a8] text-[14px] max-w-[280px] leading-[1.4]">{p.installment}</p>
            </div>

            {/* sold tag */}
            <div className="flex">
              <span className="flex items-center gap-[8px] bg-[#eceaf6] text-[#7a70ba] text-[14px] font-medium px-[14px] py-[8px] rounded-[6px]">
                <IconTag className="size-[16px]" />
                {p.sold}
              </span>
            </div>

            {/* quantity */}
            <div className="flex flex-col gap-[10px]">
              <p className="font-medium text-[#3f425a] text-[15px]">Jumlah Pembelian</p>
              <div className="flex items-center gap-[16px]">
                <div className="flex items-center border border-[#d9d6eb] rounded-[6px] overflow-hidden">
                  <button
                    type="button"
                    aria-label="Kurangi"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    disabled={qty <= 1}
                    className="flex items-center justify-center size-[48px] text-[#544997] text-[22px] transition-colors enabled:hover:bg-[#f2f3f7] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <span className="flex items-center justify-center w-[52px] h-[48px] border-x border-[#d9d6eb] text-[#3f425a] font-medium text-[16px]">
                    {qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Tambah"
                    onClick={() => setQty((q) => Math.min(p.stock, q + 1))}
                    disabled={qty >= p.stock}
                    className="flex items-center justify-center size-[48px] text-[#544997] text-[22px] transition-colors enabled:hover:bg-[#f2f3f7] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
                <span className="text-[#8b88a8] text-[14px]">Stok saat ini: {p.stock}</span>
              </div>
            </div>

            {/* actions */}
            <div className="flex flex-col gap-[12px] pt-[4px]">
              <button
                onClick={() => setCheckoutOpen(true)}
                className="group bg-[#544997] flex items-center justify-center h-[54px] px-[24px] transition-colors hover:bg-[#443a86]"
              >
                <span className="font-medium text-white text-[16px]">Checkout Sekarang</span>
              </button>
              <button className="group border border-[#544997] flex items-center justify-center gap-[10px] h-[54px] px-[24px] transition-colors hover:bg-[#544997]/5">
                <span className="font-medium text-[#544997] text-[16px]">Cart</span>
                <IconBag className="size-[20px] text-[#544997] transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* tabs */}
            <div className="flex flex-col gap-[20px] pt-[10px]">
              <div className="flex gap-[24px] sm:gap-[40px] items-center border-b border-[#e1e2ea] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {p.tabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTab(i)}
                    className={`relative py-[12px] text-[15px] lg:text-[16px] whitespace-nowrap transition-colors ${
                      tab === i ? "text-[#544997] font-medium" : "text-[#696f96] hover:text-[#7a70ba]"
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute left-0 -bottom-px h-[2px] bg-[#544997] transition-all duration-300 ${
                        tab === i ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div key={tab} className="flex flex-col gap-[16px] animate-[fadeIn_0.35s_ease]">
                {p.tabs[tab].body.map((para, i) => (
                  <p key={i} className="text-[#696f96] text-[15px] leading-[1.6]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        product={{ name: p.name, price: p.price, image: p.gallery[active] }}
        qty={qty}
      />
    </section>
  );
}
