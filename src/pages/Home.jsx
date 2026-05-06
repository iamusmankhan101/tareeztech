import React from 'react';
import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import Work from '../components/Work';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSummary />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
