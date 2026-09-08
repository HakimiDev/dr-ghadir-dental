# د. غدير مصطفى الحمادي — موقع عيادة الأسنان | Dr. Ghadir Mustafa Al-Hamadi — Dentist Website

موقع تعريفي كامل بثنائية اللغة (العربية/الإنجليزية) للدكتورة غدير مصطفى الحمادي ومركز الإبتسامة — شارع الزبيري، صنعاء، اليمن.
Production-ready, SEO-optimised bilingual marketing site for a dentist practice, ready for GitHub + Vercel deployment.

---

## ✨ Features

- **Bilingual (RTL/LTR)**: Arabic `/` and English `/en/` with full i18n via a typed locale composable
- **Modern stack**: Nuxt 3 (SSR + static prerender) · Tailwind CSS · Google Fonts (Cairo / Inter)
- **Single source of truth**: `site.config.ts` holds doctor info, phones, hours, geo & map
- **Design**: Hero, About, Services, Stats, Experience, Testimonials, FAQ and redesigned Contact (CTA banner, live map iframe, hours & WhatsApp cards)
- **Real business data**: verified phone numbers, Google Maps embed, opening hours, clinic name & university

## 🚀 SEO & Generative Engine Optimization (GSO)

- **Structured data (JSON-LD)** — stacked `@graph` on every page:
  `Dentist / Physician / MedicalBusiness` + `Person` + `WebSite` + `BreadcrumbList` + `FAQPage`
- **`/llms.txt`** + `<link rel="llms">` — feeds ChatGPT, Gemini & Perplexity with accurate facts
- **AI-friendly robots.txt** — allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and more
- **Local SEO meta**: `geo.region`, `geo.position`, ICBM, hreflang alternates, canonical
- **Open Graph / Twitter** cards with 1200×630 custom OG image
- Freshness signals: `datePublished` / `dateModified`

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
├── components/             # AppNav, Hero, About, Services, Stats, Experience, Testimonials, FAQ, Contact, AppFooter
├── composables/            # useLocale (translations), useSiteUrl (env-driven base URL)
├── pages/
│   ├── index.vue           # Arabic page (dir=rtl)
│   └── en/index.vue        # English page (dir=ltr)
├── public/                 # favicon.svg, og-image.png
├── server/routes/          # robots.txt, sitemap.xml, llms.txt (Nitro)
├── site.config.ts          # ⭐ single source of truth
├── nuxt.config.ts          # runtimeConfig, prerender, head, fonts
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
| `SITE_URL` | Public URL of the live site (used by og:image, canonical, hreflang, sitemap, robots, llms.txt, JSON-LD) | Production only |

```bash
# .env.example
SITE_URL=https://your-domain.com
```

Leave it empty locally — the code falls back to `site.config.ts` → `baseUrl`.

## ☁️ Deploy to Vercel

### 1. Push to GitHub

```bash
git add -A
git commit -m "Initial commit: bilingual dentist website (Nuxt 3 + Tailwind)"
git branch -M main
git remote add origin git@github.com:<your-username>/dr-ghadir-dental.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset is auto-detected as **Nuxt.js** — leave defaults.
3. **Environment Variables** → add:
   - `SITE_URL` = your real domain (e.g. `https://dr-ghadir-dental.vercel.app`)
4. Deploy. Vercel runs `npm install` + `npm run build` and serves the Nitro serverless output automatically.

### 3. Custom domain (recommended)

- Add your domain under **Project → Settings → Domains**, or configure the apex `www` DNS `CNAME`/`A` records pointed at `cname.vercel-dns.com`.
- Set the same domain in `SITE_URL` and re-deploy so all canonical/OG links match.
- The HTTPS certificate is issued automatically by Vercel.

## ✅ Production Checklist

- [x] Bilingual AR/EN with RTL/LTR handled
- [x] Real contact data (phones, hours, location, map embed)
- [x] Stacked JSON-LD (LocalBusiness + Person + WebSite + Breadcrumb + FAQ)
- [x] `/llms.txt`, AI-bot-friendly `robots.txt`, `sitemap.xml`
- [x] Open Graph / Twitter cards with 1200×630 custom image
- [x] `SITE_URL`-driven canonical links (no hardcoded domain)
- [ ] Set `SITE_URL` to the real Vercel/domain URL before launch
- [ ] Verify preview in WhatsApp/Telegram after deploying

## 📄 License

All content © د. غدير مصطفى الحمادي. All rights reserved.