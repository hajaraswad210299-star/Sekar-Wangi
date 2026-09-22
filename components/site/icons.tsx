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

export function IconUser({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="7.5" r="3.6" />
      <path d="M4.8 19.4a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  );
}

export function IconBag({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7.5 8V6.6a4.5 4.5 0 0 1 9 0V8" />
      <path d="M5.2 8h13.6l-.8 10.6a2.2 2.2 0 0 1-2.2 2H8.2a2.2 2.2 0 0 1-2.2-2L5.2 8Z" />
    </svg>
  );
}

export function IconGrid({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </svg>
  );
}

export function IconSearch({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="11" cy="11" r="6.4" />
      <path d="m20 20-3.4-3.4" />
    </svg>
  );
}

export function IconHeadset({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4.5 13.5v-1.5a7.5 7.5 0 0 1 15 0v1.5" />
      <rect x="3" y="13" width="4" height="6.2" rx="1.6" />
      <rect x="17" y="13" width="4" height="6.2" rx="1.6" />
      <path d="M19.5 19.2v.3a3 3 0 0 1-3 3H13" />
    </svg>
  );
}

export function IconGlobe({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.7 12h16.6" />
      <path d="M12 3.6c2.3 2.3 3.6 5.3 3.6 8.4S14.3 18.1 12 20.4C9.7 18.1 8.4 15.1 8.4 12S9.7 5.9 12 3.6Z" />
    </svg>
  );
}

export function IconLeaf({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M5 19c0-7.7 6.3-14 14-14 0 7.7-6.3 14-14 14Z" />
      <path d="M9 15c2.2-3.4 5.4-5.6 9-6.5" />
    </svg>
  );
}

export function IconCalendar({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.4" />
      <path d="M3.5 9.6h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconPin({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 21c4-3.4 7-6.7 7-10.3A7 7 0 0 0 5 10.7C5 14.3 8 17.6 12 21Z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </svg>
  );
}

export function IconUsers({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.4 19.2a5.6 5.6 0 0 1 11.2 0" />
      <path d="M16 5.1a3.2 3.2 0 0 1 0 6" />
      <path d="M17.2 19.2a5.6 5.6 0 0 0-3-5" />
    </svg>
  );
}

export function IconHeart({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 20.3S4.5 15.9 4.5 10.4A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7.5 3.4c0 5.5-7.5 9.9-7.5 9.9Z" />
    </svg>
  );
}

export function IconWhatsapp({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 1 1-4.2 15l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 0 1 12 3.9Zm-3 3.3c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1.1 2.7 1.2 2.9c.2.2 2.1 3.2 5 4.4 2.4 1 2.9.8 3.4.8.6-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4l-2-1c-.3-.1-.5-.2-.7.1l-.7.9c-.1.2-.3.2-.5.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5c-.1-.1-.7-1.8-1-2.4-.2-.5-.5-.5-.7-.5h-.5Z" />
    </svg>
  );
}

export function IconArrowRight({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowLeft({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function IconStar({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.6l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.6 6.6 19.5l1-6.1L3.2 9.1l6.1-.9L12 2.6Z" />
    </svg>
  );
}

export function IconHome({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4 10.6 12 4l8 6.6" />
      <path d="M5.6 9.4V19a1 1 0 0 0 1 1H10v-4.2a2 2 0 0 1 4 0V20h3.4a1 1 0 0 0 1-1V9.4" />
    </svg>
  );
}

export function IconTruck({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M3 6.5h10.5v9H3z" />
      <path d="M13.5 9.5H18l3 3v3h-7.5z" />
      <circle cx="7" cy="17.5" r="1.9" />
      <circle cx="17" cy="17.5" r="1.9" />
      <path d="M9 17.5h6M3 15.5h.5" />
    </svg>
  );
}

export function IconTulip({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 11.5c0-3 2-5.4 4.4-6.2C16.4 8 14.6 10.6 12 11.5Z" />
      <path d="M12 11.5c0-3-2-5.4-4.4-6.2C7.6 8 9.4 10.6 12 11.5Z" />
      <path d="M12 11.5V21" />
      <path d="M12 21c3.4 0 4.6-2.6 4.6-4.4-2.6 0-4.6 2-4.6 4.4Zm0 0c-3.4 0-4.6-2.6-4.6-4.4 2.6 0 4.6 2 4.6 4.4Z" />
    </svg>
  );
}

export function IconGift({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4.5 9.5h15V13h-15z" />
      <path d="M6 13h12v6.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
      <path d="M12 9.5v11" />
      <path d="M12 9.5C11 6 9.5 5 8.2 5a1.9 1.9 0 0 0 0 3.8c1.6 0 2.6.4 3.8.7 1.2-.3 2.2-.7 3.8-.7a1.9 1.9 0 0 0 0-3.8C14.5 5 13 6 12 9.5Z" />
    </svg>
  );
}

export function IconSupport24({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="4" stroke="currentColor" strokeWidth={1.6} />
      <text
        x="12"
        y="14.6"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="var(--font-sans)"
      >
        24
      </text>
    </svg>
  );
}

export function IconChevronDown({ className, ...p }: P) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconCheck({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
