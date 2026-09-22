// Shared asset paths (exported from Figma) and static content for the Home page.
// Kept in one place so both server and client components can use them.

export const asset = {
  group: "/figma/imgGroup.svg",
  group1: "/figma/imgGroup1.svg",
  group2: "/figma/imgGroup2.svg",
  desainFlower: "/figma/imgDesainTanpaJudul41.png",
  ellipse1: "/figma/imgEllipse1.png",
  ellipse2: "/figma/imgEllipse2.png",
  ellipse3: "/figma/imgEllipse3.png",
  image17: "/figma/imgImage17.png",
  image15: "/figma/imgImage15.png",
  image1: "/figma/imgImage1.png",
  image2: "/figma/imgImage2.png",
  image3: "/figma/imgImage3.png",
  frame60: "/figma/imgFrame60.png",
  chatgpt: "/figma/imgChatGpt.png",
  image6: "/figma/imgImage6.png",
  image13: "/figma/imgImage13.png",
  image8: "/figma/imgImage8.png",
  image7: "/figma/imgImage7.png",
  image11: "/figma/imgImage11.png",
  frame61: "/figma/imgFrame61.png",
  frame62: "/figma/imgFrame62.png",
  frame63: "/figma/imgFrame63.png",
  frame64: "/figma/imgFrame64.png",
  frame65: "/figma/imgFrame65.png",
  frame66: "/figma/imgFrame66.png",
  frame67: "/figma/imgFrame67.png",
  frame68: "/figma/imgFrame68.png",
  flagId: "/figma/imgTwemojiFlagIndonesia.svg",
  frame: "/figma/imgFrame.svg",
  logo: "/figma/imgGroup3.svg",
  searchIcon: "/figma/imgFrame1.svg",
  group4: "/figma/imgGroup4.svg",
  line1: "/figma/imgLine1.svg",
  group5: "/figma/imgGroup5.svg",
  group6: "/figma/imgGroup6.svg",
  vector: "/figma/imgVector.svg",
  arrowRight: "/figma/imgArrowRight.svg",
  arrowRight1: "/figma/imgArrowRight1.svg",
  star: "/figma/imgFrame2.svg",
  group7: "/figma/imgGroup7.svg",
  group8: "/figma/imgGroup8.svg",
  group9: "/figma/imgGroup9.svg",
  group10: "/figma/imgGroup10.svg",
  group11: "/figma/imgGroup11.svg",
  group12: "/figma/imgGroup12.svg",
  group13: "/figma/imgGroup13.svg",
  group14: "/figma/imgGroup14.svg",
  group15: "/figma/imgGroup15.svg",
  group16: "/figma/imgGroup16.svg",
  arrowRight2: "/figma/imgArrowRight2.svg",
  elementsArrowLeft: "/figma/imgElements.svg",
  ellipse4: "/figma/imgEllipse4.svg",
  arrowRight3: "/figma/imgArrowRight3.svg",
  pinIcon: "/figma/imgGroup17.svg",
  starFilled: "/figma/imgElements1.svg",
  line3: "/figma/imgLine3.svg",
  googleLogo: "/figma/imgGoogleLogo.svg",
  frame30: "/figma/imgFrame30.svg",
  brand1: "/figma/imgVector1.svg",
  brand2: "/figma/imgVector2.svg",
  brand3: "/figma/imgVector3.svg",
  brand4: "/figma/imgVector4.svg",
  brand5: "/figma/imgVector5.svg",
  brand6: "/figma/imgGroup18.svg",
  brand7: "/figma/imgGroup19.svg",
  whatsapp: "/figma/imgIconsaxWhatsapp.svg",
  social1: "/figma/imgFrame3.svg",
  social2: "/figma/imgFrame4.svg",
  social3: "/figma/imgFrame5.svg",
  group20: "/figma/imgGroup20.svg",
  group21: "/figma/imgGroup21.svg",
} as const;

export const navLinks = ["Home", "Product", "Location", "Moment"] as const;

export const favorites = [
  { img: asset.image1, name: "Sunset Orchid", price: "Rp 52.000" },
  { img: asset.image2, name: "Lavender Dreams", price: "Rp 38.500" },
  { img: asset.image3, name: "Golden Daisy", price: "Rp 47.750" },
  { img: asset.frame60, name: "Cherry Blossom Charm", price: "Rp 50.300" },
] as const;

export const favoriteTabs = [
  "Fresh Flower",
  "Duka Cita",
  "Ucapan Selamat",
  "Standing Flower",
] as const;

export const stores = [
  { img: asset.frame61, name: "Jakarta Pusat" },
  { img: asset.frame62, name: "Semarang" },
  { img: asset.frame63, name: "Yogyakarta" },
  { img: asset.frame64, name: "Bandung" },
  { img: asset.frame65, name: "Bali" },
  { img: asset.frame66, name: "Medan" },
  { img: asset.frame67, name: "Surabaya" },
  { img: asset.frame68, name: "Tangerang" },
] as const;

