import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---

const STEPS = [
  {
    id: 1,
    fade: "La mayoría de los costos no están en los números.",
    highlight: "Están escondidos en procesos mal diseñados.",
    theme: "light"
  },
  {
    id: 2,
    fade: "Horas, reprocesos, errores y decisiones tardías",
    highlight: "no figuran como gasto. Pero se pagan todos los meses.",
    theme: "light"
  },
  {
    id: 3,
    fade: "Las empresas grandes no bajan costos ajustando personas.",
    highlight: "Rediseñan procesos y delegan la ejecución a sistemas.",
    theme: "impact-1"
  },
  {
    id: 4,
    fade: "Mientras seguís resolviendo con trabajo manual",
    highlight: "otros ya usan agentes de IA para ejecutar y controlar la operación.",
    theme: "light"
  },
  {
    id: 5,
    fade: "Usar IA es fácil.",
    highlight: "Hacer que trabaje para tu empresa no.",
    theme: "final"
  }
];

// --- COMPONENT ---

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!triggerRef.current || !containerRef.current) return;

    const slides = slidesRef.current;
    const totalSlides = slides.length;
    
    // Pin the container for a long scroll distance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${totalSlides * 100}%`, // Scroll 100% of viewport height per slide
        scrub: 1, // Smooth scrubbing
        pin: true,
        anticipatePin: 1,
      }
    });

    slides.forEach((slide, i) => {
      // Skip the first slide animation (it's already visible)
      // Actually, we want a sequence:
      // Slide 1 starts visible.
      // Scroll -> Slide 1 fades out, Slide 2 fades in.
      
      if (i === 0) return; // First slide is static initially

      // Previous slide exit
      tl.to(slides[i - 1], {
        y: -100,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power2.inOut"
      }, `step-${i}`);

      // Current slide enter
      tl.fromTo(slide, 
        { 
          y: 100, 
          opacity: 0, 
          filter: "blur(10px)",
          visibility: 'hidden'
        },
        { 
          y: 0, 
          opacity: 1, 
          filter: "blur(0px)",
          visibility: 'visible',
          duration: 1,
          ease: "power2.inOut" 
        }, 
        `step-${i}` // Sync with previous exit
      );
      
      // Hold the slide for a bit before the next one starts (optional, but 'scrub' handles it)
      tl.to({}, { duration: 0.5 }); 
    });

  }, { scope: containerRef });

  return (
    <section ref={triggerRef} className="relative z-10 w-full h-[100dvh] bg-transparent overflow-hidden">
      
      {/* Background Noise/Texture could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat z-0"></div>

      <div ref={containerRef} className="relative w-full h-full flex items-center justify-center max-w-[1600px] mx-auto px-6 md:px-12">
        
        {STEPS.map((step, index) => {
          const isImpact = step.theme === 'impact-1';
          const isFinal = step.theme === 'final';
          
          return (
            <div 
              key={step.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className={`absolute w-full flex flex-col items-center justify-center text-center
                ${index === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
            >
               {/* Content */}
               <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-10">
                 
                 {/* Fade Text - Lead in */}
                 <p className={`font-display font-medium leading-[1.1] tracking-tight text-neutral-400 transition-colors duration-500
                   ${isFinal ? 'text-4xl md:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'}
                 `}>
                   {step.fade}
                 </p>

                 {/* Highlight Text - Punchline */}
                 <h2 className={`font-display font-semibold leading-[0.9] tracking-[-0.04em] text-balance text-[#272727] transition-all duration-500
                   ${isImpact ? 'text-6xl md:text-7xl lg:text-8xl' : 'text-5xl md:text-6xl lg:text-8xl'}
                   ${isFinal ? 'text-7xl md:text-8xl lg:text-[10rem] mt-4 pb-20' : ''}
                 `}>
                    {step.highlight}
                 </h2>

               </div>
            </div>
          );
        })}

      </div>

      {/* Progress Indicator (Optional) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
         <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Scroll to Reveal</span>
         <div className="w-[1px] h-12 bg-neutral-200 overflow-hidden">
            <div className="w-full h-full bg-accent-lime animate-scroll-down"></div>
         </div>
      </div>

    </section>
  );
};

export default Manifesto;
