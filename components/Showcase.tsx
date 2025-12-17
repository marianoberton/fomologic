
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import gsap from 'gsap';

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

const Showcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move cursor logic
    const moveCursor = (e: MouseEvent) => {
      // Image follows with delay
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });

      // Dot follows instantly (precision)
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none"
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    // Reveal/Hide cursor image based on active state
    if (activeCase !== null) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
      gsap.to(cursorDotRef.current, {
        scale: 0, // Hide dot when image is active (optional, or keep it)
        opacity: 0
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
      gsap.to(cursorDotRef.current, {
        scale: 1,
        opacity: 1
      });
    }
  }, [activeCase]);

  return (
    <section ref={containerRef} className="py-32 bg-white text-neutral-900 relative z-10 overflow-hidden cursor-none">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      {/* Precision Cursor Dot */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-accent-lime rounded-full pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      ></div>

      {/* Floating Image Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ opacity: 0, transform: 'scale(0)' }}
      >
        <div className="w-full h-full relative overflow-hidden rounded-lg shadow-2xl">
           {activeCase !== null && (
             <img 
               src={CASES[activeCase].image} 
               alt="Case Preview" 
               className="w-full h-full object-cover"
             />
           )}
           {/* Overlay Tint */}
           <div className="absolute inset-0 bg-accent-lime/10 mix-blend-multiply"></div>
           
           {/* Embedded Metadata */}
           <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
               <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-200">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-900">View Case</span>
               </div>
               {activeCase !== null && (
                   <div className="flex gap-2">
                       {CASES[activeCase].tech.map((t, i) => (
                           <span key={i} className="bg-neutral-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider">
                               {t}
                           </span>
                       ))}
                   </div>
               )}
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 border-b border-neutral-200 pb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Selected Works</span>
             </div>
             <h2 className="font-display font-bold text-7xl md:text-9xl tracking-tighter leading-[0.8]">
               EVIDENCE<span className="text-neutral-300">.</span>
             </h2>
          </div>
          <div className="hidden md:block text-right">
             <span className="font-mono text-xs text-neutral-400 block mb-2">ARCHIVE 2024-25</span>
             <span className="font-mono text-xs text-neutral-900 block">3 SELECTED CASES</span>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col border-t border-neutral-900">
          {CASES.map((project, index) => (
            <div 
              key={project.id}
              className="group relative border-b border-neutral-200 hover:border-neutral-900 transition-colors duration-500"
              onMouseEnter={() => setActiveCase(index)}
              onMouseLeave={() => setActiveCase(null)}
            >
              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-neutral-50 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out -z-10"></div>

              <div className="flex flex-col md:flex-row items-stretch min-h-[180px]">
                
                {/* ID Column */}
                <div className="w-full md:w-[15%] p-8 border-r border-transparent group-hover:border-neutral-200 transition-colors duration-500 flex items-start">
                   <span className="font-mono text-sm text-neutral-400 group-hover:text-accent-lime transition-colors duration-300">
                     /{project.id}
                   </span>
                </div>

                {/* Main Content Column */}
                <div className="w-full md:w-[65%] p-8 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-neutral-900 mb-2 group-hover:translate-x-2 transition-transform duration-500">
                        {project.client}
                    </h3>
                    <span className="font-body text-lg text-neutral-500 group-hover:text-neutral-900 transition-colors">
                        {project.category}
                    </span>
                </div>

                {/* Action Column */}
                <div className="w-full md:w-[20%] p-8 border-l border-transparent group-hover:border-neutral-200 transition-colors duration-500 flex items-center justify-end md:justify-center overflow-hidden">
                    <div className="relative w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-500">
                        <ArrowUpRight size={24} className="text-neutral-900 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 flex justify-center">
            <a href="#" className="group flex items-center gap-4 text-neutral-900 hover:text-accent-lime transition-colors duration-300">
                <span className="font-display font-bold text-xl tracking-tight">VIEW FULL ARCHIVE</span>
                <div className="w-12 h-12 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-accent-lime transition-colors duration-300">
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Showcase;
