import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CheckCheck, Video, Phone, MoreVertical, Paperclip, Camera, Mic, Smile, ChevronLeft, Battery, Wifi, Signal, Play } from 'lucide-react';

interface Message {
  id: number;
  text?: string;
  sender: 'user' | 'agent';
  timestamp: string;
  isTyping?: boolean;
  type?: 'text' | 'image' | 'audio';
  imageUrl?: string;
  audioDuration?: string;
}

const CONVERSATION_SCRIPT = [
  {
    sender: 'agent',
    text: "⚠️ Alerta de Mercado: La competencia (SportWorld) acaba de bajar un 20% el precio de las Nike Air Zoom.",
    delay: 1000
  },
  {
    sender: 'agent',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    text: "Modelo afectado: Nike Air Zoom Pegasus 40",
    delay: 500
  },
  {
    sender: 'user',
    text: "Uff... ¿a cuánto quedaron?",
    delay: 2500
  },
  {
    sender: 'agent',
    text: "Bajaron de $180 a $144. Estamos $36 arriba. 📉 El tráfico en nuestra PDP cayó un 40% en la última hora.",
    delay: 3000
  },
  {
    sender: 'user',
    text: "No podemos perder esas ventas. ¿Qué hacemos?",
    delay: 2500
  },
  {
    sender: 'agent',
    text: "Sugiero igualar oferta automáticamente por 24hs y enviar alerta a los 450 usuarios que la vieron hoy. ¿Ejecuto?",
    delay: 3000
  },
  {
    sender: 'user',
    text: "Dale, activalo ya.",
    delay: 2000
  },
  {
    sender: 'agent',
    text: "Procesando... ⚡",
    delay: 1500
  },
  {
    sender: 'agent',
    text: "Listo. Precio actualizado a $144 y notificaciones enviadas. Estimamos recuperar el volumen en 2hs. 🚀",
    delay: 2000
  }
];

const WorkforceChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    let cumulativeDelay = 0;

    // Reset
    setMessages([]);
    setIsTyping(false);

    CONVERSATION_SCRIPT.forEach((msg, index) => {
      // User message logic
      if (msg.sender === 'user') {
        const timeoutId = setTimeout(() => {
          setIsTyping(false); // Agent stops typing when user speaks (if applicable, though async usually)
          setMessages(prev => [...prev, {
            id: index,
            text: msg.text,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: msg.type as 'text' | 'image' | 'audio',
            imageUrl: msg.imageUrl,
            audioDuration: msg.audioDuration
          }]);
        }, cumulativeDelay);
        timeoutIds.push(timeoutId);
      } 
      // Agent message logic
      else {
        // Start typing indicator before message
        const typingStartDelay = cumulativeDelay - 1000; // Start typing 1s before
        if (typingStartDelay >= 0) {
            const typingTimeout = setTimeout(() => setIsTyping(true), typingStartDelay);
            timeoutIds.push(typingTimeout);
        }

        const timeoutId = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: index,
            text: msg.text,
            sender: 'agent',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: msg.type as 'text' | 'image' | 'audio',
            imageUrl: msg.imageUrl,
            audioDuration: msg.audioDuration
          }]);
        }, cumulativeDelay);
        timeoutIds.push(timeoutId);
      }

      cumulativeDelay += msg.delay;
    });

    // Restart loop
    const restartTimeout = setTimeout(() => {
        setRestartKey(prev => prev + 1);
    }, cumulativeDelay + 5000);
    timeoutIds.push(restartTimeout);

    return () => timeoutIds.forEach(clearTimeout);
  }, [restartKey]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <section className="w-full py-24 bg-canvas flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-[#CED600] rounded-full animate-pulse"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Demo en Tiempo Real</span>
            </div>
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Tu mejor vendedor <br/>
                <span className="text-neutral-500">vive en WhatsApp.</span>
            </h2>
            <p className="font-karla text-lg text-neutral-400 mb-8 max-w-xl">
                Olvidate de los tiempos de espera. Nuestros agentes responden, califican y venden al instante, usando el canal que tus clientes ya usan.
            </p>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/80">
                    <div className="p-2 bg-[#272727] rounded-lg border border-white/5">
                        <Check className="text-[#CED600]" size={20} />
                    </div>
                    <span className="font-manrope">Muestra productos y precios</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                    <div className="p-2 bg-[#272727] rounded-lg border border-white/5">
                        <Check className="text-[#CED600]" size={20} />
                    </div>
                    <span className="font-manrope">Cierra ventas automáticamente</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                    <div className="p-2 bg-[#272727] rounded-lg border border-white/5">
                        <Check className="text-[#CED600]" size={20} />
                    </div>
                    <span className="font-manrope">Integrado a tu catálogo</span>
                </div>
            </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="lg:w-1/2 flex justify-center scale-90 md:scale-100">
            <div className="relative w-[375px] h-[812px] bg-black rounded-[2rem] border-8 border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col font-sans">
                {/* Status Bar (Android Style) */}
                <div className="h-8 bg-[#1f2c34] flex justify-between items-center px-4 z-30 text-white/90">
                    <span className="text-xs font-medium tracking-wide">10:00</span>
                    <div className="flex gap-1.5 items-center">
                        <Wifi size={14} />
                        <Signal size={14} />
                        <Battery size={14} className="rotate-90" />
                    </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 z-20 shadow-sm">
                    <ChevronLeft className="text-white cursor-pointer shrink-0" />
                    <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/10">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" 
                                alt="Brand" 
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex-1 cursor-pointer min-w-0">
                        <h3 className="text-white font-semibold text-base leading-tight truncate">SportStyle Store</h3>
                        <p className="text-[#CED600] text-xs truncate">Cuenta de empresa</p>
                    </div>
                    <div className="flex gap-4 text-white shrink-0">
                        <Video size={20} />
                        <Phone size={20} />
                        <MoreVertical size={20} />
                    </div>
                </div>

                {/* Chat Area */}
                <div 
                    className="flex-1 bg-[#0b141a] p-4 overflow-y-auto relative"
                    style={{ 
                        backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', 
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat'
                    }}
                    ref={scrollRef}
                >
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                    
                    <div className="space-y-4 pb-4 relative z-10">
                        {/* Encryption Notice */}
                        <div className="flex justify-center my-4">
                            <div className="bg-[#1f2c34] rounded-lg px-3 py-1.5 max-w-[80%] text-center shadow-sm">
                                <p className="text-[#FFD279] text-[10px] flex items-center justify-center gap-1">
                                    <span className="text-[10px]">🔒</span> Los mensajes están cifrados de extremo a extremo.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mb-6">
                            <span className="bg-[#1f2c34] text-neutral-400 text-[10px] py-1 px-3 rounded-lg shadow-sm uppercase tracking-wider font-medium">
                                Hoy
                            </span>
                        </div>

                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-[75%] p-2 rounded-lg text-sm leading-relaxed shadow-sm relative group ${
                                            msg.sender === 'user' 
                                            ? 'bg-[#005c4b] text-white rounded-tr-none' 
                                            : 'bg-[#1f2c34] text-white rounded-tl-none'
                                        }`}
                                    >
                                        {msg.type === 'image' && msg.imageUrl ? (
                                            <div className="mb-1 rounded-lg overflow-hidden">
                                                <img src={msg.imageUrl} alt="Product" className="w-full h-auto object-cover" />
                                            </div>
                                        ) : null}
                                        
                                        {msg.type === 'audio' ? (
                                            <div className="flex items-center gap-3 min-w-[240px] pr-2 py-1">
                                                <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center cursor-pointer shrink-0">
                                                    <Play size={18} className="ml-1 fill-white text-white" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                                    <div className="flex items-center gap-0.5 h-6 w-full overflow-hidden">
                                                        {/* Fake waveform */}
                                                        {Array.from({ length: 30 }).map((_, i) => (
                                                            <div 
                                                                key={i} 
                                                                className="w-0.5 bg-white/60 rounded-full" 
                                                                style={{ 
                                                                    height: `${Math.max(30, Math.random() * 100)}%`,
                                                                    opacity: i < 15 ? 1 : 0.5
                                                                }}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-between items-center w-full">
                                                        <span className="text-[11px] text-white/90 font-medium">{msg.audioDuration}</span>
                                                    </div>
                                                </div>
                                                <div className="relative shrink-0 ml-2">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white flex items-center justify-center">
                                                        {msg.sender === 'user' ? (
                                                            <div className="w-full h-full flex items-center justify-center bg-neutral-500">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white/50"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                                            </div>
                                                        ) : (
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Profile" className="w-6 h-6 object-contain" />
                                                        )}
                                                    </div>
                                                    <div className="absolute -bottom-1 -right-1 bg-[#005c4b] rounded-full p-0.5 border border-[#0b141a]">
                                                        <Mic size={12} className="text-white fill-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="mr-12 pb-1">{msg.text}</p>
                                        )}
                                        
                                        <div className="absolute bottom-1 right-2 flex items-center gap-1 opacity-70">
                                            <span className="text-[10px] text-gray-300">{msg.timestamp}</span>
                                            {msg.sender === 'user' && <CheckCheck size={14} className="text-[#53bdeb]" />}
                                        </div>
                                        
                                        {/* Tail SVG */}
                                        {msg.sender === 'user' ? (
                                             <svg viewBox="0 0 8 13" height="13" width="8" className="absolute top-0 -right-2 fill-[#005c4b]"><path opacity="0.13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                        ) : (
                                            <svg viewBox="0 0 8 13" height="13" width="8" className="absolute top-0 -left-2 fill-[#1f2c34] scale-x-[-1]"><path opacity="0.13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTyping && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none flex gap-1 items-center h-9 w-16 justify-center">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Input Area (Static) */}
                <div className="bg-[#1f2c34] px-2 pt-2 pb-8 flex items-end gap-2 z-20">
                    <div className="bg-[#2a3942] flex-1 rounded-3xl flex items-center px-3 py-2 gap-3">
                        <Smile className="text-neutral-400 cursor-pointer" size={24} />
                        <div className="flex-1 h-6 bg-transparent text-white text-base">
                            <span className="text-neutral-500">Mensaje</span>
                        </div>
                        <Paperclip className="text-neutral-400 cursor-pointer -rotate-45" size={20} />
                        <Camera className="text-neutral-400 cursor-pointer" size={20} />
                    </div>
                    <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center shadow-lg cursor-pointer mb-0.5">
                        <Mic className="text-white" size={20} />
                    </div>
                </div>

                {/* Home Indicator (Hidden for Android look) */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-[#1f2c34] z-30 rounded-b-[2rem]"></div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default WorkforceChatDemo;
