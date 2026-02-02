import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { label: "Disponibilidad", value: "24/7", desc: "Operación continua sin interrupciones" },
  { label: "Respuesta", value: "<1s", desc: "Latencia ultra-baja en interacciones" },
  { label: "Precisión", value: "99.9%", desc: "Ejecución de procesos sin errores humanos" },
  { label: "Escalabilidad", value: "∞", desc: "Crecimiento instantáneo bajo demanda" }
];

const WorkforceMetrics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.metric-item');
    
    gsap.fromTo(items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 bg-[#272727] text-white overflow-hidden relative">
      {/* Background Noise */}
      <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {METRICS.map((metric, index) => (
            <div key={index} className="metric-item flex flex-col gap-2 border-l border-[#CED600]/30 pl-6">
              <span className="font-mono text-xs text-[#CED600] uppercase tracking-widest">{metric.label}</span>
              <span className="font-manrope text-5xl md:text-7xl font-bold tracking-tighter">{metric.value}</span>
              <p className="font-karla text-sm text-white/60 max-w-[150px]">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkforceMetrics;
