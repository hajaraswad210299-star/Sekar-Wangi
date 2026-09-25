import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsappFab from "@/components/site/WhatsappFab";
import ProductDetail, { type DetailData } from "@/components/site/ProductDetail";
import RelatedProducts, { type RelatedItem } from "@/components/site/RelatedProducts";

export default function ProductDetailPage({
  product,
  related,
}: {
  product?: DetailData;
  related?: RelatedItem[];
}) {
  return (
    <div className="bg-[#f3f2f7] relative w-full overflow-x-hidden">
      <Navbar />
      <ProductDetail product={product} />
      <RelatedProducts items={related} />
      <Footer />
      <WhatsappFab />
    </div>
  );
}
