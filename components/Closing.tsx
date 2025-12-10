import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Closing: React.FC = () => {
  return (
    <section id="closing" className="py-20 md:py-32 bg-canvas px-6 md:px-12 snap-start">
      <div className="max-w-[1600px] mx-auto bg-[#272727] text-white rounded-[4rem] p-12 md:p-32 shadow-2xl shadow-gray-200 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* CTA Side */}
          <div className="order-2 lg:order-1">
             {/* Consistent Eyebrow */}
             <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse"></div>
                <span className="font-body text-xs uppercase tracking-widest text-accent-lime">Ready to Scale</span>
             </div>

             {/* Raleway Light/Semibold Mix */}
             <h2 className="font-display font-semibold text-6xl md:text-8xl mb-12 leading-[1] tracking-tighter text-balance">
               Tu operación <br/>
               <span className="text-neutral-300 font-light">lista para</span> escalar.
             </h2>
             
             <button className="group w-full md:w-auto bg-accent-lime text-ink px-12 py-8 rounded-full text-2xl font-display font-semibold transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(206,214,0,0.4)] flex items-center justify-between md:justify-start gap-8">
               <span className="lowercase">hablemos</span>
               
             </button>

             <div className="mt-16 flex gap-4 items-center opacity-60 hover:opacity-100 transition-opacity">
                <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-all duration-300"><Mail size={20}/></a>
                <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"><Linkedin size={20}/></a>
             </div>
          </div>

          {/* Founders Side (Clean & Organic) */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Founder 1 */}
              <div className="absolute top-0 right-0 z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-ink grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 hover:z-30">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Alex Mercer" className="w-full h-full object-cover" />
              </div>
              
              {/* Founder 2 */}
              <div className="absolute bottom-0 left-0 z-20 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-ink grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 hover:z-30">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" alt="Sarah Vance" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mt-10 text-right pr-4">
              <p className="font-body text-[10px] text-neutral-300 tracking-widest lowercase mb-2">architects</p>
              <p className="font-display font-medium text-xl text-white">Mercer & Vance</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-body text-white/60 tracking-widest lowercase">
          <div>© 2025 fomo. all rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">privacy</a>
            <a href="#" className="hover:text-white transition-colors">terms</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Closing;