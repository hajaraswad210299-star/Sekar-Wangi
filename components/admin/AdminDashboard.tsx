import { stats, recentOrders } from "@/components/admin/adminData";
import StatCard from "@/components/admin/StatCard";
import RevenueChart from "@/components/admin/RevenueChart";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { IconKebab } from "@/components/admin/icons";
import { IconCalendar, IconChevronDown, IconArrowRight } from "@/components/site/icons";

export default function AdminDashboard() {
  return (
    <main className="bg-white lg:rounded-[20px] min-h-screen lg:min-h-[calc(100vh-16px)] overflow-hidden">
      <AdminTopbar page="Dashboard" />

      <div className="px-[24px] lg:px-[32px] py-[28px] flex flex-col gap-[24px]">
        {/* greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-ivy font-semibold text-[#1d211d] text-[30px] lg:text-[34px] leading-tight">
              Good Morning, Yuna
            </h1>
            <p className="text-[#8b8f99] text-[15px]">
              Here&apos;s your latest performance, insights, and growth overview.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center gap-[10px] h-[46px] px-[16px] rounded-[10px] border border-[#e1e2ea] text-[#3f425a] text-[14px] transition-colors hover:bg-[#f2f3f7]">
              <IconCalendar className="size-[18px] text-[#544997]" />
              <span className="font-medium whitespace-nowrap">Thursday, 13 August 2026</span>
              <IconChevronDown className="size-[16px] text-[#8b8f99]" />
            </button>
            <button
              aria-label="Menu"
              className="flex items-center justify-center size-[46px] rounded-[10px] border border-[#e1e2ea] text-[#3f425a] transition-colors hover:bg-[#f2f3f7]"
            >
              <IconKebab className="size-[16px]" />
            </button>
          </div>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* chart */}
        <RevenueChart />

        {/* recent orders */}
        <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] overflow-hidden">
          <div className="flex items-center justify-between px-[20px] lg:px-[24px] py-[18px]">
            <p className="font-semibold text-[#1d211d] text-[17px]">Recent Floral Orders</p>
            <a href="#" className="group flex items-center gap-[6px] text-[#8b8f99] text-[14px] transition-colors hover:text-[#544997]">
              View All (38 orders)
              <IconArrowRight className="size-[15px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="bg-[#f2f2f5] text-[#8b8f99] text-[13px]">
                  <th className="font-medium px-[24px] py-[12px]">ID Order</th>
                  <th className="font-medium px-[12px] py-[12px]">Bouquet Composition</th>
                  <th className="font-medium px-[12px] py-[12px]">Tanggal Order</th>
                  <th className="font-medium px-[24px] py-[12px]">Total Order</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#eef0f3] transition-colors hover:bg-white cursor-pointer"
                  >
                    <td className="px-[24px] py-[14px] text-[#3f425a] text-[14px] whitespace-nowrap">{o.id}</td>
                    <td className="px-[12px] py-[14px]">
                      <div className="flex items-center gap-[12px]">
                        <span className="size-[38px] rounded-[8px] overflow-hidden bg-[#efeef4] shrink-0">
                          <img alt="" src={o.img} className="size-full object-cover" />
                        </span>
                        <span className="text-[#3f425a] text-[14px] font-medium">{o.name}</span>
                      </div>
                    </td>
                    <td className="px-[12px] py-[14px] text-[#696f96] text-[14px] whitespace-nowrap">{o.date}</td>
                    <td className="px-[24px] py-[14px] text-[#3f425a] text-[14px] whitespace-nowrap">{o.qty}</td>
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
