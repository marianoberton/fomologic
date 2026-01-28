
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import gsap from 'gsap';
import ShowcaseMobile from './ShowcaseMobile';

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
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Physics State
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse position
    const updateMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Dot follows instantly
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
        overwrite: true
      });
    };

    window.addEventListener('mousemove', updateMouse);

    // Physics Loop (60fps)
    const loop = () => {
        if (!cursorRef.current) return;

        // Calculate lag/velocity (Lerp)
        // Adjust the 0.1 factor to change "heaviness" (lower = heavier/slower)
        const dt = 0.1; 
        
        const dx = mouse.current.x - pos.current.x;
        const dy = mouse.current.y - pos.current.y;
        
        pos.current.x += dx * dt;
        pos.current.y += dy * dt;
        
        vel.current.x = dx * dt;
        vel.current.y = dy * dt;

        // Calculate Deformations
        // Rotation based on X velocity (Paper drag effect)
        const rotation = gsap.utils.clamp(-15, 15, vel.current.x * -0.5);
        
        // Stretch based on total speed (Velocity magnitude)
        const speed = Math.sqrt(vel.current.x * vel.current.x + vel.current.y * vel.current.y);
        const scaleX = gsap.utils.clamp(1, 1.15, 1 + speed * 0.002); // Subtle stretch
        const scaleY = gsap.utils.clamp(0.9, 1, 1 - speed * 0.002); // Subtle squash

        // Apply Transforms
        gsap.set(cursorRef.current, {
            x: pos.current.x,
            y: pos.current.y,
            rotation: rotation,
            scaleX: scaleX,
            scaleY: scaleY,
            overwrite: "auto" // Ensure no conflict
        });
    };

    gsap.ticker.add(loop);

    return () => {
        window.removeEventListener('mousemove', updateMouse);
        gsap.ticker.remove(loop);
    };
  }, []);

  useEffect(() => {
    // Reveal/Hide logic (Targeting Inner Ref for Scale/Opacity)
    if (activeCase !== null) {
      gsap.to(cursorInnerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.4)"
      });
      gsap.to(cursorDotRef.current, {
        scale: 0, 
        opacity: 0,
        duration: 0.2
      });
    } else {
      gsap.to(cursorInnerRef.current, {
        scale: 0.5, // Start smaller
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
      gsap.to(cursorDotRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2
      });
    }
  }, [activeCase]);

  return (
    <>
      <div className="block md:hidden">
        <ShowcaseMobile />
      </div>
      <section ref={containerRef} className="hidden md:block py-32 bg-[#FAFAFA] text-neutral-900 relative z-10 overflow-hidden cursor-none">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      {/* Precision Cursor Dot */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-accent-lime rounded-full pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      ></div>

      {/* Floating Image Cursor (The Mover) */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
      >
        {/* Inner Container (The Scaler/Revealer) */}
        <div 
            ref={cursorInnerRef}
            className="w-full h-full relative overflow-hidden rounded-lg shadow-2xl origin-center"
            style={{ opacity: 0, transform: 'scale(0)' }}
        >
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
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-900">Ver Caso</span>
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
        <div className="mb-12 md:mb-24 border-b border-neutral-200 pb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
             <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Casos seleccionados</span>
             </div>
             <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.8]">
               Casos<span className="text-neutral-300">.</span>
             </h2>
          </div>
          <div className="hidden md:block text-right">
             <span className="font-mono text-xs text-neutral-400 block mb-2">ARCHIVO 2024-2026</span>
             <span className="font-mono text-xs text-neutral-900 block">3 CASOS SELECCIONADOS</span>
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
              onClick={() => setActiveCase(activeCase === index ? null : index)} // Toggle for mobile tap
            >
              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-[#272727] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out -z-10 hidden md:block"></div>

              <div className="flex flex-col md:flex-row items-stretch min-h-[auto] md:min-h-[180px]">
                
                {/* ID Column */}
                <div className="w-full md:w-[15%] p-4 md:p-8 border-r-0 md:border-r border-transparent group-hover:border-neutral-700 transition-colors duration-500 flex items-start">
                   <span className="font-mono text-xs md:text-sm text-neutral-400 group-hover:text-accent-lime transition-colors duration-300">
                     /{project.id}
                   </span>
                </div>

                {/* Main Content Column */}
                <div className="w-full md:w-[65%] p-4 md:p-8 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl tracking-tighter text-neutral-900 group-hover:text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">
                        {project.client}
                    </h3>
                    <span className="font-body text-base md:text-lg text-neutral-500 group-hover:text-neutral-400 transition-colors">
                        {project.category}
                    </span>
                </div>

                {/* Action Column */}
                <div className="w-full md:w-[20%] p-4 md:p-8 border-l-0 md:border-l border-transparent group-hover:border-neutral-700 transition-colors duration-500 flex items-center justify-start md:justify-center overflow-hidden">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-500">
                        <ArrowUpRight size={20} className="text-neutral-900 group-hover:scale-125 transition-transform duration-500 md:w-6 md:h-6" />
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 flex justify-center">
            <a href="#" className="group flex items-center gap-4 text-neutral-900 hover:text-accent-lime transition-colors duration-300">
                <span className="font-display font-bold text-xl tracking-tight">VER TODOS LOS CASOS</span>
                <div className="w-12 h-12 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-accent-lime transition-colors duration-300">
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
            </a>
        </div>

      </div>
      </section>
    </>
  );
};

export default Showcase;
