import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import { WORKFORCE_CARDS } from '../../constants/workforce';
import WorkforceAgentCard from './WorkforceAgentCard';
import WorkforceAgentModal from './WorkforceAgentModal';

gsap.registerPlugin(ScrollTrigger);

const WorkforceGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.workforce-page-card');
    
    gsap.fromTo(cards, 
      { 
        y: 100, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  const selectedAgent = WORKFORCE_CARDS.find(c => c.id === selectedAgentId) || null;

  return (
    <section ref={containerRef} className="w-full py-20 bg-canvas">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WORKFORCE_CARDS.map((card) => (
            <div key={card.id} className="workforce-page-card h-full">
              <WorkforceAgentCard 
                {...card} 
                onClick={() => setSelectedAgentId(card.id)}
                layoutId={`card-${card.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAgent && (
          <WorkforceAgentModal 
            onClose={() => setSelectedAgentId(null)} 
            agent={selectedAgent} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkforceGrid;
