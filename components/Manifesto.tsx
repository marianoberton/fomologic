
import React, { useEffect, useRef, useState } from 'react';

// Sub-component for a single slide to handle its own visibility
const ManifestoSlide: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Trigger when 40% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`min-h-screen w-full flex flex-col items-center justify-center snap-center relative px-6 md:px-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      {children}
    </div>
  );
};

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative z-20">
      
      {/* --- SLIDE 1: CONTEXT --- */}
      <ManifestoSlide>
          <div className="flex flex-col items-center text-center max-w-5xl">
            {/* Standard Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
               <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
               <span className="font-body text-xs uppercase tracking-widest text-gray-400">Contexto Global</span>
            </div>
            
            {/* Standard H2 Style */}
            <h2 className="font-display font-semibold text-[8vw] md:text-[6vw] leading-[0.9] text-ink tracking-tighter text-balance">
              El mundo cambió <br/>
              <span className="text-gray-300 font-light">para siempre.</span>
            </h2>
            <p className="font-body text-xl md:text-3xl text-gray-400 mt-10 font-light max-w-3xl mx-auto leading-relaxed">
               La revolución tecnológica no espera a nadie. Adaptarse ya no es una opción, es supervivencia.
            </p>
          </div>
      </ManifestoSlide>

      {/* --- SLIDE 2: TRUTH --- */}
      <ManifestoSlide>
          <div className="flex flex-col items-center text-center max-w-5xl">
             <div className="flex items-center gap-3 mb-8">
               <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></div>
               <span className="font-body text-xs uppercase tracking-widest text-gray-400">The Friction</span>
            </div>

             <h2 className="font-display font-semibold text-[8vw] md:text-[6vw] leading-[0.9] text-gray-300 tracking-tighter text-balance">
              El talento humano es <br/>
              <span className="text-ink">irreemplazable.</span>
            </h2>
            <p className="font-body text-xl md:text-3xl text-gray-400 mt-10 font-light max-w-3xl mx-auto leading-relaxed">
               Pero gestionar una empresa moderna con procesos manuales del siglo pasado, sí lo es.
            </p>
          </div>
      </ManifestoSlide>

      {/* --- SLIDE 3: EQUATION --- */}
      <ManifestoSlide>
           <div className="w-full max-w-[1600px] mx-auto">
             <div className="mb-16 flex justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ink rounded-full"></div>
                  <span className="font-body text-xs uppercase tracking-widest text-gray-400">The Fomo Equation</span>
                </div>
             </div>

             {/* Grid Layout for Equation */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
                
                {/* CARD 1: 60% */}
                <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-between min-h-[400px] md:min-h-[500px] hover:border-ink transition-colors duration-500 group shadow-sm">
                   <div className="w-full">
                      <div className="font-body text-xs text-gray-400 uppercase tracking-widest mb-4">Base Operativa</div>
                      <div className="w-full h-[1px] bg-gray-100"></div>
                   </div>
                   
                   {/* Raleway Black (font-black) for impact */}
                   <div className="text-[8rem] md:text-[12rem] font-display font-black text-ink leading-none tracking-tighter group-hover:scale-105 transition-transform duration-500">
                      60<span className="text-4xl md:text-6xl text-gray-300 align-top font-light">%</span>
                   </div>
                   
                   <div className="text-center">
                      <h3 className="font-display text-2xl md:text-3xl text-ink mb-2 font-bold">Automatización</h3>
                      <p className="font-body text-sm md:text-base text-gray-400 font-light">Eliminación de fricción repetitiva.</p>
                   </div>
                </div>

                {/* CARD 2: 30% */}
                <div className="bg-[#F5F5F5] border border-transparent p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-between min-h-[400px] md:min-h-[500px] hover:bg-gray-200 transition-colors duration-500 group">
                   <div className="w-full">
                      <div className="font-body text-xs text-gray-400 uppercase tracking-widest mb-4">Inteligencia</div>
                      <div className="w-full h-[1px] bg-gray-300"></div>
                   </div>
                   
                   <div className="text-[8rem] md:text-[12rem] font-display font-black text-gray-400 leading-none tracking-tighter group-hover:text-ink transition-colors duration-500">
                      30<span className="text-4xl md:text-6xl text-gray-300 align-top font-light">%</span>
                   </div>
                   
                   <div className="text-center">
                      <h3 className="font-display text-2xl md:text-3xl text-ink mb-2 font-bold">AI Agents</h3>
                      <p className="font-body text-sm md:text-base text-gray-500 font-light">Toma de decisiones asistida.</p>
                   </div>
                </div>

                {/* CARD 3: 10% (ACCENT) */}
                <div className="bg-accent-lime p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-between min-h-[400px] md:min-h-[500px] shadow-2xl shadow-accent-lime/20 group hover:scale-[1.02] transition-transform duration-500">
                   <div className="w-full">
                      <div className="font-body text-xs text-ink/60 uppercase tracking-widest mb-4">Control</div>
                      <div className="w-full h-[1px] bg-ink/10"></div>
                   </div>
                   
                   <div className="text-[8rem] md:text-[12rem] font-display font-black text-ink leading-none tracking-tighter">
                      10<span className="text-4xl md:text-6xl text-ink/40 align-top font-light">%</span>
                   </div>
                   
                   <div className="text-center">
                      <h3 className="font-display text-2xl md:text-3xl text-ink mb-2 font-bold">Estrategia Humana</h3>
                      <p className="font-body text-sm md:text-base text-ink/70 font-light">Creatividad y dirección.</p>
                   </div>
                </div>

             </div>
           </div>
      </ManifestoSlide>

    </section>
  );
};

export default Manifesto;
