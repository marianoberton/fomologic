import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import Manifesto from '../components/Manifesto';
import Methodology from '../components/Methodology';
import Services from '../components/Services';

import Team from '../components/Team';
import Showcase from '../components/Showcase';
import QuoteSeparator from '../components/QuoteSeparator';
import BrandMarquee from '../components/BrandMarquee';
import Insights from '../components/Insights';
import Closing from '../components/Closing';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const methodologyBgRef = useRef<HTMLDivElement>(null);
  const closingBgRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const servicesWrapperRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // 1. Methodology Background Lifecycle (Fade In -> Hold -> Fade Out)
        const methTl = gsap.timeline({
            scrollTrigger: {
                trigger: methodologyRef.current,
                start: "top 80%",
                endTrigger: servicesWrapperRef.current,
                end: "top 40%", 
                scrub: true,
            }
        });

        methTl.to(methodologyBgRef.current, { opacity: 1, duration: 0.1, ease: "none" }) // Fast Fade In
              .to(methodologyBgRef.current, { opacity: 1, duration: 0.8, ease: "none" }) // Hold Dark
              .to(methodologyBgRef.current, { opacity: 0, duration: 0.1, ease: "none" }); // Fast Fade Out

        // 2. Closing Background Lifecycle (Fade In)
        gsap.to(closingBgRef.current, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: closingRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
            }
        });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full bg-[#FAFAFA] min-h-screen">
      {/* METHODOLOGY DARK LAYER */}
      <div 
        ref={methodologyBgRef}
        className="fixed inset-0 z-0 pointer-events-none bg-[#272727]"
        style={{ opacity: 0 }}
      />

      {/* CLOSING DARK LAYER */}
      <div 
        ref={closingBgRef}
        className="fixed inset-0 z-0 pointer-events-none bg-[#272727]"
        style={{ opacity: 0 }}
      />

      <div className="relative z-10">
        <Hero />
        <TechTicker />
        <Manifesto />
        
        {/* Dark Zone 1 */}
        <div ref={methodologyRef}>
            <Methodology />
        </div>

        {/* Services Wrapper for Trigger */}
        <div ref={servicesWrapperRef}>
            <Services />
        </div>

        <QuoteSeparator />
        <Showcase />
        <Team />
        <BrandMarquee />
        <Insights />
        
        {/* Dark Zone 2 */}
        <div ref={closingRef}>
            <Closing />
        </div>
      </div>
    </main>
  );
};

export default Home;
