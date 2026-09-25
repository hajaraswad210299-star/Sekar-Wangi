import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsappFab from "@/components/site/WhatsappFab";
import ProductDetail, { type DetailData } from "@/components/site/ProductDetail";
import RelatedProducts from "@/components/site/RelatedProducts";

export default function ProductDetailPage({ product }: { product?: DetailData }) {
  return (
    <div className="bg-[#f3f2f7] relative w-full overflow-x-hidden">
      <Navbar />
      <ProductDetail product={product} />
      <RelatedProducts />
      <Footer />
      <WhatsappFab />
    </div>
  );
}
