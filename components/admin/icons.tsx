import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconChartBox({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M8 15v-2.5M12 15v-5M16 15v-3.5" />
    </svg>
  );
}

export function IconTrendUp({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4 15l4.5-4.5 3 3L20 6" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

export function IconParcel({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

export function IconPanelLeft({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="M9.5 4.5v15" />
    </svg>
  );
}

export function IconMoon({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M20 14.2A8 8 0 0 1 9.8 4 8 8 0 1 0 20 14.2Z" />
    </svg>
  );
}

export function IconBell({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M6 9a6 6 0 0 1 12 0c0 4 1.4 5.4 2 6.2H4C4.6 14.4 6 13 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function IconKebab({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="12" cy="5.5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="18.5" r="1.6" />
    </svg>
  );
}
