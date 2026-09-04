# Sistema de Diseño: Barbería Urbana de Alta Gama (Street-Luxe)

## 1. Atmósfera Visual & Filosofía de Diseño
Una experiencia digital que combina la cultura urbana contemporánea (streetwear, música urbana, degradados de máxima precisión) con la sofisticación refinada de un club de caballeros o un salón boutique exclusivo. 
- **Densidad:** 4/10 (Espaciado generoso, limpio, transpirable, macro-whitespace `py-20` a `py-32`).
- **Varianza:** 7/10 (Layouts asimétricos, tarjetas bento dinámicas, galería interactiva).
- **Movimiento:** 6/10 (Física spring fluida `cubic-bezier(0.32, 0.72, 0, 1)`, micro-interacciones táctiles, revelaciones al scroll con `IntersectionObserver`).

---

## 2. Paleta de Color Calibrada (Modo Oscuro Tailored)

```css
:root {
  /* Fondos y Superficies Base */
  --bg-primary: #0A0D10;         /* Obsidiana ultra profunda de fondo principal */
  --bg-surface: #12161D;         /* Superficie de tarjetas y contenedores */
  --bg-surface-elevated: #1A202A;/* Elementos elevados y hover */
  --bg-glass: rgba(18, 22, 29, 0.85); /* Vidrio esmerilado con backdrop-filter */

  /* Acentos y Metálicos (Champagne Gold / Ámbar Pulido) */
  --accent-gold: #D4AF37;        /* Oro cálido satinado para CTAs e insignias */
  --accent-gold-hover: #E5C055;  /* Brillo en interacción */
  --accent-gold-subtle: rgba(212, 175, 55, 0.12); /* Fondos de badges e iconos */
  --accent-gold-border: rgba(212, 175, 55, 0.28); /* Bordes refinados */

  /* Tipografía y Textos */
  --text-primary: #F4F5F7;       /* Blanco titanio de alto contraste */
  --text-secondary: #9BA3AF;     /* Gris acero neutro para descripciones */
  --text-muted: #64748B;         /* Metadatos, etiquetas técnicas */

  /* Bordes y Doble Bisel */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-bezel-outer: rgba(255, 255, 255, 0.05);
  --shadow-double-bezel: 0 10px 30px -10px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}
```

---

## 3. Arquitectura Tipográfica

- **Títulos & Display:** `Syne` / `Cabinet Grotesk` (Google Fonts: `Syne:wght@700;800`). Letra ancha, audaz, moderna y con presencia inconfundible.
- **Cuerpo & Lectura:** `Plus Jakarta Sans` (`wght@400;500;600`). Geometría limpia, excelente legibilidad en pantallas oscuras.
- **Metadatos & Badges Técnicos:** `JetBrains Mono` o `Plus Jakarta Sans` con `letter-spacing: 0.15em; text-transform: uppercase`.
- 🚫 **Fuentes Prohibidas:** *Inter*, *Roboto*, *Arial*, *Times New Roman*.

---

## 4. Estructura de Componentes & Haptic Micro-Aesthetics

### A. Tarjetas de Doble Bisel (*Double-Bezel Architecture*)
- **Chasis Exterior:** Contenedor con borde fino de `1px solid var(--border-bezel-outer)`, fondo translúcido y radio de curvatura generoso (`border-radius: 24px; padding: 6px;`).
- **Núcleo Interior:** Superficie con `background: var(--bg-surface)`, radio concéntrico (`border-radius: 18px`), sombra profunda y bisel de luz interior superior (`inset 0 1px 0 rgba(255,255,255,0.08)`).

### B. Botones de Acción (Island & Nested Icon Architecture)
- Botones de agendamiento en píldora con fondo oro pulido (`var(--accent-gold)`), texto oscuro (`#0A0D10`) en negrita, y un micro-círculo interior a la derecha con la flecha o icono de WhatsApp que se desplaza ligeramente en hover (`translate(2px, -2px)`).

### C. Prohibición Absoluta de Emojis
- Cero emojis en la interfaz. Todos los indicadores visuales son **SVGs vectoriales inline** estilizados a `stroke-width: 1.75px` o `2px`, acabados en tono dorado o titanio.

---

## 5. Módulos & Componentes Interactivos Especiales

1. **Selector Interactivo de Agendamiento (WhatsApp Wizard)**:
   - Paso 1: Selección de Servicio (Corte, Barba, Mechas Platinadas, Combo VIP).
   - Paso 2: Selección de Barbero (Jose Gregorio `@jbonyxx`, o cualquiera de los 3 socios).
   - Paso 3: Selección de Horario tentativo.
   - Resultado: Botón magnético que abre WhatsApp con el mensaje estructurado de confirmación inmediata.
2. **Selector de Servicios con Tabs & Precios Transparentes**.
3. **Galería Lookbook con Filtros Táctiles** (Skin Fades, Tapers, Platinados, Barbas).
4. **Módulo de Ubicación Urbana & Cómo Llegar**:
   - Tarjeta destacada con indicaciones desde la Estación Metro La California / Petare, con botón directo a Google Maps y Waze.
5. **Equipo de los 4 Master Barbers**:
   - Fichas individuales con foto, especialidad de corte, instagram personal y botón "Cita con él".
