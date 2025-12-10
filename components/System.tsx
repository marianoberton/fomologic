
import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, ArrowRight, Layers, BarChart3, Mail, Database } from 'lucide-react';

const System: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#272727] rounded-t-[4rem] relative z-20 -mt-20 shadow-[0_-50px_100px_rgba(0,0,0,0.03)] border-t border-gray-50 overflow-hidden snap-start">
      
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        
        {/* Header - Consistent Typography */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                <span className="font-body text-xs tracking-widest text-gray-400 lowercase">servicios</span>
            </div>
            <h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter text-white text-balance">
              El sistema operativo <br/> <span className="text-gray-300 font-light">de tu negocio.</span>
            </h2>
          </div>
          <p className="font-body text-gray-400 text-lg md:text-xl font-light max-w-md text-right leading-relaxed">
            Módulos interconectados diseñados para eliminar la fricción humana en procesos de alto volumen.
          </p>
        </div>

        {/* --- LIVE BENTO GRID --- */}
        {/* Grid setup: 3 columns on large screens. Rows 340px tall. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:auto-rows-[340px]">
          
          {/* CARD 1: PREPARACIÓN OPERATIVA (Blueprint) - Top Left (Small) */}
          <div className="group bg-[#1C1C1C] text-white p-8 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-black/70 flex flex-col relative overflow-hidden lg:col-span-1 lg:h-[340px]">
            {/* GLOWING DETAIL: L-Corner */}
            <motion.img 
              src="/svg/illustrations/06-Flat_L_Corner.svg" 
              alt="" 
              className="absolute bottom-[-10%] left-[-10%] w-32 h-32 opacity-30 drop-shadow-[0_0_8px_rgba(217,249,157,0.5)] pointer-events-none"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
               <Layers size={32} className="text-accent-lime" />
            </div>
            
            <div className="mt-auto relative z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-accent-lime mb-4 backdrop-blur-sm">
                Fase 01
              </span>
              <h3 className="font-display font-bold text-2xl mb-3 leading-tight">
                Preparación <br/> Operativa
              </h3>
              <p className="font-body text-neutral-200 leading-relaxed text-balance font-light text-xs md:text-sm border-l-2 border-transparent pl-0 group-hover:border-accent-lime group-hover:pl-4 transition-all duration-500 line-clamp-3">
                Auditoría profunda de procesos. Estandarizamos el caos antes de automatizarlo.
              </p>
            </div>
          </div>

          {/* CARD 2: AUTOMATIZACIÓN (Flows) - Top Right (Wide) */}
          <div className="group bg-[#1C1C1C] text-white p-0 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-black/70 flex flex-col md:flex-row relative overflow-hidden border border-white/10 shadow-2xl shadow-black/50 hover:border-white/20 lg:col-span-2 lg:h-[340px]">
             
             {/* GLOWING DETAIL: Minus Dash */}
             <motion.img 
                src="/svg/illustrations/08-Flat_Minus_Dash.svg" 
                alt="" 
                className="absolute top-8 right-8 z-20 w-16 h-16 opacity-40 drop-shadow-[0_0_8px_rgba(217,249,157,0.5)] pointer-events-none"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* Visual Header (Now Left Side) */}
             <div className="h-1/2 md:h-full md:w-1/2 bg-[#272727] relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
                <Workflow size={48} strokeWidth={1} className="text-white/20 group-hover:text-accent-lime group-hover:scale-110 transition-all duration-700" />
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-xl border border-white/10 bg-[#1C1C1C]/50 backdrop-blur-md flex items-center justify-center animate-float">
                   <Mail size={16} className="text-white/60"/>
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-xl border border-white/10 bg-[#1C1C1C]/50 backdrop-blur-md flex items-center justify-center animate-float-slow">
                   <Database size={16} className="text-white/60"/>
                </div>
             </div>

             <div className="h-1/2 md:h-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative z-10">
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-accent-lime mb-4 backdrop-blur-sm w-fit">
                  Fase 02
                </span>
                <h3 className="font-display font-bold text-3xl mb-3 text-white">
                  Automatización <br/> de Flujos
                </h3>
                <p className="font-body text-neutral-200 leading-relaxed text-balance font-light text-sm md:text-base border-l-2 border-transparent pl-0 group-hover:border-accent-lime group-hover:pl-4 transition-all duration-500">
                  Conectamos tu CRM, Email y bases de datos. El sistema empieza a mover la información por ti.
                </p>
             </div>
          </div>

          {/* CARD 3: AGENTES IA - Bottom Left (Wide) */}
          <div className="group bg-[#1C1C1C] text-white p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-black/70 relative overflow-hidden flex flex-col justify-center lg:col-span-2 lg:h-[340px]">
              {/* GLOWING DETAIL: Plus Sign */}
              <motion.img 
                src="/svg/illustrations/09-Flat_Plus_Sign.svg" 
                alt="" 
                className="absolute bottom-[-2rem] right-[-2rem] w-32 h-32 opacity-20 drop-shadow-[0_0_8px_rgba(217,249,157,0.5)] pointer-events-none rotate-12"
                animate={{ opacity: [0.1, 0.4, 0.1], rotate: [12, 45, 12] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-accent-lime/20 pointer-events-none"></div>
              
              <div className="relative z-10 max-w-xl">
                <div className="flex justify-between items-start mb-6">
                   <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-accent-lime backdrop-blur-sm">
                     Fase 03
                   </span>
                   <Bot size={32} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-white">
                  Agentes de IA
                </h3>
                <p className="font-body text-neutral-200 leading-relaxed text-balance font-light text-sm md:text-base border-l-2 border-transparent pl-0 group-hover:border-accent-lime group-hover:pl-4 transition-all duration-500 max-w-lg">
                  Cerebros digitales propios. Entrenamos Agentes con tu información para que atiendan clientes, coticen y asistan a tu equipo al instante.
                </p>
              </div>
          </div>

          {/* CARD 4: BUSINESS INTELLIGENCE (Small) - Bottom Right */}
          <div className="group bg-[#1C1C1C] text-white p-8 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-black/70 relative overflow-hidden flex flex-col lg:col-span-1 lg:h-[340px]">
              {/* GLOWING DETAIL: I-Beam */}
              <motion.img 
                src="/svg/illustrations/04-Flat_I_Beam.svg" 
                alt="" 
                className="absolute top-6 left-6 w-12 h-12 opacity-40 drop-shadow-[0_0_8px_rgba(217,249,157,0.5)] pointer-events-none"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mt-auto relative z-10 mb-2">
                 <div className="flex justify-between items-start mb-4">
                   <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-accent-lime backdrop-blur-sm">
                     Fase 04
                   </span>
                   <BarChart3 size={24} className="text-white/40 group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-display font-bold text-2xl mb-3 text-white">
                  Business <br/> Intelligence
                </h3>
                <p className="font-body text-neutral-200 leading-relaxed text-balance font-light text-xs md:text-sm border-l-2 border-transparent pl-0 group-hover:border-accent-lime group-hover:pl-4 transition-all duration-500 line-clamp-3">
                  Visibilidad en vivo. Un panel centralizado de métricas.
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
                 <div className="flex flex-col">
                    <span className="font-body text-[9px] text-white/40 tracking-widest lowercase group-hover:text-white transition-colors">
                       metric: <span className="text-white/60">optimization</span>
                    </span>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowRight size={14} className="text-white group-hover:text-ink transition-colors" />
                 </div>
              </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default System;
