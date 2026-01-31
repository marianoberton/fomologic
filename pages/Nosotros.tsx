import React, { useEffect, useState } from 'react';
import Closing from '../components/Closing';
import Careers from '../components/Careers';
import Manifesto from '../components/Manifesto';
import Team from '../components/Team';
import { ArrowRight, CheckCircle2, Zap, Search, Users, Globe, ArrowUpRight, Linkedin, Brain, Link as LinkIcon, Database, Triangle, Cloud, Terminal } from 'lucide-react';

const Nosotros: React.FC = () => {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-canvas text-ink font-sans selection:bg-accent-lime selection:text-ink overflow-x-hidden">
      
      {/* =====================================================================================
          HERO: CLEAN & IMPACT (100% Viewport)
         ===================================================================================== */}
      <section className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 bg-canvas overflow-hidden">
         
         {/* Subtle Background Pattern */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-gradient-to-b from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-to-t from-gray-50 to-transparent rounded-tr-full opacity-50"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
         </div>

         <div className="max-w-[1600px] mx-auto w-full relative z-10">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
               <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
               <span className="font-body text-xs uppercase tracking-widest text-gray-500">Who We Are</span>
            </div>

            <h1 className="font-display font-black text-[9vw] leading-[0.85] tracking-tighter text-ink mb-12 animate-fade-in-up opacity-0 max-w-7xl" style={{ animationDelay: '0.2s' }}>
              AI Transformation <br/>
              <span className="text-gray-300">Partner.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
               <div className="lg:col-span-5">
                  <p className="font-body text-2xl font-light leading-relaxed text-gray-600">
                     En FOMO creemos que estamos entrando en la transformación tecnológica más grande desde la creación de Internet.
                  </p>
               </div>
               <div className="lg:col-span-7 flex flex-col gap-6 justify-between h-full">
                  <p className="font-body text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                     Y, como toda revolución, no avanza en línea recta: avanza en saltos. Modelos que cambian cada 90 días. Plataformas que se reescriben de un trimestre al otro. Nosotros existimos para que tu empresa no solo sobreviva al salto, sino que lo lidere.
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
          PHILOSOPHY: MANIFESTO STYLE
         ===================================================================================== */}
      <Manifesto />

      {/* =====================================================================================
          FOUNDERS & PARTNERS (Team Component)
         ===================================================================================== */}
      <Team />

      {/* =====================================================================================
          CAREERS / JOIN US
         ===================================================================================== */}
      <Careers />

      {/* =====================================================================================
          WHY WE EXIST
         ===================================================================================== */}
      <section className="py-40 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
         <div className="max-w-[1000px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-12">
               <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></span>
               <span className="font-body text-xs text-gray-500 uppercase tracking-widest">Why We Exist</span>
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-12 leading-[0.9] tracking-tighter text-balance">
               Porque la IA no es opcional. <br/>
               <span className="text-gray-300">Porque no es estable.</span>
            </h2>

            <div className="font-body text-xl md:text-2xl text-gray-600 font-light leading-relaxed space-y-8 max-w-3xl mx-auto">
               <p>
                  Un negocio que intenta adaptarse solo termina siempre en lo mismo: herramientas desconectadas, pruebas inconclusas y oportunidades perdidas.
               </p>
               <p className="text-ink font-medium">
                  Somos el partner que evita que la empresa se quede atrás. <br/>
                  Y el que la impulsa a liderar.
               </p>
            </div>
         </div>
      </section>

      <Closing />
    </div>
  );
};

export default Nosotros;