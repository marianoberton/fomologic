import React, { useRef } from 'react';
import { Hexagon, Zap } from 'lucide-react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  useAnimationFrame, 
  useMotionValue 
} from 'framer-motion';

import { IsoTetris, IsoCloud, IsoInfinity } from './IsoIcons';

// --- Types & Helpers ---

interface MarqueeItem {
  type: 'text' | 'badge' | 'icon';
  content?: string;
  outline?: boolean;
  color?: string;
}

interface MarqueeRowProps {
  items: MarqueeItem[];
  baseVelocity: number; // Positive = Right, Negative = Left
  className?: string;
  separator?: React.ReactNode;
  theme?: 'light' | 'dark';
}

// Helper to duplicate content for seamless loop
const DUPLICATION_FACTOR = 4;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, baseVelocity, className, separator = <IsoTetris className="w-full h-full text-accent-lime" />, theme = 'light' }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // We wrap between -25% and 0% because we have 4 copies (100% / 4 = 25%)
  // This ensures a seamless loop.
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Dynamic Direction Change based on Scroll
    // If scrolling down (velocity > 0), we might want to accelerate in the current direction
    // or flip direction. Standard Awwwards pattern is maintaining direction but accelerating.
    // However, to make it "de repente mas rapido", we multiply by velocityFactor.
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // Theme-based colors
  const bgColor = theme === 'dark' ? 'bg-[#272727]' : 'bg-transparent';
  const strokeColor = theme === 'dark' ? '#FAFAFA' : '#272727';
  const defaultTextColor = theme === 'dark' ? 'text-canvas' : 'text-ink';
  const badgeBorderColor = theme === 'dark' ? 'border-canvas' : 'border-ink';
  const badgeShadowColor = theme === 'dark' ? 'rgba(250,250,250,1)' : 'rgba(39,39,39,1)';

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${bgColor} ${className} py-4 md:py-6`}>
      <motion.div
        className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
        style={{ x }}
      >
        {/* Render Multiple Copies for Safety */}
        {Array.from({ length: DUPLICATION_FACTOR }).map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {items.map((item, idx) => (
              <React.Fragment key={`${loopIdx}-${idx}`}>
                {/* TEXT ITEM */}
                {item.type === 'text' && (
                  <span
                    className={`font-display font-black text-[6vw] md:text-[5vw] leading-[1.1] pb-2 lowercase tracking-tighter whitespace-nowrap ${
                      item.outline ? 'text-transparent' : (item.color || defaultTextColor)
                    }`}
                    style={item.outline ? { WebkitTextStroke: `1.5px ${strokeColor}` } : undefined}
                  >
                    {item.content}
                  </span>
                )}

                {/* BADGE ITEM */}
                {item.type === 'badge' && (
                  <div 
                    className={`shrink-0 border rounded-full px-4 py-1 bg-accent-lime ${badgeBorderColor}`}
                    style={{ boxShadow: `4px 4px 0px 0px ${badgeShadowColor}` }}
                  >
                    <span className="font-body text-lg md:text-xl font-bold text-ink tracking-widest lowercase">
                      {item.content}
                    </span>
                  </div>
                )}

                {/* SEPARATOR (Icon) */}
                <div className="animate-spin-slow shrink-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
                    {separator}
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const BrandMarquee: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Velocity Skew Effect
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  return (
    <section className="w-full py-12 md:py-24 bg-canvas border-y-4 border-ink overflow-hidden relative z-20 flex flex-col gap-8 md:gap-0">
      
      <motion.div style={{ skewX: skewVelocity }} className="flex flex-col gap-4 md:gap-0">
        
        {/* ROW 1: Engineering & AI (Left) - DARK MODE - Base Speed: -2 */}
        <MarqueeRow 
            baseVelocity={-2}
            theme="dark"
            separator={<IsoTetris className="w-full h-full text-accent-lime" />}
            items={[
                { type: 'text', content: 'ingeniería de negocios', outline: false },
                { type: 'text', content: 'inteligencia artificial', outline: true },
                { type: 'badge', content: '[ sys.v.2.0 ]' },
                { type: 'text', content: 'automatización', outline: false },
            ]}
        />

        {/* ROW 2: Concepts (Right) - LIGHT MODE - Base Speed: 2 */}
        <MarqueeRow 
            baseVelocity={2}
            theme="light"
            separator={<IsoCloud className="w-full h-full text-accent-lime" />}
            items={[
                { type: 'text', content: 'hyper-growth systems', outline: true },
                { type: 'text', content: 'digital sovereignty', outline: false, color: 'text-ink' },
                { type: 'badge', content: 'code_as_capital' },
                { type: 'text', content: 'zero latency', outline: true },
            ]}
        />

        {/* ROW 3: Brand Identity (Left) - DARK MODE - Base Speed: -2.5 */}
        <MarqueeRow 
            baseVelocity={-2.5}
            theme="dark"
            separator={<IsoInfinity className="w-full h-full text-accent-lime" />}
            items={[
                { type: 'text', content: 'swiss_precision', outline: false },
                { type: 'text', content: 'brutalism', outline: true },
                { type: 'badge', content: 'future_proof' },
                { type: 'text', content: 'fomo_sapiens', outline: false },
            ]}
        />

      </motion.div>
      
      {/* Noise Overlay (Optional Texture) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

    </section>
  );
};

export default BrandMarquee;