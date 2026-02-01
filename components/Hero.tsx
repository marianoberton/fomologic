import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitaniumCube from './TitaniumCube';
import HeroMobile from './HeroMobile';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { useContact } from '../context/ContactContext';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { openContact } = useContact();
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
            const mainLine = lines[0];
            const punchLine = lines[1];

            gsap.set(lines, { yPercent: 120, rotate: 3 }); // Initial state: Hidden deep below
            
            // Part A: "Usar IA es fácil."
            gsap.to(mainLine, { 
                yPercent: 0, 
                rotate: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5
            });

            // Part B: "Hacer que trabaje para tu empresa no." (Dramatic pause)
            if (punchLine) {
                gsap.to(punchLine, { 
                    yPercent: 0, 
                    rotate: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 1.5 
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
    <>
      <div className="block md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      
          {/* --- LAYER 0: NOISE TEXTURE --- */}
          <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply" 
               style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

          {/* --- LAYER 1: THE UNIVERSE (3D Canvas) --- */}
          <div className="absolute top-0 left-0 w-full h-full z-[0]">
             <TitaniumCube />
          </div>

          {/* --- LAYER 2: CONTENT GRID --- */}
          <div className="relative z-10 w-full h-full container mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">
            
            <div className="max-w-5xl pointer-events-auto">
              
              {/* Headline - Split for Animation */}
              <h1 ref={titleRef} className="font-manrope font-extrabold text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[1.1] tracking-tighter text-[#272727] mb-8 md:mb-12 will-change-transform">
                <div className="overflow-hidden">
                    <div className="line-inner">IA Trabajando</div>
                </div>
                <div className="overflow-hidden">
                    <div className="line-inner text-neutral-400">
                        para vos.
                    </div>
                </div>
              </h1>

              {/* Copy & CTA */}
              <div ref={subRef} className="flex flex-col items-start gap-8 pl-1 md:pl-2">
                 <div className="font-body text-lg md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-2xl text-pretty space-y-1">
                   <p>Sumá agentes al staff o diseñá soluciones propias.</p>
                   <p className="text-[#272727] font-bold">Tu operación tiene que correr 24/7. Vos no.</p>
                 </div>
                 
                 <div className="flex flex-wrap gap-4">
                     <ButtonPrimary onClick={() => document.getElementById('workforce')?.scrollIntoView({ behavior: 'smooth' })} className="md:px-10 md:py-5 text-xs md:text-sm">
                          Ver agentes
                     </ButtonPrimary>
                     <ButtonSecondary onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="md:px-10 md:py-5 text-xs md:text-sm text-[#272727] border-neutral-300 hover:border-[#CED600]">
                          Soluciones
                     </ButtonSecondary>
                 </div>
              </div>

            </div>

            {/* Scroll Indicator */}
            <div ref={scrollRef} className="absolute bottom-8 md:bottom-12 left-6 md:left-12 flex items-center gap-4 mix-blend-difference opacity-0 pointer-events-auto">
                 <span className="font-mono text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest">Scroll</span>
                 <div className="w-[1px] h-8 md:h-12 bg-neutral-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#CED600] animate-scroll-down"></div>
                 </div>
            </div>

          </div>

        </section>
      </div>
    </>
  );
};

export default Hero;
