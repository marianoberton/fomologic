
import React, { useState } from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';

const Team: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const founders = [
    {
      name: "Mariano Berton",
      role: "Solutions Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      bio: "Ex-CTO. Especialista en arquitecturas escalables y orquestación de sistemas complejos."
    },
    {
      name: "Guillermina Berton",
      role: "Product Strategy",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      bio: "Mente maestra detrás de la adopción tecnológica. Traduce código en rentabilidad."
    }
  ];

  // The Swarm: Specialized Contractors (Reduced count for cleaner aesthetic)
  const contractors = [
    { role: "Python", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { role: "React", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { role: "Data", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
    { role: "DevOps", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" },
    { role: "AI", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&h=150&fit=crop" },
    { role: "Cloud", img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=150&h=150&fit=crop" },
  ];

  return (
    <section className="py-32 bg-canvas relative z-10 px-6 md:px-12 snap-center">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header - Consistent Typography */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-200 pb-8">
           <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                 <span className="font-body text-xs uppercase tracking-widest text-gray-400">Human Infrastructure</span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-7xl text-ink tracking-tighter">
                 Inteligencia <br/> <span className="text-gray-300 font-light">distribuida.</span>
              </h2>
           </div>
           <p className="font-body text-gray-400 text-lg font-light max-w-md text-right leading-relaxed">
              Un núcleo estratégico soportado por una red global de especialistas bajo demanda.
           </p>
        </div>

        {/* --- THE FOUNDERS (CORE NODES) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           {founders.map((founder, i) => (
              <div key={i} className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-white border border-neutral-200 shadow-sm">
                 <img 
                    src={founder.img} 
                    alt={founder.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] scale-105 group-hover:scale-100" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80"></div>
                 
                 <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6">
                       <div>
                          <p className="font-body text-xs text-accent-lime uppercase tracking-widest mb-2">{founder.role}</p>
                          <h3 className="font-display text-4xl text-white tracking-tight">{founder.name}</h3>
                       </div>
                       <a href="#" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-all duration-300">
                          <Linkedin size={20} />
                       </a>
                    </div>
                    <p className="font-body text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       {founder.bio}
                    </p>
                 </div>
              </div>
           ))}
        </div>

        {/* --- THE NETWORK (SWARM NODES) --- */}
        <div className="relative">
           <div className="flex justify-between items-end mb-6">
              <div className="font-body text-[10px] text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded">
                 Active Nodes: {contractors.length}
              </div>
              <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-accent-lime rounded-full animate-pulse"></span>
                 <span className="font-body text-[9px] text-gray-400 uppercase tracking-widest">Live</span>
              </div>
           </div>
           
           {/* Dense Grid Layout - Adjusted for 6 items (3x2 on mobile, 6x1 on desktop) */}
           <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {contractors.map((member, i) => (
                 <div 
                    key={i}
                    onMouseEnter={() => setActiveNode(i)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="group relative aspect-square rounded-lg bg-gray-50 border border-gray-100 overflow-hidden cursor-crosshair hover:border-accent-lime transition-colors duration-300"
                 >
                    {/* Blurred Image */}
                    <img 
                       src={member.img} 
                       alt={member.role} 
                       className="w-full h-full object-cover opacity-60 grayscale blur-[2px] group-hover:blur-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-ink/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Skill Tag (Tiny) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="font-body text-[9px] text-white bg-ink/90 px-2 py-0.5 rounded tracking-tighter">
                          {member.role}
                       </span>
                    </div>

                    {/* Active Connection Line (Visual Trick) */}
                    {activeNode !== null && activeNode !== i && (
                       <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 pointer-events-none transition-opacity duration-300"></div>
                    )}
                 </div>
              ))}
           </div>
           
           {/* Join Banner */}
           <div className="mt-8 flex justify-between items-center bg-white rounded-2xl p-4 border border-gray-100 hover:border-ink transition-colors group cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                 <div className="bg-ink text-white px-6 py-2 rounded-full font-body text-[10px] uppercase tracking-wider">
                    Join protocol
                 </div>
                 <span className="font-body text-sm text-gray-500 hidden md:inline">¿Eres un experto en tu campo?</span>
              </div>
              <ArrowUpRight size={18} className="text-gray-300 group-hover:text-ink transition-colors" />
           </div>

        </div>

      </div>
    </section>
  );
};

export default Team;
