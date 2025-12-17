import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Manifesto from '../components/Manifesto';
import Methodology from '../components/Methodology';
import Services from '../components/Services';

import Team from '../components/Team';
import Showcase from '../components/Showcase';
import BrandMarquee from '../components/BrandMarquee';
import Insights from '../components/Insights';
import Closing from '../components/Closing';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Manifesto />
      <Methodology />
      <Services />
      <Marquee />
      <Showcase />
      <Team />
      <BrandMarquee />
      <Insights />
      <Closing />
    </>
  );
};

export default Home;