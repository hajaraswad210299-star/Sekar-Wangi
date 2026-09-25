import { asset, productAsset } from "@/components/figmaAssets";
import Navbar from "@/components/site/Navbar";
import Reveal from "@/components/site/Reveal";
import Footer from "@/components/site/Footer";
import WhatsappFab from "@/components/site/WhatsappFab";
import FeatureStrip from "@/components/site/FeatureStrip";
import ProductCatalog, { type CatalogProduct } from "@/components/site/ProductCatalog";
import BlogJournal from "@/components/site/BlogJournal";
import { IconHome, IconTruck } from "@/components/site/icons";
import { listPublishedProducts, productImage, rupiah } from "@/lib/products";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#dfddee]">
      {/* faint grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#ccc9e2 1px, transparent 1px), linear-gradient(90deg, #ccc9e2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* decorative flower art (top-left) */}
      <div className="absolute -left-6 -top-4 w-[240px] h-[150px] opacity-80 pointer-events-none hidden sm:block -scale-y-100">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-[190%] left-[-17%] max-w-none top-[-78%] w-[190%]"
            src={asset.desainFlower}
          />
        </div>
      </div>

      {/* hero image (desktop, right) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[36%] xl:w-[34%]">
        <img alt="" className="size-full object-cover object-center" src={productAsset.hero} />
        <div
          className="absolute inset-y-0 left-0 w-[140px]"
          style={{ backgroundImage: "linear-gradient(to right, #dfddee, rgba(223,221,238,0))" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[60px] py-[44px] lg:py-[72px]">
        <Reveal className="flex flex-col gap-[20px] items-start lg:pr-[36%]">
          {/* breadcrumb */}
          <div className="flex gap-[8px] items-center text-[15px] leading-[1.35]">
            <IconHome className="size-[18px] text-[#7a70ba]" />
            <a href="/" className="text-[#696f96] transition-colors hover:text-[#7a70ba]">Home</a>
            <span className="text-[#a5a8c0]">/</span>
            <a href="/product" className="text-[#696f96] transition-colors hover:text-[#7a70ba]">Produk</a>
            <span className="text-[#a5a8c0]">/</span>
            <span className="font-semibold text-[#544997]">Product Collections</span>
          </div>

          <h1 className="font-ivy font-semibold text-[#3f425a] text-[36px] sm:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.08]">
            Koleksi untuk Setiap Momen
          </h1>
          <p className="capitalize font-normal text-[#696f96] text-[15px] sm:text-[16px] leading-[1.5] max-w-[560px]">
            Dari Kejutan Kecil Hingga Perayaan Yang Berarti, Temukan Bunga Yang Tepat Untuk Setiap Cerita.
          </p>

          <button className="group bg-[#544997] flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[14px] transition-colors hover:bg-[#443a86]">
            <span className="font-medium leading-[1.35] text-[16px] text-white whitespace-nowrap">
              Pilih Tujuan Pengiriman
            </span>
            <IconTruck className="size-[20px] text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        {/* hero image (mobile / tablet) */}
        <div className="lg:hidden mt-8 relative w-full h-[280px] sm:h-[340px] overflow-hidden rounded-[6px]">
          <img alt="" className="absolute inset-0 size-full object-cover object-center" src={productAsset.hero} />
        </div>
      </div>
    </section>
  );
}

export default async function ProductPage() {
  const published = await listPublishedProducts(60);
  const dbProducts: CatalogProduct[] = published.map((p) => ({
    img: productImage(p),
    name: p.title,
    price: rupiah(p.price),
    href: `/product/detail?id=${p.id}`,
    categories: p.categories,
    jenis: p.jenis,
  }));

  return (
    <div className="bg-[#f3f2f7] relative w-full overflow-x-clip">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <ProductCatalog dbProducts={dbProducts} />
      <FeatureStrip />
      <BlogJournal />
      <Footer />
      <WhatsappFab />
    </div>
  );
}
