import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  strength?: number; // How strong the pull is (default: 0.5)
  range?: number; // Pixel radius to trigger the effect (default: 100)
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "", 
  onClick, 
  href,
  strength = 0.5,
  range = 100
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth "return to center" and movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Check if mouse is within magnetic range
      if (distance < range) {
        // Calculate pull (stronger when closer)
        // We want the button to move TOWARDS the mouse.
        // x = distanceX * strength
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        // Reset if out of range
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Optional: Reset on mouse leave window or specific container if needed
    // But since we track window mouse, we just check distance.

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [range, strength, x, y]);

  // Component Wrapper
  const Component = href ? motion.a : motion.button;
  const props = href ? { href, onClick } : { onClick };

  return (
    <div ref={ref} className="relative inline-block" style={{ zIndex: 50 }}>
        <Component
            {...props}
            className={className}
            style={{ x: springX, y: springY }}
        >
            {children}
        </Component>
    </div>
  );
};

export default MagneticButton;
