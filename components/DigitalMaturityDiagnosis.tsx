import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, User as UserIcon, Activity, Lock, Database, DollarSign, Clock, BarChart3, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import ButtonPrimary from './ButtonPrimary';

// --- TYPES ---
type FlowStatus = 'idle' | 'qualifier' | 'deep-dive' | 'processing' | 'proposal' | 'disqualified';

interface Option {
    id: string;
    label: string;
    value: number;
    description: string;
    type?: string;
    action?: 'next' | 'exit' | 'service'; // Navigation logic
}

interface Question {
    id: string;
    title: string;
    subtitle: string;
    options: Option[];
}

interface ChatMessage {
    id: string;
    role: 'ai' | 'user';
    content: React.ReactNode; // Changed to Node to support rich content like CTAs
    timestamp: Date;
}

// --- DATA: QUALIFIERS ---
const QUALIFIER_QUESTIONS: Question[] = [
    {
        id: "revenue",
        title: "Volumen de Facturación",
        subtitle: "Para calibrar el ROI de la automatización, necesitamos conocer tu escala actual.",
        options: [
            { id: "seed", label: "< $1M Anual", value: 0, description: "Etapa temprana / Validación", action: 'exit' },
            { id: "growth", label: "$1M - $5M Anual", value: 5, description: "Scale-up en expansión", action: 'next' },
            { id: "enterprise", label: "$5M+ Anual", value: 10, description: "Consolidado / Enterprise", action: 'next' }
        ]
    },
    {
        id: "stack",
        title: "Infraestructura Digital",
        subtitle: "¿Cuentas con sistemas centrales de gestión de datos?",
        options: [
            { id: "none", label: "No / Hojas de Cálculo", value: 0, description: "Operación manual dispersa", action: 'service' }, // Service upsell
            { id: "basic", label: "SaaS Básicos", value: 5, description: "Herramientas aisladas (Mailchimp, Trello)", action: 'next' }, // Borderline
            { id: "erp_crm", label: "ERP / CRM Central", value: 10, description: "Salesforce, HubSpot, SAP, Netsuite", action: 'next' }
        ]
    }
];

// --- DATA: DEEP DIVE ---
const DEEP_DIVE_QUESTIONS: Question[] = [
    {
        id: "volume",
        title: "Carga Operativa",
        subtitle: "¿Cuál es el volumen aproximado de interacciones manuales mensuales?",
        options: [
            { id: "low", label: "500 - 2.000", value: 1, description: "Consultas o tareas repetitivas", action: 'next' },
            { id: "med", label: "2.000 - 10.000", value: 2, description: "Requiere equipo dedicado", action: 'next' },
            { id: "high", label: "10.000+", value: 3, description: "Saturación crítica del sistema", action: 'next' }
        ]
    },
    {
        id: "pain",
        title: "Fricción Principal",
        subtitle: "¿Dónde se pierde más dinero o tiempo actualmente?",
        options: [
            { id: "support", label: "Atención al Cliente", value: 1, description: "Tiempos de respuesta lentos / 24/7", action: 'next', type: "Agente de Atención" },
            { id: "sales", label: "Ventas & Leads", value: 2, description: "Seguimiento y cualificación manual", action: 'next', type: "Agente de Ventas" },
            { id: "ops", label: "Operaciones / Admin", value: 3, description: "Procesamiento de pedidos/facturas", action: 'next', type: "Agente Operativo" },
            { id: "tenders", label: "Licitaciones", value: 4, description: "Búsqueda y análisis de oportunidades", action: 'next', type: "Agente de Licitaciones" }
        ]
    },
    {
        id: "cost",
        title: "Costo de Inacción",
        subtitle: "¿Cuántas horas semanales estima tu equipo pierde en esto?",
        options: [
            { id: "low_cost", label: "10-40 Horas", value: 1, description: "~1 FTE (Full Time Employee)", action: 'next' },
            { id: "med_cost", label: "40-100 Horas", value: 2, description: "2-3 FTEs dedicados", action: 'next' },
            { id: "high_cost", label: "100+ Horas", value: 3, description: "Departamento entero bloqueado", action: 'next' }
        ]
    },
    {
        id: "urgency",
        title: "Timeline de Implementación",
        subtitle: "¿Cuándo necesitas ver esta solución operativa?",
        options: [
            { id: "asap", label: "Inmediato (30 días)", value: 3, description: "El problema es crítico hoy", action: 'next' },
            { id: "quarter", label: "Este Trimestre (Q)", value: 2, description: "Planificación estratégica", action: 'next' },
            { id: "exploratory", label: "Exploratorio (6m+)", value: 1, description: "Evaluando tecnologías", action: 'next' }
        ]
    }
];