export const brandLogos = [
  { src: asset.brand1, w: 116.517, h: 28 },
  { src: asset.brand2, w: 127.663, h: 40 },
  { src: asset.brand3, w: 121.514, h: 40 },
  { src: asset.brand4, w: 153.398, h: 42 },
  { src: asset.brand5, w: 183.051, h: 36 },
  { src: asset.brand6, w: 118.519, h: 32 },
  { src: asset.brand7, w: 152.124, h: 28 },
] as const;

/* ------------------------------------------------------------------ */
/*  Product page                                                       */
/* ------------------------------------------------------------------ */

export const productAsset = {
  hero: "/figma/product/hero.png",
  p1: "/figma/product/p1.png",
  p2: "/figma/product/p2.png",
  p3: "/figma/product/p3.png",
  p4: "/figma/product/p4.png",
  p5: "/figma/product/p5.png",
  p6: "/figma/product/p6.png",
  p7: "/figma/product/p7.png",
  p8: "/figma/product/p8.png",
  p9: "/figma/product/p9.png",
  blog1: "/figma/product/blog1.png",
  blog2: "/figma/product/blog2.png",
  blog3: "/figma/product/blog3.png",
  blog4: "/figma/product/blog4.png",
} as const;

export type Product = { img: string; name: string; price: string };

export const productTabs = [
  "Bunga",
  "Karangan Papan Bunga",
  "kado dan Cakes",
] as const;

export const productsByTab: Record<string, Product[]> = {
  Bunga: [
    { img: productAsset.p1, name: "Rose Garden Elegance", price: "Rp 85.000" },
    { img: productAsset.p2, name: "Rose Garden Elegance", price: "Rp 70.000" },
    { img: productAsset.p3, name: "Rose Garden Elegance", price: "Rp 77.500" },
    { img: productAsset.p4, name: "Luxe Lavender Charm", price: "Rp 90.000" },
    { img: productAsset.p5, name: "Luxe Lavender Charm", price: "Rp 75.000" },
    { img: productAsset.p6, name: "Luxe Lavender Charm", price: "Rp 82.500" },
    { img: productAsset.p7, name: "Velvet Orchid Bliss", price: "Rp 78.000" },
    { img: productAsset.p8, name: "Velvet Orchid Bliss", price: "Rp 80.000" },
    { img: productAsset.p9, name: "Velvet Orchid Bliss", price: "Rp 87.500" },
  ],
  "Karangan Papan Bunga": [
    { img: productAsset.p8, name: "Papan Duka Cita", price: "Rp 350.000" },
    { img: productAsset.p2, name: "Papan Selamat Sukses", price: "Rp 425.000" },
    { img: productAsset.p6, name: "Papan Pernikahan", price: "Rp 500.000" },
    { img: productAsset.p9, name: "Papan Grand Opening", price: "Rp 475.000" },
    { img: productAsset.p3, name: "Papan Wisuda", price: "Rp 300.000" },
    { img: productAsset.p5, name: "Papan Ucapan Selamat", price: "Rp 390.000" },
  ],
  "kado dan Cakes": [
    { img: productAsset.p6, name: "Bloom & Cake Box", price: "Rp 265.000" },
    { img: productAsset.p1, name: "Sweet Surprise Hamper", price: "Rp 320.000" },
    { img: productAsset.p4, name: "Birthday Cake Bloom", price: "Rp 285.000" },
    { img: productAsset.p7, name: "Gift & Flower Set", price: "Rp 240.000" },
  ],
};

export const detailAsset = {
  main: "/figma/product/detail-main.png",
  t1: "/figma/product/detail-t1.png",
  t2: "/figma/product/detail-t2.png",
  t3: "/figma/product/detail-t3.png",
  t4: "/figma/product/detail-t4.png",
  t5: "/figma/product/detail-t5.png",
} as const;

