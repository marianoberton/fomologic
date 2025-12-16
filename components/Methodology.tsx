import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    meta: "Single Source of Truth",
    icon: "/svg/illustrations/01-Iso_Base_Slab.svg"
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
    icon: "/svg/illustrations/07-Iso_Helix_Twist.svg"
  },
  {
    id: "03",
    title: "The MVP",
    subtitle: "Validación Táctica",
    concept: "Resultados rápidos. Un \"golpe táctico\" en 3 semanas.",
    problem: "El miedo a proyectos largos y costosos que no terminan nunca.",
    actions: [
      "Agentes de IA específicos",
      "Automatizaciones Low-Code",
      "Eliminación de tareas repetitivas"
    ],
    meta: "ROI inmediato",
    icon: "/svg/illustrations/05-Iso_Cloud_Stack.svg"
  },
  {
    id: "04",
    title: "Scale Development",
    subtitle: "Ingeniería de Escala",
    concept: "Construcción de activos robustos y propiedad intelectual.",
    problem: "Las herramientas \"atadas con alambre\" no soportan volumen real.",
    actions: [
      "Software a medida e integraciones",
      "RAG Avanzado (Chat histórico)",
      "Dashboards en Tiempo Real"
    ],
    meta: "Infraestructura x10",
    icon: "/svg/illustrations/10-Iso_Infinity_Loop.svg"
  },
  {
    id: "05",
    title: "Evolutionary Partner",
    subtitle: "Retainer",
    concept: "Tu seguro contra la obsolescencia tecnológica.",
    problem: "La IA avanza cada 3 meses; quedarse quieto es retroceder.",
    actions: [
      "Monitoreo de Calidad",
      "Upgrade de Modelos",
      "Gerencia de Innovación"
    ],
    meta: "Antifragilidad permanente",
    icon: "/svg/illustrations/13-Iso_Hourglass.svg"
  }
];

// --- COMPONENT ---

