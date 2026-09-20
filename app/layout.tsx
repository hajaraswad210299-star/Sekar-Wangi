import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sekar Wangi — Florist & Flora",
  description:
    "Pesan bunga mudah dan cepat. Kirim karangan bunga & gift ke seluruh Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${instrumentSerif.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
