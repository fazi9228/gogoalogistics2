# GoGoa Logistics — Website

Production website for **GoGoa Logistics**, a courier and logistics business based in Margao, Goa. Built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

Design direction: the **"Operations Desk"** concept — utilitarian, information-dense and trustworthy, like a real high-volume logistics operator. Deliberately *not* a SaaS/startup landing page.

---

## Tech stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS 3**
- Fully responsive, accessible (skip link, focus rings, reduced-motion support, semantic landmarks)
- SEO: per-page metadata, Open Graph, JSON-LD structured data (`CourierService`, `FAQPage`, `BreadcrumbList`, `BlogPosting`), dynamic `sitemap.xml` and `robots.txt`

---

## Project structure

```
gogoa-logistics/
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout: header, footer, fonts, global SEO
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Tailwind + base styles
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   ├── robots.ts             # robots.txt
│   │   ├── not-found.tsx         # 404 page
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/
│   │       ├── page.tsx          # Blog listing
│   │       └── [slug]/page.tsx   # Blog post (statically generated)
│   ├── components/
│   │   ├── layout/               # Header, Footer, Logo, NavLinks, MobileMenu, FloatingWhatsApp
│   │   ├── home/                 # Homepage sections
│   │   ├── contact/ContactForm.tsx
│   │   ├── seo/JsonLd.tsx        # Structured data helpers
│   │   └── ui/                   # Container, Section, Button, Icon, PageHeader
│   └── lib/
│       ├── site.ts               # ⭐ Business config — phone, email, address, WhatsApp
│       ├── nav.ts                # Navigation items
│       ├── services.ts           # Services data
│       ├── content.ts            # Areas, process, testimonials, FAQs, why-choose-us
│       └── blog.ts               # Blog posts + helpers
├── tailwind.config.ts            # Design tokens (navy / off-white / orange / grey)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## ⭐ Before you go live — replace the placeholders

All business details live in **one file**: [`src/lib/site.ts`](src/lib/site.ts). Update these:

| Field | Current placeholder | Set to |
|---|---|---|
| `phoneDisplay` | `+91 XXXXX XXXXX` | Your display phone number |
| `phoneHref` | `tel:+91XXXXXXXXXX` | `tel:+91` + your 10-digit number |
| `whatsappNumber` | `91XXXXXXXXXX` | `91` + your 10-digit number (digits only) |
| `email` | `bookings@gogoalogistics.com` | Your real email |
| `address` | Margao placeholder | Your real counter address |
| `url` | `https://www.gogoalogistics.com` | Your final domain |

Other quick edits:
- **Google Map**: in [`src/app/contact/page.tsx`](src/app/contact/page.tsx), replace the `iframe` `src` with your exact Google Maps "Embed a map" URL.
- **Footer note**: remove the "placeholders — update before launch" line in [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx) once details are real.
- **Social links**: set Facebook/Instagram URLs in `site.social`.

> The contact form validates input, then hands the enquiry to WhatsApp with details pre-filled (so no lead is lost without a backend). To capture submissions server-side instead, add a Next.js Route Handler (`src/app/api/contact/route.ts`) and POST to it from `ContactForm.tsx`.

---

## 1. Local setup

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended) and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # lint
```

---

## 2. GitHub setup

```bash
git init
git add .
git commit -m "Initial commit: GoGoa Logistics website"

# create an empty repo on github.com first, then:
git branch -M main
git remote add origin https://github.com/<your-username>/gogoa-logistics.git
git push -u origin main
```

---

## 3. Deploy to Vercel

Vercel is the easiest host for Next.js.

1. Go to <https://vercel.com> and sign in with GitHub.
2. **Add New → Project** and import the `gogoa-logistics` repo.
3. Vercel auto-detects Next.js — keep the defaults:
   - Framework preset: **Next.js**
   - Build command: `next build`
   - Output: handled automatically
4. Click **Deploy**. You'll get a `*.vercel.app` URL in ~1 minute.
5. Push to `main` again any time — Vercel redeploys automatically.

> After deploying, set the production URL in `src/lib/site.ts` (`url`) so canonical tags, the sitemap and structured data use the right domain, then commit & push.

---

## 4. Connect your GoDaddy domain (gogoalogistics.com)

You bought the domain at GoDaddy and you're hosting on Vercel — so you point GoDaddy's DNS at Vercel.

### Step A — Add the domain in Vercel
1. Open your project in Vercel → **Settings → Domains**.
2. Enter `gogoalogistics.com` and click **Add**. Add `www.gogoalogistics.com` too.
3. Vercel shows the exact DNS records to create. They are normally:
   - **A record** — Host `@` → `76.76.21.21`
   - **CNAME record** — Host `www` → `cname.vercel-dns.com`
   - *(Vercel may show slightly different values — always use the values Vercel displays for your project.)*

### Step B — Add those records in GoDaddy
1. Sign in at <https://godaddy.com> → **My Products → Domains → gogoalogistics.com → DNS** (Manage DNS).
2. **A record:**
   - Type `A`, Name `@`, Value `76.76.21.21`, TTL `1 Hour`. (Edit the existing `@` A record rather than adding a duplicate.)
3. **CNAME record:**
   - Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`, TTL `1 Hour`.
4. Remove any GoDaddy "Parked"/Forwarding records that conflict with the above.
5. Save.

### Step C — Verify
- Back in Vercel → **Settings → Domains**, the domain shows **Valid Configuration** once DNS propagates (a few minutes to a couple of hours).
- Set one as primary (commonly redirect `www` → apex, or vice-versa) in Vercel's domain settings.
- Vercel issues the HTTPS (SSL) certificate automatically — no action needed.

**Alternative (simplest):** instead of editing individual records, change the GoDaddy **nameservers** to Vercel's and let Vercel manage DNS. Vercel will show the nameservers to use under the domain's setup. Use either the records method *or* the nameserver method — not both.

---

## SEO notes

- Target keywords are wired into titles/descriptions: *courier service Goa, logistics company Goa, international courier Goa, parcel delivery Goa, DTDC franchise Goa.*
- Each page sets its own `title`, `description`, canonical and Open Graph tags.
- Structured data is emitted via [`src/components/seo/JsonLd.tsx`](src/components/seo/JsonLd.tsx).
- `sitemap.xml` and `robots.txt` are generated automatically and reference `site.url`.
- **Add an OG share image:** drop a `1200×630` PNG at `public/og.png` and add `images: ["/og.png"]` to the `openGraph` block in `src/app/layout.tsx`.

## Adding blog articles

Add an entry to the `blogPosts` array in [`src/lib/blog.ts`](src/lib/blog.ts). The listing page, post page, sitemap and structured data pick it up automatically. To scale up later, swap the array for MDX files or a CMS without changing the page components.
