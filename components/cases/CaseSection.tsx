import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Stat {
  value: string;
  label: string;
}

export interface CaseSectionProps {
  number: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  problem: string;
  stats: Stat[];
  image: string;
  color?: string; // Hex color for accents
}

const CaseSection: React.FC<CaseSectionProps> = ({
  number,
  slug,
  client,
  category,
  description,
  problem,
  stats,
  image,
  color = '#CED600'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] py-24 px-6 md:px-12 flex items-center border-b border-neutral-200 last:border-0">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
               <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Case Study /{number}
               </span>
               <div className="h-[1px] w-12 bg-neutral-300"></div>
               <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color }}>
                  {category}
               </span>
            </div>
            
            <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter text-[#171717] mb-8 leading-[0.9]">
              {client}
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-neutral-500 font-light leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="p-6 bg-neutral-100 border-l-4 border-neutral-300 rounded-r-xl mb-12">
                <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">El Desafío</span>
                <p className="font-medium text-neutral-700 text-lg italic">"{problem}"</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12 border-t border-neutral-200 pt-8">
             {stats.map((stat, i) => (
                 <div key={i}>
                     <div className="font-display font-bold text-4xl md:text-5xl mb-1 text-[#171717]">
                        {stat.value}
                     </div>
                     <div className="font-body text-xs uppercase tracking-widest text-neutral-400">
                        {stat.label}
                     </div>
                 </div>
             ))}
          </div>

          <Link 
            to={`/casos/${slug}`}
            className="group inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wide transition-all hover:gap-6"
            style={{ color: '#171717' }}
          >
            <span className="border-b-2 border-transparent group-hover:border-black transition-all">Ver Caso Completo</span>
            <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-[50vh] lg:h-[70vh] w-full rounded-[2.5rem] overflow-hidden order-1 lg:order-2 group">
            <motion.div style={{ scale }} className="w-full h-full">
                <img 
                    src={image} 
                    alt={client} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
            </motion.div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            
            {/* Floating Tag */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
                    <span className="text-white font-mono text-xs uppercase tracking-widest">
                        Status: <span className="font-bold">Deployed</span>
                    </span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CaseSection;
