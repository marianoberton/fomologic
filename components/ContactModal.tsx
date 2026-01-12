import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Loader2, X, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useContact } from '../context/ContactContext';

const ROLES = ['Founder/CEO', 'Operaciones', 'Comercial/Ventas', 'Marketing/Growth', 'IT/Sistemas', 'Otro'];
const SIZES = ['solo', '2-10', '11-50', '51-200', '200+'];
const INDUSTRIES = ['Servicios', 'E-commerce/Retail', 'Industria/Logística', 'Construcción/Real Estate', 'Salud', 'Educación', 'Otro'];
const NEEDS = ['Procesos', 'Automatización', 'IA aplicada', 'Datos/Dashboards', 'WhatsApp/Chatbots', 'No estoy seguro'];
const BUDGETS = ['1500-3000', '3000-10000', '10000-25000', '25000+', 'discuss'];
const TIMING = ['AHORA', '1-3M', 'EXPLORANDO IDEAS'];

const ContactModal: React.FC = () => {
  const { isOpen, closeContact } = useContact();
  
  const [formState, setFormState] = useState({
    fullName: '',
    workEmail: '',
    whatsapp: '',
    companyName: '',
    role: '',
    companySize: '',
    industry: '',
    challenge: '',
    needs: [] as string[],
    budgetRange: '',
    timing: '',
    // Hidden fields
    honeypot: '',
    sourceUrl: '',
    referrer: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    clientTime: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Initialize hidden fields on mount/open
  useEffect(() => {
    if (isOpen) {
      setStep(1); // Reset to step 1 on open
      const urlParams = new URLSearchParams(window.location.search);
      setFormState(prev => ({
        ...prev,
        sourceUrl: window.location.href,
        referrer: document.referrer,
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || '',
        clientTime: new Date().toISOString()
      }));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateStep1 = () => {
    return formState.fullName && formState.workEmail && formState.companyName && formState.role && formState.companySize;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    } else {
        // Optional: Trigger browser validation or show error
        const form = document.querySelector('form');
        if (form) form.reportValidity();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
        handleNextStep();
        return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      // Handle non-JSON responses (like 404 HTML from Vite dev server)
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
         if (response.status === 404 && process.env.NODE_ENV === 'development') {
             console.warn("DEV MODE: /api/contact not found (Vite doesn't serve API routes). Simulating success.");
             // Simulate success for dev UI testing
             await new Promise(resolve => setTimeout(resolve, 1000));
             setStatus('success');
             setTimeout(() => {
                closeContact();
                setStatus('idle');
                setStep(1);
                setFormState(prev => ({
                    ...prev,
                    fullName: '', workEmail: '', whatsapp: '', companyName: '',
                    role: '', companySize: '', industry: '', challenge: '',
                    needs: [], budgetRange: '', timing: '', honeypot: ''
                }));
             }, 3000);
             return;
         }
         throw new Error(`Server returned ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
        setTimeout(() => {
            closeContact();
            setStatus('idle');
            setStep(1);
            // Reset form (keep hidden fields logic for next open)
            setFormState(prev => ({
                ...prev,
                fullName: '', workEmail: '', whatsapp: '', companyName: '',
                role: '', companySize: '', industry: '', challenge: '',
                needs: [], budgetRange: '', timing: '', honeypot: ''
            }));
        }, 3000);
      } else {
        throw new Error(data.error || 'Error al enviar');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const toggleNeed = (need: string) => {
    setFormState(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeContact}
            className="fixed inset-0 z-[100] bg-[#272727]/90 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 md:p-6"
          >
            {/* Modal Content */}
            <div 
                className="w-full max-w-7xl h-full md:h-[90vh] bg-[#272727] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={closeContact}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                    
                    {/* Left: Context (Sticky) */}
                    <div className="hidden lg:flex lg:col-span-5 p-12 flex-col justify-between bg-[#272727] relative h-full">
                         {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-12 bg-[#CED600]"></div>
                                <span className="font-display font-bold text-[#CED600] tracking-widest uppercase text-sm">CONTACTO</span>
                            </div>

                            <h2 className="font-display font-black text-6xl leading-[0.9] tracking-tighter uppercase mb-8">
                                <span className="block text-white">CONTANOS</span>
                                <span className="block text-white/40">MAS</span>
                            </h2>

                            <p className="font-body text-lg text-white/60 max-w-md leading-relaxed">
                                Buscamos empresas listas para escalar. Completa el perfil técnico para que podamos analizar la viabilidad de tu caso antes de hablar.
                            </p>
                        </div>

                        {/* Progress Indicator */}
                        <div className="relative z-10">
                            <div className="flex gap-2 mb-4">
                                <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? 'bg-[#CED600]' : 'bg-white/10'}`}></div>
                                <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-[#CED600]' : 'bg-white/10'}`}></div>
                            </div>
                            <p className="text-white/40 text-sm font-mono">PASO {step} / 2</p>
                        </div>
                    </div>

                    {/* Right: Form (Scrollable) */}
                    <div className="col-span-1 lg:col-span-7 bg-white/5 h-full overflow-y-auto custom-scrollbar">
                        <div className="p-8 md:p-12 lg:p-16 min-h-full">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-20 h-20 bg-[#CED600] rounded-full flex items-center justify-center mb-8 text-[#272727]">
                                        <Check size={40} strokeWidth={3} />
                                        </div>
                                        <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">SOLICITUD RECIBIDA</h3>
                                        <p className="font-body text-white/60 max-w-xs mx-auto mb-8">
                                        Analizaremos tu caso y te contactaremos si hay fit estratégico.
                                        </p>
                                        <button onClick={closeContact} className="text-[#CED600] font-bold tracking-widest uppercase text-sm hover:text-white transition-colors">
                                            Cerrar
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col h-full justify-between min-h-[60vh]"
                                    >
                                        {/* Honeypot */}
                                        <input type="text" name="honeypot" value={formState.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                                        <div className="flex-grow">
                                            <AnimatePresence mode="wait">
                                                {step === 1 && (
                                                    <motion.div
                                                        key="step1"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-12"
                                                    >
                                                        {/* SECTION 1: IDENTITY */}
                                                        <div className="space-y-8">
                                                            <h3 className="font-display font-bold text-white text-xl tracking-wider uppercase border-b border-white/10 pb-4">Identidad</h3>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                {/* Full Name */}
                                                                <div className="group relative">
                                                                    <label htmlFor="fullName" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold font-display ${focusedField === 'fullName' || formState.fullName ? '-top-6 text-xs text-[#CED600]' : 'top-0 text-lg text-white/40'}`}>Nombre Completo *</label>
                                                                    <input type="text" id="fullName" name="fullName" required value={formState.fullName} onChange={handleChange} onFocus={() => setFocusedField('fullName')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] transition-colors" />
                                                                </div>
                                                                
                                                                {/* Work Email */}
                                                                <div className="group relative">
                                                                    <label htmlFor="workEmail" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold font-display ${focusedField === 'workEmail' || formState.workEmail ? '-top-6 text-xs text-[#CED600]' : 'top-0 text-lg text-white/40'}`}>Email Corporativo *</label>
                                                                    <input type="email" id="workEmail" name="workEmail" required value={formState.workEmail} onChange={handleChange} onFocus={() => setFocusedField('workEmail')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] transition-colors" />
                                                                </div>

                                                                {/* WhatsApp */}
                                                                <div className="group relative">
                                                                    <label htmlFor="whatsapp" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold font-display ${focusedField === 'whatsapp' || formState.whatsapp ? '-top-6 text-xs text-[#CED600]' : 'top-0 text-lg text-white/40'}`}>WhatsApp</label>
                                                                    <input type="text" id="whatsapp" name="whatsapp" value={formState.whatsapp} onChange={handleChange} onFocus={() => setFocusedField('whatsapp')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] transition-colors" />
                                                                </div>

                                                                {/* Company Name */}
                                                                <div className="group relative">
                                                                    <label htmlFor="companyName" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold font-display ${focusedField === 'companyName' || formState.companyName ? '-top-6 text-xs text-[#CED600]' : 'top-0 text-lg text-white/40'}`}>Empresa *</label>
                                                                    <input type="text" id="companyName" name="companyName" required value={formState.companyName} onChange={handleChange} onFocus={() => setFocusedField('companyName')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] transition-colors" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* SECTION 2: CONTEXT */}
                                                        <div className="space-y-8">
                                                            <h3 className="font-display font-bold text-white text-xl tracking-wider uppercase border-b border-white/10 pb-4">Contexto</h3>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                {/* Role */}
                                                                <div className="relative">
                                                                    <select name="role" required value={formState.role} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] appearance-none cursor-pointer">
                                                                        <option value="" disabled className="bg-[#272727]">Rol *</option>
                                                                        {ROLES.map(r => <option key={r} value={r} className="bg-[#272727]">{r}</option>)}
                                                                    </select>
                                                                    <ChevronDown className="absolute right-0 top-4 text-white/40 pointer-events-none" size={16} />
                                                                </div>

                                                                {/* Company Size */}
                                                                <div className="relative">
                                                                    <select name="companySize" required value={formState.companySize} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] appearance-none cursor-pointer">
                                                                        <option value="" disabled className="bg-[#272727]">Tamaño de Empresa *</option>
                                                                        {SIZES.map(s => <option key={s} value={s} className="bg-[#272727]">{s} empleados</option>)}
                                                                    </select>
                                                                    <ChevronDown className="absolute right-0 top-4 text-white/40 pointer-events-none" size={16} />
                                                                </div>

                                                                {/* Industry */}
                                                                <div className="relative md:col-span-2">
                                                                    <select name="industry" value={formState.industry} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] appearance-none cursor-pointer">
                                                                        <option value="" disabled className="bg-[#272727]">Industria</option>
                                                                        {INDUSTRIES.map(i => <option key={i} value={i} className="bg-[#272727]">{i}</option>)}
                                                                    </select>
                                                                    <ChevronDown className="absolute right-0 top-4 text-white/40 pointer-events-none" size={16} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {step === 2 && (
                                                    <motion.div
                                                        key="step2"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-6"
                                                    >
                                                        {/* SECTION 3: PROBLEM */}
                                                        <div className="space-y-4">
                                                            <h3 className="font-display font-bold text-white text-xl tracking-wider uppercase border-b border-white/10 pb-2">Desafío</h3>
                                                            
                                                            <div className="group relative">
                                                                <label htmlFor="challenge" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold font-display ${focusedField === 'challenge' || formState.challenge ? '-top-6 text-xs text-[#CED600]' : 'top-0 text-lg text-white/40'}`}>¿Cuál es el principal problema a resolver? *</label>
                                                                <textarea id="challenge" name="challenge" required rows={2} value={formState.challenge} onChange={handleChange} onFocus={() => setFocusedField('challenge')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-[#CED600] resize-none min-h-[60px]" />
                                                            </div>

                                                            <div>
                                                                <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">¿Qué buscas? (Selecciona varios)</p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {NEEDS.map(need => (
                                                                        <button
                                                                            key={need}
                                                                            type="button"
                                                                            onClick={() => toggleNeed(need)}
                                                                            className={`px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-medium ${
                                                                                formState.needs.includes(need)
                                                                                    ? 'bg-[#CED600] border-[#CED600] text-[#272727]'
                                                                                    : 'bg-transparent border-white/20 text-white hover:border-white/40'
                                                                            }`}
                                                                        >
                                                                            {need}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* SECTION 4: BUDGET & TIMING */}
                                                        <div className="space-y-4">
                                                            <h3 className="font-display font-bold text-white text-xl tracking-wider uppercase border-b border-white/10 pb-2">Scope</h3>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                {/* Budget */}
                                                                <div>
                                                                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">Rango de Inversión (USD) *</p>
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        {BUDGETS.map(budget => (
                                                                            <button
                                                                                key={budget}
                                                                                type="button"
                                                                                onClick={() => setFormState(prev => ({ ...prev, budgetRange: budget }))}
                                                                                className={`px-3 py-2 rounded-lg border text-left transition-all duration-300 group relative overflow-hidden ${
                                                                                    formState.budgetRange === budget
                                                                                        ? 'bg-[#CED600] border-[#CED600] text-[#272727]'
                                                                                        : 'bg-transparent border-white/20 text-white hover:border-white/40'
                                                                                }`}
                                                                            >
                                                                                <span className="relative z-10 text-xs font-medium font-mono">{budget}</span>
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                {/* Timing */}
                                                                <div>
                                                                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">URGENCIA *</p>
                                                                    <div className="grid grid-cols-1 gap-2">
                                                                        {TIMING.map(time => (
                                                                            <button
                                                                                key={time}
                                                                                type="button"
                                                                                onClick={() => setFormState(prev => ({ ...prev, timing: time }))}
                                                                                className={`px-3 py-2 rounded-lg border text-center transition-all duration-300 group relative overflow-hidden flex items-center justify-center ${
                                                                                    formState.timing === time
                                                                                        ? 'bg-[#CED600] border-[#CED600] text-[#272727]'
                                                                                        : 'bg-transparent border-white/20 text-white hover:border-white/40'
                                                                                }`}
                                                                            >
                                                                                <span className="relative z-10 text-xs font-medium font-mono uppercase truncate">{time}</span>
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Error Message */}
                                        {status === 'error' && (
                                            <div className="text-red-400 text-sm text-center py-4">
                                                {errorMessage}
                                            </div>
                                        )}

                                        {/* Actions */}
                                        <div className="pt-4 flex justify-between items-center pb-4">
                                            {step === 2 ? (
                                                <button 
                                                    type="button" 
                                                    onClick={() => setStep(1)}
                                                    className="text-white/60 hover:text-white font-display font-bold uppercase tracking-widest text-sm transition-colors"
                                                >
                                                    ← Volver
                                                </button>
                                            ) : (
                                                <div></div> // Spacer
                                            )}

                                            <MagneticButton 
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="group relative px-12 py-6 bg-[#CED600] rounded-full flex items-center gap-6 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                            >
                                                <div className="flex items-center gap-4 relative z-10 w-full h-full">
                                                    {status === 'submitting' ? (
                                                        <Loader2 className="animate-spin text-[#272727]" />
                                                    ) : (
                                                        <>
                                                            <span className="font-display font-black text-[#272727] text-xl uppercase tracking-wider">
                                                                {step === 1 ? 'Siguiente' : 'Enviar'}
                                                            </span>
                                                            <ArrowUpRight className="text-[#272727] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </>
                                                    )}
                                                </div>
                                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                                            </MagneticButton>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
