# Progress Log

[2025-12-03] Initial Memory Bank creation.
[2025-12-03] Nosotros: Creación de página 'Nosotros', ruta y link en Navbar. Reutilización de componentes Team y Careers.
[2025-12-03] Tech: Downgrade React a 18.2.0 para compatibilidad con dependencias (lucide-react).
[2025-12-03] Nosotros: Refactor total de página 'Nosotros'. Desacople de componentes de Home. Implementación de contenido narrativo y diseño Awwwards-style.
[2025-12-03] Design: Upgrade visual de 'Nosotros'. Inclusión de Hero 3D (AbstractShapes), Sticky Cards para metodología, y diseño editorial para Founders.
[2025-12-03] Design Update (Nosotros): Simplificación de Hero (Clean 2D), eliminación de sección Metodología, rediseño de Partners con fondo de caras blurreadas, y adición de LinkedIn en Founders.
[2025-12-03] Reorder & Move (Nosotros/Home): Reordenamiento de secciones en 'Nosotros' (Founders -> Partners -> Careers). Movimiento del componente 'Trabaja con nosotros' (Careers) de Home a Nosotros.
[2025-12-04] Design System: Creación de ruta `/design-system` y página `DesignSystem.tsx`. Implementación de documentación visual (Color, Typo, Components, Physics). Link temporal en Navbar. Fix de crash por import faltante.
[2025-12-04] Design System Update: Cambio de tipografía Body a 'Inter' en index.html y tailwind.config. Expansión de DesignSystem.tsx con nuevos estilos de Cards (Philosophy/Services), Tags y Patrones UI detectados en la web.
[2025-12-09] UI/Cleanup: Eliminación completa de JetBrains Mono. Limpieza de componentes no utilizados en Home (Methodology/Philosophy). Fix de sombra cortada en Hero.
[2025-12-09] Design System: Creación de variantes de exploración tipográfica. `/design-system-b` (Manrope), `/design-system-c` (Space Grotesk), `/design-system-d` (Plus Jakarta Sans). Adición de color `mineral` (#31414A).
[2025-12-09] Global Typography: Implementación definitiva de Manrope (Headings/Display) y Karla (Body/Content) para toda la web. Actualización de `index.html` y Tailwind config.
[2025-12-09] Content Fix: Actualización de componente 'System' en Home con los copys correctos de las 4 fases de la ruta Servicios.
[2025-12-09] UI Refinement: Integración de color 'mineral' (#31414A) en tarjetas de System (Home), cambio de fondo de sección a negro, y ajuste de espaciado en Hero para consistencia de grid.
[2025-12-09] UI Refinement (Color): Reemplazo de negro puro (bg-black) por tono 'ink' (#272727) en la sección "El sistema operativo" para mejorar la estética visual y evitar contrastes extremos.
[2025-12-09] Global Theme Update: Creación del token `charcoal` (#272727) y reemplazo masivo de `bg-black` en toda la aplicación para suavizar contrastes. Adición de `shadow-xl` en tarjetas Mineral para mejorar legibilidad sobre el nuevo fondo.
[2025-12-09] Typography Config: Refactor de configuración tipográfica. Implementación de variables CSS para fuentes, limpieza de imports no usados (Space Grotesk/Inter), y ajuste global de tracking para Headings y Párrafos.
[2025-12-10] Services: Refactor de sección Servicios. Creación de componente `ServicesSection` con layout Zig-Zag, lógica de tarjeta invertida (Dark Theme) y estructura de datos tipada. Integración en `pages/Services.tsx`.
[2025-12-10] Visual/Motion: Implementación de componente `VisualOperationalPrep` con animaciones Framer Motion (Entrance/Hover stack). Instalación de dependencia `framer-motion`. Integración en tarjeta de 'Preparación Operativa' (Services).
[2025-12-10] Visual/Motion: Implementación de componente `VisualAutomation` (SVG Pipeline) para servicio 'Automatización de Flujos' (Dark Mode). Animación infinita de pulso de datos con `<animateMotion>`.
[2025-12-10] Visual/Motion: Implementación de componente `VisualAIAgents` (Glassmorphism) para servicio 'Agentes de IA'. Uso de `backdrop-blur`, gradientes sutiles y animación de flotación orgánica + parallax.
[2025-12-10] Visual/Motion: Implementación de componente `VisualBI` (Bar Chart) para servicio 'Business Intelligence'. Gráfico de barras animado con tooltip flotante (+124%) y efecto de carga escalonada.
[2025-12-10] Services: Final Polish. Eliminación de botón 'Ver detalles', rediseño de sección 'Protocolo de Escala' (Grid Técnico) y limpieza visual del Header en `pages/Services.tsx`.
[2025-12-10] Nosotros: Refactor de sección 'Nuestra Filosofía'. Transformación de lista derecha en 'Manifiesto Técnico' (Dark Card #272727, Grid Pattern, Header Anclado).
[2025-12-10] Nosotros: Rediseño de sección 'Architects & Founders'. Implementación de tarjetas estilo 'Ficha Técnica' (Data Sheet) con layout en grid, divisores visibles y estética limpia (Bg #fafafa / Text #272727).
[2025-12-10] Nosotros: Refactor de Partners. Transformación a "Stack Tecnológico" con grid estilo rack de servidores, iconos monocromáticos y estética de alta ingeniería.
[2025-12-10] Home: Refactor de Hero Section. Adopción de escala tipográfica "Display" (7xl/9xl) alineada con Nosotros, y layout 60/40 (Texto/Visual) para mayor impacto arquitectónico.
[2025-12-10] Home: Update de Hero Typography. Incremento a escala masiva (12vw/11rem) con tracking ajustado (-0.04em) y color Graphite (#272727) para "Evolución con IA.". Subtítulo ajustado a la nueva jerarquía.
[2025-12-10] UI/Motion (Showcase): Fix de timing en animación de hover. Eliminación de delay en imagen para sincronizar aparición con el asset 3D (Slab) y evitar "parpadeo" visual.
[2025-12-17] Methodology: Implementación de 'Narrativa Fija'. Pinning de sección con GSAP, navegación por slides verticales y animaciones magnéticas en iconos.
[2025-12-17] Home: Refinamiento de transiciones de fondo. Implementación de capa oscura global con fade-out controlado al entrar en Servicios (Inversa).
[2025-12-17] UI/Cleanup: BrandMarquee. Eliminación de bordes gruesos y padding excesivo para limpiar la estética visual.
[2025-12-17] Methodology: Refinamiento de Scroll & Physics. Ajuste de triggers para evitar saltos (distancia aumentada 150%), reducción de lag en scrub (0.5), y scoping de selectores GSAP para estabilidad. Fix de transición de fondo en Home (fade-in temprano).
[2025-12-17] Services/Home: Fix de transición de fondo inversa (Oscuro -> Claro). Se eliminó el fondo sólido de `Services.tsx` (ahora transparente) y se implementó lógica robusta `gsap.fromTo` en `Home.tsx` para asegurar el fade-out correcto al scrollear en ambas direcciones.
[2025-12-17] Showcase: Implementación de 'Revelación On-Demand'. Lista minimalista de nombres con cursor físico (Lerp + Velocity Deformations). Imágenes de proyectos flotan y se deforman (stretch/rotate) según la velocidad del mouse.
[2025-12-17] Magnetic UI: Implementación global de `MagneticButton`. Reemplazo de botones "Hablemos" en Hero, Closing y Navbar por botones con física de atracción magnética (Spring).
[2025-12-17] Home/Hero: Fix de carga inicial de fondo oscuro. Ajuste de `gsap.fromTo` a `gsap.to` en `Home.tsx` para respetar el estado inicial light.
[2025-12-17] Home: Refactor de transiciones de fondo Methodology-Services. Separación de referencias de fondo (`methodologyBgRef`, `closingBgRef`) y uso de `gsap.timeline` para lifecycle completo (Fade In -> Hold -> Fade Out) sincronizado con el scroll.
[2025-12-17] Insights: Implementación de 'Liquid Borders'. Creación de componente `LiquidBorder.tsx` con deformación de path SVG basada en física (GSAP Ticker) para simular viscosidad magnética al pasar el mouse.
[2025-12-17] Marquee: Upgrade de 'Tech Stack Marquee'. Reescritura total usando `framer-motion` para física de velocidad (scroll velocity skew), looping perfecto, y estética "Technical Data Sheet" con separadores y logotipos monocromáticos interactivos.
[2025-12-17] Social Proof: Creación de 'The Ecosystem'. Reemplazo de `BrandMarquee` con una grilla estática minimalista (3 col). Implementación de física magnética en logos y contadores "terminal" que simulan procesamiento de datos al hacer hover.
