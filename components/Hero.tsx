import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitaniumCube from './TitaniumCube';

gsap.registerPlugin(ScrollTrigger);

// --- UTILS: MAGNETIC BUTTON ---
const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            // Magnetic pull strength
            xTo(x * 0.3); 
            yTo(y * 0.3);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <button ref={buttonRef} className={className}>
            {children}
        </button>
    );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // 1. Title Reveal (Line Masking Protocol)
        const lines = titleRef.current?.querySelectorAll('.line-inner');
        if (lines) {
            gsap.fromTo(lines, 
                { yPercent: 100, rotate: 2 },
                { 
                    yPercent: 0, 
                    rotate: 0,
                    duration: 1.2, 
                    stagger: 0.1, 
                    ease: "power4.out",
                    delay: 0.5
                }
            );
        }

        // 2. Subtext Fade
        if (subRef.current) {
            gsap.fromTo(subRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" }
            );
        }

        // 3. Scroll Indicator
        if (scrollRef.current) {
            gsap.fromTo(scrollRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 2, ease: "power2.out" }
            );
        }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] bg-[#FAFAFA] overflow-hidden">
      
      {/* --- LAYER 0: NOISE TEXTURE --- */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* --- LAYER 1: THE UNIVERSE (3D Canvas) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
         <TitaniumCube />
      </div>

      {/* --- LAYER 2: CONTENT GRID --- */}
      <div className="relative z-10 w-full h-full container mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">
        
        {/* Status Pill */}
        <div className="absolute top-32 left-6 md:left-12 flex items-center gap-3 opacity-0 animate-fade-in pointer-events-auto" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <div className="w-2 h-2 bg-[#CED600] rounded-full animate-pulse"></div>
            <span className="font-mono text-xs font-medium tracking-widest text-neutral-400 uppercase">
                System Operational
            </span>
        </div>

        <div className="max-w-4xl pointer-events-auto">
          
          {/* Headline - Split for Animation */}
          <h1 ref={titleRef} className="font-display font-bold text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-[#272727] mb-12">
            <div className="overflow-hidden">
                <div className="line-inner">Competir en</div>
            </div>
            <div className="overflow-hidden">
                <div className="line-inner">igualdad de</div>
            </div>
            <div className="overflow-hidden">
                <div className="line-inner flex items-baseline gap-4">
                    <span>condiciones</span>
                    <span className="text-[#CED600] text-[0.5em] align-top tracking-normal translate-y-[-1em] hidden md:inline-block">*</span>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="line-inner text-neutral-400">
                    es un error.
                </div>
            </div>
          </h1>

          {/* Copy & CTA */}
          <div ref={subRef} className="flex flex-col md:flex-row items-start md:items-center gap-12 pl-2">
             <p className="font-body text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-xl text-pretty">
               La IA rompió el equilibrio del mercado. Implementamos sistemas para que escales tu facturación, no tus problemas.
             </p>
             
             <MagneticButton className="group relative bg-[#272727] text-white px-10 py-5 rounded-full flex items-center gap-4 transition-all duration-500 hover:bg-[#CED600] hover:text-[#272727] hover:scale-105 shadow-2xl shadow-neutral-900/20">
                  <span className="relative z-10 font-display text-sm font-bold tracking-widest uppercase">
                    Actualizar Modelo
                  </span>
                  <div className="relative z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#272727]/10 transition-colors">
                     <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
             </MagneticButton>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 mix-blend-difference opacity-0 pointer-events-auto">
             <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Scroll</span>
             <div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#CED600] animate-scroll-down"></div>
             </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
