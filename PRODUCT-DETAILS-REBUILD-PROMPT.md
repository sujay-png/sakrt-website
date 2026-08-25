# Task: Re-theme the Product Details components to the SAKRT design system

You are working in an **Astro** website for SAKRT, an Indian manufacturer of government-certified compostable packaging. The homepage, About page, hero, footer, and certifications have already been redesigned to a shared design system defined in `src/layouts/Layout.astro`. Eight components under `src/components/Product Details/` were **never migrated** — they still use system/`Inter` fonts and dozens of hardcoded off-palette hex colors (Tailwind slate greys, random greens, amber). Your job is to make them match the rest of the site — nothing more.

---

## RULE #1 — DO NOT CHANGE ANY CONTENT. This overrides everything below.

This site is SEO-optimized and actively generating leads. This is a **presentation-only** ("reskin") task. If you are ever unsure whether something is content or presentation, treat it as content and leave it alone.

**Must stay byte-for-byte identical in every file:**
- Every visible word / text node (headings, paragraphs, labels, button text, list items, captions).
- Every heading **level** — an `<h2>` stays an `<h2>`, an `<h3>` stays an `<h3>`. Never promote/demote or reorder headings.
- The **order** of all content on the page.
- All attributes that carry meaning or hooks: `href`, `id`, `alt`, `aria-*`, `data-*`, `name`, `type`, `role`, `title`.
- All component **frontmatter**: imports, `Props`/`interface` definitions, prop names and defaults, any data arrays, any `Astro.props` destructuring, any `.map()` loops and the fields they read.
- All existing JavaScript behavior and the class names / selectors any script relies on.

**You MAY change (this is the actual work):**
- The contents of each component's `<style>` block — replace hardcoded fonts, colors, spacing, radii, shadows, and easings with the design tokens listed below.
- Add **presentation-only** attributes for scroll animation: `data-reveal` (on a single element) or `data-reveal-group` (on a parent whose direct children should stagger in). These are wired globally in `Layout.astro`.
- Add or rename CSS class names **only if needed** for styling — but if you rename a class, keep the element, its text, and all its `id`/`data-*`/`aria-*`/`href` attributes intact, and make sure no `<script>` targets the old name. When in doubt, keep the existing class names and just rewrite their CSS.

**Preferred strategy: reskin, don't rebuild.** Keep each component's existing DOM/markup exactly as-is and rewrite only the CSS values inside `<style>`. This guarantees content parity by construction. Only touch markup when a purely visual fix requires it (e.g. wrapping for layout), and even then never alter text or the protected attributes above.

---

## What's wrong right now (the problem you're fixing)

Across the 8 files you'll find things like:
- `font-family: system-ui, -apple-system, sans-serif;` and `'Inter'` — should be the site font tokens.
- Tailwind-slate palette: `#f7f8f6`, `#64748b`, `#475569`, `#0f172a`, `#cbd5e1`, `#e2e8f0`, `#f1f5f9`, `#f8fafc`.
- Ad-hoc greens: `#0b2218`, `#0e2d1f`, `#173b2a`, `#3b5f4c`, `#727a75`, `#8da397`, `#525a55`.
- Multiple different limes: `#cff737`, `#a3e635`, `#bef264`, `#d9f99d`, `#365314`.
- An amber star color `#fbbf24`.

None of these come from the token system, so these pages look subtly (and sometimes badly) off-brand next to the rest of the site.

---

## Design system reference (source of truth: `src/layouts/Layout.astro`)

All tokens are global CSS variables — use `var(--token)`, never the raw hex.

**Color — the one law that matters:** Lime (`--lime #cff737`) is a **fill / mark / rule, never text on a light surface** (lime text on pulp measures ~1.5:1 — invisible). Ink on lime measures 12.7:1. So: fill with lime, write in ink. Lime text is only acceptable **on a dark green background** (`--brand`/`--ink`).