export const detailProduct = {
  name: "Velvet Orchid Rose",
  badge: "Terlaris",
  category: "Bouquet Bunga",
  size: "Ukuran: 50 cm",
  rating: 4,
  ratingValue: "4.8",
  price: "Rp 240.000",
  installment: "Atau 4 pembayaran mudah sebesar Rp30.000 dengan",
  sold: "89 orang telah membeli produk ini",
  stock: 27,
  gallery: [
    detailAsset.main,
    productAsset.p1,
    productAsset.p7,
    productAsset.p3,
    productAsset.p9,
  ],
  tabs: [
    {
      label: "Detail Buket",
      body: [
        "Rangkaian bunga bernuansa lavender yang memadukan bunga-bunga segar dalam komposisi yang lembut dan elegan. Perpaduan warna ungu, putih, dan sentuhan hijau membuat buket ini terasa segar tanpa terlihat berlebihan.",
        "Dibuat dengan susunan bunga yang natural dan wrapping premium, Lavender Garden Bouquet cocok untuk hadiah ulang tahun, ucapan selamat, anniversary, maupun sekadar memberikan kejutan kecil untuk seseorang yang berarti.",
        "Setiap buket dirangkai berdasarkan ketersediaan bunga terbaik pada hari pemesanan, sehingga bentuk dan detail rangkaian dapat sedikit berbeda dari foto. Namun, karakter warna, kualitas, dan kesan keseluruhannya tetap kami jaga.",
      ],
    },
    {
      label: "Perawatan",
      body: [
        "Segera potong ujung batang sekitar 2 cm secara diagonal dan letakkan buket dalam vas berisi air bersih setibanya pesanan.",
        "Ganti air setiap 1–2 hari, jauhkan dari sinar matahari langsung, buah matang, dan hembusan AC agar bunga tetap segar lebih lama.",
      ],
    },
    {
      label: "Pengiriman & Pengembalian",
      body: [
        "Pengiriman same-day tersedia untuk pemesanan sebelum pukul 15.00 di area Jabodetabek. Estimasi tiba menyesuaikan lokasi dan jam operasional kurir.",
        "Karena produk mudah rusak, pengembalian hanya berlaku bila terjadi kesalahan pengiriman atau kerusakan saat diterima — cukup hubungi kami disertai foto dalam 2 jam pertama.",
      ],
    },
  ],
} as const;

export const relatedProducts: Product[] = [
  { img: productAsset.p4, name: "Pesona Lavender Mewah", price: "Rp 90.000" },
  { img: productAsset.p8, name: "Pesona Lavender Mewah", price: "Rp 75.000" },
  { img: productAsset.p9, name: "Pesona Lavender Mewah", price: "Rp 82.500" },
  { img: productAsset.p6, name: "Pesona Lavender Mewah", price: "Rp 82.500" },
  { img: productAsset.p5, name: "Pesona Lavender Mewah", price: "Rp 78.000" },
];

export const filterKategori = [
  "Buket Fresh Flower",
  "Buket Artificial",
  "Rangkaian Bunga Meja",
  "Buket Balon",
  "Buket Bunga Box",
  "Buket Rustic",
  "Bunga Papan",
] as const;

export const filterRegions = [
  {
    group: "Jabodetabek",
    items: ["Jakarta Pusat", "Bogor", "Depok", "Tangerang", "Bekasi"],
  },
  {
    group: "Jawa Barat",
    items: ["Bandung", "Cimahi", "Cirebon", "Sukabumi"],
  },
] as const;

export const journalPosts = [
  {
    img: productAsset.blog1,
    tag: "Tips & Inspiration",
    title: "Cara Memilih Bunga Tepat",
    desc: "Kenali makna, warna, dan karakter bunga agar rangkaian yang dipilih benar-benar mewakili perasaanmu.",
  },
  {
    img: productAsset.blog2,
    tag: "Flower Guide",
    title: "Makna Di Balik Warna Bunga",
    desc: "Setiap warna membawa cerita berbeda. Dari merah yang penuh gairah hingga ungu yang anggun.",
  },
  {
    img: productAsset.blog3,
    tag: "Buket & Hadiah",
    title: "Bunga Untuk Setiap Momen",
    desc: "Ulang tahun, anniversary, ucapan terima kasih, atau sekadar ingin membuat seseorang tersenyum.",
  },
  {
    img: productAsset.blog4,
    tag: "Tips & Inspirasi",
    title: "Buket Cantik Tanpa Berlebihan",
    desc: "Komposisi yang tepat bukan soal seberapa banyak bunga, tetapi bagaimana menyusunnya dengan rasa.",
  },
  {
    img: productAsset.blog1,
    tag: "Flower Guide",
    title: "Merawat Bunga Agar Tahan Lama",
    desc: "Beberapa langkah sederhana membuat rangkaian bunga tetap segar berhari-hari lebih lama.",
  },
] as const;

export const footerCols = [
  {
    title: "Belanja",
    items: ["Bunga", "Karangan Bunga Papan", "Kado & Cakes"],
  },
  {
    title: "Pusat Bantuan",
    items: [
      "Cara Pemesanan",
      "Frequently Answer Question (FAQ)",
      "Pengiriman & Pengembalian",
      "Hubungi Kami",
      "Kebijakan Privasi",
      "Akun Saya",
    ],
  },
  {
    title: "Lokasi Kami",
    items: [
      "Jakarta",
      "Tangerang",
      "Bandung",
      "Surabaya",
      "Yogyakarta",
      "Bali",
      "120+ Kota di Indonesia",
    ],
  },
] as const;
