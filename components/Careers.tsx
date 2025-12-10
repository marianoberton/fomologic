
import React, { useState } from 'react';
import { ArrowUpRight, Plus, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const jobs = [
    { 
      id: '01',
      title: "Senior Automation Architect", 
      type: "Full-time", 
      location: "Remote / Madrid",
      mission: "Diseñar la orquestación central de clientes Enterprise. Dominio absoluto de n8n, Python y arquitecturas serverless.",
      tags: ["n8n", "Python", "AWS"]
    },
    { 
      id: '02',
      title: "AI Solutions Engineer", 
      type: "Full-time", 
      location: "Remote",
      mission: "Implementar agentes autónomos RAG. Convertir bases de conocimiento estáticas en oráculos dinámicos.",
      tags: ["LangChain", "Vector DB", "OpenAI"]
    },
    { 
      id: '03',
      title: "Frontend Developer (Creative)", 
      type: "Contract", 
      location: "Remote",
      mission: "Traducir lógica compleja en interfaces fluidas. Obsesión por las micro-interacciones y WebGL.",
      tags: ["React", "WebGL", "GSAP"]
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-canvas rounded-t-[4rem] -mt-20 relative z-30 shadow-[0_-40px_80px_rgba(0,0,0,0.03)] border-t border-gray-100 snap-start">
       <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header - Consistent Typography */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                   <span className="font-body text-xs uppercase tracking-widest text-gray-400">Recruitment Protocol</span>
                </div>
                <h2 className="font-display font-semibold text-5xl md:text-7xl text-ink tracking-tighter leading-[0.9]">
                   Unete al <br/> <span className="text-gray-300 font-light">laboratorio.</span>
                </h2>
             </div>
             <p className="max-w-md text-right text-gray-400 font-light mt-8 md:mt-0 text-lg leading-relaxed">
                No buscamos empleados. Buscamos arquitectos de eficiencia obsesionados con eliminar la fricción.
             </p>
          </div>

          {/* The List */}
          <div className="flex flex-col">
             {jobs.map((job, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative border-t border-gray-200 transition-all duration-500 cursor-pointer overflow-hidden
                    ${hoveredIndex === index ? 'bg-ink text-white border-ink py-12' : 'bg-transparent text-ink py-8 hover:bg-white hover:shadow-sm'}`}
                >
                   <div className="px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                      
                      {/* Left: ID & Title */}
                      <div className="flex items-baseline gap-8 md:w-1/3">
                         <span className={`font-body text-sm transition-colors duration-300 ${hoveredIndex === index ? 'text-accent-lime' : 'text-gray-400'}`}>
                           /{job.id}
                         </span>
                         <h3 className="font-display text-3xl md:text-4xl tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                            {job.title}
                         </h3>
                      </div>

                      {/* Middle: Tags (Visible on Hover/Desktop) */}
                      <div className="hidden md:flex gap-3 md:w-1/3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                         {job.tags.map((tag, i) => (
                            <span key={i} className="font-body text-[10px] uppercase tracking-wider border border-white/20 px-3 py-1 rounded-full text-white/80">
                               {tag}
                            </span>
                         ))}
                      </div>

                      {/* Right: Meta & Arrow */}
                      <div className="flex w-full md:w-1/3 justify-between md:justify-end items-center mt-6 md:mt-0 gap-8">
                         <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2">
                               <Clock size={12} className={hoveredIndex === index ? 'text-accent-lime' : 'text-gray-400'} />
                               <span className={`font-body text-xs uppercase tracking-wider ${hoveredIndex === index ? 'text-white' : 'text-gray-500'}`}>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <MapPin size={12} className={hoveredIndex === index ? 'text-accent-lime' : 'text-gray-400'} />
                               <span className={`font-body text-xs uppercase tracking-wider ${hoveredIndex === index ? 'text-white' : 'text-gray-500'}`}>{job.location}</span>
                            </div>
                         </div>
                         
                         <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500
                            ${hoveredIndex === index ? 'bg-accent-lime border-accent-lime text-ink rotate-45 scale-110' : 'border-gray-200 text-gray-300 group-hover:border-ink group-hover:text-ink'}`}>
                            <ArrowUpRight size={24} strokeWidth={1.5} />
                         </div>
                      </div>

                   </div>

                   {/* Expandable Description */}
                   <div className={`px-4 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-24 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                      <div className="pl-0 md:pl-[calc(33%+2rem)] max-w-3xl">
                         <p className="font-body font-light text-gray-300 text-lg leading-relaxed">
                            {job.mission}
                         </p>
                      </div>
                   </div>

                </div>
             ))}
             {/* Bottom Border */}
             <div className="border-t border-gray-200"></div>
          </div>

          <div className="mt-20 text-center">
             <a href="mailto:careers@fomo.com" className="inline-block group relative">
                {/* FIXED CONTRAST: Orange hover text */}
                <span className="font-display text-xl text-ink relative z-10 group-hover:text-accent-orange transition-colors duration-300 lowercase">
                   no ves tu rol? envíanos tu portfolio
                </span>
                {/* Highlight underline */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ink group-hover:bg-accent-orange transition-colors duration-300 origin-left group-hover:scale-x-100 scale-x-100"></div>
             </a>
          </div>

       </div>
    </section>
  );
};

export default Careers;