```
/* Ink (text/dark greens) */
--ink: #10281c;         /* headings, primary text */
--ink-soft: #3a4a41;    /* body copy */
--ink-muted: #5c6b62;   /* captions, meta */
--brand: #0d3d26;       /* forest green (dark panels, primary buttons hover) */

/* Surfaces */
--pulp: #f2f3ed;        /* page background */
--pulp-deep: #e7e9e0;   /* alternating band / inset */
--surface: #ffffff;     /* cards */
--hairline: #d8dbd0;    /* 1px borders */
--hairline-strong: #c3c8b9;

/* Lime accent (fills/marks only on light; may be TEXT only on dark) */
--lime: #cff737;
--lime-soft: #e8f9a8;   /* tints, hover washes */
--lime-ink: #4a6b0c;    /* the ONLY lime-ish text allowed on a light bg */

/* On dark backgrounds */
--on-dark: #f2f3ed;
--on-dark-muted: #a9b8ac;

/* Fonts */
--font-display: 'Instrument Serif', ... serif;   /* headings; alias: --font-serif */
--font-sans: 'Plus Jakarta Sans', system-ui, ... /* body */
--font-mono: 'Space Mono', ui-monospace, ...      /* eyebrows, codes, labels */

/* Type scale */
--fs-hero, --fs-h1, --fs-h2, --fs-h3, --fs-h4,
--fs-lede, --fs-body, --fs-sm, --fs-xs, --fs-label

/* Spacing (4px base): --s-1 … --s-24, plus --section-y, --gutter, --maxw, --maxw-narrow */

/* Radii: --r-xs 4 / --r-sm 8 / --r-md 12 / --r-lg 18 / --r-xl 26 / --r-pill 999 / --r-seed (organic blob) */

/* Elevation: --shadow-1 (rest hairline), --shadow-2 (hover lift), --shadow-3 (big lift) */

/* Motion: --ease-settle, --ease-out; --dur-1 .2s / --dur-2 .45s / --dur-3 .8s */
```

**Reusable primitives already defined globally** (prefer these over re-inventing): `.sk-section` (+ `--band`, `--ink` variants), `.sk-wrap` (max-width + gutter), `.sk-eyebrow` (mono label with a lime rule), `.sk-title` (+ `--lg`), `.sk-lede`, `.sk-mark` (lime highlight behind ink text), `.sk-card`, `.sk-media` (fixed-ratio image box via `--ar`), `.sk-chip`, `.sk-rule`, `.sk-btn` (+ `--primary`, `--ghost`, `--lime`, and `.sk-btn__arrow`).

**Hover / motion hygiene** (match the rest of the site):
- Wrap all `:hover` styling in `@media (hover: hover) { ... }` so touch devices don't get stuck hover states.
- Animate transform/opacity only for anything that moves; use `--ease-settle`/`--ease-out` and `--dur-*`.
- Reveal-on-scroll and reduced-motion are handled globally — you only add `data-reveal` / `data-reveal-group`. Do **not** add your own IntersectionObserver.

**Responsive:** these must look right at 360, 414, 768, 1024, and 1440px wide. Use the existing `clamp()` type scale and `--gutter`; collapse multi-column grids to one column on narrow screens.

---

## Hex → token mapping (apply consistently)

| Hardcoded value(s) | Replace with | Notes |
|---|---|---|
| `system-ui`, `-apple-system`, `'Inter'`, generic `sans-serif` | `var(--font-sans)` | body / UI text |
| any serif / `var(--font-serif)` | `var(--font-display)` | `--font-serif` is already an alias — leave it or normalize to `--font-display` |
| monospace / code labels | `var(--font-mono)` | eyebrows, spec labels, codes |
| `#0b2218`, `#0f172a`, `#1f2937` | `var(--ink)` | darkest text |
| `#0e2d1f`, `#0d3d26`, `#173b2a` | `var(--brand)` | dark green panels |
| `#3b5f4c`, `#374151`, `#475569`, `#525a55` | `var(--ink-soft)` | body copy |
| `#64748b`, `#727a75`, `#6b7280`, `#9ca3af` | `var(--ink-muted)` | meta / captions |
| `#8da397`, `#a9b8ac` (on dark) | `var(--on-dark-muted)` | muted text on dark |
| `#f7f8f6`, `#f3f4f1`, `#f8fafc`, `#f1f5f9` | `var(--pulp)` | page / light wash |
| `#ebece8`, `#eeebe6`, `#e7e9e0` | `var(--pulp-deep)` | inset band |
| `#ffffff` (as background) | `var(--surface)` | cards |
| `#ffffff` (as text on dark) | `var(--on-dark)` | text on dark panels |
| `#e2e8f0`, `#cbd5e1`, `#e5e7eb` | `var(--hairline)` / `var(--hairline-strong)` | borders |
| `#cff737`, `#a3e635`, `#bef264` | `var(--lime)` | one lime only; fill/mark, never light-bg text |
| `#d9f99d`, `#e8f9a8` | `var(--lime-soft)` | tints / washes |
| `#365314` on a lime bg, or lime text needed on light | `var(--lime-ink)` | the only lime-ish text on light |
| `#fbbf24` (star rating) | keep, but see note | semantic — no token equivalent |

