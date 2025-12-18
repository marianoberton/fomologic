# Active Decisions

## UI/UX
- **Colores**: `bg-canvas` (fondo), `text-ink` (texto), `text-accent-lime` (acentos).
- **Tipografía**: `font-display` (Manrope), `font-body` (Karla).
- **Navegación**: Navbar fija con efecto glassmorphism al hacer scroll.

## Código
- **Imports**: Rutas relativas simples.
- **Estructura**: Páginas importan componentes de sección.
- **Contenido 'Nosotros'**: Se mantiene desacoplado de los componentes de la Home (Team/Careers) para permitir evolución independiente de la narrativa y el diseño.

## [2025-12-09] Eliminación de JetBrains Mono (Mono Font)
Contexto: La fuente monoespaciada (JetBrains Mono) generaba ruido visual y no se alineaba con la dirección de diseño deseada.
Alternativas consideradas: Mantenerla solo para código vs Eliminarla totalmente.
Decisión: Eliminar totalmente `font-mono` y JetBrains Mono del proyecto.
Rationale: Simplificar la tipografía y usar `font-body` (Inter) para todos los elementos técnicos/etiquetas para mayor consistencia y legibilidad.
Consecuencias: Todos los componentes que usaban `font-mono` ahora usan `font-body`. Se eliminó la importación de Google Fonts.

## [2025-12-09] Design System Typography Variants
Contexto: Necesidad de explorar diferentes variantes tipográficas para el sistema de diseño más allá de Inter y Raleway.
Alternativas consideradas: Reemplazar fuentes globales vs Crear variantes aisladas.
Decisión: Crear rutas y páginas específicas para variantes del Design System.
- `DesignSystemB`: Manrope (Geometric Sans).
- `DesignSystemC`: Space Grotesk (Tech/Display Sans).
- `DesignSystemD`: Plus Jakarta Sans (Modern Geometric).
Rationale: Permite probar y presentar opciones tipográficas "in-situ" sin afectar la producción principal hasta que se tome una decisión final.
Consecuencias: Nuevas dependencias de fuentes en `index.html` y configuración de Tailwind. Nuevas rutas `/design-system-b`, `/design-system-c`, `/design-system-d`.

## [2025-12-09] Typography Overhaul (Manrope + Karla)
Contexto: Se decidió unificar la tipografía de toda la web para tener una identidad más definida y moderna.
Alternativas consideradas: Raleway + Inter (anterior), Variantes del Design System.
Decisión: Establecer **Manrope** como fuente principal (Display/Headings) y **Karla** como fuente de cuerpo (Body/Content).
Rationale: "Manrope" aporta una estética geométrica moderna y "Karla" ofrece excelente legibilidad para contenido denso.
Consecuencias: Se actualizó `index.html` y la configuración de Tailwind. `font-display` y `font-sans` ahora apuntan a Manrope. `font-body` apunta a Karla.

