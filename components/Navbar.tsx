
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import BrandLogo from './BrandLogo';
import ButtonPrimary from './ButtonPrimary';
import { useContact } from '../context/ContactContext';

const Navbar: React.FC = () => {
  const { openContact } = useContact();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger a bit earlier for smoother feel
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const isAnchor = href.startsWith('#');
    
    if (isAnchor) {
        const targetId = href.substring(1);
        const scrollToTarget = () => {
             const element = document.getElementById(targetId);
             if (lenis && element) {
                 lenis.scrollTo(element, {
                     offset: 0,
                     duration: 1.5,
                     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                 });
             } else if (element) {
                 element.scrollIntoView({ behavior: 'smooth' });
             }
        };

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(scrollToTarget, 100);
        } else {
            scrollToTarget();
        }
    } else {
        navigate(href);
        if (lenis) {
            lenis.scrollTo(0, { duration: 0, immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }
  };

  const navLinks = [
    { name: 'nosotros', href: '/nosotros' },
    { name: 'servicios', href: '/servicios' },
    { name: 'casos', href: '/casos' },
  ];

  // Animation Variants
  const navVariants = {
    top: {
        width: "100%",
        maxWidth: "1600px",
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
        borderColor: "rgba(255, 255, 255, 0)",
        y: 0,
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem"
    },
    scrolled: {
        width: "90%",
        maxWidth: "1100px",
        backgroundColor: "rgba(39, 39, 39, 0.85)", // Charcoal Glass
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        y: 10,
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem"
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial="top"
          animate={isScrolled ? "scrolled" : "top"}
          variants={navVariants}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // "Swiss" ease
          className="pointer-events-auto flex justify-between items-center px-6 md:px-8 rounded-full border border-transparent"
        >
          
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group" 
            onClick={() => lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0,0)}
          >
            {/* 
                Logo Container 
                - Top: Dark (#272727)
                - Scrolled: Acid Lime (#CED600)
            */}
            <div className={`w-10 h-10 transition-colors duration-500 ${isScrolled ? 'text-[#CED600]' : 'text-[#272727] group-hover:text-[#CED600]'}`}>
                <BrandLogo className="w-full h-full" />
            </div>
            
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-[#272727]'} group-hover:text-[#CED600]`}>
                fomo.
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                    relative px-5 py-2 rounded-full font-display text-sm font-medium transition-all duration-300 group overflow-hidden
                    ${isScrolled ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-[#272727]'}
                `}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Subtle Hover Pill */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isScrolled ? 'bg-white/10' : 'bg-[#272727]/5'}`}></div>
              </a>
            ))}
          </div>

          {/* Action & Mobile */}
          <div className="flex items-center gap-4">
            <ButtonPrimary
                onClick={openContact}
                className="hidden md:flex text-sm py-3 px-6"
            >
              hablemos
            </ButtonPrimary>

            <button 
              className={`md:hidden p-3 rounded-full backdrop-blur-sm border transition-colors ${isScrolled ? 'text-white bg-white/10 border-white/10' : 'text-[#272727] bg-white/50 border-white/20'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative z-10">
                 {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full Screen Mobile Menu - Awwwards Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#272727] z-40 flex flex-col justify-center items-center pointer-events-auto"
          >
             {/* Background Noise for Texture */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

             <div className="flex flex-col items-center gap-2 relative z-10">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 50, skewY: 5 }}
                        animate={{ opacity: 1, y: 0, skewY: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                    >
                        <a 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="font-display font-bold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 hover:to-[#CED600] transition-all tracking-tighter cursor-pointer leading-[1.1]"
                        >
                        {link.name}
                        </a>
                    </motion.div>
                ))}
             </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-16 relative z-10"
              >
                  <button onClick={() => { setMobileMenuOpen(false); openContact(); }} className="bg-[#CED600] text-[#272727] font-display font-bold text-xl px-10 py-4 rounded-full lowercase cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300">
                    hablemos
                  </button>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
