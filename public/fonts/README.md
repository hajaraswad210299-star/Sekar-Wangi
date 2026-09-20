# Fonts

- `GeneralSans-*.woff2` — body font (self-hosted from Fontshare).
- `IvyMode-SemiBold.woff2` / `IvyMode-Regular.woff2` — **headings font (Ivy Mode)**.

## Ivy Mode belum terpasang

Ivy Mode adalah font berlisensi, jadi filenya belum bisa diunduh otomatis.
Taruh file-nya di folder ini dengan nama persis:

- `IvyMode-SemiBold.woff2` (dipakai untuk semua heading)
- `IvyMode-Regular.woff2` (opsional)

Sampai file itu ada, heading otomatis fallback ke **Instrument Serif** (mirip secara
visual) supaya layout tetap sesuai. Format `.woff2` paling ringan; kalau punyanya
`.otf`/`.ttf`, bisa dikonversi dulu atau kasih tahu saya untuk sesuaikan `@font-face`.
