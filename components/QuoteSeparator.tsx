import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const QuoteSeparator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line expansion
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Text reveal (staggered characters if we split them, but simple fade-up for now is cleaner)
      gsap.fromTo(textRef.current,
        { y: 100, opacity: 0, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 md:py-48 bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-[90%] md:max-w-6xl mx-auto relative z-10 text-center">
        {/* Decorative Top Line */}
        <div ref={lineRef} className="w-full h-[1px] bg-[#272727] mb-12 origin-center transform" />

        <div ref={textRef} className="flex flex-col items-center gap-6 md:gap-8 perspective-1000 max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl text-[#272727] leading-tight tracking-tight text-center">
            No vendemos horas.
          </h2>
          <div className="inline-flex items-center justify-center bg-[#272727] text-[#CED600] px-6 py-4 md:px-12 md:py-8 rounded-[2rem] md:rounded-[3rem] text-2xl md:text-5xl lg:text-6xl font-display font-bold rotate-[-2deg] shadow-2xl transform-gpu text-center leading-tight">
            Diseñamos sistemas que trabajan por vos.
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSeparator;