## [2025-12-09] Nuevo Token de Color: Mineral (#31414A)
Contexto: Necesidad de un color semántico para superficies oscuras que no sea negro puro ni el gris base (#272727), para generar profundidad y jerarquía.
Alternativas consideradas: Usar valores hardcoded vs Crear token.
Decisión: Crear token `mineral` y `surface-mineral` con valor `#31414A`.
Rationale: Evita valores mágicos en el código y permite cambios globales. Se usa para destacar tarjetas sobre fondos oscuros ("efecto flotante").
Consecuencias: Agregado a configuración de Tailwind (en index.html). Actualizado System.tsx para usarlo.

## [2025-12-09] Global Dark Theme Update (Charcoal #272727)
Contexto: Se busca suavizar la estética general de la web reemplazando el negro puro (`bg-black` o `#000000`) por un gris oscuro suave.
Alternativas consideradas: `ink` existente vs Nuevo token `charcoal`.
Decisión: Crear el token `charcoal` con valor `#272727` (idéntico a `ink` pero semánticamente explícito para fondos) y reemplazar todos los usos de `bg-black` en secciones principales.
Rationale: `#272727` reduce la fatiga visual y eleva la percepción de calidad ("premium feel") comparado con el negro absoluto.
Consecuencias: Se actualizó `index.html` con `charcoal`. Se reemplazó `bg-ink` y `bg-black` por `bg-charcoal` en `System.tsx` y `Nosotros.tsx`. Las tarjetas Mineral en System ahora tienen `shadow-xl` para mejor contraste.

## [2025-12-10] Estilo Visual "Swiss Utility" & "Technical Data Sheet"
Contexto: Evolución de la identidad visual hacia un estilo más técnico, preciso y minimalista ("Ingeniería de alta gama").
Alternativas consideradas: Estilo editorial clásico vs Estilo "SaaS genérico".
Decisión: Adoptar patrones de "Swiss Utility" (Grid, Tipografía Grande/Tight, Espacio Negativo) y "Technical Data Sheet" (Divisores visibles, fuentes mono para etiquetas, layouts de tabla).
Rationale: Refuerza la narrativa de "Arquitectura de Sistemas" y "Procesos" de la consultora. Se aleja de la estética de agencia de marketing tradicional.
Consecuencias:
- **Service Cards**: Layout Zig-Zag estricto, sin botones redundantes ("Ver detalles").
- **Visuals**: Componentes abstractos interactivos (Framer Motion) en lugar de fotos de stock.
- **Founders/Filosofía**: Uso de contenedores con texturas de grilla técnica (`bg-[size:2rem_2rem]`), fondos oscuros (#272727) con bordes sutiles, y layouts de ficha técnica para información densa.
- **Tipografía**: Uso extensivo de `tracking-tighter` en títulos display y `font-mono` para metadatos/etiquetas.

## [2025-12-09] Configuración Tipográfica Avanzada (CSS Variables)
Contexto: Se requería una configuración más robusta y limpia para la tipografía, eliminando dependencias no usadas y usando variables CSS para facilitar cambios futuros.
Alternativas consideradas: Configuración directa en Tailwind vs Variables CSS.
Decisión: Usar variables CSS (`--font-manrope`, `--font-karla`) inyectadas en `:root` y referenciadas en `tailwind.config`.
Rationale: Mejora la mantenibilidad y permite cambiar las fuentes en un solo lugar (CSS) sin tocar la configuración de Tailwind repetidamente.
Consecuencias: Se actualizaron los `fontFamily` en Tailwind para usar `var(...)`. Se eliminaron referencias a Space Grotesk, Inter y otras fuentes de prueba. Se ajustó el tracking global (H1-H3 tight, p normal/wide).

## [2025-12-17] Narrativa Fija (Methodology Pinning)
Contexto: La sección de Metodología era scrolleable rápidamente, perdiendo impacto y atención en las fases críticas.
Alternativas consideradas: Scroll normal vs Scroll Snapping vs Pinning (GSAP).
Decisión: Implementar **Pinning con GSAP ScrollTrigger**.
Rationale: "Obliga" al usuario a detenerse. La estructura se mantiene fija mientras el contenido cambia (slides), guiando la lectura paso a paso.
Consecuencias: Implementación de lógica de slides apilados (absolute positioning) en `Methodology.tsx` y timelines de GSAP sincronizados con el scroll.

## [2025-12-17] Arquitectura de Transición de Fondo Global
Contexto: Requerimiento de cambios suaves de fondo (Claro -> Oscuro -> Claro) entre secciones de la Home sin cortes abruptos.
Alternativas consideradas: Cambiar `bg-color` del body vs Divs por sección vs Capa fija global.
Decisión: Usar una **Capa Fija Global (`fixed inset-0`)** controlada por GSAP.
Rationale: Permite transiciones perfectas (opacity 0->1) independientes del DOM flow. Evita problemas de z-index entre secciones adyacentes.
81→Consecuencias: `Home.tsx` controla la opacidad de esta capa basándose en triggers de scroll de secciones específicas (Methodology, Closing). Las secciones intermedias deben ser `bg-transparent`.
82→
83→## [2025-12-17] Liquid Borders (Insights Grid)
Contexto: Las tarjetas de "Insights" eran estáticas y aburridas. Se buscaba una interacción orgánica y fluida.
Alternativas consideradas: CSS Border Radius Animation vs SVG Filters (Gooey) vs Canvas vs SVG Path Deformation.
Decisión: Implementar **Deformación de Path SVG (Magnetic)** con física personalizada.
Rationale: Mejor performance que SVG Filters (que pueden ser costosos en móviles) y más controlable que CSS. Permite una deformación "magnética" hacia el cursor que simula viscosidad/liquidez sin distorsionar el contenido.
Consecuencias: Nuevo componente `LiquidBorder.tsx`. Las tarjetas de Insights usan este componente en lugar de bordes CSS estándar.

## [2025-12-17] The Silent Grid (Social Proof)
Contexto: La marquesina de clientes (BrandMarquee) se percibía como "Retail Barato" por su velocidad y movimiento constante. Se buscaba transmitir "Lujo Estático" y confianza.
Alternativas consideradas: Marquee más lento vs Lista estática vs Grid interactivo.
Decisión: Reemplazar `BrandMarquee` con `Ecosystem` (Grid 3 columnas, minimalista).
Rationale: "The Ecosystem" eleva la percepción de la marca. El movimiento solo ocurre bajo demanda (interacción del usuario), comunicando control y sofisticación.
Consecuencias:
- Eliminación de `BrandMarquee` en Home.
- Implementación de `Ecosystem.tsx` con física magnética en logos y contadores estilo terminal ("Data Processing") al hacer hover.
- Logos desaturados por defecto, revelación completa solo al interactuar.
