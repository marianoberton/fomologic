import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IsoBaseSlab, IsoHelixTwist, IsoCloudStack, IsoInfinityLoop, IsoHourglass } from './MethodologyIcons';
import TechnicalOverlay from './TechnicalOverlay';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---

const PHASES = [
  {
    id: "01",
    title: "Cimientos de Datos",
    subtitle: "Digital Readiness",
    concept: "Antes de la inteligencia, viene el orden. Construimos la infraestructura digital base.",
    problem: "La IA es ciega si los datos están en papel, en cabezas o dispersos.",
    actions: [
      "Centralización de canales",
      "Optimización de CRM & ERP",
      "Base de Conocimiento"
    ],
    meta: "Fuente Única de Verdad",
    icon: IsoBaseSlab
  },
  {
    id: "02",
    title: "Business Blueprint",
    subtitle: "Estrategia",
    concept: "Diagnóstico quirúrgico. Mapeamos la operación real vs. la ideal.",
    problem: "Automatizar un proceso roto solo lo hace romperse más rápido.",
    actions: [
      "Mapeo de Procesos (As-Is / To-Be)",
      "Matriz de Oportunidades de IA",
      "Arquitectura de Solución"
    ],
    meta: "Plan de batalla claro",
    icon: IsoHelixTwist
  },
  {
    id: "03",
    title: "El MVP",
    subtitle: "Validación Táctica",
    concept: "Resultados rápidos. Un \"golpe táctico\" en 3 semanas.",
    problem: "El miedo a proyectos largos y costosos que no terminan nunca.",
    actions: [
      "Agentes de IA específicos",
      "Automatizaciones Low-Code",
      "Eliminación de tareas repetitivas"
    ],
    meta: "Resultados Visibles",
    icon: IsoCloudStack
  },
  {
    id: "04",
    title: "IA para escalar",
    subtitle: "Ingeniería de Escala",
    concept: "Construcción de activos robustos y propiedad intelectual.",
    problem: "Las herramientas \"atadas con alambre\" no soportan volumen real.",
    actions: [
      "Software a medida e integraciones",
      "Chat Inteligente con tus Datos",
      "Dashboards en Tiempo Real"
    ],
    meta: "Infraestructura x10",
    icon: IsoInfinityLoop
  },
  {
    id: "05",
    title: "Evolución Continua",
    subtitle: "Retainer",
    concept: "Tu seguro contra la obsolescencia tecnológica.",
    problem: "La IA avanza cada 3 meses; quedarse quieto es retroceder.",
    actions: [
      "Monitoreo de Calidad",
      "Upgrade de Modelos",
      "Gerencia de Innovación"
    ],
    meta: "Adaptación Constante",
    icon: IsoHourglass
  }
];

// --- COMPONENT ---

