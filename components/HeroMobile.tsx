import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import TechTicker from './TechTicker';
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
        { scale: 0.9, opacity: 0, y: 50 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 1.8, 
          ease: "power4.out", // Premium smooth ease
          onComplete: () => {
            // Continuous Float Animation (Subtle breathing)
            blobs.forEach((blob) => {
              gsap.to(blob, {
                y: -15, 
                duration: 5, 
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

      // 3.5 "No." Badge Reveal (Pop effect)
      const noBadge = bodyRef.current?.querySelector('.no-badge');
      if (noBadge) {
        gsap.fromTo(noBadge, 
          { scale: 0, rotation: -15, opacity: 0 },
          { 
            scale: 1, 
            rotation: -3, 
            opacity: 1, 
            duration: 0.6, 
            ease: "back.out(1.7)",
            delay: 0.5 
          }
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
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-[#FAFAFA] flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* DECORATIVE ELEMENTS WRAPPER (Ambient Background) */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
        
        {/* TOP LEFT VISUAL (New) */}
        <div className="absolute top-[-5%] left-[-15%] w-[50vw] h-[50vw] opacity-10 mix-blend-multiply blur-sm">
            <div className="w-full h-full blob-visual">
              <img 
                  src="/svg/illustrations/10-Iso_Infinity_Loop.svg" 
                  alt="Abstract Loop" 
                  className="w-full h-full object-contain"
              />
            </div>
        </div>

        {/* BOTTOM RIGHT VISUAL (New) */}
        <div className="absolute bottom-[-5%] right-[-15%] w-[60vw] h-[60vw] opacity-10 mix-blend-multiply blur-sm">
            <div className="w-full h-full blob-visual">
              <img 
                  src="/svg/illustrations/05-Iso_Cloud_Stack.svg" 
                  alt="Abstract Cloud" 
                  className="w-full h-full object-contain"
              />
            </div>
        </div>

        {/* SECONDARY VISUAL (Left Ambient) */}
        <div className="absolute bottom-[20%] left-[-20%] w-[70vw] h-[70vw] opacity-10 mix-blend-multiply blur-sm">
            <div className="w-full h-full blob-visual">
              <img 
                  src="/svg/illustrations/07-Iso_Helix_Twist.svg" 
                  alt="Abstract Helix" 
                  className="w-full h-full object-contain"
              />
            </div>
        </div>

        {/* MAIN VISUAL (Right Ambient) */}
        <div className="absolute top-[20%] right-[-30%] w-[90vw] h-[90vw] opacity-10 mix-blend-multiply blur-sm">
            <div className="w-full h-full blob-visual">
              <img 
                  src="/svg/illustrations/15-Iso_Data_Stack.svg" 
                  alt="Data Engineering" 
                  className="w-full h-full object-contain"
              />
            </div>
        </div>

      </div>

      {/* Main Content Group */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center h-auto gap-6 px-6 text-center w-full">
        
        {/* Readability Backdrop (Radial Fade) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,250,250,0.8)_0%,_transparent_70%)] pointer-events-none -z-10 scale-125"></div>

        {/* Headline Group */}
        <div className="flex flex-col gap-4 items-center w-full">
            <h1 ref={titleRef} className="font-display font-bold text-[16vw] leading-[0.9] tracking-[-0.04em] text-[#272727] w-full">
              <div className="overflow-hidden flex justify-center"><div className="line-inner">Usar IA</div></div>
              <div className="overflow-hidden flex justify-center">
                  <div className="line-inner">
                      es fácil.
                  </div>
              </div>
            </h1>

            {/* Subtext - Styled to match Desktop (Gray Punchline) */}
            <div ref={bodyRef} className="max-w-[90%] mx-auto">
                 <p className="font-display font-bold text-[6.5vw] leading-snug tracking-tight text-neutral-600 text-balance flex flex-wrap justify-center items-baseline gap-x-2">
                    <span>Hacer que trabaje <span className="text-[#272727]">realmente</span> para tu empresa,</span>
                    <span className="no-badge inline-flex items-center justify-center bg-[#272727] text-[#CED600] px-4 py-1 rounded-2xl text-[8vw] rotate-[-3deg] shadow-lg transform-gpu">no.</span>
                 </p>
            </div>
        </div>

        {/* CTA (Replicating Desktop Style - Minimalist) */}
        <div ref={ctaRef} className="w-full mt-4 flex justify-center">
             <div onClick={openContact} className="cursor-pointer">
                <MagneticButton className="group relative bg-[#CED600] text-[#272727] px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 hover:brightness-110 hover:scale-105 shadow-[0_0_15px_rgba(206,214,0,0.3)] hover:shadow-[0_0_30px_rgba(206,214,0,0.6)]">
                     <span className="relative z-10 font-display text-base font-bold tracking-wide">
                       HABLEMOS
                     </span>
                     <div className="relative z-10 w-8 h-8 bg-[#272727]/10 rounded-full flex items-center justify-center group-hover:bg-[#272727]/20 transition-colors">
                        <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300 stroke-[2px]" />
                     </div>
                </MagneticButton>
             </div>
        </div>

      </div>

      {/* TechTicker Integration (Bottom of Viewport) */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <TechTicker />
      </div>

    </section>
  );
};

export default HeroMobile;
