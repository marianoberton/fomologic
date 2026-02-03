import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Magnetic Effect Physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        
        // Calculate distance from center
        const distance = { x: clientX - center.x, y: clientY - center.y };
        
        // Apply magnetic pull (stronger when closer)
        x.set(distance.x * 0.35);
        y.set(distance.y * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    // Auto-show message delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "5491112345678"; // Replace with actual number
    const defaultMessage = "Hola! Quiero mejorar mi empresa con IA.";

    return (
        <div className="fixed bottom-8 right-8 z-[9999] pointer-events-auto flex flex-col items-end gap-4">
            
            {/* Pop-up Message Bubble */}
            <AnimatePresence>
                {(showMessage || isHovered) && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="bg-white text-black px-4 py-3 rounded-2xl rounded-br-none shadow-xl border border-white/20 font-manrope font-bold text-sm max-w-[200px] relative"
                    >
                        <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white clip-path-polygon-[0_0,100%_0,100%_100%]"></div>
                        <span className="relative z-10">¿Hablamos de tu próximo proyecto? 🚀</span>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowMessage(false);
                            }}
                            className="absolute -top-2 -left-2 bg-[#272727] text-white rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity"
                        >
                            <X size={10} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Magnetic Button Container */}
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ x: mouseX, y: mouseY }}
                className="relative group" // Standard pointer for accessibility
            >
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                >
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 rounded-full bg-[#CED600] opacity-20 animate-ping duration-[3s]"></div>
                    <div className="absolute inset-0 rounded-full bg-[#CED600] opacity-10 animate-ping duration-[3s] delay-700"></div>

                    {/* Main Button */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-[#CED600] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(206,214,0,0.3)] border border-[#CED600]/50 relative z-10 overflow-hidden"
                    >
                        {/* Liquid Hover Effect Overlay */}
                        <motion.div 
                            className="absolute inset-0 bg-white mix-blend-overlay"
                            initial={{ y: "100%" }}
                            animate={{ y: isHovered ? "0%" : "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        {/* WhatsApp Icon (Custom SVG for pixel perfection) */}
                        <svg 
                            viewBox="0 0 24 24" 
                            className={`w-8 h-8 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                            fill="currentColor"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" className="text-black" />
                        </svg>
                    </motion.div>

                    {/* Status Dot */}
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#1a1a1a] z-20"></div>
                </a>
            </motion.div>
        </div>
    );
};

export default WhatsAppWidget;
