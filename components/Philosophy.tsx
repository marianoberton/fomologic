import React from 'react';
import { ArrowRight, Activity, Zap, Cpu } from 'lucide-react';

const Philosophy: React.FC = () => {
  const principles = [
    {
      id: '01',
      title: 'Anti-Software',
      subtitle: 'La herramienta no es el fin.',
      description: 'En Fomo, creemos que la tecnología no debe añadir complejidad, sino eliminarla. No vendemos licencias; diseñamos la desaparición del trabajo manual.',
      stat: 'complexity: 0%',
      theme: 'light',
      bg: 'bg-white',
      text: 'text-black',
      border: 'border-gray-200',
      icon: <Cpu size={24} />
    },
    {
      id: '02',
      title: 'Diseñamos Tiempo',
      subtitle: 'El activo más valioso.',
      description: 'Cada automatización es una compra de tiempo futuro. Transformamos horas de burocracia en milisegundos de cómputo. Recuperamos tu vida.',
      stat: 'speed: 100x',
      theme: 'light',
      bg: 'bg-white',
      text: 'text-black',
      border: 'border-neutral-200',
      icon: <Zap size={24} />
    },
    {
      id: '03',
      title: 'Ingeniería Biológica',
      subtitle: 'Sistemas que respiran.',
      description: 'Combinamos la precisión suiza con la adaptabilidad de los sistemas vivos. Implementamos arquitecturas que aprenden, mutan y escalan contigo.',
      stat: 'adaptability: high',
      theme: 'dark',
      bg: 'bg-[#272727]',
      text: 'text-white',
      border: 'border-white/10',
      icon: <Activity size={24} />
    }
  ];

  return (
    <section id="philosophy" className="bg-canvas relative z-10 py-32 snap-start">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Static Header */}
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end">
           <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                 <span className="font-body text-xs uppercase tracking-widest text-gray-400">Core Values</span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-7xl text-black tracking-tighter">
                 Filosofía <br/> <span className="text-gray-300 font-light">de Laboratorio</span>
              </h2>
           </div>
           <p className="font-body text-neutral-600 text-lg font-light max-w-md text-right mt-8 md:mt-0">
              Principios innegociables que guían nuestra ingeniería.
           </p>
        </div>

        {/* STACKED CARDS CONTAINER */}
        <div className="flex flex-col items-center pb-24 w-full">
           {principles.map((card, index) => (
             <div 
               key={card.id}
               className={`sticky w-full max-w-[1400px] rounded-[3rem] overflow-hidden border ${card.bg} ${card.border} shadow-2xl shadow-black/5 transition-transform duration-500`}
               style={{ 
                 top: `${140 + (index * 60)}px`, // Staggered sticky position (Start below header)
                 height: '600px', // Fixed height
                 zIndex: index + 1,
                 marginBottom: `${(principles.length - index - 1) * 60}px` // Add margin to create scrolling space
               }}
             >
                <div className="flex flex-col md:flex-row h-full">
                   
                   {/* Left: Typography & Content */}
                   <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-between relative">
                      {/* Top Meta */}
                      <div className="flex justify-between items-start">
                         <span className={`font-body text-xs uppercase tracking-widest border px-3 py-1 rounded-full ${card.theme === 'dark' ? 'border-white/20 text-white/60' : 'border-ink/10 text-ink/60'}`}>
                           Principle_{card.id}
                         </span>
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${card.theme === 'dark' ? 'border-white/20 text-accent-lime bg-white/5' : 'border-ink/10 text-ink bg-white'}`}>
                            {card.icon}
                         </div>
                      </div>

                      {/* Main Text */}
                      <div>
                         <h3 className={`font-display font-bold text-5xl md:text-6xl mb-6 tracking-tight ${card.text}`}>
                           {card.title}
                         </h3>
                         <h4 className={`font-body text-xs uppercase tracking-widest mb-8 ${card.theme === 'dark' ? 'text-accent-lime' : 'text-accent-orange'}`}>
                           {card.subtitle}
                         </h4>
                         <p className={`font-body text-xl font-light leading-relaxed max-w-md ${card.theme === 'dark' ? 'text-gray-400' : 'text-neutral-600'}`}>
                           {card.description}
                         </p>
                      </div>

                      {/* Bottom Footer */}
                      <div className={`pt-8 border-t flex items-center gap-4 ${card.theme === 'dark' ? 'border-white/10' : 'border-ink/10'}`}>
                         <span className={`font-body text-[10px] uppercase tracking-widest ${card.theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                           Metric: {card.stat}
                         </span>
                         <ArrowRight size={14} className={card.theme === 'dark' ? 'text-white' : 'text-ink'} />
                      </div>
                   </div>

                   {/* Right: Abstract Visual Pattern */}
                   <div className="w-full md:w-1/2 h-full relative overflow-hidden hidden md:block border-l border-inherit">
                      {/* Background base */}
                      <div className={`absolute inset-0 ${card.theme === 'dark' ? 'bg-[#272727]' : 'bg-gray-50'}`}></div>
                      
                      {/* Noise Texture */}
                      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

                      {/* Abstract Shapes based on index */}
                      <div className="absolute inset-0 flex items-center justify-center">
                         {index === 0 && (
                            // Anti-Software: Minimal Grid
                            <div className="w-[80%] h-[80%] border border-dashed border-gray-300 rounded-full animate-[spin-slow_20s_linear_infinite] flex items-center justify-center opacity-40">
                               <div className="w-[60%] h-[60%] border border-gray-300 rounded-full"></div>
                               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"></div>
                               <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-300"></div>
                            </div>
                         )}
                         {index === 1 && (
                            // Time: Blur Motion
                            <div className="flex gap-4 rotate-12 opacity-50">
                               <div className="w-4 h-64 bg-ink/10 blur-sm rounded-full animate-pulse"></div>
                               <div className="w-4 h-64 bg-ink/20 blur-md rounded-full animate-pulse delay-75"></div>
                               <div className="w-4 h-64 bg-ink/10 blur-sm rounded-full animate-pulse delay-150"></div>
                            </div>
                         )}
                         {index === 2 && (
                            // Bio: Organic Pulse
                            <div className="relative">
                               <div className="w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl animate-pulse"></div>
                               <div className="absolute inset-0 border border-white/10 rounded-full scale-110"></div>
                               <div className="absolute inset-0 border border-white/5 rounded-full scale-150"></div>
                            </div>
                         )}
                      </div>
                   </div>

                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
