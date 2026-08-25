# Task: Add rich, on-theme motion to the SAKRT homepage ("motion throughout")

You are working in an **Astro** website for SAKRT, an Indian manufacturer of government-certified compostable packaging. The site has a finished, deliberately minimal design system (`src/layouts/Layout.astro`). The client now wants the **homepage to feel more animated and alive** — with an "expanding" quality — **without losing the calm, minimal, premium feel.** Your job is to add that motion.

**Constraints decided up front:**
- **Intensity: motion throughout** — most sections should animate, not just one or two.
- **Tech: vanilla only** — CSS + IntersectionObserver, built on the **existing Lenis** smooth-scroll already running site-wide. **Do NOT add any dependency** (no GSAP, no Motion One, no AOS). Everything must be hand-rolled on the current stack.

---

## RULE #1 — DO NOT CHANGE ANY CONTENT. This overrides everything.

This site is SEO-optimized and generating leads. Motion is **purely additive presentation**. You may add CSS, `data-*` attributes, and JavaScript. You may **not** change:
- Any visible text, heading **levels**, or the **order** of content.
- Any `href`, `id`, `alt`, `aria-*`, existing `data-*`, `name`, `type`, `role`, `title`.
- Component **frontmatter**: imports, `Props`/interfaces, data arrays, `.map()` fields, `Astro.props`.

Every diff should be: new `data-*` attributes, new/extended `<style>`, and new `<script>` — nothing else. If a text node or attribute changes, revert it.

---

## THE CORE IDEA — how to animate *more* while staying *minimal* (read this first)

More motion reads as *cheap* only when it's arbitrary. Keep it feeling premium and on-brand by following one coherent motion language:

1. **Vocabulary = growth & unfolding, never sliding.** Elements **scale up, wipe open, unfurl, and expand** into place — as if growing. Avoid content flying in from the left/right/offscreen. This "expanding" motif is exactly what the client asked for, and for a *compostable* brand it's thematically perfect: things grow and decompose, they don't slide.
2. **One gesture per element.** An element grows, *or* fades, *or* wipes — not all three. Restraint is what keeps "lots of motion" still reading as minimal.
3. **Calm, decelerating easing only.** Use `--ease-settle` (`cubic-bezier(0.16, 1, 0.3, 1)`) and `--ease-out`. Never bouncy, springy, elastic, or linear. Everything eases to a confident rest.
4. **Generous, slow durations.** `--dur-2` (0.45s) to `--dur-3` (0.8s). Fast motion feels frantic; slow feels expensive.
5. **Stagger for rhythm.** Groups reveal child-by-child using the existing `--i` index (60–90ms apart), so a grid *cascades* instead of popping all at once.
6. **Quiet at rest.** Motion happens on **entrance or scroll**, then stops. No looping wiggles (the only persistent motions are the existing hero scroll-cue and the certifications marquee).
7. **The palette doesn't change.** Motion introduces no new colors. Lime stays a **fill/mark/rule** (never light-background text); it can *draw in* (a rule expanding, a mark wiping across) but it never becomes decorative text.
8. **GPU-only properties.** Animate **`transform`, `opacity`, and `clip-path: inset()`** only. Never animate `width/height/top/left`, `background-position`, `box-shadow`, or heavy `filter: blur()` per frame — those repaint every frame and will stutter against Lenis's inertial scroll.
9. **Zero layout shift (CLS = 0).** Reveals must not move surrounding content. Reserve final space and animate only transform/opacity/clip — never animate an element's box size in a way that reflows the page.
10. **Accessible & progressive by default.** Under `prefers-reduced-motion: reduce`, everything shows its final state instantly. With no JS, everything is visible. (The existing system already does this — mirror it.)

If you internalize points 1–4, you can add a lot of motion and it will still feel like the same minimal site, just breathing.

---

## What you already have (reuse it — don't reinvent)

