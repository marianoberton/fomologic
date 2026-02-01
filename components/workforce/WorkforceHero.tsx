import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ButtonPrimary from '../ButtonPrimary';
import { useContact } from '../../context/ContactContext';

const WorkforceHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { openContact } = useContact();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(".workforce-hero-sub",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(".workforce-hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-canvas">
       {/* Noise Texture */}
       <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply" 
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <span className="block font-mono text-xs md:text-sm font-bold tracking-widest text-[#CED600] mb-6 uppercase">
            Fomo Workforce
          </span>
          
          <h1 ref={titleRef} className="font-manrope font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-[#272727] mb-8">
            Tu operación <br />
            <span className="text-gray-400">nunca duerme.</span>
          </h1>
          
          <p className="workforce-hero-sub font-karla text-xl md:text-2xl text-[#272727]/80 max-w-2xl leading-relaxed mb-12">
            Desplegamos agentes de IA especializados que se integran a tu equipo existente. 
            Ejecutan tareas complejas, escalan infinitamente y no requieren supervisión constante.
          </p>

          <div className="workforce-hero-cta flex flex-wrap gap-4">
            <ButtonPrimary onClick={openContact}>
              Contratar Agentes
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceHero;
