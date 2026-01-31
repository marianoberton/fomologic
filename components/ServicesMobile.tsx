import React from 'react';
import { ArrowRight, Plus, Check } from 'lucide-react';

const PACKAGES = [
  {
    id: "01",
    name: "DISCOVERY",
    fullName: "FOMO DISCOVERY",
    target: "Para empresas que necesitan claridad antes de invertir.",
    includes: ["Fase 01 (Diagnóstico)", "Fase 02 (Blueprint)"],
    promise: "Te decimos exactamente qué tenés que hacer, cuánto cuesta y cuánto vas a ganar.",
    icon: "/svg/illustrations/01-Iso_Base_Slab.svg"
  },
  {
    id: "02",
    name: "SPRINT",
    fullName: "FOMO SPRINT",
    target: "Para buscar resultados rápidos y validar.",
    includes: ["Fase 03 (MVP)", "Implementación Rápida"],
    promise: "En 21 días tenés una fuerza laboral digital trabajando para vos.",
    icon: "/svg/illustrations/05-Iso_Cloud_Stack.svg"
  },
  {
    id: "03",
    name: "CORE",
    fullName: "FOMO CORE",
    target: "Para transformación profunda y activos propios.",
    includes: ["Fase 04 (Desarrollo a Escala)", "IA para Escalar"],
    promise: "Construimos agentes de IA integrados con tu empresa.",
    icon: "/svg/illustrations/10-Iso_Infinity_Loop.svg"
  },
  {
    id: "04",
    name: "GUARDIAN",
    fullName: "FOMO GUARDIAN",
    target: "Mantenimiento y Evolución mensual.",
    includes: ["Fase 05 (Evolución Continua)"],
    promise: "Tu seguro contra la obsolescencia. Nos encargamos de que tu tecnología evolucione y nunca quede vieja.",
    icon: "/svg/illustrations/13-Iso_Hourglass.svg"
  }
];

const ServicesMobile: React.FC = () => {
  return (
    <section className="bg-transparent text-[#272727] pb-24 pt-32 relative z-10">
      
      {/* Header */}
      <div className="px-6 mb-12">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center animate-spin-slow">
                <Plus size={14} className="text-neutral-400" />
            </div>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                Paquetes
            </span>
        </div>
        <h2 className="font-display font-bold text-5xl tracking-tighter leading-[0.9] text-[#272727]">
            Servicios<span className="text-accent-lime">.</span>
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col gap-4 px-4">
        {PACKAGES.map((pkg, index) => (
             <div 
                key={pkg.id}
                className="bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group min-h-[320px] flex flex-col"
             >
                {/* Background Number - Solid Color */}
                <span className="absolute -top-6 -right-6 font-display font-bold text-[8rem] leading-none text-neutral-900/10 select-none pointer-events-none z-0">
                    {pkg.id}
                </span>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="font-display font-semibold text-4xl tracking-tighter mb-3 leading-[0.9] text-[#272727]">
                        {pkg.name}
                    </h3>
                    <p className="font-body text-base text-neutral-500 mb-8 leading-relaxed max-w-[85%]">
                        {pkg.target}
                    </p>

                    {/* Promise as Main Content */}
                    <div className="mb-8">
                        <p className="font-display text-2xl leading-tight text-neutral-900">
                            "{pkg.promise}"
                        </p>
                    </div>

                    {/* Footer with Blob Protagonist */}
                    <div className="mt-auto flex justify-between items-end relative">
                         <div className="relative w-32 h-32 -ml-4 -mb-8 pointer-events-none">
                             <img 
                                src={pkg.icon} 
                                alt="" 
                                className="w-full h-full object-contain mix-blend-multiply opacity-90 scale-125 origin-bottom-left filter saturate-150"
                            />
                         </div>
                        
                        <button className="w-14 h-14 rounded-full bg-[#CED600] flex items-center justify-center text-neutral-900 shadow-lg shadow-[#CED600]/30 hover:scale-105 transition-transform duration-300">
                            <ArrowRight size={24} className="-rotate-45" />
                        </button>
                    </div>
                </div>
             </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesMobile;
