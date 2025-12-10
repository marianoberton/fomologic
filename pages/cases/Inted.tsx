import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const Inted: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas w-full min-h-screen">
       
       {/* HERO */}
       <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
           <Link to="/casos" className="inline-flex items-center gap-2 text-gray-400 hover:text-ink mb-12 transition-colors">
              <ArrowLeft size={16} />
              <span className="font-body text-xs uppercase tracking-widest">Back to Archive</span>
           </Link>

           <h1 className="font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-ink mb-12">
              Inted <br/> <span className="text-gray-300">Mining.</span>
           </h1>

           <div className="relative w-full h-[60vh] rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Inted Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20"></div>
           </div>
       </section>

       {/* META GRID */}
       <section className="bg-ink text-white py-12 border-y border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Industry</span>
                <p className="font-display text-lg">Real Estate / Finance</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Tech Stack</span>
                <p className="font-display text-lg">Python, Selenium, Telegram API</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Deliverables</span>
                <p className="font-display text-lg">Scraper Cluster, Alert Bot</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Outcome</span>
                <p className="font-display text-lg text-accent-lime">100% Automated Discovery</p>
             </div>
          </div>
       </section>

       {/* STORYTELLING */}
       <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
               <div>
                  <h3 className="font-display font-bold text-4xl mb-6">The Goal</h3>
                  <div className="w-12 h-1 bg-accent-lime mb-6"></div>
               </div>
               <div>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed">
                     Inted necesitaba detectar oportunidades de inversión inmobiliaria en tiempo real. El mercado es extremadamente volátil y las mejores propiedades desaparecen en minutos. Depender de búsquedas manuales en portales significaba llegar siempre tarde.
                  </p>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
               <div>
                  <h3 className="font-display font-bold text-4xl mb-6">The Solution</h3>
                  <div className="w-12 h-1 bg-accent-orange mb-6"></div>
               </div>
               <div>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed mb-8">
                     Desplegamos un clúster de scrapers en Python que monitorean 12 portales inmobiliarios simultáneamente cada 30 segundos.
                  </p>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed">
                     Los datos son normalizados y comparados contra criterios de inversión. Si una propiedad cumple los requisitos (ROI proyectado, ubicación, precio/m2), el sistema dispara una alerta instantánea a un canal privado de Telegram con el enlace directo y un análisis preliminar.
                  </p>
               </div>
           </div>

           {/* ARCHITECTURE VIZ */}
           <div className="bg-white rounded-[3rem] p-12 md:p-24 border border-neutral-200 shadow-sm mb-32 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                   {/* Manual */}
                   <div className="text-center opacity-40">
                      <div className="text-6xl mb-4">🕵️‍♂️</div>
                      <h4 className="font-body uppercase tracking-widest text-sm mb-2">Manual Search</h4>
                      <p className="font-display text-2xl">4h / day</p>
                   </div>

                   {/* Arrow */}
                   <div className="h-[2px] w-32 bg-gray-300 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                   </div>

                   {/* Automated */}
                   <div className="text-center">
                      <div className="text-6xl mb-4 animate-bounce">🤖</div>
                      <h4 className="font-body uppercase tracking-widest text-sm mb-2 text-accent-lime">Bot Network</h4>
                      <p className="font-display text-2xl font-bold">24/7 Realtime</p>
                   </div>
               </div>
           </div>

           {/* RESULTS */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-12 border border-neutral-200 shadow-sm rounded-3xl">
                  <div className="font-display font-black text-6xl text-ink mb-2">0s</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">Latency</div>
              </div>
              <div className="p-12 border border-gray-100 rounded-3xl bg-ink text-white">
                  <div className="font-display font-black text-6xl text-accent-lime mb-2">50+</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">Deals Closed</div>
              </div>
              <div className="bg-white p-12 border border-neutral-200 shadow-sm rounded-3xl">
                  <div className="font-display font-black text-6xl text-ink mb-2">100%</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">Coverage</div>
              </div>
           </div>

       </section>

       {/* NEXT PROJECT */}
       <section className="bg-ink text-white py-32 px-6 md:px-12 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gray-500 mb-8">Up Next</p>
          <Link to="/casos/velvet" className="inline-block group">
             <h2 className="font-display font-black text-[8vw] leading-none group-hover:text-accent-lime transition-colors">
                Velvet AI
             </h2>
             <div className="h-[2px] w-0 bg-accent-lime group-hover:w-full transition-all duration-500 mx-auto mt-4"></div>
          </Link>
       </section>

    </div>
  );
};

export default Inted;
