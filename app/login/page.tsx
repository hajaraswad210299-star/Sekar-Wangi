import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "@/components/site/LoginForm";

export const metadata: Metadata = {
  title: "Masuk Admin — Sekar Wangi",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f3f2f7]" />}>
      <LoginForm />
    </Suspense>
  );
}
