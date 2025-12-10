import React, { useEffect, useState } from 'react';
import Closing from '../components/Closing';
import Careers from '../components/Careers';
import { ArrowRight, CheckCircle2, Zap, Search, Users, Globe, ArrowUpRight, Linkedin, Brain, Link as LinkIcon, Database, Triangle, Cloud, Terminal } from 'lucide-react';

const Nosotros: React.FC = () => {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- DATA ---
  const founders = [
    {
      name: "Guillermina Berton",
      role: "Co-Founder · Procesos · Transformación Digital",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      bio: "Diseño de procesos, mapeo y ordenamiento operativo. Asegurando que la tecnología aterrice en suelo fértil.",
      linkedin: "#",
      stats: [
        { label: "Process Design", value: "Expert" },
        { label: "Ops Clarity", value: "100%" }
      ]
    },
    {
      name: "Mariano Berton",
      role: "Co-Founder · Desarrollo · IA & Automatización",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      bio: "Arquitectura de automatizaciones, IA aplicada e integraciones. Convirtiendo estrategia en código funcional.",
      linkedin: "#",
      stats: [
        { label: "Automation", value: "Native" },
        { label: "AI Systems", value: "Scale" }
      ]
    }
  ];

  const techStack = [
    { name: "OpenAI", desc: "Modelos de Lenguaje", icon: Brain },
    { name: "LangChain", desc: "Orquestación de Agentes", icon: LinkIcon },
    { name: "Pinecone", desc: "Memoria Vectorial", icon: Database },
    { name: "Vercel", desc: "Infraestructura Frontend", icon: Triangle },
    { name: "AWS", desc: "Cloud Computing", icon: Cloud },
    { name: "Python", desc: "Core Development", icon: Terminal }
  ];

  // Placeholder images for partners background
  const partnerFaces = [
     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop",
     "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop"
  ];

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
      <section className="py-32 px-6 md:px-12 bg-canvas relative border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
               <div className="md:col-span-4 sticky top-32 h-fit">
                  <h2 className="font-display font-bold text-6xl md:text-7xl text-ink tracking-tight mb-8 leading-none">
                     Nuestra <br/> <span className="text-gray-300">Filosofía</span>
                  </h2>
                  <p className="font-body text-gray-500 font-light text-lg leading-relaxed mb-8 tracking-normal">
                     No creemos en "implementar tecnología". Creemos en transformar negocios para que la tecnología tenga dónde funcionar.
                  </p>
                  <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm">
                     <p className="font-display text-xl text-ink italic tracking-tight">
                        "No somos solo 'teclas'. Somos criterio, proceso y visión."
                     </p>
                  </div>
               </div>

               <div className="md:col-span-1"></div>

               <div className="md:col-span-7">
                  <div className="bg-[#272727] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-full border border-white/5">
                     
                     {/* Technical Grid Texture */}
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                     
                     {/* Card Header */}
                     <div className="relative z-10 flex items-center justify-between pb-8 mb-12 border-b border-white/10">
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                           <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                           <span className="font-mono text-xs text-white uppercase tracking-widest">Nuestra Filosofía</span>
                        </div>
                        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                           Core.sys
                        </div>
                     </div>

                     {/* List */}
                     <div className="relative z-10 flex flex-col gap-10">
                        {[
                           "Ordenar y mapear operaciones",
                           "Detectar ineficiencias (cuellos de botella)",
                           "Diseñar procesos que escalen",
                           "Automatizar lo que consume energía",
                           "Integrar herramientas dispersas",
                           "Crear soluciones inteligentes",
                           "Sostener el movimiento continuo"
                        ].map((item, i) => (
                           <div key={i} className="group flex items-start gap-6 cursor-default">
                              <span className="font-mono text-sm text-gray-600 group-hover:text-accent-lime transition-colors pt-2">0{i+1}</span>
                              <span className="font-display text-2xl md:text-3xl tracking-tight text-[#ececec] group-hover:text-white transition-colors leading-tight">
                                 {item}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* =====================================================================================
          FOUNDERS: EDITORIAL WITH LINKEDIN
         ===================================================================================== */}
      <section className="py-32 px-6 md:px-12 bg-canvas">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="font-display font-bold text-4xl mb-20 text-center tracking-tighter">Architects & Founders</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
               <div 
                  key={index} 
                  className="group relative bg-[#fafafa] rounded-[2rem] overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-700 hover:shadow-2xl hover:shadow-gray-200/50"
                  onMouseEnter={() => setHoveredFounder(index)}
                  onMouseLeave={() => setHoveredFounder(null)}
               >
                  {/* Image Area */}
                  <div className="h-[400px] overflow-hidden relative">
                     <img 
                        src={founder.img} 
                        alt={founder.name} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent opacity-90"></div>
                     
                     {/* LinkedIn Button - Floated */}
                     <div className="absolute top-6 right-6 z-10">
                        <a href={founder.linkedin} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#272727] hover:bg-[#272727] hover:text-white transition-all duration-300 shadow-sm">
                          <Linkedin size={18} />
                        </a>
                     </div>
                  </div>

                  {/* Content Area - Data Sheet */}
                  <div className="p-8 md:p-10 relative z-10 -mt-20">
                     <h3 className="font-display font-bold text-4xl mb-8 text-[#272727]">{founder.name}</h3>
                     
                     {/* Data Grid */}
                     <div className="flex flex-col">
                        
                        {/* Row 1: Role */}
                        <div className="py-4 border-t border-[#272727]/10">
                           <div className="grid grid-cols-12 gap-4 items-baseline">
                              <span className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[#272727]/60">Rol</span>
                              <span className="col-span-12 md:col-span-9 font-body font-bold text-lg text-[#272727] leading-tight">
                                 {founder.role}
                              </span>
                           </div>
                        </div>

                        {/* Row 2: Superpower */}
                        <div className="py-4 border-t border-[#272727]/10">
                           <div className="grid grid-cols-12 gap-4 items-baseline">
                              <span className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-[#272727]/60">Superpoder</span>
                              <p className="col-span-12 md:col-span-9 font-body font-medium text-lg text-[#272727] leading-relaxed">
                                 {founder.bio}
                              </p>
                           </div>
                        </div>

                        {/* Row 3: Stats */}
                        <div className="pt-6 mt-2 border-t border-[#272727]/10">
                           <div className="grid grid-cols-2 gap-8">
                              {founder.stats.map((stat, i) => (
                                 <div key={i}>
                                    <div className="font-display font-bold text-2xl text-[#272727] mb-1">{stat.value}</div>
                                    <div className="font-mono text-[10px] text-[#272727]/60 uppercase tracking-widest">{stat.label}</div>
                                 </div>
                              ))}
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            ))}
            </div>
         </div>
      </section>

      {/* =====================================================================================
          PARTNERS: SERVER RACK GRID SYSTEM
         ===================================================================================== */}
      <section className="py-40 px-6 md:px-12 bg-[#272727] text-white relative overflow-hidden">
         
         {/* Background Grid Pattern (Subtle) */}
         <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
         </div>

         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
               <div>
                  <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter text-white">Stack <br/> Tecnológico</h2>
                  <p className="text-gray-400 font-light text-lg max-w-xl leading-relaxed">
                     No somos fanáticos de una herramienta, somos expertos en el ecosistema. Elegimos la tecnología que mejor se adapta a tu escala.
                  </p>
               </div>
               <div className="flex items-center gap-2 text-accent-lime px-5 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md mt-8 md:mt-0">
                   <Globe size={18} />
                   <span className="font-body text-xs uppercase tracking-widest">Systems Operational</span>
               </div>
            </div>

            {/* Unified Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
               {techStack.map((tech, i) => (
                  <div key={i} className="group relative flex flex-col items-center justify-center p-16 border-r border-b border-white/10 hover:bg-white/5 transition-all duration-300 cursor-default">
                     
                     {/* Corner Accents (Technical Feel) */}
                     <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                     {/* Icon */}
                     <div className="mb-8 text-gray-500 group-hover:text-accent-lime transition-colors duration-300 transform group-hover:scale-110">
                        <tech.icon size={32} strokeWidth={1.5} />
                     </div>
                     
                     {/* Text */}
                     <h3 className="font-display text-2xl text-center text-white group-hover:text-accent-lime transition-colors duration-300 capitalize leading-tight tracking-tight mb-2">
                        {tech.name}
                     </h3>
                     <p className="font-body text-sm text-gray-500 text-center tracking-wide">
                        {tech.desc}
                     </p>

                     {/* Status Indicator */}
                     <div className="absolute bottom-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="w-1.5 h-1.5 bg-accent-lime rounded-full animate-pulse"></div>
                        <span className="font-mono text-[10px] text-accent-lime/70 uppercase tracking-widest">Ready</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

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