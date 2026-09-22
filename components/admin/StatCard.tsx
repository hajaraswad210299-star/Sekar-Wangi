import { IconTrendUp } from "@/components/admin/icons";
import { IconTulip, IconUsers } from "@/components/site/icons";

const icons = { trend: IconTrendUp, bouquet: IconTulip, users: IconUsers };

function Spark({ data, color }: { data: number[]; color: string }) {
  const w = 120;
  const h = 46;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (w * i) / (data.length - 1);
    const y = h - 4 - ((h - 8) * (v - min)) / (max - min || 1);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  const id = `sk-${color.replace("#", "")}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-[120px] h-[46px] shrink-0 overflow-visible">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${id})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StatCard({
  label,
  value,
  delta,
  up,
  spark,
  icon,
}: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  spark: number[];
  icon: keyof typeof icons;
}) {
  const Icon = icons[icon];
  const color = up ? "#7c6ad0" : "#f3205c";
  return (
    <div className="group bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-20px_rgba(84,73,151,0.45)]">
      <div className="flex items-center justify-between mb-[16px]">
        <p className="font-semibold text-[#1d211d] text-[16px]">{label}</p>
        <span className="flex items-center justify-center size-[34px] rounded-[9px] bg-[#efeaf9] text-[#544997] transition-colors group-hover:bg-[#544997] group-hover:text-white">
          <Icon className="size-[18px]" />
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 bg-white border border-[#f0f0f4] rounded-[12px] px-[18px] py-[16px]">
        <div className="flex flex-col gap-[6px]">
          <p className="font-ivy font-semibold text-[#544997] text-[30px] leading-none">{value}</p>
          <p className="text-[13px]">
            <span className={up ? "font-semibold text-[#1d211d]" : "font-semibold text-[#f3205c]"}>{delta}</span>
            <span className="text-[#8b8f99]"> This Week</span>
          </p>
        </div>
        <Spark data={spark} color={color} />
      </div>
    </div>
  );
}
