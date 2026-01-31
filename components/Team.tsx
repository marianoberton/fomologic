
import React, { useRef, useEffect } from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FOUNDERS = [
  {
    name: "Mariano Berton",
    role: "IA Aplicada a Operaciones",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "Diseña e implementa sistemas de IA integrados a procesos críticos de la operación.",
    linkedin: "#",
    mask: "/svg/illustrations/01-Iso_Base_Slab.svg" // Changed to Slab as requested
  },
  {
    name: "Guillermina Berton",
    role: "Estrategia Operativa & Transformación",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    bio: "Rediseña procesos y lidera la transformación para que la tecnología impacte en costos y control.",
    linkedin: "#",
    mask: "/svg/illustrations/13-Iso_Hourglass.svg" // Changed to Hourglass (Guardian) as requested
  }
];

// Generate a massive "Swarm" for the maximalist pattern
const BASE_NODES = [
    { role: "Python", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    { role: "React", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { role: "Data", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    { role: "DevOps", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    { role: "AI", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=100&h=100&fit=crop" },
    { role: "Cloud", img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=100&h=100&fit=crop" },
];

// Create a 100-node maximalist swarm
const SWARM = Array(20).fill(BASE_NODES).flat().map((node, i) => ({
    ...node,
    id: i,
}));

const Team: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".team-header-anim", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".team-header-trigger",
          start: "top 80%",
        }
      });

      // Founders Stagger
      gsap.from(".founder-card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founders-grid",
          start: "top 70%",
        }
      });

      // Swarm Ripple
      gsap.from(".swarm-node", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 1.5,
          grid: "auto",
          from: "center"
        },
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".swarm-container",
          start: "top 80%",
        }
      });

    }, containerRef);

    // Mobile Interaction Logic (Physics Engine)
    let mm = gsap.matchMedia();
    
    mm.add("(max-width: 768px)", () => {
      const cards = document.querySelectorAll('.founder-card');
      
      cards.forEach((card) => {
        const mask = card.querySelector('.founder-mask');
        const reveal = card.querySelector('.founder-reveal');
        const text = card.querySelector('.founder-text');
        const linkedin = card.querySelector('.founder-linkedin');
        
        if (!mask || !reveal || !text || !linkedin) return;

        // Create a timeline that is scrubbed by scroll for that "magnetic" feel
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 75%", // Start revealing as it enters
            end: "center 50%", // Fully revealed at center
            scrub: 1,
            toggleActions: "play reverse play reverse"
          }
        });

        // 1. Dissolve the mask (Physics: State Change)
        tl.to(mask, { 
          opacity: 0, 
          scale: 1.05, 
          filter: "blur(8px)", 
          duration: 1,
          ease: "power2.out",
          force3D: true // Hardware acceleration
        }, 0);
        
        // 2. Reveal the true form
        tl.to(reveal, { 
          opacity: 1, 
          duration: 1,
          ease: "power2.inOut",
          force3D: true // Hardware acceleration
        }, 0);
        
        // 3. Text floats up (Magnetic Pull)
        tl.to(text, { 
          y: -80, // Matches roughly the -translate-y-24 (6rem = 96px), adjusted for mobile scale
          duration: 1,
          ease: "back.out(1.2)",
          force3D: true
        }, 0);
        
        // 4. LinkedIn button emerges
        tl.to(linkedin, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: 0.2, // Slight stagger
          ease: "power2.out",
          force3D: true
        }, 0);
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.6,
      y: y * 0.6,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  };
  
  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-[#FAFAFA] text-neutral-900 relative z-10 border-t border-neutral-200 overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 md:px-12 relative">
        
        {/* Header */}
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12 team-header-trigger">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 team-header-anim">
                 <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                 <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Núcleo Operativo</span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] team-header-anim">
                 Inteligencia<br/><span className="text-neutral-300">Humana.</span>
              </h2>
           </div>
           <p className="font-body text-neutral-500 text-base md:text-lg max-w-md text-left md:text-right leading-relaxed mb-2 team-header-anim">
              Diseñamos procesos. Los ejecutamos con agentes de IA.
           </p>
        </div>

        {/* Founders Visual Grid - The "Heroes" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 md:mb-40 founders-grid">
           {FOUNDERS.map((founder, i) => (
              <div key={i} className="group relative founder-card">
                 {/* Card Container */}
                 <div className="relative h-[500px] md:h-[700px] w-full bg-transparent overflow-visible">
                    
                    {/* Layer 1: The Masked Shape (Visible by Default, Fades Out on Hover) */}
                    <div 
                        className="absolute inset-0 z-20 md:transition-all md:duration-700 md:ease-out md:group-hover:opacity-0 md:group-hover:scale-110 md:group-hover:blur-sm founder-mask will-change-transform backface-hidden"
                        style={{
                            maskImage: `url(${founder.mask})`,
                            maskSize: '90%', 
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: `url(${founder.mask})`,
                            WebkitMaskSize: '90%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            WebkitTransform: 'translateZ(0)'
                        }}
                    >
                        {/* Image inside the mask */}
                        <img 
                            src={founder.img} 
                            alt={founder.name} 
                            className="w-full h-full object-cover grayscale contrast-125 brightness-90" 
                        />
                        {/* Gradient overlay inside mask */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/40 to-transparent mix-blend-multiply"></div>
                    </div>

                    {/* Layer 2: The Full Reveal (Hidden by Default, Fades In on Hover) */}
                    <div className="absolute inset-0 z-10 opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-out overflow-hidden rounded-[2rem] md:rounded-[3rem] founder-reveal will-change-transform backface-hidden"
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            WebkitTransform: 'translateZ(0)'
                        }}
                    >
                        <img 
                            src={founder.img} 
                            alt={founder.name} 
                            className="w-full h-full object-cover grayscale-0" 
                        />
                        {/* Subtle gradient at bottom to ensure black text readability if image is too dark, but keeping it clean as requested */}
                         <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent opacity-60"></div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="absolute -bottom-12 left-0 w-full p-4 md:p-8 z-30 pointer-events-none">
                        <div className="transform md:transition-transform md:duration-500 md:group-hover:-translate-y-24 relative founder-text will-change-transform">
                             
                             {/* Role Label */}
                             <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-neutral-200 px-4 py-1.5 rounded-full mb-4">
                                <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                                <span className="font-mono text-[10px] md:text-xs text-neutral-900 uppercase tracking-widest">
                                    {founder.role}
                                </span>
                             </div>

                             {/* Name - Always Black */}
                             <h3 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tighter drop-shadow-sm text-[#272727] leading-none mb-2">
                                {founder.name}
                             </h3>

                             {/* Linkedin Button - Absolute positioned, floats in on hover */}
                             <a 
                                 href={founder.linkedin} 
                                 className="absolute bottom-2 right-0 md:top-0 md:right-0 md:bottom-auto pointer-events-auto text-[#272727] opacity-0 md:group-hover:opacity-100 translate-y-4 md:group-hover:translate-y-0 md:transition-all md:duration-500 md:delay-100 founder-linkedin"
                                 aria-label={`LinkedIn of ${founder.name}`}
                                 onMouseMove={handleMagnetic}
                                 onMouseLeave={resetMagnetic}
                             >
                                 <Linkedin size={36} strokeWidth={1.2} />
                             </a>
                        </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* The Swarm - "Maximalist Pattern" */}
        <div className="relative pt-0 md:pt-12 pb-12 md:pb-24 swarm-container overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 px-4 md:px-0">
               
               {/* Text Block - Integrated Left */}
               <div className="w-full lg:w-[30%] flex flex-col justify-center relative z-20 lg:pr-0 text-center lg:text-left items-center lg:items-start">
                    <h3 className="font-manrope font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6 leading-[1.1]">
                        Nuestros<br/><span className="text-neutral-300">partners.</span>
                    </h3>
                    <p className="font-body text-neutral-500 leading-relaxed text-base md:text-lg max-w-md">
                        No ampliamos equipos. Armamos células tácticas para rediseñar un proceso y automatizar su ejecución.
                    </p>
               </div>

                {/* Multiple Masked Shapes Cluster - Unified Level & Compact */}
                <div className="w-full lg:flex-1 flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:-space-x-12 scale-90 md:scale-75 lg:scale-[0.60] xl:scale-75 2xl:scale-90 origin-center">
                    
                    {/* Shape 1: Large Cloud Stack */}
                    <div className="relative w-full md:w-[400px] aspect-square flex-shrink-0">
                        <div className="absolute inset-0 z-10"
                            style={{
                                maskImage: `url(/svg/illustrations/05-Iso_Cloud_Stack.svg)`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: `url(/svg/illustrations/05-Iso_Cloud_Stack.svg)`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center'
                            }}
                        >
                             <div className="w-full h-full bg-neutral-100 grid grid-cols-8 gap-1 p-6 content-center justify-center">
                                {SWARM.slice(0, 32).map((node, i) => (
                                    <div key={i} className="aspect-square bg-neutral-200 overflow-hidden relative group swarm-node rounded-sm shadow-sm">
                                        <img src={node.img} alt="Talent" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    {/* Shape 2: Vertical Block (Aligned & Overlapping) */}
                    <div className="relative w-full md:w-[320px] aspect-[4/5] flex-shrink-0 md:translate-y-8 z-10">
                        <div className="absolute inset-0 z-10"
                            style={{
                                maskImage: `url(/svg/illustrations/09-Iso_Tetris_Block.svg)`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: `url(/svg/illustrations/09-Iso_Tetris_Block.svg)`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center'
                            }}
                        >
                             <div className="w-full h-full bg-neutral-100 grid grid-cols-6 gap-1 p-6 content-center justify-center">
                                {SWARM.slice(32, 60).map((node, i) => (
                                    <div key={i} className="aspect-square bg-neutral-200 overflow-hidden relative group swarm-node rounded-sm shadow-sm">
                                        <img src={node.img} alt="Talent" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    {/* Shape 3: Wide Capsule (Aligned & Overlapping) */}
                    <div className="relative w-full md:w-[280px] lg:w-[240px] xl:w-[340px] aspect-square flex-shrink-0 md:-translate-y-4">
                         <div className="absolute inset-0 z-10"
                            style={{
                                maskImage: `url(/svg/illustrations/03-Iso_Capsule.svg)`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: `url(/svg/illustrations/03-Iso_Capsule.svg)`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center'
                            }}
                        >
                             <div className="w-full h-full bg-neutral-100 grid grid-cols-8 gap-1 p-6 content-center justify-center">
                                {SWARM.slice(60, 92).map((node, i) => (
                                    <div key={i} className="aspect-square bg-neutral-200 overflow-hidden relative group swarm-node rounded-sm shadow-sm">
                                        <img src={node.img} alt="Talent" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
