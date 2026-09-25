"use client";

import { useRef } from "react";
import { relatedProducts } from "@/components/figmaAssets";
import { IconArrowLeft, IconArrowRight, IconHeart } from "@/components/site/icons";
import Reveal from "@/components/site/Reveal";

export type RelatedItem = { img: string; name: string; price: string; href: string };

export default function RelatedProducts({ items }: { items?: RelatedItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const list: RelatedItem[] =
    items && items.length > 0
      ? items
      : relatedProducts.map((r) => ({ ...r, href: "/product/detail" }));

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#efeef7] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] flex flex-col gap-[32px] lg:gap-[40px] px-5 md:px-10 lg:px-[60px] py-[48px] lg:py-[72px]">
        <Reveal className="flex items-end justify-between gap-6 w-full">
          <h2 className="font-ivy font-semibold leading-[1.1] text-[#3f425a] text-[28px] sm:text-[34px] lg:text-[40px]">
            Anda mungkin juga menyukai
          </h2>
          <div className="hidden sm:flex gap-[16px] items-center shrink-0">
            <button
              aria-label="Sebelumnya"
              onClick={() => scrollBy(-1)}
              className="flex items-center justify-center size-[44px] rounded-full text-[#3f425a] transition-all duration-300 hover:bg-[#7a70ba] hover:text-white hover:-translate-x-0.5"
            >
              <IconArrowLeft className="size-[22px]" />
            </button>
            <button
              aria-label="Berikutnya"
              onClick={() => scrollBy(1)}
              className="flex items-center justify-center size-[44px] rounded-full text-[#3f425a] transition-all duration-300 hover:bg-[#7a70ba] hover:text-white hover:translate-x-0.5"
            >
              <IconArrowRight className="size-[22px]" />
            </button>
          </div>
        </Reveal>

        <div
          ref={track}
          className="flex gap-[16px] lg:gap-[24px] overflow-x-auto pb-2 -mx-5 px-5 md:-mx-10 md:px-10 lg:mx-0 lg:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {list.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="group snap-start shrink-0 w-[240px] sm:w-[280px] lg:w-[320px] flex flex-col gap-[16px]"
            >
              <a href={p.href} className="flex flex-col gap-[16px]">
                <div className="relative w-full aspect-[321/384] overflow-hidden bg-[#efeef4]">
                  <img
                    alt={p.name}
                    src={p.img}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-[12px] right-[12px] flex items-center justify-center size-[38px] rounded-full bg-white/90 text-[#7a70ba] shadow-sm opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#7a70ba] hover:text-white">
                    <IconHeart className="size-[18px]" />
                  </span>
                </div>
                <div className="flex flex-col gap-[6px] items-center text-center">
                  <p className="font-medium leading-[1.35] text-[#3f425a] text-[16px] transition-colors group-hover:text-[#7a70ba]">
                    {p.name}
                  </p>
                  <p className="font-bold leading-[1.2] text-[#3f425a] text-[20px] whitespace-nowrap">{p.price}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <a
            href="/product"
            className="group inline-flex gap-[16px] h-[52px] items-center justify-center border border-[#483f83] px-[28px] transition-colors hover:bg-[#483f83] hover:text-white text-[#483f83]"
          >
            <span className="font-medium leading-[1.4] text-[16px] whitespace-nowrap">Jelajahi Produk</span>
            <IconArrowRight className="size-[20px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
