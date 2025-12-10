
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TitaniumCube from './TitaniumCube';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] bg-canvas snap-start z-30 overflow-hidden">
      
      {/* --- LAYER 0: THE UNIVERSE (3D Canvas) --- */}
      <div className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none">
         <TitaniumCube />
      </div>

      {/* --- DEPTH OF FIELD LAYERS --- */}
      
      {/* Background Layer: Ambient / Blurred / Giant */}
      <motion.img 
        src="/svg/illustrations/12-Flat_Abstract_D.svg"
        className="absolute top-[-10%] left-[-10%] w-[80vw] opacity-[0.03] blur-[8px] pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Foreground Layer: Detail / Sharp / Small */}
      <motion.img 
        src="/svg/illustrations/05-Flat_Triangle.svg"
        className="absolute bottom-[20%] right-[10%] w-16 md:w-24 opacity-80 z-30 pointer-events-none drop-shadow-lg"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src="/svg/illustrations/09-Flat_Plus_Sign.svg"
        className="absolute top-[30%] left-[5%] w-8 md:w-12 opacity-60 z-30 pointer-events-none blur-[0.5px]"
        initial={{ y: 0 }}
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* --- LAYER 1: CONTENT (Editorial Typography) --- */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center max-w-[1600px] mx-auto pointer-events-none px-6 md:px-12">
        
        <div className="w-full md:w-[70%] lg:w-[60%]">
          
      
          {/* Headline - Consistent Weights */}
          <h1 className="font-display font-bold text-[12vw] md:text-[9rem] lg:text-[11rem] leading-[0.8] tracking-tighter text-[#272727] mb-10 animate-fade-in-up opacity-0 text-balance drop-shadow-sm origin-left transform" style={{ animationDelay: '0.2s' }}>
            Evolución <br/>
            con IA.
          </h1>

          {/* Copy & CTA */}
          <div className="flex flex-col gap-8 animate-fade-in-up opacity-0 pl-2 pointer-events-auto" style={{ animationDelay: '0.4s' }}>
             <p className="font-body text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-xl text-balance backdrop-blur-[2px]">
               Tu partner tecnológico para la transformación con IA.
             </p>
             
             <div className="flex items-center gap-6">
                <button className="group relative bg-accent-lime text-ink pl-8 pr-2 py-2 rounded-full flex items-center gap-6 hover:bg-ink hover:text-white transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(206,214,0,0.4)] hover:shadow-none hover:scale-105">
                  <span className="relative z-10 font-display text-base font-semibold tracking-wide pl-2 lowercase">hablemos</span>
                  <div className="relative z-10 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-colors">
                     <ArrowRight size={18} />
                  </div>
                </button>
             </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
