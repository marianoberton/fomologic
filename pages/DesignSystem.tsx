import React from 'react';
import { ArrowRight, ArrowUpRight, Activity, Zap, Map, Box } from 'lucide-react';

const DesignSystem: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-canvas text-ink font-sans pt-32 pb-20 px-6 md:px-12 relative z-50">
      
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto mb-24 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
           <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
           <span className="font-sans text-xs uppercase tracking-widest text-gray-400">Internal Tools</span>
        </div>
        <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter text-ink mb-6">
          Design <span className="text-gray-300 font-light">System V2.</span>
        </h1>
        <p className="font-sans text-xl text-gray-500 font-light max-w-2xl">
          System V2: Manrope (Display) + Karla (Body). Case A/B Cards.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto space-y-32">

        {/* 1. COLOR PALETTE */}
        <section>
          <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">01. Color Palette</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">TOKENIZED_VALUES</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Ink */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-ink shadow-lg"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">ink (charcoal)</span>
                   <span className="text-gray-400">#272727</span>
                </div>
             </div>
             {/* Mineral (New) */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-mineral"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">mineral</span>
                   <span className="text-gray-400">#31414A</span>
                </div>
             </div>
             {/* Canvas */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-canvas border border-gray-200"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">canvas</span>
                   <span className="text-gray-400">#FAFAFA</span>
                </div>
             </div>
             {/* Accent Lime */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-accent-lime shadow-[0_0_30px_rgba(206,214,0,0.3)]"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">accent-lime</span>
                   <span className="text-gray-400">#CED600</span>
                </div>
             </div>
             {/* Accent Orange */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-accent-orange"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">accent-orange</span>
                   <span className="text-gray-400">#EE9B00</span>
                </div>
             </div>
             {/* Structure */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-structure"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">structure</span>
                   <span className="text-gray-400">#E5E5E5</span>
                </div>
             </div>
             {/* Surface */}
             <div className="space-y-3">
                <div className="h-32 rounded-xl bg-surface"></div>
                <div className="flex justify-between font-sans text-xs">
                   <span className="font-bold">surface</span>
                   <span className="text-gray-400">#F2F2F2</span>
                </div>
             </div>
          </div>
        </section>

        {/* 2. TYPOGRAPHY */}
        <section>
          <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">02. Typography</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">MANROPE + KARLA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Display */}
             <div className="space-y-8">
                <div className="border-b border-gray-200 pb-2 font-sans text-xs text-gray-400 uppercase tracking-widest">DISPLAY (Manrope)</div>
                <div className="space-y-6">
                   <div>
                      <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter">Heavy Display</h1>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-display font-black text-8xl tracking-tighter</p>
                   </div>
                   <div>
                      <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tighter">Section Title</h2>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-display font-semibold text-6xl tracking-tighter</p>
                   </div>
                   <div>
                      <h3 className="font-display font-light text-4xl text-gray-400">Light Subtitle</h3>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-display font-light text-4xl text-gray-400</p>
                   </div>
                </div>
             </div>

             {/* Body */}
             <div className="space-y-8">
                <div className="border-b border-gray-200 pb-2 font-sans text-xs text-gray-400 uppercase tracking-widest">BODY (Karla)</div>
                <div className="space-y-6">
                   <div>
                      <p className="font-sans text-2xl text-gray-500 font-light leading-relaxed">
                         "Diseñamos la arquitectura que tu empresa necesita para liderar el cambio tecnológico."
                      </p>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-sans text-2xl font-light (Hero Copy)</p>
                   </div>
                   <div>
                      <p className="font-sans text-base text-ink leading-relaxed">
                         Standard body text using Karla. It provides excellent readability for dense content and UI elements. Clean, modern, and neutral.
                      </p>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-sans text-base</p>
                   </div>
                   <div>
                      <div className="flex items-center gap-3">
                         <span className="font-sans text-xs uppercase tracking-widest text-ink border border-ink px-2 py-1 rounded">
                            SYSTEM_TAG
                         </span>
                         <span className="font-sans text-xs uppercase tracking-widest text-accent-lime bg-ink px-2 py-1 rounded">
                            STATUS: OK
                         </span>
                      </div>
                      <p className="font-sans text-xs text-gray-400 mt-2">font-sans text-xs uppercase tracking-widest</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 3. TAGS & BADGES */}
        <section>
           <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">03. Tags & Badges</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">CATEGORIZATION UI</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 p-8 rounded-xl border border-gray-200">
              {/* Light Mode Tags */}
              <div className="space-y-4">
                  <h4 className="font-display font-bold">Light Mode</h4>
                  <div className="flex flex-wrap gap-4">
                      <span className="font-sans text-xs border border-ink/10 text-ink/60 px-3 py-1 rounded-md">
                         Neutral Outline
                      </span>
                      <span className="font-sans text-xs text-accent-orange border border-accent-orange/30 bg-accent-orange/10 px-2 py-1 rounded-md uppercase tracking-widest">
                         Colored Accent
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-ink border border-ink px-2 py-0.5 rounded-md">
                         Compact
                      </span>
                  </div>
              </div>

              {/* Dark Mode Tags */}
              <div className="space-y-4 bg-ink p-4 rounded-lg border border-white/5">
                  <h4 className="font-display font-bold text-white">Dark Mode</h4>
                  <div className="flex flex-wrap gap-4">
                      <span className="font-sans text-xs border border-white/20 text-white/60 px-3 py-1 rounded-md">
                         White Outline
                      </span>
                      <span className="font-sans text-xs text-accent-lime border border-accent-lime/30 bg-accent-lime/10 px-2 py-1 rounded-md uppercase tracking-widest">
                         Neon Accent
                      </span>
                  </div>
              </div>

              {/* Status Indicators */}
              <div className="space-y-4">
                  <h4 className="font-display font-bold">Status</h4>
                  <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                         <span className="font-sans text-xs text-gray-500">System Operational</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                         <span className="font-sans text-xs text-gray-500">Warning State</span>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* 4. COMPONENTS */}
        <section>
          <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">04. Atomic Components</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">INTERACTIVE ELEMENTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             
             {/* Buttons */}
             <div className="space-y-6">
                <h3 className="font-display text-xl font-bold">Buttons</h3>
                <div className="flex flex-col gap-4 items-start">
                   {/* Primary */}
                   <button className="group relative bg-accent-lime text-ink pl-8 pr-2 py-2 rounded-lg flex items-center gap-6 hover:bg-ink hover:text-white transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(206,214,0,0.4)] hover:shadow-none hover:scale-105">
                      <span className="relative z-10 font-sans text-base font-semibold tracking-wide pl-2 lowercase">Primary Action</span>
                      <div className="relative z-10 w-12 h-12 bg-white/30 rounded-md flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-colors">
                         <ArrowRight size={18} />
                      </div>
                   </button>

                   {/* Secondary / Tag */}
                   <button className="flex justify-between items-center bg-white rounded-lg p-4 border border-gray-100 hover:border-ink transition-colors group cursor-pointer shadow-sm w-full max-w-xs">
                      <div className="flex items-center gap-4">
                         <div className="bg-ink text-white px-6 py-2 rounded-md font-sans text-[10px] uppercase tracking-wider">
                            Label
                         </div>
                         <span className="font-sans text-sm text-gray-500">Action</span>
                      </div>
                      <ArrowUpRight size={18} className="text-gray-300 group-hover:text-ink transition-colors" />
                   </button>

                   {/* Text Link */}
                   <button className="group flex items-center gap-2 text-ink font-sans font-medium hover:text-accent-orange transition-colors">
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>

             {/* Feature Rows */}
             <div className="space-y-6 lg:col-span-2">
                <h3 className="font-display text-xl font-bold">Feature Patterns</h3>
                <div className="bg-white p-8 rounded-xl border border-gray-100 space-y-6">
                   {/* Icon Row */}
                   <div className="flex items-center gap-4 group cursor-default p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center group-hover:bg-ink transition-colors duration-300">
                         <Map size={14} className="text-gray-400 group-hover:text-white" />
                      </div>
                      <span className="font-sans text-lg text-ink">Icon Feature Row</span>
                   </div>
                   
                   {/* Border Accent */}
                   <div className="pl-6 border-l-2 border-accent-orange/50">
                      <h4 className="font-sans text-xs uppercase tracking-widest text-accent-orange mb-2">Border Accent Title</h4>
                      <p className="text-gray-500 font-light font-sans">
                         Used for calling out friction points or ROI. Simple left border creates hierarchy.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. CARDS */}
        <section>
           <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">05. Card Architecture</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">CASE A / CASE B</span>
          </div>

          <div className="space-y-12">
             
             {/* Standard Cases */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Case B: Light Section */}
                 <div className="space-y-4">
                     <div className="bg-white border border-gray-200 p-8 rounded-[2.5rem] shadow-sm h-64 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <Activity size={20} className="text-ink" />
                        </div>
                        <h4 className="font-display text-xl font-bold">Case B (Light)</h4>
                        <p className="font-sans text-sm text-gray-500 mt-2">For cards on Light Backgrounds (#FAFAFA).</p>
                     </div>
                     <p className="font-sans text-xs text-gray-400 text-center">bg-white + border-neutral-200 + shadow-sm</p>
                 </div>

                 {/* Case A: Dark Section */}
                 <div className="space-y-4">
                     <div className="bg-mineral border border-white/5 p-8 rounded-[2.5rem] h-64 flex flex-col justify-center items-center text-center hover:border-accent-lime/30 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-lime group-hover:text-mineral transition-colors">
                            <Box size={20} className="text-white group-hover:text-mineral" />
                        </div>
                        <h4 className="font-display text-xl font-bold text-white">Case A (Dark)</h4>
                        <p className="font-sans text-sm text-gray-400 mt-2">For cards on Dark Backgrounds (#272727).</p>
                     </div>
                     <p className="font-sans text-xs text-gray-400 text-center">bg-mineral + border-white/5 + hover:border-lime/30</p>
                 </div>
             </div>

             {/* Complex Cards */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Case B Complex */}
                <div className="bg-white rounded-[2.5rem] p-12 relative overflow-hidden border border-gray-200 shadow-sm h-[400px]">
                   <div className="relative z-10">
                      <span className="font-sans text-xs text-accent-orange border border-accent-orange/30 bg-accent-orange/10 px-2 py-1 rounded-md uppercase tracking-widest">
                         Case B Complex
                      </span>
                      <h3 className="font-display text-3xl font-bold mt-4 mb-2">Technical Grid</h3>
                      <p className="font-sans text-gray-500">Used for "Evidence" or "Protocol" sections.</p>
                   </div>
                </div>

                {/* Case A Complex */}
                <div className="bg-mineral rounded-[2.5rem] p-12 relative overflow-hidden border border-white/5 hover:border-white/20 transition-colors h-[400px] group">
                    <div className="relative z-10">
                      <span className="font-sans text-xs text-accent-lime border border-accent-lime/30 bg-accent-lime/10 px-2 py-1 rounded-md uppercase tracking-widest">
                         Case A Complex
                      </span>
                      <h3 className="font-display text-3xl font-bold text-white mt-4 mb-2">Dark Infrastructure</h3>
                      <p className="font-sans text-gray-400">Used for "System" or "Dark" sections.</p>
                   </div>
                   <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-lime opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
             </div>

          </div>
        </section>

        {/* 6. ANIMATIONS */}
        <section>
          <div className="mb-12 flex items-end justify-between">
             <h2 className="font-display text-4xl font-bold tracking-tight">06. Physics & Motion</h2>
             <span className="font-sans text-xs text-gray-400 uppercase tracking-widest">CSS KEYFRAMES</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             
             {/* Pulse */}
             <div className="p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-4 h-4 bg-accent-lime rounded-full animate-pulse"></div>
                <span className="font-sans text-xs">animate-pulse</span>
             </div>

             {/* Spin Slow */}
             <div className="p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-2 border-dashed border-ink rounded-full animate-spin-slow"></div>
                <span className="font-sans text-xs">animate-spin-slow</span>
             </div>

             {/* Float */}
             <div className="p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-8 h-8 bg-accent-orange rounded-md animate-float"></div>
                <span className="font-sans text-xs">animate-float</span>
             </div>

             {/* Marquee */}
             <div className="p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-4xl font-display whitespace-nowrap animate-marquee">
                   SCROLLING TEXT SCROLLING TEXT
                </div>
                <span className="font-sans text-xs relative z-10">animate-marquee</span>
             </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default DesignSystem;