
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Showcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const cases = [
    {
      id: '01',
      client: 'MarketPaper',
      category: 'High Volume Automation',
      description: 'Optimizando el flujo de 10k leads mensuales.',
      tech: 'n8n + hubspot',
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '02',
      client: 'Inted',
      category: 'Data Mining & Alerts',
      description: 'Sistemas de detección temprana de oportunidades.',
      tech: 'python + telegram',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '03',
      client: 'Velvet',
      category: 'AI Customer Support',
      description: 'Agentes autónomos para soporte 24/7.',
      tech: 'openai + vector db',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
    }
  ];

  // Update cursor position relative to the viewport
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className="py-32 bg-canvas relative cursor-default snap-start"
      onMouseMove={handleMouseMove}
    >
       <div className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
          
          {/* Header - Consistent Typography */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-gray-200/50">
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                   <span className="font-body text-xs uppercase tracking-widest text-gray-400">Featured Projects</span>
                </div>
                <h2 className="font-display font-bold text-5xl md:text-7xl text-black tracking-tighter text-balance">
                  Evidencia <span className="text-gray-300 font-light">reciente.</span>
                </h2>
             </div>
             <span className="hidden md:block font-body text-[10px] text-accent-orange border border-accent-orange/30 bg-accent-orange/10 px-3 py-1 rounded-full tracking-widest pb-0.5 lowercase">
               selected works 2024-25
             </span>
          </div>

          <div className="flex flex-col" onMouseLeave={() => setActiveCase(null)}>
            {cases.map((project, index) => (
              <div 
                key={project.id} 
                onMouseEnter={() => setActiveCase(project.id)}
                className={`group relative py-12 md:py-16 transition-all duration-500 border-b border-gray-100 ${index === cases.length - 1 ? 'border-b-0' : ''} ${activeCase && activeCase !== project.id ? 'opacity-30 blur-[1px]' : 'opacity-100 blur-0'}`}
              >
                {/* --- 3D PORTAL (Hologram Projection) --- */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] z-0 pointer-events-none flex items-center justify-center">
                    
                    {/* The Slab (Frame) */}
                    <img 
                        src="/svg/illustrations/01-Iso_Base_Slab.svg" 
                        alt="" 
                        className="absolute w-[120%] h-[120%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out drop-shadow-2xl"
                    />

                    {/* The Image (Projected) */}
                    <div className="relative w-[90%] h-[80%] rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
                        <img 
                            src={project.image} 
                            alt={project.client} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-accent-lime/10 mix-blend-multiply"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                  
                  {/* Left info */}
                  <div className="flex items-baseline gap-8 md:gap-12 md:w-1/3">
                    {/* FIXED CONTRAST: Orange text instead of Lime on hover */}
                    <span className="font-body text-xs text-gray-300 group-hover:text-accent-orange transition-colors">/{project.id}</span>
                    <h3 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-black group-hover:translate-x-4 transition-transform duration-500 ease-out">{project.client}</h3>
                  </div>

                  {/* Center info */}
                  <div className="md:w-1/3 pl-0 md:pl-12">
                    <p className="font-body text-neutral-600 group-hover:text-ink transition-colors duration-300 text-lg font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Pill */}
                  <div className="flex justify-between items-center w-full md:w-1/3 md:justify-end gap-6">
                     <span className="px-4 py-1.5 rounded-full border border-gray-100 bg-canvas group-hover:border-ink group-hover:bg-ink group-hover:text-white font-body text-[10px] text-gray-400 tracking-widest transition-colors lowercase">
                       {project.tech}
                     </span>
                     <div className="w-12 h-12 bg-transparent border border-gray-200 group-hover:border-ink group-hover:bg-ink rounded-full flex items-center justify-center text-ink group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-100">
                        <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
                     </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            {/* FIXED CONTRAST: Using background pill effect instead of light text color */}
            <button className="text-ink font-display text-xs tracking-widest px-6 py-3 rounded-full hover:bg-accent-lime hover:text-ink transition-all duration-300 lowercase border border-transparent hover:border-accent-lime">
              ver todos los casos
            </button>
          </div>

       </div>
    </section>
  );
};

export default Showcase;
