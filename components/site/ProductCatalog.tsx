"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  productTabs,
  productsByTab,
  filterKategori,
  filterRegions,
  type Product,
} from "@/components/figmaAssets";
import {
  IconSearch,
  IconChevronDown,
  IconCheck,
  IconHeart,
  IconArrowLeft,
  IconArrowRight,
} from "@/components/site/icons";
import Reveal from "@/components/site/Reveal";

const PRICE_MIN = 34000;
const PRICE_MAX = 120000;

function fmt(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

/* ----------------------------- checkbox row ----------------------------- */
function CheckRow({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group flex gap-[12px] items-center py-[6px] w-full text-left"
    >
      <span
        className={`flex items-center justify-center size-[20px] rounded-[6px] border transition-all duration-200 shrink-0 ${
          checked
            ? "bg-[#7a70ba] border-[#7a70ba]"
            : "border-[#c3c5d5] group-hover:border-[#7a70ba]"
        }`}
      >
        <IconCheck
          className={`size-[14px] text-white transition-transform duration-200 ${
            checked ? "scale-100" : "scale-0"
          }`}
        />
      </span>
      <span
        className={`leading-[1.5] text-[15px] transition-colors ${
          checked ? "text-[#3f425a] font-medium" : "text-[#5b5f7a] group-hover:text-[#3f425a]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

/* --------------------------- collapsible section --------------------------- */
function Section({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between py-[6px] w-full group"
      >
        <span className="font-semibold leading-[1.35] text-[#3f425a] text-[16px]">{title}</span>
        <IconChevronDown
          className={`size-[20px] text-[#696f96] transition-transform duration-300 group-hover:text-[#7a70ba] ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className="border-b border-dashed border-[#d7d5e6] mb-[16px] mt-[6px]" />
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

/* -------------------------------- catalog -------------------------------- */
export default function ProductCatalog() {
  const [tab, setTab] = useState<string>(productTabs[0]);
  const [page, setPage] = useState(1);
  const [kategori, setKategori] = useState<Set<string>>(new Set(["Buket Balon"]));
  const [region, setRegion] = useState<Set<string>>(new Set(["Tangerang"]));
  const [openKat, setOpenKat] = useState(true);
  const [openReg, setOpenReg] = useState(true);
  const [openHarga, setOpenHarga] = useState(true);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["Jabodetabek"]));
  const [lo, setLo] = useState(PRICE_MIN);
  const [hi, setHi] = useState(120000);
  const [mobileFilter, setMobileFilter] = useState(false);

  const products: Product[] = productsByTab[tab] ?? [];

  const toggle = (set: Set<string>, key: string) => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  };

  const reset = () => {
    setKategori(new Set());
    setRegion(new Set());
    setLo(PRICE_MIN);
    setHi(PRICE_MAX);
  };

  const loPct = ((lo - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
  const hiPct = ((hi - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  const pages = useMemo(() => [1, 2, 3, 4], []);

  /* ------------------------------- sidebar ------------------------------- */
  const sidebar = (
    <div className="bg-white border border-[#e1e2ea] rounded-[6px] p-[24px] flex flex-col gap-[18px]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[#3f425a] text-[20px] leading-[1.2]">Filter Produk</p>
        <button
          type="button"
          onClick={reset}
          className="font-medium text-[#f12468] text-[14px] transition-opacity hover:opacity-70"
        >
          Reset Filter
        </button>
      </div>
      <div className="border-b border-[#e1e2ea]" />

      {/* Kategori */}
      <Section title="Kategori" open={openKat} onToggle={() => setOpenKat((v) => !v)}>
        <label className="flex bg-white border border-[#d9d6eb] items-center gap-[10px] px-[16px] py-[10px] rounded-[90px] mb-[12px] transition-colors focus-within:border-[#928ac7]">
          <IconSearch className="size-[18px] text-[#a5a8c0] shrink-0" />
          <input
            className="flex-1 min-w-0 leading-[1.5] outline-none text-[#3f425a] placeholder:text-[#a5a8c0] text-[14px] bg-transparent"
            placeholder="Cari Koleksi Acara.."
          />
        </label>
        <div className="filter-scroll flex flex-col max-h-[180px] overflow-y-auto pr-[10px]">
          {filterKategori.map((k) => (
            <CheckRow
              key={k}
              label={k}
              checked={kategori.has(k)}
              onToggle={() => setKategori((s) => toggle(s, k))}
            />
          ))}
        </div>
      </Section>

      {/* Region */}
      <Section title="Region" open={openReg} onToggle={() => setOpenReg((v) => !v)}>
        <label className="flex bg-white border border-[#d9d6eb] items-center gap-[10px] px-[16px] py-[10px] rounded-[90px] mb-[12px] transition-colors focus-within:border-[#928ac7]">
          <IconSearch className="size-[18px] text-[#a5a8c0] shrink-0" />
          <input
            className="flex-1 min-w-0 leading-[1.5] outline-none text-[#3f425a] placeholder:text-[#a5a8c0] text-[14px] bg-transparent"
            placeholder="Cari Kota..."
          />
        </label>
        <div className="filter-scroll flex flex-col gap-[4px] max-h-[220px] overflow-y-auto pr-[10px]">
          {filterRegions.map((g) => {
            const open = openGroups.has(g.group);
            return (
              <div key={g.group} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setOpenGroups((s) => toggle(s, g.group))}
                  className="flex items-center justify-between py-[6px] w-full group"
                >
                  <span className="font-medium text-[#3f425a] text-[15px]">{g.group}</span>
                  <IconChevronDown
                    className={`size-[18px] text-[#696f96] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-[2px]">
                    {g.items.map((c) => (
                      <CheckRow
                        key={c}
                        label={c}
                        checked={region.has(c)}
                        onToggle={() => setRegion((s) => toggle(s, c))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Harga */}
      <Section title="Harga" open={openHarga} onToggle={() => setOpenHarga((v) => !v)}>
        <p className="text-[#696f96] text-[14px] mb-[14px]">
          {fmt(lo)} – {fmt(hi)}
        </p>
        <div className="relative h-[24px] mb-[4px]">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-[#e1e2ea]" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-[#7a70ba]"
            style={{ left: `${loPct}%`, right: `${100 - hiPct}%` }}
          />
          <input
            type="range"
            className="price-range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={500}
            value={lo}
            onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 500))}
          />
          <input
            type="range"
            className="price-range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={500}
            value={hi}
            onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 500))}
          />
        </div>
      </Section>
    </div>
  );

  /* -------------------------------- render -------------------------------- */
  return (
    <section className="w-full bg-[#f3f2f7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[60px] py-[48px] lg:py-[64px]">
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-start">
          {/* mobile filter toggle */}
          <button
            type="button"
            onClick={() => setMobileFilter((v) => !v)}
            className="lg:hidden flex items-center justify-between w-full bg-white border border-[#e1e2ea] rounded-[6px] px-[20px] py-[14px] text-[#3f425a] font-semibold"
          >
            Filter Produk
            <IconChevronDown className={`size-[20px] transition-transform ${mobileFilter ? "rotate-180" : ""}`} />
          </button>

          {/* sidebar (sticky on desktop, below the sticky navbar) */}
          <aside className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-[196px] lg:self-start lg:max-h-[calc(100vh-212px)] lg:overflow-y-auto filter-scroll">
            <div className={`${mobileFilter ? "block" : "hidden"} lg:block`}>{sidebar}</div>
          </aside>

          {/* main */}
          <div className="flex flex-col gap-[28px] w-full min-w-px">
            {/* tabs */}
            <div className="flex flex-col gap-0">
              <div className="flex gap-[24px] sm:gap-[36px] items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {productTabs.map((t) => {
                  const active = t === tab;
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        setTab(t);
                        setPage(1);
                      }}
                      className={`relative py-[10px] text-[16px] whitespace-nowrap transition-colors ${
                        active ? "text-[#3f425a] font-medium" : "text-[#a5a8c0] hover:text-[#7a70ba]"
                      }`}
                    >
                      {t}
                      <span
                        className={`absolute left-0 -bottom-px h-[2px] bg-[#7a70ba] transition-all duration-300 ${
                          active ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="border-b border-[#e1e2ea]" />
            </div>

            {/* grid */}
            <div
              key={tab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[24px]"
            >
              {products.map((p, i) => (
                <Reveal key={`${tab}-${i}`} delay={(i % 3) * 70}>
                  <a
                    href="/product/detail"
                    className="group flex flex-col gap-[16px] focus:outline-none"
                  >
                    <div className="relative w-full aspect-[321/384] overflow-hidden bg-[#efeef4]">
                      <img
                        alt={p.name}
                        src={p.img}
                        className="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                      />
                      {/* wishlist micro-interaction */}
                      <button
                        type="button"
                        aria-label="Simpan"
                        onClick={(e) => e.preventDefault()}
                        className="absolute top-[12px] right-[12px] flex items-center justify-center size-[38px] rounded-full bg-white/90 text-[#7a70ba] shadow-sm opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#7a70ba] hover:text-white"
                      >
                        <IconHeart className="size-[18px]" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-[6px] items-center text-center">
                      <p className="font-medium leading-[1.35] text-[#3f425a] text-[16px] transition-colors group-hover:text-[#7a70ba]">
                        {p.name}
                      </p>
                      <p className="font-bold leading-[1.2] text-[#3f425a] text-[20px] whitespace-nowrap">
                        {p.price}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center lg:justify-end gap-[8px] pt-[8px]">
              <button
                type="button"
                aria-label="Sebelumnya"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex items-center justify-center size-[44px] rounded-full bg-[#e5e4f1] text-[#8b88a8] transition-all duration-200 enabled:hover:bg-[#d3d0ea] enabled:hover:text-[#544997] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IconArrowLeft className="size-[20px]" />
              </button>
              {pages.map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`flex items-center justify-center size-[44px] rounded-full text-[16px] transition-all duration-200 hover:scale-105 ${
                    page === n
                      ? "bg-[#bfbbdd] text-[#544997] font-semibold"
                      : "text-[#3f425a] hover:bg-[#eceaf6]"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="flex items-center justify-center size-[44px] text-[#a5a8c0]">…</span>
              <button
                onClick={() => setPage(155)}
                className={`flex items-center justify-center h-[44px] min-w-[44px] px-[10px] rounded-full text-[16px] transition-all duration-200 hover:scale-105 ${
                  page === 155 ? "bg-[#bfbbdd] text-[#544997] font-semibold" : "bg-[#f6f6f9] text-[#3f425a] hover:bg-[#eceaf6]"
                }`}
              >
                155
              </button>
              <button
                type="button"
                aria-label="Berikutnya"
                onClick={() => setPage((p) => p + 1)}
                className="flex items-center justify-center size-[44px] rounded-full bg-[#544997] text-white transition-all duration-200 hover:bg-[#443a86] hover:scale-105"
              >
                <IconArrowRight className="size-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
