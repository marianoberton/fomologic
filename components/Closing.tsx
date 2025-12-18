import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { IsoCloud, IsoTetris, IsoInfinity } from './IsoIcons';
import MagneticButton from './MagneticButton';

const Closing: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  
  return (
    <section 
      ref={containerRef} 
      id="closing" 
      className="relative min-h-screen bg-transparent text-[#FAFAFA] overflow-hidden flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24"
    >
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
      
      {/* Floating Geometric Elements (Parallax) */}
      <div className="absolute bottom-40 left-[5%] w-24 md:w-48 opacity-10 pointer-events-none">
         <IsoTetris className="w-full h-full text-white animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left: Headline & Context */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 md:mb-12"
          >
            <div className="h-px w-12 bg-[#CED600]"></div>
            <span className="font-display font-bold text-[#CED600] tracking-widest uppercase text-sm">Ready to Scale</span>
          </motion.div>

          {/* Massive Headline */}
          <h2 className="font-display font-black text-[12vw] lg:text-[10vw] leading-[0.8] tracking-tighter uppercase mb-12 mix-blend-exclusion">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent stroke-text-white"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
              >
                Tu Operación
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#FAFAFA]"
              >
                Lista Para
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 md:gap-8"
              >
                <span className="text-[#CED600]">Escalar</span>
                <div className="hidden md:block w-32 h-4 bg-[#CED600] mt-4 md:mt-8"></div>
              </motion.div>
            </div>
          </h2>

        </div>

        {/* Right: Interaction & Founders */}
        <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-16">
          
          {/* Magnetic CTA */}
          <div className="w-full flex justify-end">
            <MagneticButton className="group relative px-10 py-6 md:px-12 md:py-8 bg-[#CED600] rounded-full flex items-center justify-between gap-6 md:gap-8 cursor-pointer overflow-hidden transition-all hover:pr-8 md:hover:pr-10">
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <span className="relative z-10 font-display font-black text-[#272727] text-3xl md:text-5xl uppercase tracking-tighter">hablemos</span>
              <ArrowUpRight size={40} className="relative z-10 text-[#272727] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 md:w-12 md:h-12" />
            </MagneticButton>
          </div>

          {/* Floating Cloud (Moved) */}
          <div className="w-full flex justify-end -my-8 md:-my-12 pointer-events-none">
             <div className="w-32 md:w-56 opacity-20 mix-blend-screen transform translate-x-12">
                <IsoCloud className="w-full h-full text-[#CED600] animate-spin-slow" />
             </div>
          </div>

          {/* Founders Stack */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
              ].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#272727] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 hover:z-10 relative"
                >
                  <img src={src} alt="Founder" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="text-right">
              <p className="font-body text-xs text-neutral-400 tracking-widest uppercase mb-1">Architects</p>
              <p className="font-display font-bold text-xl text-white">Mariano & Guillermina</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer / Legal */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto mt-24 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-body text-white/40 tracking-widest uppercase">
        <div className="flex gap-8">
          <span>© 2025 FOMO Systems</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Buenos Aires, AR</span>
        </div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#CED600] transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-[#CED600] transition-colors">Terms of Service</a>
          <div className="flex gap-4 ml-8">
             <a href="#" className="hover:text-[#CED600] transition-colors"><Mail size={14}/></a>
             <a href="#" className="hover:text-[#CED600] transition-colors"><Linkedin size={14}/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
