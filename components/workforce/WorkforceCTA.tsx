import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonPrimary from '../ButtonPrimary';
import { useContact } from '../../context/ContactContext';

gsap.registerPlugin(ScrollTrigger);

const WorkforceCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openContact } = useContact();

  useGSAP(() => {
    gsap.fromTo(".workforce-cta-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 md:py-32 bg-[#272727] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CED600] opacity-5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="workforce-cta-content max-w-3xl">
          <h2 className="font-manrope font-semibold text-4xl md:text-6xl mb-8 leading-tight">
            ¿No ves el agente que necesitas? <br />
            <span className="text-[#CED600]">Lo construimos.</span>
          </h2>
          <p className="font-karla text-xl text-white/70 mb-10 max-w-xl">
            Desarrollamos agentes a medida para flujos de trabajo específicos. 
            Analizamos tu operación y diseñamos la solución exacta.
          </p>
          <ButtonPrimary onClick={openContact} className="bg-[#CED600] text-[#272727] hover:bg-white border-transparent">
            Hablar con un consultor
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default WorkforceCTA;
