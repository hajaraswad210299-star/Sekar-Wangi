import { productAsset } from "@/components/figmaAssets";

export const chartMonths = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep"];

// values on a 7–10 scale (matches the Figma y-axis)
export const chartBuket = [8.3, 8.9, 8.8, 8.6, 9.2, 8.3, 8.7, 8.5, 9.0];
export const chartKado = [7.9, 8.1, 8.0, 8.3, 8.4, 7.9, 8.0, 8.1, 8.3];
export const chartHighlight = 6; // Jul

const sparkA = [6, 7, 5, 8, 6, 9, 7, 10, 6, 8, 7, 9, 6, 8];
const sparkB = [7, 5, 8, 4, 9, 5, 7, 3, 8, 5, 9, 4, 7, 6];
const sparkC = [5, 7, 6, 8, 6, 9, 7, 8, 6, 9, 7, 10, 8, 9];

export const stats = [
  { label: "Total Order", value: "5.480", delta: "+20%", up: true, spark: sparkA, icon: "trend" as const },
  { label: "Bouquets Sold", value: "1.200", delta: "-34%", up: false, spark: sparkB, icon: "bouquet" as const },
  { label: "Today's Revenue", value: "120", delta: "+20%", up: true, spark: sparkC, icon: "users" as const },
];

export const statsProducts = [
  { label: "Total Stok", value: "5.480", delta: "+20%", up: true, spark: sparkA, icon: "trend" as const },
  { label: "Bouquets Sold", value: "1.200", delta: "-34%", up: false, spark: sparkB, icon: "bouquet" as const },
  { label: "Today's Revenue", value: "120", delta: "+20%", up: true, spark: sparkC, icon: "users" as const },
];

const productNames = [
  "Lavender Romance",
  "Purple Garden",
  "Violet Classic",
  "Rose Garden Elegance",
  "Velvet Orchid Bliss",
  "Luxe Lavender Charm",
];

export const productRows = Array.from({ length: 12 }).map((_, i) => ({
  img: [productAsset.p4, productAsset.p8, productAsset.p3, productAsset.p1, productAsset.p9, productAsset.p6][i % 6],
  name: i === 0 ? "Lavender Romance" : productNames[i % productNames.length],
  price: "Rp 230.000",
  category: "Bunga Buket",
  size: "50 CM",
  stock: "430 PCS",
  updated: "12 June 2025",
}));

export const recentOrders = [
  { id: "#ORD-213", img: productAsset.p4, name: "Lavender Romance", date: "12 June 2025", qty: "02 PCS" },
  { id: "#ORD-213", img: productAsset.p8, name: "Purple Garden", date: "12 June 2025", qty: "02 PCS" },
  { id: "#ORD-213", img: productAsset.p3, name: "Violet Classic", date: "12 June 2025", qty: "02 PCS" },
];
