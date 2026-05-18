import React from 'react';
import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import Work from '../components/Work';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSummary />
      <Work />
      <Services />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
