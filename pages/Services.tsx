import React, { useEffect } from 'react';
import { Search, TestTube2, TrendingUp } from 'lucide-react';
import Closing from '../components/Closing';
import ServicesComponent from '../components/Services';
import Methodology from '../components/Methodology';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-canvas text-ink font-sans selection:bg-accent-lime selection:text-ink">
      
      {/* =====================================================================================
          HEADER: SOLUCIONES & METODOLOGÍA (Nosotros Style)
         ===================================================================================== */}
      <section className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 bg-canvas overflow-hidden">
         
         <div className="max-w-[1600px] mx-auto w-full relative z-10">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
               <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
               <span className="font-body text-xs uppercase tracking-widest text-gray-500">Engineering Framework v.4.0</span>
            </div>

            <h1 className="font-display font-black text-[9vw] leading-[0.85] tracking-tighter text-ink mb-12 animate-fade-in-up opacity-0 max-w-7xl" style={{ animationDelay: '0.2s' }}>
              Soluciones & <br/>
              <span className="text-gray-300">Metodología.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
               <div className="lg:col-span-5">
                  <p className="font-body text-2xl font-light leading-relaxed text-gray-600">
                     Ingeniería de negocios aplicada.
                  </p>
               </div>
               <div className="lg:col-span-7 flex flex-col gap-6 justify-between h-full">
                  <p className="font-body text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                     Qué instalamos en tu empresa y cómo garantizamos el éxito de la implementación. Transformamos el caos en sistemas predecibles.
                  </p>
                  
                  <div className="flex items-center gap-4 mt-8 lg:mt-0">
                     <div className="h-[1px] w-24 bg-gray-300"></div>
                     <span className="font-body text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =====================================================================================
          SERVICES SECTION (Replaced with Component)
         ===================================================================================== */}
      <ServicesComponent />

      {/* =====================================================================================
          SECTION 2: THE PROTOCOL (PROTOCOLO DE ESCALA)
         ===================================================================================== */}
      <Methodology />

      {/* =====================================================================================
          CTA FINAL
         ===================================================================================== */}
      <section className="py-32 bg-[#050505] text-white px-6 md:px-12 relative overflow-hidden">
         {/* Spotlight Effect */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.15),transparent_70%)] pointer-events-none"></div>

         <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h2 className="font-display font-bold text-5xl md:text-8xl mb-8 tracking-tighter">
               ¿Tu empresa está lista para la <br/> <span className="text-zinc-600">Inteligencia Artificial?</span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
               No adivines. Analizamos tu operación y te decimos exactamente dónde y cómo aplicarla para maximizar el retorno.
            </p>
            <button className="bg-accent-lime text-ink px-12 py-6 rounded-full text-xl font-bold font-display hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(132,204,22,0.3)]">
               DIAGNOSTICAR MI OPERACIÓN
            </button>
         </div>
      </section>

      <Closing />

    </div>
  );
};

export default Services;
