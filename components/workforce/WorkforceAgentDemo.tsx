import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Bot, 
    User, 
    Terminal, 
    Database, 
    Search, 
    Zap, 
    ChevronDown, 
    ChevronRight, 
    Cpu, 
    Loader2,
    BarChart3,
    Send,
    Mail,
    Users,
    Globe,
    TrendingDown,
    ShieldAlert,
    Megaphone,
    Minus,
    Square,
    X
} from 'lucide-react';

interface ToolCall {
    id: string;
    toolName: string;
    status: 'pending' | 'running' | 'completed';
    input: string;
    output?: string;
    icon?: React.ReactNode;
}

interface Message {
    id: number;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
    toolCalls?: ToolCall[];
}

const AGENT_SCRIPT = [
    {
        role: 'assistant',
        content: "🔔 **Nueva Licitación Detectada**\n\nFuente: Compras Públicas\nExpediente: 4521/24 - Renovación de Infraestructura TI\nPresupuesto: $145M\n\n¿Querés que analice el pliego técnico?",
        delay: 1000
    },
    {
        role: 'user',
        content: "Sí, fijate si nos sirve.",
        delay: 1500
    },
    {
        role: 'assistant',
        content: "Procesando documento (145 páginas)... Buscando coincidencias con nuestro catálogo.",
        toolCalls: [
            {
                id: 'tc_1',
                toolName: 'TenderAI.analyze_pdf',
                input: "{ file: 'pliego_4521.pdf', match_threshold: 0.9 }",
                status: 'pending',
                icon: <Search size={14} />
            }
        ],
        delay: 1000
    },
    {
        role: 'tool_update',
        toolId: 'tc_1',
        status: 'running',
        delay: 1500
    },
    {
        role: 'tool_update',
        toolId: 'tc_1',
        status: 'completed',
        output: "{ matches_found: 3, total_value: '$110M', complexity: 'Medium' }",
        delay: 1000
    },
    {
        role: 'assistant',
        content: "Confirmado. ✅ **Estos son los items en los que podemos participar:**\n\n1. **50x Servidores Rack 2U** (Tenemos stock)\n2. **200x Licencias SO** (Partner Gold)\n3. **Servicio de Migración** (Alta rentabilidad)",
        delay: 2500
    },
    {
        role: 'user',
        content: "¿Y contra quién vamos?",
        delay: 1500
    },
    {
        role: 'assistant',
        content: "Cruzando datos históricos de adjudicaciones... 📊 **Estas son las empresas con las que competimos:**",
        toolCalls: [
            {
                id: 'tc_2',
                toolName: 'MarketIntel.predict_bidders',
                input: "{ category: 'IT_Infrastructure', region: 'AMBA' }",
                status: 'pending',
                icon: <Users size={14} />
            }
        ],
        delay: 1000
    },
    {
        role: 'tool_update',
        toolId: 'tc_2',
        status: 'running',
        delay: 1500
    },
    {
        role: 'tool_update',
        toolId: 'tc_2',
        status: 'completed',
        output: "{ competitors: ['TechSolutions', 'GlobalSys', 'RedesCorp'], win_prob: 'High' }",
        delay: 1000
    },
    {
        role: 'assistant',
        content: "1. **TechSolutions** (Suelen ofertar bajo, pero tienen demoras)\n2. **GlobalSys** (Ganaron la anterior)\n3. **RedesCorp**\n\n¿Preparo los pliegos administrativos?",
        delay: 3000
    }
];

