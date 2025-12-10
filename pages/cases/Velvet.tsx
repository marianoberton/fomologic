
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Velvet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas w-full min-h-screen">
       
       {/* HERO */}
       <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
           <Link to="/casos" className="inline-flex items-center gap-2 text-gray-400 hover:text-ink mb-12 transition-colors">
              <ArrowLeft size={16} />
              <span className="font-body text-xs uppercase tracking-widest">Back to Archive</span>
           </Link>

           <h1 className="font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-ink mb-12">
              Velvet <br/> <span className="text-gray-300">Agents.</span>
           </h1>

           <div className="relative w-full h-[60vh] rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
                alt="Velvet AI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20"></div>
           </div>
       </section>

       {/* META GRID */}
       <section className="bg-ink text-white py-12 border-y border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Industry</span>
                <p className="font-display text-lg">E-commerce / Retail</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Tech Stack</span>
                <p className="font-display text-lg">OpenAI, Pinecone, LangChain</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Deliverables</span>
                <p className="font-display text-lg">RAG Agent, WhatsApp API</p>
             </div>
             <div>
                <span className="font-body text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Outcome</span>
                <p className="font-display text-lg text-accent-lime">60% Ticket Deflection</p>
             </div>
          </div>
       </section>

       {/* STORYTELLING */}
       <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
               <div>
                  <h3 className="font-display font-bold text-4xl mb-6">The Goal</h3>
                  <div className="w-12 h-1 bg-accent-lime mb-6"></div>
               </div>
               <div>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed">
                     Velvet, una marca de moda en rápido crecimiento, enfrentaba una crisis de soporte. Con miles de consultas semanales sobre tallas, envíos y devoluciones, su equipo humano estaba colapsado, generando tiempos de respuesta de +24h y pérdida de ventas.
                  </p>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
               <div>
                  <h3 className="font-display font-bold text-4xl mb-6">The Solution</h3>
                  <div className="w-12 h-1 bg-accent-orange mb-6"></div>
               </div>
               <div>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed mb-8">
                     Implementamos un Agente de IA entrenado con toda la base de conocimiento de la marca (manuales, políticas, historial de chats).
                  </p>
                  <p className="font-body text-xl text-gray-500 font-light leading-relaxed">
                     Usando RAG (Retrieval-Augmented Generation), el bot busca la respuesta exacta en la documentación y responde al cliente en segundos con tono humano. Además, se conecta al sistema de logística para informar el estado de pedidos en tiempo real.
                  </p>
               </div>
           </div>

           {/* RESULTS */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-12 bg-white border border-neutral-200 shadow-sm rounded-3xl">
                  <div className="font-display font-black text-6xl text-ink mb-2">24/7</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">Availability</div>
              </div>
              <div className="p-12 border border-white/5 rounded-3xl bg-mineral text-white shadow-xl">
                  <div className="font-display font-black text-6xl text-accent-lime mb-2">-60%</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">Support Costs</div>
              </div>
              <div className="p-12 bg-white border border-neutral-200 shadow-sm rounded-3xl">
                  <div className="font-display font-black text-6xl text-ink mb-2">4.8/5</div>
                  <div className="font-body text-xs uppercase tracking-widest text-gray-400">CSAT Score</div>
              </div>
           </div>

       </section>

       {/* NEXT PROJECT */}
       <section className="bg-ink text-white py-32 px-6 md:px-12 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gray-500 mb-8">Up Next</p>
          <Link to="/casos/marketpaper" className="inline-block group">
             <h2 className="font-display font-black text-[8vw] leading-none group-hover:text-accent-lime transition-colors">
                MarketPaper
             </h2>
             <div className="h-[2px] w-0 bg-accent-lime group-hover:w-full transition-all duration-500 mx-auto mt-4"></div>
          </Link>
       </section>

    </div>
  );
};

export default Velvet;
