# Sistema de Diseño Semántico: Dr. Juan Torres Pérez
**Especialidad:** Gastroenterología & Medicina Interna  
**Arquetipo:** Precisión Diagnóstica & Calidez Médica (High-End Clinical Sanctuary)  
**Estándar Aplicado:** `landing-page-creation-master`, `taste-skill`, `high-end-visual-design`  

---

## 1. Calibración de Paleta Cromática (HSL Tailored)

La paleta evoca equilibrio biológico, serenidad gastrointestinal, higiene clínica hospitalaria y sofisticación:

| Rol de Color | Variable CSS | HEX / Valor | Significado Psicológico & Uso |
| :--- | :--- | :--- | :--- |
| **Lienzo Base (Canvas)** | `--bg-body` | `#F8FAF9` | Alabastro mineral con matiz verde-menta muy sutil, transmite pureza y calma. |
| **Superficie de Tarjetas** | `--bg-surface` | `#FFFFFF` | Blanco puro satinado con luz perimetral. |
| **Superficie Secundaria** | `--bg-surface-soft` | `#EFF5F3` | Travertino salvia suave para fondos alternados y badges. |
| **Cáscara de Doble Bisel** | `--bg-card-shell` | `#E8F0ED` | Envolvente para el sistema de doble bisel. |
| **Primario (Médico Élite)** | `--primary` | `#0F2823` | Verde Bosque Esmeralda Profundo (Deep Forest / Teal); transmite autoridad médica superior y sobriedad. |
| **Acento 1 (Digestivo/Cálido)** | `--accent` | `#C49A6C` | Bronce Champagne / Dorado arena; calidez humana y distinción. |
| **Acento 2 (Salud & Enlace)** | `--accent-cyan` | `#2A7B72` | Verde Azulado / Jade Clínico; para indicadores de salud, microbioma y estados activos. |
| **Texto Titulares** | `--text-heading` | `#0F2823` | Verde muy oscuro casi negro de alto contraste. |
| **Texto de Lectura** | `--text-body` | `#3D4D49` | Grafito oliva equilibrado para evitar fatiga visual. |
| **Texto Secundario** | `--text-muted` | `#6C7D79` | Gris salvia para subtítulos y metadatos. |

---

## 2. Tipografía & Jerarquía Visual

- **Tipografía Display / Titulares (`--font-display`):**
  - Fuente: `Cormorant Garamond`, serif italiana clásica.
  - Uso: Titulares `h1`, `h2`, números de impacto y monogramas. Transmite prestigio académico y tradición médica.
- **Tipografía Interfaz & Lectura (`--font-sans`):**
  - Fuente: `Plus Jakarta Sans`, sans-serif geométrica moderna.
  - Uso: Textos descriptivos, botones táctiles, etiquetas y navegación.
- **Tipografía de Datos / Métricas (`--font-mono`):**
  - Fuente: `JetBrains Mono`.
  - Uso: Códigos CIE-10, métricas de pacientes y números de contacto.

---

## 3. Principios de Arquitectura UI & Anti-Patrones

1. 🚫 **Cero Emojis:** 100% de la iconografía mediante SVGs vectoriales inline limpios con trazo de `2px` y `stroke-linecap: round`.
2. 💎 **Doble Bisel (*Double-Bezel Cards*):** Contenedor externo con borde translúcido `border: 1px solid rgba(15, 40, 35, 0.08)` y tarjeta interna con sombra difusa `box-shadow: 0 10px 30px -4px rgba(15, 40, 35, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.9)`.
3. 📱 **Jerarquía Móvil Estricta en Hero:**
   - 1. Badge de Acreditación (UCV / UC).
   - 2. Titular H1.
   - 3. 📸 Fotografía de Confianza del Dr. Juan Torres Pérez con badge de Sedes (Caracas / Valencia).
   - 4. Texto Lead descriptivo.
   - 5. Botones de Acción (Evaluador de Síntomas + Contacto WhatsApp).
   - 6. Métricas de Autoridad.
4. 🚢 **Header Flotante Anti-Colisión:**
   - Cápsula *glassmorphism* con `white-space: nowrap` y `flex-shrink: 0`.
   - Colapso fluido: Desktop (Enlaces completos) → Tablet (Botón corto) → Móvil (Logo + Menú Drawer con desenfoque).
   - Sin barras inferiores fijas redundantes.
