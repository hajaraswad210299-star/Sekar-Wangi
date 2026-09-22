import { IconWhatsapp } from "@/components/site/icons";

/** Floating WhatsApp consultation button (bottom-right). */
export default function WhatsappFab() {
  return (
    <a
      href="#"
      className="group fixed z-50 bottom-5 right-5 lg:bottom-8 lg:right-8 flex items-center bg-[#7a70ba] rounded-[90px] shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <span className="flex items-center p-[10px]">
        <IconWhatsapp className="size-[24px] text-white" />
      </span>
      <span className="hidden sm:flex items-center justify-center pr-[16px] py-[10px]">
        <span className="capitalize leading-[1.6] text-[14px] text-white whitespace-nowrap">
          Konsultasi sekarang
        </span>
      </span>
    </a>
  );
}
