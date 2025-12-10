import React, { useEffect } from 'react';
import { Search, TestTube2, TrendingUp } from 'lucide-react';
import Closing from '../components/Closing';
import ServicesSection from '../components/ServicesSection';

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
      <ServicesSection />

      {/* =====================================================================================
          SECTION 2: THE PROTOCOL (PROTOCOLO DE ESCALA)
         ===================================================================================== */}
      <section className="py-32 bg-canvas border-t border-gray-200 relative">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></div>
                     <span className="font-body text-xs text-ink uppercase tracking-widest">Execution Protocol</span>
                  </div>
                  <h2 className="font-display font-bold text-5xl md:text-7xl text-ink tracking-tight">
                     Protocolo <br/> <span className="text-gray-400 font-light">de Escala.</span>
                  </h2>
               </div>
               <div className="text-right max-w-md">
                  <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Risk Mitigation</p>
                  <p className="font-body text-lg text-gray-500 font-light tracking-normal">
                     Un sistema iterativo para garantizar resultados. Minimizamos riesgos y maximizamos el ROI.
                  </p>
               </div>
            </div>

            {/* THE PROCESS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
               {[
                  {
                     id: '01',
                     icon: Search,
                     title: 'Descubrir',
                     desc: 'Entendemos tu negocio antes de cambiarlo. Inmersión profunda para detectar fugas y frenos.',
                  },
                  {
                     id: '02',
                     icon: TestTube2,
                     title: 'Validar',
                     desc: 'Implementamos en entorno controlado (piloto) para confirmar ahorro y eficiencia antes del despliegue.',
                  },
                  {
                     id: '03',
                     icon: TrendingUp,
                     title: 'Escalar',
                     desc: 'Despliegue masivo de la tecnología aprobada y transferencia de control a tu equipo.',
                  }
               ].map((step, i) => (
                  <div key={i} className={`group relative p-8 md:p-12 border-b md:border-b-0 border-gray-200 ${i !== 2 ? 'md:border-r' : ''} transition-colors hover:bg-gray-50`}>
                     <div className="flex justify-between items-start mb-8">
                        <span className="font-mono text-6xl text-gray-200 font-light group-hover:text-accent-lime transition-colors duration-300">
                           {step.id}
                        </span>
                        <step.icon size={24} className="text-gray-400 group-hover:text-ink transition-colors" />
                     </div>
                     
                     <h3 className="font-display font-bold text-2xl mb-4 text-ink">{step.title}</h3>
                     <p className="font-body text-gray-500 text-lg font-light leading-relaxed">
                        {step.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

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
