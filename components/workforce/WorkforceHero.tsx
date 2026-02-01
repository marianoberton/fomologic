import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ButtonPrimary from '../ButtonPrimary';
import { useContact } from '../../context/ContactContext';

const WorkforceHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openContact } = useContact();

  // Animations handled by Tailwind classes in the standard layout (animate-fade-in-up)
  // But we can add GSAP polish if needed. For now, matching Nosotros structure which uses Tailwind animate classes in the example provided.
  // Wait, Nosotros.tsx code shows `animate-fade-in-up`. 
  // Let's stick to the structure of Nosotros for consistency.
  
  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 bg-canvas overflow-hidden">
       {/* Noise Texture */}
       <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply" 
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Label */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
           <div className="w-2 h-2 bg-[#CED600] rounded-full animate-pulse"></div>
           <span className="font-body text-xs uppercase tracking-widest text-gray-500">Fomo Workforce</span>
        </div>
        
        {/* Title */}
        <h1 className="font-display font-black text-[9vw] leading-[0.85] tracking-tighter text-[#272727] mb-12 animate-fade-in-up opacity-0 max-w-7xl" style={{ animationDelay: '0.2s' }}>
            Tu operación <br />
            <span className="text-gray-300">nunca duerme.</span>
        </h1>
        
        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="lg:col-span-5">
                <p className="font-body text-2xl font-light leading-relaxed text-gray-600">
                    Desplegamos agentes de IA especializados que se integran a tu equipo existente.
                </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8 justify-between h-full">
                <p className="font-body text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                    Ejecutan tareas complejas, escalan infinitamente y no requieren supervisión constante.
                </p>

                <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
                    <ButtonPrimary onClick={openContact}>
                        Contratar Agentes
                    </ButtonPrimary>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WorkforceHero;
