
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      num: '01',
      id: 'discovery',
      title: 'Discovery',
      subtitle: 'Auditoría Profunda',
      desc: 'No adivinamos. Mapeamos cada nodo de tu operación actual para encontrar cuellos de botella invisibles.',
      tags: ['Data Mining', 'Process Mapping']
    },
    {
      num: '02',
      id: 'validation',
      title: 'Validation',
      subtitle: 'Prototipado Ágil',
      desc: 'Desplegamos soluciones piloto en entornos controlados. Validamos el ROI antes de escribir la línea final de código.',
      tags: ['Rapid Prototyping', 'User Testing']
    },
    {
      num: '03',
      id: 'scale',
      title: 'Execution',
      subtitle: 'Despliegue Masivo',
      desc: 'Industrializamos la solución. Conectamos la infraestructura, activamos los agentes y transferimos el control.',
      tags: ['Full Deployment', 'Knowledge Transfer']
    }
  ];

  return (
    <section className="min-h-screen bg-canvas flex flex-col justify-center relative z-20 snap-center overflow-hidden">
      
      {/* Header Area */}
      <div className="pt-24 px-6 md:px-12 max-w-[1800px] mx-auto w-full mb-24 flex flex-col md:flex-row justify-between items-end relative z-10">
         <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
               <span className="font-body text-xs uppercase tracking-widest text-gray-400">The Algorithm</span>
            </div>
            {/* Consistent H2 */}
            <h2 className="font-display font-bold text-5xl md:text-7xl text-black tracking-tighter">
               Protocolo <br/><span className="text-gray-300 font-light">de Escala</span>
            </h2>
         </div>
         <p className="font-body text-neutral-600 max-w-md text-right mt-8 md:mt-0 font-light text-lg">
            Un proceso cíclico y determinista diseñado para eliminar la incertidumbre en la transformación digital.
         </p>
      </div>

      {/* THE PIPELINE GRID */}
      <div className="flex-grow w-full border-t border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-6 md:px-12 pb-24">
         
         {steps.map((step, i) => (
            <div key={i} className="group relative min-h-[500px] md:min-h-[60vh] flex flex-col justify-between p-8 md:p-12 cursor-default overflow-hidden bg-white rounded-2xl border border-neutral-200 shadow-sm">
               
               {/* 1. BACKGROUND NUMBER (Parallax Effect) */}
               {/* Moves slightly UP and fades IN on hover */}
               <div className="absolute top-[-20px] right-[-20px] md:right-4 font-display font-black text-[12rem] md:text-[16rem] leading-none text-gray-50 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-gray-100 group-hover:translate-y-[-20px] select-none z-0 pointer-events-none">
                  {step.num}
               </div>

               {/* 2. CONTENT CONTAINER (Lift Effect) */}
               {/* Moves slightly UP on hover */}
               <div className="relative z-10 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 h-full flex flex-col justify-between">
                  
                  {/* Top Content */}
                  <div>
                    <div className="flex justify-between items-start mb-12">
                        <span className="font-body text-[10px] text-gray-400 border border-gray-200 px-2 py-1 rounded bg-white group-hover:border-accent-lime group-hover:text-accent-lime transition-colors duration-700">
                            Phase_{step.num}
                        </span>
                        {/* Icon rotates smoothly */}
                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-ink group-hover:text-ink group-hover:rotate-[-45deg] transition-all duration-700 bg-white">
                            <ArrowRight size={14} />
                        </div>
                    </div>

                    <h3 className="font-display font-bold text-4xl md:text-5xl text-black mb-2">
                        {step.title}
                    </h3>
                    <h4 className="font-body text-sm text-neutral-500 uppercase tracking-widest group-hover:text-accent-orange transition-colors duration-500">
                        {step.subtitle}
                    </h4>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-12 md:mt-0">
                    <p className="font-body text-neutral-600 font-light leading-relaxed text-lg mb-8 max-w-sm group-hover:text-ink transition-colors duration-700">
                        {step.desc}
                    </p>
                    
                    {/* Tags: Staggered Fade In */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-0 delay-100">
                        {step.tags.map((tag, idx) => (
                            <span key={idx} className="font-body text-[9px] uppercase tracking-wider text-ink/80 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                            </span>
                        ))}
                    </div>
                  </div>
               </div>
               
               {/* 3. ELEGANT PROGRESS LINE */}
               {/* Expands smoothly from center or left */}
               <div className="absolute bottom-0 left-0 h-[2px] bg-accent-lime w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
               
               {/* Subtle background highlight (No aggressive colors) */}
               <div className="absolute inset-0 bg-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] -z-10"></div>

            </div>
         ))}

      </div>

    </section>
  );
};

export default Methodology;
