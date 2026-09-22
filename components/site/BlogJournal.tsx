"use client";

import { useRef } from "react";
import { journalPosts } from "@/components/figmaAssets";
import { IconArrowLeft, IconArrowRight } from "@/components/site/icons";
import Reveal from "@/components/site/Reveal";

export default function BlogJournal() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 32 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#efeef7] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] flex flex-col gap-[32px] lg:gap-[40px] px-5 md:px-10 lg:px-[60px] py-[56px] lg:py-[72px]">
        {/* header */}
        <Reveal className="flex items-end justify-between gap-6 w-full">
          <div className="flex flex-col gap-[8px] items-start">
            <p className="font-normal leading-[1.35] text-[#696f96] text-[16px] lg:text-[18px]">Blogs</p>
            <h2 className="font-ivy font-semibold leading-[1.1] text-[#3f425a] text-[30px] sm:text-[36px] lg:text-[44px]">
              The Flower Journal
            </h2>
          </div>
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

        {/* track */}
        <div
          ref={track}
          className="flex gap-[24px] lg:gap-[32px] overflow-x-auto pb-2 -mx-5 px-5 md:-mx-10 md:px-10 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {journalPosts.map((post, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="group snap-start shrink-0 w-[280px] sm:w-[300px] lg:w-[308px] flex flex-col gap-[16px]"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  alt={post.title}
                  src={post.img}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-[10px] items-start">
                <p className="font-normal leading-[1.35] text-[#696f96] text-[14px]">{post.tag}</p>
                <h3 className="font-ivy font-semibold leading-[1.2] text-[#3f425a] text-[22px] lg:text-[24px] line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-normal leading-[1.5] text-[#696f96] text-[15px] lg:text-[16px] line-clamp-2">
                  {post.desc}
                </p>
                <a href="#" className="group/link flex gap-[8px] items-center pt-[2px]">
                  <span className="font-medium leading-[1.35] text-[#3f425a] text-[15px]">Read more</span>
                  <IconArrowRight className="size-[18px] text-[#3f425a] transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* view more */}
        <Reveal>
          <a
            href="#"
            className="group inline-flex gap-[16px] h-[52px] items-center justify-center border border-[#483f83] px-[28px] transition-colors hover:bg-[#483f83] hover:text-white text-[#483f83]"
          >
            <span className="font-medium leading-[1.4] text-[16px] whitespace-nowrap">View more articles</span>
            <IconArrowRight className="size-[20px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
