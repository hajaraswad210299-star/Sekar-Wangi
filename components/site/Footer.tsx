import { asset, footerCols } from "@/components/figmaAssets";

/** Shared footer: WhatsApp CTA band + link columns + copyright. */
export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#7a70ba] w-full">
        <div className="mx-auto w-full max-w-[1440px] flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between px-5 md:px-10 lg:px-[60px] py-[30px]">
          <div className="flex flex-1 flex-col gap-[12px] items-start justify-center text-white">
            <h2 className="font-ivy font-semibold leading-[1.2] text-[28px] sm:text-[34px] lg:text-[40px]">
              Ingin Pesan &amp; Berkonsultasi?
            </h2>
            <p className="font-normal leading-[1.5] text-[16px] lg:text-[18px]">
              Chat kami di WhatsApp untuk konsultasi dan penawaran spesial hari ini.
            </p>
          </div>
          <a
            href="#"
            className="group bg-[#f2f3f7] flex gap-[12px] items-center justify-center p-[12px] shrink-0 transition-colors hover:bg-white"
          >
            <span className="font-medium leading-[1.35] text-[#483f83] text-[16px] whitespace-nowrap">
              Chat Whatsapp
            </span>
            <img
              alt=""
              className="size-[20px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              src={asset.whatsapp}
            />
          </a>
        </div>
      </div>
      <div className="bg-[#f2f3f7] w-full">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="border-[#e5e3f2] border-b flex flex-col md:flex-row md:h-[367px] items-stretch md:items-start justify-between px-5 md:px-10 lg:px-[60px]">
            <div className="border-[#e5e3f2] md:border-r flex flex-1 flex-col md:h-full items-center justify-between gap-8 py-[40px] md:pr-6">
              <div className="flex flex-col gap-[26px] items-center text-center w-full">
                <div className="flex flex-col gap-[4px] items-center leading-[1.2] text-[#574c9e] w-full">
                  <p className="font-ivy font-semibold text-[30px] lg:text-[36px]">Sekar Wangi</p>
                  <p className="font-normal text-[18px] lg:text-[20px]">Florist &amp; Flora</p>
                </div>
                <p className="capitalize font-normal text-[#7a70ba] text-[14px] leading-[1.6]">
                  Tempat di mana setiap acara jadi lebih berarti. Kami ada untuk menghidupkan momen yang ingin Anda rayakan.
                </p>
              </div>
              <div className="flex gap-[20px] items-center justify-center">
                {[asset.social1, asset.social2, asset.social3].map((s, i) => (
                  <a key={i} href="#" className="transition-transform duration-300 hover:-translate-y-0.5">
                    <img alt="" className="size-[24px]" src={s} />
                  </a>
                ))}
              </div>
            </div>
            {footerCols.map((col, idx) => (
              <div
                key={col.title}
                className={`flex flex-1 flex-col gap-[20px] items-center py-[40px] md:px-6 text-center ${
                  idx < footerCols.length - 1 ? "border-[#e5e3f2] md:border-r" : ""
                }`}
              >
                <p className="font-normal leading-[1.35] text-[#9f98cd] text-[16px] w-full">{col.title}</p>
                <div className="flex flex-col font-medium gap-[8px] items-center md:items-start leading-[1.6] text-[#7a70ba] text-[14px] w-full">
                  {col.items.map((item) => (
                    <a key={item} href="#" className="transition-colors hover:text-[#574c9e]">{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between leading-[1.6] px-5 md:px-10 lg:px-[60px] py-[20px] text-[#574c9e] text-[13px] lg:text-[14px] text-center">
            <p className="font-normal">© 2026 Sekar Wangi. Designed by Aksara Alam. Powered by ✦ Creativity &amp; Nature.</p>
            <div className="flex font-medium gap-[20px] items-center">
              <a href="#" className="transition-colors hover:text-[#928ac7]">License</a>
              <a href="#" className="transition-colors hover:text-[#928ac7]">Privacy</a>
              <a href="#" className="transition-colors hover:text-[#928ac7]">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
