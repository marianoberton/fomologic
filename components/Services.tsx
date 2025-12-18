import React, { useRef, useEffect } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PACKAGES = [
  {
    id: "01",
    name: "DISCOVERY",
    fullName: "FOMO DISCOVERY",
    target: "Para empresas que necesitan claridad antes de invertir.",
    includes: ["Fase 01 (Diagnóstico)", "Fase 02 (Blueprint)"],
    promise: "Te decimos exactamente qué tenés que hacer, cuánto cuesta y cuánto vas a ganar.",
    icon: "/svg/illustrations/01-Iso_Base_Slab.svg"
  },
  {
    id: "02",
    name: "SPRINT",
    fullName: "FOMO SPRINT",
    target: "Para buscar resultados rápidos y validar.",
    includes: ["Fase 03 (MVP)", "Implementación Rápida"],
    promise: "En 21 días tenés una fuerza laboral digital trabajando para vos.",
    icon: "/svg/illustrations/05-Iso_Cloud_Stack.svg"
  },
  {
    id: "03",
    name: "CORE",
    fullName: "FOMO CORE",
    target: "Para transformación profunda y activos propios.",
    includes: ["Fase 04 (Desarrollo a Escala)", "Sistema Operativo"],
    promise: "Construimos el sistema operativo central de tu nueva empresa inteligente.",
    icon: "/svg/illustrations/10-Iso_Infinity_Loop.svg"
  },
  {
    id: "04",
    name: "GUARDIAN",
    fullName: "FOMO GUARDIAN",
    target: "Mantenimiento y Evolución mensual.",
    includes: ["Fase 05 (Retainer)", "Mejora Continua"],
    promise: "Tu seguro contra la obsolescencia. Nosotros vigilamos que la IA no falle.",
    icon: "/svg/illustrations/13-Iso_Hourglass.svg"
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll
      const cards = gsap.utils.toArray('.service-card');
      
      const scrollTween = gsap.to(cardsRef.current, {
        x: () => -(cardsRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (PACKAGES.length - 1),
          end: () => "+=" + cardsRef.current!.scrollWidth,
          invalidateOnRefresh: true,
        }
      });

      // Parallax & Skew for content
      cards.forEach((card: any) => {
        const img = card.querySelector('.service-icon');
        
        gsap.fromTo(img, 
            { x: 100, opacity: 0 },
            { 
                x: 0, 
                opacity: 1, 
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: scrollTween,
                    start: "left center",
                    end: "center center",
                    scrub: true
                }
            }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent text-neutral-900 overflow-hidden relative z-10">
        
        {/* Intro Header (Static) */}
        <div className="container mx-auto px-6 md:px-12 py-24 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-end">
                <h2 className="font-display font-bold text-6xl md:text-9xl tracking-tighter leading-[0.8]">
                    SERVICES<span className="text-accent-lime">.</span>
                </h2>
                <div className="flex items-center gap-4 mt-8 md:mt-0">
                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center animate-spin-slow">
                        <Plus size={20} className="text-neutral-400" />
                    </div>
                    <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">
                        Commercial Packages
                    </span>
                </div>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={triggerRef} className="h-screen flex items-center overflow-hidden bg-transparent relative z-20">
            <div ref={cardsRef} className="flex h-full pl-[5vw] md:pl-[10vw]">
                {PACKAGES.map((pkg, index) => (
                    <div 
                        key={pkg.id} 
                        className="service-card w-[90vw] md:w-[80vw] h-[80vh] flex-shrink-0 flex flex-col md:flex-row bg-white border border-neutral-200 mr-[5vw] md:mr-[10vw] relative group overflow-hidden transition-colors duration-700 hover:border-neutral-900 mt-[10vh] rounded-[2.5rem]"
                    >
                        {/* Background Noise */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>
                        
                        {/* ID Number - Absolute Big */}
                        <span className="absolute top-0 left-0 font-display font-bold text-[12rem] md:text-[20rem] leading-none text-neutral-100 tracking-tighter -translate-y-1/4 -translate-x-1/4 select-none pointer-events-none group-hover:text-neutral-200 transition-colors duration-700">
                            {pkg.id}
                        </span>

                        {/* Left: Content */}
                        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between h-full border-r border-neutral-100">
                            <div>
                                <h3 className="service-title font-display font-bold text-5xl md:text-7xl tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {pkg.name}
                                </h3>
                                
                                <p className="font-body text-lg text-neutral-500 max-w-md leading-relaxed">
                                    {pkg.target}
                                </p>
                            </div>

                            <div className="mt-12">
                                <div className="space-y-4">
                                    {pkg.includes.map((item, i) => (
                                        <div key={i} className="group/item border-t border-neutral-200 pt-4 hover:border-neutral-900 transition-colors duration-300">
                                            <div className="flex items-baseline justify-between mb-1">
                                                <span className="font-display font-bold text-lg text-neutral-900">{item}</span>
                                                <span className="font-mono text-[10px] text-neutral-300 group-hover/item:text-[#CED600] transition-colors">0{i+1}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual & Promise */}
                        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end bg-neutral-50/50 group-hover:bg-[#CED600]/5 transition-colors duration-700">
                            
                            {/* Icon */}
                            <div className="absolute top-0 left-0 w-full h-[80%] flex items-center justify-center pointer-events-none opacity-10 group-hover:opacity-100 transition-opacity duration-700 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                                <img 
                                    src={pkg.icon} 
                                    alt="" 
                                    className="service-icon w-[70%] h-[70%] object-contain mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <div className="relative z-20 mt-auto">
                                <div className="mb-8">
                                    <ArrowRight className="w-12 h-12 text-neutral-900 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                                </div>
                                <h4 className="font-display text-2xl md:text-4xl leading-tight text-neutral-900">
                                    "{pkg.promise}"
                                </h4>
                                <div className="mt-8 h-[2px] w-12 bg-neutral-900 group-hover:w-full group-hover:bg-accent-lime transition-all duration-700"></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    </section>
  );
};

export default Services;
