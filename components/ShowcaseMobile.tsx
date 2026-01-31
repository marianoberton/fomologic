import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import ButtonSecondary from './ButtonSecondary';

const CASES = [
  {
    id: '01',
    client: 'MarketPaper',
    category: 'High Volume Automation',
    year: '2024',
    tech: ['n8n', 'hubspot', 'airtable'],
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    client: 'Inted',
    category: 'Data Mining & Alerts',
    year: '2024',
    tech: ['python', 'telegram', 'aws'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    client: 'Velvet',
    category: 'AI Customer Support',
    year: '2025',
    tech: ['openai', 'vector db', 'react'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
  }
];

const ShowcaseMobile: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-12 md:py-24 px-6 relative z-10">
      
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center animate-spin-slow">
                <Plus size={14} className="text-neutral-400" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Casos</span>
        </div>
        <h2 className="font-manrope font-extrabold text-5xl tracking-tighter leading-[1.1] text-neutral-900">
            Casos<span className="text-neutral-300">.</span>
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col gap-6">
        {CASES.map((project) => (
            <div 
                key={project.id}
                className="group relative w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl"
            >
                {/* Background Image */}
                <img 
                    src={project.image} 
                    alt={project.client} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    
                    {/* Top Row */}
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                            /{project.id}
                        </span>
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                            <ArrowUpRight className="text-[#CED600] w-5 h-5 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div>
                        <span className="font-mono text-xs text-[#CED600] uppercase tracking-widest mb-2 block">
                            {project.category}
                        </span>
                        <h3 className="font-display font-semibold text-5xl text-white mb-6 tracking-tighter leading-none">
                            {project.client}
                        </h3>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-16 flex justify-center">
        <ButtonSecondary href="/casos" className="bg-white text-neutral-900 border-neutral-200 shadow-sm">
            VER TODOS LOS CASOS
        </ButtonSecondary>
      </div>

    </section>
  );
};

export default ShowcaseMobile;
