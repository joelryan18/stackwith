# Premium Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the stackwith.me homepage into a premium industrial-editorial studio experience while preserving its working demos and honest product claims.

**Architecture:** Keep the existing Eleventy layout and asset pipeline. Replace only the homepage content structure, add isolated `studio-*` styles to the shared stylesheet, and extend the existing lightweight `hub3d.js` module for hero-console interaction and canvas telemetry.

**Tech Stack:** Eleventy/Nunjucks, semantic HTML, CSS, vanilla JavaScript canvas, Node.js contract tests.

---

### Task 1: Add a failing homepage contract

**Files:**
- Create: `scripts/test-homepage-redesign.mjs`
- Modify: `package.json`

- [ ] Create a Node assertion script that requires the new hero, proof rail, selected-work links, workflow stages, field-notes loop, premium CSS selectors, mobile breakpoint, reduced-motion handling, and tilt hook.
- [ ] Add `test:homepage` to `package.json`.
- [ ] Run `npm.cmd run test:homepage` and verify it fails because `.studio-hero` is absent.
- [ ] Commit the failing contract.

### Task 2: Rebuild the homepage content and navigation

**Files:**
- Modify: `src/index.html`
- Modify: `src/_includes/layouts/hub.njk`

- [ ] Replace the catalog-first homepage with the approved hero, proof, selected work, workflow, and field-note sequence.
- [ ] Keep exact working links for `/axon.html`, `/anime.html`, `/lab.html`, `/game.html`, `/blog/`, `/about.html`, and `/contact.html`.
- [ ] Keep canvas elements on `data-screen="scope|wave|feed"` so the existing renderer remains the visual source.
- [ ] Update navigation labels and CTA copy to match the new hierarchy.
- [ ] Run the contract and verify markup assertions pass while style assertions still fail.
- [ ] Commit the semantic structure checkpoint.

### Task 3: Implement the premium visual system

**Files:**
- Modify: `src/assets/css/styles.css`

- [ ] Add isolated `studio-*` styles for the asymmetric hero, signal console, proof rail, bento projects, workflow, and editorial notes.
- [ ] Add desktop, tablet, and mobile layouts with full-width mobile actions and safe navigation wrapping.
- [ ] Add focus-visible and reduced-motion behavior for every new interactive treatment.
- [ ] Run `npm.cmd run test:homepage` and verify all CSS contract assertions pass except the JavaScript tilt hook.
- [ ] Commit the visual-system checkpoint.

### Task 4: Add restrained interaction polish

**Files:**
- Modify: `src/assets/js/hub3d.js`

- [ ] Add pointer-driven CSS variables for elements marked `data-wf-tilt`.
- [ ] Reset tilt on pointer leave and skip the behavior for reduced motion or coarse pointers.
- [ ] Keep `window.__hubQ()` and the honesty marker behavior intact.
- [ ] Run `npm.cmd run test:homepage` and verify the full contract passes.
- [ ] Commit the interaction checkpoint.

### Task 5: Build and visually verify

**Files:**
- Generated: `src/_data/assets.json`

- [ ] Run `npm.cmd run build` and require exit code 0.
- [ ] Serve `_site` locally and capture the homepage at 1440x1100 and 390x844.
- [ ] Inspect both captures for overlap, clipping, weak hierarchy, or unreadable copy; fix any discovered issue through a new failing assertion when practical.
- [ ] Confirm `window.__hubQ()` reports frames, screens, and clock activity.
- [ ] Run `git diff --check`, `npm.cmd run test:homepage`, and `npm.cmd run build` as the final verification gate.
- [ ] Commit the verified redesign.
