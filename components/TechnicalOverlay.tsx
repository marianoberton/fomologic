import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TechnicalOverlay: React.FC = () => {
  const ringRef = useRef<SVGCircleElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Rotate Ring
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotation: 360,
        transformOrigin: "center",
        duration: 60,
        repeat: -1,
        ease: "linear"
      });
    }

    // 2. Blink Labels
    if (labelsRef.current) {
      const labels = labelsRef.current.querySelectorAll('.tech-label');
      labels.forEach((label) => {
        gsap.to(label, {
          opacity: 0.5,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          repeatDelay: Math.random() * 3 + 1, // Random blink interval
          ease: "steps(1)"
        });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
        {/* SVG Overlay Container */}
        <svg 
            viewBox="0 0 400 400" 
            className="w-[140%] h-[140%] md:w-full md:h-full max-w-[500px] max-h-[500px]"
        >
            {/* Dashed Ring */}
            <circle 
                ref={ringRef}
                cx="200" 
                cy="200" 
                r="180" 
                fill="none" 
                stroke="#272727" 
                strokeWidth="1" 
                strokeOpacity="0.4"
                strokeDasharray="4 8"
            />
            
            {/* Crosshairs */}
            {/* Top Left */}
            <path d="M20 50 V20 H50" fill="none" stroke="#272727" strokeWidth="1.5" strokeOpacity="0.6" />
            {/* Top Right */}
            <path d="M380 50 V20 H350" fill="none" stroke="#272727" strokeWidth="1.5" strokeOpacity="0.6" />
            {/* Bottom Left */}
            <path d="M20 350 V380 H50" fill="none" stroke="#272727" strokeWidth="1.5" strokeOpacity="0.6" />
            {/* Bottom Right */}
            <path d="M380 350 V380 H350" fill="none" stroke="#272727" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Inner Ticks */}
            <line x1="200" y1="10" x2="200" y2="25" stroke="#272727" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="200" y1="375" x2="200" y2="390" stroke="#272727" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="10" y1="200" x2="25" y2="200" stroke="#272727" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="375" y1="200" x2="390" y2="200" stroke="#272727" strokeWidth="1" strokeOpacity="0.4" />
        </svg>

        {/* Floating Labels */}
        <div ref={labelsRef} className="absolute inset-0 w-full h-full max-w-[500px] max-h-[500px]">
            <div className="tech-label absolute top-[20%] right-[20%] font-mono text-[10px] text-[#272727]/60 tracking-widest">
                VOL_METRIC: 84%
            </div>
            <div className="tech-label absolute bottom-[20%] left-[20%] font-mono text-[10px] text-[#272727]/60 tracking-widest">
                OPTIMIZING...
            </div>
             <div className="tech-label absolute top-[50%] left-[10%] font-mono text-[10px] text-[#272727]/40 tracking-widest -rotate-90 origin-center">
                SYS.RDY
            </div>
        </div>
    </div>
  );
};

export default TechnicalOverlay;
