"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { asset } from "@/components/figmaAssets";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(next);
    router.refresh();
  };

  const inputCls =
    "w-full bg-white border border-[#e1e2ea] rounded-[10px] px-[16px] py-[12px] text-[15px] text-[#3f425a] placeholder:text-[#a5a8c0] outline-none transition-colors focus:border-[#928ac7]";

  return (
    <div className="min-h-screen w-full bg-[#f3f2f7] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-[420px] bg-white border border-[#e5e3f2] rounded-[16px] shadow-[0_24px_60px_-30px_rgba(84,73,151,0.4)] p-[28px] sm:p-[36px] flex flex-col gap-[24px]">
        <div className="flex flex-col items-center gap-[8px] text-center">
          <span className="flex items-center justify-center size-[52px] rounded-[14px] bg-[#544997]">
            <img alt="" src={asset.logo} className="size-[30px] brightness-0 invert" />
          </span>
          <h1 className="font-ivy font-semibold text-[#3f425a] text-[26px] leading-[1.2] mt-[6px]">
            Masuk Admin
          </h1>
          <p className="text-[#696f96] text-[14px]">Sekar Wangi — panel pengelolaan produk</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-[16px]">
          <label className="flex flex-col gap-[8px]">
            <span className="text-[#3f425a] text-[14px] font-medium">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCls}
              placeholder="admin@sekarwangi.com"
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span className="text-[#3f425a] text-[14px] font-medium">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputCls}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          {error && (
            <p className="rounded-[10px] bg-[#fdeaf0] text-[#c0173f] border border-[#f6c6d5] px-[14px] py-[10px] text-[13px]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-[4px] flex items-center justify-center h-[48px] rounded-[10px] bg-[#544997] text-white text-[15px] font-medium transition-colors hover:bg-[#443a86] disabled:opacity-60"
          >
            {loading ? "Memproses…" : "Masuk"}
          </button>
        </form>

        <a href="/" className="text-center text-[#7a70ba] text-[13px] transition-colors hover:text-[#544997]">
          ← Kembali ke situs
        </a>
      </div>
    </div>
  );
}