**In `src/layouts/Layout.astro`:**
- A global reveal system: put `data-reveal` on any element, or `data-reveal-group` on a parent to stagger its direct children. Default effect = fade + 18px rise, eased, staggered by `--i`. It's gated behind a `.js` class and `prefers-reduced-motion`, uses one shared `IntersectionObserver`, and **unobserves after firing** (no re-animate on scroll-back).
- Design tokens: eases (`--ease-settle`, `--ease-out`), durations (`--dur-1/2/3`), the full type scale, spacing, radii, and the color tokens (`--ink`, `--pulp`, `--lime`, etc.).
- Primitives: `.sk-eyebrow` (mono label with a lime rule), `.sk-title`, `.sk-lede`, `.sk-card`, `.sk-media` (fixed-ratio image box), `.sk-mark` (lime highlight behind ink text), buttons.

**In `src/script/SmoothScroll.js`:** Lenis is initialized site-wide and exposed as **`window.lenis`**. It runs its own rAF (`autoRaf: true`) and emits a `scroll` event. Under reduced motion, `window.lenis` is `null` (important: your scroll code must handle that).

**Extend this system** — add new reveal *variants* and one small scroll-scrub utility to the same places, so every section shares one consistent engine.

---

## Add three motion techniques (all vanilla)

### 1) Richer entrance reveals — add "expand" variants to the global system
Extend the reveal CSS in `Layout.astro` so authors can pick the gesture with a value, keeping the `.js` + reduced-motion gating and the `--i` stagger already there. Add at least:

```css
@media (prefers-reduced-motion: no-preference) {
  /* GROW — the signature "expanding" entrance */
  .js [data-reveal="grow"] {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity var(--dur-3) var(--ease-settle),
                transform var(--dur-3) var(--ease-settle);
    transition-delay: calc(var(--i, 0) * 80ms);
    transform-origin: center;
  }
  .js [data-reveal="grow"].is-in { opacity: 1; transform: none; }

  /* WIPE — an image/panel opens from one edge (unfurling) */
  .js [data-reveal="wipe"] {
    clip-path: inset(0 100% 0 0);
    transition: clip-path var(--dur-3) var(--ease-settle);
    transition-delay: calc(var(--i, 0) * 80ms);
  }
  .js [data-reveal="wipe"].is-in { clip-path: inset(0 0 0 0); }
}
```

(The existing default `data-reveal` with no value keeps working for the calmer fade-rise.) Make sure the `IntersectionObserver` still adds `.is-in` to these — it already targets `[data-reveal]`, so a valued attribute like `data-reveal="grow"` is covered.

### 2) Scroll-scrubbed "expand" — a tiny Lenis-aware utility
For the true *expanding-as-you-scroll* moments, add one utility that maps each `[data-scrub]` element's progress through the viewport to a CSS variable `--p` (0→1). CSS then drives scale/clip/parallax off `--p`. Add this script in `Layout.astro` (alongside the reveal script):

```js
// Scroll progress -> --p (0..1). Vanilla, Lenis-aware, accessibility-safe.
const initScrub = () => {
  const els = Array.from(document.querySelectorAll('[data-scrub]'));
  if (!els.length) return;

  // Reduced motion (or no Lenis): pin every element to its finished state.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.style.setProperty('--p', '1'));
    return;
  }

  const update = () => {
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) continue; // cull off-screen work
      const raw = (vh - r.top) / (vh + r.height);      // 0 entering -> 1 leaving
      el.style.setProperty('--p', Math.min(1, Math.max(0, raw)).toFixed(4));
    }
  };

  update();
  if (window.lenis) window.lenis.on('scroll', update); // rides Lenis's own rAF
  else window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
};
initScrub();
document.addEventListener('astro:after-swap', initScrub); // re-init on view swaps
```

Keep the number of `[data-scrub]` elements small (a handful across the page) — this reads layout each scroll tick. Example CSS consumers (per component):

