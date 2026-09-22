import type { ComponentType, SVGProps } from "react";
import {
  IconTruck,
  IconTulip,
  IconSupport24,
  IconGift,
} from "@/components/site/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const items: { title: string; desc: string; Icon: IconType }[] = [
  { title: "Jangkauan Luas", desc: "Kirim Ke Lebih Dari 200+ Kota Di Indonesia", Icon: IconTruck },
  { title: "Bunga Segar", desc: "Kami Menyediakan 100% Bunga Segar", Icon: IconTulip },
  { title: "Support 24/7", desc: "Dukungan Customer Services 24 Jam Sehari", Icon: IconSupport24 },
  { title: "Occasions", desc: "Buat Segala Moment Menjadi Indah", Icon: IconGift },
];

/** Full-bleed purple feature strip (delivery / fresh / support / occasions). */
export default function FeatureStrip() {
  return (
    <section className="w-full bg-[#7a70ba]">
      <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[40px] gap-y-[24px] px-5 md:px-10 lg:px-[60px] py-[26px]">
        {items.map(({ title, desc, Icon }) => (
          <div key={title} className="group flex gap-[16px] items-center">
            <Icon className="size-[34px] shrink-0 text-white transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <p className="font-bold leading-[1.35] text-white text-[16px]">{title}</p>
              <p className="font-normal leading-[1.45] text-white/80 text-[14px]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
