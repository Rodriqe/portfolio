---
name: redesign-existing-projects
description: Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.
source: https://github.com/Leonxlnx/taste-skill (skills/redesign-skill)
license: MIT
---

# Redesign Skill

## How This Works

When applied to an existing project, follow this sequence:

1. **Scan** — Read the codebase. Identify the framework, styling method (Tailwind, vanilla CSS, styled-components, etc.), and current design patterns.
2. **Diagnose** — Run through the audit below. List every generic pattern, weak point, and missing state you find.
3. **Fix** — Apply targeted upgrades working with the existing stack. Do not rewrite from scratch. Improve what's there.

## Design Audit

### Typography
- **Browser default fonts or Inter everywhere.** Replace with a font that has character (`Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`). For editorial/creative projects, pair a serif header with a sans-serif body.
- **Headlines lack presence.** Increase size for display text, tighten letter-spacing, reduce line-height. Headlines should feel heavy and intentional.
- **Body text too wide.** Limit paragraph width to roughly 65 characters. Increase line-height for readability.
- **Only Regular (400) and Bold (700) weights used.** Introduce Medium (500) and SemiBold (600) for subtle hierarchy.
- **Numbers in proportional font.** Use a monospace font or `font-variant-numeric: tabular-nums` for data-heavy interfaces.
- **Missing letter-spacing adjustments.** Negative tracking for large headers, positive tracking for small caps or labels.
- **All-caps subheaders everywhere.** Try lowercase italics, sentence case, or small-caps instead.
- **Orphaned words.** Fix with `text-wrap: balance` or `text-wrap: pretty`.

### Color and Surfaces
- **Pure `#000000` background.** Replace with off-black or tinted dark (`#0a0a0a`, `#121212`, dark navy).
- **Oversaturated accent colors.** Keep saturation below 80%.
- **More than one accent color.** Pick one. Consistency beats variety.
- **Mixing warm and cool grays.** Stick to one gray family.
- **Purple/blue "AI gradient" aesthetic.** The most common AI fingerprint. Replace with neutral bases and a single considered accent.
- **Generic `box-shadow`.** Tint shadows to match the background hue instead of pure black at low opacity.
- **Flat design with zero texture.** Add subtle noise, grain, or micro-patterns.
- **Perfectly even gradients.** Use radial gradients, noise overlays, or mesh gradients.
- **Inconsistent lighting direction.** Audit shadows to suggest a single light source.
- **Random dark sections in a light page (or vice versa).** Commit to a consistent background tone; use a darker shade of the same palette, not a sudden jump.
- **Empty, flat sections with no depth.** Add high-quality background imagery (blurred/overlaid/masked), subtle patterns, or ambient gradients. Placeholder: `https://picsum.photos/seed/{name}/1920/1080`.

### Layout
- **Everything centered and symmetrical.** Break symmetry with offset margins, mixed aspect ratios, left-aligned headers over centered content.
- **Three equal card columns.** Replace with 2-column zig-zag, asymmetric grid, horizontal scroll, or masonry.
- **`height: 100vh` for full-screen sections.** Use `min-height: 100dvh` (iOS Safari viewport bug).
- **Complex flexbox percentage math.** Use CSS Grid for reliable multi-column structures.
- **No max-width container.** Add a constraint (~1200-1440px) with auto margins.
- **Cards forced to equal height by flexbox.** Allow variable heights or masonry.
- **Uniform border-radius on everything.** Vary: tighter inner, softer containers.
- **No overlap or depth.** Use negative margins for layering.
- **Symmetrical vertical padding.** Bottom padding often needs to be slightly larger optically.
- **Dashboard always has a left sidebar.** Try top nav, floating command menu, collapsible panel.
- **Missing whitespace.** Double the spacing. Let it breathe.
- **Buttons not bottom-aligned in card groups.** Pin CTAs to the bottom of each card.
- **Feature lists starting at different vertical positions.** Align list start Y across columns.
- **Inconsistent vertical rhythm in side-by-side elements.** Align shared elements (titles, descriptions, prices, buttons).
- **Mathematical alignment that looks optically wrong.** Icons, play buttons, button text often need 1-2px optical adjustments.

### Interactivity and States
- **No hover states on buttons.** Add background shift, slight scale, or translate.
- **No active/pressed feedback.** Add `scale(0.98)` or `translateY(1px)` on press.
- **Instant transitions with zero duration.** Add 200-300ms transitions.
- **Missing focus ring.** Visible focus indicators are an accessibility requirement.
- **No loading states.** Use skeleton loaders matching layout shape, not generic spinners.
- **No empty states.** Design a composed "getting started" view.
- **No error states.** Inline error messages for forms. Never `window.alert()`.
- **Dead links.** Buttons linking to `#`. Link to real destinations or visually disable.
- **No indication of current page in navigation.** Style the active nav link.
- **Scroll jumping.** Add `scroll-behavior: smooth`.
- **Animations using `top`/`left`/`width`/`height`.** Switch to `transform` and `opacity`.

