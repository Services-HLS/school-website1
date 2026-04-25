# Learning World Montessori — Premium 3D Redesign

A complete UI/UX transformation of learningworldmontessori.co.uk into an elegant, animated multi-page web app inspired by high-end UK private schools. All original copy and imagery is preserved exactly; only the presentation, motion, and structure change.

---

## Brand Direction

**Palette**
- Background: warm ivory `#F7F2E8`
- Primary surface: deep forest green `#1F3A2E`
- Secondary surface: deep navy `#0F1B2D`
- Accent: muted gold `#C9A961`
- Text: ink `#0E1413` on ivory, ivory on dark surfaces

**Typography**
- Headings: Cormorant Garamond (serif, elegant)
- Body: Inter (clean sans-serif)
- Loaded via Google Fonts in the root route

**Visual language**
- Soft glassmorphism on the navbar and floating cards
- Gold hairline dividers and underline reveals
- Layered depth shadows, subtle gradients, blurred ambient blobs
- No cartoonish or bright colors — calm and premium throughout

---

## Site Map (separate routes, each with own meta)

```
/              Home — hero, intro, philosophy, testimonials carousel, CTA
/about         About — full intro paragraphs + ethos
/curriculum    Curriculum / Programs — Montessori method, classroom & outdoor
/fees          Fees & Charges — premium animated pricing cards
/gallery       Gallery — masonry grid with lightbox
/contact       Contact — form, map, WhatsApp, address
```

Smooth page-to-page transitions via a Framer Motion `AnimatePresence` overlay (gold/ivory wipe + fade) wrapped around the root `<Outlet/>`.

---

## Content Sourcing (preserved verbatim)

I will scrape the following pages from the live site and reuse text + images exactly as they appear:
- Homepage (already captured)
- /about, /curriculum equivalents
- Classroom Activities and Outdoor Activities pages
- Gallery images
- Contact page (address, phone, WhatsApp number, email)

The WhatsApp floating button will be wired to the real number once scraped. Fees content (numbers and tiers) will be supplied by you — I'll build the layout with clearly marked placeholder values to swap in.

---

## Page-by-Page Design

### Global Shell
- Sticky glassmorphism navbar (ivory blur, gold underline on active link, hides on scroll-down / reveals on scroll-up)
- Floating WhatsApp button bottom-right with soft pulse ring
- Lenis smooth scrolling site-wide
- Custom subtle cursor halo on desktop (disabled on touch)
- Dark elegant footer with fade-in on enter

### Home `/`
- **Hero**: full-bleed kids photo with parallax + dark overlay; serif headline "Come Home to Learning World Montessori" animates in (mask-reveal + fade up); subline + two CTAs ("Book a Visit", "Our Curriculum") with gold glow + lift on hover; scroll cue at bottom
- **Quote band**: Maria Montessori quote in large serif italic with gold rule
- **Intro**: two-column with image (3D tilt on scroll) and original paragraphs
- **Pillars row**: 4 floating glass cards — Quality Day Care · OFSTED Registered · Home-made Food · Funding Available (staggered fade + scale, mouse-tilt)
- **Approach teaser**: link to /curriculum with cinematic image reveal
- **Testimonials**: horizontal carousel of all 6 reviews from the live site, each in a tilt card with avatar
- **CTA strip**: book a visit / contact

### About `/about`
- Editorial split layout, large serif title with gold rule
- Paragraphs reveal line-by-line on scroll
- Side image with parallax depth and gold frame offset

### Curriculum `/curriculum`
- "The Montessori Method" intro (verbatim from source)
- Two large 3D feature cards: **Classroom / Learning Activities** and **Outdoor / Club Activities** — hover tilt, depth shadow, click → expanded section with all original bullet content
- Day-in-the-life timeline with scroll-bound progress line in gold

### Fees `/fees`
- Premium pricing cards (3 tiers placeholder: Half Day · Full Day · Extended) with gold border accent on the recommended tier
- Each card scales + lifts on hover, fades in staggered
- Notes on funding availability below

### Gallery `/gallery`
- Masonry grid of original photos
- Hover: gentle zoom + gold overlay
- Click: full-screen lightbox with smooth crossfade and arrow navigation

### Contact `/contact`
- Split layout: animated form (floating labels, gold focus ring) on left, contact info card on right (address, phone, email, hours)
- WhatsApp "Chat with us" button
- Embedded Google Map of Coombe Road location with soft reveal mask
- Form posts to a server function that stores submissions (Lovable Cloud) and returns success — you'll receive enquiries via the Cloud database

---

## Motion System

| Pattern | Implementation |
|---|---|
| Smooth scroll | Lenis |
| Section reveal (fade + slide + scale) | Framer Motion `whileInView` with stagger |
| Parallax layers | Framer Motion `useScroll` + `useTransform` on `y` |
| 3D tilt cards | Mouse-position → `rotateX/rotateY` via `useMotionValue` + spring |
| Page transitions | `AnimatePresence` overlay (gold sweep + fade) keyed by pathname |
| Hero headline | Mask-reveal + word stagger |
| Buttons | Soft glow + 2px lift + gold underline |
| Image hover | Inner-zoom (scale 1.05) under fixed-aspect frame |

All animations respect `prefers-reduced-motion` and are tuned (low amplitude, ~250–600ms) so they feel calm, not flashy.

---

## Responsive & Performance

- Mobile: tilts disabled, parallax reduced, single-column layouts, sticky nav collapses to glass drawer with gold accent
- Lazy-load all gallery images, use `loading="lazy"` and explicit dimensions
- Fonts preconnected and `display=swap`
- No Three.js / WebGL — purely CSS transforms + Framer Motion for smooth 60fps on mid-range phones

---

## Technical Notes

- TanStack Start with one route file per page under `src/routes/`
- Each route exports its own `head()` with title, description, og:title, og:description, and og:image (the page's hero image)
- New deps: `framer-motion`, `lenis`, `@studio-freight/tempus` (peer), `react-intersection-observer` (light), Google Fonts via `<link>` in `__root.tsx` head
- Shared components in `src/components/`: `Navbar`, `Footer`, `WhatsAppFab`, `PageTransition`, `TiltCard`, `Reveal`, `ParallaxImage`, `Lightbox`, `SmoothScroll`
- Lovable Cloud enabled for the contact form (single `contact_submissions` table with RLS allowing public insert; admin-only select)
- All scraped images served from their original CDN URLs (no re-hosting), keeping content guaranteed-identical
