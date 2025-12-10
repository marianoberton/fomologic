import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const VisualBI: React.FC = () => {
  const bars = [
    { id: 1, height: '40%', active: false },
    { id: 2, height: '60%', active: false },
    { id: 3, height: '35%', active: false },
    { id: 4, height: '85%', active: true },
    { id: 5, height: '55%', active: false },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gray-50/50 rounded-[2.5rem] overflow-hidden">
      {/* Container for the chart */}
      <div className="relative w-64 h-64 flex items-end justify-between px-4 pb-4">
        
        {/* Background Grid Lines (Abstract) */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
            <div className="w-full h-px bg-gray-300 border-dashed" />
            <div className="w-full h-px bg-gray-300 border-dashed" />
            <div className="w-full h-px bg-gray-300 border-dashed" />
            <div className="w-full h-px bg-gray-300 border-dashed" />
            <div className="w-full h-px bg-gray-300 border-dashed" />
        </div>

        {bars.map((bar, index) => (
          <div key={bar.id} className="relative w-8 h-full flex items-end justify-center group">
            {/* The Bar */}
            <motion.div
              className={`w-full rounded-t-lg transition-colors duration-300 ${
                bar.active ? 'bg-accent-lime shadow-[0_0_20px_rgba(132,204,22,0.3)]' : 'bg-gray-200 group-hover:bg-gray-300'
              }`}
              initial={{ height: 0 }}
              whileInView={{ height: bar.height }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: index * 0.1, // Stagger effect
              }}
            />

            {/* Floating Widget (Only for active bar) */}
            {bar.active && (
              <motion.div
                className="absolute bottom-[90%] left-1/2 -translate-x-1/2 mb-4 z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                 <motion.div 
                    className="bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                 >
                    <div className="bg-green-50 p-1 rounded-full">
                        <TrendingUp size={14} className="text-green-600" />
                    </div>
                    <span className="font-display font-bold text-ink text-sm">+124%</span>
                 </motion.div>
                 
                 {/* Little connector triangle */}
                 <motion.div 
                    className="w-3 h-3 bg-white rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1 shadow-sm"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                 />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualBI;