### Content
- **Generic names like "John Doe".** Use diverse, realistic names.
- **Fake round numbers (`99.99%`, `$100.00`).** Use organic data (`47.2%`, `$99.00`).
- **Placeholder company names ("Acme Corp").** Invent contextual, believable brands.
- **AI copywriting cliches.** Never "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry", "In the world of...". Write plain, specific language.
- **Exclamation marks in success messages.** Be confident, not loud.
- **"Oops!" error messages.** Be direct.
- **Passive voice.** Use active voice.
- **All blog post dates identical.** Randomize.
- **Lorem Ipsum.** Write real draft copy.
- **Title Case On Every Header.** Use sentence case.

### Component Patterns
- **Generic card (border + shadow + white background).** Cards should exist only when elevation communicates hierarchy.
- **Always one filled + one ghost button.** Add text links or tertiary styles.
- **Pill-shaped "New"/"Beta" badges.** Try square badges, flags, or plain text.
- **Accordion FAQ sections.** Use side-by-side list, searchable help, inline disclosure.
- **3-card carousel testimonials with dots.** Replace with masonry wall, embedded posts, single rotating quote.
- **Pricing table with 3 towers.** Highlight recommended tier with color/emphasis, not just height.
- **Modals for everything.** Use inline editing or slide-over panels.
- **Avatar circles exclusively.** Try squircles or rounded squares.
- **Light/dark toggle as sun/moon switch.** Use dropdown or system preference detection.
- **Footer link farm with 4 columns.** Simplify.

### Iconography
- **Lucide/Feather exclusively.** Use Phosphor, Heroicons, or a custom set.
- **Cliche metaphors (rocket=launch, shield=security).** Use less obvious icons.
- **Inconsistent stroke widths.** Standardize to one stroke weight.
- **Missing favicon.** Always include a branded favicon.
- **Stock "diverse team" photos.** Use real or consistent illustration.

### Code Quality
- **Div soup.** Use semantic HTML: `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`.
- **Inline styles mixed with CSS classes.** Move styling to the system.
- **Hardcoded pixel widths.** Use relative units.
- **Missing alt text on meaningful images.**
- **Arbitrary z-index values (`9999`).** Establish a clean z-index scale.
- **Commented-out dead code.** Remove debug artifacts.
- **Missing meta tags.** Add `<title>`, `description`, `og:image`, social meta.

### Strategic Omissions (What AI Typically Forgets)
- No legal links (privacy/terms in footer).
- No "back" navigation.
- No custom 404 page.
- No form validation.
- No "skip to content" link.
- No cookie consent (if required).

## Upgrade Techniques

### Typography Upgrades
- Variable font animation (interpolate weight/width on scroll/hover).
- Outlined-to-fill transitions.
- Text mask reveals.

### Layout Upgrades
- Broken grid / asymmetry.
- Whitespace maximization.
- Parallax card stacks.
- Split-screen scroll.

### Motion Upgrades
- Smooth scroll with inertia.
- Staggered entry (cascade with delays, Y-translation + opacity).
- Spring physics instead of linear easing.
- Scroll-driven reveals (expanding masks, wipes, draw-on SVG).

### Surface Upgrades
- True glassmorphism (1px inner border + subtle inner shadow beyond `backdrop-filter: blur`).
- Spotlight borders (illuminate under cursor).
- Grain/noise overlays (fixed, `pointer-events: none`).
- Colored, tinted shadows.

## Fix Priority
1. **Font swap** — biggest instant improvement, lowest risk
2. **Color palette cleanup** — remove clashing/oversaturated colors
3. **Hover and active states** — makes the interface feel alive
4. **Layout and spacing** — grid, max-width, consistent padding
5. **Replace generic components** — swap cliche patterns
6. **Add loading/empty/error states** — makes it feel finished
7. **Polish typography scale and spacing** — premium final touch

## Rules
- Work with the existing tech stack. Do not migrate frameworks or styling libraries.
- Do not break existing functionality. Test after every change.
- Before importing any new library, check the project's dependency file first.
- If the project uses Tailwind, check the version (v3 vs v4) before modifying config.
- If the project has no framework, use vanilla CSS.
- Keep changes reviewable and focused. Small, targeted improvements over big rewrites.
