
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const isAnchor = href.startsWith('#');
    
    if (isAnchor) {
      if (location.pathname !== '/') {
        // Navigate home then scroll
        navigate('/');
        // Wait for route change then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Just scroll
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // It's a route
      navigate(href);
      window.scrollTo(0, 0);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'manifiesto', href: '/#manifesto' }, // Explicitly go home for manifesto
    { name: 'nosotros', href: '/nosotros' },
    { name: 'servicios', href: '/servicios' },
    { name: 'casos', href: '/casos' },
    { name: 'design system', href: '/design-system' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 ease-out flex justify-between items-center px-6 md:px-8 rounded-full border border-transparent ${isScrolled ? 'bg-[#272727]/80 backdrop-blur-md border-b border-white/5 py-3 w-[95%] max-w-[1200px]' : 'bg-transparent py-4 w-full max-w-[1600px]'}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-accent-lime font-display font-bold text-lg pt-0.5 pb-0.5 border border-transparent">
            f
          </div>
          <span className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-ink'}`}>fomo.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-display text-sm font-medium transition-colors relative group tracking-wide cursor-pointer ${isScrolled ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-ink'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-accent-lime transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Action & Mobile */}
        <div className="flex items-center gap-4">
          <a href="#closing" onClick={(e) => handleNavClick(e, '#closing')} className="hidden md:flex bg-accent-lime text-ink font-display font-medium text-sm px-6 py-2 rounded-full hover:bg-white hover:text-ink transition-all duration-300 hover:shadow-[0_0_20px_rgba(206,214,0,0.4)] lowercase cursor-pointer">
            hablemos
          </a>

          <button 
            className={`md:hidden p-3 rounded-full backdrop-blur-sm border transition-colors ${isScrolled ? 'text-white bg-white/10 border-white/10' : 'text-ink bg-white/50 border-white/20'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-canvas z-40 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden flex flex-col justify-center items-center pointer-events-auto`}>
         {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display font-medium text-5xl mb-8 text-ink hover:text-accent-lime transition-colors tracking-tight cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a href="#closing" onClick={(e) => handleNavClick(e, '#closing')} className="mt-8 bg-accent-lime text-ink font-display text-lg px-10 py-5 rounded-full lowercase cursor-pointer">
            hablemos
          </a>
      </div>
    </div>
  );
};

export default Navbar;
