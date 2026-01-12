
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Services from './pages/Services';
import Cases from './pages/Cases';
import MarketPaper from './pages/cases/MarketPaper';
import Inted from './pages/cases/Inted';
import Velvet from './pages/cases/Velvet';
import DesignSystem from './pages/DesignSystem';
import Assets from './pages/Assets';
import Logos from './pages/Logos';
import TestContact from './pages/TestContact';
import SmoothScroll from './components/SmoothScroll';
import ContactModal from './components/ContactModal';
import { ContactProvider } from './context/ContactContext';

const App: React.FC = () => {
  return (
    <ContactProvider>
      <SmoothScroll>
      <div className="w-full min-h-screen bg-canvas font-body mx-auto box-border relative">
        
        {/* Organic Background Blobs (Subtle) */}
        <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-lime/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-multiply"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-structure/40 blur-[100px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col">
          <Navbar />
          <main className="flex-grow">
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/casos" element={<Cases />} />
                <Route path="/casos/marketpaper" element={<MarketPaper />} />
                <Route path="/casos/inted" element={<Inted />} />
                <Route path="/casos/velvet" element={<Velvet />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/logos" element={<Logos />} />
       
             </Routes>
          </main>
        </div>
        <ContactModal />
      </div>
      </SmoothScroll>
    </ContactProvider>
  );
};

export default App;