const MethodologyCard: React.FC<{ phase: typeof PHASES[0]; index: number; isActive: boolean }> = ({ phase, index, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
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
    // Parallax effect on scroll
    if (iconRef.current) {
        gsap.to(iconRef.current, {
            yPercent: 30, // Increased parallax
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    }

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
        className={`methodology-card group w-full min-h-[80vh] flex flex-col justify-center border-t border-neutral-800 relative transition-all duration-700 ${isActive ? 'bg-[#1a1a1a]' : 'bg-[#111]'}`}
    >
      {/* Active Indicator Line */}
      <div className={`absolute top-0 left-0 h-[1px] bg-accent-lime transition-all duration-1000 ${isActive ? 'w-full shadow-[0_0_20px_rgba(206,214,0,0.5)]' : 'w-0'}`}></div>

      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        
        {/* Left: Technical Specs / Icon */}
        <div 
            ref={iconContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-5 relative border-r border-neutral-800 p-8 md:p-16 flex flex-col justify-between overflow-hidden cursor-crosshair perspective-1000"
        >
             
             {/* Tech Grid Background (Animated when active) */}
             <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-30'}`}></div>
             
             {/* Radial Glow Highlight */}
             <div 
                ref={glowRef}
                className={`absolute inset-0 bg-radial-gradient from-accent-lime/10 to-transparent opacity-0 transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : ''}`}
                style={{ background: 'radial-gradient(circle at center, rgba(206,214,0,0.15) 0%, transparent 70%)' }}
             ></div>

             <div className="relative z-10 pointer-events-none">
                <span className="font-mono text-xs text-neutral-500 tracking-widest block mb-2">PHASE_ID</span>
                <span className={`font-mono text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-500 ${isActive ? 'text-accent-lime' : 'text-neutral-700'}`}>
                    {phase.id}
                </span>
             </div>

             <div className="relative z-20 flex-grow flex items-center justify-center py-12">
                {/* Holographic Clone (Ghosting Effect) */}
                <img 
                    ref={cloneRef}
                    src={phase.icon} 
                    alt=""
                    className={`absolute w-48 h-48 md:w-64 md:h-64 object-contain opacity-0 transition-opacity duration-300 pointer-events-none ${isActive ? 'animate-pulse-slow opacity-30' : ''}`}
                    style={{ 
                        filter: 'invert(1) blur(8px) brightness(1.5)',
                        transform: 'translateZ(-50px) scale(1.1)',
                        mixBlendMode: 'screen'
                    }}
                />

                {/* Main Icon */}
                <img 
                    ref={iconRef}
                    src={phase.icon} 
                    alt={phase.title}
                    className={`w-48 h-48 md:w-64 md:h-64 object-contain transition-all duration-700 will-change-transform ${isActive ? 'opacity-100 grayscale-0' : 'opacity-20 grayscale blur-sm'}`}
                    style={{ 
                        filter: isActive 
                            ? 'invert(1) drop-shadow(0 0 30px rgba(206, 214, 0, 0.2))' 
                            : 'invert(1) opacity(0.3)' 
                    }}
                />
             </div>

             <div className="relative z-10 font-mono text-[10px] text-neutral-600 uppercase tracking-widest flex justify-between pointer-events-none">
                <span>Fig. {phase.id}.0</span>
                <span>{phase.meta}</span>
             </div>
        </div>

        {/* Right: Narrative Content */}
        <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center relative">
            
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-500 border ${isActive ? 'border-accent-lime text-accent-lime bg-accent-lime/10 shadow-[0_0_10px_rgba(206,214,0,0.2)]' : 'border-neutral-700 text-neutral-600'}`}>
                        {phase.subtitle}
                    </span>
                </div>
                
                <h3 className={`font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8 transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                    {phase.title}
                </h3>

                <p className={`font-body text-lg md:text-xl leading-relaxed max-w-xl transition-colors duration-500 ${isActive ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {phase.concept}
                </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-800 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-400 block mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Pain Point
                    </span>
                    <p className="font-mono text-sm text-neutral-500 italic">
                        "{phase.problem}"
                    </p>
                </div>

                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-lime block mb-4">
                        Protocol
                    </span>
                    <ul className="space-y-2">
                        {phase.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-400 font-mono">
                                <span className="text-accent-lime">/</span>
                                {action}
                            </li>
                        ))}
                    </ul>
                </div>
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
      const cards = gsap.utils.toArray('.methodology-card');
      cards.forEach((card: any, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%", // Trigger earlier
          end: "bottom 60%",
          onEnter: () => setActivePhase(i),
          onEnterBack: () => setActivePhase(i),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#111] text-white py-24 md:py-32 border-t border-neutral-800">
        
        <div className="container mx-auto px-0 md:px-8 max-w-[98%]">
            <div className="flex flex-col lg:flex-row">
                
                {/* Left Column: Sticky Context (Minimal) */}
                <div className="lg:w-[300px] hidden lg:block relative border-r border-neutral-800">
                    <div className="sticky top-32 px-8">
                        <h2 className="font-display font-bold text-4xl text-white mb-2 tracking-tighter">
                            Methodology.
                        </h2>
                        <p className="font-mono text-xs text-neutral-500 mb-12 uppercase tracking-widest">
                            System Architecture v2.0
                        </p>

                        <div className="flex flex-col gap-1">
                            {PHASES.map((phase, index) => (
                                <div 
                                    key={phase.id} 
                                    className={`flex items-center gap-3 py-2 cursor-pointer transition-all duration-300 ${activePhase === index ? 'opacity-100 translate-x-2' : 'opacity-30 hover:opacity-50'}`}
                                    onClick={() => {
                                        const cards = document.querySelectorAll('.methodology-card');
                                        if(cards[index]) cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                >
                                    <span className={`font-mono text-xs ${activePhase === index ? 'text-accent-lime' : 'text-neutral-500'}`}>
                                        0{index + 1}
                                    </span>
                                    <span className="font-display text-sm text-white truncate">
                                        {phase.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-24 pt-8 border-t border-neutral-800">
                             <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-accent-lime animate-pulse rounded-full shadow-[0_0_15px_rgba(206,214,0,0.5)]"></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Industrial Grid */}
                <div className="flex-1 flex flex-col">
                    {PHASES.map((phase, index) => (
                        <MethodologyCard 
                            key={phase.id} 
                            phase={phase} 
                            index={index} 
                            isActive={activePhase === index} 
                        />
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
};

export default Methodology;
