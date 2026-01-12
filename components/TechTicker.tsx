import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

const items = [
    { src: '/brands_logos/OpenAI_Logo.svg.png', alt: 'OpenAI' },
    { src: '/brands_logos/Amazon_Web_Services_Logo.svg.png', alt: 'AWS' },
    { src: '/brands_logos/Anthropic_logo.svg.png', alt: 'Anthropic' },
    { src: '/brands_logos/Google_Gemini_logo_2025.svg.png', alt: 'Google Gemini' },
    { src: '/brands_logos/N8n-logo-new.svg.png', alt: 'n8n' },
    { src: '/brands_logos/Meta_Platforms_Inc._logo.svg.png', alt: 'Meta' },
    { src: '/brands_logos/HubSpot_Logo.svg.png', alt: 'HubSpot' },
];

const WRAP_COUNT = 4;

const TechTicker: React.FC = () => {
    // Scroll & Motion Logic
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    
    // Velocity effect: slight speed up on scroll
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
    const directionFactor = useRef<number>(1); 

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 1.5 * (delta / 1000); // Slower base speed (1.5)

        // Add scroll velocity influence
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="w-full h-[120px] bg-white border-y border-neutral-200 flex items-center overflow-hidden relative z-[50]">
            
            <motion.div className="flex items-center gap-24 pl-24 whitespace-nowrap relative z-20" style={{ x }}>
                {Array.from({ length: WRAP_COUNT }).map((_, i) => (
                    <React.Fragment key={i}>
                        {items.map((item, idx) => (
                            <div key={`${i}-${idx}`} className="flex items-center gap-24 group select-none">
                                {/* Image Container */}
                                <div className="h-24 flex items-center justify-center relative px-4">
                                    {/* 1. Ghost Image for Layout (preserves aspect ratio) */}
                                    <img 
                                        src={item.src}
                                        alt={item.alt}
                                        loading="eager"
                                        className="h-full w-auto opacity-0" 
                                    />
                                    
                                    {/* 2. Color Layer with Mask (The Visible Logo) */}
                                    <div 
                                        className="absolute inset-0 w-full h-full bg-[#272727]"
                                        style={{
                                            maskImage: `url(${item.src})`,
                                            WebkitMaskImage: `url(${item.src})`,
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                            WebkitMaskPosition: 'center',
                                            transform: 'scale(2.5)', // Increased scale for massive visual impact (approx 50% larger than 1.8)
                                            transformOrigin: 'center'
                                        }}
                                    />
                                </div>
                                
                                {/* Tech Separator */}
                                <div className="w-[2px] h-16 bg-neutral-300 rotate-12" />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

// Utils
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default TechTicker;
