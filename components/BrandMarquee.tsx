import React from 'react';
import { Asterisk } from 'lucide-react';

const BrandMarquee: React.FC = () => {
  const MarqueeContent = () => (
    <div className="flex items-center gap-6 md:gap-10 px-6">
       {/* Item 1: Solid */}
       <span className="font-display font-black text-[9vw] md:text-[8vw] leading-[0.8] text-ink lowercase tracking-tighter whitespace-nowrap">
          ingeniería de negocios
       </span>
       
       {/* Separator */}
       <div className="text-accent-lime animate-spin-slow shrink-0">
          <Asterisk size={60} strokeWidth={3} className="md:w-[80px] md:h-[80px]" />
       </div>

       {/* Item 2: Outline */}
       <span className="font-display font-black text-[9vw] md:text-[8vw] leading-[0.8] text-transparent lowercase tracking-tighter whitespace-nowrap" style={{ WebkitTextStroke: '2px #272727' }}>
          inteligencia artificial
       </span>

       {/* Separator: Tech Badge (Something else) */}
       <div className="shrink-0 border-2 border-ink rounded-full px-4 py-1 bg-accent-lime">
          <span className="font-body text-xl md:text-3xl font-bold text-ink tracking-widest lowercase">
            [ sys.v.2.0 ]
          </span>
       </div>

       {/* Item 3: Solid */}
       <span className="font-display font-black text-[9vw] md:text-[8vw] leading-[0.8] text-ink lowercase tracking-tighter whitespace-nowrap">
          del caos al sistema
       </span>

       {/* Separator */}
       <div className="text-accent-lime animate-spin-slow shrink-0">
          <Asterisk size={60} strokeWidth={3} className="md:w-[80px] md:h-[80px]" />
       </div>

       {/* Item 4: Outline */}
       <span className="font-display font-black text-[9vw] md:text-[8vw] leading-[0.8] text-transparent lowercase tracking-tighter whitespace-nowrap" style={{ WebkitTextStroke: '2px #272727' }}>
          automatización
       </span>

       {/* Final Separator for loop continuity */}
        <div className="text-accent-lime animate-spin-slow shrink-0">
          <Asterisk size={60} strokeWidth={3} className="md:w-[80px] md:h-[80px]" />
       </div>
    </div>
  );

  return (
    <div className="w-full py-12 bg-canvas border-y-4 border-ink overflow-hidden relative z-20 flex items-center">
      <div className="flex w-fit animate-marquee">
        {/* Loop 1 */}
        <MarqueeContent />
        {/* Loop 2 */}
        <MarqueeContent />
      </div>
    </div>
  );
};

export default BrandMarquee;