# Roast Tape Coffee Co. — Interactive Landing Page

Landing page interaktif untuk brand specialty coffee **Roast Tape Coffee Co.**, dibangun dengan estetika lakban kraft, kolase kertas, dan segel robek.

Dokumen acuan:

- [`PRD_ROAST_TAPE_COFFEE_UI.md`](./PRD_ROAST_TAPE_COFFEE_UI.md) — visi produk, design system, dan arsitektur halaman.
- [`IMPLEMENTATION_STEPS_ROAST_TAPE_COFFEE.md`](./IMPLEMENTATION_STEPS_ROAST_TAPE_COFFEE.md) — rencana implementasi 8 fase.

## Tech Stack

| Area | Teknologi |
| :--- | :--- |
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| Motion | Framer Motion, GSAP + ScrollTrigger (`@gsap/react`) |
| Icons | Lucide React |
| Feedback | canvas-confetti |
| Fonts | Fraunces (display), Space Mono (metadata), Plus Jakarta Sans (body) |

## Menjalankan Proyek

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Struktur

```
app/
├── layout.tsx     # Root layout, font loading, metadata
├── page.tsx       # Landing page composition
└── globals.css    # Tailwind import, theme tokens, base styles
```

## Roadmap

- [x] Fase 1.1 — Inisialisasi proyek & dependencies
- [x] Fase 1.2 — Konfigurasi font & tipografi
- [x] Fase 1.3 — Token warna palet kopi
- [ ] Fase 2 — UI primitives (`TapeStrip`, `PaperCard`, `CuppingTag`)
- [ ] Fase 3 — Hero & draw-your-own tape canvas
- [ ] Fase 4 — Wavy marquee & GSAP 3D scroll narrative
- [ ] Fase 5 — Peelable tape voucher
- [ ] Fase 6 — Product showcase & scrapbook wall
- [ ] Fase 7 — Roastery footer & finishing
- [ ] Fase 8 — QA, accessibility & performance audit

## Konvensi Commit

Riwayat dijaga tetap kecil dan bertahap agar setiap progres mudah ditelusuri dan di-review. Format pesan mengikuti [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <ringkasan singkat>

<penjelasan opsional: alasan / dampak perubahan>
```

| Type | Penggunaan |
| :--- | :--- |
| `feat` | Fitur atau komponen UI baru |
| `fix` | Perbaikan bug |
| `style` | Perubahan visual/CSS tanpa mengubah perilaku |
| `refactor` | Restrukturisasi kode tanpa perubahan perilaku |
| `perf` | Optimasi performa |
| `docs` | Dokumentasi (PRD, roadmap, README) |
| `build` | Dependencies, konfigurasi build/tooling |
| `chore` | Pemeliharaan umum |
| `test` | Penambahan atau perbaikan test |

Panduan singkat:

1. Satu commit = satu unit perubahan yang logis (mis. satu komponen, satu fase kecil).
2. Jangan mencampur perubahan formatting masif dengan perubahan fitur.
3. Sertakan alasan pada body commit jika perubahan tidak self-explanatory.
4. Gunakan scope yang konsisten: `theme`, `hero`, `tape`, `products`, `footer`, `a11y`.

## Design Guardrails

- Dilarang memakai hitam murni (`#000000`), hijau, atau ungu di seluruh UI.
- Warna dasar: `#FAF5EE` (canvas), `#F3E8D8` (card), `#28160E` (teks).
- Semua animasi wajib menghormati `prefers-reduced-motion`.
- Target: Lighthouse Performance ≥ 85, Accessibility ≥ 95.
