import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import ButtonPrimary from '../ButtonPrimary';

interface WorkforceAgentModalProps {
  onClose: () => void;
  agent: {
    id: string;
    tag: string;
    title: string;
    desc: string;
    hook: string;
    problem?: string;
    metrics?: string;
    stack: string[];
    icon: LucideIcon;
  };
}

const WorkforceAgentModal: React.FC<WorkforceAgentModalProps> = ({ onClose, agent }) => {
  const Icon = agent.icon;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          layoutId={`card-${agent.id}`}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-4xl max-h-[90vh] bg-[#FAFAFA] rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row pointer-events-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#272727]" />
          </button>

          {/* Left Column: Visual & Hook */}
          <div className="w-full md:w-2/5 bg-[#272727] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Noise */}
            <div className="absolute inset-0 z-[1] opacity-[0.1] pointer-events-none mix-blend-overlay" 
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
            
            <div className="relative z-10">
              <span className="font-mono text-[#CED600] text-sm tracking-widest uppercase mb-4 block">{agent.tag}</span>
              <div className="w-20 h-20 rounded-3xl bg-[#CED600] flex items-center justify-center mb-8 text-[#272727]">
                <Icon size={40} strokeWidth={1.5} />
              </div>
              <h2 className="font-manrope text-4xl font-bold leading-tight mb-6">
                {agent.title}
              </h2>
            </div>

            <div className="relative z-10 mt-8">
              <div className="pl-4 border-l-2 border-[#CED600] py-2">
                <p className="font-karla text-xl italic text-white/90">
                  "{agent.hook}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Action */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col overflow-y-auto">
            
            <div className="mb-8">
              <h3 className="font-manrope text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Descripción</h3>
              <p className="font-karla text-xl text-[#272727] leading-relaxed">
                {agent.desc}
              </p>
            </div>

            {/* Problem & Solution Metrics */}
            {(agent.problem || agent.metrics) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                    {agent.problem && (
                        <div>
                             <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Problema
                             </h4>
                             <p className="font-karla text-neutral-700 font-medium leading-snug">{agent.problem}</p>
                        </div>
                    )}
                    {agent.metrics && (
                        <div>
                             <h4 className="text-[#CED600] font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#CED600]"></div> Impacto
                             </h4>
                             <p className="font-karla text-neutral-900 font-bold text-lg leading-snug">{agent.metrics}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="mb-8">
               <h3 className="font-manrope text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Capacidades</h3>
               <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CED600] mt-0.5 flex-shrink-0" />
                    <span className="font-karla text-neutral-600">Procesamiento de lenguaje natural avanzado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CED600] mt-0.5 flex-shrink-0" />
                    <span className="font-karla text-neutral-600">Integración nativa con tu stack tecnológico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CED600] mt-0.5 flex-shrink-0" />
                    <span className="font-karla text-neutral-600">Aprendizaje continuo y mejora de contexto</span>
                  </li>
               </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-neutral-100">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-500 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="w-full">
                    <ButtonPrimary className="w-full justify-center py-4 text-base" onClick={() => document.getElementById('contact-modal')?.showModal()}>
                        Contratar Agente <ArrowRight className="ml-2 w-4 h-4" />
                    </ButtonPrimary>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WorkforceAgentModal;