const DigitalMaturityDiagnosis: React.FC = () => {
    // STATE
    const [status, setStatus] = useState<FlowStatus>('idle');
    const [qualifierStep, setQualifierStep] = useState(0);
    const [deepDiveStep, setDeepDiveStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, Option>>({});
    
    // Chat State
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // --- LOGIC: HANDLERS ---

    const handleStart = () => {
        setStatus('qualifier');
    };

    const handleQualifierSelect = (option: Option) => {
        const currentQ = QUALIFIER_QUESTIONS[qualifierStep];
        setAnswers(prev => ({ ...prev, [currentQ.id]: option }));

        if (option.action === 'exit') {
            setTimeout(() => setStatus('disqualified'), 300);
            return;
        }

        if (option.action === 'service') {
            // Special case: Not ready for product, but ready for service
             setTimeout(() => setStatus('disqualified'), 300); // For now, treat as disqualified with specific message
             return;
        }

        if (qualifierStep < QUALIFIER_QUESTIONS.length - 1) {
            setTimeout(() => setQualifierStep(prev => prev + 1), 300);
        } else {
            // Passed Qualification
            setTimeout(() => setStatus('deep-dive'), 300);
        }
    };

    const handleDeepDiveSelect = (option: Option) => {
        const currentQ = DEEP_DIVE_QUESTIONS[deepDiveStep];
        setAnswers(prev => ({ ...prev, [currentQ.id]: option }));

        if (deepDiveStep < DEEP_DIVE_QUESTIONS.length - 1) {
            setTimeout(() => setDeepDiveStep(prev => prev + 1), 300);
        } else {
            // Finished Quiz
            setTimeout(() => {
                setStatus('processing');
            }, 300);
        }
    };

    // --- LOGIC: PROCESSING & PROPOSAL ---

    useEffect(() => {
        if (status === 'processing') {
            // Future Webhook Integration
            // const sendToWebhook = async () => {
            //     try {
            //         await fetch('https://n8n.webhook.url/...', {
            //             method: 'POST',
            //             body: JSON.stringify(answers)
            //         });
            //     } catch (e) { console.error(e); }
            // };
            // sendToWebhook();

            const timer = setTimeout(() => {
                setStatus('proposal');
                generateProposal();
            }, 2500); // 2.5s simulated processing
            return () => clearTimeout(timer);
        }
    }, [status]);

    const generateProposal = () => {
        setIsTyping(true);

        // Extract Data
        const revenue = answers['revenue']?.label;
        const stack = answers['stack']?.label;
        const volume = answers['volume']?.label;
        const pain = answers['pain'];
        const cost = answers['cost']?.label;
        const urgency = answers['urgency']?.label;

        // ROI Calculation (Mock Logic)
        const agentType = pain?.type || "Agente IA";
        const hoursSaved = cost === "100+ Horas" ? 120 : cost === "40-100 Horas" ? 60 : 20;
        const hourlyRate = 25; // USD avg
        const monthlySavings = hoursSaved * 4 * hourlyRate; // Weekly * 4 * Rate

        const proposalText = (
            <div className="space-y-4">
                <p>He analizado tu perfil operativo:</p>
                <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1 ml-2">
                    <li>Estructura: <span className="text-white font-medium">{revenue}</span></li>
                    <li>Infraestructura: <span className="text-white font-medium">{stack}</span></li>
                    <li>Punto Crítico: <span className="text-[#CED600] font-bold">{pain?.label}</span></li>
                </ul>
                
                <div className="p-4 bg-white/5 border-l-2 border-[#CED600] rounded-r-xl">
                    <h4 className="text-white font-bold mb-1">Diagnóstico & Solución</h4>
                    <p className="text-sm text-neutral-300">
                        Tu equipo está perdiendo <strong className="text-white">~{cost} semanales</strong> en tareas que un <strong className="text-[#CED600]">{agentType}</strong> podría resolver autónomamente.
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-neutral-400">ROI Estimado</span>
                        <span className="text-[#CED600] font-mono font-bold text-lg">+${monthlySavings.toLocaleString()}/mes</span>
                    </div>
                </div>

                <p className="text-sm">
                    Dada tu urgencia ({urgency}), recomiendo desplegar una prueba de concepto en los próximos 10 días.
                </p>

                <div className="pt-2">
                    <a 
                        href="https://calendly.com/" // Replace with actual Calendly
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#CED600] text-black px-6 py-3 rounded-full font-bold hover:bg-[#b5bc00] transition-colors"
                    >
                        Agendar Discovery Call
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        );

        setTimeout(() => {
            setMessages([
                {
                    id: 'prop-1',
                    role: 'ai',
                    content: proposalText,
                    timestamp: new Date()
                }
            ]);
            setIsTyping(false);
        }, 1500);
    };

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);


    // --- RENDER ---
    return (
        <section ref={containerRef} className="w-full min-h-screen bg-[#272727] text-white relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
            
            <div className="w-full max-w-7xl relative z-10">
                <AnimatePresence mode="wait">
                    
                    {/* 1. IDLE STATE - ROI FOCUS */}
                    {status === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
                            className="flex flex-col items-start md:items-center text-left md:text-center max-w-4xl mx-auto"
                        >
                            <h2 className="font-manrope font-extrabold text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-tighter mb-8">
                                ¿Cuánto te cuesta <br />
                                <span className="text-[#CED600]">no automatizar hoy?</span>
                            </h2>
                            <p className="font-body text-xl md:text-2xl text-neutral-200 max-w-2xl mb-12 leading-relaxed font-light">
                                Deja de perder margen en tareas manuales. Descubre en 2 minutos cuánto puedes ahorrar implementando Agentes de IA en tu flujo de trabajo.
                            </p>
                            
                            <ButtonPrimary onClick={handleStart}>
                                CALCULAR MI ROI
                            </ButtonPrimary>
                        </motion.div>
                    )}

                    {/* 2. QUALIFIER STATE */}
                    {status === 'qualifier' && (
                        <QuizView 
                            key="qualifier"
                            step={qualifierStep}
                            totalSteps={QUALIFIER_QUESTIONS.length}
                            question={QUALIFIER_QUESTIONS[qualifierStep]}
                            onSelect={handleQualifierSelect}
                            phase="Fase 1: Cualificación"
                        />
                    )}

                    {/* 3. DEEP DIVE STATE */}
                    {status === 'deep-dive' && (
                        <QuizView 
                            key="deep-dive"
                            step={deepDiveStep}
                            totalSteps={DEEP_DIVE_QUESTIONS.length}
                            question={DEEP_DIVE_QUESTIONS[deepDiveStep]}
                            onSelect={handleDeepDiveSelect}
                            phase="Fase 2: Diagnóstico Profundo"
                        />
                    )}

                    {/* 4. PROCESSING STATE */}
                    {status === 'processing' && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center text-center h-[50vh]"
                        >
                            <div className="relative w-24 h-24 mb-8">
                                <svg className="animate-spin w-full h-full text-[#CED600]" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <h3 className="font-manrope text-3xl text-white font-bold animate-pulse">
                                Analizando Vectores de Rentabilidad...
                            </h3>
                            <div className="font-mono text-neutral-400 mt-4 text-sm uppercase tracking-widest flex items-center gap-2">
                                <Database size={14} />
                                Cruzando datos con casos de éxito
                            </div>
                        </motion.div>
                    )}

                    {/* 5. PROPOSAL STATE (CHAT) */}
                    {status === 'proposal' && (
                        <motion.div
                            key="proposal"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-6xl mx-auto h-[700px] grid md:grid-cols-[1fr_1.8fr] gap-8"
                        >
                            {/* Left: Context Summary */}
                            <div className="hidden md:flex flex-col justify-between h-full p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-[#CED600] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(206,214,0,0.3)]">
                                                <Bot size={32} />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#272727] rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-manrope font-bold text-2xl text-white">Neural Architect</h3>
                                            <span className="text-neutral-400 font-medium text-sm">IA Strategy Consultant</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#CED600]">Perfil Detectado</h4>
                                        <div className="space-y-3 text-sm text-neutral-300">
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span>Facturación</span>
                                                <span className="text-white">{answers['revenue']?.label}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span>Stack</span>
                                                <span className="text-white">{answers['stack']?.label}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span>Urgencia</span>
                                                <span className="text-white">{answers['urgency']?.label}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-4 bg-[#CED600]/10 rounded-xl border border-[#CED600]/20">
                                    <div className="flex items-center gap-2 text-[#CED600] mb-2">
                                        <Activity size={16} />
                                        <span className="text-xs font-bold uppercase">Estado del Sistema</span>
                                    </div>
                                    <p className="text-xs text-neutral-300">
                                        Propuesta generada basada en {Object.keys(answers).length} puntos de datos.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Chat */}
                            <div className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                                msg.role === 'ai' ? 'bg-[#CED600] text-black' : 'bg-white/10 text-white'
                                            }`}>
                                                {msg.role === 'ai' ? <Sparkles size={20} /> : <UserIcon size={20} />}
                                            </div>
                                            <div className={`max-w-[90%] p-6 rounded-2xl text-[15px] leading-relaxed ${
                                                msg.role === 'ai' 
                                                ? 'bg-white/5 text-neutral-200 border border-white/10 rounded-tl-none' 
                                                : 'bg-[#CED600] text-black rounded-tr-none font-bold'
                                            }`}>
                                                {msg.content}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#CED600] flex items-center justify-center shrink-0 text-black">
                                                <Sparkles size={20} />
                                            </div>
                                            <div className="bg-white/5 px-4 py-4 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-1.5">
                                                <span className="w-2 h-2 bg-[#CED600] rounded-full animate-bounce"></span>
                                                <span className="w-2 h-2 bg-[#CED600] rounded-full animate-bounce delay-100"></span>
                                                <span className="w-2 h-2 bg-[#CED600] rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* DISQUALIFIED STATE */}
                    {status === 'disqualified' && (
                        <motion.div
                            key="disqualified"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-2xl mx-auto text-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-400">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="font-manrope font-bold text-3xl text-white mb-4">
                                Aún no estás listo para Automatización Avanzada
                            </h3>
                            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                                Nuestras soluciones de Agentes IA requieren una infraestructura de datos consolidada y un volumen mínimo para generar ROI positivo.
                            </p>
                            
                            {answers['stack']?.action === 'service' ? (
                                <div className="bg-[#CED600]/10 border border-[#CED600]/20 p-6 rounded-xl mb-8">
                                    <h4 className="text-[#CED600] font-bold mb-2">Recomendación: Digitalización Base</h4>
                                    <p className="text-sm text-neutral-300">
                                        Te sugerimos iniciar con una consultoría de Transformación Digital para preparar tu ecosistema antes de implementar IA.
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-8">
                                    <h4 className="text-white font-bold mb-2">Recurso Recomendado</h4>
                                    <p className="text-sm text-neutral-300">
                                        Descarga nuestra "Guía de Preparación para la Era de la IA" para escalar tu facturación al siguiente nivel.
                                    </p>
                                </div>
                            )}

                            <ButtonPrimary onClick={() => window.location.href = '/contacto'}>
                                CONTACTAR ASESOR
                            </ButtonPrimary>
                            <button 
                                onClick={() => window.location.reload()}
                                className="mt-6 text-neutral-500 text-sm hover:text-white transition-colors"
                            >
                                Volver al inicio
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTS ---

const QuizView: React.FC<{
    step: number;
    totalSteps: number;
    question: Question;
    onSelect: (opt: Option) => void;
    phase: string;
}> = ({ step, totalSteps, question, onSelect, phase }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto"
    >
        {/* Header */}
        <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-12">
            <div className="flex flex-col">
                <span className="font-mono text-[#CED600] text-xs mb-2 uppercase tracking-wider">{phase}</span>
                <h3 className="font-manrope font-bold text-3xl md:text-5xl tracking-tighter text-white">
                    {question.title}
                </h3>
            </div>
            <div className="hidden md:flex gap-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div key={i} className={`h-1 w-12 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[#CED600]' : 'bg-white/10'}`} />
                ))}
            </div>
        </div>

        <p className="text-2xl text-neutral-200 mb-10 font-light">
            {question.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {question.options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option)}
                    className="group relative flex flex-col items-start p-8 rounded-3xl border border-white/20 hover:bg-white transition-all duration-300 text-left hover:scale-[1.02]"
                >
                    <div className="mb-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                        {step % 3 === 0 ? <DollarSign size={20} /> : 
                         step % 3 === 1 ? <BarChart3 size={20} /> :
                         <Clock size={20} />}
                    </div>
                    <h4 className="font-manrope font-bold text-xl text-white mb-3 group-hover:text-black transition-colors">
                        {option.label}
                    </h4>
                    <p className="text-sm text-neutral-400 group-hover:text-neutral-600 transition-colors leading-relaxed">
                        {option.description}
                    </p>
                </button>
            ))}
        </div>
    </motion.div>
);

export default DigitalMaturityDiagnosis;
