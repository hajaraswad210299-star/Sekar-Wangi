"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { asset, navLinks } from "@/components/figmaAssets";
import { IconUser, IconBag, IconGrid, IconHeadset } from "@/components/site/icons";

const bar = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[60px]";

const linkHref: Record<string, string> = {
  Home: "/",
  Product: "/product",
  Location: "#",
  Moment: "#",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (link: string) => linkHref[link] === pathname;

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top strip */}
      <div className="bg-[#544997] w-full">
        <div className={`${bar} flex items-center justify-between py-[10px]`}>
          <div className="hidden md:flex capitalize gap-[6px] items-center leading-[1.6] text-[14px] text-white whitespace-nowrap">
            <a href="#" className="font-medium tracking-[-0.28px] transition-opacity hover:opacity-80">
              Tentang Sekar Wangi
            </a>
            <span>•</span>
            <a href="#" className="font-medium tracking-[-0.28px] transition-opacity hover:opacity-80">
              Bantuan
            </a>
            <span>•</span>
            <a href="#" className="font-medium tracking-[-0.28px] transition-opacity hover:opacity-80">
              Testimonial
            </a>
          </div>
          <div className="flex gap-[10px] items-center justify-center md:ml-auto">
            <div className="flex gap-[8px] items-center">
              <img alt="Indonesia" className="size-[16px]" src={asset.flagId} />
              <span className="capitalize leading-[1.6] text-[14px] text-white whitespace-nowrap">
                Indonesia
              </span>
            </div>
            <img alt="" className="size-[16px]" src={asset.frame} />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white w-full">
        <div className={`${bar} flex items-center justify-between gap-4 py-[14px] lg:py-[18px]`}>
          <a href="/" className="flex gap-[12px] items-center shrink-0 group">
            <img alt="Sekar Wangi" className="size-[40px] lg:size-[44px] transition-transform duration-300 group-hover:rotate-6" src={asset.logo} />
            <span className="flex flex-col gap-[2px] justify-center text-[#574c9e]">
              <span className="font-ivy font-semibold leading-[1.2] text-[22px] lg:text-[26px] tracking-[0.26px] whitespace-nowrap">
                Sekar wangi
              </span>
              <span className="font-instrument italic leading-none text-[11px] lg:text-[12px] tracking-[0.12px]">
                Buket Bunga &amp; Kado
              </span>
            </span>
          </a>

          {/* Search (desktop) */}
          <label className="hidden lg:flex flex-1 max-w-[501px] bg-white border border-[#d9d6eb] items-center justify-between px-[24px] py-[14px] rounded-[90px] transition-colors focus-within:border-[#928ac7]">
            <input
              className="capitalize flex-1 min-w-0 leading-[1.6] outline-none text-[#3f425a] placeholder:text-[#696f96] text-[14px] bg-transparent"
              placeholder="Cari berdasarkan nama atau jenis bunga..."
            />
            <img alt="" className="size-[20px] shrink-0" src={asset.searchIcon} />
          </label>

          <div className="flex gap-[4px] items-center shrink-0">
            <button aria-label="Akun" className="flex items-center justify-center p-[6px] rounded-full transition-colors hover:bg-[#f2f3f7]">
              <IconUser className="size-[22px] text-[#3f425a]" />
            </button>
            <button aria-label="Keranjang" className="flex items-center justify-center p-[6px] rounded-full transition-colors hover:bg-[#f2f3f7]">
              <IconBag className="size-[22px] text-[#3f425a]" />
            </button>
            {/* Hamburger */}
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] p-[10px] ml-1"
            >
              <span className={`block h-[2px] w-[22px] bg-[#3f425a] transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-[22px] bg-[#3f425a] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-[22px] bg-[#3f425a] transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu bar (desktop) */}
      <div className="hidden lg:block bg-white border-[#e1e2ea] border-t w-full">
        <div className={`${bar} flex items-center justify-between pt-[6px]`}>
          <div className="flex gap-[12px] items-center">
            <button className="flex gap-[12px] items-center p-[10px] group">
              <IconGrid className="size-[20px] text-[#3f425a]" />
              <span className="capitalize leading-[1.6] text-[#3f425a] text-[14px] whitespace-nowrap transition-colors group-hover:text-[#928ac7]">
                Categories
              </span>
            </button>
            <span className="h-[26px] w-px bg-[#e1e2ea]" />
            <nav className="flex gap-[12px] items-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={linkHref[link]}
                  className={`flex gap-[8px] items-center py-[10px] border-b-2 leading-[1.6] text-[14px] whitespace-nowrap transition-colors ${
                    isActive(link)
                      ? "border-[#928ac7] text-[#928ac7] font-medium"
                      : "border-transparent text-[#3f425a] capitalize hover:text-[#928ac7] hover:border-[#c9c4e6]"
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-[6px] items-center">
            <IconHeadset className="size-[16px] text-[#7a70ba]" />
            <span className="capitalize leading-[1.6] text-[#7a70ba] text-[14px] whitespace-nowrap">
              Chat Support: (+62) 856 4581 8745 321
            </span>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden w-full overflow-hidden bg-white border-t border-[#e1e2ea] transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${bar} py-5 flex flex-col gap-4`}>
          <label className="flex bg-white border border-[#d9d6eb] items-center justify-between px-[20px] py-[12px] rounded-[90px] focus-within:border-[#928ac7] transition-colors">
            <input
              className="capitalize flex-1 min-w-0 leading-[1.6] outline-none text-[#3f425a] placeholder:text-[#696f96] text-[14px] bg-transparent"
              placeholder="Cari bunga..."
            />
            <img alt="" className="size-[20px] shrink-0" src={asset.searchIcon} />
          </label>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link}
                href={linkHref[link]}
                onClick={() => setOpen(false)}
                className={`py-3 border-b border-[#f0eef8] text-[15px] transition-colors ${
                  isActive(link) ? "text-[#928ac7] font-medium" : "text-[#3f425a] hover:text-[#928ac7]"
                }`}
              >
                {link}
              </a>
            ))}
            <a href="#" onClick={() => setOpen(false)} className="py-3 text-[15px] text-[#3f425a] hover:text-[#928ac7] transition-colors">
              Categories
            </a>
          </nav>
          <div className="flex gap-[6px] items-center pt-1">
            <IconHeadset className="size-[16px] text-[#7a70ba]" />
            <span className="text-[#7a70ba] text-[13px]">
              Chat Support: (+62) 856 4581 8745 321
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
