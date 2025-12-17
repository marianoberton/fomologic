import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IsoBaseSlab, IsoHelixTwist, IsoCloudStack, IsoInfinityLoop, IsoHourglass } from './MethodologyIcons';

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
    icon: IsoCloudStack
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
    icon: IsoInfinityLoop
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
    icon: IsoHourglass
  }
];

// --- COMPONENT ---

const MethodologyCard: React.FC<{ phase: typeof PHASES[0]; index: number; isActive: boolean }> = ({ phase, index, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null); // Changed to Div for component wrapper
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
        className={`methodology-card group w-full min-h-[80vh] flex flex-col justify-center relative transition-all duration-700 bg-[#272727]`}
    >
      {/* Active Indicator Line - Swiss Minimal */}
      <div className={`absolute top-0 left-0 h-[2px] bg-[#CED600] transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`}></div>

      <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
        
        {/* Left: Technical Specs / Icon */}
        <div 
            ref={iconContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-5 relative border-r border-neutral-700 p-8 md:p-16 flex flex-col justify-center h-full overflow-hidden cursor-crosshair perspective-1000"
        >
             
             {/* No tech grid, just pure whitespace */}
             
             <div className="relative z-10 pointer-events-none mix-blend-difference mb-8">
                <span className={`font-mono text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-500 ${isActive ? 'text-[#CED600]' : 'text-neutral-500'}`}>
                    {phase.id}
                </span>
             </div>

             <div className="relative z-20 flex-grow flex items-center justify-center">
                {/* Main Icon - Sharp, Clean, No Ghosting */}
                <div ref={iconRef} className="will-change-transform">
                    <phase.icon 
                        className={`w-48 h-48 md:w-64 md:h-64 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}
                        style={{ 
                            filter: isActive 
                                ? 'drop-shadow(0 10px 30px rgba(206, 214, 0, 0.2))' 
                                : 'none' 
                        }}
                    />
                </div>
             </div>
        </div>

        {/* Right: Narrative Content */}
        <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center relative h-full">
            
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-8">
                    <span className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors duration-500 border rounded-full ${isActive ? 'border-[#CED600] text-[#272727] bg-[#CED600]' : 'border-neutral-700 text-neutral-500'}`}>
                        {phase.subtitle}
                    </span>
                </div>
                
                <h3 className={`font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                    {phase.title}
                </h3>

                <p className={`font-body text-xl md:text-2xl leading-relaxed max-w-xl transition-colors duration-500 ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {phase.concept}
                </p>
            </div>

            {/* Bottom Layout - Minimal CTA */}
            <div className={`mt-auto transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link 
                    to="/services" 
                    className="group relative inline-flex items-center justify-between gap-6 px-8 py-4 bg-transparent border border-neutral-700 rounded-full overflow-hidden transition-all duration-300 hover:border-[#CED600] hover:bg-[#CED600]/5 w-fit"
                >
                    <span className="font-display font-bold text-sm tracking-widest uppercase text-white group-hover:text-[#CED600] transition-colors duration-300">
                        Explore Solution
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CED600] group-hover:text-[#272727] transition-all duration-300">
                         <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                </Link>
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
    <section ref={containerRef} className="relative w-full bg-[#272727] text-white py-24 md:py-32 border-t border-neutral-700">
        
        <div className="container mx-auto px-0 md:px-8 max-w-[98%]">
            <div className="flex flex-col lg:flex-row">
                
                {/* Left Column: Sticky Context (Swiss Minimal) */}
                <div className="lg:w-[480px] hidden lg:block relative border-r border-neutral-700">
                    <div className="sticky top-0 h-screen flex flex-col justify-center px-8 py-12">
                        <h2 className="font-display font-bold text-6xl text-white mb-16 tracking-tighter">
                            Methodology<span className="text-[#CED600]">.</span>
                        </h2>

                        <div className="flex flex-col gap-3">
                            {PHASES.map((phase, index) => (
                                <div 
                                    key={phase.id} 
                                    className={`flex items-center gap-4 py-2 cursor-pointer transition-all duration-300 ${activePhase === index ? 'opacity-100 translate-x-4' : 'opacity-30 hover:opacity-50'}`}
                                    onClick={() => {
                                        const cards = document.querySelectorAll('.methodology-card');
                                        if(cards[index]) cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
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
                        
                        <div className="mt-24 pt-8 border-t border-neutral-700">
                             <div className="w-12 h-12 flex items-center justify-center">
                                <div className={`w-2 h-2 bg-[#CED600] rounded-full transition-transform duration-500 ${activePhase !== null ? 'scale-100' : 'scale-0'}`}></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Clean Grid */}
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
