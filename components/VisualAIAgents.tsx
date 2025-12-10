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
        className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gray-50/50 rounded-[2.5rem] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        {/* Abstract Background Blobs (Optional for depth) */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-lime-100/30 rounded-full blur-3xl" />

        {/* User Bubble (Left, Small) */}
        <motion.div
            style={{ x: userX, y: userY }}
            className="absolute left-[15%] bottom-[25%] z-10"
            animate={{ 
                y: [0, -10, 0],
            }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
        >
            <div className="w-40 h-24 bg-white/80 backdrop-blur-md rounded-2xl rounded-bl-sm border border-white/60 shadow-sm flex items-center justify-center p-6">
                {/* Abstract Lines representing text */}
                <div className="w-full space-y-2">
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                    <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                </div>
            </div>
        </motion.div>

        {/* AI Bubble (Right, Large) */}
        <motion.div
            style={{ x: aiX, y: aiY }}
            className="absolute right-[15%] top-[25%] z-20"
            animate={{ 
                y: [0, -15, 0],
            }}
            transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5 // Desynchronize float
            }}
        >
            <div className="w-64 h-40 bg-gradient-to-br from-white to-lime-50/30 backdrop-blur-xl rounded-2xl rounded-tr-sm border border-white/80 shadow-xl flex items-center justify-center">
                {/* Typing Indicator */}
                <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-4 h-4 bg-lime-400 rounded-full"
                            animate={{
                                y: ["0%", "-100%", "0%"],
                                opacity: [0.5, 1, 0.5]
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
        </motion.div>
    </div>
  );
};

export default VisualAIAgents;
