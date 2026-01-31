import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ButtonSecondary from './ButtonSecondary';

gsap.registerPlugin(ScrollTrigger);

const StickyStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. PINNING SETUP
    // The section pins to allow time for the sequential reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Pin duration
        pin: true,
        scrub: 1,
        // markers: true, // Remove in production
      }
    });

    // Initial state: Everything hidden except background
    // We'll animate opacity and slight Y movement

    // 2. HEADLINE REVEAL (Left Column)
    tl.fromTo(leftColRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    )

    // 3. PILLARS REVEAL (Right Column - Staggered)
    // We select the direct children of the right column (the list items)
    .fromTo(".engineering-pillar", 
      { opacity: 0, x: 20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5, 
        stagger: 0.5, // 0.5s delay between each item
        ease: "power2.out" 
      },
      "-=1.0" // Overlap slightly with headline
    )

    // 4. CTA REVEAL (Bottom Center)
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

  }, { scope: containerRef });

  return (
    <section id="solutions" ref={containerRef} className="w-full h-screen bg-transparent text-white relative flex flex-col overflow-hidden">
      
      {/* BACKGROUND NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto h-full px-6 md:px-12 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* --- LEFT COLUMN: EMOTION (60%) --- */}
          <div ref={leftColRef} className="w-full md:w-[60%] flex flex-col justify-center pr-0 md:pr-16 opacity-0">
            <h2 className="font-manrope font-semibold text-[clamp(3rem,6vw,7rem)] leading-[1.1] tracking-tighter mb-8 text-white">
              Adaptarse al software tiene un <span className="text-[#CED600]">límite</span>.
            </h2>
            <p className="font-body text-xl md:text-2xl text-neutral-400 font-light max-w-xl leading-relaxed">
              El catálogo resuelve la táctica. Pero para la complejidad estructural de tu negocio, aplicamos <span className="text-white font-medium">ingeniería de fondo</span>.
            </p>
          </div>

          {/* --- RIGHT COLUMN: REASON (40%) --- */}
          <div ref={rightColRef} className="w-full md:w-[40%] flex flex-col justify-center pl-0 md:pl-12 mt-12 md:mt-0 border-t md:border-t-0 md:border-l border-neutral-800/50 pt-12 md:pt-0">
            <div className="space-y-12">
              
              {/* PILLAR 01 */}
              <div className="engineering-pillar opacity-0">
                <span className="font-mono text-xs text-[#CED600] tracking-widest mb-2 block">01 — DIGITAL READINESS</span>
                <h3 className="font-manrope font-bold text-2xl mb-3 tracking-tighter">Cimientos de datos</h3>
                <p className="font-body text-neutral-400 text-sm leading-relaxed">
                  Antes de la inteligencia, el orden. Centralizamos canales y creamos una fuente única de verdad. Si los datos están dispersos, la IA es ciega.
                </p>
              </div>

              {/* PILLAR 02 */}
              <div className="engineering-pillar opacity-0">
                <span className="font-mono text-xs text-[#CED600] tracking-widest mb-2 block">02 — BUSINESS BLUEPRINT</span>
                <h3 className="font-manrope font-extrabold text-2xl mb-3 tracking-tighter">Estrategia</h3>
                <p className="font-body text-neutral-400 text-sm leading-relaxed">
                  Diagnóstico quirúrgico. No automatizamos procesos rotos; diseñamos la arquitectura ideal (To-Be) antes de escribir una línea de código.
                </p>
              </div>

              {/* PILLAR 03 */}
              <div className="engineering-pillar opacity-0">
                <span className="font-mono text-xs text-[#CED600] tracking-widest mb-2 block">03 — INGENIERÍA DE ESCALA</span>
                <h3 className="font-manrope font-bold text-2xl mb-3 tracking-tighter">Activos propios</h3>
                <p className="font-body text-neutral-400 text-sm leading-relaxed">
                  Salimos del MVP. Construimos software a medida y activos de propiedad intelectual robustos que soportan tu volumen real.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* --- BOTTOM CTA --- */}
        <div ref={ctaRef} className="absolute bottom-12 left-0 w-full flex justify-center opacity-0">
          <ButtonSecondary 
            href="/metodologia" 
            className="text-white border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
            EXPLORAR METODOLOGÍA & SERVICIOS
          </ButtonSecondary>
        </div>

      </div>

    </section>
  );
};

export default StickyStatement;
