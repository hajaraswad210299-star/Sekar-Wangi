import {
  asset,
  favorites,
  favoriteTabs,
  stores,
  brandLogos,
} from "@/components/figmaAssets";
import Navbar from "@/components/site/Navbar";
import Reveal from "@/components/site/Reveal";
import Footer from "@/components/site/Footer";
import WhatsappFab from "@/components/site/WhatsappFab";
import {
  IconGlobe,
  IconLeaf,
  IconHeadset,
  IconCalendar,
  IconBag,
  IconPin,
  IconUsers,
  IconHeart,
  IconStar,
  IconArrowLeft,
  IconArrowRight,
} from "@/components/site/icons";
import type { ComponentType, ReactNode, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

/* ------------------------------------------------------------------ */
/*  Layout helpers                                                     */
/* ------------------------------------------------------------------ */

/** Centres content to the 1440 design width while the section background
 *  around it stays full-bleed. */
function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] ${className}`}>{children}</div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature strip                                                      */
/* ------------------------------------------------------------------ */

const featureItems: { title: string; desc: string; Icon: IconType }[] = [
  {
    title: "Jangkauan Luas",
    desc: "Kirim ke lebih dari 200+ kota di indonesia",
    Icon: IconGlobe,
  },
  {
    title: "Bunga Segar",
    desc: "Kami menyediakan 100% bunga segar",
    Icon: IconLeaf,
  },
  {
    title: "Support 24/7",
    desc: "Dukungan customer services 24 jam sehari",
    Icon: IconHeadset,
  },
  {
    title: "Occasions",
    desc: "Buat segala moment menjadi indah",
    Icon: IconCalendar,
  },
];

function FeatureItem({ title, desc, Icon }: (typeof featureItems)[number]) {
  return (
    <div className="flex flex-1 gap-[12px] items-center min-w-px">
      <Icon className="size-[32px] shrink-0 text-[#544997]" />
      <div className="flex flex-1 flex-col items-start min-w-px">
        <p className="font-bold leading-[1.35] text-[#3f425a] text-[16px]">{title}</p>
        <p className="capitalize font-medium leading-[1.6] text-[#7a70ba] text-[14px]">{desc}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero pieces                                                        */
/* ------------------------------------------------------------------ */

const statCards: { num: string; label: string; Icon: IconType }[] = [
  { num: "9.000+", label: "Order/bulan", Icon: IconBag },
  { num: "118+", label: "Wilayah", Icon: IconPin },
  { num: "9.170+", label: "Klien Puas", Icon: IconUsers },
];

function StatCard({ num, label, Icon }: (typeof statCards)[number]) {
  return (
    <div className="flex gap-[16px] items-center">
      <div className="bg-[#e1e2ea] flex items-center justify-center shrink-0 size-[60px]">
        <Icon className="size-[30px] text-[#544997]" />
      </div>
      <div className="flex flex-col font-medium items-start text-[#3f425a]">
        <p className="leading-[1.2] text-[28px] tracking-[-0.56px] whitespace-nowrap">{num}</p>
        <p className="leading-[1.35] text-[12px] tracking-[-0.12px] whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}

function MiniStats() {
  return (
    <div className="flex flex-wrap gap-[30px] items-center">
      <div className="flex gap-[12px] items-center">
        <div className="flex items-center">
          <img alt="" className="mr-[-16px] size-[44px]" height={44} width={44} src={asset.ellipse1} />
          <img alt="" className="mr-[-16px] size-[44px]" height={44} width={44} src={asset.ellipse2} />
          <img alt="" className="size-[44px]" height={44} width={44} src={asset.ellipse3} />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold leading-[1.35] text-[#3f425a] text-[20px] whitespace-nowrap">200rb+</p>
          <div className="flex gap-[4px] items-center">
            <img alt="" className="size-[14px]" src={asset.star} />
            <p className="font-medium leading-[1.35] text-[#3f425a] text-[12px] whitespace-nowrap">4.9 Rating</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="bg-[#928ac7] flex items-center justify-center rounded-[22px] size-[44px]">
          <IconHeart className="size-[22px] text-white" />
        </div>
        <div className="flex flex-col items-start leading-[1.35] text-[#3f425a] whitespace-nowrap">
          <p className="font-semibold text-[20px]">940+</p>
          <p className="font-medium text-[12px]">Happy customer</p>
        </div>
      </div>
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-[16px] lg:gap-[20px] items-center">
      <button className="group bg-[#544997] flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[14px] transition-colors hover:bg-[#443a86]">
        <span className="font-medium leading-[1.35] text-[16px] text-white whitespace-nowrap">Kirim Bunga</span>
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <span className="-scale-y-100 flex-none rotate-180">
            <span className="block h-[12px] w-[19.555px]"><img alt="" className="block max-w-none size-full" src={asset.arrowRight} /></span>
          </span>
        </span>
      </button>
      <button className="group border border-[#483f83] flex gap-[10px] h-[52px] items-center justify-center px-[32px] transition-colors hover:bg-[#483f83]/5">
        <span className="font-medium leading-[1.4] text-[#483f83] text-[16px] whitespace-nowrap">Explore Produk</span>
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <span className="-scale-y-100 flex-none rotate-180">
            <span className="block h-[18.475px] w-[30.106px]"><img alt="" className="block max-w-none size-full" src={asset.arrowRight1} /></span>
          </span>
        </span>
      </button>
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col gap-[24px] items-start">
      <div className="flex flex-col gap-[24px] items-start">
        <h1 className="font-ivy font-semibold text-[#3f425a] text-[36px] sm:text-[44px] lg:text-[48px] xl:text-[64px] leading-[1.1]">
          Pesan Bunga
          <br />
          Mudah dan Cepat
        </h1>
        <p className="font-normal text-[#696f96] text-[15px] sm:text-[16px] leading-[1.35]">
          Kirim karangan bunga &amp; gift ke seluruh Indonesia. Garansi kualitas
          &amp; pengiriman tepat waktu.
        </p>
      </div>
      <HeroButtons />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <div className="bg-[#f3f2f7] relative w-full overflow-x-hidden">
      <Navbar />

      {/* ============================ HERO ============================ */}
      <section className="relative w-full bg-[#f3f2f7] overflow-hidden">
        {/* ---------- Desktop composition (lg+) ---------- */}
        <div className="hidden lg:block mx-auto max-w-[1440px] relative h-[832px]">
          <img alt="" className="absolute left-[27.2%] top-0 h-[761px] w-[72.8%] max-w-none" src={asset.vector} />
          <div className="absolute flex h-[185px] items-center justify-center left-0 top-0 w-[330px]">
            <div className="-scale-y-100 flex-none">
              <div className="h-[185px] opacity-86 relative w-[330px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[189.94%] left-[-17.42%] max-w-none top-[-78.15%] w-[189.51%]" src={asset.desainFlower} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[27.2%] top-0 h-[728px] w-[72.8%]" style={{ backgroundImage: "linear-gradient(225.85579637166063deg, rgba(242, 243, 247, 0.1) 33.91%, rgb(242, 243, 247) 71.597%)" }} />

          <img alt="" className="absolute left-[41.875%] top-[176px] h-[752px] w-[29.375%] object-cover object-top pointer-events-none" src={asset.image17} />
          <img alt="" className="absolute left-[58.125%] top-[176px] h-[658px] w-[26.4%] object-cover object-top pointer-events-none" src={asset.image15} />

          <div className="absolute flex flex-col gap-[80px] items-start left-[60px] top-[136px] w-[608px] max-w-[42.2%] z-10">
            <HeroText />
            <MiniStats />
          </div>

          <div className="absolute flex flex-col gap-[34px] items-start left-[84.5%] top-[106px] z-10">
            {statCards.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ---------- Desktop feature strip (full-bleed) ---------- */}
        <div className="hidden lg:block absolute left-0 top-[728px] w-full bg-[#dfddee]">
          <Container className="flex gap-[60px] items-center px-[60px] py-[22px]">
            {featureItems.map((f) => (
              <FeatureItem key={f.title} {...f} />
            ))}
          </Container>
        </div>

        {/* ---------- Mobile / tablet hero (<lg) ---------- */}
        <div className="lg:hidden relative w-full overflow-hidden">
          <img alt="" className="absolute -right-10 top-0 h-[420px] w-[520px] max-w-none opacity-70 pointer-events-none" src={asset.vector} />
          <Container className="relative px-5 md:px-10 pt-8 pb-10 flex flex-col gap-8">
            <HeroText />
            <div className="relative w-full h-[340px] sm:h-[420px] overflow-hidden rounded-[4px]">
              <img alt="" className="absolute inset-0 size-full object-cover object-top" src={asset.image17} />
            </div>
            <MiniStats />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {statCards.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </Container>
        </div>

        {/* ---------- Mobile feature strip (full-bleed) ---------- */}
        <div className="lg:hidden bg-[#dfddee] w-full">
          <Container className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[22px] px-5 md:px-10 py-[22px]">
            {featureItems.map((f) => (
              <FeatureItem key={f.title} {...f} />
            ))}
          </Container>
        </div>
      </section>

      {/* ======================= FAVORITES ======================= */}
      <section className="w-full bg-[#f3f2f7]">
        <Container className="flex flex-col gap-[40px] lg:gap-[60px] items-center px-5 md:px-10 lg:px-[60px] py-[56px] lg:py-[80px]">
          <Reveal className="flex flex-col gap-[16px] items-center w-full">
            <h2 className="font-ivy font-semibold leading-[1.2] text-[#3f425a] text-[30px] sm:text-[36px] lg:text-[40px] text-center">
              Pilihan Favorit Saat Ini
            </h2>
            <div className="flex flex-wrap gap-[12px] sm:gap-[20px] items-center justify-center">
              {favoriteTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`flex items-center justify-center py-[10px] border-b-2 text-[14px] text-center whitespace-nowrap transition-colors ${
                    i === 0
                      ? "border-[#7a70ba] text-[#3f425a] font-medium"
                      : "border-transparent capitalize text-[#a5a8c0] hover:text-[#7a70ba]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px] w-full">
            {favorites.map((p, i) => (
              <Reveal key={p.name} delay={i * 70} className="h-full">
                <a href="/product/detail" className="group flex flex-col gap-[14px] bg-[#f2f3f7] border border-[#e1e2ea] p-[16px] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(84,73,151,0.5)] hover:border-[#c9c4e6]">
                  <div className="relative w-full overflow-hidden h-[220px] sm:h-[240px] lg:h-[271px]">
                    <img alt={p.name} className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" src={p.img} />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start leading-[1.35] text-[#3f425a] w-full">
                    <p className="font-medium text-[15px] lg:text-[16px]">{p.name}</p>
                    <p className="font-bold text-[18px] lg:text-[20px] whitespace-nowrap">{p.price}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== SPEAK / COLLECTION ==================== */}
      <section className="w-full bg-[#e9e7f3]">
        <Container className="relative flex flex-col lg:flex-row lg:h-[400px] items-center justify-between px-5 md:px-10 lg:px-[60px] py-[40px] gap-8 overflow-hidden">
          <Reveal className="flex flex-col gap-[20px] lg:h-full items-start justify-center relative z-10 max-w-[520px]">
            <h2 className="font-ivy font-semibold leading-[1.2] text-[#3f425a] text-[28px] sm:text-[34px] lg:text-[40px]">
              Biarkan bunga yang berbicara
            </h2>
            <p className="font-normal leading-[1.5] text-[#696f96] text-[15px] sm:text-[16px]">
              Temukan rangkaian bunga segar yang dirancang untuk menyampaikan perasaan Anda.
            </p>
            <a href="/product" className="group flex gap-[12px] items-center">
              <span className="font-medium leading-[1.35] text-[#483f83] text-[16px] whitespace-nowrap">Lihat koleksi</span>
              <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <span className="-scale-y-100 flex-none rotate-180">
                  <span className="block h-[12px] w-[19.555px]"><img alt="" className="block max-w-none size-full" src={asset.arrowRight2} /></span>
                </span>
              </span>
            </a>
          </Reveal>
          <div className="relative lg:absolute lg:h-[401px] lg:right-0 lg:top-[-1px] w-full lg:w-[711px] h-[220px] sm:h-[300px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute lg:h-[100.1%] lg:left-[-61.49%] lg:top-[-0.05%] lg:w-[168.8%] inset-0 size-full object-cover" src={asset.chatgpt} />
            </div>
          </div>
        </Container>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="w-full bg-[#f3f2f7] overflow-hidden">
        <Container className="flex flex-col gap-[36px] lg:gap-[52px] items-start px-5 md:px-10 lg:px-[60px] py-[56px] lg:py-[80px]">
          {/* heading — left aligned to match design */}
          <Reveal className="flex flex-col gap-[8px] lg:gap-[12px] items-start">
            <p className="font-normal leading-[1.35] text-[#696f96] text-[16px] lg:text-[20px]">Testimonial</p>
            <h2 className="font-ivy font-semibold leading-[1.2] text-[#3f425a] text-[30px] sm:text-[36px] lg:text-[40px]">Cerita Mereka</h2>
          </Reveal>

          <div className="flex flex-col gap-[40px] w-full">
            {/* ---- filmstrip: full-bleed centrepiece flanked by thumbnails (xl+) ---- */}
            <div className="hidden xl:flex gap-[24px] items-end justify-center w-full">
              <img alt="" className="h-[152px] w-[204px] object-cover shrink-0" src={asset.image6} />
              <img alt="" className="h-[152px] w-[204px] object-cover shrink-0" src={asset.image13} />
              <Reveal className="flex gap-[40px] items-stretch shrink-0">
                <img alt="" className="h-[380px] w-[296px] object-cover shrink-0" src={asset.image8} />
                <div className="flex flex-col justify-between w-[360px] py-[4px]">
                  <p className="font-normal leading-[1.5] text-[#3c3e3e] text-[22px] tracking-[-0.66px]">
                    Bunganya bagus banget, pas sampai masih fresh dan penataannya juga rapi. Yang paling suka itu warnanya ternyata lebih cantik dari yang saya bayangkan.
                  </p>
                  <div className="flex flex-col gap-[6px] leading-[1.2]">
                    <p className="font-medium text-[#1d211d] text-[20px] tracking-[-0.6px]">Alya Prameswari</p>
                    <p className="font-normal text-[#879687] text-[16px] tracking-[-0.48px]">Marketing Manager</p>
                  </div>
                </div>
              </Reveal>
              <img alt="" className="h-[152px] w-[204px] object-cover shrink-0" src={asset.image7} />
              <img alt="" className="h-[380px] w-[204px] object-cover shrink-0" src={asset.image11} />
            </div>

            {/* ---- stacked layout (< xl) ---- */}
            <Reveal className="xl:hidden flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-stretch w-full max-w-[760px]">
              <div className="relative w-full md:w-[296px] shrink-0 overflow-hidden h-[320px] md:h-[380px]">
                <img alt="" className="absolute inset-0 size-full object-cover" src={asset.image8} />
              </div>
              <div className="flex flex-1 flex-col justify-between min-w-px gap-6 md:h-[380px]">
                <p className="font-normal leading-[1.5] text-[#3c3e3e] text-[20px] sm:text-[22px] tracking-[-0.6px]">
                  Bunganya bagus banget, pas sampai masih fresh dan penataannya juga rapi. Yang paling suka itu warnanya ternyata lebih cantik dari yang saya bayangkan.
                </p>
                <div className="flex flex-col gap-[6px] leading-[1.2]">
                  <p className="font-medium text-[#1d211d] text-[18px] lg:text-[20px] tracking-[-0.6px]">Alya Prameswari</p>
                  <p className="font-normal text-[#879687] text-[15px] lg:text-[16px] tracking-[-0.48px]">Marketing Manager</p>
                </div>
              </div>
            </Reveal>

            {/* ---- nav ---- */}
            <div className="flex gap-[12px] items-center w-full">
              <button className="group flex items-center gap-[10px]">
                <IconArrowLeft className="size-[22px] text-[#cbcccd] transition-colors group-hover:text-[#7a70ba]" />
                <span className="font-medium leading-[1.2] text-[#cbcccd] text-[16px] tracking-[-0.48px] transition-colors group-hover:text-[#7a70ba]">Prev</span>
              </button>
              <div className="flex flex-1 items-center justify-center gap-[8px] px-[40px]">
                <span className="size-[10px] rounded-full bg-[#d8d5ea]" />
                <span className="bg-[#7a70ba] h-[10px] rounded-[90px] w-[28px]" />
                <span className="size-[10px] rounded-full bg-[#d8d5ea]" />
                <span className="size-[10px] rounded-full bg-[#d8d5ea]" />
                <span className="size-[10px] rounded-full bg-[#d8d5ea]" />
                <span className="size-[10px] rounded-full bg-[#d8d5ea]" />
              </div>
              <button className="group flex items-center gap-[10px]">
                <span className="font-medium leading-[1.2] text-[#8d9091] text-[16px] tracking-[-0.48px]">Next</span>
                <IconArrowRight className="size-[22px] text-[#8d9091] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================== STORES ======================== */}
      <section className="w-full bg-[#f3f2f7]">
        <Container className="flex flex-col gap-[40px] lg:gap-[60px] items-start px-5 md:px-10 lg:px-[60px] py-[56px] lg:py-[100px]">
          <Reveal className="flex flex-col sm:flex-row gap-[16px] sm:items-center justify-center w-full">
            <div className="flex flex-1 flex-col gap-[4px] items-start min-w-px">
              <p className="font-medium leading-[1.35] text-[#696f96] text-[16px] lg:text-[20px]">Toko Kami</p>
              <h2 className="font-ivy font-semibold leading-[1.2] text-[#3f425a] text-[28px] sm:text-[34px] lg:text-[40px]">Cari Berdasarkan Toko Terdekat</h2>
            </div>
            <div className="border-[#c3c5d5] border-b flex gap-[20px] items-center shrink-0">
              <button className="border-[#7a70ba] border-b-2 flex items-center justify-center py-[10px]">
                <span className="font-medium leading-[1.35] text-[#3f425a] text-[16px] whitespace-nowrap">Toko Bunga</span>
              </button>
              <button className="flex items-center justify-center py-[10px] border-b-2 border-transparent transition-colors hover:border-[#c9c4e6]">
                <span className="font-medium leading-[1.35] text-[#a5a8c0] text-[16px] whitespace-nowrap transition-colors hover:text-[#7a70ba]">Toko Kado</span>
              </button>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px] w-full">
            {stores.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 70} className="h-full">
                <a href="/product" className="group flex flex-col bg-[#f2f3f7] border border-[#e1e2ea] h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(84,73,151,0.5)] hover:border-[#c9c4e6]">
                  <div className="h-[200px] lg:h-[296px] relative w-full overflow-hidden">
                    <div className="absolute bg-[#f0f1f5] inset-0" />
                    <img alt={s.name} className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" src={s.img} />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-center px-[16px] py-[12px] w-full">
                    <div className="flex gap-[6px] items-center w-full">
                      <IconPin className="size-[18px] shrink-0 text-[#7a70ba]" />
                      <p className="capitalize leading-[1.6] text-[#696f96] text-[14px] whitespace-nowrap">Toko Bunga</p>
                    </div>
                    <p className="font-medium leading-[1.5] text-[#3f425a] text-[16px] lg:text-[18px] whitespace-nowrap">{s.name}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================= TRUSTED BY ======================= */}
      <section className="w-full bg-[#f3f2f7]">
        <Container className="flex flex-col gap-[24px] items-start justify-center px-5 md:px-10 lg:px-[60px] py-[40px]">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full">
            <p className="font-medium leading-[1.2] text-[#3f425a] text-[16px] lg:text-[18px] tracking-[-0.36px]">
              Trusted by 70,000+ global companies
            </p>
            <div className="flex flex-wrap gap-[16px] items-center">
              <div className="flex gap-[4px] items-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="size-[20px] text-[#f5a623]" />
                ))}
              </div>
              <p className="font-medium leading-[1.2] text-[#939397] text-[20px] tracking-[-0.8px] whitespace-nowrap">4.9 / 5.0</p>
              <span className="hidden sm:block h-[24px] w-px bg-[#d9d9dd]" />
              <div className="flex gap-[6px] items-center">
                <span className="bg-[#cbcbcd] flex items-center justify-center p-[4px] rounded-[90px]">
                  <img alt="" className="size-[16px]" src={asset.googleLogo} />
                </span>
                <span className="bg-[#cbcbcd] flex items-center justify-center p-[4px] rounded-[90px]">
                  <img alt="" className="size-[16px]" src={asset.frame30} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[40px] gap-y-[24px] items-center justify-center sm:justify-between py-[20px] w-full">
            {brandLogos.map((b, i) => (
              <img
                key={i}
                alt=""
                src={b.src}
                style={{ width: b.w, height: b.h }}
                className="opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================= FOOTER ========================= */}
      <Footer />

      <WhatsappFab />
    </div>
  );
}
