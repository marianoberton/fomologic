import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on container position relative to viewport
      // We want the animation to happen as we scroll through the tall container
      let scrollProgress = (windowHeight - top) / (height - windowHeight); // Starts at 0, goes to >1
      
      // Clamp between 0 and 1 for the transition logic
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);
      
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Visual Logic
  const isSolutionState = progress > 0.4; // Switch state earlier
  
  // Grid Configuration for "Order" state
  const cols = 10;
  const rows = 8;
  const gap = 80; // px
  
  // Generate 80 particles
  const particles = Array.from({ length: 80 });

  return (
    <section ref={containerRef} id="manifesto" className="relative h-[250vh] bg-canvas">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* --- LAYER 1: DYNAMIC BACKGROUND (CHAOS vs ORDER) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {particles.map((_, i) => {
             // ORDERED POSITION (The Grid)
             const col = i % cols;
             const row = Math.floor(i / cols);
             // Center the grid
             const startX = (window.innerWidth - (cols * gap)) / 2;
             const startY = (window.innerHeight - (rows * gap)) / 2;
             const targetX = startX + (col * gap);
             const targetY = startY + (row * gap);

             // CHAOTIC POSITION (Random)
             // Use a deterministic random based on index to prevent jitter on re-render
             const randomX = (Math.sin(i * 132.1) * 0.5 + 0.5) * window.innerWidth;
             const randomY = (Math.cos(i * 45.3) * 0.5 + 0.5) * window.innerHeight;

             return (
               <div 
                 key={i}
                 className="absolute w-1.5 h-1.5 rounded-full transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
                 style={{
                   backgroundColor: isSolutionState ? '#E5E5E5' : (i % 5 === 0 ? '#EE9B00' : '#D4D4D4'), // Orange accents in chaos
                   left: 0,
                   top: 0,
                   transform: `translate(${isSolutionState ? targetX : randomX}px, ${isSolutionState ? targetY : randomY}px) scale(${isSolutionState ? 1 : Math.random() * 1.5 + 0.5})`,
                   opacity: isSolutionState ? 0.5 : 0.8
                 }}
               />
             );
          })}
        </div>

        {/* --- LAYER 2: CONTENT (TEXT TRANSITIONS) --- */}
        <div className="relative z-10 w-full max-w-[1400px] px-6 text-center">
          
          {/* PHASE 1: THE PROBLEM (Fades Out) */}
          <div 
             className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center
             ${isSolutionState ? 'opacity-0 scale-90 blur-sm pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}
             style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
          >
             <h2 className="font-display text-[8vw] md:text-[7rem] leading-[0.85] tracking-tighter text-ink mb-8">
               EL TALENTO ES <br/>
               <span className="text-gray-300 italic font-serif">IRREEMPLAZABLE</span>
             </h2>
             <div className="flex items-center gap-4 mt-8">
                <span className="font-body text-xs uppercase tracking-widest text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full">
                  Problem Detected
                </span>
                <p className="text-xl text-gray-400 font-light">Pero el caos manual no lo es.</p>
             </div>
             <div className="absolute bottom-[-20vh] animate-bounce opacity-30">
                <ArrowDown />
             </div>
          </div>

          {/* PHASE 2: THE SOLUTION (Fades In) */}
          <div 
             className={`transition-all duration-1000 delay-300 absolute inset-0 flex flex-col items-center justify-center
             ${!isSolutionState ? 'opacity-0 translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'}`}
             style={{ transform: !isSolutionState ? 'translate(-50%, 50px)' : 'translate(-50%, -50%)', left: '50%', top: '50%' }}
          >
             <h2 className="font-display text-4xl mb-12 text-ink tracking-tight">La Ecuación FOMO</h2>
             
             {/* THE GLASS WIDGET */}
             <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[3rem] p-4 md:p-12 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch md:items-center justify-between">
                
                {/* 60% */}
                <div className="flex-1 bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-200 flex flex-col items-center group hover:border-accent-orange/30 transition-colors">
                   <div className="text-[5rem] font-display leading-none mb-2 text-ink tracking-tighter">60<span className="text-2xl align-top">%</span></div>
                   <div className="h-1 w-full bg-gray-100 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-ink w-[60%]"></div>
                   </div>
                   <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400">Automatización</span>
                </div>

                {/* PLUS */}
                <div className="text-gray-300 font-display text-4xl">+</div>

                {/* 30% */}
                <div className="flex-1 bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-200 flex flex-col items-center group hover:border-accent-lime/50 transition-colors">
                   <div className="text-[5rem] font-display leading-none mb-2 text-gray-400 tracking-tighter group-hover:text-accent-lime transition-colors">30<span className="text-2xl align-top">%</span></div>
                   <div className="h-1 w-full bg-gray-100 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-accent-lime w-[30%]"></div>
                   </div>
                   <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400">AI Agents</span>
                </div>

                 {/* PLUS */}
                 <div className="text-gray-300 font-display text-4xl">=</div>

                {/* 10% */}
                <div className="flex-1 bg-ink text-white rounded-[2rem] p-8 shadow-xl shadow-ink/10 flex flex-col items-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="text-[5rem] font-display leading-none mb-2 tracking-tighter relative z-10">10<span className="text-2xl align-top">%</span></div>
                   <div className="h-1 w-full bg-white/20 rounded-full mb-4 overflow-hidden relative z-10">
                      <div className="h-full bg-white w-[10%]"></div>
                   </div>
                   <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60 relative z-10">Human Strategy</span>
                </div>

             </div>
             
             <p className="mt-12 text-gray-400 font-light max-w-2xl mx-auto text-lg">
                Recuperamos el tiempo de tu equipo eliminando la fricción operativa.
             </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Manifesto;