```css
@media (prefers-reduced-motion: no-preference) {
  /* An image panel that expands open + gently zooms as it scrolls in */
  .js .feature-media {
    clip-path: inset(calc((1 - var(--p, 1)) * 10%) round var(--r-md));
  }
  .js .feature-media > img {
    transform: scale(calc(0.94 + var(--p, 1) * 0.06));
  }
  /* A lime rule that draws across as the section arrives */
  .js .section-rule { transform: scaleX(var(--p, 1)); transform-origin: left; }
}
```

Because `--p` defaults to `1` in the `var()` fallback, no-JS and reduced-motion visitors see the finished state with no flash.

### 3) Micro-interactions on hover (pointer devices only)
Keep hover polish subtle and **always** wrapped in `@media (hover: hover)` so touch devices don't get stuck states: card lift + image scale (already in `.sk-card`/`.sk-media` — reuse it), link underline-expand, button arrow nudge, chip tint. Transform/opacity only.

---

## Section-by-section choreography (motion throughout)

Apply the techniques above to each homepage component. Add only attributes + CSS; never touch the text. Suggested gesture per section (adjust to the real markup you find):

- **`Hero.astro`** — already rich (line-mask headline, ken-burns photo, lime mark). Enhancement: add `data-scrub` to the photo layer so it expands/parallaxes subtly as the user scrolls past (drive its existing transform off `--p`). Don't disturb the headline reveal.
- **`Mission.astro`** — eyebrow's lime rule **draws in** (scaleX via `--p` or a reveal), heading lines rise (`data-reveal`), body + any stats `data-reveal-group` stagger. If there are numeric stats, count them up on reveal (small vanilla counter, respecting reduced motion).
- **`PublicAppearance.astro`** (small — press/logos row) — `data-reveal-group` on the row so logos **grow in** one after another (`data-reveal="grow"`).
- **`Ecosystem.astro`** (largest — feature/product grid) — this is your flagship "expanding" moment: `data-reveal-group` grid cascade with `data-reveal="grow"`, and give the hero image of the section `data-scrub` so it **expands open** (`clip-path`) as it enters. Hover lift on cards.
- **`Foundation.astro`** — image **wipes open** (`data-reveal="wipe"`) while the text column staggers in beside it.
- **`Journal.astro`** (blog cards) — `data-reveal-group` grow-in stagger; images scale on hover via `.sk-media`.
- **`CallToAction.astro`** — the panel **scales up** into place (`data-reveal="grow"`), the big serif line mask-reveals, and the lime button's underline/fill draws once (no looping).

---

## Performance & safety checklist (must pass)

- **60 fps while Lenis scrolls.** Only transform/opacity/clip-path animate. Profile the Ecosystem grid + any `data-scrub` panels; no long frames.
- **CLS = 0.** Nothing reflows on reveal. Reserve space; animate transform/clip, not box size.
- **`will-change` discipline.** Add it only to the few elements actively scrubbing/animating; don't sprinkle it on dozens of nodes (that *hurts* performance).
- **Reduced motion:** emulate "reduce" → the whole page is visible and static, no scrub, no reveals. Confirm `window.lenis` being `null` doesn't throw.
- **No-JS:** everything visible (the `.js` gate handles this — verify).
- **Mobile (360 / 414 / 768):** lighten or drop parallax/scrub on small screens if it costs jank or battery; reveals are fine. No stuck hover states.
- **Re-init on navigation:** reveal and scrub both re-run on `astro:after-swap` (view transitions) — verify a client-side nav still animates.

## Verify before done
1. `git diff` on each touched file shows **only** added `data-*`, `<style>`, and `<script>` — no text/heading/attribute/frontmatter changes.
2. `astro build` (or `npm run build`) passes.
3. Manual pass at 360 / 768 / 1024 / 1440 for jank, overflow, and CLS.
4. Toggle OS "reduce motion" and reload — page is fully visible and calm.

## Definition of done
The homepage animates throughout with a single coherent "growth/expanding" motion language built only on CSS + IntersectionObserver + the existing Lenis; it still reads as calm and minimal; reduced-motion and no-JS both show the full static page; build passes; content is byte-identical to before.
