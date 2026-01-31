import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';

import Showcase from '../components/Showcase';
import QuoteSeparator from '../components/QuoteSeparator';
import Workforce from '../components/Workforce';
import StickyStatement from '../components/StickyStatement';
import BrandMarquee from '../components/BrandMarquee';
import Insights from '../components/Insights';
import Closing from '../components/Closing';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const closingBgRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const workforceRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        
        // 1. GLOBAL DARK MODE CONTROLLER
        // Triggered by Workforce (Enter Dark Mode - Scrubbed for smoothness)
        gsap.to(closingBgRef.current, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: workforceRef.current,
                start: "top 75%", // Starts darkening as Workforce enters the viewport
                end: "top 25%",   // Fully dark when Workforce is well into view
                scrub: true
            }
        });

        // Triggered by Showcase (Exit Dark Mode - Scrubbed for smoothness)
        // This creates a smooth fade-out of the dark background as Showcase enters
        gsap.to(closingBgRef.current, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: showcaseRef.current,
                start: "center top", // Delayed fade out to keep corners visible against dark bg
                end: "bottom top",   // Fade out when Showcase is leaving
                scrub: true
            }
        });

        // 2. Closing Background Lifecycle (Fade In for Footer)
        gsap.to(closingBgRef.current, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: closingRef.current,
                start: "top 75%",
                end: "top 25%",
                scrub: true,
            }
        });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full bg-[#FAFAFA] min-h-screen">
      {/* GLOBAL DARK LAYER (Shared by QuoteSeparator, Workforce, StickyStatement & Closing) */}
      <div 
        ref={closingBgRef}
        className="fixed inset-0 z-0 pointer-events-none bg-[#272727]"
        style={{ opacity: 0 }}
      />

      <div className="relative z-10">
        <Hero />
        <div className="hidden md:block">
            <TechTicker />
        </div>
        
        <QuoteSeparator />
        
        <div ref={workforceRef}>
            <Workforce />
        </div>

        <StickyStatement />

        <div ref={showcaseRef}>
            <Showcase />
        </div>

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
