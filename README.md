# د. غدير مصطفى الحمادي — موقع عيادة الأسنان | Dr. Ghadeer Mustafa Al-Hamadi — Dentist Website

موقع تعريفي كامل بثنائية اللغة (العربية/الإنجليزية) للدكتورة غدير مصطفى الحمادي ومركز الإبتسامة — شارع الزبيري، صنعاء، اليمن.
Production-ready, SEO-optimised bilingual marketing site for a dentist practice, ready for GitHub + Vercel deployment.

---

## ✨ Features

- **Bilingual (RTL/LTR)**: Arabic `/` and English `/en/` with full i18n via a typed locale composable
- **Modern stack**: Nuxt 3 (SSR + static prerender) · Tailwind CSS · Google Fonts (Cairo / Inter)
- **Single source of truth**: `site.config.ts` holds doctor info, phones, hours, geo & map
- **Professional blog**: bilingual AR/EN articles (`/blog` & `/en/blog`) with `Article`/`FAQPage`/`BreadcrumbList` Schema, related posts, share buttons, and full-text `llms-full.txt`
- **Design**: Hero, About, Services, Stats, Experience, Testimonials, FAQ and redesigned Contact (CTA banner, live map iframe, hours & WhatsApp cards)
- **Real business data**: verified phone numbers, Google Maps embed, opening hours, clinic name & university

## 🚀 SEO & Generative Engine Optimization (GSO)

- **Structured data (JSON-LD)** — stacked `@graph` on every page:
  `Dentist / Physician / MedicalBusiness` + `Person` + `WebSite` + `BreadcrumbList` + `FAQPage`; individual posts carry `BlogPosting` + `FAQPage` + `BreadcrumbList`
- **`/llms.txt`** + `<link rel="llms">` — feeds ChatGPT, Gemini & Perplexity with accurate facts
- **`/llms-full.txt`** + `<link rel="llms-full">` — full bilingual article text for LLM ingestion (GSO best practice)
- **AI-friendly robots.txt** — allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and more
- **Local SEO meta**: `geo.region`, `geo.position`, ICBM, hreflang alternates, canonical
- **Open Graph / Twitter** cards with 1200×630 custom OG image
- Freshness signals: `datePublished` / `dateModified`

## 🛡 Security & Performance

- **Hardened headers** via route rules: `Content-Security-Policy` (SCP-tuned for prerendered static content), `Strict-Transport-Security` (HSTS preload), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` / `Cross-Origin-Resource-Policy`
- **Fully prerendered** static HTML (17+ routes incl. every article) → near-zero JS for first paint, small shipped bundle
- Images sized (`width`/`height`), lazy-loaded below the fold, `fetchpriority="high"` on the LCP hero image

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Nuxt 3](https://nuxt.com) |
| Styling | Tailwind CSS (`@nuxtjs/tailwindcss`) |
| Fonts | Cairo + Inter (`@nuxtjs/google-fonts`) |
| Language | TypeScript |
| Deployment | Vercel (static + SSR hybrid) |
| Node | ≥ 18 (`.nvmrc` pinned at 22) |

## 📁 Project Structure

```
├── assets/                 # Global CSS + static images (doctor photo)
├── components/             # AppNav, Hero, About, Services, Stats, Experience, Testimonials, FAQ, Contact, AppFooter, Blog*
├── composables/            # useLocale (translations), useSiteUrl (env-driven base URL)
├── content/posts.ts        # ⭐ All blog posts (typed, bilingual, structured blocks)
├── pages/
│   ├── index.vue           # Arabic page (dir=rtl)
│   ├── en/index.vue        # English page (dir=ltr)
│   ├── blog/               # Arabic blog list + articles ([slug].vue)
│   └── en/blog/            # English blog list + articles ([slug].vue)
├── public/                 # favicon.svg, og-image.jpg
├── server/routes/          # robots.txt, sitemap.xml, llms.txt, llms-full.txt (Nitro)
├── site.config.ts          # ⭐ single source of truth
├── nuxt.config.ts          # runtimeConfig, prerender, security headers, head, fonts
└── tailwind.config.ts
```

## 🧑‍💻 Getting Started

```bash
# install (legacy-peer-deps needed on npm ≥ 9 for this dependency set)
npm install --legacy-peer-deps

# local development
npm run dev

# production build + local preview
npm run build
npm run preview
```

> Node 22 recommended. Use `.nvmrc` / `.engines` if you manage versions.

## 🔑 Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `NUXT_PUBLIC_SITE_URL` | Public URL of the live site (drives og:image, canonical, hreflang, sitemap, robots, llms.txt, JSON-LD). `SITE_URL` is accepted as a legacy fallback | Production only |

```bash
# .env.example
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

Leave it empty locally — the code falls back to `site.config.ts` → `baseUrl` (now `https://ghadeers.com`).

## ☁️ Deploy to Vercel

### 1. Push to GitHub

```bash
git add -A
git commit -m "Production-ready dentist website (Nuxt 3 + Tailwind)"
git push origin main
```

### 2. Vercel auto-deploy

- Connected to `https://github.com/HakimiDev/dr-ghadir-dental` — pushes to `main` build automatically.
- Framework preset: **Nuxt.js** (auto-detected). No build config needed.

### 3. Set the production URL once

- **Environment Variables** → add `NUXT_PUBLIC_SITE_URL = https://ghadeers.com`, then re-deploy.

## 🌐 Go Live (Business Owner — 10 minutes)

1. **Buy a domain** (owned: `ghadeers.com` @ Cloudflare).
2. **Vercel → Project → Settings → Domains** → add the domain (apex + `www`). Vercel auto-issues the HTTPS certificate.
3. **Vercel → Environment Variables** → set `NUXT_PUBLIC_SITE_URL = https://<your-domain>` → **Deploy**.
   > That one variable rewrites every canonical URL, OG image, hreflang, sitemap & llms link. Nothing else needs editing.
4. **Google Search Console**: add property → choose **Domain** and verify via DNS TXT — 2 minutes, stays valid forever; or URL-prefix verification on the deployed domain.
   - Submit your **Sitemap**: `https://<your-domain>/sitemap.xml`
   - Then **Request indexing** for `/`, `/en/`, `/blog`, `/en/blog` and the key articles.
5. **Google Business Profile** (Local SEO): keep the `URL` field equal to the new domain.
6. **Test the link previews** (WhatsApp/Telegram) — OG image is `https://<your-domain>/og-image.png`.
7. **LLM crawlers**: nothing to do — `/robots.txt` already allows all major AI bots and `/llms.txt` + `/llms-full.txt` are auto-updated with every new article.

## ✅ Production Checklist

- [x] Bilingual AR/EN with RTL/LTR handled
- [x] Real contact data (phones, hours, location, map embed)
- [x] Stacked JSON-LD (MedicalBusiness + Person + WebSite + Breadcrumb + FAQ) + per-article BlogPosting/FAQ
- [x] `/llms.txt` + `/llms-full.txt`, AI-bot-friendly `robots.txt`, full `sitemap.xml` with hreflang
- [x] Open Graph / Twitter cards with 1200×630 custom image
- [x] `NUXT_PUBLIC_SITE_URL`-driven canonical links (no hardcoded domain)
- [x] Security headers (CSP, HSTS, nosniff, frame/permission policies)
- [x] Performance: full prerender, sized + lazy images, fetchpriority on LCP
- [ ] Buy domain + add to Vercel (Step 1–3 above)
- [ ] Set `NUXT_PUBLIC_SITE_URL` to the new domain + redeploy
- [ ] Google Search Console domain verification + submit sitemap + request indexing
- [ ] Final WhatsApp/Telegram link-preview check

## 📄 License

All content © د. غدير مصطفى الحمادي. All rights reserved.