import { IconMoon, IconBell } from "@/components/admin/icons";
import { IconGrid } from "@/components/site/icons";

export default function AdminTopbar({ page }: { page: string }) {
  return (
    <div className="flex items-center justify-between px-[24px] lg:px-[32px] h-[68px] border-b border-[#eef0f3]">
      <div className="flex items-center gap-[8px] text-[15px]">
        <IconGrid className="size-[18px] text-[#544997]" />
        <span className="text-[#544997] font-medium">Overview</span>
        <span className="text-[#c3c5d5]">›</span>
        <span className="text-[#3f425a]">{page}</span>
      </div>
      <div className="flex items-center gap-[10px]">
        {[
          { label: "Mode gelap", Icon: IconMoon },
          { label: "Notifikasi", Icon: IconBell },
        ].map(({ label, Icon }) => (
          <button
            key={label}
            aria-label={label}
            className="flex items-center justify-center size-[40px] rounded-[10px] border border-[#e1e2ea] text-[#3f425a] transition-all duration-200 hover:bg-[#f2f3f7] hover:text-[#544997]"
          >
            <Icon className="size-[19px]" />
          </button>
        ))}
      </div>
    </div>
  );
}
