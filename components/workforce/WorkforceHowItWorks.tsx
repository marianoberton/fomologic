import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Zap, BarChart3, ChevronRight } from 'lucide-react';
import VisualAIAgents from '../VisualAIAgents';
import VisualAutomation from '../VisualAutomation';
import VisualBI from '../VisualBI';

gsap.registerPlugin(ScrollTrigger);

const WorkforceHowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.feature-card');
    
    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-16 md:py-24 bg-canvas relative z-10 border-t border-neutral-200/5">
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Header - More Compact */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-200 pb-8">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#CED600] rounded-full"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Arquitectura</span>
                    </div>
                    <h2 className="font-manrope text-3xl md:text-4xl font-bold text-black leading-tight">
                        No son herramientas.<br/>
                        <span className="text-neutral-400">Son empleados digitales.</span>
                    </h2>
                </div>
                <p className="font-karla text-neutral-500 max-w-sm text-sm md:text-right">
                    Infraestructura escalable de agentes autónomos que se integran a tu operación existente sin fricción.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1: Cognitivo */}
                <div className="feature-card flex flex-col gap-4 group">
                    <div className="h-[240px] w-full rounded-2xl overflow-hidden relative bg-[#1A1A1A]">
                        <VisualAIAgents />
                        <div className="absolute top-4 left-4 z-20">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white">
                                <Brain size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-manrope text-xl font-bold text-black">Procesamiento Cognitivo</h3>
                        <p className="font-karla text-sm text-neutral-500 leading-relaxed">
                            Ingestión masiva de datos no estructurados. Convertimos audio, texto y documentos en inputs estructurados JSON.
                        </p>
                        
                        {/* Tech Specs */}
                        <div className="pt-3 border-t border-neutral-100">
                            <ul className="space-y-1.5">
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>GPT-4o + Whisper V3</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Vector Database RAG</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Sentiment Analysis</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2: Autónomo */}
                <div className="feature-card flex flex-col gap-4 group">
                    <div className="h-[240px] w-full rounded-2xl overflow-hidden relative bg-[#1A1A1A]">
                        <VisualAutomation />
                        <div className="absolute top-4 left-4 z-20">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white">
                                <Zap size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-manrope text-xl font-bold text-black">Flujo Autónomo</h3>
                        <p className="font-karla text-sm text-neutral-500 leading-relaxed">
                            Orquestación de agentes sin supervisión. Manejo de estados, reintentos y escalamiento automático ante picos.
                        </p>
                         {/* Tech Specs */}
                         <div className="pt-3 border-t border-neutral-100">
                            <ul className="space-y-1.5">
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Event-Driven Arch</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Auto-Healing Logic</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>&lt; 200ms Latency</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3: Impacto */}
                <div className="feature-card flex flex-col gap-4 group">
                    <div className="h-[240px] w-full rounded-2xl overflow-hidden relative bg-[#1A1A1A]">
                        <VisualBI />
                        <div className="absolute top-4 left-4 z-20">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white">
                                <BarChart3 size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-manrope text-xl font-bold text-black">Impacto de Negocio</h3>
                        <p className="font-karla text-sm text-neutral-500 leading-relaxed">
                            Dashboarding en tiempo real y atribución de ingresos. Cada interacción queda registrada y vinculada a un resultado.
                        </p>
                         {/* Tech Specs */}
                         <div className="pt-3 border-t border-neutral-100">
                            <ul className="space-y-1.5">
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>SQL Analytics</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Custom Reporting</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                    <ChevronRight size={10} className="text-[#CED600]" />
                                    <span>Revenue Attribution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
};

export default WorkforceHowItWorks;