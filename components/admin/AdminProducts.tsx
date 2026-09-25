import { statsProducts, productRows } from "@/components/admin/adminData";
import StatCard from "@/components/admin/StatCard";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { IconKebab } from "@/components/admin/icons";
import { IconArrowRight } from "@/components/site/icons";
import { listAdminProducts, productImage, rupiah } from "@/lib/products";

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function AdminProducts() {
  const db = await listAdminProducts();
  const rows =
    db.length > 0
      ? db.map((p) => ({
          img: productImage(p),
          name: p.title,
          price: rupiah(p.price),
          category: p.categories[0] ?? p.jenis ?? "—",
          size: p.size_cm ? `${p.size_cm} CM` : "—",
          stock: `${p.stock} PCS`,
          updated: fmtDate(p.updated_at),
        }))
      : productRows;

  return (
    <main className="bg-white lg:rounded-[20px] min-h-screen lg:min-h-[calc(100vh-16px)] overflow-hidden">
      <AdminTopbar page="Products" />

      <div className="px-[24px] lg:px-[32px] py-[28px] flex flex-col gap-[24px]">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-ivy font-semibold text-[#1d211d] text-[30px] lg:text-[34px] leading-tight">
              Koleksi Produk &amp; Buket
            </h1>
            <p className="text-[#8b8f99] text-[15px]">
              Atur ketersediaan bunga, katalog seasonal bundle, publikasi, dan pesanan.
            </p>
          </div>
          <a href="/admin/products/new" className="group bg-[#544997] flex items-center justify-center gap-[10px] h-[48px] px-[22px] rounded-[10px] shrink-0 transition-colors hover:bg-[#443a86]">
            <span className="font-medium text-white text-[15px] whitespace-nowrap">Tambah Produk</span>
            <span className="relative flex items-center justify-center size-[18px] text-white transition-transform duration-300 group-hover:rotate-90">
              <span className="absolute w-[14px] h-[2px] bg-white rounded-full" />
              <span className="absolute h-[14px] w-[2px] bg-white rounded-full" />
            </span>
          </a>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {statsProducts.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* products table */}
        <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] overflow-hidden">
          <div className="flex items-center justify-between px-[20px] lg:px-[24px] py-[18px]">
            <p className="font-semibold text-[#1d211d] text-[17px]">Recent Floral Orders</p>
            <a href="#" className="group flex items-center gap-[6px] text-[#8b8f99] text-[14px] transition-colors hover:text-[#544997]">
              View All (38 orders)
              <IconArrowRight className="size-[15px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left">
              <thead>
                <tr className="bg-[#f2f2f5] text-[#8b8f99] text-[13px]">
                  <th className="font-medium px-[24px] py-[12px]">Bouquet Composition</th>
                  <th className="font-medium px-[12px] py-[12px]">Harga katalog</th>
                  <th className="font-medium px-[12px] py-[12px]">Kategori &amp; Dimensi</th>
                  <th className="font-medium px-[12px] py-[12px]">Stok Produk</th>
                  <th className="font-medium px-[12px] py-[12px]">Pembaruan</th>
                  <th className="font-medium px-[16px] py-[12px] w-[48px]" />
                </tr>
              </thead>
              <tbody>
                {rows.map((p, i) => (
                  <tr key={i} className="border-t border-[#eef0f3] transition-colors hover:bg-white">
                    <td className="px-[24px] py-[13px]">
                      <div className="flex items-center gap-[12px]">
                        <span className="size-[38px] rounded-[8px] overflow-hidden bg-[#efeef4] shrink-0">
                          <img alt="" src={p.img} className="size-full object-cover" />
                        </span>
                        <span className="text-[#3f425a] text-[14px] font-medium whitespace-nowrap">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-[12px] py-[13px] text-[#3f425a] text-[14px] whitespace-nowrap">{p.price}</td>
                    <td className="px-[12px] py-[13px]">
                      <div className="flex items-center gap-[10px]">
                        <span className="bg-[#efeaf9] text-[#544997] text-[13px] font-medium px-[12px] py-[5px] rounded-full whitespace-nowrap">
                          {p.category}
                        </span>
                        <span className="text-[#8b8f99] text-[13px] whitespace-nowrap">{p.size}</span>
                      </div>
                    </td>
                    <td className="px-[12px] py-[13px] text-[#8b8f99] text-[14px] whitespace-nowrap">{p.stock}</td>
                    <td className="px-[12px] py-[13px] text-[#3f425a] text-[14px] whitespace-nowrap">{p.updated}</td>
                    <td className="px-[16px] py-[13px]">
                      <button
                        aria-label="Aksi"
                        className="flex items-center justify-center size-[30px] rounded-[8px] text-[#8b8f99] transition-colors hover:bg-[#eceaf6] hover:text-[#544997]"
                      >
                        <IconKebab className="size-[15px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
