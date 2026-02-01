import React, { useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import WorkforceHero from '../components/workforce/WorkforceHero';
import WorkforceGrid from '../components/workforce/WorkforceGrid';
import WorkforceCTA from '../components/workforce/WorkforceCTA';
import Closing from '../components/Closing';

const WorkforcePage: React.FC = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [lenis]);

  return (
    <div className="w-full min-h-screen bg-canvas">
      <WorkforceHero />
      <WorkforceGrid />
      <WorkforceCTA />
      <Closing />
    </div>
  );
};

export default WorkforcePage;
