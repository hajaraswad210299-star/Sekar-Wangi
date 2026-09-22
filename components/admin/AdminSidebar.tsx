"use client";

import { usePathname } from "next/navigation";
import { asset } from "@/components/figmaAssets";
import { IconGrid, IconSearch } from "@/components/site/icons";
import { IconChartBox, IconParcel, IconPanelLeft } from "@/components/admin/icons";

const nav = [
  { label: "Dashboard", href: "/admin", Icon: IconGrid, badge: null as string | null },
  { label: "Products", href: "/admin/products", Icon: IconChartBox, badge: null },
  { label: "Order", href: "/admin/order", Icon: IconParcel, badge: "7" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[264px] shrink-0 sticky top-0 h-screen bg-[#141415] text-white px-[16px] py-[20px]">
      {/* logo */}
      <div className="flex items-center justify-between px-[8px] mb-[22px]">
        <div className="flex items-center gap-[10px]">
          <span className="flex items-center justify-center size-[36px] rounded-[10px] bg-[#544997]">
            <img alt="" src={asset.logo} className="size-[22px] brightness-0 invert" />
          </span>
          <span className="font-ivy font-semibold text-[20px] tracking-[0.2px]">Sekar wangi</span>
        </div>
        <button aria-label="Ciutkan" className="text-[#8a8a95] transition-colors hover:text-white">
          <IconPanelLeft className="size-[20px]" />
        </button>
      </div>

      {/* search */}
      <label className="flex items-center gap-[10px] bg-[#2d2d39] rounded-[10px] px-[12px] py-[10px] mb-[24px] transition-colors focus-within:ring-1 focus-within:ring-[#544997]">
        <IconSearch className="size-[17px] text-[#8a8a95] shrink-0" />
        <input
          className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-white placeholder:text-[#8a8a95]"
          placeholder="Search..."
        />
        <span className="text-[11px] text-[#8a8a95] border border-[#3a3a47] rounded-[5px] px-[6px] py-[1px]">⌘K</span>
      </label>

      <p className="text-[11px] font-medium tracking-[0.12em] text-[#6d6d78] px-[8px] mb-[10px]">MAIN MENU</p>

      {/* nav */}
      <nav className="flex flex-col gap-[4px]">
        {nav.map(({ label, href, Icon, badge }) => {
          const active = pathname === href;
          return (
            <a
              key={label}
              href={href}
              className={`group flex items-center gap-[12px] rounded-[10px] px-[12px] py-[11px] text-[14px] transition-all duration-200 ${
                active
                  ? "bg-[#282833] text-white"
                  : "text-[#9a9aa7] hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <Icon className="size-[19px] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="flex items-center justify-center min-w-[22px] h-[20px] px-[6px] rounded-full bg-[#544997] text-white text-[12px] font-medium">
                  {badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* user */}
      <div className="mt-auto flex items-center gap-[12px] bg-[#232325] rounded-[12px] p-[10px]">
        <img alt="" src={asset.ellipse1} className="size-[40px] rounded-full object-cover" />
        <div className="flex flex-col min-w-px">
          <p className="text-[14px] font-medium leading-tight truncate">Yuna Claire</p>
          <p className="text-[12px] text-[#8a8a95] leading-tight truncate">yunaclaire@mail.com</p>
        </div>
      </div>
    </aside>
  );
}
