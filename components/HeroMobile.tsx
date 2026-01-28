import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { useContact } from '../context/ContactContext';

const HeroMobile: React.FC = () => {
  const { openContact } = useContact();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Blobs Entrance (Staggered + Float)
      const blobs = gsap.utils.toArray<HTMLElement>('.blob-visual');
      
      gsap.fromTo(blobs, 
        { scale: 0.8, opacity: 0, rotate: -10 },
        { 
          scale: 1, 
          opacity: 1, 
          rotate: 0, 
          duration: 1.5, 
          stagger: 0.2, 
          ease: "elastic.out(1, 0.8)",
          onComplete: () => {
            // Continuous Float Animation
            blobs.forEach((blob, i) => {
              gsap.to(blob, {
                y: i % 2 === 0 ? -15 : 15, // Alternate direction
                duration: 3 + i, // Randomize duration slightly
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
              });
            });
          }
        }
      );

      // 2. Title Reveal
      const titleLines = titleRef.current?.querySelectorAll('.line-inner');
      if (titleLines) {
        gsap.set(titleLines, { yPercent: 105 });
        tl.to(titleLines, {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.15,
          delay: 0.2
        });
      }

      // 3. Body Text Reveal
      if (bodyRef.current) {
        gsap.fromTo(bodyRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
      }

      // 4. CTA Reveal
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-[#FAFAFA] flex flex-col justify-center px-6 overflow-hidden">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* DECORATIVE ELEMENTS (Swiss/Structural) */}
      
      {/* 1. Top Right - Main Visual (Balancing the Title) */}
      <div className="absolute top-[8%] right-[-25%] w-[85vw] h-[85vw] z-0 pointer-events-none blob-visual opacity-100">
          <img 
            src="/svg/illustrations/10-Iso_Infinity_Loop.svg" 
            alt="Abstract Loop" 
            className="w-full h-full object-contain drop-shadow-2xl rotate-[-15deg]"
          />
      </div>

      {/* 2. Bottom Left - Secondary (Supporting the CTA) */}
      <div className="absolute bottom-[-10%] left-[-20%] w-[70vw] h-[70vw] z-0 pointer-events-none blob-visual opacity-90">
          <img 
            src="/svg/illustrations/07-Iso_Helix_Twist.svg" 
            alt="Abstract Twist" 
            className="w-full h-full object-contain drop-shadow-2xl rotate-[15deg]"
          />
      </div>

      {/* Main Content Group */}
      <div className="relative z-10 flex flex-col justify-center h-full max-h-[800px] gap-8 px-2">
        
        {/* Headline Group */}
        <div className="flex flex-col gap-4">
            <h1 ref={titleRef} className="font-display font-bold text-[13vw] leading-[0.9] tracking-[-0.04em] text-[#272727]">
              <div className="overflow-hidden"><div className="line-inner">Usar IA</div></div>
              <div className="overflow-hidden">
                  <div className="line-inner">
                      es fácil<span className="text-[#CED600]">.</span>
                  </div>
              </div>
            </h1>

            {/* Subtext - Styled to match Desktop (Gray Punchline) */}
            <div ref={bodyRef} className="max-w-[95%]">
                 <p className="font-display font-bold text-[6vw] leading-[1.1] tracking-tight text-neutral-400">
                    Hacer que trabaje <span className="text-[#272727]">realmente</span> para tu empresa, no.
                 </p>
            </div>
        </div>

        {/* CTA (Replicating Desktop Style - Minimalist) */}
        <div ref={ctaRef} className="w-full mt-6 flex justify-start">
             <div onClick={openContact} className="cursor-pointer">
                <MagneticButton className="group relative bg-[#CED600] text-[#272727] px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 hover:brightness-110 hover:scale-105 shadow-[0_0_20px_rgba(206,214,0,0.4)] hover:shadow-[0_0_50px_rgba(206,214,0,0.8)]">
                     <span className="relative z-10 font-display text-sm font-bold tracking-widest">
                       Hablemos
                     </span>
                     <div className="relative z-10 w-8 h-8 bg-[#272727]/10 rounded-full flex items-center justify-center group-hover:bg-[#272727]/20 transition-colors">
                        <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300 stroke-[2px]" />
                     </div>
                </MagneticButton>
             </div>
        </div>

      </div>

    </section>
  );
};

export default HeroMobile;
