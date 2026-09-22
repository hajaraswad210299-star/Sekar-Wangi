import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsappFab from "@/components/site/WhatsappFab";
import ProductDetail from "@/components/site/ProductDetail";
import RelatedProducts from "@/components/site/RelatedProducts";

export default function ProductDetailPage() {
  return (
    <div className="bg-[#f3f2f7] relative w-full overflow-x-hidden">
      <Navbar />
      <ProductDetail />
      <RelatedProducts />
      <Footer />
      <WhatsappFab />
    </div>
  );
}
