import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Zap, Phone, MessageSquare, FileText, Layers, Cpu } from 'lucide-react';
import { WORKFORCE_CARDS } from '../constants/workforce';

gsap.registerPlugin(ScrollTrigger);

// --- ASSETS & DATA ---

// Helper to get brand logo or fallback
const getBrandLogo = (name: string) => {
  const normalize = name.toLowerCase();
  // Using brightness-0 invert to make logos white for maximum visibility on dark background
  const logoClasses = "h-5 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity";
  
  if (normalize.includes('hubspot')) return <img src="/brands_logos/HubSpot_Logo.svg" alt="HubSpot" className={logoClasses} />;
  if (normalize.includes('openai') || normalize.includes('whisper')) return <img src="/brands_logos/OpenAI_Logo.svg" alt="OpenAI" className={logoClasses} />;
  if (normalize.includes('n8n')) return <img src="/brands_logos/N8n-logo-new.svg" alt="n8n" className={logoClasses} />;
  if (normalize.includes('gemini')) return <img src="/brands_logos/Google_Gemini_logo_2025.svg" alt="Gemini" className={logoClasses} />;
  if (normalize.includes('whatsapp')) return <img src="/brands_logos/Whatsapp_logo.svg" alt="Whatsapp" className={logoClasses} />;
  
  // Text/Icon fallbacks for missing SVGs
  return <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">{name}</span>;
};

const Workforce: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.workforce-card');
    
    // Desktop & General Entry Animation
    gsap.fromTo(cards, 
      { 
        y: 50, 
        opacity: 0,
        filter: "blur(10px)"
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

    // Mobile-Specific "Always Alive" Animations
    const mm = gsap.matchMedia();
    
    mm.add("(max-width: 768px)", () => {
        // 1. Watermark Breathing (Always visible on mobile)
        gsap.to(".workforce-watermark", {
            opacity: 0.08, // Subtle visibility
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 2. Icon Floating (Ghost effect)
        gsap.to(".workforce-icon-container", {
            y: -8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.2,
                from: "random"
            }
        });

        // 3. Icon Glow Pulse (Alive signal)
        gsap.to(".workforce-icon-container", {
            boxShadow: "0 0 20px rgba(206,214,0,0.15)",
            borderColor: "rgba(206,214,0,0.4)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.2,
                from: "random"
            }
        });
    });

  }, { scope: containerRef });

  // Mouse tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg rotation
    const rotateY = ((x - centerX) / centerX) * 2;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <section id="workforce" ref={containerRef} className="w-full py-24 bg-transparent text-white relative overflow-hidden">
      
      {/* Background Ambience - CLEAN FLAT DARK */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-neutral-700 pb-8">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#CED600] rounded-full animate-pulse shadow-[0_0_10px_#CED600]"></div>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">FOMO Workforce</span>
                </div>
                <h2 className="font-manrope font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1] text-white">
                    El Rack<span className="text-[#CED600]">.</span>
                </h2>
            </div>
            <p className="font-body text-neutral-300 max-w-md text-sm md:text-base leading-relaxed text-right md:text-left">
                Módulos de inteligencia pre-entrenados listos para instalar en tu operación. Plug & Play.
            </p>
        </div>

        {/* Global Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-b border-neutral-800 pb-12">
            {[
                { value: "300+", label: "Agentes Activos" },
                { value: "1M+", label: "Tareas/mes" },
                { value: "24/7", label: "Operación Continua" },
                { value: "-60%", label: "Costos Operativos" }
            ].map((m, i) => (
                <div key={i} className="flex flex-col">
                    <span className="font-manrope text-4xl md:text-5xl font-bold text-white mb-2">{m.value}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{m.label}</span>
                </div>
            ))}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFORCE_CARDS.slice(0, 6).map((card, index) => (
                <div 
                    key={index}
                    className="workforce-card group relative bg-[#1A1A1A] border border-neutral-800 hover:border-[#CED600] rounded-[2.5rem] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 flex flex-col justify-between min-h-[480px] h-full overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Background Noise Texture (Subtle) */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none mix-blend-overlay"></div>
                    
                    {/* Brand Blob Watermark (The "Brand" touch) */}
                    <div className="workforce-watermark absolute -right-10 -top-10 w-40 h-40 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rotate-12">
                         <img src="/logos/brand/mono/AbreviadoSVG-black.svg" className="w-full h-full brightness-0 invert" alt="" />
                    </div>

                    {/* Top Bar */}
                    <div className="relative z-10 flex justify-between items-start mb-8">
                        <div className="px-3 py-1 rounded-full bg-[#252525] border border-neutral-800 group-hover:border-[#CED600] group-hover:bg-[#CED600] transition-all duration-300">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-[#1A1A1A] font-bold transition-colors">
                                {card.tag}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#CED600] transition-colors duration-300"></div>
                        </div>
                    </div>

                    {/* Header Visual & Title */}
                    <div className="relative z-10 flex-1">
                        <div className="mb-6 relative">
                            {/* Icon Container - Floating & Glowing on Hover */}
                            <div className="workforce-icon-container w-16 h-16 md:w-20 md:h-20 bg-[#252525] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out border border-white/5 group-hover:border-white/20 relative overflow-hidden">
                                {/* Scanline effect */}
                                <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:animate-scanline pointer-events-none"></div>
                                
                                {card.icon && <card.icon 
                                    strokeWidth={1.5}
                                    className="w-8 h-8 md:w-10 md:h-10 text-[#CED600] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500"
                                />}
                            </div>
                            
                            <h3 className="font-manrope font-semibold text-3xl md:text-4xl text-white mb-4 group-hover:text-[#CED600] transition-colors duration-300 tracking-tighter">
                                {card.title}
                            </h3>
                            
                            <p className="font-body text-neutral-400 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 mb-6">
                                {card.desc}
                            </p>

                            {/* Hook - Tech Style */}
                            <div className="pl-4 border-l-2 border-[#CED600]/30 group-hover:border-[#CED600] transition-colors mb-6">
                                <p className="font-mono text-xs md:text-sm text-[#CED600] italic">
                                    // {card.hook}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 pt-6 mt-auto border-t border-neutral-800 flex justify-between items-center group-hover:border-neutral-700 transition-colors">
                        {/* Tech Stack */}
                        <div className="flex items-center gap-3">
                            {card.stack.map((tech, i) => (
                                <div key={i} title={tech} className="transition-all duration-300 hover:scale-110">
                                    {getBrandLogo(tech)}
                                </div>
                            ))}
                        </div>

                        {/* CTA Arrow */}
                        <div className="w-10 h-10 rounded-full bg-[#252525] border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:bg-[#CED600] group-hover:border-[#CED600] group-hover:text-[#1A1A1A] group-hover:rotate-45 transition-all duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Workforce;
