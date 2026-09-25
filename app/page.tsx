import HomePage from "@/components/HomePage";
import { listPublishedProducts, productImage, rupiah } from "@/lib/products";
import { favorites as demoFavorites } from "@/components/figmaAssets";

export default async function Page() {
  const published = await listPublishedProducts(8);
  const favorites =
    published.length > 0
      ? published.slice(0, 4).map((p) => ({
          img: productImage(p),
          name: p.title,
          price: rupiah(p.price),
          href: `/product/detail?id=${p.id}`,
        }))
      : demoFavorites.map((f) => ({ ...f, href: "/product/detail" }));

  return <HomePage favorites={favorites} />;
}
