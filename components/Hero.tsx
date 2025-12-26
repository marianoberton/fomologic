import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitaniumCube from './TitaniumCube';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // 0. The Universe (Background) is already there (static noise) but we can ensure it's visible.
        
        // 1. Title Reveal (Line Masking Protocol) - Theatrical Entrance
        // Start hidden below
        const lines = titleRef.current?.querySelectorAll('.line-inner');
        if (lines && lines.length > 0) {
            // Split lines: Main message vs "The punchline"
            const mainLines = Array.from(lines).slice(0, 3);
            const punchLine = lines[3];

            gsap.set(lines, { yPercent: 120, rotate: 3 }); // Initial state: Hidden deep below
            
            // Part A: "Competir en igualdad de condiciones *"
            gsap.to(mainLines, { 
                yPercent: 0, 
                rotate: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });

            // Part B: "es un error." (Dramatic pause)
            if (punchLine) {
                gsap.to(punchLine, { 
                    yPercent: 0, 
                    rotate: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 2.0 // Significantly later (0.5 start + ~0.6 stagger + pause)
                });
            }
        }

        // 2. Subtext Fade - Follows the title
        if (subRef.current) {
            gsap.fromTo(subRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2, delay: 2.0, ease: "power2.out" }
            );
        }

        // 3. Scroll Indicator - Last element
        if (scrollRef.current) {
            gsap.fromTo(scrollRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 3.5, ease: "power2.out" }
            );
        }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] overflow-hidden">
      
      {/* --- LAYER 0: NOISE TEXTURE --- */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* --- LAYER 1: THE UNIVERSE (3D Canvas) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
         <TitaniumCube />
      </div>

      {/* --- LAYER 2: CONTENT GRID --- */}
      <div className="relative z-10 w-full h-full container mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">
        
        <div className="max-w-4xl pointer-events-auto">
          
          {/* Headline - Split for Animation */}
          <h1 ref={titleRef} className="font-display font-bold text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-[#272727] mb-12 will-change-transform">
            <div className="overflow-hidden">
                <div className="line-inner">Competir en</div>
            </div>
            <div className="overflow-hidden">
                <div className="line-inner">igualdad de</div>
            </div>
            <div className="overflow-hidden pt-8 -mt-8">
                <div className="line-inner flex items-baseline gap-4">
                    <span>condiciones</span>
                    <span className="text-[#CED600] text-[0.5em] align-top tracking-normal translate-y-[-0.2em] hidden md:inline-block">*</span>
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
