"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { productAsset } from "@/components/figmaAssets";
import { IconArrowLeft, IconChevronDown } from "@/components/site/icons";
import { IconUpload, IconImage, IconSave, IconGrip, IconDoc } from "@/components/admin/icons";
import { createProduct, updateProduct } from "@/app/admin/products/new/actions";

type Img = { url: string; file: File | null };

export type InitialProduct = {
  title: string;
  size: string;
  jenis: string;
  tags: string[];
  thumbUrl: string | null;
  imageUrls: string[];
  stok: string;
  harga: string;
  detail: string;
  care: string;
  shipping: string;
};

/* --------------------------- small building blocks --------------------------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="text-[#3f425a] text-[14px] font-medium">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-white border border-[#e1e2ea] rounded-[10px] px-[16px] py-[12px] text-[15px] text-[#3f425a] placeholder:text-[#a5a8c0] outline-none transition-colors focus:border-[#928ac7]";

function Toolbar() {
  const btn =
    "flex items-center justify-center size-[30px] rounded-[7px] text-[#696f96] transition-colors hover:bg-[#eceaf6] hover:text-[#544997]";
  return (
    <div className="flex flex-wrap items-center gap-[4px] border-b border-[#e1e2ea] px-[10px] py-[8px]">
      <button type="button" className="flex items-center gap-[4px] h-[30px] px-[8px] rounded-[7px] text-[#696f96] text-[13px] transition-colors hover:bg-[#eceaf6]">
        16px <IconChevronDown className="size-[13px]" />
      </button>
      <span className="w-px h-[18px] bg-[#e1e2ea] mx-[4px]" />
      <button type="button" className={btn + " font-bold"}>B</button>
      <button type="button" className={btn + " italic font-serif"}>I</button>
      <button type="button" className={btn + " underline"}>U</button>
      <span className="w-px h-[18px] bg-[#e1e2ea] mx-[4px]" />
      {["M3 6h18M3 12h12M3 18h16", "M3 6h18M6 12h12M4 18h16", "M3 6h18M9 12h12M5 18h16", "M3 6h18M3 12h18M3 18h18"].map((d, i) => (
        <button key={i} type="button" className={btn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="size-[16px]">
            <path d={d} />
          </svg>
        </button>
      ))}
      <span className="w-px h-[18px] bg-[#e1e2ea] mx-[4px]" />
      <button type="button" className={btn}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="size-[16px]">
          <path d="M10 14a4 4 0 0 0 5.6 0l2.4-2.4a4 4 0 0 0-5.6-5.6L11 7.4" />
          <path d="M14 10a4 4 0 0 0-5.6 0L6 12.4a4 4 0 0 0 5.6 5.6L13 16.6" />
        </svg>
      </button>
    </div>
  );
}

function RichSection({
  title,
  heading,
  onHeading,
  body,
  onBody,
}: {
  title: string;
  heading: string;
  onHeading: (v: string) => void;
  body: string;
  onBody: (v: string) => void;
}) {
  return (
    <div className="flex items-stretch gap-[10px]">
      <span className="hidden md:flex items-center text-[#c3c5d5]"><IconGrip className="size-[16px]" /></span>
      <div className="flex-1 min-w-px bg-white border border-[#ececf1] rounded-[14px] p-[18px] flex flex-col gap-[16px]">
        <p className="flex items-center gap-[8px] font-semibold text-[#544997] text-[15px]">
          <IconDoc className="size-[17px]" /> {title}
        </p>
        <Field label="Heading">
          <input value={heading} onChange={(e) => onHeading(e.target.value)} className={inputCls} placeholder="Header Tittle..." />
        </Field>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[#3f425a] text-[14px] font-medium">Body Text</span>
          <div className="rounded-[10px] border border-[#e1e2ea] overflow-hidden">
            <Toolbar />
            <textarea
              value={body}
              onChange={(e) => onBody(e.target.value)}
              className="w-full h-[130px] resize-none bg-[#f7f7fb] px-[16px] py-[12px] text-[15px] text-[#3f425a] placeholder:text-[#a5a8c0] outline-none"
              placeholder="Describe your content..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- page --------------------------------- */

function formatRp(v: string) {
  const n = Number(v.replace(/\D/g, ""));
  if (!n) return "Rp 180.000";
  return "Rp " + n.toLocaleString("id-ID");
}

