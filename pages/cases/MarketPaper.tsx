
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Quote, X, Layers, Zap, Check } from 'lucide-react';
import MagneticButton from '../../components/MagneticButton';

const MarketPaper: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas w-full min-h-screen font-sans text-ink selection:bg-accent-lime selection:text-ink">
       
       {/* =====================================================================================
           1. CINEMATIC HERO (Full Screen)
          ===================================================================================== */}
       <section className="relative w-full h-screen flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden">
           
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Cardboard Warehouse Industry" 
                className="w-full h-full object-cover grayscale-[30%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90"></div>
           </div>

           {/* Content */}
           <div className="relative z-10 max-w-[1600px] mx-auto w-full">
               <Link to="/casos" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-all">
                    <ArrowLeft size={16} />
                  </div>
                  <span className="font-body text-xs uppercase tracking-widest">Back to Archive</span>
               </Link>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                   <div className="lg:col-span-8">
                       <span className="font-body text-xs text-accent-lime border border-accent-lime/30 bg-accent-lime/10 px-3 py-1 rounded uppercase tracking-widest mb-8 inline-block">
                          Case Study: MarketPaper
                       </span>
                       <h1 className="font-display font-black text-[12vw] md:text-[8rem] leading-[0.85] tracking-tighter text-white mb-8">
                          El Problema <br/> <span className="text-gray-500">Invisible.</span>
                       </h1>
                   </div>
                   <div className="lg:col-span-4 lg:pb-6">
                       <p className="font-body text-xl text-gray-300 font-light leading-relaxed border-l-2 border-accent-lime pl-6">
                          Cuando una empresa mayorista descubre que puede vender mucho más… si deja que el sistema trabaje por ella.
                       </p>
                   </div>
               </div>
           </div>
       </section>

       {/* =====================================================================================
           2. CHAPTER 01 & 02: THE CONTEXT (Sticky Layout)
          ===================================================================================== */}
       <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               
               {/* Left: Sticky Image Container */}
               <div className="relative hidden lg:block h-fit sticky top-12">
                   <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative">
                       <img 
                         src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
                         alt="Warehouse Chaos" 
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
                       
                       {/* Floating Data Card */}
                       <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                           <div className="flex items-center gap-3 mb-2">
                               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                               <span className="font-body text-[10px] uppercase tracking-widest text-red-500">Critical Failure</span>
                           </div>
                           <p className="font-display text-lg text-ink">Dependencia absoluta del ánimo de cada vendedor.</p>
                       </div>
                   </div>
               </div>

               {/* Right: Scrolling Text */}
               <div className="flex flex-col gap-32 pt-12">
                   
                   {/* Chapter 01 */}
                   <div>
                       <div className="flex items-baseline gap-4 mb-8">
                           <span className="font-body text-sm text-accent-lime font-bold">01</span>
                           <h2 className="font-display font-bold text-4xl text-ink">El Problema Invisible</h2>
                       </div>
                       <div className="prose prose-lg prose-gray max-w-none space-y-6">
                           <p className="text-xl font-light text-gray-500 leading-relaxed">
                              Durante años, Market Paper creció apoyándose en intuición comercial. Y funcionaba… hasta que dejó de hacerlo.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              La empresa había acumulado algo que no figura en ningún balance pero pesa como una deuda operacional: procesos dispersos, datos desordenados y un equipo desmotivado intentando sostenerlos.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              El seguimiento de presupuestos se hacía a mano. WhatsApp era el CRM. Los clientes respondían cuando podían. Los vendedores también.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              La consecuencia era silenciosa pero constante: oportunidades que se perdían sin que nadie pudiera explicar por qué. Leads olvidados. Recordatorios que nunca salían. Conversaciones mezcladas con chats personales.
                           </p>
                           <p className="text-xl text-ink font-medium leading-relaxed">
                              Market Paper no necesitaba milagros. Necesitaba otra forma de trabajar.
                           </p>
                       </div>
                   </div>

                   {/* Chapter 02 */}
                   <div>
                       <div className="flex items-baseline gap-4 mb-8">
                           <span className="font-body text-sm text-gray-300 font-bold">02</span>
                           <h2 className="font-display font-bold text-4xl text-ink">Un Terreno sin Mapear</h2>
                       </div>
                       <div className="prose prose-lg prose-gray max-w-none mb-12 space-y-6">
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              Antes de hablar de inteligencia artificial, había un elefante en la sala: no existía un proceso único, claro ni trazable.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              No había timeline del cliente. Los bots de IA respondían cuando no debían. Se gastaba dinero en mensajes pagos innecesarios. Cada vendedor vivía en su propio mundo operativo.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed">
                              El sistema no controlaba nada. El sistema no recordaba nada. El sistema no escalaba.
                           </p>
                           <p className="text-lg text-gray-500 font-light leading-relaxed border-l-2 border-accent-orange pl-4">
                              Para usar IA con impacto, primero había que enfrentar lo que casi ninguna empresa quiere abordar: ordenar. estandarizar. profesionalizar. Esa fue la primera decisión estratégica.
                           </p>
                       </div>
                   </div>

               </div>
           </div>
       </section>

       {/* =====================================================================================
           3. FULL WIDTH IMAGE BREAK
          ===================================================================================== */}
       <section className="w-full h-[60vh] overflow-hidden relative">
            <img 
               src="https://images.unsplash.com/photo-1565514020176-8c2235c89d9f?q=80&w=2070&auto=format&fit=crop" 
               alt="Industrial Operations" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/60 flex items-center justify-center">
                 <div className="max-w-4xl text-center px-6">
                    <Quote className="text-white/20 w-16 h-16 mx-auto mb-8" />
                    <p className="font-display font-bold text-3xl md:text-5xl text-white leading-tight text-balance">
                       "Automatizar no es que un bot responda; automatizar es construir un proceso que se ejecuta solo."
                    </p>
                 </div>
            </div>
       </section>

       {/* =====================================================================================
           4. CHAPTER 03: THE INTERVENTION
          ===================================================================================== */}
       <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="font-body text-sm text-gray-300 font-bold mb-4 block">03 — La Intervención</span>
                <h2 className="font-display font-black text-5xl md:text-6xl text-ink tracking-tighter mb-8">Estructura antes que Magia.</h2>
                <div className="space-y-6 text-xl text-gray-500 font-light leading-relaxed">
                   <p>
                       Entramos con una premisa: automatizar no es que un bot responda; automatizar es construir un proceso que se ejecuta solo.
                   </p>
                   <p>
                       Creemos una arquitectura que conecta: <strong>HubSpot + ManyChat + n8n</strong>, pero lo más importante no fue la tecnología: fue instalar un nuevo hábito operativo.
                   </p>
                </div>
            </div>

            {/* Architecture Card */}
            <div className="bg-[#272727] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden mb-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="bg-mineral p-8 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 hover:border-accent-lime/30 transition-colors duration-300">
                        <Layers className="text-accent-lime mb-6" size={32} />
                        <h4 className="font-display text-2xl mb-2">Centralización</h4>
                        <p className="text-gray-400 text-sm">Convertimos el envío de presupuestos en una acción de un solo clic.</p>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <div className="w-full h-[2px] bg-white/20 relative">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-lime rounded-full shadow-[0_0_15px_#CED600]"></div>
                        </div>
                    </div>

                    <div className="bg-mineral p-8 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 hover:border-accent-lime/30 transition-colors duration-300">
                        <Zap className="text-accent-orange mb-6" size={32} />
                        <h4 className="font-display text-2xl mb-2">Protección</h4>
                        <p className="text-gray-400 text-sm">Blindamos al bot para eliminar interferencias y digitalizamos el ciclo completo.</p>
                    </div>
                </div>
                
                <div className="mt-12 text-center border-t border-white/10 pt-8">
                   <p className="font-display text-xl">
                      Por primera vez, Market Paper tuvo lo que tanto necesitaba: <br/>
                      <span className="text-accent-lime">una verdad única sobre cada cliente.</span>
                   </p>
                </div>
            </div>
       </section>

       {/* =====================================================================================
           5. CHAPTER 04 & 05: HUMAN IMPACT & SCALABILITY
          ===================================================================================== */}
       <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
             
             {/* Chapter 04 */}
             <div>
                <span className="font-body text-sm text-gray-300 font-bold mb-4 block">04</span>
                <h3 className="font-display font-bold text-3xl text-ink mb-6">Cuando el Sistema Empuja, el Equipo se Libera</h3>
                <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
                   <p>El mayor impacto no fue técnico. Fue humano.</p>
                   <p>
                      El equipo dejó de “perseguir chats” y volvió a vender. Los recordatorios dejaron de depender de un martes complicado. Los vendedores dejaron de competir contra su propia desorganización.
                   </p>
                   <p>
                      Pasaron de ser proactivos por obligación a ser reactivos por diseño. Y esa diferencia cambió todo. La intención ya no se pierde. La oportunidad ya no se diluye.
                   </p>
                   <p className="font-medium text-ink">
                      Sin pedirle a nadie que trabaje más, se logró lo esencial: el sistema hace el trabajo sucio; el equipo hace el trabajo valioso.
                   </p>
                </div>
             </div>

             {/* Chapter 05 */}
             <div>
                <span className="font-body text-sm text-gray-300 font-bold mb-4 block">05</span>
                <h3 className="font-display font-bold text-3xl text-ink mb-6">Del Caos a la Escalabilidad</h3>
                <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
                   <p>
                      Con la operación digitalizada y ordenada, apareció lo que antes era imposible: trazabilidad real.
                   </p>
                   <p>
                      Cada recordatorio, cada respuesta y cada microevento queda registrado. La dirección puede auditar el pipeline mayorista con datos limpios. Los costos bajaron gracias al uso inteligente de la ventana de 24h.
                   </p>
                   <p>
                      ¿El resultado más tangible? La tasa de respuesta del cliente subió un 37% desde la implementación del sistema.
                   </p>
                   <p className="font-body text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 text-ink">
                      Más respuestas → más conversaciones → más cierres.
                   </p>
                   <p>
                      Market Paper no solo ordenó su operación. Recuperó ventas que antes se perdían sin ser vistas.
                   </p>
                </div>
             </div>

          </div>
       </section>

       {/* =====================================================================================
           6. CHAPTER 06: BEFORE vs AFTER (Visual Comparison)
          ===================================================================================== */}
       <section className="py-32 bg-[#F5F5F5] relative">
           <div className="max-w-[1400px] mx-auto px-6 md:px-12">
               
               <div className="text-center mb-16">
                  <span className="font-body text-sm text-gray-400 font-bold mb-4 block">06 — Transformación</span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mb-4">La Empresa Antes vs. Después</h2>
                  <p className="text-xl text-gray-500 font-light">Este proyecto no fue “hacer un bot”. Fue una reconstrucción conceptual del proceso comercial.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-12">
                  
                  {/* BEFORE CARD */}
                  <div className="bg-white border border-neutral-200 p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-black text-9xl text-ink">X</div>
                      <h3 className="font-body text-xs uppercase tracking-widest text-red-500 mb-6">Antes</h3>
                      <h4 className="font-display text-3xl text-gray-400 mb-8 line-through decoration-red-500/50">Improvisación</h4>
                      <ul className="space-y-6">
                         <li className="flex gap-4 text-gray-500">
                            <span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs shrink-0">×</span>
                            Vendedor olvida lead → Negocio pierde
                         </li>
                         <li className="flex gap-4 text-gray-500">
                            <span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs shrink-0">×</span>
                            Bot responde fuera de contexto → Cliente confuso
                         </li>
                         <li className="flex gap-4 text-gray-500">
                            <span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs shrink-0">×</span>
                            Recordatorio no sale → Oportunidad muere
                         </li>
                      </ul>
                  </div>

                  {/* AFTER CARD */}
                  <div className="bg-ink text-white p-12 rounded-[2.5rem] shadow-2xl shadow-ink/20 relative overflow-hidden group transform md:-translate-y-8">
                      <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-black text-9xl text-white">✓</div>
                      <h3 className="font-body text-xs uppercase tracking-widest text-accent-lime mb-6">Después</h3>
                      <h4 className="font-display text-3xl text-white mb-8">Sistema Protegido</h4>
                      <ul className="space-y-6">
                         <li className="flex gap-4 text-gray-300">
                            <span className="w-6 h-6 rounded-full bg-accent-lime/20 text-accent-lime flex items-center justify-center text-xs shrink-0">✓</span>
                            El sistema recuerda y ordena
                         </li>
                         <li className="flex gap-4 text-gray-300">
                            <span className="w-6 h-6 rounded-full bg-accent-lime/20 text-accent-lime flex items-center justify-center text-xs shrink-0">✓</span>
                            El sistema empuja y protege
                         </li>
                         <li className="flex gap-4 text-gray-300">
                            <span className="w-6 h-6 rounded-full bg-accent-lime/20 text-accent-lime flex items-center justify-center text-xs shrink-0">✓</span>
                            Datos centralizados y predecibles
                         </li>
                      </ul>
                      
                      {/* Decorative Glow */}
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-lime/10 rounded-full blur-[80px]"></div>
                  </div>

               </div>

               <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 text-center max-w-3xl mx-auto shadow-sm">
                  <p className="text-lg text-gray-600 font-light">
                     Y recién ahora —con datos centralizados— la empresa está lista para la etapa transformadora: 
                     <span className="text-ink font-bold"> IA experta, limpieza inteligente y automatizaciones predictivas.</span>
                  </p>
               </div>
           </div>
       </section>

       {/* =====================================================================================
           7. RESULTS (Chapter 07)
          ===================================================================================== */}
       <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
           <span className="font-body text-xs uppercase tracking-widest text-gray-400 mb-6 block">07 — Resultado Final</span>
           
           <div className="max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-display font-bold text-4xl text-ink">El Sistema Cambió Todo.</h2>
              <p className="text-xl text-gray-500 font-light">
                 Market Paper sí necesitaba vender más. Y hoy vende más porque convierte más. El proyecto reemplazó improvisación por estructura. No se cambió personal. Se cambió el sistema.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                   <div className="font-display font-black text-[6rem] md:text-[8rem] text-accent-lime leading-[0.8] mb-4">+37%</div>
                   <p className="font-body text-xl text-ink">Tasa de Respuesta</p>
               </div>
               <div>
                   <div className="font-display font-black text-[6rem] md:text-[8rem] text-ink leading-[0.8] mb-4">100%</div>
                   <p className="font-body text-xl text-gray-500">Trazabilidad</p>
               </div>
               <div>
                   <div className="font-display font-black text-[6rem] md:text-[8rem] text-gray-300 leading-[0.8] mb-4">0</div>
                   <p className="font-body text-xl text-gray-500">Leads Perdidos</p>
               </div>
           </div>
       </section>

       {/* =====================================================================================
           8. EPILOGUE (Chapter 08)
          ===================================================================================== */}
       <section className="bg-ink text-white py-32 relative overflow-hidden">
           <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                 alt="Modern Office" 
                 className="w-full h-full object-cover opacity-20 grayscale"
               />
               <div className="absolute inset-0 bg-ink/80"></div>
           </div>

           <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <span className="font-body text-xs uppercase tracking-widest text-accent-lime mb-6 block">08 — Epílogo</span>
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
                 Cuando el negocio se ordena, <br/> la IA tiene lugar.
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                 La mayoría de las empresas quiere IA para resolver el caos. Pero la IA no funciona en el caos. Primero se ordena el proceso. Después se enciende la inteligencia. Market Paper lo entendió y hoy está preparada para el futuro.
              </p>
              
              <div className="flex justify-center gap-6">
                  <Link to="/casos" className="bg-white text-ink px-8 py-4 rounded-full font-bold hover:bg-accent-lime transition-colors">
                     Volver al Archivo
                  </Link>
                  <MagneticButton 
                    onClick={() => navigate('/#closing')} 
                    className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-ink transition-colors"
                  >
                     Hablemos
                  </MagneticButton>
              </div>
           </div>
       </section>

    </div>
  );
};

export default MarketPaper;