const MethodologyCard: React.FC<{ phase: typeof PHASES[0]; index: number; isActive: boolean }> = ({ phase, index, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null); 
  const cloneRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  // Magnetic Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!iconContainerRef.current || !isActive) return;

    const { left, top, width, height } = iconContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    // Main Icon Tilt
    gsap.to(iconRef.current, {
      rotateY: x * 20, // Tilt X
      rotateX: -y * 20, // Tilt Y (inverted for natural feel)
      ease: "power2.out",
      duration: 0.5,
      transformPerspective: 1000,
      transformOrigin: "center center"
    });

    // Clone Tilt (Lag effect & Parallax)
    if (cloneRef.current) {
        gsap.to(cloneRef.current, {
            rotateY: x * 15,
            rotateX: -y * 15,
            x: x * 30, // Move slightly for parallax
            y: y * 30,
            ease: "power3.out",
            duration: 0.8, // Slower duration for lag
            transformPerspective: 1000,
            transformOrigin: "center center"
        });
    }

    // Glow Movement
    if (glowRef.current) {
        gsap.to(glowRef.current, {
            x: x * 80,
            y: y * 80,
            ease: "power2.out",
            duration: 0.5
        });
    }
  };

  const handleMouseLeave = () => {
    gsap.to([iconRef.current, cloneRef.current], {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.5)",
      duration: 1
    });

    if (glowRef.current) {
        gsap.to(glowRef.current, {
            x: 0,
            y: 0,
            ease: "power2.out",
            duration: 1
        });
    }
  };

  useEffect(() => {
    // Active State "Breathing" / Levitation
    if (isActive && iconRef.current) {
        gsap.to(iconRef.current, {
            y: "-=20",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Subtle rotation for organic feel
        gsap.to(iconRef.current, {
            rotation: 3,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    } else if (iconRef.current) {
        gsap.killTweensOf(iconRef.current);
        gsap.to(iconRef.current, { y: 0, rotation: 0, duration: 0.5 });
    }

  }, [isActive]);

  return (
    <div 
        ref={containerRef}
        className={`methodology-card group w-full h-full flex flex-col justify-center relative transition-all duration-700 bg-transparent`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
        
        {/* Left: Technical Specs / Icon */}
        <div 
            ref={iconContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-5 relative border-r border-neutral-700 p-8 md:p-16 flex flex-col justify-center h-full overflow-hidden cursor-crosshair perspective-1000"
        >
             {/* Technical Overlay */}
             <TechnicalOverlay />

             {/* Dynamic Icon */}
             <div ref={iconRef} className="relative z-20 w-32 h-32 md:w-48 md:h-48 mx-auto">
                <phase.icon className="w-full h-full text-[#CED600] drop-shadow-[0_0_15px_rgba(206,214,0,0.3)]" />
             </div>

             {/* Background Tech Details */}
             <div className="absolute top-4 left-4 font-mono text-xs text-neutral-500">
                SYS.ID: {phase.id}
             </div>
             <div className="absolute bottom-4 right-4 font-mono text-xs text-neutral-500 text-right">
                {phase.meta}
             </div>
        </div>

        {/* Right: Content */}
        <div className="md:col-span-7 p-6 md:p-24 flex flex-col justify-center relative h-[60%] md:h-full overflow-y-auto md:overflow-visible">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-2 leading-tight">
                {phase.title}
            </h3>
            <p className="font-mono text-[#CED600] mb-4 md:mb-8 text-sm md:text-lg">
                // {phase.subtitle}
            </p>
            
            <p className="font-body text-neutral-300 text-base md:text-xl leading-relaxed mb-4 md:mb-8 max-w-xl">
                {phase.concept}
            </p>

            <div className="bg-neutral-800/30 border border-neutral-700 p-4 md:p-6 mb-4 md:mb-8 backdrop-blur-sm">
                <p className="font-body text-neutral-400 italic text-xs md:text-sm mb-2">El Problema:</p>
                <p className="font-body text-white text-sm md:text-base">"{phase.problem}"</p>
            </div>

            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-10">
                {phase.actions.map((action, i) => (
                    <li key={i} className="flex items-center text-neutral-300 font-mono text-xs md:text-sm">
                        <span className="w-1.5 h-1.5 bg-[#CED600] mr-3"></span>
                        {action}
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-4">
                <div className="h-[1px] bg-neutral-700 flex-1"></div>
                <div className="font-mono text-xs text-neutral-500">FASE_COMPLETADA</div>
            </div>
        </div>

      </div>
    </div>
  );
};

const Methodology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scope selector to container to avoid conflicts
      const slides = gsap.utils.toArray('.methodology-slide', containerRef.current);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + (slides.length * 150) + "%", // Increased scroll distance for smoother experience
          pin: true,
          scrub: 0.5, // Reduced scrub lag for more responsiveness
          anticipatePin: 1,
        }
      });

      slides.forEach((slide: any, i) => {
        if (i === 0) return; // First slide is already visible

        // Animate previous slide out
        tl.to(slides[i - 1], {
            yPercent: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
        }, i - 0.5); // Start at X.5

        // Animate current slide in
        tl.fromTo(slide, 
            { yPercent: 20, opacity: 0 },
            { 
                yPercent: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power2.inOut",
                onStart: () => setActivePhase(i),
                onReverseComplete: () => setActivePhase(i - 1)
            },
            i - 0.5 // Sync with exit
        );
      });
      
      // Hold the last slide for a moment to ensure it's fully readable before unpinning
      tl.to({}, { duration: 0.5 });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-transparent text-white border-t border-neutral-700 overflow-hidden">
      <div className="container mx-auto px-0 md:px-8 max-w-[98%] h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Column: Sticky Context (Always visible due to Pinning) */}
          <div className="lg:w-[480px] hidden lg:block relative border-r border-neutral-700 h-full">
            <div className="h-full flex flex-col justify-center px-8 py-12">
              <h2 className="font-display font-bold text-6xl text-white mb-16 tracking-tighter">
                Metodología<span className="text-[#CED600]">.</span>
              </h2>
              <div className="flex flex-col gap-3">
                {PHASES.map((phase, index) => (
                  <div 
                    key={phase.id} 
                    className={`flex items-center gap-4 py-2 transition-all duration-300 ${activePhase === index ? 'opacity-100 translate-x-4' : 'opacity-30'}`}
                  >
                    <span className={`font-mono text-sm ${activePhase === index ? 'text-[#CED600]' : 'text-neutral-500'}`}>
                      0{index + 1}
                    </span>
                    <span className="font-display text-xl text-white truncate">
                      {phase.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Slides */}
          <div className="flex-1 relative h-full overflow-hidden">
            {PHASES.map((phase, index) => (
              <div 
                key={phase.id} 
                className={`methodology-slide absolute inset-0 w-full h-full flex items-center justify-center ${index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <MethodologyCard 
                  phase={phase} 
                  index={index} 
                  isActive={activePhase === index} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
