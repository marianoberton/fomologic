import React, { useEffect, useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Synchronize Lenis with GSAP ScrollTrigger
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Connect Lenis scroll event to GSAP ScrollTrigger
    // This ensures ScrollTrigger updates its calculations as Lenis scrolls
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.on('scroll', ScrollTrigger.update);
    }

    return () => {
      gsap.ticker.remove(update);
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  // Physics Engine Configuration
  // "Mercedes-Benz" Feel: Heavy start, smooth glide, substantial inertia.
  const lenisOptions = {
    duration: 1.5, // The "mass" of the scroll (higher = heavier)
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for luxury feel
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false, // Keep native touch for mobile (better UX usually)
    touchMultiplier: 2,
    wheelMultiplier: 1.2, // Slightly responsive but weighted
  };

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      autoRaf={false}
      options={lenisOptions} 
      className="lenis-scroll"
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
