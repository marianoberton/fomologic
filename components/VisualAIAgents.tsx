import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const VisualAIAgents: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position logic for subtle parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Transform values for User Bubble (moves slightly opposite to mouse)
  const userX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const userY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  // Transform values for AI Bubble (moves more to create depth)
  const aiX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const aiY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      
      // Calculate normalized position (-0.5 to 0.5)
      const xPct = (mouseXVal / width) - 0.5;
      const yPct = (mouseYVal / height) - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-[#1A1A1A] rounded-[2rem] overflow-hidden border border-white/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        {/* Abstract Background Blobs - Dark Mode */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#CED600]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#CED600]/5 rounded-full blur-[80px]" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay"></div>

        {/* User Bubble (Left, Small) - Raw Data / Input */}
        <motion.div
            style={{ x: userX, y: userY }}
            className="absolute left-[10%] md:left-[15%] bottom-[25%] z-10"
            animate={{ 
                y: [0, -10, 0],
            }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
        >
            <div className="w-32 md:w-40 h-20 md:h-24 bg-[#272727]/80 backdrop-blur-md rounded-2xl rounded-bl-sm border border-white/10 shadow-xl flex items-center justify-center p-4 md:p-6">
                {/* Abstract Lines representing text */}
                <div className="w-full space-y-2 opacity-50">
                    <div className="w-3/4 h-1.5 bg-white rounded-full" />
                    <div className="w-1/2 h-1.5 bg-white rounded-full" />
                    <div className="w-2/3 h-1.5 bg-white rounded-full" />
                </div>
            </div>
            <div className="absolute -bottom-8 left-0 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Input: Caos</div>
        </motion.div>

        {/* Arrow Connector (Implicit) */}

        {/* AI Bubble (Right, Large) - Processed / Intelligent */}
        <motion.div
            style={{ x: aiX, y: aiY }}
            className="absolute right-[10%] md:right-[15%] top-[25%] z-20"
            animate={{ 
                y: [0, -15, 0],
            }}
            transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5 
            }}
        >
            <div className="w-56 md:w-64 h-32 md:h-40 bg-gradient-to-br from-[#272727] to-[#1A1A1A] backdrop-blur-xl rounded-2xl rounded-tr-sm border border-[#CED600]/30 shadow-[0_0_30px_rgba(206,214,0,0.1)] flex items-center justify-center relative overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CED600]/5 to-transparent animate-scanline pointer-events-none" />

                {/* Typing Indicator / Processing */}
                <div className="flex items-center gap-3 relative z-10">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 md:w-4 md:h-4 bg-[#CED600] rounded-full shadow-[0_0_10px_#CED600]"
                            animate={{
                                y: ["0%", "-50%", "0%"],
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute -top-8 right-0 text-[10px] font-mono text-[#CED600] uppercase tracking-widest text-right">Output: Orden</div>
        </motion.div>
    </div>
  );
};

export default VisualAIAgents;