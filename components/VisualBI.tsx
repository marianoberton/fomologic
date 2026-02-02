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
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-[#1A1A1A] rounded-[2rem] overflow-hidden border border-white/5">
      {/* Container for the chart */}
      <div className="relative w-64 h-64 flex items-end justify-between px-4 pb-4">
        
        {/* Background Grid Lines (Abstract) */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
        </div>

        {bars.map((bar, index) => (
          <div key={bar.id} className="relative w-8 h-full flex items-end justify-center group">
            {/* The Bar */}
            <motion.div
              className={`w-full rounded-t-sm transition-all duration-500 ${
                bar.active ? 'bg-[#CED600] shadow-[0_0_30px_rgba(206,214,0,0.3)]' : 'bg-[#333] group-hover:bg-[#444]'
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
                    className="bg-[#272727] px-3 py-2 rounded-xl shadow-2xl border border-[#CED600]/30 flex items-center gap-2 whitespace-nowrap"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                 >
                    <div className="bg-[#CED600]/10 p-1 rounded-full">
                        <TrendingUp size={14} className="text-[#CED600]" />
                    </div>
                    <span className="font-manrope font-bold text-white text-sm">+124%</span>
                 </motion.div>
                 
                 {/* Little connector triangle */}
                 <motion.div 
                    className="w-2 h-2 bg-[#272727] border-r border-b border-[#CED600]/30 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"
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
      
      {/* Label */}
      <div className="absolute bottom-6 left-0 w-full text-center">
        <span className="font-mono text-[10px] text-[#CED600] uppercase tracking-widest">Resultados Medibles</span>
      </div>
    </div>
  );
};

export default VisualBI;