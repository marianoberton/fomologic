import React from 'react';
import { IsoBaseSlab, IsoHelixTwist, IsoCloudStack, IsoInfinityLoop, IsoHourglass } from './MethodologyIcons';

const PHASES = [
  {
    id: "01",
    title: "Cimientos de Datos",
    subtitle: "Digital Readiness",
    concept: "Antes de la inteligencia, viene el orden. Construimos la infraestructura digital base.",
    problem: "La IA es ciega si los datos están en papel, en cabezas o dispersos.",
    actions: [
      "Centralización de canales",
      "Optimización de CRM & ERP",
      "Base de Conocimiento"
    ],
    meta: "Fuente Única de Verdad",
    icon: IsoBaseSlab
  },
  {
    id: "02",
    title: "Business Blueprint",
    subtitle: "Estrategia",
    concept: "Diagnóstico quirúrgico. Mapeamos la operación real vs. la ideal.",
    problem: "Automatizar un proceso roto solo lo hace romperse más rápido.",
    actions: [
      "Mapeo de Procesos (As-Is / To-Be)",
      "Matriz de Oportunidades de IA",
      "Arquitectura de Solución"
    ],
    meta: "Plan de batalla claro",
    icon: IsoHelixTwist
  },
  {
    id: "03",
    title: "El MVP",
    subtitle: "Validación Táctica",
    concept: "Resultados rápidos. Un \"golpe táctico\" en 3 semanas.",
    problem: "El miedo a proyectos largos y costosos que no terminan nunca.",
    actions: [
      "Agentes de IA específicos",
      "Automatizaciones Low-Code",
      "Eliminación de tareas repetitivas"
    ],
    meta: "Resultados Visibles",
    icon: IsoCloudStack
  },
  {
    id: "04",
    title: "IA para escalar",
    subtitle: "Ingeniería de Escala",
    concept: "Construcción de activos robustos y propiedad intelectual.",
    problem: "Las herramientas \"atadas con alambre\" no soportan volumen real.",
    actions: [
      "Software a medida e integraciones",
      "Chat Inteligente con tus Datos",
      "Dashboards en Tiempo Real"
    ],
    meta: "Infraestructura x10",
    icon: IsoInfinityLoop
  },
  {
    id: "05",
    title: "Evolución Continua",
    subtitle: "Retainer",
    concept: "Tu seguro contra la obsolescencia tecnológica.",
    problem: "La IA avanza cada 3 meses; quedarse quieto es retroceder.",
    actions: [
      "Monitoreo de Calidad",
      "Upgrade de Modelos",
      "Gerencia de Innovación"
    ],
    meta: "Adaptación Constante",
    icon: IsoHourglass
  }
];

const MethodologyMobile: React.FC = () => {
  return (
    <div className="w-full bg-transparent pt-24 pb-32 px-4 relative z-10">
      
      {/* Header Section */}
      <div className="mb-12 px-2">
        <h2 className="font-display font-bold text-4xl text-white mb-3 tracking-tighter leading-[0.9]">
          Metodología<span className="text-[#CED600]">.</span>
        </h2>
        <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-[#CED600]"></div>
            <p className="font-mono text-[#CED600] text-xs uppercase tracking-wider">
                El Proceso
            </p>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="flex flex-col gap-4 relative">
        {PHASES.map((phase, index) => (
          <div 
            key={phase.id}
            className="sticky transition-all duration-500"
            style={{ 
                top: `calc(100px + ${index * 15}px)`, // Stacking offset
                zIndex: index + 1
            }}
          >
            <div className="relative bg-[#272727] text-white rounded-[2rem] p-6 border border-neutral-700 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden min-h-[450px]">
                
                {/* Noise Texture removed for color consistency */}
                {/* <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div> */}

                {/* Top Row: ID & Icon */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="font-mono text-sm font-bold border px-3 py-1 rounded-full text-[#CED600] border-[#CED600]/30 bg-[#CED600]/5">
                        {phase.id}
                    </span>
                    <div className="w-16 h-16 opacity-80">
                        <phase.icon className="w-full h-full text-[#CED600]" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="font-display font-bold text-3xl mb-2 leading-none text-white">
                        {phase.title}
                    </h3>
                    <p className="font-mono text-xs mb-6 text-[#CED600]">
                        // {phase.subtitle}
                    </p>

                    <p className="font-body text-sm leading-relaxed mb-6 border-l-2 pl-4 text-neutral-300 border-[#CED600]">
                        {phase.concept}
                    </p>

                    {/* Problem Box */}
                    <div className="p-4 rounded-xl border mb-6 bg-white/5 border-white/10">
                        <p className="text-[10px] font-mono mb-1 uppercase tracking-wider text-neutral-400">El Problema</p>
                        <p className="text-xs italic text-white">"{phase.problem}"</p>
                    </div>

                    {/* Actions Tags */}
                    <div className="flex flex-wrap gap-2">
                        {phase.actions.map((action, i) => (
                            <span key={i} className="text-[10px] px-3 py-1.5 rounded-full border text-neutral-300 bg-black/30 border-white/10">
                                {action}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Meta */}
                <div className="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                    {phase.meta}
                </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Spacer Removed to reduce gap */}
      {/* <div className="h-24"></div> */}
    </div>
  );
};

export default MethodologyMobile;