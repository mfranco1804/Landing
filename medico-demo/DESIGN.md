# Design System: Dr. Julián Sotomayor (Medico Demo)

## 1. Visual Atmosphere & Aesthetic Philosophy
- **Atmosphere:** European Luxury Medical Clinic meets cutting-edge Preventive Longevity.
- **Density:** Balanced Executive (5/10) — generous breathing room, structured content hierarchy, zero clutter.
- **Variance:** Asymmetric Elegance (6/10) — balanced layouts, high-impact hero composition, rhythmic alternating sections.
- **Motion:** Weighted Spring Physics (6/10) — smooth elevation transforms, subtle card hover glows, perpetual soft status pulse.

## 2. Color Calibration & Palette Tokens
- **Background Base:** Pure Clean White `#FFFFFF` and Alabaster Clinical Tint `#F8FAFC`.
- **Card / Surface:** Glassmorphic White `#FFFFFF` with soft border `#E2E8F0` / `rgba(255,255,255,0.85)`.
- **Primary Navy (Authority & Rigor):** Deep Obsidian `#0B132B` / Midnight `#1C2541`.
- **Secondary Accent (Longevity & Bio-Vitality):** Emerald Bio-Teal `#0E7490` (Hover: `#0891B2`, Light Tint: `#ECFEFF`).
- **Warm Accent (Empathy & Distinction):** Warm Champagne Amber `#D97706` / `#F59E0B`.
- **Text Hierarchy:**
  - Headings: Deep Obsidian Navy `#0B132B`
  - Subheadings: Slate Dark `#334155`
  - Body Text: Muted Slate `#475569`
  - Captions & Meta: Soft Slate `#64748B`
- **Banned Colors:** Pure `#000000`, neon AI purple gradients, high-saturation magenta, uncalibrated flat blues.

## 3. Typographic Architecture
- **Font Stack:**
  - Display / Headings: `'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif`
  - Body & UI Controls: `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif`
  - Monospace (Metrics / Case Numbers): `'JetBrains Mono', monospace`
- **Typographic Scale:**
  - H1 Display: `clamp(2.5rem, 5vw, 3.75rem)` | Weight: 700 | Tracking: `-0.03em`
  - H2 Section Title: `clamp(1.85rem, 3.5vw, 2.5rem)` | Weight: 700 | Tracking: `-0.02em`
  - H3 Card Title: `1.25rem` to `1.5rem` | Weight: 600
  - Body Large: `1.125rem` (18px) | Line Height: `1.6`
  - Body Base: `1rem` (16px) | Line Height: `1.65`
  - Caption / Badges: `0.8125rem` (13px) | Weight: 600 | Uppercase Tracking: `+0.05em`

## 4. Component Behaviors
- **Demo Control Bar:** Floating sticky top bar with live color palette switchers, customizable notice, and direct contact trigger.
- **Buttons:** 
  - Primary CTA: Bio-Teal gradient with 3D tactile press feel (`active: translateY(1px)`), soft cyan shadow (`rgba(14, 116, 144, 0.25)`).
  - Secondary CTA: Outline slate border with soft hover background fill.
- **Cards:** Crisp border (`1px solid #E2E8F0`), radius `16px`, subtle box shadow `0 4px 20px -2px rgba(15, 23, 42, 0.05)`, smooth hover lift (`translateY(-4px)`).
- **Interactive Symptom Evaluator:** Multi-choice interactive diagnostic pill selector that dynamically suggests appropriate clinical pathways.
- **WhatsApp Floating Button:** High-visibility pulsing button with personalized message composer.

## 5. Responsive Principles
- Desktop: Asymmetric multi-column grids, split hero layout with high-impact portrait and floating stats badge.
- Mobile (< 768px): Seamless collapse to single-column, minimum tap target 48px, zero horizontal scrolling, sticky bottom booking bar.
