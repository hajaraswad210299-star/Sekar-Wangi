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

export function IconUpload({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.7-1.2A4.2 4.2 0 0 1 17.5 18" />
      <path d="M12 12v6M9.5 14 12 11.5 14.5 14" />
    </svg>
  );
}

export function IconImage({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4.5 17 4.5-4.5 3.5 3.5 3-3 4 4" />
    </svg>
  );
}

export function IconSave({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M5.5 4.5h11L20 8v10.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" />
      <path d="M8 4.5v4h6v-4M8 19.5v-5h8v5" />
    </svg>
  );
}

export function IconGrip({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="9" cy="6" r="1.4" /><circle cx="15" cy="6" r="1.4" />
      <circle cx="9" cy="12" r="1.4" /><circle cx="15" cy="12" r="1.4" />
      <circle cx="9" cy="18" r="1.4" /><circle cx="15" cy="18" r="1.4" />
    </svg>
  );
}

export function IconDoc({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M6 3.5h7l5 5V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5Z" />
      <path d="M13 3.5V9h5M9 13h6M9 16h4" />
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
