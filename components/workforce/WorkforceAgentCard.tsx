import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface WorkforceAgentCardProps {
  id: string;
  tag: string;
  title: string;
  desc: string;
  hook: string;
  stack: string[];
  icon: LucideIcon;
}

// Helper for logos (simplified version of what was in Workforce.tsx)
const getBrandLogo = (name: string) => {
  const normalize = name.toLowerCase();
  const logoClasses = "h-4 w-auto object-contain brightness-0 invert opacity-90 group-hover/stack:opacity-100 transition-opacity";
  
  if (normalize.includes('hubspot')) return <img src="/brands_logos/HubSpot_Logo.svg" alt="HubSpot" className={logoClasses} />;
  if (normalize.includes('openai')) return <img src="/brands_logos/OpenAI_Logo.svg" alt="OpenAI" className={logoClasses} />;
  if (normalize.includes('n8n')) return <img src="/brands_logos/N8n-logo-new.svg" alt="n8n" className={logoClasses} />;
  if (normalize.includes('gemini')) return <img src="/brands_logos/Google_Gemini_logo_2025.svg" alt="Gemini" className={logoClasses} />;
  if (normalize.includes('whatsapp')) return <img src="/brands_logos/Whatsapp_logo.svg" alt="Whatsapp" className={logoClasses} />;
  if (normalize.includes('vapi')) return <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">VAPI</span>;
  if (normalize.includes('twilio')) return <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">TWILIO</span>;
  
  return <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">{name}</span>;
};

const WorkforceAgentCard: React.FC<WorkforceAgentCardProps> = ({ id, tag, title, desc, hook, stack, icon: Icon }) => {
  return (
    <div className="group relative flex flex-col h-full bg-[#272727] rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#CED600]/10 border border-white/5 hover:border-[#CED600]/30">
      
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CED600]/0 via-[#CED600]/0 to-[#CED600]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#CED600] group-hover:bg-[#CED600] transition-all duration-500">
            <Icon className="w-6 h-6 text-white group-hover:text-[#272727] transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#CED600] font-bold tracking-wider uppercase mb-1">{tag}</span>
            <span className="font-mono text-[10px] text-white/40">{id}</span>
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#CED600] transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-manrope text-2xl md:text-3xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="font-karla text-white/60 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
          {desc}
        </p>
        
        <div className="pl-4 border-l-2 border-[#CED600]/30 mb-8">
          <p className="font-manrope text-sm font-semibold text-white/90 italic">
            "{hook}"
          </p>
        </div>
      </div>

      {/* Footer / Stack */}
      <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Stack</span>
          <div className="h-px flex-grow bg-white/10"></div>
          <div className="flex items-center gap-2">
            {stack.map((tech, i) => (
              <div key={i} className="group/stack px-2 py-1 rounded bg-white/5 border border-white/10 flex items-center justify-center min-w-[24px]">
                {getBrandLogo(tech)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceAgentCard;