export default function AdminCreateProduct({
  initial,
  productId,
}: {
  initial?: InitialProduct;
  productId?: string;
} = {}) {
  const router = useRouter();
  const isEdit = !!productId;
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [size, setSize] = useState(initial?.size ?? "");
  const [jenis, setJenis] = useState(initial?.jenis ?? "Buket Bunga");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(
    initial?.tags ?? ["Buket Bunga", "Ulang tahun", "Wisuda"],
  );
  const [thumb, setThumb] = useState<Img | null>(
    initial?.thumbUrl ? { url: initial.thumbUrl, file: null } : null,
  );
  const [images, setImages] = useState<Img[]>(
    initial
      ? initial.imageUrls.map((u) => ({ url: u, file: null }))
      : [
          { url: productAsset.p6, file: null },
          { url: productAsset.p4, file: null },
          { url: productAsset.p3, file: null },
        ],
  );
  const [stok, setStok] = useState(initial?.stok ?? "");
  const [harga, setHarga] = useState(initial?.harga ?? "");
  const [detailH, setDetailH] = useState("");
  const [detailB, setDetailB] = useState(initial?.detail ?? "");
  const [careH, setCareH] = useState("");
  const [careB, setCareB] = useState(initial?.care ?? "");
  const [shipH, setShipH] = useState("");
  const [shipB, setShipB] = useState(initial?.shipping ?? "");

  const thumbInput = useRef<HTMLInputElement>(null);
  const galleryInput = useRef<HTMLInputElement>(null);

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagInput("");
  };

  const priceLabel = formatRp(harga);
  const previewImg = thumb?.url ?? images[0]?.url ?? productAsset.p8;
  const merge = (h: string, b: string) => [h.trim(), b.trim()].filter(Boolean).join("\n\n") || null;

  const submit = (statusValue: "draft" | "published") => {
    setStatus(null);
    const fd = new FormData();
    fd.set("title", title);
    fd.set("size_cm", size.replace(/\D/g, ""));
    fd.set("jenis", jenis);
    fd.set("categories", JSON.stringify(tags));
    fd.set("price", harga.replace(/\D/g, ""));
    fd.set("stock", stok.replace(/\D/g, ""));
    fd.set("detail", merge(detailH, detailB) ?? "");
    fd.set("care", merge(careH, careB) ?? "");
    fd.set("shipping", merge(shipH, shipB) ?? "");
    fd.set("status", statusValue);
    if (thumb?.file) fd.set("thumbnail", thumb.file);
    else if (thumb?.url) fd.set("thumbExisting", thumb.url);
    const existing: string[] = [];
    images.forEach((im) => (im.file ? fd.append("image", im.file) : existing.push(im.url)));
    fd.set("existingImages", JSON.stringify(existing));

    startTransition(async () => {
      const res = productId ? await updateProduct(productId, fd) : await createProduct(fd);
      if (res.ok) {
        setStatus({
          type: "ok",
          msg: res.warning
            ? "Tersimpan (dengan catatan): " + res.warning
            : isEdit
              ? "Perubahan berhasil disimpan!"
              : "Produk berhasil disimpan!",
        });
        setTimeout(() => {
          router.push("/admin/products");
          router.refresh();
        }, 900);
      } else {
        setStatus({ type: "err", msg: "Gagal menyimpan: " + res.error });
      }
    });
  };

  return (
    <main className="bg-white lg:rounded-[20px] min-h-screen lg:min-h-[calc(100vh-16px)] overflow-hidden">
      {/* topbar */}
      <div className="flex items-center gap-[14px] px-[24px] lg:px-[32px] h-[68px] border-b border-[#eef0f3]">
        <a
          href="/admin/products"
          aria-label="Kembali"
          className="flex items-center justify-center size-[38px] rounded-[10px] border border-[#e1e2ea] text-[#3f425a] transition-all duration-200 hover:bg-[#f2f3f7] hover:-translate-x-0.5"
        >
          <IconArrowLeft className="size-[18px]" />
        </a>
        <p className="text-[16px]">
          <span className="text-[#8b8f99]">Product</span>
          <span className="text-[#c3c5d5] mx-[8px]">/</span>
          <span className="font-semibold text-[#1d211d]">{isEdit ? "Edit Product" : "Add New Product"}</span>
        </p>
      </div>

      {status && (
        <div
          className={`mx-[24px] lg:mx-[32px] mt-[20px] rounded-[10px] px-[16px] py-[12px] text-[14px] ${
            status.type === "ok" ? "bg-[#eafaf0] text-[#1a7f46] border border-[#bfe9d0]" : "bg-[#fdeaf0] text-[#c0173f] border border-[#f6c6d5]"
          }`}
        >
          {status.msg}
        </div>
      )}

      <div className="px-[24px] lg:px-[32px] py-[24px] flex flex-col xl:flex-row gap-[24px]">
        {/* ------------------------------ left ------------------------------ */}
        <div className="flex-1 min-w-px flex flex-col gap-[24px]">
          {/* product details */}
          <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px] lg:p-[24px] flex flex-col gap-[20px]">
            <p className="font-semibold text-[#1d211d] text-[16px]">Product Details</p>

            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows={2}
              placeholder="Tambahkan Judul Product…"
              className="w-full resize-none bg-[#f1f1f6] rounded-[12px] px-[22px] py-[20px] font-ivy text-[28px] leading-[1.2] text-[#3f425a] placeholder:text-[#b3aed6] outline-none transition-shadow focus:ring-2 focus:ring-[#928ac7]/40"
            />

            <Field label="Size Diameter">
              <div className="relative">
                <input value={size} onChange={(e) => setSize(e.target.value)} className={inputCls + " pr-[52px]"} placeholder="E.g 40" inputMode="numeric" />
                <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#8b8f99] text-[14px]">CM</span>
              </div>
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <Field label="Jenis">
                <div className="relative">
                  <select
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}
                    className={inputCls + " appearance-none pr-[40px] cursor-pointer"}
                  >
                    <option>Buket Bunga</option>
                    <option>Karangan Papan</option>
                    <option>Kado &amp; Cakes</option>
                  </select>
                  <IconChevronDown className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[16px] text-[#8b8f99] pointer-events-none" />
                </div>
              </Field>
              <Field label="Kategori">
                <div className="relative">
                  <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                    className={inputCls + " pr-[44px]"}
                    placeholder="Buket Bungan Balon"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    aria-label="Tambah kategori"
                    className="absolute right-[8px] top-1/2 -translate-y-1/2 flex items-center justify-center size-[30px] rounded-[8px] text-[#8b8f99] transition-colors hover:bg-[#eceaf6] hover:text-[#544997]"
                  >
                    ↵
                  </button>
                </div>
              </Field>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-[8px] -mt-[8px]">
                {tags.map((t) => (
                  <span key={t} className="group flex items-center gap-[8px] bg-[#efeaf9] text-[#544997] text-[13px] font-medium pl-[12px] pr-[8px] py-[6px] rounded-full">
                    {t}
                    <button
                      type="button"
                      onClick={() => setTags(tags.filter((x) => x !== t))}
                      aria-label={`Hapus ${t}`}
                      className="flex items-center justify-center size-[16px] rounded-full text-[#7a70ba] transition-colors hover:bg-[#544997] hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* thumbnail */}
            <Field label="Thumbnail Cover">
              <button
                type="button"
                onClick={() => thumbInput.current?.click()}
                className="group relative w-full overflow-hidden rounded-[12px] border border-dashed border-[#cbc7e0] bg-[#f7f7fb] transition-colors hover:border-[#928ac7] hover:bg-[#f1eff9]"
              >
                {thumb ? (
                  <img alt="" src={thumb.url} className="w-full h-[190px] object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-[10px] py-[44px]">
                    <span className="flex items-center justify-center size-[46px] rounded-full bg-white text-[#544997] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                      <IconUpload className="size-[22px]" />
                    </span>
                    <p className="text-[#3f425a] text-[14px] font-medium">Click to Upload or drag and drop</p>
                    <p className="text-[#8b8f99] text-[13px]">PNG, JPG, or GIF (max. 800x400px)</p>
                  </div>
                )}
              </button>
              <input
                ref={thumbInput}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setThumb({ url: URL.createObjectURL(f), file: f });
                }}
              />
            </Field>
          </div>

          {/* image gallery */}
          <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px] lg:p-[24px]">
            <p className="flex items-center gap-[8px] font-semibold text-[#544997] text-[15px] mb-[16px]">
              <IconImage className="size-[18px]" /> IMAGE
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[14px]">
              {images.map((im, i) => (
                <div key={i} className="group relative aspect-square rounded-[12px] overflow-hidden bg-[#efeef4]">
                  <img alt="" src={im.url} className="size-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setImages(images.filter((_, x) => x !== i))}
                    className="absolute top-[8px] right-[8px] flex items-center justify-center size-[26px] rounded-full bg-black/50 text-white text-[14px] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[#f3205c]"
                    aria-label="Hapus foto"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => galleryInput.current?.click()}
                className="group flex flex-col items-center justify-center gap-[8px] aspect-square rounded-[12px] border border-dashed border-[#cbc7e0] bg-[#f7f7fb] text-[#8b8f99] transition-colors hover:border-[#928ac7] hover:bg-[#f1eff9]"
              >
                <span className="flex items-center justify-center size-[38px] rounded-full bg-white text-[#544997] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  <IconUpload className="size-[18px]" />
                </span>
                <span className="text-[13px] font-medium text-[#3f425a]">Tambahkan Foto</span>
                <span className="text-[12px]">PNG, (max. 800x400px)</span>
              </button>
              <input
                ref={galleryInput}
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => {
                  const files = Array.from(e.target.files ?? []).map((f) => ({ url: URL.createObjectURL(f), file: f }));
                  if (files.length) setImages([...images, ...files]);
                }}
              />
            </div>
          </div>

          {/* rich sections */}
          <p className="text-[#544997] text-[14px] font-medium">Informasi Pokok Produk</p>
          <RichSection title="Detail Buket" heading={detailH} onHeading={setDetailH} body={detailB} onBody={setDetailB} />
          <RichSection title="Perawatan Bunga" heading={careH} onHeading={setCareH} body={careB} onBody={setCareB} />
          <RichSection title="Pengiriman & Pengembalian" heading={shipH} onHeading={setShipH} body={shipB} onBody={setShipB} />
        </div>

        {/* ------------------------------ right ------------------------------ */}
        <div className="w-full xl:w-[330px] shrink-0 flex flex-col gap-[20px]">
          {/* pricing */}
          <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px] flex flex-col gap-[16px]">
            <p className="font-semibold text-[#1d211d] text-[16px]">Pricing &amp; Stok</p>
            <Field label="Stok">
              <input value={stok} onChange={(e) => setStok(e.target.value)} className={inputCls} placeholder="e.g 200" inputMode="numeric" />
            </Field>
            <Field label="Harga">
              <div className="relative">
                <input value={harga} onChange={(e) => setHarga(e.target.value)} className={inputCls + " pr-[44px]"} placeholder="0.00" inputMode="numeric" />
                <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#8b8f99] text-[14px]">Rp</span>
              </div>
            </Field>
            <div className="bg-white border border-[#ececf1] rounded-[12px] p-[6px]">
              <p className="text-[#8b8f99] text-[12px] px-[10px] pt-[6px]">Preview Harga Akhir</p>
              <div className="flex items-center justify-between bg-[#fafafa] rounded-[10px] px-[14px] py-[12px] mt-[6px]">
                <span className="text-[#3f425a] text-[14px] font-medium">Harga Akhir</span>
                <span className="text-[#544997] text-[15px] font-bold">{priceLabel}</span>
              </div>
            </div>
          </div>

          {/* preview card */}
          <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px]">
            <p className="font-semibold text-[#1d211d] text-[16px] mb-[14px]">Pratinjau Kartu Produk</p>
            <div className="flex flex-col gap-[12px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[12px] bg-[#efeef4]">
                <img alt="" src={previewImg} className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col items-center gap-[4px] text-center pb-[4px]">
                <p className="text-[#3f425a] text-[15px] font-medium">{title.trim() || "Pesona Lavender Mewah"}</p>
                <p className="text-[#544997] text-[18px] font-bold">{priceLabel}</p>
              </div>
            </div>
          </div>

          {/* actions */}
          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              disabled={pending}
              onClick={() => submit("draft")}
              className="group flex-1 flex items-center justify-center gap-[8px] h-[48px] rounded-[10px] border border-[#e1e2ea] text-[#3f425a] text-[14px] font-medium transition-colors hover:bg-[#f2f3f7] disabled:opacity-50"
            >
              Save as Draft
              <IconSave className="size-[17px] text-[#8b8f99] transition-colors group-hover:text-[#544997]" />
            </button>
            <button
              type="button"
              disabled={pending}
              onClick={() => submit("published")}
              className="group flex-1 flex items-center justify-center gap-[8px] h-[48px] rounded-[10px] bg-[#544997] text-white text-[14px] font-medium transition-colors hover:bg-[#443a86] disabled:opacity-60"
            >
              {pending ? "Menyimpan…" : "Publish"}
              {!pending && (
                <span className="transition-transform duration-500 group-hover:rotate-180">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="size-[17px]">
                    <circle cx="12" cy="12" r="8.4" />
                    <path d="M3.7 12h16.6M12 3.6c2.3 2.3 3.6 5.3 3.6 8.4s-1.3 6.1-3.6 8.4c-2.3-2.3-3.6-5.3-3.6-8.4S9.7 5.9 12 3.6Z" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
