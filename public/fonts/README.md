# Fonts

- `GeneralSans-*.woff2` — body font (self-hosted from Fontshare).
- `IvyMode-SemiBold.woff2` / `IvyMode-Regular.woff2` — **headings font (Ivy Mode)**.

## Ivy Mode belum terpasang

Ivy Mode adalah font berlisensi, jadi filenya belum bisa diunduh otomatis.
Taruh file-nya di folder ini dengan nama persis:

- `IvyMode-SemiBold.woff2` (dipakai untuk semua heading)
- `IvyMode-Regular.woff2` (opsional)

Sampai file itu ada, heading otomatis fallback ke **Instrument Serif** (mirip secara
visual) supaya layout tetap sesuai.

## Format apa saja yang didukung

`@font-face` sudah dikonfigurasi menerima **`.woff2`, `.woff`, `.otf`, dan `.ttf`**
— jadi taruh saja file Ivy Mode-mu dengan salah satu nama di bawah dan langsung
kepake (tidak perlu setting apa pun):

- `IvyMode-SemiBold.woff2` (atau `.woff` / `.otf` / `.ttf`) → untuk semua heading
- `IvyMode-Regular.woff2` (atau `.woff` / `.otf` / `.ttf`) → opsional

`.woff2` paling ringan/optimal untuk web; kalau punyanya `.otf`/`.ttf` tetap jalan.
