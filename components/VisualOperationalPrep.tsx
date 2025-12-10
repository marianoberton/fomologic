import React from 'react';
import { motion } from 'framer-motion';

const VisualOperationalPrep: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gray-50/50 rounded-[2.5rem] overflow-hidden group cursor-pointer"
      initial="initial"
      whileHover="hover"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
        {/* Card 1 (Bottom) */}
        <motion.div 
            className="absolute w-64 h-80 bg-white rounded-2xl border border-gray-200 shadow-lg origin-center"
            variants={{
                initial: { y: 150, opacity: 0, rotate: 0 },
                animate: { 
                    y: 0, 
                    opacity: 0.6, 
                    rotate: -6, 
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
                },
                hover: { 
                    x: -70, 
                    rotate: -15, 
                    opacity: 0.8,
                    transition: { duration: 0.4, ease: "easeOut" } 
                }
            }}
        />
        
        {/* Card 2 (Middle) */}
        <motion.div 
            className="absolute w-64 h-80 bg-white rounded-2xl border border-gray-200 shadow-lg origin-center"
            variants={{
                initial: { y: 150, opacity: 0, rotate: 0 },
                animate: { 
                    y: 0, 
                    opacity: 0.8, 
                    rotate: 3, 
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
                },
                hover: { 
                    x: 0, 
                    y: -10,
                    rotate: 0, 
                    opacity: 0.9,
                    transition: { duration: 0.4, ease: "easeOut" } 
                }
            }}
        />

        {/* Card 3 (Top) */}
        <motion.div 
            className="absolute w-64 h-80 bg-white rounded-2xl border border-gray-200 shadow-2xl origin-center p-8 flex flex-col gap-5"
            variants={{
                initial: { y: 150, opacity: 0, rotate: 0 },
                animate: { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0, 
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 } 
                },
                hover: { 
                    x: 70, 
                    rotate: 15, 
                    transition: { duration: 0.4, ease: "easeOut" } 
                }
            }}
        >
            {/* Skeleton Content */}
            {/* Header Line */}
            <div className="w-3/4 h-6 bg-gray-100 rounded-md mb-2" />
            
            {/* Body Lines */}
            <div className="space-y-3">
                <div className="w-full h-3 bg-gray-100 rounded-sm" />
                <div className="w-full h-3 bg-gray-100 rounded-sm" />
                <div className="w-5/6 h-3 bg-gray-100 rounded-sm" />
            </div>
            
            {/* Spacer */}
            <div className="flex-1" />
            
            {/* Button Shape */}
            <div className="w-full h-10 bg-gray-100 rounded-lg" />
        </motion.div>
    </motion.div>
  );
};

export default VisualOperationalPrep;
