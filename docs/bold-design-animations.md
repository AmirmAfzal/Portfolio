# Bold Design Animations — Feature Plan & Status

**Branch:** `feature/bold-design-animations`
**Last updated:** 2026-08-01
**Build status:** ✅ `tsc --noEmit` clean · ✅ `npm run build` succeeds (only pre-existing `import/order` lint warnings)

This doc tracks the planned work for the **Bold Design Animations** feature so a fresh session can resume from the exact current state. Update the checkboxes/status as phases are completed.

---

## Goal

Give the portfolio a bolder, more animated identity — a preloader, smooth scrolling, a marquee tech ticker, cursor-follow tilt, desktop hero 3D backdrop, and staggered reveal animations — while respecting `prefers-reduced-motion` and staying out of the way on touch/mobile.

---

## Key architectural decisions

- **GSAP + `@gsap/react` (`useGSAP`)** for scroll/preloader/reveal animations; **React-Three-Fiber + drei** for the hero 3D.
- **`ScrollSmoother`** (wrapper `#smooth-wrapper` / content `#smooth-content`) — referenced **from the footer of [app/layout.tsx](app/layout.tsx)** so it mounts after the wrapper exists.
- Sibling components so animations never block content: `Preloader` hides itself (`display:none`) on complete or reduced-motion; `Hero3D` returns `null` on non-desktop/reduced-motion.
- Anchor navigation routes through the smoother via the shared helper `scrollToHash()` in [lib/scroll.ts](lib/scroll.ts) (falls back to native scrollTo when no smoother).
- Every decorative animation is disabled under `prefers-reduced-motion`.

---

## Phase 0 — Completed: Core components & wiring

- [x] **`components/Preloader.tsx`** — full-screen GSAP loader: SplitText char reveal of "AMIRREZA", progress bars, exit slide-up; hidden under reduced-motion / bfcache.
- [x] **`components/ui/SmoothScroll.tsx`** — creates a `ScrollSmoother`, exposes it as `window.__smoother`.
- [x] **`lib/scroll.ts`** — shared `scrollToHash()` + `prefersReducedMotion()` helpers.
- [x] **`components/ui/Marquee.tsx`** — infinite ticker (CSS `@keyframes marquee` added to [app/globals.css](app/globals.css)); used on [app/page.tsx](app/page.tsx).
- [x] **`components/ui/Tilt.tsx`** — cursor-follow 3D tilt; disabled on touch + reduced-motion.
- [x] **`components/Home/Hero3D.tsx`** — R3F distorted gradient blobs + sparkles, desktop-only, SSR-disabled behind the hero. Includes a **right-side text scrim** that is deliberately kept **off the portrait** so the image stays full opacity.
- [x] **`components/Home/HeroSection.client.tsx`** — split-text headline reveal + staggered desc/buttons via `gsap.matchMedia` (different motion for `>=1024px` vs `<1024px`).
- [x] Wiring in **`app/layout.tsx`** (`<Preloader/>`, `#smooth-wrapper/#smooth-content`, `<SmoothScroll/>`) and **`app/page.tsx`** (`<Marquee/>`).

## Phase 1 — In progress: polish & review

- [ ] **Hero3D scrim placement** — moved to the text column (right) so the portrait renders full opacity. ✅ fixed, confirm visually (browser QA).
- [ ] Apply `Tilt` to project cards / stat tiles / about cards where a bold tilt reads well (optional, author's taste).
- [ ] Audition marquee contents / speed (currently 28s, `text-base-content/70`).
- [ ] Visual QA of preloader timing vs. `ScrollSmoother` (ensure page doesn't start scrolled behind the loader).

## Phase 2 — Pending: commit & ship

- [ ] **Commit the branch** (nothing committed yet on `feature/bold-design-animations` — all work is currently uncommitted).
- [ ] Consider splitting large commits (core components vs. wiring vs. polish) for a clean history.
- [ ] Final `npm run build` + smoke test before merge.
- [ ] Open/refresh PR back to `main`.

---

## Files touched (uncommitted)

New: `components/Home/Hero3D.tsx`, `components/Preloader.tsx`, `components/ui/Marquee.tsx`, `components/ui/SmoothScroll.tsx`, `components/ui/Tilt.tsx`, `lib/scroll.ts`.
Modified: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, and hero/stats/skills/projects/about/contact/navbar/talk components, plus `lib/data/stats.ts`.

## Verification

```bash
npx tsc --noEmit   # clean
npm run build      # succeeds; all routes generate
npm run dev        # visual QA
```

## Resume checklist for a new session

1. `git status` on `feature/bold-design-animations` to confirm uncommitted work is still intact.
2. Read this file's checkboxes — finish any unchecked items in Phase 1, then Phase 2.
3. If UI feedback loop (run app): `npm run dev`, then use the browser to confirm the scrim fix, preloader, marquee, and tilt.
4. Commit per Phase 2 before merging.