**Semantic colors with no token (e.g. amber star rating `#fbbf24`):** keep the meaning, but declare it once as a local variable at the top of that component's `<style>` (e.g. `--rating-star: #fbbf24;`) and reference it, so it reads as intentional rather than a stray hex. Don't recolor a rating to lime.

**Check every lime usage against the color law:** if you find lime used as *text on a light background*, that's a bug — switch the text to `var(--ink)` and, if a highlight was intended, put the lime behind it as a fill (`.sk-mark`) or a rule. Lime text sitting on a dark green background (e.g. the existing `#cff737` on `#0e2d1f`) is correct — keep that pattern using `var(--lime)` on `var(--brand)`.

---

## Files to update (all in `src/components/Product Details/`)

Reskin each one in place. Read the file first, keep all markup/text/attributes/frontmatter, rewrite the `<style>` block to the tokens, add `data-reveal`/`data-reveal-group` where a section or card group should animate in.

1. `BiodegradableWaterBottle.astro` — heavy Tailwind-slate palette + amber stars; needs the most color remapping.
2. `CompostableBag.astro` — multiple greens + limes; watch the lime-on-dark vs lime-on-light law.
3. `Films.astro`
4. `Pouches.astro`
5. `TableWare.astro`
6. `GrowBags.astro`
7. `GenericProductDetail.astro` — shared template; be extra careful with its props/data.
8. `EngineeredForEarth.astro`

---

## Bonus fix (explicitly requested): the CIPET seal image path

**File:** `src/components/Our-Certifications/CipetCard.astro`
**Problem:** the seal `<img>` uses `src="/src/images/cipet-seal.png"`. A `/src/...` URL works in `astro dev` but **404s in the production build**, because files under `src/` must be imported (Astro then emits a hashed URL) or live in `public/`. The real image (`src/images/cipet-seal.png`, ~49KB) exists; today the card silently falls back to a "BOTANICAL STAMP" placeholder in production.

**Fix (Astro-idiomatic — matches how `CertificationsMarquee.astro` already imports from `../../images/`):**

1. Add the import to the CipetCard frontmatter (between the `---` fences):
   ```astro
   ---
   import cipetSeal from '../../images/cipet-seal.png';
   ---
   ```
2. Change **only** the `src` on that one `<img>`:
   ```astro
   <!-- before -->
   src="/src/images/cipet-seal.png"
   <!-- after -->
   src={cipetSeal.src}
   ```
   Keep the `alt="CIPET Validation Stamp"`, the `class`, and the `onerror` fallback exactly as they are.

This is the **one** deliberate, authorized deviation from "don't touch attributes": it corrects a broken build path so the same seal image actually renders in production. The visible result (the seal + its alt text) is unchanged. (Alternative if you prefer no import: `mkdir public/images`, copy the file there, and set `src="/images/cipet-seal.png"` — but the import approach is preferred for consistency.)

---

## Verify before you call it done

1. **Content parity (do NOT skip).** For every file you touched, confirm the visible text, heading tags/levels, and the attributes `href`/`id`/`alt`/`aria-*`/`data-*`/`name`/`type` are unchanged vs git. Quick check per file:
   ```bash
   git diff -- "src/components/Product Details/<File>.astro"
   ```
   The diff should show changes **only inside `<style>`** (plus any added `data-reveal` attributes). If you see a changed word, heading, or href, revert that hunk. For CipetCard, the only non-style diff should be the added import line and the single `src=` change.

2. **Grep for leftovers** — there should be no hardcoded palette or system fonts left in these files:
   ```bash
   grep -rniE "system-ui|'Inter'|#[0-9a-fA-F]{3,6}" "src/components/Product Details"
   ```
   The only hex allowed to remain is an intentional, documented semantic var like `--rating-star`.

3. **Build must pass:** `astro build` (or `npm run build`) completes with no errors, and the CIPET seal now resolves (no 404 in the build output).

4. **Responsive spot-check** at 360 / 768 / 1024 / 1440px: no overflow, grids collapse cleanly, tap targets ≥ 44px, no stuck hover states on touch.

## Definition of done
All 8 Product Details components use only design tokens/primitives and match the rest of the site; the CIPET seal renders in production; every diff is style-only (plus the one authorized CipetCard `src` fix); build passes; content is byte-identical to before.
