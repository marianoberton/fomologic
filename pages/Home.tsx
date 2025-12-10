import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Manifesto from '../components/Manifesto';
import System from '../components/System';
import Team from '../components/Team';
import Showcase from '../components/Showcase';
import BrandMarquee from '../components/BrandMarquee';
import Closing from '../components/Closing';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Manifesto />
      <Marquee />
      <System />
      <Showcase />
      <Team />
      <BrandMarquee />
      <Closing />
    </>
  );
};

export default Home;