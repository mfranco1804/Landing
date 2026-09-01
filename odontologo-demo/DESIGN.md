# Design System: Dra. Valeria Montesinos (Odontologo Demo)

## 1. Visual Atmosphere & Aesthetic Philosophy
- **Atmosphere:** Luxury Dental Spa meets Haute-Couture Aesthetic Smile Architecture.
- **Density:** Sculptural Airy (4/10) — generous whitespace, refined cards, high-contrast visual showcases.
- **Variance:** Modern Asymmetric Balance (7/10) — dynamic split-screens, before/after interactive sliders, luxury editorial serif accents.
- **Motion:** Silky Fluid Physics (6/10) — subtle image zoom effects, smooth interactive slider dragging, elegant fade reveals.

## 2. Color Calibration & Palette Tokens
- **Background Base:** Pure Bright White `#FFFFFF` and Warm Pearl Sand `#FAF8F5`.
- **Primary Onyx (Authority & High-End Luxury):** Deep Obsidian Black `#09090B` / Charcoal `#18181B`.
- **Secondary Accent (Diamond Porcelain & Gold Warmth):** Champagne Gold `#D4AF37` / Soft Rose Amber `#D97706`.
- **Clinical Freshness Accent:** Aquamarine Pearl `#0D9488` / `#14B8A6` (Background tint: `#F0FDFA`).
- **Text Hierarchy:**
  - Headings Display: Deep Onyx `#09090B`
  - Editorial Accents: Champagne Bronze `#B45309` / `#D4AF37`
  - Body Text: Charcoal Slate `#3F3F46`
  - Muted Subtitles: Neutral Stone `#71717A`
- **Banned Colors:** Neon blues, garish pinks, raw uncalibrated yellows, harsh drop shadows.

## 3. Typographic Architecture
- **Font Stack:**
  - Display / Editorial Headings: `'Bodoni Moda', 'Cinzel', 'Outfit', serif`
  - Subheadings & Modern Titles: `'Outfit', 'Plus Jakarta Sans', sans-serif`
  - Body & UI Controls: `'Plus Jakarta Sans', -apple-system, sans-serif`
- **Typographic Scale:**
  - H1 Hero: `clamp(2.5rem, 5.5vw, 4rem)` | Weight: 700 | Tracking: `-0.02em`
  - H2 Section Title: `clamp(1.85rem, 3.5vw, 2.75rem)` | Weight: 600
  - H3 Treatment Title: `1.25rem` to `1.5rem` | Weight: 600
  - Body Large: `1.125rem` (18px) | Line Height: `1.7`
  - Body Base: `1rem` (16px) | Line Height: `1.65`

## 4. Component Behaviors
- **Demo Control Bar:** Floating sticky top bar with live color palette switchers, customization banner, and direct demo inquiry trigger.
- **Interactive Before & After Comparison Slider:** Smooth touch-enabled and mouse-drag slider with divider line, before/after labels, and instant visual proof.
- **Interactive Smile Quiz / Assessment:** Step-by-step interactive selector that recommends treatments (Veneers, Whitening, Implants, Alignment).
- **Buttons:**
  - Primary CTA: High-end onyx button with subtle gold/champagne glow and tactile hover lift.
  - Secondary CTA: Refined champagne outline with smooth background transition.
- **Treatment Cards:** Elevated cards with 1px soft border (`#E4E4E7`), subtle inner glow, and micro-hover zoom on imagery.

## 5. Responsive Principles
- Desktop: Expansive split hero with dentist portrait, interactive before/after slider showcase, structured treatment grid.
- Mobile (< 768px): Full touch-optimized slider, single-column stacked treatments, 48px+ touch targets, sticky bottom consultation CTA.
