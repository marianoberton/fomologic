import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

// --- Assets ---
const OpenAI = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a1.558 1.558 0 0 1 .6966 1.2336v5.6661a4.4994 4.4994 0 0 1-5.1531 3.2293zm-9.3708-3.9926a4.4565 4.4565 0 0 1-.3669-3.0487l.1419.0804 4.7783 2.7582a.7948.7948 0 0 0 .7854 0l5.8354-3.3765v2.3372a1.558 1.558 0 0 1-.6966 1.2337l-4.9081 2.834a4.4946 4.4946 0 0 1-5.5694-2.8183zm-1.222-10.0526a4.4707 4.4707 0 0 1 2.5095-1.7291l.1419.0804 1.8606 1.074a.7948.7948 0 0 0 .7854 0l5.8354-3.3765-.1465-1.2635a1.558 1.558 0 0 1 1.0931-1.6318l5.6377-.9751a4.4946 4.4946 0 0 1-4.2268 4.7554zM16.92 2.8876a4.4707 4.4707 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a1.558 1.558 0 0 1-.6966-1.2336V6.0967A4.4994 4.4994 0 0 1 16.92 2.8876zm5.8206 5.3725c.3466 1.003.2238 2.102-.3419 3.0163l-.1419-.0804-4.7783-2.7582a.7948.7948 0 0 0-.7854 0L10.8577 11.8143v-2.3372a1.558 1.558 0 0 1 .6966-1.2337l4.9081-2.834a4.4946 4.4946 0 0 1 6.2782 2.8488zm-1.8972 9.5878a4.4707 4.4707 0 0 1-2.5095 1.7291l-.1419-.0804-1.8606-1.074a.7948.7948 0 0 0-.7854 0L9.71 21.8011l.1465 1.2635a1.558 1.558 0 0 1-1.0931 1.6318l-5.6377.9751a4.4946 4.4946 0 0 1 12.8722-10.126zM12 14.2588a2.2588 2.2588 0 1 1 0-4.5176 2.2588 2.2588 0 0 1 0 4.5176z" />
  </svg>
);

const Anthropic = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.47 21.06h3.42L11.96 1.94 3.11 21.06h3.42l1.9-4.32h7.14l1.9 4.32zm-7.66-17.5l2.19 4.75 2.19-4.75-2.19-4.75-2.19 4.75zm1.53 10.74h-4.08l2.04-4.64 2.04 4.64z" />
        {/* Approximated geometric A-shape for Anthropic if exact path not available, but let's stick to a clean glyph */}
        <path d="M12 2L2 22H22L12 2ZM12 6L18 20H6L12 6Z" fillRule="evenodd"/>
    </svg>
);

const Google = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 8.16-3.293 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.12H12.48z" />
  </svg>
);

const Meta = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.23 15.68c-.68-1.55-1.17-2.39-2.02-3.71-.47.74-1.07 1.63-2.02 3.71-.24.52-.77.82-1.32.82-.41 0-.81-.17-1.08-.48-.41-.47-.44-1.16-.1-1.68 1.07-1.63 2.22-3.38 3.03-5.3.38-.89 1.14-.89 1.51 0 .81 1.92 1.96 3.67 3.03 5.3.34.52.31 1.21-.1 1.68-.27.31-.67.48-1.08.48-.55 0-1.08-.3-1.32-.82z"/>
    </svg>
)

const items = [
    { type: 'text', content: 'MODEL_AGNOSTIC' },
    { type: 'icon', component: OpenAI },
    { type: 'text', content: 'SECURE_INFRA' },
    { type: 'icon', component: Google },
    { type: 'text', content: 'ZERO_LATENCY' },
    { type: 'icon', component: Anthropic },
    { type: 'text', content: 'ENTERPRISE_GRADE' },
    { type: 'icon', component: Meta },
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
    const directionFactor = useRef<number>(1); // Always positive for this one? Or allow bidirectional? Let's stick to 1 for stability.

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
        <div className="w-full h-[60px] bg-[#FAFAFA]/5 border-y border-[#272727]/5 flex items-center overflow-hidden relative z-30 backdrop-blur-sm">
             {/* Gradient Masks */}
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

            <motion.div className="flex items-center gap-12 pl-12 whitespace-nowrap" style={{ x }}>
                {Array.from({ length: WRAP_COUNT }).map((_, i) => (
                    <React.Fragment key={i}>
                        {items.map((item, idx) => (
                            <div key={`${i}-${idx}`} className="flex items-center gap-12 group select-none">
                                {item.type === 'text' ? (
                                    <span className="font-mono text-xs md:text-sm text-[#272727]/50 group-hover:text-[#272727] transition-colors duration-300 tracking-widest uppercase">
                                        {item.content}
                                    </span>
                                ) : (
                                    <div className="text-[#272727]/40 group-hover:text-[#272727] transition-colors duration-300 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                                        {item.component && <item.component className="w-full h-full" />}
                                    </div>
                                )}
                                
                                {/* Tech Separator */}
                                <div className="w-[1px] h-3 bg-[#272727]/10 rotate-12" />
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
