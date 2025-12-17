import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const INSIGHTS = [
  {
    id: 1,
    title: "The Future of Automation: Beyond Simple Scripts",
    category: "AI & Strategy",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop", // Dark 3D Abstract
    size: "large" // Spans 2 cols
  },
  {
    id: 2,
    title: "Why 'Low-Code' is the New 'Pro-Code'",
    category: "Development",
    date: "Nov 28, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop", // Isometric Geometric
    size: "regular"
  },
  {
    id: 3,
    title: "Design Systems that Scale with Physics",
    category: "Design",
    date: "Nov 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1649025086883-9b4c0e6b5c3e?q=80&w=2000&auto=format&fit=crop", // Glassy Abstract
    size: "regular"
  }
];

const Insights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background color scroll tracking - "Light Control"
  const { scrollYProgress: scrollBg } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Interpolate background from White (Day) to Dark (Night/Sunset)
  const backgroundColor = useTransform(scrollBg, [0.85, 1], ["#FAFAFA", "#272727"]);

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor }}
      className="py-32 pb-64 text-[#272727] relative overflow-hidden"
    >
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>

        <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#272727]/10 pb-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold text-5xl md:text-7xl tracking-tighter"
                >
                    insights <span className="text-[#CED600]">&</span><br/>
                    thoughts.
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-4 group cursor-pointer"
                >
                    <span className="font-display font-medium text-lg">view all articles</span>
                    <div className="w-12 h-12 rounded-full border border-[#272727]/20 flex items-center justify-center group-hover:bg-[#CED600] group-hover:border-[#CED600] group-hover:text-[#272727] transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INSIGHTS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`group relative rounded-3xl overflow-hidden bg-[#272727]/5 border border-[#272727]/5 hover:border-[#272727]/20 transition-colors duration-500 ${item.size === 'large' ? 'md:col-span-2 aspect-[16/9] md:aspect-auto' : 'md:col-span-1 aspect-square'}`}
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            {/* Overlay - Reduced height/opacity to prevent "cutting" effect */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#272727] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            {/* Acid Lime Tint on Hover */}
                            <div className="absolute inset-0 bg-[#CED600] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-display font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white group-hover:bg-[#CED600] group-hover:text-[#272727] group-hover:border-[#CED600] transition-colors duration-300">
                                    {item.category}
                                </span>
                                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                            </div>

                            <div>
                                <div className="flex items-center gap-4 text-white/80 text-sm mb-3 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{item.readTime}</span>
                                    </div>
                                </div>
                                <h3 className={`font-display font-bold leading-none tracking-tight text-white group-hover:text-[#CED600] transition-colors duration-300 ${item.size === 'large' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  );
};

export default Insights;
