
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Closing from '../components/Closing';

const Cases: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const cases = [
    {
      id: '01',
      slug: 'marketpaper',
      client: 'MarketPaper',
      category: 'High Volume Automation',
      description: 'Optimizando el flujo de 10k leads mensuales.',
      tech: 'n8n + hubspot',
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '02',
      slug: 'inted',
      client: 'Inted',
      category: 'Data Mining & Alerts',
      description: 'Sistemas de detección temprana de oportunidades.',
      tech: 'python + telegram',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '03',
      slug: 'velvet',
      client: 'Velvet',
      category: 'AI Customer Support',
      description: 'Agentes autónomos para soporte 24/7.',
      tech: 'openai + vector db',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-ink font-sans cursor-default" onMouseMove={handleMouseMove}>
      
      {/* --- FLOATING IMAGE REVEAL (Shared Logic) --- */}
      <div 
         className="fixed pointer-events-none z-50 w-[400px] h-[280px] rounded-2xl overflow-hidden transition-opacity duration-500 ease-out hidden md:block shadow-2xl border border-white"
         style={{ 
           left: cursorPos.x, 
           top: cursorPos.y, 
           transform: 'translate(-50%, -50%)',
           opacity: activeCase ? 1 : 0,
           scale: activeCase ? 1 : 0.8,
           transition: 'opacity 0.4s ease, transform 0.2s ease-out'
         }}
       >
          {cases.map((project) => (
            <div 
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-500 ${activeCase === project.id ? 'opacity-100' : 'opacity-0'}`}
            >
               <img src={project.image} alt={project.client} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-accent-lime/10 mix-blend-multiply"></div>
            </div>
          ))}
       </div>

      <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
          
          <div className="mb-32">
              <span className="font-body text-xs uppercase tracking-widest text-ink border border-ink px-2 py-0.5 rounded-full">Archive</span>
              <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter text-[#171717] mt-8 mb-8">
                selected <br/>
                <span className="text-gray-300">works.</span>
              </h1>
          </div>

          <div className="flex flex-col border-t border-neutral-300 group/list" onMouseLeave={() => setActiveCase(null)}>
            {cases.map((project, index) => (
              <Link 
                to={`/casos/${project.slug}`}
                key={project.id} 
                onMouseEnter={() => setActiveCase(project.id)}
                className={`group/item relative py-12 md:py-20 transition-all duration-300 border-b border-neutral-300 hover:bg-white px-4 md:px-8 -mx-4 md:-mx-8 rounded-xl ${activeCase && activeCase !== project.id ? 'opacity-40 blur-[0.5px]' : 'opacity-100 blur-0'} hover:!opacity-100 hover:!blur-0`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  <div className="flex items-baseline gap-8 md:gap-12 md:w-1/3">
                    <span className="font-body text-sm text-neutral-400 group-hover/item:text-accent-orange transition-colors">/{project.id}</span>
                    <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-[#171717] group-hover/item:translate-x-4 transition-transform duration-500 ease-out">{project.client}</h3>
                  </div>

                  <div className="md:w-1/3 pl-0 md:pl-12">
                    <p className="font-body text-neutral-500 group-hover/item:text-ink transition-colors duration-300 text-lg md:text-xl font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full md:w-1/3 md:justify-end gap-6">
                     <span className="px-4 py-2 rounded-full border border-gray-200 bg-[#FAFAFA] group-hover/item:border-ink group-hover/item:bg-ink group-hover/item:text-white font-body text-xs text-neutral-500 tracking-widest transition-colors lowercase">
                       {project.tech}
                     </span>
                     <div className="w-16 h-16 bg-transparent border border-neutral-300 group-hover/item:border-ink group-hover/item:bg-ink rounded-full flex items-center justify-center text-ink group-hover/item:text-white transition-all duration-500 scale-90 group-hover/item:scale-100">
                        <ArrowUpRight size={24} className="transition-transform duration-500 group-hover/item:rotate-45" strokeWidth={1.5} />
                     </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

      </div>

      <Closing />
    </div>
  );
};

export default Cases;
