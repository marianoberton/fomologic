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

        <h2 ref={textRef} className="font-display font-bold text-3xl md:text-6xl lg:text-7xl text-[#272727] leading-[1.1] tracking-tight perspective-1000 max-w-4xl mx-auto">
          No vendemos horas. <br />
          <span className="text-[#CED600]">Diseñamos sistemas que trabajan por vos.</span>
        </h2>

        {/* Technical Subtitle */}
        <div className="mt-12 flex justify-center items-center gap-4">
            <span className="font-mono text-xs text-[#272727]/40 uppercase tracking-widest">
                [ SISTEMAS AUTÓNOMOS ]
            </span>
            <div className="w-12 h-[1px] bg-[#272727]/20" />
            <span className="font-mono text-xs text-[#272727]/40 uppercase tracking-widest">
                BUSINESS ENGINEERING
            </span>
        </div>
      </div>
    </section>
  );
};

export default QuoteSeparator;