const WorkforceAgentDemo: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const processingRef = useRef(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const processScript = async () => {
            if (currentStep >= AGENT_SCRIPT.length) {
                // Loop: Reset after a delay
                timeoutId = setTimeout(() => {
                    setMessages([]);
                    setCurrentStep(0);
                }, 5000);
                return;
            }

            if (processingRef.current) return;
            processingRef.current = true;

            const step = AGENT_SCRIPT[currentStep];
            
            await new Promise(resolve => setTimeout(resolve, step.delay));

            if (step.role === 'tool_update') {
                setMessages(prev => prev.map(msg => {
                    if (!msg.toolCalls) return msg;
                    const updatedTools = msg.toolCalls.map(tool => {
                        // @ts-ignore
                        if (tool.id === step.toolId) {
                            return { 
                                ...tool, 
                                // @ts-ignore
                                status: step.status, 
                                // @ts-ignore
                                output: step.output || tool.output 
                            };
                        }
                        return tool;
                    });
                    return { ...msg, toolCalls: updatedTools };
                }));
            } else {
                // @ts-ignore
                const newMessage: Message = {
                    id: Date.now(),
                    // @ts-ignore
                    role: step.role,
                    // @ts-ignore
                    content: step.content,
                    timestamp: new Date().toLocaleTimeString(),
                    // @ts-ignore
                    toolCalls: step.toolCalls
                };
                
                if (step.role === 'assistant') {
                    setIsTyping(true);
                    // Simulate typing delay based on content length
                    await new Promise(resolve => setTimeout(resolve, 800)); 
                    setIsTyping(false);
                }
                
                setMessages(prev => [...prev, newMessage]);
            }

            processingRef.current = false;
            setCurrentStep(prev => prev + 1);
        };

        processScript();

        return () => clearTimeout(timeoutId);
    }, [currentStep]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <section className="w-full py-24 bg-[#111] flex flex-col items-center justify-center border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-16">
                
                {/* Left Content - Explanation */}
                <div className="lg:w-1/3 sticky top-24">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-1.5 bg-[#CED600] rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Agent Reasoning</span>
                    </div>
                    <h2 className="font-manrope text-4xl font-bold text-white mb-6 leading-tight">
                        Piensa, actúa y <br/>
                        <span className="text-neutral-500">ejecuta por vos.</span>
                    </h2>
                    <p className="font-karla text-lg text-neutral-400 mb-8">
                        Nuestros agentes no son simples chatbots. Tienen acceso a herramientas, bases de datos y APIs para realizar trabajos complejos de principio a fin.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="p-2 bg-[#272727] rounded-lg text-[#CED600]">
                                <Terminal size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Uso de Herramientas</h3>
                                <p className="text-sm text-neutral-400">Se conecta a tu CRM, Analytics y herramientas internas de forma segura.</p>
                            </div>
                        </div>
                        
                        <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="p-2 bg-[#272727] rounded-lg text-[#CED600]">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Razonamiento Autónomo</h3>
                                <p className="text-sm text-neutral-400">Analiza resultados intermedios y ajusta su estrategia en tiempo real.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Interface Demo */}
                <div className="lg:w-2/3 w-full">
                    <div className="w-full bg-[#1A1A1A] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[700px]">
                        
                        {/* Browser Header (Windows Style) */}
                        <div className="h-12 bg-[#272727] border-b border-white/5 flex items-center justify-between px-4 gap-4 select-none">
                            {/* Left Spacer for Balance */}
                            <div className="w-20 flex items-center gap-2 text-neutral-500">
                                <Terminal size={14} />
                                <span className="text-[10px] font-mono">cmd.exe</span>
                            </div>

                            {/* Address Bar */}
                            <div className="flex-1 flex justify-center max-w-md">
                                <div className="w-full bg-[#111] px-4 py-1.5 rounded-md flex items-center gap-2 text-xs text-neutral-400 border border-white/5 shadow-inner">
                                    <Zap size={10} className="text-[#CED600]" />
                                    <span className="opacity-50">https://</span>
                                    <span className="text-white/80">fomo.workforce.agent_v2</span>
                                </div>
                            </div>

                            {/* Window Controls */}
                            <div className="w-20 flex justify-end gap-3 text-neutral-400">
                                <div className="p-1 hover:bg-white/10 rounded cursor-pointer transition-colors">
                                    <Minus size={14} />
                                </div>
                                <div className="p-1 hover:bg-white/10 rounded cursor-pointer transition-colors">
                                    <Square size={12} />
                                </div>
                                <div className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded cursor-pointer transition-colors">
                                    <X size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" ref={scrollRef}>
                            {messages.map((msg) => (
                                <motion.div 
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Avatar */}
                                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border ${
                                        msg.role === 'assistant' 
                                        ? 'bg-[#CED600] border-[#CED600] text-black' 
                                        : 'bg-[#272727] border-white/10 text-white'
                                    }`}>
                                        {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
                                    </div>

                                    {/* Content */}
                                    <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`text-sm leading-relaxed p-4 rounded-2xl ${
                                            msg.role === 'user' 
                                            ? 'bg-[#272727] text-white rounded-tr-sm' 
                                            : 'text-neutral-300 pl-0 pt-1'
                                        }`}>
                                            {msg.content}
                                        </div>

                                        {/* Tool Calls */}
                                        {msg.toolCalls && (
                                            <div className="w-full space-y-2 mt-2">
                                                {msg.toolCalls.map(tool => (
                                                    <div key={tool.id} className="bg-[#111] rounded-lg border border-white/10 overflow-hidden w-full max-w-md">
                                                        {/* Tool Header */}
                                                        <div className="px-3 py-2 bg-[#1f1f1f] flex items-center justify-between gap-3 border-b border-white/5">
                                                            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                                                                {tool.icon || <Terminal size={12} />}
                                                                <span className="text-[#CED600]">{tool.toolName}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {tool.status === 'running' && <Loader2 size={12} className="animate-spin text-neutral-500" />}
                                                                {tool.status === 'completed' && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                                                                <ChevronDown size={14} className="text-neutral-600" />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Tool Input/Output */}
                                                        <div className="p-3 font-mono text-[10px] space-y-2">
                                                            <div className="text-neutral-500 flex gap-2">
                                                                <span className="text-blue-400 select-none">{'>'}</span>
                                                                {tool.input}
                                                            </div>
                                                            <AnimatePresence>
                                                                {tool.output && (
                                                                    <motion.div 
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        className="text-green-400/80 flex gap-2 border-t border-white/5 pt-2 mt-2"
                                                                    >
                                                                        <span className="select-none text-neutral-600">{'<'}</span>
                                                                        {tool.output}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            
                            {isTyping && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#CED600] flex items-center justify-center text-black">
                                        <Bot size={18} />
                                    </div>
                                    <div className="flex items-center gap-1 h-8">
                                        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce delay-75"></div>
                                        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#1A1A1A] border-t border-white/5">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    disabled
                                    placeholder="Enviar mensaje..."
                                    className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#CED600]/50"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#272727] rounded-lg text-neutral-400">
                                    <Send size={14} />
                                </button>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="text-[10px] text-neutral-600">
                                    FOMO Workforce puede cometer errores. Considera verificar la información importante.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkforceAgentDemo;