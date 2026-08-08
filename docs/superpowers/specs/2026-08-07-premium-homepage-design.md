# Premium homepage design

## Purpose

The homepage should position stackwith.me as a premium independent software workshop, not merely a directory of experiments. It must communicate a clear point of view, prove that the work is real, and guide visitors toward the strongest projects and engineering notes.

## Chosen direction

Use a museum-grade industrial editorial style: warm machined surfaces, a charcoal signal console, oversized display type, restrained acid-green live state, precise mono metadata, and generous negative space. This preserves the existing brand language while giving the page more contrast, hierarchy, and perceived craft.

Two alternatives were considered and rejected:

- A dark glassmorphism agency treatment would look current but generic and would weaken the workshop identity.
- A minimal black-and-white portfolio would feel elegant but would discard the existing instrument and live-screen vocabulary.

## Information architecture

1. Hero: clear studio promise, concise positioning, two actions, and a live signal console.
2. Proof rail: working-project, test-suite, writing, and ownership facts.
3. Selected work: AXON as the lead case study, followed by Stackime, Lab, and Arena.
4. Workflow: four concrete stages from framing through verification.
5. Field notes: the three latest articles from the existing Eleventy collection.
6. Contact plate and footer: direct routes to the work, writing, and builder.

## Visual system

- Background: warm grey chassis with subtle grain and radial light.
- Hero visual: near-black console with inset screen, telemetry, grid lines, and a controlled green glow.
- Typography: Clash Display for high-impact editorial headings, Inter for readable body copy, JetBrains Mono for labels and proof.
- Accent: acid green is reserved for live state, focus, and primary action.
- Motion: existing reveal choreography plus a subtle pointer tilt on the hero console. Motion is disabled when reduced motion is requested.

## Content and trust

The page must avoid invented clients, revenue, testimonials, or performance claims. It may state repository-backed facts already used by the site: one-person ownership, four documented projects, 300+ checks, published notes, live AniList data, and clearly labelled concept work.

## Responsive and accessibility behavior

- Desktop uses an asymmetric two-column hero and bento-style project grid.
- Tablet collapses the hero and lead case study to one column without changing reading order.
- Mobile keeps actions full-width, avoids horizontal navigation traps, and retains readable project metadata.
- Semantic headings, visible focus states, reduced-motion support, and no-JavaScript readability remain required.

## Verification

- A source-level contract test will fail before the new homepage markers exist and pass after implementation.
- The Eleventy production build must complete successfully.
- The homepage will be captured at desktop and mobile widths in a headless browser and visually inspected.
- Existing canvas telemetry must report active frames through `window.__hubQ()`.
