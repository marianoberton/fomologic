import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import LiquidBorder from './LiquidBorder';
import ButtonSecondary from './ButtonSecondary';

const INSIGHTS = [
  {
    id: 2,
    title: "Globant’s “Tech Trends” breaks down the 5 Forces that Will Power Enterprise Transformation in 2026",
    category: "Tendencias Tecnológicas",
    date: "Dec 9, 2025",
    readTime: "5 min read",
    image: "/images/globant.jpg",
    size: "large",
    url: "https://www.globant.com/news/tech-trends-2026"
  },
  {
    id: 4,
    title: "El 79% de las empresas estadounidenses incorporaron IA en sus procesos",
    category: "IA & Negocios",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    image: "/images/ai-technology-brain-background-digital-transformation-concept-1-696x464.jpg.webp",
    size: "regular",
    url: "https://mercado.com.ar/ruta-digital/el-79-de-las-empresas-estadounidenses-incorporaron-ia-en-sus-procesos/"
  },
  {
    id: 1,
    title: "YPF y Globant avanzan con un ambicioso proyecto para optimizar la cadena de suministro con inteligencia artificial",
    category: "IA & Negocios",
    date: "Oct 29, 2025",
    readTime: "6 min read",
    image: "/images/tpf.avif",
    size: "large",
    url: "https://www.infobae.com/economia/2025/10/29/ypf-y-globant-avanzan-con-un-ambicioso-proyecto-para-optimizar-la-cadena-de-suministro-con-inteligencia-artificial/"
  },
  {
    id: 3,
    title: "Un año de IA agéntica: Seis lecciones de quienes están haciendo el trabajo",
    category: "IA Agéntica",
    date: "Destacado",
    readTime: "7 min read",
    image: "/images/mcinsey.png",
    size: "regular",
    url: "https://www.mckinsey.com/featured-insights/destacados/un-ano-de-ia-agentica-seis-lecciones-de-quienes-estan-haciendo-el-trabajo/es"
  }
];

const Insights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section 
      ref={containerRef} 
      className="py-16 md:py-32 pb-32 md:pb-64 text-[#272727] relative overflow-hidden"
    >
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>

        <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#272727]/10 pb-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-manrope font-semibold text-4xl md:text-7xl tracking-tighter leading-[1.1]"
                >
                    Insights &<br/>
                    thoughts.
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <ButtonSecondary href="/insights" className="text-[#272727] border-[#272727]/20">
                        VER TODOS LOS ARTÍCULOS
                    </ButtonSecondary>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INSIGHTS.map((item, index) => (
                    <motion.a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`group relative rounded-[2.5rem] overflow-hidden bg-[#272727]/5 transition-colors duration-500 block ${item.size === 'large' ? 'md:col-span-2 aspect-[4/3] md:aspect-auto' : 'md:col-span-1 aspect-[4/3] md:aspect-square'}`}
                    >
                        {/* Liquid Border */}
                        <LiquidBorder className="text-[#272727]/10 group-hover:text-[#CED600] transition-colors duration-500 z-50" />

                        {/* Image Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay - Reduced height/opacity to prevent "cutting" effect */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#272727] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            {/* Acid Lime Tint on Hover */}
                            <div className="absolute inset-0 bg-[#CED600] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] md:text-xs font-display font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white group-hover:bg-[#CED600] group-hover:text-[#272727] group-hover:border-[#CED600] transition-colors duration-300">
                                    {item.category}
                                </span>
                                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                            </div>

                            <div>
                                <div className="flex items-center gap-4 text-white/80 text-xs md:text-sm mb-3 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{item.readTime}</span>
                                    </div>
                                </div>
                                <h3 className={`font-display font-semibold leading-none tracking-tight text-white group-hover:text-[#CED600] transition-colors duration-300 ${item.size === 'large' ? 'text-2xl md:text-5xl' : 'text-xl md:text-3xl'}`}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Insights;
